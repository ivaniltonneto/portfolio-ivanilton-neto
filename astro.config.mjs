// @ts-check
import { defineConfig } from 'astro/config';

// Ajuste SITE_URL para o domínio final (usado em canonical, Open Graph e sitemap).
const site = process.env.SITE_URL ?? 'https://portfolio-ivanilton-neto.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
