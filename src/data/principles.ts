// The five design principles Jared authored for SalesTech, and the custom AI
// validators built so teams could check work against them. This is the
// org-scaling plus AI-fluency story in one place.

export const principles = {
  label: "Frameworks",
  title: "Five principles, and the AI that enforces them",
  intro:
    "I authored a set of durable design principles for our Salesforce work, adopted across teams as a shared way to make decisions. Each one comes with practical guidance, tradeoffs, and examples, paired with a pattern library so it is usable, not theoretical.",

  list: [
    { n: "01", name: "Platform first", note: "Solve it once, in a way every team can reuse." },
    { n: "02", name: "Build with what exists", note: "Reach for the existing capability before inventing a new one." },
    { n: "03", name: "Make it feel native", note: "It should feel like one product, not stitched-together tools." },
    { n: "04", name: "Inspire trust", note: "Clear ownership of data, defined permissions, no surprises." },
    { n: "05", name: "Design for tomorrow", note: "Leave room for where the platform is heading next." },
  ],

  ai: {
    heading: "Then I made them enforce themselves",
    body: "To get adoption without adding process, I built custom validators across ChatGPT, a Gemini Gem, and a Claude Project. A designer or PM can run a doc against the principles and get specific, actionable feedback before design even begins. The principles stopped being a poster and became a tool.",
  },
};
