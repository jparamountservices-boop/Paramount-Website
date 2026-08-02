import fs from 'node:fs';

const OUT = 'marketing/yard-sign';
fs.mkdirSync(OUT, { recursive: true });

// ---- Brand tokens (from src/styles/global.css) ----
const INK = '#1b1712';        // near-black warm (headings)
const FLAME = '#e8792b';      // brand orange
const FLAME_D = '#d1691f';
const PEACH = '#f7e3ce';
const WHITE = '#ffffff';
const CONCRETE = '#4b463f';
const FOREST = '#4a6a2e';

// ---- Assets ----
const logoB64 = fs.readFileSync('public/images/logo.png').toString('base64');
const logoHref = `data:image/png;base64,${logoB64}`;

// QR: strip outer <svg> wrapper, keep inner paths, re-nest with positioning.
const qrRaw = fs.readFileSync('marketing/yard-sign/yard-sign-qr.svg', 'utf8');
const qrInner = qrRaw.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

// ---- Canvas: 24in x 18in @ 100 units/inch ----
const W = 2400, H = 1800;

// A simple white mountain mark for the orange panel (echoes the logo silhouette).
const mountainWhite = (x, y, s) => `
  <g transform="translate(${x} ${y}) scale(${s})" fill="${WHITE}">
    <path d="M0 120 L70 20 L100 60 L140 0 L210 120 Z"/>
    <path d="M70 20 L58 42 L82 42 Z" fill="${FLAME}"/>
    <path d="M140 0 L128 24 L152 24 Z" fill="${FLAME}"/>
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Archivo, 'Arial Narrow', Arial, sans-serif">
  <!-- Background -->
  <rect width="${W}" height="${H}" fill="${WHITE}"/>
  <!-- Orange safety frame -->
  <rect x="26" y="26" width="${W-52}" height="${H-52}" fill="none" stroke="${FLAME}" stroke-width="14"/>
  <rect x="60" y="60" width="${W-120}" height="${H-120}" fill="none" stroke="${PEACH}" stroke-width="4"/>

  <!-- ================= LEFT COLUMN ================= -->
  <!-- Logo -->
  <image href="${logoHref}" x="150" y="150" width="760" height="405" preserveAspectRatio="xMinYMin meet"/>

  <!-- Eyebrow -->
  <text x="158" y="640" fill="${FOREST}" font-size="46" font-weight="700" letter-spacing="8">KNOXVILLE · EAST TENNESSEE</text>

  <!-- Headline -->
  <text x="150" y="810" fill="${INK}" font-size="200" font-weight="900" letter-spacing="-4">WE BUILT</text>
  <text x="150" y="1000" fill="${FLAME}" font-size="200" font-weight="900" letter-spacing="-4">THIS.</text>

  <!-- Subhead -->
  <text x="158" y="1130" fill="${CONCRETE}" font-size="66" font-weight="700">Like what you see?</text>
  <text x="158" y="1210" fill="${CONCRETE}" font-size="66" font-weight="700">Let's build yours next.</text>

  <!-- Offer strip -->
  <g transform="translate(150 1300)">
    <rect x="0" y="0" width="1040" height="150" rx="14" fill="${INK}"/>
    <text x="40" y="70" fill="${WHITE}" font-size="60" font-weight="900" letter-spacing="-1">FREE PHONE CONSULT</text>
    <text x="40" y="123" fill="${FLAME}" font-size="44" font-weight="800">+ $250 off your project</text>
  </g>

  <!-- Footer contact -->
  <text x="150" y="1600" fill="${INK}" font-size="72" font-weight="900" letter-spacing="-1">(865) 237-9770</text>
  <text x="150" y="1680" fill="${CONCRETE}" font-size="46" font-weight="700" letter-spacing="1">paramountknox.com</text>
  <text x="150" y="1738" fill="${FLAME_D}" font-size="32" font-weight="800" letter-spacing="2">CONCRETE · PAVERS · RETAINING WALLS · OUTDOOR LIVING</text>

  <!-- ================= RIGHT PANEL (SCAN) ================= -->
  <g transform="translate(1360 150)">
    <rect x="0" y="0" width="880" height="1500" rx="40" fill="${FLAME}"/>
    ${mountainWhite(70, 56, 0.78)}

    <text x="470" y="128" text-anchor="middle" fill="${WHITE}" font-size="58" font-weight="900" letter-spacing="6">SCAN ME</text>
    <text x="440" y="228" text-anchor="middle" fill="${WHITE}" font-size="46" font-weight="700" opacity="0.95">Point your camera here</text>

    <!-- White QR card -->
    <g transform="translate(120 270)">
      <rect x="0" y="0" width="640" height="640" rx="28" fill="${WHITE}"/>
      <svg x="40" y="40" width="560" height="560" viewBox="0 0 57 57" shape-rendering="crispEdges">${qrInner}</svg>
    </g>

    <!-- Offer callout -->
    <text x="440" y="1000" text-anchor="middle" fill="${WHITE}" font-size="50" font-weight="900" letter-spacing="4">SEE OUR RECENT WORK</text>

    <g transform="translate(120 1050)">
      <rect x="0" y="0" width="640" height="160" rx="18" fill="${WHITE}"/>
      <text x="320" y="66" text-anchor="middle" fill="${INK}" font-size="52" font-weight="900">FREE PHONE CONSULT</text>
      <text x="320" y="124" text-anchor="middle" fill="${FLAME_D}" font-size="42" font-weight="800">+ $250 off your project</text>
    </g>

    <text x="440" y="1300" text-anchor="middle" fill="${WHITE}" font-size="37" font-weight="800" letter-spacing="1">Concrete · Pavers</text>
    <text x="440" y="1350" text-anchor="middle" fill="${WHITE}" font-size="37" font-weight="800" letter-spacing="1">Retaining Walls · Outdoor Living</text>

    <text x="440" y="1440" text-anchor="middle" fill="${WHITE}" font-size="34" font-weight="700" opacity="0.9">No pressure — just a conversation.</text>
  </g>
</svg>`;

fs.writeFileSync(`${OUT}/paramount-yard-sign-24x18.svg`, svg);
console.log('wrote SVG', svg.length, 'bytes');
