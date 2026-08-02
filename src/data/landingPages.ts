/**
 * Dedicated PPC landing pages for Google Ads (concrete campaign).
 * Each pulls its body copy (intro, sections, cost, FAQ) from the matching
 * service in services.ts, but with a conversion-focused, concrete-only layout
 * (see LandingLayout.astro). All are noindex,nofollow so they never compete
 * with the organic service pages.
 */
export interface LandingPage {
  /** URL slug → /lp/{slug}/ */
  slug: string;
  /** Source service path in services.ts */
  servicePath: string;
  h1: string;
  valueProp: string;
  /** Filename fragment to use as the hero image (optional). */
  heroPhotoMatch?: string;
}

export const landingPages: LandingPage[] = [
  {
    slug: 'concrete-driveways',
    servicePath: 'concrete/driveways',
    h1: 'Concrete Driveways in Knoxville, TN — Built to Last 30+ Years',
    valueProp:
      'New driveways and replacements poured on a properly compacted base with real drainage — so they don’t crack, settle or heave.',
    heroPhotoMatch: 'concrete-driveway',
  },
  {
    slug: 'concrete-patios',
    servicePath: 'concrete/patio',
    h1: 'Concrete Patios in Knoxville, TN — Your New Favorite Room',
    valueProp:
      'Broom-finish and stamped patios engineered for East Tennessee summers and freeze-thaw winters.',
    heroPhotoMatch: 'maryville-concrete-patio',
  },
  {
    slug: 'stamped-concrete',
    servicePath: 'concrete/decorative-and-stamped',
    h1: 'Stamped Concrete in Knoxville, TN — The Look of Stone for Less',
    valueProp:
      'Stamped and stained patios, walkways and pool decks with the high-end look of stone or brick at a fraction of the price.',
    heroPhotoMatch: 'stamped-concrete',
  },
  {
    slug: 'concrete-sidewalks-walkways',
    servicePath: 'concrete/sidewalks-walkways',
    h1: 'Concrete Sidewalks & Walkways in Knoxville, TN',
    valueProp:
      'Safe, level, properly-drained paths and steps that won’t heave, crack or turn into a trip hazard.',
  },
  {
    slug: 'concrete-repair',
    servicePath: 'concrete/repair',
    h1: 'Concrete Repair in Knoxville, TN — Fixed Right, Not Just Patched',
    valueProp:
      'We replace cracked and sunken sections on a proper base so the problem doesn’t come right back.',
  },
  {
    slug: 'concrete-contractor',
    servicePath: 'concrete',
    h1: 'Concrete Contractor in Knoxville, TN — Driveways, Patios & More',
    valueProp:
      'Licensed, insured and locally owned since 2018. Driveways, patios, stamped concrete and repair — done right the first time.',
    heroPhotoMatch: 'concrete-patio-01',
  },
];
