# Paramount Yard Sign — "We Built This" (Neighborhood)

Print-ready, **reusable** yard sign that matches paramountknox.com and carries a
QR code to a neighborhood landing page. Drop one in every finished customer's
front yard.

## The concept

Yard signs sit in the yard of a **finished job**, where neighbors are already
looking at fresh Paramount work. The sign leans into that: **"WE BUILT THIS."**
→ scan the code → land on a neighborhood showcase and book a free phone
consultation.

- **Sign** → the QR code (generic — works in any customer's yard)
- **QR code** → `https://paramountknox.com/scan/` (the landing page)
- **Landing page** (`src/pages/scan.astro`) → neighborhood greeting + the four
  service lines + recent-project gallery + a free-phone-consultation form
  (tagged "Yard Sign QR — Neighborhood Page" in Netlify Forms, so you can
  measure scans → leads)

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
   (`sweetener`, `validNote`). Set `sweetener: ''` to promote ONLY the free
   phone consultation with no discount.
2. **The sign** — `build-sign.mjs` (the `FREE PHONE CONSULT` / `+ $250 off your
   project` strings), then regenerate (see below).

Default offer: a **free phone consultation** for any project — concrete, pavers,
retaining walls or outdoor living — plus a small **$250 off** sweetener. These
are marketing choices; change them to whatever you'll actually honor, or drop
the discount and lead with the free consult alone.

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
