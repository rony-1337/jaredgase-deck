// Identity, the one-line thesis, and the four doors. The mode list is the
// front-door content and the source of truth for the depth metaphor.

export const site = {
  name: "Jared Gase",
  title: "Staff Product Designer",
  location: "San Diego, CA",
  // Title stays accurate (Staff). The level case is made by the work, not a label.
  thesis: "I design the system, not just the screen.",
  intro:
    "Staff product designer on Intuit's expert platform. I take messy, multi-team problems and turn them into things that are durable, reusable, and scalable.",
  // Used in the footer and as fallback contact. Update before going live.
  links: {
    site: "https://jaredgase.com",
    email: "hello@jaredgase.com",
    linkedin: "https://www.linkedin.com/in/jaredgase",
    resume: "https://drive.google.com/file/d/1DflRzKDk46kOWANkKmHBWdBBpyoiTJd0/view?usp=drive_link",
  },
};

export interface Mode {
  slug: string;
  name: string;
  /** short label for the header wordmark and the Views dropdown. */
  navLabel: string;
  /** depth on the disclosure scale; the three static modes form a real
   *  sequence (1 to 3). Customize is the live one and sits apart. */
  depth: 1 | 2 | 3 | null;
  depthLabel: string;
  time: string;
  audience: string;
  blurb: string;
  href: string;
  live?: boolean;
}

export const modes: Mode[] = [
  {
    slug: "overview",
    name: "Portfolio Overview",
    navLabel: "Overview",
    depth: 1,
    depthLabel: "Breadth",
    time: "~7 min",
    audience: "Recruiters and first conversations",
    blurb:
      "Who I am, how I think, and the range of what I have worked on. High level, no deep dives.",
    href: "/overview",
  },
  {
    slug: "panel",
    name: "Panel Presentation",
    navLabel: "Panel",
    depth: 2,
    depthLabel: "Depth",
    time: "~15 min",
    audience: "Group interviews and stakeholder rooms",
    blurb:
      "My story inside and outside of work, what makes the platform unique, and my four strongest projects.",
    href: "/panel",
  },
  {
    slug: "case-studies",
    name: "Case Studies",
    navLabel: "Case Studies",
    depth: 3,
    depthLabel: "Deep",
    time: "~30 min",
    audience: "1:1s with designers and design leaders",
    blurb:
      "Full walk-throughs: context, the problem, my process, the calls I made, the tradeoffs, and the results.",
    href: "/case-studies",
  },
  {
    slug: "customize",
    name: "Customize",
    navLabel: "Customize",
    depth: null,
    depthLabel: "Live",
    time: "On the spot",
    audience: "Built live, at the start of a call",
    blurb:
      "Drop in the company, role, and job description. I build a tailored version on the spot from the same work.",
    href: "/customize",
    live: true,
  },
];
