// Content collections: the files lab members edit to update the site.
// Each collection's schema below lists the fields a file may contain.
// If a file is missing a required field, `npm run build` fails with a message
// naming the file and field, so mistakes are caught before anything is deployed.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per paper in src/content/publications/
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(), // journal or conference name
    year: z.number().int(),
    type: z.enum(['journal', 'conference', 'preprint', 'book-chapter', 'thesis', 'other']).default('conference'),
    doi: z.string().optional(), // e.g. "10.1109/XXXX.2025.1234567" (no https://doi.org/)
    pdf: z.string().optional(), // URL to the PDF
    code: z.string().optional(), // URL to code repository
    note: z.string().optional(), // e.g. "Best Paper Award"
    placeholder: z.boolean().default(false),
  }),
});

// One Markdown file per person in src/content/people/; the body is a short bio.
// The person with `role: pi` also drives the PI page, footer, and Join page (their body is the full PI bio).
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['pi', 'postdoc', 'phd', 'masters', 'undergrad', 'visiting', 'alumni']),
    title: z.string().optional(), // e.g. "PhD Student (2024–)"
    subtitle: z.string().optional(), // second line, e.g. "Cisco Research Chair in IoT"
    photo: z.string().default('/images/people/placeholder.svg'), // path under public/
    // Which part of the photo stays visible when it is cropped to a circle/frame.
    // CSS object-position: "50% 20%" keeps the top of a portrait (default); "50% 50%" is centred.
    photoPosition: z.string().default('50% 20%'),
    email: z.string().optional(),
    phone: z.string().optional(),
    office: z.string().optional(), // e.g. "Gillin Hall GD117A"
    website: z.string().optional(),
    linkedin: z.string().optional(),
    scholar: z.string().optional(), // Google Scholar profile URL
    profile: z.string().optional(), // university profile page URL
    orcid: z.string().optional(),
    github: z.string().optional(),
    cv: z.string().optional(), // URL, or /files/name-cv.pdf with the file in public/files/
    research: z.string().optional(), // one-line research focus
    summary: z.string().optional(), // PI only: 2–3 sentence intro on the People page (the body is the full bio)
    now: z.string().optional(), // alumni only: current position
    order: z.number().default(100), // lower numbers appear first within a role
    placeholder: z.boolean().default(false),
  }),
});

// One Markdown file per news item in src/content/news/
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    link: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

// All gallery photos in one YAML list: src/content/gallery/gallery.yaml
const gallery = defineCollection({
  loader: file('src/content/gallery/gallery.yaml'),
  schema: z.object({
    id: z.string(),
    image: z.string(), // path under public/, e.g. /images/gallery/group-2025.jpg
    caption: z.string(),
    date: z.coerce.date().optional(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { publications, people, news, gallery };
