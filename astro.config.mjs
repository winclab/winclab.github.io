// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// The public URL of the site. This is the ONLY place it is set.
// To move to a custom domain later, change this value and add public/CNAME
// (see README → "Using a custom domain").
const SITE_URL = 'https://winclab.github.io';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
