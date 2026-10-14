# ManCom Inc. — Website

Modern rebuild of the marketing site for [ManCom Inc.](https://mancominc.com) (Management Communications, Inc.), a veteran-owned IT services company in Phoenix, AZ.

Built with [Astro](https://astro.build) as a fully static site: no runtime dependencies, fast page loads, and easy to host anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any web server).

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: hero, services overview, why ManCom, process, partners, service area |
| `/services/` | All services |
| `/services/<slug>/` | One page per service (managed IT, network engineering, VoIP, cyber security, computer repair, consulting) |
| `/about/` | Company story, values, public-sector/compliance notes |
| `/contact/` | Contact details, quote form, map |
| `/404` | Not found |

## Editing content

All business facts live in one place so they're easy to change:

- `src/data/site.ts` — company name, phone, email, address, hours, service area, certifications, partners, social links, navigation.
- `src/data/services.ts` — each service's title, summary, feature list, outcomes, and FAQ. Add an object to the array to add a service page.

Page copy lives in `src/pages/*.astro`. Shared pieces are in `src/components/`. Colors and typography are CSS variables in `src/styles/global.css`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # serve the built site locally
```

## Contact form

The form on `/contact/` is marked up for [Netlify Forms](https://docs.netlify.com/forms/setup/) and works automatically when deployed to Netlify. On other hosts, point the form `action` at your form handler of choice (Formspree, Basin, a serverless function, etc.).

## Deploy

Any static host works. Build command: `npm run build`. Publish directory: `dist`.

## Old URLs

Redirects from the original site's URLs (for example `/it-support-services/` and `/cyber-security/`) are defined in `astro.config.mjs` so existing links and search results keep working.
