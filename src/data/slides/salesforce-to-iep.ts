// Presentation slides for the Salesforce-to-IEP case study, mirroring the
// "Sr. Staff Designer Core Business Workflows" deck (pages 14 to 26).
// Each slide: image one side, eyebrow + title + high-level bullets the other,
// with speaker notes hidden in an accordion and mirrored to the presenter popup.
import type { DeckSlide } from "./types";

const base = "/img/projects/salesforce-to-iep";

export const slides: DeckSlide[] = [
  {
    eyebrow: "Situation",
    title: "Salesforce not working",
    lede: "Experts relied on outdated Salesforce workflows that slowed issue resolution.",
    bullets: [
      "Tools were unreliable and inconsistent",
      "Data often outdated or missing",
      "Workflows did not reflect real expert behavior",
      "Peak season failures impacted customer experience",
    ],
    comp: "grandpa",
    side: "right",
    notes:
      "Experts were struggling with outdated Salesforce workflows that didn't reflect real behavior. Tools were unreliable, data was inconsistent and fragmented, and the system created friction in moments where speed mattered most. TurboTax needed a more scalable, durable platform to support experts and protect the customer experience. I even drew this little Simpsons character.",
  },
  {
    eyebrow: "Situation",
    title: "Users and archetypes",
    lede: "Who the product experts are.",
    bullets: [
      "30k+ TurboTax experts across multiple archetypes",
      "High-volume virtual support roles",
      "Responsible for resolving complex technical and account issues",
      "Need reliable tools to deliver fast, accurate help",
    ],
    comp: "personas",
    side: "left",
    notes:
      "These experts handle complex tax, account, and technical issues, and they rely heavily on fast, accurate tools. Because we support multiple archetypes with different responsibilities and permissions, the platform needed to meet a wide range of needs without breaking under high load. Understanding these differences helped shape the foundations of the migration.",
  },
  {
    eyebrow: "Task",
    title: "Project goals",
    lede: "Lead E2E design to unify expert tooling inside IEP.",
    bullets: [
      "Replace Salesforce with a durable, scalable platform",
      "Improve workflows and reduce friction",
      "Align across multiple archetypes and partner teams",
      "Deliver capabilities before peak tax season",
      "Ensure no drop in expert performance or customer outcomes",
    ],
    comp: "goals",
    side: "right",
    notes:
      "My role was to lead E2E design for this transition, which meant improving workflows, ensuring consistency across domain and product experts and delivering a platform that could scale for millions of customer contacts. A big part of the task was aligning engineering, operations, service delivery, PMs, and leadership on a unified approach.",
  },
  {
    eyebrow: "Task",
    title: "Research and discovery",
    lede: "Deep research exposed workflow, data, and tooling gaps.",
    bullets: [
      "“Follow Me Homes” with experts",
      "Service blueprinting to map dependencies",
      "E2E journey mapping for expert task flows",
      "Identified breakpoints in Salesforce workflows",
      "Prioritized opportunities for IEP improvements",
    ],
    comp: "research",
    side: "left",
    notes:
      "We conducted Follow Me Homes (user interviews and observations). I also created service and experience blueprints to understand expert workflows. These artifacts helped us see where Salesforce wasn't working for these product experts and where IEP has the potential to grow. The research gave us clarity on pain points and directly guided prioritization and design decisions.",
  },
  {
    eyebrow: "Action",
    title: "Capability framework",
    lede: "Created a framework to evaluate every workflow and capability.",
    bullets: [
      "No enhancement: existing IEP capabilities ready to use",
      "Enhancement: needed strengthening for durability",
      "Net new: missing capabilities to be designed and built",
    ],
    comp: "framework",
    side: "right",
    notes:
      "To manage complexity for over 30+ workflows and capabilities, I created a capability readiness framework that defined which features were mature enough that they needed no enhancement, which needed some enhancement, and which were net new. This helped the core team plan using the same framework and stay aligned across multiple capability teams.",
  },
  {
    eyebrow: "Action",
    title: "E2E capability map",
    lede: "Built a unified view of all expert workflows using IDEAL.",
    bullets: [
      "Identified all capabilities experts touch during a call",
      "Defined ownership, maturity, risks, and dependencies",
      "A cross-team artifact that aligned PM, engineering, and leadership",
      "Served as roadmap and risk-management tool",
    ],
    comp: "capmap",
    side: "right",
    notes:
      "I built an E2E capability map using Intuit Customer Success's IDEAL framework, or what happens during a typical conversation with a customer (identify, define, explore, act, look back). This unified all workflows into a single view. This artifact clarified ownership, exposed dependencies, and helped leadership prioritize risks and resources. It became the central alignment tool for the entire migration.",
  },
  {
    eyebrow: "Action",
    title: "Design execution",
    lede: "Designed or enhanced dozens of expert capabilities.",
    bullets: [
      "Engagement creation",
      "Escalation workflows",
      "Global search",
      "Diagnostic look up",
      "Multi-tab",
      "Commerce features (Order, Refund, Billing, Voucher)",
      "Launchpad and onboarding workflows",
    ],
    img: `${base}/07_create-engagement-flow.gif`,
    side: "right",
    notes:
      "I designed or co-designed dozens of capabilities, ranging from escalation flows and diagnostics to engagement handling. Throughout this work, the focus was on durability and usability, improving expert efficiency while staying aligned with the design system and minimizing disruption for existing users. This also required a strong understanding of how data and context move across systems, so workflows could scale and support both day-to-day expert needs and emerging AI-powered capabilities.",
  },
  {
    eyebrow: "Action",
    title: "Innovation beyond migration",
    lede: "From parity to AI-powered expert support.",
    groups: [
      {
        label: "Baseline (Salesforce)",
        bullets: [
          "Manual Tier 1 to Tier 2 chat escalation",
          "No context carried over",
          "Experts re-entered known information",
          "Up to 2 minutes of delay per escalation",
        ],
      },
      {
        label: "Enhanced (IEP + AI)",
        bullets: [
          "Gen-AI self-help and de-escalation",
          "Automatic context and call summary",
          "Attribute-based routing to Tier 2",
          "Faster connections, fewer escalations",
        ],
      },
    ],
    comp: "assist",
    side: "right",
    notes:
      "While this project was a migration, we intentionally looked for opportunities to go beyond parity. One key example was Tier 1 to Tier 2 escalations, which in Salesforce required experts to manually re-enter information, causing delays and unnecessary handoffs. Instead of recreating that flow, we introduced an AI-powered experience in IEP using self-help, automatic call summarization, and context-aware routing. This significantly reduced friction, deflected avoidable escalations, and improved performance across all major KPIs. Making this work required a strong understanding of the underlying data model, since AI-driven summarization and routing only function when the system can trust the data.",
  },
  {
    eyebrow: "Action",
    title: "Validation and iteration",
    lede: "Tested and refined designs with real experts.",
    bullets: [
      "Multiple expert roundtable sessions",
      "Synthesized feedback across roles and partners",
      "Iterated to address common patterns",
      "Used AI-powered tooling (Reduct) to speed synthesis",
    ],
    img: `${base}/09_research-validation.jpg`,
    side: "left",
    notes:
      "We validated designs through multiple expert roundtables and synthesized feedback across sessions. This helped us refine workflows and ensure the solutions were practical. It also increased expert confidence ahead of rollout.",
  },
  {
    eyebrow: "Action",
    title: "Implementation",
    lede: "Partnered closely with engineering through build and launch.",
    bullets: [
      "Delivered detailed specs and edge cases",
      "Daily build reviews for accuracy",
      "Pre-prod testing with break attempts",
      "Created UAT scenarios with real experts",
      "Ensured readiness for high-load peak season",
    ],
    comp: "redlining",
    side: "right",
    notes:
      "I partnered closely with engineering, writing detailed specs and red lining, reviewing dev builds in pre-prod, and testing edge cases. I even helped with UAT. This hands-on approach ensured the workflows and capabilities were accurate, durable, and ready for high-volume production.",
  },
  {
    eyebrow: "Results",
    title: "High-impact launch with measurable improvements",
    stats: [
      { value: "100%", label: "of TurboTax product experts migrated to IEP" },
      { value: "-5%", label: "AHT reduction to 17.5 minutes, delivering millions in savings" },
      { value: "+1.1", label: "tNPS improvement, reflecting steady progress" },
      { value: "+8%", label: "Tools Readiness compared to Salesforce, reaching 82%" },
      { value: "40%", label: "fewer Tier 1 escalations year over year" },
      { value: "24%", label: "of issues deflected by gen-AI self-help before a human stepped in" },
    ],
    notes:
      "The migration was a success: 100% of TurboTax product experts are now in IEP, AHT (average handle time) improved, tNPS (net promoter score) went up, and Tools Readiness went up. Overall, experts described the new experience as faster, more reliable, and easier to work in.",
  },
  {
    eyebrow: "Results",
    title: "Impact and learnings",
    lede: "Strengthened the entire expert platform ecosystem.",
    bullets: [
      "Delivered durable, reusable capabilities",
      "Created frameworks still used for cross-BU work",
      "Helped validate IEP as the long-term expert platform",
      "Established scalable patterns for future archetypes",
    ],
    comp: "deck",
    side: "right",
    notes:
      "Beyond the migration, this work strengthened IEP as a long-term platform and created reusable frameworks now used across VEP. It demonstrated the value of durable design, strong cross-functional alignment, and designing for scale across multiple archetypes.",
  },
  {
    eyebrow: "Conclusion",
    title: "How I lead complex, multi-team platform work",
    bullets: [
      "Grounded in research",
      "Structured through frameworks",
      "Designed for durability with a platform mindset",
      "Executed with cross-functional alignment",
      "Measured through meaningful outcomes",
    ],
    comp: "conclusion",
    side: "right",
    notes:
      "My strength is combining domain knowledge, platform thinking, and experimentation to deliver durable outcomes.",
  },
];
