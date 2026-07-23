# Paramount Concrete & Hardscapes — Website

SEO-maximized, lead-generation website for **Paramount Concrete & Hardscapes**
(Knoxville, TN). Built with **Astro** + **Tailwind CSS v4**, statically generated.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## What's here

- **Fast static site** — Astro SSG, dark industrial design system, mobile-first, sticky click-to-call.
- **Full service architecture** — concrete, pavers, hardscapes, decks, masonry (hubs + spokes), each a fully-written SEO page. Driven by `src/data/services.ts`.
- **Service-area pages** — Knoxville, Farragut, West Knoxville, Maryville, Oak Ridge, Sevierville, Lenoir City — unique local copy. Driven by `src/data/serviceAreas.ts`.
- **Big-5 blog** (Marcus Sheridan / They Ask, You Answer) — cost, comparison, and problem posts in `src/content/blog/`. Calendar in `docs/seo/editorial-calendar.md`.
- **On-page SEO system** — one `SEO.astro` head component + `src/lib/schema.ts` JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb, Article, Review). Auto sitemap + robots.txt.
- **Lead-gen** — quote form (`QuoteForm.astro`), trust bar, CTAs, reviews with schema.
- **SEO playbook docs** — `docs/seo/` (backlinks/citations, GBP, editorial calendar, redirect map).

## Project structure

```
src/
  data/            company.ts (NAP/hours/socials), services.ts, serviceAreas.ts, reviews.ts
  content/blog/    Big-5 blog posts (Markdown)
  content.config.ts
  lib/schema.ts    JSON-LD builders
  layouts/         BaseLayout, ServiceLayout
  components/      SEO, Header, Footer, QuoteForm, TrustBar, Faq, CtaBand, Breadcrumbs, SocialLinks, StickyCall
  pages/           index, about, contact, services, our-work, reviews, thank-you,
                   [...service] (services), service-area/[slug], blog/*
public/            robots.txt, favicon.svg, images/ (drop real photos here)
docs/seo/          SEO strategy + backlink/citation playbook
```

## Inputs still needed (search the code for `PLACEHOLDER`)

Edit **`src/data/company.ts`**:
- Instagram + TikTok handle URLs (Facebook confirmed)
- Correct years-in-business (site currently mixes "7+" and "20+" — pick one)
- Email address, ZIP code, exact geo coordinates
- Real review count + rating, warranty length, license #
- Google Business Profile URL

Other:
- Drop real project photos into `public/images/` (og-default.jpg, logo.png, work/ gallery)
- Choose lead-form destination — the form is wired for **Netlify Forms** (`data-netlify`); swap in `QuoteForm.astro` if using another provider/CRM
- Deploy target (Netlify or Vercel — both host Astro static output directly)

## Deploy

Static output builds to `dist/`. Deploy to Netlify or Vercel (zero-config for Astro).
Point `paramountknox.com` at it and set up the **301 redirects** in
`docs/seo/redirect-map.md` to preserve existing ranking equity.
