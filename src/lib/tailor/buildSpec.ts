/**
 * buildSpec.ts  ·  the Customize "brain"
 * ---------------------------------------------------------------------------
 * Turns a job description into a tailored presentation spec, resume-tailor
 * style: SELECT + RANK + REPHRASE + BRAND from approved content only. The model
 * may re-emphasize and reword what is already true; it may never invent a fact,
 * a metric, an employer, or a date. Enforcement is belt-and-suspenders:
 *   1. The prompt states the rule and gives ONLY the catalog as ground truth.
 *   2. validateSpec() drops unknown project slugs, matches every metric value
 *      verbatim against the source, and reverts any rewritten field that
 *      introduces a number not present in that project's source text.
 */
import Anthropic from "@anthropic-ai/sdk";
import catalog from "./catalog.json" with { type: "json" };

export type Audience =
  | "recruiter"
  | "panel"
  | "design-leader"
  | "hiring-manager"
  | "executive";

export interface TailorInput {
  company: string;
  role: string;
  date?: string;
  audience: Audience;
  durationMin: number; // meeting length in minutes — drives how much to pull in
  jdText: string;
}

/** meeting length -> how many projects and how deep to go */
export function planForDuration(durationMin: number): {
  maxProjects: number;
  depth: "tight" | "standard" | "deep";
} {
  if (durationMin <= 15) return { maxProjects: 2, depth: "tight" };
  if (durationMin <= 30) return { maxProjects: 3, depth: "standard" };
  if (durationMin <= 45) return { maxProjects: 4, depth: "standard" };
  return { maxProjects: 4, depth: "deep" };
}

export interface TailorProject {
  slug: string;
  rank: number;
  oneLine: string;
  goal: string;
  impact: string;
  featuredMetrics: { value: string; label: string; relative?: string }[];
}

export interface TailorSpec {
  company: string;
  role: string;
  date: string;
  audience: Audience;
  emphasis: "breadth" | "business" | "craft" | "systems";
  intro: { headline: string; subhead: string };
  projects: TailorProject[];
  generatedAt: string;
  notes: string[]; // validation notes (what was reverted/dropped), for transparency
}

type CatalogProject = (typeof catalog.projects)[number];
const bySlug = new Map<string, CatalogProject>(
  catalog.projects.map((p) => [p.slug, p]),
);

const MODEL = "claude-opus-5";
const EFFORT = (process.env.CUSTOMIZE_EFFORT ?? "medium") as
  | "low"
  | "medium"
  | "high";
const MAX_PROJECTS = 4;

// numbers we care about guarding: 24%, 17.5, 40, +1.1, 30,000, 2.7x, etc.
const numberRe = /[+-]?\d[\d,]*(?:\.\d+)?%?x?/gi;
// normalize a number token for comparison: lowercase, drop thousands commas and
// a leading + sign, so "30,000" == "30000" and "+1.1" == "1.1".
const normNum = (t: string) => t.toLowerCase().replace(/,/g, "").replace(/^\+/, "");

/**
 * Every number token in `text` must appear as a WHOLE number token in `source`
 * (not merely as a digit-substring). Strict on purpose: a false revert just
 * falls back to the approved source copy, whereas a false accept could put an
 * invented figure on screen.
 */
function numbersGrounded(text: string, source: string): boolean {
  const srcSet = new Set((source.match(numberRe) ?? []).map(normNum));
  for (const tok of text.match(numberRe) ?? []) {
    if (!srcSet.has(normNum(tok))) return false;
  }
  return true;
}

function sourceBlob(p: CatalogProject): string {
  return [
    p.title,
    p.oneLine,
    p.goal,
    p.impact,
    p.overviewBlurb,
    ...(p.panelSummary ?? []),
    ...p.metrics.flatMap((m) => [m.value, m.label, m.relative ?? ""]),
  ].join(" \n ");
}

const SYSTEM = `You tailor Jared Gase's interview presentation to a specific job, the way a good resume-tailor works: you SELECT which projects to show, RANK them by fit, and REPHRASE the framing copy to echo the job's language and priorities — but you NEVER invent facts.

Hard rules (a violation makes the whole run unusable in front of a hiring panel):
- Work ONLY from the PROJECT CATALOG provided below. It is the complete and only source of truth.
- You may reword, compress, and re-emphasize existing copy. You may NOT introduce any company, product, employer, date, role, metric, or claim that is not in the catalog.
- Metric VALUES are locked. Never alter a number. Only choose WHICH metrics to feature (the ones most relevant to this job) and you may reword a metric's label, but the value stays exactly as given.
- Keep rewritten copy truthful to the source meaning. Same facts, better aligned wording. No embellishment.
- Include the number of projects that fits the MEETING LENGTH stated in the request (a target count is given). Best fit first (rank 1 = strongest fit for this JD). Fewer, stronger projects for short meetings; more for long ones.

Return ONLY a JSON object (no prose, no code fences) with this exact shape:
{
  "emphasis": "breadth" | "business" | "craft" | "systems",
  "intro": { "headline": string, "subhead": string },
  "projects": [
    { "slug": string, "oneLine": string, "goal": string, "impact": string,
      "featuredMetrics": [ { "value": string, "label": string } ] }
  ]
}
- "slug" must be one of the catalog slugs exactly.
- "intro.headline" is a short branded title for the run; "subhead" one sentence. Ground both in the catalog; use no numbers unless they appear in the catalog.
- Order "projects" by rank (best first).`;

