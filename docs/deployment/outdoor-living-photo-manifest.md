# Outdoor Living — Photo Manifest

The repositioning (leading with outdoor living) is built and live-ready **without
photos** — every new page reads complete as-is. This manifest lists the image
slots that will make those pages and the homepage pull their full weight, so
photos can be dropped in as they're shot.

**How to add a project photo to the galleries:** drop it into the matching
folder under `src/assets/projects/<category>/` and it appears automatically,
optimized to WebP (see `docs/deployment/photos.md`). New categories for the
outdoor-living work can be added there when the shots exist.

**Photo specs (from the brief):** wide (landscape) shots showing the whole
space; dusk with the lighting on where possible; furnished; and before/after
pairs shot from the same camera position.

---

## Priority 1 — Homepage hero (highest visibility)

| Slot | File | Spec | Status |
|---|---|---|---|
| Hero background | `public/images/hero-backyard.jpg` | Wide 16:9, ≥1600×900. A finished backyard at dusk, lighting on — patio/court + cover + kitchen + furniture in one wide frame. | **Interim in place** — currently a real stamped pool-deck photo (cropped 16:9). Replace with a true wide dusk backyard shot when available. Keep the same filename to swap with no code change. |

## Priority 2 — Homepage "Recent work" grid (§3.3)

The grid is already photo-driven (auto-loads from `src/assets/projects/`). Once
large-project photos exist, **at least half** the tiles should show covered
structures, kitchens, courts, or full transformations; flatwork fills the rest.
No code change needed — the mix follows what's in the project folders.

Needed: 4–6 wide shots of covered patios / outdoor kitchens / sport courts /
full backyard builds.

## Priority 3 — New service pages (one hero-quality wide shot each)

These pages are text-complete; a lead image on each lifts conversion.

| Page | What to show |
|---|---|
| `/outdoor-living/` | A full build — the whole space working together (court/patio + cover + kitchen). |
| `/outdoor-living/patio-covers/` | A finished covered patio — attached or freestanding, fan + lighting visible. Ideally one kit and one custom example. |
| `/outdoor-living/outdoor-kitchens/` | A built outdoor kitchen — counter, grill, storage; a full one with bar seating if possible. |
| `/outdoor-living/sport-courts/` | A court as part of a space — court + seating/patio + lights, not just a bare slab. |
| `/outdoor-living/backyard-builds/` | Before/after pair of a full transformation, plus one finished wide dusk shot. |

## Priority 4 — Budget-tiered gallery (§6.1)

Deferred **by design** until large-project photos exist: today every project
photo is flatwork (the two lowest tiers), so budget-tier filters would show three
empty tiers — worse than the current category filters. Once covered-structure /
kitchen / full-build photos land, we add a budget-tier filter alongside the
existing category filter and tag each project with scope, location, and budget
range (not exact price).

---

## Also still pending (non-photo)

- **Instagram handle** — the site still links to the old, misspelled
  `instagram.com/parmounthomerenovations`. Confirm the current handle and it gets
  updated in `src/data/company.ts` (`social.instagram` + `instagramHandle`).
- **Hero headline** — "Backyards built for the way your family actually lives"
  is the brief's suggested direction, in place pending final owner approval.
