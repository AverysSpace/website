import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://averys.space',
  integrations: [sitemap()],
  output: 'static'
});
