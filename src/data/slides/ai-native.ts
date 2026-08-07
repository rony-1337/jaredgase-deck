// Presentation slides for the AI Native IEP case study.
// Same structure as salesforce-to-iep: image or code-built composition on one
// side, eyebrow + title + high-level bullets on the other, plus speaker notes.
import type { DeckSlide } from "./types";

const base = "/img/projects/ai-native";

export const slides: DeckSlide[] = [
  {
    eyebrow: "Situation",
    title: "Experts fight their software",
    lede: "IEP was a static, manual platform layered together over years.",
    bullets: [
      "Domain experts kept ~7 tools open to support a single call",
      "Experts cleared cache and cookies 2.7 times a day just to keep IEP working",
      "No unified view, so context gathering ate into every call",
      "Intuit Assist sat in a fixed panel, disconnected from the workflow",
    ],
    img: `${base}/01_legacy-iep.gif`,
    side: "right",
    notes:
      "Before this work, IEP was a suite of disparate tools layered together over years. Experts spent a real share of every call navigating and wayfinding instead of focusing on the customer in front of them. Guidance, navigation, and workflow were three separate things the expert had to stitch together themselves. The swivel-chair was real, and so were the glitches.",
  },
  {
    eyebrow: "Situation",
    title: "Who the experts are",
    lede: "Two archetypes, one platform, very different needs.",
    bullets: [
      "Product Support experts resolving product, account, and technical issues",
      "Domain experts (CPAs and bookkeepers) providing tax and accounting expertise",
      "Different tools, permissions, and workflows per role",
      "Both losing call time to navigation instead of customers",
    ],
    comp: "archetypes2",
    side: "left",
    notes:
      "IEP serves two very different expert archetypes. Product Support experts handle product and technical issues, while Domain experts like CPAs and bookkeepers bring tax and accounting expertise. What works for one role or experience level doesn't work for another, which is why any new direction had to scale cleanly across both without forcing a one-size-fits-all model.",
  },
  {
    eyebrow: "Task",
    title: "Project goals",
    lede: "Evolve IEP from static and manual to AI-native.",
    bullets: [
      "Bring the work to the expert instead of the expert going to find it",
      "Reduce swivel-chair and time spent navigating",
      "Design a model that scales across both expert archetypes",
      "Push the platform beyond its third-peak baseline",
    ],
    comp: "workinto",
    side: "right",
    notes:
      "The goal was to evolve IEP from a static, manual platform into an AI-native one where the work comes to the expert. My role was E2E design lead on the DFY experience, taking the workspace from its baseline third-peak state to its next iteration. Less time navigating, more time with the customer.",
  },
  {
    eyebrow: "Task",
    title: "Design principles",
    lede: "Four principles, built from research, anchored every decision.",
    columns: [
      {
        icon: `${base}/04a_principle_outcome_target.svg`,
        title: "Outcomes, not outputs",
        blurb: "Build interfaces that not only show, but do.",
      },
      {
        icon: `${base}/04b_principle_at-hand.svg`,
        title: "At hand, never in the way",
        blurb: "Bring information to the expert when and where they need it.",
      },
      {
        icon: `${base}/04c_principle_hammer.svg`,
        title: "The hammer, not the house",
        blurb: "Every pixel empowers experts to confidently serve customers.",
      },
      {
        icon: `${base}/04d_principle_manual_screwdriver.svg`,
        title: "Design for imperfection",
        blurb: "AI won't always be right, so experts always have a path to take control.",
      },
    ],
    notes:
      "These four principles came straight from the research and anchored every call I made on the shell. They also gave cross-functional partners a shared language for the direction. The one I'll call out is design for imperfection, because it shows up later in how the whole flow handles weak AI guidance.",
  },
  {
    eyebrow: "Action",
    title: "The baseline shifts",
    lede: "Two shifts set the stage for the provocation.",
    bullets: [
      "Intuit Assist became a persistent Command Center inside the engagement",
      "Scattered tabs folded into a single starting point for all work",
      "Utilities moved into pop-out windows, freeing the expert's canvas",
      "Second-monitor support for tools like Telephony",
    ],
    img: `${base}/05_Command-center.gif`,
    side: "right",
    notes:
      "The starting point was a baseline third-peak iteration of the shell, mostly a layout rework. Two shifts mattered. First, Intuit Assist moved into the engagement as a persistent Command Center, the single hub and point of interaction for the agentic co-pilot. Second, utilities came out of the right rail into pop-out windows, giving experts control of their canvas. That control mattered more than we expected. Research later confirmed one size fits none.",
  },
  {
    eyebrow: "Action",
    title: "The plus, Dynamic Workflow Cards",
    lede: "My provocation: flip who does the navigating.",
    bullets: [
      "Actions come to the expert as cards, in the flow, in real time",
      "Cards are surfaced by what the customer is saying, not a fixed menu",
      "A dynamic workflow that builds itself as the call happens",
      "Each card carries a CTA, one at a time, never static",
    ],
    img: `${base}/06_dynamic-workflow-cards.gif`,
    side: "left",
    notes:
      "My contribution was the plus: Dynamic Workflow Cards. The legacy model assumed the expert did the navigating. I flipped it, so actions come to the expert as cards, triggered by the live conversation. I stress-tested it against three scenarios, including when the AI guidance is weak. When the system doesn't know, it says so. The expert always stays in control.",
  },
  {
    eyebrow: "Action",
    title: "The bet, validated by research",
    lede: "A provocation meant to stretch readiness, backed by 15 rounds of research.",
    bullets: [
      "Faster calls, far less swivel-chair, a foundation for agentic actions",
      "One model that scales across Product Support and Domain experts",
      "Co-pilot, not pilot: expert agency designed in, not assumed",
      "Guidance has a Goldilocks problem: too much gets ignored",
    ],
    comp: "research7",
    side: "left",
    notes:
      "This was a provocation meant to stretch readiness, not ship as-is. A research program ran in parallel, 15 rounds over five months. Two signals mattered most: experts welcome AI when they trust it, and guidance that's off-target gets ignored. One expert called it \"the mother-in-law you want to get rid of.\"",
  },
  {
    eyebrow: "Results",
    title: "The direction moved the roadmap",
    lede: "My designs didn't ship verbatim. They moved the platform.",
    bullets: [
      "Documented the model and aligned cross-functional partners on direction",
      "Pushed IEP from its third-peak state toward the next iteration",
      "AI Native IEP shipped as a program, piloted with 400 to 450 experts",
      "The platform became the new baseline, retiring the legacy UI",
    ],
    video: "https://player.vimeo.com/video/1199939174?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&pip=0&dnt=1",
    side: "right",
    notes:
      "My designs didn't ship verbatim, but they moved the platform toward its next iteration. AI Native IEP shipped as a program, piloted with hundreds of experts, and became the new baseline. Those outcomes belong to a big cross-functional effort. My contribution was the design leadership that shaped the direction.",
  },
  {
    eyebrow: "Conclusion",
    title: "How I push platforms forward",
    bullets: [
      "Grounded in research and real expert behavior",
      "Anchored by principles that become shared language",
      "Designed for imperfection, not the happy path",
      "Provocations that stretch readiness and move roadmaps",
    ],
    comp: "conclusion2",
    side: "right",
    notes:
      "This shows how I work at the Staff level. I don't just execute against a roadmap, I push on it. Bring the right action to the expert at the right moment, but the expert always makes the final call.",
  },
];
