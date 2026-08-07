// What people say, plus the peer-feedback numbers. Senior or identifiable
// people are attributed by role only, which is the safer default for a link
// anyone can open. Each quote carries an `attribution` you can dial up to a
// name for the private/presenter view if you choose. Launched-program metrics
// stay as-is. This is peer feedback, framed as testimonials, not a review.

export interface Quote {
  text: string;
  attribution: string;   // role-only by default
  weight?: "exec" | "leader" | "peer";
}

export const quotes: Quote[] = [
  {
    text: "Jared is legitimately one of my favorite people to work with here because he so effectively bridges development, platform vision, and what users actually need.",
    attribution: "Cross-functional partner, Product",
    weight: "peer",
  },
  {
    text: "Love the innovation we are deploying with the concierge team.",
    attribution: "EVP",
    weight: "exec",
  },
  {
    text: "I love the concept of a single AI-powered engagement platform for concierges.",
    attribution: "Senior Staff PM, Concierge",
    weight: "leader",
  },
  {
    text: "The quality of our product is stronger because of Jared's work.",
    attribution: "Cross-functional partner, Engineering",
    weight: "peer",
  },
  {
    text: "Jared creates a space of comfort, confidence, and strong team culture.",
    attribution: "Design teammate",
    weight: "peer",
  },
  {
    text: "He stays closely connected to both customers and data, and relentlessly advocates for more customer-centric experiences.",
    attribution: "Cross-functional partner, CX",
    weight: "peer",
  },
];

// The three strongest quotes, each shown on its own slide at large size. These
// lean on strategy, leadership, and cross-team influence. Attribution is a
// placeholder for now: drop in the real name and role when ready.
export interface FeaturedQuote {
  text: string;
  name: string;   // placeholder until confirmed
  role: string;   // placeholder until confirmed
}

export const featuredQuotes: FeaturedQuote[] = [
  {
    text: "Jared is legitimately one of my favorite people to work with here, because he so effectively bridges development, platform vision, and what users actually need.",
    name: "Megha A.",
    role: "Principal PM, Concierge",
  },
  {
    text: "A strong design thinker who asks thoughtful, objective questions, stays close to both customers and data, and relentlessly advocates for more customer-centric experiences.",
    name: "Lana B.",
    role: "CS Senior Manager, Concierge Service Delivery",
  },
  {
    text: "Jared always brings a clear point of view, anchored in design principles and the context of the business, and he delivers on time.",
    name: "Andrea B.",
    role: "Group Design Manager, VEP",
  },
];

// From a peer-feedback survey across 14 cross-functional partners spanning
// Design, Product, Development, Operations, and CX.
export const ratings = {
  source: "Peer feedback across 14 cross-functional partners",
  stats: [
    { value: "+96.3", label: "Net promoter score" },
    { value: "5.0", suffix: "/5", label: "Platform mindset" },
    { value: "4.9", suffix: "/5", label: "Strategy, data, advocacy" },
    { value: "4.7+", suffix: "/5", label: "Average, no rating below 4.7" },
  ],
};
