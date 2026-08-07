// Presentation slides for the TurboTax Concierge (Zero to One) case study.
// Same structure as the other case-study decks: image or code-built
// composition on one side, eyebrow + title + bullets on the other.
import type { DeckSlide } from "./types";

const base = "/img/projects/concierge";

export const slides: DeckSlide[] = [
  {
    eyebrow: "Situation",
    title: "A role that didn't exist",
    lede: "TurboTax was evolving from digital-only to a hybrid model.",
    bullets: [
      "AI, human experts, and in-person services blending into one motion",
      "Concierge: the front door between a lead and a TurboTax expert",
      "No structured intake layer, no seller archetype, no tooling",
      "Most sales happened post-auth, inside a product not built for pre-sale",
    ],
    video: "https://www.youtube.com/embed/U3XJ5Z_sx1M?autoplay=1&mute=1&controls=0&start=9&loop=1&playlist=U3XJ5Z_sx1M&modestbranding=1&rel=0&playsinline=1&cc_load_policy=0&iv_load_policy=3&enablejsapi=1",
    side: "right",
    notes:
      "TurboTax was shifting from a digital-only product to a hybrid model, and at the center of that shift was a net-new role called Concierge. A white-glove layer, not a tax expert, but the person who makes sure you end up with the right one. Before this, the role simply didn't exist. No archetype, no tooling, no service layer. That was the starting point.",
  },
  {
    eyebrow: "Situation",
    title: "Activate Experts",
    lede: "Concierge is the front end of a growth engine.",
    bullets: [
      "TurboTax held a small share of a massive Assisted market",
      "Tens of millions filing through CPAs, tax stores, and competitors",
      "The premise: turn the expert network into an active growth engine",
      "Concierge turns interest into action",
    ],
    comp: "activate",
    side: "left",
    notes:
      "Concierge sits inside a broader initiative called Activate Experts, aimed at making TurboTax the go-to destination for Assisted filers. The bet was turning the expert network from a passive service layer into an active growth engine, and Concierge is the front end of that engine.",
  },
  {
    eyebrow: "Task",
    title: "Project goals",
    lede: "Design a new seller archetype from the ground up.",
    bullets: [
      "Define the archetype, the E2E experience, the tooling, and the service layer",
      "Cover both virtual and in-store channels from day one",
      "Enable a new role to drive conversion at scale",
      "Lay the foundation for an AI-native future",
    ],
    video: "https://player.vimeo.com/video/1199939256?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&pip=0&dnt=1",
    side: "right",
    notes:
      "My role was E2E design lead for the entire archetype. Not redesigning an existing experience, building one from nothing. Service blueprints, flows, Salesforce tooling, research, and forward-looking provocations. And designing for both virtual and in-store from the start, not retrofitting one onto the other later.",
  },
  {
    eyebrow: "Action",
    title: "Service design before screens",
    lede: "Before touching a single screen, I mapped the full E2E flow from lead intake through expert handoff. Both archetypes, every decision point, every place it could break. I paired it with a capability map flagging what was net-new versus an enhancement, and it became the shared artifact the whole quad reacted to.",
    comp: "flowdeck",
    side: "left",
    notes:
      "Before screens, I mapped the full E2E flow across both channels and built a capability map from lead intake through handoff. Getting the quad aligned on the journey first is how you avoid expensive rework later. Everyone reacts to the same artifact, and disagreements surface early when they're cheap to fix. The flow also exposed the handoff to experts as a broken seam, which meant we designed for it explicitly instead of finding out in production.",
  },
  {
    eyebrow: "Action",
    title: "Rethinking a CRM for conversation",
    lede: "The challenge wasn't UI. It was the logic underneath.",
    bullets: [
      "Salesforce with a custom AppFabric layer, Concierge Connect",
      "Single-surface notes, always visible, shared through handoff",
      "Conversation-first flow: discovery before routing",
      "Automated expert matching that shows its work",
    ],
    comp: "crm",
    side: "right",
    notes:
      "The Concierge experience runs through Salesforce with a custom layer on top. The real design challenge was rethinking the information architecture of a CRM that was never built for a conversation-first sales role. Every key decision traced back to what we heard from Concierges: persistent notes, discovery before branching, and automated matching with transparent fallback so trust holds when the system overrides a choice.",
  },
  {
    eyebrow: "Action",
    title: "One flow, two archetypes",
    lede: "Virtual and in-store Concierges do the same core job, so they share most of the same flow. They split only where the work genuinely differs: in-store needs wayfinding and walk-in handling, while virtual runs outbound campaigns and needs pipeline visibility.",
    comp: "duo",
    side: "right",
    notes:
      "The two archetypes share most of the core flow but diverge deliberately where the work is actually different. Designing for both from the start, rather than building one and retrofitting the other, was a bet that paid off when the program scaled to 400+ Concierges across both channels.",
  },
  {
    eyebrow: "Action",
    title: "Validated through longitudinal research",
    bullets: [
      "Three in-person roundtables with the same Concierges over five months",
      "Moderated every session and built the concepts we tested",
      "Context carried session to session, so feedback sharpened each time",
      "They loved it, and a lot of what shipped came from them",
    ],
    video: "https://player.vimeo.com/video/1199939255?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&pip=0&dnt=1",
    side: "left",
    notes:
      "I validated the direction through in-person roundtables with active Concierges, the same small group across three sessions so each one built on the last. I moderated all three and built the provocations we tested. The sentiment was strong throughout, and just as importantly, their feedback shaped real decisions in the product. A lot of what we shipped came straight from these sessions.",
  },
  {
    eyebrow: "Results",
    title: "A new archetype, proven at scale",
    stats: [
      { value: "53%", label: "of conversions influenced by Concierge" },
      { value: "38%", label: "ET2S against a 14% target" },
      { value: "47%", label: "of customers net-new to TurboTax, highest of any AE channel" },
      { value: "400+", label: "virtual and retail Concierges by May 2026" },
      { value: "4x", label: "outbound capacity per Concierge" },
      { value: "3x", label: "faster starts for warm transfers vs. appointments" },
    ],
    notes:
      "The conversion story was strong: ET2S nearly tripled its target and almost half of customers were net-new to TurboTax, higher than any other Activate Experts channel. Volume was the miss, not the design. By May 2026 the program had scaled to 400+ Concierges across both channels, with quadrupled outbound capacity and positive lift across all three holdout campaigns. A role that didn't exist became a proven growth engine in about seven months.",
  },
  {
    eyebrow: "Future",
    title: "The provocation nobody asked me to make",
    bullets: [
      "Concierge shipped on Salesforce for speed, the right call to get zero to one out the door",
      "But the other archetypes, Product and Domain experts, all live on Intuit's own AI-native platform, IEP",
      "The longer Concierge stays on Salesforce, the deeper the hooks and the harder the eventual move",
      "To convince leadership, I built the case and mockups to move Concierge to IEP before that debt compounds",
      "Tested it with real Concierges, and the response was pull, not push",
    ],
    img: `${base}/09_AI-Native-IEP.gif`,
    side: "right",
    notes:
      "No one asked me to do this. We shipped on Salesforce for speed, but the long play was moving Concierge to IEP like the other archetypes. My argument was timing: the longer we wait, the harder the move. So I built the case for leadership and tested it with Concierges. They wanted it.",
  },
  {
    eyebrow: "Conclusion",
    title: "How I build zero to one",
    bullets: [
      "Service design before screens, so alignment comes cheap",
      "Decisions traceable to evidence, not opinion",
      "Research that compounds over time with the people doing the work",
      "Built to scale across archetypes from day one",
      "Provocations that connect today's work to the platform's future",
    ],
    comp: "dotloop",
    side: "right",
    notes:
      "This project shows how I approach zero to one at the Staff level. Define the role before the tooling, map the service before the screens, and let longitudinal research compound. And even while shipping on Salesforce, keep one eye on the platform future, so today's decisions don't box in tomorrow's.",
  },
];
