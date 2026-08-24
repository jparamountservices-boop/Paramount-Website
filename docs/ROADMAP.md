# Paramount — Working Roadmap (what's next)

Living notes so work can resume cold. Newest context at top. Owner is
non-technical; production branch `claude/paramount-knox-seo-strategy-ntot8s`
auto-deploys to live paramountknox.com via Netlify. PRs get a Netlify deploy
preview URL for review before merge.

_Last updated: 2026-08-24, right after the outdoor-living repositioning went live._

---

## Just shipped (live)
Outdoor-living repositioning (PR #2): nav promotes Outdoor Living first; new hub
+ four money pages (`/outdoor-living/patio-covers/`, `/outdoor-kitchens/`,
`/sport-courts/`, `/backyard-builds/`); homepage three-tier section + backyard
hero + two-track process; grouped service dropdown + required budget field
("Not sure yet" escape hatch); flatwork→outdoor-living interlinks; footer/meta
cleanup. Also live earlier: the concrete basketball courts blog post.

## Open loose ends from the repositioning
- **Instagram handle** — site still links the old, misspelled
  `instagram.com/parmounthomerenovations`. Owner to confirm the correct handle →
  update `src/data/company.ts` (`social.instagram` + `instagramHandle`).
- **Hero headline** — "Backyards built for the way your family actually lives"
  is in place pending final owner approval / reword.
- **Hero photo** — currently an interim (a real stamped pool-deck shot cropped
  16:9 at `public/images/hero-backyard.jpg`). Wants a wide **dusk backyard**
  photo, lights on. Same filename swaps it with no code change.

## Next priorities (agreed order, 2026-08-24)
1. **Homepage hero photo** — highest single-image impact. Wide, dusk, lights on.
2. **Google Business Profile + real reviews** — bigger local-ranking lever than
   more site media. NOTE: fabricated reviews were removed from the site earlier;
   the reviews page + a `reviewsWidget` slot in `company.ts` are ready for a real
   feed (e.g. Featurable) when the owner wants it. Deliver a GBP optimization +
   review-generation plan as the next doc.
3. **Before/after pairs on the money pages** — shoot "before" and "after" from
   the same camera position. Most persuasive asset for a builder.
4. **Welcome video on the homepage** — 30–60s, owner on camera + b-roll.
   Do it right: NO autoplay heavy hero video (hurts mobile LCP). Poster +
   click-to-play, or YouTube-embed lightweight. Add `VideoObject` schema. Then
   short project-walkthrough videos on the money pages.
5. **Photos across the remaining service pages** — roll out as shots accumulate;
   lower urgency (those pages already rank on text).

## Plumbing I offered to build (do when owner is ready)
- Optional **hero-image slot on every service page** (ServiceLayout) so a photo
  auto-appears when dropped in by filename — no code work per page.
- Reusable **video component** with poster / click-to-play + `VideoObject`
  schema wired, so a welcome or walkthrough video is drop-in.
- Revisit **budget-tiered gallery (§6.1)** and the **homepage recent-work grid
  leading with big projects (§3.3)** — both deferred until large-project photos
  exist (today every photo is flatwork → tiered filters would be mostly empty).

## Where things live (quick map)
- Services/pages/copy + nav grouping: `src/data/services.ts` (drives
  `[...service].astro` + `ServiceLayout.astro`).
- Company NAP/socials/analytics/ads: `src/data/company.ts`.
- Lead form: `src/components/QuoteForm.astro`; Netlify field stub
  `public/__forms.html`; autoresponder `netlify/functions/submission-created.mjs`.
- Photo manifest (what shots are needed): `docs/deployment/outdoor-living-photo-manifest.md`.
- Galleries auto-load from `src/assets/projects/<category>/` (see `docs/deployment/photos.md`).
- Blog: `src/content/blog/*.md`.
