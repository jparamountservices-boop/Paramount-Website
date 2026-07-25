# Adding Your Project Photos

The site is wired so photos **auto-appear** when you drop them into the right
folder — no code editing, nothing random. Only the photos you place in the
folders show up.

## Where photos go

`src/assets/projects/<category>/` — one folder per project type. See the table in
`src/assets/projects/README.md` for the full folder → service-page map.

## Naming (controls caption + order)

`city-description-##.jpg`, lowercase with hyphens:

```
farragut-stamped-patio-01.jpg   ->  caption "Farragut Stamped Patio"
knoxville-fire-pit-02.jpg       ->  caption "Knoxville Fire Pit"
```

- Include the **city** when you know it (helps local SEO).
- Trailing number = display order.
- Before/after pairs end in `-before` / `-after`.

## How the photos reach the website — pick one

**Option A — You add them, then push (you control the repo):**
1. Put photos into the folders in your local clone (`src/assets/projects/...`).
2. In GitHub Desktop: review the changes → **Commit** → **Push**. (Or in a
   terminal: `git add . && git commit -m "Add project photos" && git push`.)
3. Rebuild/redeploy — they're live.

**Option B — Send them to me, I place + optimize + commit:**
Send your photos here grouped by category (e.g. "these 5 are Farragut paver
patios"). I'll name them correctly, drop them in the right folders, wire any
hero shots, and push. You just `git pull` to get the updated site.

> Tip: GitHub's website also lets you drag-drop files into a folder and commit
> in the browser (max 100 files / 25 MB each per upload) — handy for a phone.

## What happens automatically

- Resized + converted to **WebP** (thumbnail for the grid + a larger one for the
  click-to-zoom lightbox) so the site stays fast.
- Alt text generated from the filename (accessibility + SEO).
- Photo linked to its matching service page.
- Shown on: home "Recent Work" strip, the Our Work gallery (with category
  filters), and available for service-page heroes.

## Good-photo checklist

- Horizontal/landscape for the best fit
- Good daylight, minimal filtering
- 1600–2400px wide (don't bother resizing — the site compresses it)
- 3–8 of your **best** per category > lots of average ones
- A strong "hero" shot per category (name it `-01`)
