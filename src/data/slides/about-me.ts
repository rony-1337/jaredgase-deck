// The opening of the Panel Presentation: who I am, at home and at work.
// Laid out from "About me and home and work.pdf", reusing the overview's
// existing photos in /img/about.
import type { DeckSlide } from "./types";

const base = "/img/about";
const lb = "/img/about-logos";

export const slides: DeckSlide[] = [
  {
    layout: "center",
    title: "👋 Hi! I'm Jared.",
    lede: "Staff Product Designer @ Intuit based in San Diego, CA 🌴",
    comp: "hijared",
    notes:
      "I'm a Staff Product Designer at Intuit, based in San Diego. I have 15+ years in design, the last 6 at Intuit on the Virtual Expert Platform. I came up through brand and web work before moving into product, and these days I work mostly at the platform level.",
  },
  {
    eyebrow: "About me @ home",
    title:
      "A family-focused nerd who loves tech, creativity, and community. Most of my time at home is with my boys.",
    gallery: [
      {
        img: `${base}/about_family.jpg`,
        alt: "Jared and his family in Pokémon costumes",
        caption: "Dad of three energetic boys who love Baseball, Pokémon, and Nintendo.",
        logos: [`${lb}/fam_01_Nintendo-logo.png`, `${lb}/fam_02_Pokenom-logo.png`, `${lb}/fam_03_Padres-logo.png`],
      },
      {
        img: `${base}/about_pc-build.jpg`,
        alt: "A custom PC build in progress",
        caption: "Tech-loving nerd with an AA in Telecommunications.",
        logos: [`${lb}/nerd_01_Plex-logo.png`, `${lb}/nerd_02_Synology-logo.png`, `${lb}/nerd_03_UI-logo.png`],
      },
      {
        img: `${base}/about_501st.jpg`,
        alt: "Jared volunteering in 501st Legion costume",
        caption: "501st cosplayer who volunteers as a “bad guy doing good.”",
        logos: [`${lb}/troop_01_501st-logo.png`, `${lb}/troop_02_SDCC-logo.png`, `${lb}/troop_03_ISG-logo.png`],
      },
    ],
    notes:
      "At home I am a family-focused nerd. Three boys, so most nights are building something, playing something, or refereeing something. I build my own PCs, run the home network, and wired the house myself, which is where the tinkering instinct comes from. And I am a member of the 501st Legion, a Star Wars costuming group that does charity work, so I volunteer in costume as a bad guy doing good. The throughline is that I like making things and I like doing it with other people.",
  },
  {
    eyebrow: "About me @ work",
    title:
      "I stay active in the design community, co-leading creative programs and organizing events that bring designers together.",
    gallery: [
      {
        img: `${base}/about_design-trek.jpg`,
        alt: "SD Design Trek company visit",
        caption: "Co-Driver at SD DesignTrek, exploring design inside of local companies.",
        logos: [`${lb}/design_01_SD-Design-Trek-logo.png`, `${lb}/design_04_FoF-logo.png`],
      },
      {
        img: `${base}/about_creative-studio.jpg`,
        alt: "Creative Studio craft programming",
        caption: "Co-lead of VEP's Creative Studio, bringing speakers to Intuit's Design Community.",
      },
      {
        img: `${base}/about_speakeasy.jpg`,
        alt: "UX Speakeasy event at Intuit",
        caption: "Hosted a UX Speakeasy event at Intuit to support the SD design community.",
        logos: [`${lb}/design_03_UX-Speakeasy-logo.png`, `${lb}/design_02_SDXD-logo.png`],
      },
    ],
    notes:
      "Outside my own projects I stay close to the design community. I am a co-driver for SD Design Trek, which takes designers inside local companies to see how the work actually gets made. I co-lead Creative Studio for VEP, bringing speakers and craft programming to Intuit's design community, including TurboTax's Design VP. And I hosted a sold-out UX Speakeasy event at Intuit to support the San Diego design scene. I mention this because the same instinct shows up in how I work: I like connecting people and building the thing that helps everyone, not just my own team.",
  },
];
