# Project Photos — how to add them

Drop your chosen photos into the matching folder below and they appear on the
website **automatically** (optimized to fast WebP, with a thumbnail + a larger
lightbox version). No code editing needed. Nothing random shows up — only the
photos *you* put in these folders.

## The folders (photo → where it links on the site)

| Folder | Use it for | Links to |
|---|---|---|
| `driveways/` | Concrete driveways | /concrete/driveways/ |
| `concrete-patios/` | Poured concrete patios | /concrete/patio/ |
| `stamped-concrete/` | Stamped / decorative concrete | /concrete/decorative-and-stamped/ |
| `pool-decks/` | Concrete pool decks | /concrete/pool-decks/ |
| `pavers/` | Paver patios | /pavers/patios/ |
| `paver-driveways/` | Paver driveways | /pavers/driveways/ |
| `retaining-walls/` | Retaining walls | /retaining-walls/ |
| `walkways/` | Walkways & stone steps | /hardscapes/walkways/ |
| `fire-pits/` | Fire pits & fire features | /hardscapes/fire-pits/ |
| `outdoor-kitchens/` | Outdoor kitchens & grill islands | /hardscapes/outdoor-kitchens/ |
| `outdoor-fireplaces/` | Outdoor fireplaces | /hardscapes/outdoor-fireplaces/ |
| `decks/` | Decks & pergolas | /decks/ |
| `masonry/` | Brick / block / stone masonry | /masonry/ |

## Naming your files (this controls the caption + order)

Use lowercase, hyphens instead of spaces, and end with a number for ordering:

```
farragut-stamped-patio-01.jpg
farragut-stamped-patio-02.jpg
knoxville-fire-pit-01.jpg
```

- The words become the caption/alt text → **include the city when you know it**
  (great for local SEO). `farragut-stamped-patio-01.jpg` → "Farragut Stamped Patio".
- The trailing number sets the order (01 shows first).
- Before/after pairs: end them `-before` and `-after`
  (e.g. `driveway-bearden-before.jpg`, `driveway-bearden-after.jpg`).

## Photo tips (so they look premium, not random)

- **Horizontal / landscape** shots look best in the grid and hero areas.
- Shoot in good daylight; avoid heavy filters — clean and true-to-life sells work.
- Bigger is fine — 1600–2400px wide. The site auto-compresses; you don't need to resize.
- 3–8 of your **best** shots per category beats 30 mediocre ones.
- Keep the `.gitkeep` file in each folder (it just keeps the empty folder tracked).

Once photos are in, run `npm run dev` (or rebuild) and they show up on the home
page "Recent Work" strip, the Our Work gallery, and (soon) the matching service page.
