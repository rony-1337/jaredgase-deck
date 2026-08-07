// Presentation slides for the Agentic (AI)-Powered Support case study.
// Same structure as the other case-study decks: image or code-built
// composition on one side, eyebrow + title + bullets on the other.
import type { DeckSlide } from "./types";

const base = "/img/projects/human-intervention-agent";

export const slides: DeckSlide[] = [
  {
    eyebrow: "Situation",
    title: "Experts helping experts, badly",
    lede: "When Tier 1 experts get stuck, they escalate to Tier 2 SMEs. That path was broken.",
    bullets: [
      "Tier 1 experts handle billing, account, and product issues live with customers",
      "Tier 2 SMEs are the deep-knowledge layer Tier 1 leans on when stuck",
      "The old omni-chat carried zero context between them",
      "Up to 2 minutes answering questions the system already knew, while the customer waited",
    ],
    comp: "hiabubbles",
    side: "right",
    notes:
      "TurboTax support runs on a two-tier model. Tier 1 experts work live with customers, and when they get stuck they escalate to Tier 2 subject matter experts. The escalation path was the problem. The old chat carried no context, so Tier 1 spent up to two minutes re-entering things the system already knew, with a customer sitting on the line the whole time.",
  },
  {
    eyebrow: "Situation",
    title: "Research made it painfully clear",
    lede: "Follow Me Homes with Tier 1 experts exposed the real cost.",
    bullets: [
      "Watched experts manually re-enter information mid-call",
      "Every escalation stacked delay onto AHT and customer wait time",
      "The frustration wasn't the escalating, it was the wasted effort",
    ],
    img: `${base}/02_research_empathy-fmh.png`,
    side: "left",
    notes:
      "I ran Follow Me Home sessions with Tier 1 experts to watch the escalation happen in real time. It was painfully clear. Experts weren't frustrated about needing help, they were frustrated that getting help meant feeding the system information it should already have. That wasted effort was the design target.",
  },
  {
    eyebrow: "Task",
    title: "Project goals",
    lede: "Rebuild the escalation path inside IEP, with AI in front.",
    bullets: [
      "Reduce friction and automate context sharing between tiers",
      "Integrate gen-AI de-escalation so self-help gets a shot first",
      "Ship as part of the Salesforce to IEP migration, ready for peak",
      "Build it durable, so other archetypes can use it later",
    ],
    comp: "hiasupport",
    side: "right",
    notes:
      "The task was rebuilding Tier 1 to Tier 2 escalation as a native IEP capability, with Intuit Assist integrated in front. The strategy was de-escalation: give AI self-help the first shot, and when a human is still needed, pass the context automatically. And like everything on the platform, build it once, durable enough for other archetypes to pick up.",
  },
  {
    eyebrow: "Action",
    title: "De-escalation by design",
    lede: "Two paths in, one strategy: AI answers before humans connect.",
    bullets: [
      "Ask a question first, or request a Tier 2 directly, both routes offer self-help before connecting",
      "Intuit Assist generates the call summary and confirms it with the expert",
      "Context passes automatically, so Tier 2 starts fully informed",
      "Tier 2 treats the Tier 1 expert as their customer, even joining the same screen share",
    ],
    comp: "deescalation",
    side: "left",
    notes:
      "The flow has two entry points, but the strategy is the same: before connecting a human, Intuit Assist offers an answer from the knowledge base. If that's not enough, it generates a call summary, confirms it with the expert, and hands off with full context. No re-typing, no cold starts. The Tier 2 expert picks up already knowing the situation.",
  },
  {
    eyebrow: "Action",
    title: "Built at the platform level",
    lede: "No custom code, no one-offs.",
    bullets: [
      "Every component built durable within the design system",
      "Documented every state, edge case, and inversion pattern for engineering",
      "Designed so any archetype in IEP can reuse the pattern, not just product support",
    ],
    comp: "redlining",
    side: "right",
    notes:
      "This was a brand-new experience for IEP, so documentation mattered as much as design. Every state and edge case was specced for engineering, and every component was built at the platform level using the design system. Nothing custom, nothing one-off. The pattern was designed from day one to be reused by other archetypes.",
  },
  {
    eyebrow: "Action",
    title: "Testing like I meant it",
    lede: "Partnered with engineering and QA through every build.",
    bullets: [
      "Daily scrums with dev, reviewing builds for pixel-perfect accuracy",
      "Tested pre-prod through edge cases and break attempts",
      "Created UAT scenarios with real experts, pass/fail at every step",
    ],
    img: `${base}/06_vep-testing.jpg`,
    side: "left",
    notes:
      "I stayed close through the build. Daily reviews with engineering, pre-production testing where I tried to break it, and UAT scenarios I wrote for real experts covering both typical and complex situations. By the time this shipped, it had been stress-tested from every angle.",
  },
  {
    eyebrow: "Results",
    title: "Proven small, scaled to everyone",
    stats: [
      { value: "24%", label: "of escalations deflected during the 20% cohort test" },
      { value: "20 min", label: "saved per deflected escalation" },
      { value: "40%", label: "year-over-year reduction in Tier 1 escalations" },
      { value: "8%", label: "Tier 1 escalation rate after full launch" },
      { value: "100%", label: "of product experts on the new experience within weeks" },
      { value: "80+", label: "Expert Tooling PRS, consistently" },
    ],
    notes:
      "We launched to 20% of Tier 1 product experts to run water through the pipes. The results were strong enough that we scaled to 100% a few weeks later. Escalations dropped 40% year over year, AHT came down, tNPS went up, and experts rated the tooling consistently above 80.",
  },
  {
    eyebrow: "Conclusion",
    title: "Design is never done",
    bullets: [
      "Research that finds the real problem, not the assumed one",
      "De-escalation as strategy: AI first, humans when it matters",
      "Platform-durable components, never one-offs",
      "Still monitoring, iterating, and extending the pattern to other archetypes",
    ],
    comp: "infinity",
    side: "right",
    notes:
      "This project is how I like to ship AI: grounded in research, strategic about when AI leads and when humans do, and built durable at the platform level. And the work doesn't stop at launch. We kept watching the data and iterating, and because it was built platform-level, the same pattern is extending to other archetypes across IEP.",
  },
];
