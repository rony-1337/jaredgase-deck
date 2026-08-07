// Persona presets. The Customize builder starts from one of these, then the
// JD reorders projects and swaps copy on top. A preset is just
// (altitude + project order + emphasis), the same idea as the resume-tailor skill.

import type { Audience } from "./types";

export interface Persona {
  id: Audience;
  name: string;
  altitude: "overview" | "panel" | "deep";
  emphasis: "breadth" | "business" | "craft" | "systems";
  projectOrder: string[]; // project slugs, best-fit first
  note: string;           // how to pitch to this room
}

export const personas: Persona[] = [
  {
    id: "recruiter",
    name: "Recruiter or early screen",
    altitude: "overview",
    emphasis: "breadth",
    projectOrder: ["salesforce-to-iep", "concierge", "ai-strategy", "salesforce-design-principles"],
    note: "Wants a fast read on range and seniority. Keep it high level, save the deep numbers.",
  },
  {
    id: "panel",
    name: "Panel or stakeholder room",
    altitude: "panel",
    emphasis: "systems",
    projectOrder: ["salesforce-to-iep", "concierge", "salesforce-design-principles", "ai-strategy"],
    note: "Mixed audience. Lead with the platform story, then the four projects at a glance.",
  },
  {
    id: "design-leader",
    name: "Design leader, 1:1",
    altitude: "deep",
    emphasis: "craft",
    projectOrder: ["salesforce-to-iep", "concierge"],
    note: "Go deep on one or two. Show process, the calls, the tradeoffs, and the work that did not ship.",
  },
  {
    id: "hiring-manager",
    name: "Hiring manager",
    altitude: "panel",
    emphasis: "systems",
    projectOrder: ["salesforce-to-iep", "salesforce-design-principles", "concierge", "ai-strategy"],
    note: "Connect the work to their problems. Treat business units as clients and reusable patterns as the product.",
  },
  {
    id: "executive",
    name: "Executive",
    altitude: "panel",
    emphasis: "business",
    projectOrder: ["concierge", "salesforce-to-iep", "ai-strategy", "salesforce-design-principles"],
    note: "Outcomes first. Revenue influence, scale, and platform direction, kept short.",
  },
];
