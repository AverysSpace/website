import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://avery.vx538.is-a.dev',
  integrations: [sitemap()],
  output: 'static'
});
