import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each project is one markdown file. Frontmatter holds the structured data the
// grid, panel, and presets read. The markdown body is the deep case study,
// rendered only in Case Studies depth.

const metric = z.object({
  value: z.string(),
  label: z.string(),
  relative: z.string().optional(),
});

// "What I delivered" highlight: an icon (filename under /img/projects/icons),
// a short title, and a blurb. Four per case study, shown as a 4-column row.
const highlight = z.object({
  icon: z.string(),
  title: z.string(),
  blurb: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    oneLine: z.string(),
    role: z.string(),
    org: z.string(),
    dates: z.string(),
    sector: z.string(),
    platform: z.string().optional(),
    domain: z.array(z.string()),
    skills: z.array(z.string()),
    metrics: z.array(metric).default([]),
    // data-first case-study summary (slide 1). Optional so older entries that
    // have not been filled in still build.
    goal: z.string().optional(),
    impact: z.string().optional(),
    delivered: z.array(z.string()).default([]),
    // short paragraph version of "what I delivered" (the case-study Delivered slide)
    deliveredSummary: z.string().optional(),
    // case-study "Summary" section, and the four "What I delivered" highlights
    summary: z.string().optional(),
    highlights: z.array(highlight).default([]),
    overviewBlurb: z.string(),
    panelSummary: z.array(z.string()).default([]),
    caseStudy: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
