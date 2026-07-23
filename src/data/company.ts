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
  // Keep ONE tagline number everywhere.
  yearsExperience: 20,
  tagline: 'Knoxville’s concrete & hardscape experts — built right the first time.',
  description:
    'Paramount Concrete & Hardscapes designs and builds concrete, pavers, retaining walls, patios, outdoor kitchens, and decks for homeowners across Knoxville and East Tennessee.',

  // NAP — must match Google Business Profile + every citation exactly.
  phone: '(865) 237-9770',
  phoneHref: 'tel:+18652379770',
  email: 'info@paramountknox.com', // PLACEHOLDER — confirm
  address: {
    street: '1201 Bob Kirby Rd',
    city: 'Knoxville',
    state: 'TN',
    zip: '37932', // PLACEHOLDER — confirm ZIP
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
    instagram: 'https://www.instagram.com/paramounthomerenovations/',
    tiktok: '', // not used
    google: '', // PLACEHOLDER — Google Business Profile URL
  },

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
