# Self-Hosting Guide

The site is a **static build** (Astro SSG) — just HTML/CSS/JS in `dist/`. You can
host it three ways. All assume you point DNS for `paramountknox.com` at your server.

## Option A — Docker + nginx (recommended)

Everything's included: `Dockerfile`, `nginx.conf`, `docker-compose.yml`.

```bash
# build + run
docker compose up -d --build
# site is now on http://your-server:8080
```

Front it with a reverse proxy that handles **HTTPS** automatically:

- **Caddy** (simplest — auto Let's Encrypt):
  ```
  paramountknox.com, www.paramountknox.com {
      reverse_proxy localhost:8080
  }
  ```
- Or **Nginx Proxy Manager** / **Traefik** — point a proxy host at `localhost:8080`
  and enable "Force SSL" + a Let's Encrypt cert.

Once HTTPS works, uncomment the `Strict-Transport-Security` header in `nginx.conf`.

## Option B — Plain nginx (no Docker)

```bash
npm ci && npm run build          # produces dist/
sudo cp -r dist/* /var/www/paramount/
```
Use the provided `nginx.conf` as your server block (set `root /var/www/paramount;`),
then add a Let's Encrypt cert with `certbot --nginx`.

## Option C — Node static server (quick test)

```bash
npm run build
npx serve dist      # or: npm run preview
```
Fine for previews; use A or B for production.

## Rebuilding after content edits

Content lives in code (`src/data/*`, `src/content/blog/*`). After edits:
```bash
git pull
docker compose up -d --build     # (Option A)   — or: npm run build (Option B)
```
Consider a small CI/webhook to auto-rebuild on push to the branch.

## The quote form

The form (`src/components/QuoteForm.astro`) posts to `company.formEndpoint`
(`src/data/company.ts`). Since you're self-hosting, pick one:

1. **No-backend form service (easiest):** create a form at
   [Formspree](https://formspree.io), [Basin](https://usebasin.com) or
   [FormSubmit](https://formsubmit.co) and paste its POST URL into `formEndpoint`.
   The hidden `_next` field already redirects to `/thank-you/`.
2. **Your own handler:** run a tiny mailer service and set `formEndpoint` to
   `/api/quote`, proxied by nginx to that service.
3. **Fallback:** leave `formEndpoint` blank and the form opens the visitor's email
   client to `company.email` (works, but higher friction — set up #1 for real leads).

Also set a real `email` and `formEndpoint` in `src/data/company.ts`.

## Pre-launch checklist

- [ ] Fill remaining `PLACEHOLDER`s in `src/data/company.ts` (email, ZIP, GBP URL, review count, license #, warranty)
- [ ] Set `formEndpoint` and test a real submission
- [ ] Drop real photos in `public/images/` (see below)
- [ ] Add `public/images/og-default.jpg` (1200×630) and `logo.png`
- [ ] Configure the 301s in `docs/seo/redirect-map.md`
- [ ] Verify HTTPS + www→apex redirect
- [ ] Submit `sitemap-index.xml` in Google Search Console
- [ ] Claim/optimize Google Business Profile (`docs/seo/backlink-citation-plan.md`)

## Where photos go

- Portfolio: `public/images/work/` → reference in `src/data/gallery.ts`
- Instagram tiles: `public/images/instagram/ig-1.jpg … ig-6.jpg` (or use a live widget — see `instagram-feed.md`)
- OG share image: `public/images/og-default.jpg`
- Logo/favicon: `public/images/logo.png`, `public/favicon.svg`

Optimize images (WebP/AVIF, sensible dimensions) before adding — it keeps the site fast.
