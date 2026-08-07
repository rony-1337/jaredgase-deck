# deck.jaredgase.com · build plan

An audience adaptive interview presentation. One content model, shown at three
static depths plus a live builder. The site itself is the proof of systems
thinking and AI fluency, so it stays restrained and lets the work talk.

## The core idea

Not three separate decks. One set of content, viewed at different altitudes.
A "mode" is just altitude plus project order plus copy variant. Building it
this way is the same platform thinking the case studies are about.

## The four doors

| Mode | Depth | For | Built |
|------|-------|-----|-------|
| Overview | breadth, ~2 min | recruiters, first contact | static |
| Panel | depth, ~15 min | group interviews, stakeholders | static |
| Case Studies | deep, ~30 min | 1:1 with designers and leaders | static |
| Customize | live, on the spot | the start of a call | live builder |

There is also a Presenter view (`/present`), the dark control surface for a
second screen while the audience sees the clean view.

## Design direction

- Restraint is the craft signal. One accent (electric blue `#1e54e8`).
- Type trio: Hanken Grotesk for structure and UI, Source Serif 4 for long form
  reading, JetBrains Mono for labels and data.
- Signature: the depth metaphor. The four doors carry a small depth meter, and
  the structure encodes progressive disclosure rather than decorating it.
- Public reading modes are light and editorial. Presenter and live build go
  dark, like a control room.

## Content rules (keep these true)

- Title is Staff Product Designer. The level case is made through the work, not
  a label.
- Jared leads design ON the Virtual Expert Platform. He did not build it.
  Concierge is the genuine zero to one, built inside the platform.
- 15 plus years in design overall. The AI native work is recent.
- Write "for QuickBooks (IES)" if IES comes up.
- Keep metrics in both absolute and relative phrasings (the relative one is the
  softer phrasing for a public link).
- No em dashes, en dashes, or any dash as punctuation. Commas, periods, and
  parentheses instead.
- Senior or identifiable quotes are attributed by role only, since the link is
  shareable.

## Structure

```
src/
  data/            identity, bio, pillars, vep, validation, principles,
                   personas, the four modes, shared types
  content/
    projects/      one markdown file per project
                   (frontmatter = data, body = the deep case study)
  components/      DepthChooser (signature), ProjectCard, ProjectGrid,
                   ValidationStrip, Pillars, Stat, header, footer
  layouts/Base     noindex, fonts, theme, skip link
  pages/           index, overview, panel, case-studies, customize, present
scripts/tailor.ts  JD to spec generator (stub)
```

## Status

Done: the static spine. Overview, Panel, Case Studies (index plus per project
deep dives from markdown), the landing chooser, and dark shells for Customize
and Presenter. Content is a real first pass in Jared's voice.

Stub, wires up next:
- `scripts/tailor.ts` JD to spec generator.
- Customize live build. The form and the demo log exist; connect the button to
  the generator.
- Presenter sync and a real running timer tied to the segment.

## Next steps

1. Swap the monogram for a real headshot at `public/img/jared.jpg`.
2. Confirm every number and quote, then decide which to soften behind a public
   link versus show live.
3. Wire up Customize:
   - serverless function calls the model, API key stays in `.env`, never in the
     browser
   - constrain output to a JSON schema of project slugs and enums, no prose
   - validate returned slugs against the real project set before rendering
   - password gate the builder
   - JD by URL only works when the text is in the page source. Greenhouse,
     Lever, Ashby, and plain career pages work. Workday and LinkedIn usually do
     not. Paste stays the always visible fallback.
4. Self host the fonts for speed and to drop the Google dependency.
5. Deploy to Vercel or Netlify on the subdomain. Keep noindex, robots disallow,
   and no sitemap so it stays link only.

## Run it

```
npm install
npm run dev      # local
npm run build    # production build to dist/
```
