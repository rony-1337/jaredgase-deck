// The Panel Presentation deck: what VEP is and why it is unique.
// Laid out from "What is VEP and why is it unique.pdf" — no eyebrows on this
// set, so that row stays hidden; speaker notes drive the presenter popup.
import type { DeckSlide } from "./types";

export const slides: DeckSlide[] = [
  {
    layout: "full",
    title:
      "Intuit's platform that powers all expert-based customer help experiences across every business unit.",
    comp: "vepbreakdown",
    notes:
      "VEP acts like an internal agency but also a platform team. Whenever a business unit like TurboTax wants to add a help feature, such as connecting customers with experts, they turn to VEP. We support hundreds of capabilities for our BUs and also own Intuit Expert Portal (IEP), a CRM-style platform that connects millions of customers with experts.",
  },
  {
    title: "Why VEP is unique",
    lede: "We work both vertically within our platform teams and horizontally across every business unit.",
    comp: "vepchart",
    side: "right",
    notes:
      "Most product teams focus on the vertical. They work up and down these different teams (service delivery, operations, expert network, customer success). VEP does that, but also has to do this for every BU, which is the horizontal work here. And that is what makes VEP one of the most complex orgs at Intuit.",
  },
  {
    title: "A platform mindset",
    lede: "Everything we design must be...",
    display: ["Durable.", "Reusable.", "Scalable."],
    comp: "platformmindset",
    side: "right",
    notes:
      "Capabilities cannot be BU-specific. They must work across all BUs, support different archetypes, handle peak traffic, and stay flexible enough for possible externalization. Platform durability is the foundation of our design decisions.",
  },
  {
    title: "Why this matters",
    lede: "Six years of designing for an ecosystem, not a single product.",
    comp: "ecosystem",
    side: "right",
    notes:
      "This is the context for everything I did at Intuit. Every project I led had to scale across business units, integrate with IEP, and support multiple archetypes. Nothing I designed lived in isolation. That's what made VEP work uniquely complex and strategic, and it's what shaped me into a platform thinker. The keyword is ecosystem.",
  },
];
