// Shared types for the content model. Everything the site renders is data,
// so a persona preset or the live Customize builder can reassemble the same
// pieces at any depth without touching page code.

export type Audience =
  | "recruiter"
  | "panel"
  | "design-leader"
  | "hiring-manager"
  | "executive";

export type DomainTag =
  | "fintech"
  | "enterprise"
  | "smb"
  | "consumer-mobile"
  | "service-design"
  | "platform"
  | "ai-native"
  | "design-systems"
  | "hardware"
  | "brand-web";

export type SkillTag =
  | "systems"
  | "strategy"
  | "execution"
  | "research"
  | "influence"
  | "motion"
  | "accessibility"
  | "zero-to-one";

/** A number worth showing, kept in two phrasings so the right one can be
 *  surfaced for the audience (hard number live, relative on a shared link). */
export interface Metric {
  value: string;        // "17.5 min"
  label: string;        // "average handle time, down 5%"
  relative?: string;    // softer phrasing for a public link
}

export interface Project {
  slug: string;
  title: string;
  oneLine: string;            // the grid teaser, one sentence
  role: string;
  org: string;
  dates: string;
  sector: string;
  platform?: string;
  domain: DomainTag[];
  skills: SkillTag[];
  metrics: Metric[];
  /** copy at three altitudes */
  overviewBlurb: string;      // breadth view
  panelSummary: string[];     // a few lines for the panel
  /** deep STAR lives in the markdown body of the matching content file */
  caseStudy: boolean;         // true if a full case study exists
  featured: boolean;          // part of the default top-four panel slate
  order: number;              // default slate ordering
}
