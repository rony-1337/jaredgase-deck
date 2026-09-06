/**
 * build-catalog.ts
 * ---------------------------------------------------------------------------
 * Reads the approved project frontmatter from src/content/projects/*.md and
 * writes netlify/lib/catalog.json — the ONLY ground truth the Customize
 * generator is allowed to work from. Regenerate whenever project copy changes:
 *   npm run build:catalog   (also runs in prebuild)
 *
 * We deliberately ship a trimmed, presentation-relevant view of each project
 * (framing copy + tags + metrics), never the raw markdown body.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const projectsDir = join(root, "src/content/projects");
const outFile = join(root, "src/lib/tailor/catalog.json");

interface CatalogProject {
  slug: string;
  title: string;
  oneLine: string;
  role: string;
  org: string;
  dates: string;
  sector: string;
  domain: string[];
  skills: string[];
  goal: string;
  impact: string;
  overviewBlurb: string;
  panelSummary: string[];
  metrics: { value: string; label: string; relative?: string }[];
  caseStudy: boolean;
  order: number;
}

const files = readdirSync(projectsDir).filter((f) => f.endsWith(".md"));
const projects: CatalogProject[] = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  const { data } = matter(readFileSync(join(projectsDir, file), "utf8"));
  // only include projects meant to be presented (skip lightweight extras)
  if (!data.caseStudy && !data.featured) continue;
  projects.push({
    slug,
    title: data.title ?? "",
    oneLine: data.oneLine ?? "",
    role: data.role ?? "",
    org: data.org ?? "",
    dates: data.dates ?? "",
    sector: data.sector ?? "",
    domain: data.domain ?? [],
    skills: data.skills ?? [],
    goal: data.goal ?? "",
    impact: data.impact ?? "",
    overviewBlurb: data.overviewBlurb ?? "",
    panelSummary: data.panelSummary ?? [],
    metrics: (data.metrics ?? []).map((m: any) => ({
      value: m.value,
      label: m.label,
      relative: m.relative,
    })),
    caseStudy: Boolean(data.caseStudy),
    order: data.order ?? 99,
  });
}

projects.sort((a, b) => a.order - b.order);

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify({ projects }, null, 2) + "\n");
console.log(`build-catalog: wrote ${projects.length} projects -> ${outFile}`);