function userMessage(input: TailorInput, maxProjects: number, depth: string): string {
  return [
    `COMPANY: ${input.company}`,
    `ROLE: ${input.role}`,
    `AUDIENCE: ${input.audience}`,
    `MEETING LENGTH: ${input.durationMin} minutes — target about ${maxProjects} project(s), depth: ${depth}.`,
    ``,
    `JOB DESCRIPTION:`,
    input.jdText.trim(),
    ``,
    `PROJECT CATALOG (the only allowed source of truth):`,
    JSON.stringify(catalog.projects, null, 2),
  ].join("\n");
}

function parseJson(text: string): any {
  const cleaned = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  return JSON.parse(cleaned);
}

/** enforce the safety rules on whatever the model returned */
export function validateSpec(raw: any, input: TailorInput, maxProjects = MAX_PROJECTS): TailorSpec {
  const notes: string[] = [];
  const emphasisSet = ["breadth", "business", "craft", "systems"];
  const emphasis = emphasisSet.includes(raw?.emphasis) ? raw.emphasis : "systems";

  // intro: revert to a safe default if it smuggled in a number not in any source
  const introBlob = catalog.projects.map(sourceBlob).join(" \n ");
  let headline = String(raw?.intro?.headline ?? "").trim();
  let subhead = String(raw?.intro?.subhead ?? "").trim();
  if (!headline || !numbersGrounded(headline, introBlob)) {
    headline = "Selected work";
    notes.push("intro.headline reverted (empty or ungrounded number)");
  }
  if (!subhead || !numbersGrounded(subhead, introBlob)) {
    subhead = "A few projects, each as the goal, my impact, and the numbers.";
    notes.push("intro.subhead reverted (empty or ungrounded number)");
  }

  const projects: TailorProject[] = [];
  const seen = new Set<string>();
  for (const p of Array.isArray(raw?.projects) ? raw.projects : []) {
    const src = bySlug.get(p?.slug);
    if (!src) {
      notes.push(`dropped unknown project "${p?.slug}"`);
      continue;
    }
    if (seen.has(src.slug)) continue;
    seen.add(src.slug);
    const blob = sourceBlob(src);

    const safeField = (val: unknown, fallback: string, name: string): string => {
      const s = String(val ?? "").trim();
      if (!s) return fallback;
      if (!numbersGrounded(s, blob)) {
        notes.push(`${src.slug}.${name} reverted (ungrounded number)`);
        return fallback;
      }
      return s;
    };

    // metric values must match the source exactly; labels may be reworded but
    // fall back to the source label when the value is matched
    const srcValues = new Map(src.metrics.map((m) => [m.value, m]));
    const featuredMetrics = (Array.isArray(p.featuredMetrics) ? p.featuredMetrics : [])
      .map((m: any) => {
        const match = srcValues.get(String(m?.value));
        if (!match) {
          notes.push(`${src.slug}: dropped metric "${m?.value}" (not in source)`);
          return null;
        }
        // value is verbatim; the label may be reworded but must not introduce
        // a number that isn't in the source, else fall back to the source label
        let label = String(m?.label ?? "").trim();
        if (!label || !numbersGrounded(label, blob)) {
          if (label) notes.push(`${src.slug}: metric label reverted (ungrounded number)`);
          label = match.label;
        }
        return { value: match.value, label, relative: match.relative };
      })
      .filter(Boolean) as TailorProject["featuredMetrics"];

    projects.push({
      slug: src.slug,
      rank: projects.length + 1,
      oneLine: safeField(p.oneLine, src.oneLine, "oneLine"),
      goal: safeField(p.goal, src.goal, "goal"),
      impact: safeField(p.impact, src.impact, "impact"),
      featuredMetrics: featuredMetrics.length
        ? featuredMetrics
        : src.metrics.slice(0, 3).map((m) => ({ value: m.value, label: m.label, relative: m.relative })),
    });
    if (projects.length >= maxProjects) break;
  }

  if (!projects.length) {
    throw new Error("no valid projects in generated spec");
  }

  return {
    company: input.company,
    role: input.role,
    date: input.date ?? "",
    audience: input.audience,
    emphasis,
    intro: { headline, subhead },
    projects,
    generatedAt: new Date().toISOString(),
    notes,
  };
}

export async function buildSpec(input: TailorInput): Promise<TailorSpec> {
  const { maxProjects, depth } = planForDuration(input.durationMin);
  const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    output_config: { effort: EFFORT },
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: userMessage(input, maxProjects, depth) }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error(`no text in response (stop_reason: ${response.stop_reason})`);
  }
  return validateSpec(parseJson(textBlock.text), input, maxProjects);
}
