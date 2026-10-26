# AVERY — Developer Portfolio

A dark, terminal-inspired personal developer website built with Astro. It includes:
- Responsive home page with terminal-style hero
- Project showcase for Lyra, vxOS, and KyronOS
- GitHub repository links and live latest-release lookup
- Markdown-powered blog
- Project detail pages
- Static deployment support for Vercel, Netlify, or GitHub Pages

## Run locally

Install Node.js 20.3+ (Node.js 22 LTS recommended), then:

```bash
npm install
npm run dev
```

Astro prints a local URL. Open it in your browser.

## Build and verify

```bash
npm run build
npm run preview
```

## Production environment

In a production environment, we recommend using Docker to host this. It makes it easier to host in the background and takes up less resources. 

The static site is generated in `dist/`.

## Configure before publishing

1. Open `astro.config.mjs` and replace `https://example.com` with your real domain.
2. Open `src/data/projects.js` and verify the repository names and descriptions.
3. Review the sample blog post in `src/content/blog/`. Replace it with your own writing before publishing.
4. Review `src/pages/about.astro` and remove or edit any profile details you don't want public.
5. Check `src/styles/global.css` and `src/components/TerminalCard.astro` for any personal details you want changed.

## GitHub release integration

The home page and Releases page request public release data from GitHub's REST API for each configured repository. The UI has a graceful fallback if a repository has no releases or GitHub's API is unavailable. GitHub may rate-limit unauthenticated API requests; for a small portfolio this is usually fine. If you later need more reliable API access, use a build-time workflow or server-side API proxy rather than placing a GitHub token in browser code.

The release cards link to the real GitHub release page. The repository list is configured in `src/data/projects.js`.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Import the repository into Vercel.
3. Framework preset: Astro. Build command: `npm run build`. Output directory: `dist`.
4. Add your custom domain in Vercel's project settings.
5. Update DNS at your domain provider using the records Vercel tells you to add.
6. Change `site` in `astro.config.mjs` to the real `https://` domain and redeploy.

## Deploy to Netlify

Import the GitHub repository into Netlify. Build command: `npm run build`; publish directory: `dist`. Add the domain in Netlify's domain settings and follow its DNS instructions.

## Design notes

- Branding intentionally uses **AVERY** only; no surname is included.
- Red / charcoal / cool grey palette, monospace interface, sharp borders.
- The site is static by default; no database or server is required.
- The blog uses Astro content collections and Markdown.
