# 301 Redirect Map (preserve ranking equity on relaunch)

The new site intentionally **keeps the existing indexed slugs** so most pages need
no redirect. Set these up at the host (Netlify `_redirects` / `netlify.toml`, or
Vercel `vercel.json`) when the new site goes live.

## Existing URLs that stay identical (NO redirect needed)
These already exist on the current site and are reproduced at the same path:

| Existing URL | Status |
|---|---|
| `/` | same |
| `/services/` | same |
| `/concrete/` | same |
| `/concrete/patio/` | same |
| `/concrete/decorative-and-stamped/` | same |
| `/pavers/` | same |
| `/hardscapes/` | same |
| `/retaining-walls/` | same |
| `/decks/` | same |
| `/our-work/` | same |
| `/reviews/` | same |
| `/service-area/farragut/` | same |

## New pages (no redirect; just get indexed + internally linked)
`/concrete/driveways/`, `/pavers/patios/`, `/hardscapes/fire-pits/`,
`/hardscapes/outdoor-kitchens/`, `/masonry/`, `/about/`, `/contact/`, `/blog/…`,
and the new `/service-area/{city}/` pages.

## Redirects to add IF old URLs differ
Audit the current site's live URLs (Google Search Console → Pages, or a crawl)
before launch. If any live URL isn't reproduced above, 301 it to the closest new
page. Likely candidates to check:

| Old (verify it exists) | New target |
|---|---|
| `/concrete/pool-deck/` or similar | `/concrete/patio/` (until a pool-deck page exists) |
| any `/service-area/{city}/` not yet built | build the page, or 301 to `/service-area/` |
| trailing-slash variants | site enforces trailing slash via `trailingSlash: 'always'` |

## Example `_redirects` (Netlify)
```
# /old-path  /new-path  301
/concrete/pool-deck/   /concrete/patio/   301
```

## Launch checklist
1. Crawl the current live site; export every indexed URL.
2. Map any URL not reproduced by the new site → nearest new page (301).
3. Submit the new `sitemap-index.xml` in Google Search Console.
4. Use GSC "Removals" only if truly needed; otherwise let 301s pass equity.
5. Watch Search Console coverage + rankings for 4–8 weeks post-launch.
