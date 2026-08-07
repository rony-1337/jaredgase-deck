// "How I think" pillars. Pulled from the three areas in the H2 deck, but
// rewritten to sound like a person instead of a performance review.

export interface Pillar {
  label: string;     // mono kicker
  title: string;
  body: string;
}

export const pillars: Pillar[] = [
  {
    label: "Strategy",
    title: "I work past the screen",
    body: "I look for the business opportunity and shape where the work should go before the requirements show up. That means defining the future state early, not waiting to be handed a spec.",
  },
  {
    label: "Systems",
    title: "I build for reuse, not for one screen",
    body: "Everything I ship has to be durable, reusable, and scalable. I set the shared principles, patterns, and frameworks that help a whole team make good calls without adding process.",
  },
  {
    label: "Influence",
    title: "I get teams pointed the same way",
    body: "I bring product, design, and leadership in early, turn scattered opinions into one narrative people can rally around, and stay a stabilizing voice when things get ambiguous.",
  },
  {
    label: "AI fluency",
    title: "I build my own tools",
    body: "AI is part of how I work, not a talking point. I build custom validators and assistants so my teams move faster and quality stays high, and I prototype motion and flows directly in code.",
  },
];
