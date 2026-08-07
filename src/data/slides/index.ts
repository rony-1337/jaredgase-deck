// Case studies that have a full presentation-slide walkthrough. Pages fall
// back to the auto-generated ProjectDeepDive when a slug has no entry here.
import type { DeckSlide } from "./types";
import { slides as salesforceToIep } from "./salesforce-to-iep";
import { slides as aiNative } from "./ai-native";
import { slides as concierge } from "./concierge";
import { slides as humanInterventionAgent } from "./human-intervention-agent";

export type { DeckSlide } from "./types";

export const deckSlides: Record<string, DeckSlide[]> = {
  "salesforce-to-iep": salesforceToIep,
  "ai-native": aiNative,
  "concierge": concierge,
  "human-intervention-agent": humanInterventionAgent,
};

// Cover treatment for the case-study page's Summary panel: logo lockups, a
// tagline, the org/role/length/sector/platform table (from frontmatter), and
// the product laptop bleeding off the right edge.
export interface DeckCover {
  laptop: string;
  logoPrimary: string;    // IEP lockup
  logoSecondary: string;  // TurboTax lockup
  tagline: string;
}

export const deckCovers: Record<string, DeckCover> = {
  "salesforce-to-iep": {
    laptop: "/img/projects/salesforce-to-iep/00_iep-laptop.png",
    logoPrimary: "/img/projects/salesforce-to-iep/00_iep-logo.svg",
    logoSecondary: "/img/projects/salesforce-to-iep/00_tt-logo.svg",
    tagline: "Transforming support with scalability and reliability.",
  },
  "ai-native": {
    laptop: "/img/projects/ai-native/00_iep-laptop.png",
    logoPrimary: "/img/projects/ai-native/00_iep-logo.svg",
    logoSecondary: "/img/projects/ai-native/00_intuit-logo.svg",
    tagline: "The work comes to the expert, not the other way around.",
  },
  "concierge": {
    laptop: "/img/projects/concierge/00_concierge-laptop.png",
    logoPrimary: "/img/projects/concierge/00_tt-logo.svg",
    logoSecondary: "/img/projects/concierge/00_salesforce-logo.svg",
    tagline: "Turning interest into action.",
  },
  "human-intervention-agent": {
    laptop: "/img/projects/human-intervention-agent/00_agentic-iep-laptop.png",
    logoPrimary: "/img/projects/human-intervention-agent/00_iep-logo.svg",
    logoSecondary: "/img/projects/human-intervention-agent/00_tt-logo.svg",
    tagline: "AI answers first, humans when it matters.",
  },
};
