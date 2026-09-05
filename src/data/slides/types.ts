// Shared shape for case-study presentation slides (the PDF-style deck view).

export interface DeckSlideGroup {
  label: string;
  bullets: string[];
}

export interface DeckSlideStat {
  value: string;
  label: string;
}

export interface DeckSlideColumn {
  icon: string;
  title: string;
  blurb: string;
}

export interface DeckSlideGalleryItem {
  img: string;
  alt: string;
  caption: string;
  /** optional floating brand-logo bubbles that orbit this photo */
  logos?: string[];
}

export interface DeckSlide {
  /** accent kicker, e.g. "Situation", "Task", "Action", "Results". Omit to
   *  hide the kicker/counter row entirely (explainer decks). */
  eyebrow?: string;
  title: string;
  /** short lead-in line under the title */
  lede?: string;
  /** big display lines under the lede, e.g. "Durable. Reusable. Scalable." */
  display?: string[];
  /** "full" puts the headline on top and the figure full width beneath;
   *  "center" stacks the figure over centered copy */
  layout?: "full" | "center";
  /** plain high-level bullets */
  bullets?: string[];
  /** labeled bullet groups (e.g. Baseline vs Enhanced), used instead of bullets */
  groups?: DeckSlideGroup[];
  /** big-number stats row; a stats slide renders full width with no figure */
  stats?: DeckSlideStat[];
  /** icon/title/blurb columns; renders full width with no figure (principles) */
  columns?: DeckSlideColumn[];
  /** photo/caption columns; renders full width with no figure (about me) */
  gallery?: DeckSlideGalleryItem[];
  /** embedded video (e.g. Vimeo player URL) shown in the figure position */
  video?: string;
  /** image url; null renders a labeled placeholder box */
  img?: string | null;
  /** placeholder note shown when img is null: expected filename + description */
  ph?: string;
  /** named code-built composition (layered, animated pieces) rendered instead
   *  of img; see SlideComp.astro for the available names */
  comp?: string;
  /** which side the figure sits on (copy takes the other side) */
  side?: "left" | "right";
  /** speaker notes: hidden accordion on the slide + presenter popup. Omit on
   *  decks that do not carry notes (the Present control hides itself then). */
  notes?: string;
}
