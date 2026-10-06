# WINC Lab website

Static site for the Wireless Intelligent Networking and Computing (WINC) Lab, led by Dr. Hong Chen
(University of New Brunswick, ECE). Built with Astro 7 + Tailwind CSS 4, deployed to GitHub Pages
from the `winclab/winclab.github.io` repo (served at the domain root, no `base` path).

## Commands

- `npm install`: install dependencies (Node >= 22.12)
- `npm run dev`: dev server at http://localhost:4321 (Astro 7 runs it as a background daemon; stop with `npx astro dev stop`)
- `npm run build`: production build to `dist/`. Run this to validate content: schema errors fail the build.
- `npm run preview`: serve the built `dist/`

## Structure

```
astro.config.mjs            site URL (SITE_URL), the only place the domain is set
.github/workflows/deploy.yml  withastro/action → actions/deploy-pages on push to main
public/                     served as-is: favicon, images/{pi,people,gallery,sponsors,research,brand}
src/
  content.config.ts         zod schemas for the 4 content collections
  content/
    publications/*.md       one file per paper (frontmatter only)
    people/*.md             one file per person; body = short bio
    news/*.md               one file per item; body = 1–2 sentence Markdown summary
    gallery/gallery.yaml    list of photos (file() loader; each item needs unique `id`)
  lib/pi.ts                 getPI(): the people entry with role: pi
  data/
    site.ts                 lab name, address, nav
    join.ts                 Join Us page: openings, topics, requirements, benefits, how to apply, FAQs
    research.ts             summary, mission, research directions, interests, research program
                            (goal, figure, challenge/direction pairs), acknowledgements
    sponsors.ts             "Supported by" logos
  styles/global.css         Tailwind import, @theme colour tokens (unb-red, unb-dark, …), .btn/.card/etc.
  layouts/BaseLayout.astro  <head>, header, footer
  components/               Header (mobile menu script), Footer, PageHeader, HeroGraphic (home hero SVG), DirectionFigure (inline SVG
                            illustration per research direction),
                            NewsList, PersonCard (member card), PIFeature (featured PI card),
                            ProfileLinks (icon/button links from person fields), PublicationItem, PlaceholderBadge
  pages/                    index, about, research, pi, people, gallery, news, join, 404
```

## Conventions

- **Placeholders:** unfinished text contains `[PLACEHOLDER]`; collection entries use `placeholder: true`
  (renders a yellow badge). Find all remaining work with `grep -rn "PLACEHOLDER\|placeholder: true" src public`.
- **Images** live in `public/images/...` and are referenced by absolute path (`/images/people/jane-doe.jpg`).
  No `astro:assets` optimization, which keeps editing simple for non-developers. Keep photos under ~500 KB.
- **Colours:** use theme tokens (`text-unb-dark`, `bg-unb-light`, `border-unb-line`, …), not raw hex values.
  Buttons: `class="btn btn-primary"` or `class="btn btn-outline"` (both classes are needed).
- **Internal links** are root-relative (`/research`). No base path is needed because the site is served at the root.
- **Single source of truth for people:** the PI is the `role: pi` entry in `src/content/people/`
  (`hong-chen.md`). Its frontmatter (incl. `summary` for the People page) feeds the PI page, People card, footer, Home/About/Join text; its
  Markdown body is the full PI bio. Read it with `getPI()` from `src/lib/pi.ts`, never hard-code PI details.
- **Photo cropping:** people photos use `object-cover` with `object-position` from the `photoPosition`
  field (default `50% 20%`, which keeps faces in portraits). Adjust per person instead of editing images.
- New content should follow the same pattern: data in `src/content/` or `src/data/`, pages only render it.
- People page group order and headings are defined in `src/pages/people.astro` (`groups`); valid
  `role` values are in the schema in `src/content.config.ts`.
- No UI framework; the only client JS is the mobile menu toggle in `Header.astro` and the publication type
  filter on `research.astro`.
- Page split: About = who we are, research directions, interests. Research = current program, publications,
  acknowledgements (kept last). Avoid duplicating content between them.
- Keep pages accessible: alt text on images, `aria-current` on nav, visible focus styles.

- **Research program disclosure:** only the headline challenge/direction pairs from the lab poster are
  published. Do not add the detailed numbered sub-points (PI's request).
- **Do not use the semantic-communications transmitter/receiver diagram from the poster** (it is used on
  another lab's site). The research program architecture figure in `public/images/research/` is fine to use.
- Text marked `[DRAFT]` (LEO satellite, agentic AI directions) was written for the site and needs PI review.

## Adding content (quick reference)

| What | Where | Notes |
|---|---|---|
| Publication | `src/content/publications/<year>-<slug>.md` | `title, authors[], venue, year, type` required; `doi` without `https://doi.org/` |
| Person | `src/content/people/<first-last>.md` + photo in `public/images/people/` | `role` ∈ pi, postdoc, phd, masters, undergrad, visiting, alumni; `order` sorts within role |
| Alumni | change `role: alumni`, optionally add `now:` | |
| News | `src/content/news/<yyyy-mm>-<slug>.md` | `title, date`; home shows the latest 3, `/news` shows all by year |
| Gallery photo | add an item to `src/content/gallery/gallery.yaml` + image in `public/images/gallery/` | unique `id` |
| Sponsor | `src/data/sponsors.ts` + logo in `public/images/sponsors/` | |
| Openings / Join text | `src/data/join.ts` | set `openings: []` when nothing is open |
| Custom domain | change `SITE_URL` in `astro.config.mjs` and add `public/CNAME` | |

Always run `npm run build` after content changes to catch schema errors.
