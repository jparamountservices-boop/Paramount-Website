/**
 * Single source of truth for business (NAP) data, hours, and social profiles.
 * Used by UI components AND by structured-data (JSON-LD) so everything stays
 * consistent — critical for local SEO / citation consistency.
 *
 * TODO(owner inputs): confirm the values marked `PLACEHOLDER`.
 */

export const company = {
  name: 'Paramount Concrete & Hardscapes',
  legalName: 'Paramount Renovations',
  // Company founded 2018 (per your live site: "Since 2018"). NOTE: elsewhere you
  // mention 15+ years of trade experience and 20 years — pick which to feature.
  yearFounded: 2018,
  yearsExperience: 20,
  tagline: 'Knoxville Tennessee’s favorite concrete & hardscape contractor.',
  description:
    'Paramount Concrete & Hardscapes designs and builds concrete, pavers, retaining walls, patios and fire features for homeowners across Knoxville and East Tennessee.',

  // NAP — must match Google Business Profile + every citation exactly.
  phone: '(865) 237-9770',
  phoneHref: 'tel:+18652379770',
  email: 'j.paramountservices@gmail.com',

  // Home-based, SERVICE-AREA business: the street address is intentionally
  // hidden everywhere (site display AND schema) so the owner's home is never
  // published. City/region still power local SEO via areaServed + geo.
  // (This matches how a home-based business should be set up in Google, too.)
  serviceAreaBusiness: true,
  address: {
    street: '', // hidden — home-based service-area business
    city: 'Knoxville',
    state: 'TN',
    zip: '', // hidden — home-based service-area business
    country: 'US',
  },
  // Approx. geo for LocalBusiness schema (Knox County). Refine to exact if desired.
  geo: {
    latitude: 35.9606,
    longitude: -84.1217,
  },

  url: 'https://paramountknox.com',
  logo: '/images/logo.png', // PLACEHOLDER — drop real logo in public/images/
  sisterSite: 'https://phrenovation.com',

  // Lead-form submission endpoint. Self-hosted options (see docs/deployment):
  //  - Formspree/Basin/FormSubmit URL (zero backend), OR
  //  - your own handler, e.g. '/api/quote' proxied to a small mailer service.
  // Leave '' to fall back to a mailto: link so the form always does *something*.
  formEndpoint: '', // PLACEHOLDER — set to your form/handler URL

  // Business hours (edit to real hours).
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  hoursHuman: [
    { label: 'Mon–Fri', value: '8:00 AM – 5:00 PM' },
    { label: 'Saturday', value: '9:00 AM – 2:00 PM' },
    { label: 'Sunday', value: 'Closed' },
  ],

  priceRange: '$$',
  // Aggregate rating for schema — update to real GBP/Facebook numbers.
  rating: { value: '5.0', count: 27 }, // PLACEHOLDER — confirm review count

  // Social profiles → used for UI links AND schema `sameAs` (entity/trust signal).
  social: {
    facebook: 'https://www.facebook.com/paramountknox/',
    instagram: 'https://www.instagram.com/parmounthomerenovations/',
    tiktok: '', // not used
    // Your public Google Business Profile / Google Maps listing URL. Powers the
    // Google icon in the header & footer AND the schema `sameAs` signal that
    // ties this website to your Google listing (big local-SEO trust signal).
    google: '', // PLACEHOLDER — paste your Google Business Profile / Maps link
  },

  // Direct "leave a review" link from your Google Business Profile
  // ("Ask for reviews" / "Get more reviews" → copy link — looks like
  // https://g.page/r/…/review). Powers the "Leave a Google review" buttons.
  // If blank, those buttons fall back to your listing URL above.
  googleReviewUrl: '', // PLACEHOLDER — paste your Google review link

  // Instagram handle shown in the "Follow us" section.
  instagramHandle: 'parmounthomerenovations',
  // OPTIONAL live-feed embed. Paste the HTML snippet from a no-code widget
  // (Behold.so, SnapWidget, LightWidget, EmbedSocial) to show real IG posts.
  // Left blank = the section renders a "Follow us" grid linking to Instagram.
  // See docs/deployment/instagram-feed.md.
  instagramWidget: '',

  // Trust signals shown in the trust bar / hero.
  trust: {
    licensed: true,
    insured: true,
    freeEstimates: true,
    warrantyYears: 5, // PLACEHOLDER — confirm workmanship warranty
    projectsCompleted: '500+', // PLACEHOLDER
  },
} as const;

/** Everything social as an array of {name, url, handle} (skips blanks). */
export const socialLinks = [
  { name: 'Facebook', url: company.social.facebook, key: 'facebook' },
  { name: 'Instagram', url: company.social.instagram, key: 'instagram' },
  { name: 'TikTok', url: company.social.tiktok, key: 'tiktok' },
  { name: 'Google', url: company.social.google, key: 'google' },
].filter((s) => s.url);

/** Array of social URLs for schema `sameAs`. */
export const sameAs = socialLinks.map((s) => s.url);

/** Public-facing location label — the region we serve, never a street address. */
export const serviceAreaLabel = `${company.address.city} & East Tennessee`;

// Map query. For a service-area business we center on the city/region so the
// map shows our coverage area — never a pin on the owner's home address.
const mapQuery = encodeURIComponent(
  company.serviceAreaBusiness
    ? `${company.address.city}, ${company.address.state}`
    : [company.name, company.address.street, `${company.address.city}, ${company.address.state}`, company.address.zip]
        .filter(Boolean)
        .join(', '),
);
/** Keyless embeddable map (for an <iframe>) — no API key required. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
/**
 * "View us on Google" link. Prefers the real Google Business Profile listing
 * (set company.social.google); falls back to a Maps search for the business name.
 */
export const googleListingUrl =
  company.social.google || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.name + ' ' + company.address.city + ' ' + company.address.state)}`;
/** "Leave a Google review" link — prefers the direct review link, else the listing. */
export const googleReviewUrl = company.googleReviewUrl || googleListingUrl;
