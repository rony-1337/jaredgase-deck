/**
 * tailor.ts  ·  STATUS: stub, not wired yet
 * ---------------------------------------------------------------------------
 * Turns a job description into a presentation spec: which projects, in what
 * order, at what altitude, with which copy variant. Same idea as the
 * resume-tailor skill, pointed at the deck instead of a PDF.
 *
 * Hard rule that makes this safe to run live in front of a panel:
 *   the model only SELECTS, RANKS, and BRANDS from approved content.
 *   It never writes a claim, a metric, or a sentence of its own.
 *   Every word on screen already exists in src/content and src/data.
 *
 * Two ways this runs:
 *   1. Build time   ·  `npm run tailor` writes a spec file, page reads it.
 *   2. Server side  ·  a serverless function does the same on the call.
 *      The API key lives in .env and never ships to the browser.
 *
 * Wiring checklist lives in BUILD_PLAN.md.
 */

import type { Audience } from "../src/data/types";

export interface TailorInput {
  company: string;
  role: string;
  audience: Audience;
  jdText: string; // already fetched or pasted; fetching is the caller's job
}

export interface TailorSpec {
  company: string;
  role: string;
  altitude: "overview" | "panel" | "deep";
  emphasis: "breadth" | "business" | "craft" | "systems";
  projectOrder: string[]; // approved project slugs, best fit first
  copyVariant: string;
  generatedAt: string;
}

/**
 * TODO: replace the stub body with a real call.
 * Suggested shape:
 *   1. Load personas + the project set (slugs, tags, one-liners only).
 *   2. Ask the model to score each project against the JD and pick a persona.
 *   3. Constrain output to a JSON schema of slugs + enums. No prose fields.
 *   4. Validate every returned slug exists before returning. Drop anything else.
 */
export async function buildSpec(input: TailorInput): Promise<TailorSpec> {
  throw new Error(
    "tailor.buildSpec is a stub. See BUILD_PLAN.md, section 'Wire up Customize'."
  );
}

// Allow `npm run tailor` to run without crashing while still a stub.
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("tailor.ts is a stub. Nothing to generate yet. See BUILD_PLAN.md.");
}
