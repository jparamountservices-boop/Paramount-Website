# Paramount Yard Sign — "We Built This" (Neighbor Offer)

Print-ready yard sign that matches paramountknox.com and carries a QR code to a
dedicated landing page with a "Neighbor Discount" offer for drive-by / walk-by
prospects.

## The concept

Yard signs sit in the yard of a **finished job**, where neighbors are already
looking at fresh Paramount work. The sign leans into that: **"WE BUILT THIS."**
→ scan the code → land on a page that greets them as a neighbor and hands them a
real reason to call now.

- **Sign** → the QR code
- **QR code** → `https://paramountknox.com/scan/` (the landing page)
- **Landing page** (`src/pages/scan.astro`) → neighbor greeting + offer coupon +
  recent-project gallery + lead form (tagged "Yard Sign QR — Neighbor Offer" in
  Netlify Forms, so you can measure scans → leads)

## Files here

| File | Use |
| --- | --- |
| `paramount-yard-sign-24x18.pdf` | **Send this to the sign printer.** Exact 24"×18" (standard yard-sign size). |
| `paramount-yard-sign-24x18.svg` | Vector master — editable in Illustrator/Inkscape, scales to any size. |
| `paramount-yard-sign-24x18.png` | 300 DPI raster (7200×5400) for quick preview or printers that want PNG. |
| `yard-sign-qr.svg` | The QR code on its own (high error correction, weatherproof). |
| `build-sign.mjs` | Regenerates the SVG from brand tokens + the logo + the QR. |

The sign is **24"×18" landscape** — the most common corrugated-plastic yard-sign
size. For a different size, just scale the PDF/SVG (the vector stays crisp) or
change `W`/`H` in `build-sign.mjs`.

## Editing the offer

The offer text lives in **two** places — keep them in sync:

1. **Landing page** — `src/pages/scan.astro`, the `offer` object at the top
   (`amount`, `minProject`, `bonus`, `code`, `validNote`).
2. **The sign** — `build-sign.mjs` (the `$500 OFF` / `NEIGHBOR500` strings), then
   regenerate (see below).

Default offer: **$500 off** any project of $5,000+, **plus a free on-site design
visit**, code **NEIGHBOR500**. These are marketing numbers — change them to
whatever you'll actually honor.

## Regenerating the sign

The generator uses three dev-only npm packages (not part of the website build):

```bash
npm install --no-save qrcode          # only if you change the QR target URL
npm install --no-save sharp           # SVG → PNG
npm install --no-save playwright-core # SVG → exact-size PDF

# 1. (only if the URL changed) regenerate the QR:
node -e "require('qrcode').toString('https://paramountknox.com/scan/?utm_source=yard-sign&utm_medium=qr&utm_campaign=neighbor-offer',{type:'svg',errorCorrectionLevel:'H',margin:2,color:{dark:'#1b1712',light:'#ffffff'}},(e,s)=>require('fs').writeFileSync('marketing/yard-sign/yard-sign-qr.svg',s))"

# 2. rebuild the sign SVG:
node marketing/yard-sign/build-sign.mjs
```

Then re-export PNG/PDF from the SVG with sharp / playwright-core (see the one-off
commands used to produce the committed files).

## QR tracking

The QR encodes UTM tags (`utm_source=yard-sign`, `utm_medium=qr`,
`utm_campaign=neighbor-offer`), so scans show up in Google Analytics 4 (already
wired on the site) as yard-sign traffic. The landing page is `noindex` so it
stays a clean campaign page and doesn't compete with your SEO pages.
