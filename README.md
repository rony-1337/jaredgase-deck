# deck.jaredgase.com

An audience adaptive interview presentation for Jared Gase, Staff Product
Designer. Built in Astro. One content model, shown at three depths plus a live
builder. See `BUILD_PLAN.md` for the thinking and the roadmap.

## Quick start

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to dist/
npm run preview    # serve the build locally
```

Node 18.20.8, 20.3.0, or 22 and up.

## Where things live

- `src/data/` is the content the site reads: who I am, the pillars, the platform
  explainer, validation, the personas, and the four modes.
- `src/content/projects/` is one markdown file per project. Frontmatter holds
  the structured data; the body is the deep case study.
- `src/components/` holds the reusable pieces. `DepthChooser` is the signature.
- `src/pages/` maps to routes: `/`, `/overview`, `/panel`, `/case-studies`,
  `/case-studies/[slug]`, `/customize`, `/present`.

## Editing content

- Change a project: edit its file in `src/content/projects/`. Frontmatter for
  the data, markdown below for the case study.
- Reorder the default panel slate: change `order` and `featured` in frontmatter.
- Add a project: copy an existing file, keep the same frontmatter shape.
- Change bio, pillars, validation, personas: edit the matching file in
  `src/data/`.

## Notes

- The whole site is unlisted: noindex header, robots disallow, no sitemap. Share
  by link.
- The Customize and Presenter pages are working shells. The live generation is
  the next build step (`BUILD_PLAN.md`).
- Fonts load from Google for now. Self hosting is a later polish step.
- Replace the monogram with a real headshot at `public/img/jared.jpg`.
