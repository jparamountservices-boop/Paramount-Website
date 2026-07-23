# Instagram Feed Setup

The `InstagramFeed` component (shown on the home page and Our Work) has two modes.

## Mode 1 — "Follow us" grid (default, no setup)

Out of the box it shows a 6-tile grid linking to
`instagram.com/paramounthomerenovations`. To use your real photos as the tiles,
drop six square images into:

```
public/images/instagram/ig-1.jpg
public/images/instagram/ig-2.jpg
…
public/images/instagram/ig-6.jpg
```

They load automatically (and tiles without an image fall back to the IG icon).
This is fully static and fast — but you have to update the images manually.

## Mode 2 — Live auto-updating feed (recommended)

To show your **actual latest Instagram posts** automatically, use a no-code widget
(they handle the Instagram API for you). Good options:

- **[Behold.so](https://behold.so)** — clean, fast, free tier
- **[SnapWidget](https://snapwidget.com)**
- **[LightWidget](https://lightwidget.com)**
- **[EmbedSocial](https://embedsocial.com)**

Steps:
1. Sign up, connect the `@paramounthomerenovations` account, style the grid.
2. Copy the embed snippet (an `<iframe>` or `<script>`).
3. Paste it into `instagramWidget` in `src/data/company.ts`:
   ```ts
   instagramWidget: `<iframe src="https://…" width="100%" height="400" ...></iframe>`,
   ```
4. Rebuild. The component renders the live feed in place of the grid.

> Note: these widgets load a third-party iframe/script. That's fine on your
> self-hosted setup (no strict Content-Security-Policy is enforced). If you later
> add a CSP, allow the widget's domain.

## Which to choose?

- Want it truly hands-off and always current → **Mode 2** (Behold is the easiest).
- Want zero third-party scripts and don't mind swapping 6 images occasionally →
  **Mode 1.**
