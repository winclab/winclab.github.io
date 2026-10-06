# WINC Lab Website

The website of the **Wireless Intelligent Networking and Computing (WINC) Lab**, Department of
Electrical and Computer Engineering, University of New Brunswick.

**Live site:** https://winclab.github.io

This guide is for lab members who need to update the site. **You do not need to know web development:**
nearly all updates mean editing or adding a small text file. When you push your change to the `main`
branch, the site rebuilds and goes live automatically within about 2 minutes.

---

## Contents

1. [Quick start: edit on GitHub (no setup)](#1-quick-start-edit-on-github-no-setup)
2. [Run the site on your computer](#2-run-the-site-on-your-computer)
3. [Adding and updating content](#3-adding-and-updating-content)
4. [Finding leftover placeholders](#4-finding-leftover-placeholders)
5. [How deployment works](#5-how-deployment-works)
6. [Using a custom domain](#6-using-a-custom-domain)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Quick start: edit on GitHub (no setup)

For small changes like a new publication or a news item:

1. Open the repo on GitHub and go to the folder (e.g. `src/content/publications/`).
2. Click **Add file → Create new file** (or open an existing file and click the ✏️ pencil icon).
3. Copy the format of an existing file, make your edits, and click **Commit changes**.
4. Check the **Actions** tab: a green ✅ means the site is updated. A red ❌ means something in your
   file is wrong; click the failed run to see which file and field.

To upload a photo: open the right folder under `public/images/`, then click **Add file → Upload files**.

## 2. Run the site on your computer

Recommended for bigger changes, so you can preview before publishing.

**Requirements:** [Node.js](https://nodejs.org) 22.12 or newer, and Git.

```bash
git clone https://github.com/winclab/winclab.github.io.git
cd winclab.github.io
npm install          # first time only
npm run dev          # preview at http://localhost:4321 (updates as you save)
```

The dev server keeps running in the background. Stop it with `npx astro dev stop`.

Before pushing, run:

```bash
npm run build        # checks every content file; fails with a clear message if something is wrong
```

Then commit and push to `main`:

```bash
git add .
git commit -m "Add 2026 ICC paper"
git push
```

## 3. Adding and updating content

Content files use **frontmatter**, a block of `key: value` lines between two `---` lines at the top
of the file. Text values containing a colon (`:`) must be wrapped in quotes.

### Publications: `src/content/publications/`

Create one file per paper, named like `2026-chen-federated-edge.md`:

```markdown
---
title: "Federated Edge Inference with Heterogeneous Devices"
authors: ["A. Student", "B. Collaborator", "H. Chen"]
venue: "IEEE International Conference on Communications (ICC)"
year: 2026
type: conference          # journal | conference | preprint | book-chapter | thesis | other
doi: "10.1109/ICC.2026.1234567"   # optional, without https://doi.org/
pdf: "https://arxiv.org/pdf/2601.00000"   # optional
code: "https://github.com/winclab/project"  # optional
note: "Best Paper Award"  # optional
---
```

Publications are grouped by year automatically, newest first, and visitors can filter them by `type`.

### People: `src/content/people/`

1. Add a square photo (at least 400×400 px, under 500 KB) to `public/images/people/`,
   e.g. `jane-doe.jpg`.
2. Create `src/content/people/jane-doe.md`:

```markdown
---
name: "Jane Doe"
role: phd                 # pi | postdoc | phd | masters | undergrad | visiting | alumni
title: "PhD Student (2026–)"
photo: /images/people/jane-doe.jpg
email: jane.doe@unb.ca    # optional
website: "https://janedoe.github.io"   # optional
linkedin: "https://www.linkedin.com/in/janedoe"  # optional
research: "Federated learning for IoT"  # optional one-liner
order: 10                 # optional; lower numbers appear first within the group
---
One or two sentences about Jane.
```

**When someone graduates:** change `role:` to `alumni`, update `title:` (e.g. `"PhD, 2029"`), and
optionally add `now: "Research Scientist at Company"`.

### News: `src/content/news/`

Create `src/content/news/2026-11-new-paper.md`:

```markdown
---
title: "Paper accepted at IEEE INFOCOM 2027"
date: 2026-11-20
link: "https://..."       # optional
---
One or two sentences of plain text.
```

The home page shows the 3 most recent items; the News page (`/news`) lists them all, grouped by year.
The text below the frontmatter can use Markdown, e.g. `[link text](https://...)`.

### Gallery: `src/content/gallery/gallery.yaml`

1. Upload the photo to `public/images/gallery/` (landscape works best; resize to about 1600 px wide).
2. Add an entry to `gallery.yaml`. Indentation matters: use two spaces, not tabs.

```yaml
- id: group-photo-2026          # must be unique
  image: /images/gallery/group-photo-2026.jpg
  caption: "Lab group photo, Fall 2026"
  date: 2026-09-15              # optional; photos are sorted newest first
```

### Page text, PI info, research program, and sponsors: `src/data/`

| File | What it controls |
|---|---|
| `src/data/site.ts` | Lab name, address, Dr. Chen's email, photo, and profile links (Google Scholar, UNB, LinkedIn, ORCID, CV), navigation menu |
| `src/data/research.ts` | Lab summary, research directions, areas of interest, current research program (goal and subtasks) |
| `src/data/sponsors.ts` | "Supported by" logos (logo files go in `public/images/sponsors/`) |

Edit only the text inside the quotes. Leave a PI link as `''` to hide its button.

Dr. Chen's details appear in **two** places: `src/data/site.ts` (PI page, footer, Join page) and
`src/content/people/hong-chen.md` (People page). Update both.

### Longer page text

The About, PI biography, and Join Us text is written directly in `src/pages/about.astro`,
`src/pages/pi.astro` and `src/pages/join.astro`. Edit the text between the HTML tags.

### Newsletter signup

The home page form is a **placeholder** and does not send anything yet. To connect it:

- **Buttondown:** Settings → Embedding → copy the HTML form.
- **Mailchimp:** Audience → Signup forms → Embedded forms → copy the `<form>…</form>` part.

Paste it in place of the `<form>` in `src/components/Newsletter.astro` (instructions are in the
file). To hide the section, set `enabled: false` under `newsletter` in `src/data/site.ts`.

### Colours

The UNB colour palette is defined once at the top of `src/styles/global.css`.

## 4. Finding leftover placeholders

Unfinished content is marked so it is easy to find:

- Text containing `[PLACEHOLDER]`
- Content files with `placeholder: true` (shown on the site with a yellow **Placeholder** badge)
- Placeholder images in `public/images/` (`*.svg` files labelled "PLACEHOLDER")

List everything that still needs replacing:

```bash
grep -rn "PLACEHOLDER\|placeholder: true" src public
```

When you replace a placeholder entry with real content, delete its `placeholder: true` line.
Delete placeholder files (e.g. `placeholder-phd-1.md`) once real people and papers have been added.

## 5. How deployment works

`.github/workflows/deploy.yml` runs on every push to `main`. It builds the site with Astro and
publishes it to GitHub Pages.

One-time setup (already done if the site is live): in the repo, go to **Settings → Pages →
Build and deployment → Source** and choose **GitHub Actions**.

## 6. Using a custom domain

1. In `astro.config.mjs`, change `SITE_URL` to the new address (e.g. `'https://winclab.ca'`).
2. Create a file `public/CNAME` containing just the domain (e.g. `winclab.ca`).
3. Set up DNS with your domain provider following
   [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site),
   then enter the domain under **Settings → Pages → Custom domain**.

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| Build fails with `InvalidContentEntryDataError` | The error names the file and field. Common causes: a missing required field, a typo in `role`/`type`, or an unquoted value containing `:`. |
| Image doesn't show | Paths start with `/images/...` (no `public/`), and file names are case-sensitive: `Photo.JPG` ≠ `photo.jpg`. |
| `gallery.yaml` error | Check that indentation uses spaces and every item has a unique `id`. |
| Change isn't live | Check the **Actions** tab, wait about 2 minutes, then hard-refresh (Ctrl/Cmd + Shift + R). |

## Tech stack

[Astro](https://astro.build) 7 (static output) · [Tailwind CSS](https://tailwindcss.com) 4 · GitHub Pages.
See `CLAUDE.md` for a developer-oriented overview of the project structure.
