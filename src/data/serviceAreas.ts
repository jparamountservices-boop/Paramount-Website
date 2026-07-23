/**
 * Service-area (city) data. Each city page is genuinely differentiated with
 * local context (neighborhoods, terrain, notes) to avoid thin/duplicate content.
 * Preserves the existing indexed slug pattern: /service-area/{city}/.
 */

export interface ServiceArea {
  slug: string;
  city: string;
  county: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  primaryKeyword: string;
  intro: string[];
  localAngle: string[]; // unique local content: terrain, neighborhoods, demand
  faqs: { q: string; a: string }[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'knoxville',
    city: 'Knoxville',
    county: 'Knox County',
    title: 'Concrete & Hardscape Contractor Knoxville TN | Paramount',
    metaDescription:
      'Paramount Concrete & Hardscapes serves Knoxville, TN with driveways, patios, pavers, retaining walls, fire pits and outdoor kitchens. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in Knoxville, TN',
    heroSubhead:
      'Our home base. From Bearden to Halls, we build concrete and hardscapes engineered for Knoxville’s clay soil and freeze-thaw winters.',
    primaryKeyword: 'concrete contractor Knoxville TN',
    intro: [
      'Knoxville is home for Paramount, and we know exactly what our soil and weather do to a poorly-built slab or wall. The clay holds water, the winters freeze and thaw, and the hills mean drainage and grading matter on almost every project.',
      'We build driveways, patios, paver installations, retaining walls, fire features and outdoor kitchens across Knoxville and all of Knox County — from established neighborhoods like Sequoyah Hills, Bearden and Fountain City to newer developments in West Knox and Hardin Valley.',
    ],
    localAngle: [
      'Knoxville’s older neighborhoods often mean tearing out and rebuilding aging concrete on lots that have settled for decades — base prep and drainage are everything.',
      'The rolling terrain across Knox County makes retaining walls and proper grading a common need, especially on hillside lots off the ridgelines.',
    ],
    faqs: [
      {
        q: 'What areas of Knoxville do you serve?',
        a: 'All of Knox County — West Knoxville, Bearden, Sequoyah Hills, Fountain City, Halls, Powell, Hardin Valley, Farragut and everywhere in between — plus surrounding counties across East Tennessee.',
      },
    ],
  },
  {
    slug: 'farragut',
    city: 'Farragut',
    county: 'Knox County',
    title: 'Concrete & Hardscape Contractor Farragut TN | Paramount',
    metaDescription:
      'Concrete, pavers, patios, retaining walls and outdoor living in Farragut, TN. Premium hardscape design and build. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in Farragut, TN',
    heroSubhead:
      'Premium patios, paver driveways and outdoor living for Farragut and West Knox homes — built to the standard the neighborhood expects.',
    primaryKeyword: 'concrete contractor Farragut TN',
    intro: [
      'Farragut homeowners tend to want outdoor spaces that match their homes — and HOAs that expect the work to be done right. We design and build premium patios, paver driveways, retaining walls and complete outdoor living spaces throughout Farragut and West Knox County.',
      'From subdivisions off Kingston Pike to lakeside properties near Fort Loudoun, we handle the design, drainage and craftsmanship that hold up and add real value.',
    ],
    localAngle: [
      'Farragut’s newer, higher-end homes are a natural fit for paver patios, outdoor kitchens and stamped-concrete work that complements the architecture.',
      'Lakeside and sloped lots near the Tennessee River often need engineered retaining walls and serious drainage planning.',
    ],
    faqs: [
      {
        q: 'Do you work within Farragut HOA and permit requirements?',
        a: 'Yes. We’re used to working within Farragut’s HOA guidelines and town permitting, and we build to code — including engineered designs for taller retaining walls.',
      },
    ],
  },
  {
    slug: 'west-knoxville',
    city: 'West Knoxville',
    county: 'Knox County',
    title: 'Concrete & Hardscape Contractor West Knoxville TN | Paramount',
    metaDescription:
      'Driveways, paver patios, retaining walls and outdoor living in West Knoxville, TN. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in West Knoxville, TN',
    heroSubhead:
      'Patios, driveways and outdoor living across West Knox — Bearden, Cedar Bluff, Hardin Valley and beyond.',
    primaryKeyword: 'concrete contractor West Knoxville TN',
    intro: [
      'West Knoxville is where a lot of our work happens — Bearden, Cedar Bluff, Hardin Valley, Rocky Hill and the growing corridors off Kingston Pike and Northshore. These are neighborhoods where a well-built patio or paver driveway is both a lifestyle upgrade and a real resale asset.',
      'We handle everything from replacing a cracked driveway to designing a full backyard with a paver patio, fire feature and outdoor kitchen.',
    ],
    localAngle: [
      'Hardin Valley’s rapid growth means many new-construction homes with builder-grade basics ready for an upgraded patio, driveway or outdoor living space.',
      'Established West Knox neighborhoods often need concrete tear-out and replacement done cleanly around mature landscaping.',
    ],
    faqs: [
      {
        q: 'Can you upgrade a builder-grade backyard?',
        a: 'Absolutely — that’s one of our most common projects in West Knox. We turn a bare builder-grade patio and yard into a designed outdoor living space with paving, walls, fire features and more.',
      },
    ],
  },
  {
    slug: 'maryville',
    city: 'Maryville',
    county: 'Blount County',
    title: 'Concrete & Hardscape Contractor Maryville TN | Paramount',
    metaDescription:
      'Concrete, pavers, patios, retaining walls and outdoor living in Maryville & Alcoa, TN. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in Maryville, TN',
    heroSubhead:
      'Serving Maryville, Alcoa and Blount County with concrete and hardscapes built for the foothills.',
    primaryKeyword: 'concrete contractor Maryville TN',
    intro: [
      'Maryville and the rest of Blount County sit right at the foothills of the Smokies, and the terrain shows it — sloped lots, rock, and plenty of properties that need thoughtful grading and retaining walls. We build concrete driveways, patios, paver installations and full outdoor living spaces throughout Maryville and Alcoa.',
    ],
    localAngle: [
      'Foothills terrain around Maryville makes retaining walls, tiered patios and drainage a frequent need.',
      'Growing residential areas near Pellissippi Parkway and the Alcoa Highway corridor drive strong demand for outdoor living upgrades.',
    ],
    faqs: [
      {
        q: 'Do you serve Alcoa and the rest of Blount County?',
        a: 'Yes — Maryville, Alcoa, Louisville, Friendsville and the surrounding Blount County communities are all within our service area.',
      },
    ],
  },
  {
    slug: 'oak-ridge',
    city: 'Oak Ridge',
    county: 'Anderson County',
    title: 'Concrete & Hardscape Contractor Oak Ridge TN | Paramount',
    metaDescription:
      'Driveways, patios, pavers and retaining walls in Oak Ridge & Clinton, TN. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in Oak Ridge, TN',
    heroSubhead:
      'Concrete and hardscapes for Oak Ridge, Clinton and the Anderson County corridor.',
    primaryKeyword: 'concrete contractor Oak Ridge TN',
    intro: [
      'From Oak Ridge to Clinton, Anderson County homeowners count on us for driveways, patios, retaining walls and outdoor living spaces built to last. Many of Oak Ridge’s established mid-century homes are ready for driveway replacements and patio upgrades, and we handle the tear-out and rebuild cleanly.',
    ],
    localAngle: [
      'Oak Ridge’s original-era housing stock means a lot of aging concrete due for replacement on a properly rebuilt base.',
      'The wooded, rolling lots common in Anderson County often call for retaining walls and drainage work.',
    ],
    faqs: [
      {
        q: 'Do you serve Clinton and the rest of Anderson County?',
        a: 'Yes — Oak Ridge, Clinton, and surrounding Anderson County communities are all within our service area.',
      },
    ],
  },
  {
    slug: 'sevierville',
    city: 'Sevierville',
    county: 'Sevier County',
    title: 'Concrete & Hardscape Contractor Sevierville TN | Paramount',
    metaDescription:
      'Concrete, pavers, decks, patios and retaining walls in Sevierville, Seymour & Sevier County, TN — including cabins and rental properties. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in Sevierville, TN',
    heroSubhead:
      'Concrete, decks and hardscapes for Sevierville, Seymour and Sevier County — homes, cabins and rental properties.',
    primaryKeyword: 'concrete contractor Sevierville TN',
    intro: [
      'Sevier County’s mix of family homes, mountain cabins and short-term rental properties makes for interesting projects — steep grades, big views, and decks and hardscapes that need to handle both the terrain and heavy guest traffic. We build driveways, patios, decks, retaining walls and outdoor living spaces across Sevierville, Seymour and Pigeon Forge.',
    ],
    localAngle: [
      'Cabin and rental properties in Sevier County often need durable decks, parking pads and retaining walls that stand up to steep mountain lots and constant use.',
      'Big elevation changes make engineered retaining walls and drainage a core part of most projects here.',
    ],
    faqs: [
      {
        q: 'Do you work on cabins and rental properties?',
        a: 'Yes. We build decks, parking areas, patios and retaining walls for primary homes, cabins and short-term rentals throughout Sevier County — durable builds designed for steep lots and heavy use.',
      },
    ],
  },
  {
    slug: 'lenoir-city',
    city: 'Lenoir City',
    county: 'Loudon County',
    title: 'Concrete & Hardscape Contractor Lenoir City TN | Paramount',
    metaDescription:
      'Concrete, pavers, patios and retaining walls in Lenoir City & Loudon County, TN — including lakefront properties. Free estimates: (865) 237-9770.',
    h1: 'Concrete & Hardscape Contractor in Lenoir City, TN',
    heroSubhead:
      'Serving Lenoir City, Loudon and the Tellico & Fort Loudoun lake communities.',
    primaryKeyword: 'concrete contractor Lenoir City TN',
    intro: [
      'Lenoir City and Loudon County wrap around some of East Tennessee’s best lake living, and lakefront and Tellico Village properties come with their own demands — slopes down to the water, retaining walls, and outdoor living spaces built to take in the view. We build the full range of concrete and hardscape work throughout Loudon County.',
    ],
    localAngle: [
      'Lakefront and Tellico Village lots frequently need tiered retaining walls, steps and patios that step down toward the water.',
      'Outdoor living spaces built for entertaining and views are in high demand across the lake communities.',
    ],
    faqs: [
      {
        q: 'Do you build lakefront retaining walls and patios?',
        a: 'Yes — sloped lakefront lots are a specialty. We engineer retaining walls and terraced hardscapes with the drainage these properties require.',
      },
    ],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
