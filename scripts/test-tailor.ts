/**
 * test-tailor.ts  ·  local harness to validate the Customize generator
 * ---------------------------------------------------------------------------
 * Proves the "brain" before any Netlify/UI plumbing. Add your key first:
 *   echo 'ANTHROPIC_API_KEY=sk-ant-...' >> .env.local
 * Then:
 *   npm run test:tailor
 * Pass a JD file to override the built-in sample:
 *   npm run test:tailor -- ./some-jd.txt
 */
import { readFileSync } from "node:fs";
import { buildSpec, type TailorInput } from "../src/lib/tailor/buildSpec.ts";

// minimal .env.local loader (avoids a dependency)
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}

const SAMPLE_JD = `Senior Web UX Designer — Qualcomm
We're looking for a senior designer to own end-to-end experiences across our
web platforms. You'll partner with cross-functional teams, work in a design
system at scale, and bring AI-native thinking to complex enterprise workflows.
Strong systems thinking, research-driven decisions, and the ability to influence
across many stakeholders are essential. Experience designing for large,
multi-team platforms and shipping durable, reusable components preferred.`;

const jdArg = process.argv[2];
const jdText = jdArg ? readFileSync(jdArg, "utf8") : SAMPLE_JD;

const input: TailorInput = {
  company: "Qualcomm",
  role: "Senior Web UX Designer",
  date: "Friday, August 7",
  audience: "hiring-manager",
  durationMin: 30,
  jdText,
};

console.log(`\nTailoring for ${input.company} · ${input.role} (${input.audience})…\n`);
const t0 = Date.now();
const spec = await buildSpec(input);
console.log(`generated in ${((Date.now() - t0) / 1000).toFixed(1)}s\n`);
console.log(`INTRO: ${spec.intro.headline}\n  ${spec.intro.subhead}\n`);
console.log(`EMPHASIS: ${spec.emphasis}\n`);
spec.projects.forEach((p) => {
  console.log(`#${p.rank}  ${p.slug}`);
  console.log(`   one-line: ${p.oneLine}`);
  console.log(`   goal:     ${p.goal}`);
  console.log(`   impact:   ${p.impact}`);
  console.log(`   metrics:  ${p.featuredMetrics.map((m) => `${m.value} (${m.label})`).join("  ·  ")}`);
  console.log("");
});
if (spec.notes.length) {
  console.log("VALIDATION NOTES (reverted/dropped for safety):");
  spec.notes.forEach((n) => console.log(`  - ${n}`));
}
