/**
 * Service × city landing pages for the highest-value combinations:
 * Concrete and Pavers across the "money towns" within ~35 miles of Knoxville.
 *
 * These are deliberately NOT thin/templated doorway pages. Each entry carries
 * genuinely unique local copy (neighborhoods, terrain, lot conditions, local
 * demand) so it earns its own ranking instead of diluting the site. We only
 * build these for the two flagship services in the towns that matter, rather
 * than an exhaustive service×city grid.
 *
 * URL pattern: /concrete/{town}/ and /pavers/{town}/ — nested under the service
 * hub for tight topical clustering.
 */

export type LocalService = 'concrete' | 'pavers';

export interface LocalServicePage {
  service: LocalService;
  serviceLabel: string; // 'Concrete' | 'Pavers'
  townSlug: string;
  city: string;
  county: string;
  areaSlug: string; // matching /service-area/{areaSlug}/
  title: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  primaryKeyword: string;
  intro: string[];
  sections: { h2: string; body?: string[]; bullets?: string[] }[];
  costNote: string;
  faqs: { q: string; a: string }[];
  relatedServices: string[]; // service.path values from services.ts
}

const CONCRETE_COST =
  'Concrete flatwork in this area runs about $10–$12 per square foot for a broom or troweled finish and upwards of $18–$20 for stamped or stained decorative work. Size and access, whether the pour has to be pumped, the mix (PSI and fiber) and upgrades like wire mesh all affect the final number. We give itemized estimates.';

const PAVER_COST =
  'Paver patios generally run about $25–$35 per square foot installed and paver driveways $45–$55, depending on the paver, pattern and base work. Walkways and steps are priced by the project rather than a flat per-foot rate. We give itemized estimates after seeing the space.';

const CONCRETE_RELATED = [
  'concrete/driveways',
  'concrete/patio',
  'concrete/decorative-and-stamped',
  'concrete/sidewalks-walkways',
];
const PAVER_RELATED = ['pavers/patios', 'pavers/driveways', 'pavers/walkways'];

export const localServicePages: LocalServicePage[] = [
  /* ============================ KNOXVILLE ============================ */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'knoxville',
    city: 'Knoxville',
    county: 'Knox County',
    areaSlug: 'knoxville',
    title: 'Concrete Contractor Knoxville TN | Driveways, Patios & Slabs | Paramount',
    metaDescription:
      'Concrete driveways, patios, stamped concrete and slabs in Knoxville, TN — built for our clay soil and freeze-thaw winters. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Knoxville, TN',
    heroSubhead:
      'Driveways, patios, stamped concrete and slabs across Knox County — poured on a base built for our red clay.',
    primaryKeyword: 'concrete contractor Knoxville TN',
    intro: [
      'Knoxville is home base for Paramount, so we know exactly what our soil and weather do to concrete that was poured in a hurry. The red clay under most of Knox County holds water, our winters freeze and thaw, and the hills mean drainage matters on nearly every lot. That’s why our driveways and patios in Bearden, Sequoyah Hills, Fountain City and West Hills are still flat and crack-controlled years after the pour.',
      'A lot of Knoxville concrete work is tear-out and replacement — aging slabs on older, settled lots that were never put on a proper base. We dig it out, compact the sub-base, get the grading and drainage right, and reinforce it so the new pour doesn’t follow the old one back into the ground.',
    ],
    sections: [
      {
        h2: 'Concrete we pour across Knoxville',
        bullets: [
          'Driveways and driveway replacements',
          'Patios — broom, troweled and stamped',
          'Stamped and stained decorative concrete',
          'Sidewalks, walkways and steps',
          'Garage, shed and equipment slabs',
          'Pool decks',
        ],
      },
      {
        h2: 'Built for Knoxville’s clay and older lots',
        body: [
          'From the established streets of Holston Hills and Old North Knoxville to newer builds in Hardin Valley, the failure story is almost always the same: a slab poured thin, on uncompacted clay, with nowhere for water to go. We fix the cause, not just the surface — compacted base, correct thickness, reinforcement and control joints placed where the slab actually wants to crack.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'How much does a concrete driveway cost in Knoxville?',
        a: 'A standard broom-finish concrete driveway in Knoxville runs about $10–$12 per square foot, and a typical two-car driveway often lands between $6,000 and $10,000 depending on size, access, tear-out, drainage and mix upgrades. We measure your site and give you an itemized number.',
      },
      {
        q: 'Do you replace old, cracked concrete in older Knoxville neighborhoods?',
        a: 'Yes — tear-out and replacement is a big part of what we do in Bearden, Fountain City and other established areas. The key is rebuilding on a properly compacted base with drainage so the new slab doesn’t crack like the old one did.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'knoxville',
    city: 'Knoxville',
    county: 'Knox County',
    areaSlug: 'knoxville',
    title: 'Paver Patios & Driveways Knoxville TN | Belgard & Techo-Bloc | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in Knoxville, TN — Belgard & Techo-Bloc installed on a deep base that flexes with our clay soil. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Knoxville, TN',
    heroSubhead:
      'Premium paver patios, driveways and walkways across Knox County — built on a base that won’t sink or heave.',
    primaryKeyword: 'paver patio Knoxville TN',
    intro: [
      'Pavers are the premium answer to Knoxville’s biggest concrete problem: ground that moves. Instead of one rigid slab that cracks when the clay swells and settles, a paver patio or driveway is hundreds of interlocking units on a deep compacted base — it flexes with the ground, and any single unit can be lifted and reset if it ever shifts.',
      'We install Belgard, Techo-Bloc and Regal systems for homeowners from Sequoyah Hills to Hardin Valley, designing patios, driveways and walkways that match the house and hold their color through our freeze-thaw winters.',
    ],
    sections: [
      {
        h2: 'Paver work we build in Knoxville',
        bullets: [
          'Paver patios and multi-level outdoor rooms',
          'Paver driveways and aprons',
          'Front walkways, garden paths and steps',
          'Seat walls, fire pits and pillars',
          'Pool decks and coping',
        ],
      },
      {
        h2: 'Why pavers make sense on Knox County lots',
        body: [
          'Our clay is the reason so many poured slabs around town crack down the middle. Pavers side-step that entirely — they move with the soil rather than fighting it. On the sloped lots common off Knoxville’s ridgelines, we tie the paver work into proper grading and drainage so water leaves the patio instead of pooling under it.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'Are pavers worth it over concrete in Knoxville?',
        a: 'For many Knoxville homeowners, yes. Pavers cost more up front but flex with our clay soil instead of cracking, last 50+ years, and are repairable one unit at a time. Concrete is the value option; pavers are the long-term investment.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ========================= WEST KNOXVILLE ========================= */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'west-knoxville',
    city: 'West Knoxville',
    county: 'Knox County',
    areaSlug: 'west-knoxville',
    title: 'Concrete Contractor West Knoxville TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and stamped concrete in West Knoxville, TN — Hardin Valley, Cedar Bluff, Bluegrass and Northshore. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in West Knoxville, TN',
    heroSubhead:
      'Driveways, patios and decorative concrete for Hardin Valley, Cedar Bluff, Bluegrass and Northshore homes.',
    primaryKeyword: 'concrete contractor West Knoxville TN',
    intro: [
      'West Knoxville is where a lot of the county’s growth is happening, and newer subdivisions in Hardin Valley, Bluegrass and around Northshore come with their own concrete needs — big driveways, new-build patios, and slabs for the shops and additions that come after move-in.',
      'Newer construction doesn’t automatically mean a properly built slab. We see plenty of builder-grade concrete that was poured thin and fast on clay that wasn’t compacted. We build it the right way the first time, or replace it right when it fails early.',
    ],
    sections: [
      {
        h2: 'Concrete we pour in West Knox',
        bullets: [
          'Driveways, extensions and parking pads',
          'New-construction and replacement patios',
          'Stamped and decorative concrete',
          'Garage, shop and outbuilding slabs',
          'Sidewalks, walkways and steps',
        ],
      },
      {
        h2: 'Bigger lots, bigger drainage jobs',
        body: [
          'The larger lots around Cedar Bluff, Gettysvue and Hardin Valley often mean longer driveways and more grading — and the more area you pour, the more drainage matters. We plan slope and water runoff before the pour so a big new driveway or patio sheds water away from the home instead of holding it against the foundation.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you work in Hardin Valley and the newer West Knox subdivisions?',
        a: 'Yes — Hardin Valley, Bluegrass, Cedar Bluff, Northshore and the surrounding West Knoxville neighborhoods are core to our service area, for both new patios and replacing builder-grade concrete that failed early.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'west-knoxville',
    city: 'West Knoxville',
    county: 'Knox County',
    areaSlug: 'west-knoxville',
    title: 'Paver Patios & Driveways West Knoxville TN | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in West Knoxville, TN — Hardin Valley, Cedar Bluff and Northshore. Belgard & Techo-Bloc built to last. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in West Knoxville, TN',
    heroSubhead:
      'Custom paver outdoor living for Hardin Valley, Cedar Bluff, Gettysvue and Northshore.',
    primaryKeyword: 'paver patio West Knoxville TN',
    intro: [
      'West Knox homeowners tend to want a backyard that matches the house — and in newer Hardin Valley and Gettysvue neighborhoods, that increasingly means a designed paver patio rather than a plain slab. We build paver patios, driveways and walkways that turn a builder-blank backyard into the best room in the house.',
      'Because pavers flex with the ground, they’re ideal for the freshly graded lots common in new West Knox subdivisions, where fill soil can still be settling for a season or two after the house goes up.',
    ],
    sections: [
      {
        h2: 'Paver projects across West Knoxville',
        bullets: [
          'Paver patios and outdoor living rooms',
          'Paver driveways and grand entrances',
          'Walkways, paths and steps',
          'Seat walls, fire pits and outdoor kitchens',
          'Pool decks',
        ],
      },
      {
        h2: 'Designed as one outdoor room',
        body: [
          'Rather than a patio with furniture dropped on it, we design West Knox backyards as a single space — patio, seat walls, fire feature and lighting planned together. On the roomy lots around Cedar Bluff and Northshore, that’s the difference between an outdoor room you use every weekend and a slab you walk past.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'How much does a paver patio cost in West Knoxville?',
        a: 'Most paver patios run about $25–$35 per square foot installed. A common 300–400 sq ft patio often lands in the $7,500–$14,000 range depending on the paver, pattern and any walls, steps or fire features. We give an itemized estimate after seeing your yard.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ============================ FARRAGUT ============================ */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'farragut',
    city: 'Farragut',
    county: 'Knox County',
    areaSlug: 'farragut',
    title: 'Concrete Contractor Farragut TN | Driveways & Decorative Concrete | Paramount',
    metaDescription:
      'Concrete driveways, patios and stamped concrete in Farragut, TN — built to the standard the neighborhood and HOA expect. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Farragut, TN',
    heroSubhead:
      'Driveways, patios and decorative concrete finished to the standard Farragut homes expect.',
    primaryKeyword: 'concrete contractor Farragut TN',
    intro: [
      'Farragut homeowners expect the work to look right and be done right — and many neighborhoods have HOA standards to match. We pour driveways, patios and decorative concrete throughout Farragut, from Fox Den to Village Green to the Concord area, with the clean finishes and crisp joint work these homes call for.',
      'Stamped and stained concrete is especially popular here for homeowners who want the look of stone or brick on a patio or entryway without stepping all the way up to pavers. We match patterns and colors to the house so the new work looks original to it.',
    ],
    sections: [
      {
        h2: 'Concrete work we do in Farragut',
        bullets: [
          'Driveways and decorative driveway aprons',
          'Broom, troweled and stamped patios',
          'Stamped and stained decorative concrete',
          'Walkways, entries and steps',
          'Pool decks',
        ],
      },
      {
        h2: 'Finishes that fit the neighborhood',
        body: [
          'In Farragut, the finish matters as much as the structure. We take extra care with edge lines, joint layout and stamp/color selection so a driveway or patio reads as a deliberate upgrade — not just poured gray. And because so many Farragut lots back up to the Fort Loudoun Lake area, we plan drainage carefully on the sloped ones.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Can you match decorative concrete to my Farragut home and HOA?',
        a: 'Yes. With stamped patterns, integral color and borders we can complement your home’s brick or stone and keep it consistent with neighborhood and HOA expectations. We’re glad to walk through options before you commit.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'farragut',
    city: 'Farragut',
    county: 'Knox County',
    areaSlug: 'farragut',
    title: 'Paver Patios & Driveways Farragut TN | Premium Outdoor Living | Paramount',
    metaDescription:
      'Premium paver patios, driveways and outdoor living in Farragut, TN — Belgard & Techo-Bloc built to a lasting standard. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Farragut, TN',
    heroSubhead:
      'Premium paver driveways, patios and outdoor living for Fox Den, Village Green and Concord.',
    primaryKeyword: 'paver patio Farragut TN',
    intro: [
      'Farragut is where paver driveways and full outdoor living spaces make the most sense — upscale homes, an eye for curb appeal, and buyers who recognize pavers as the premium surface. We design and build paver driveways, patios, walkways and complete backyard rooms throughout Farragut and West Knox.',
      'A paver driveway is a signature entrance — a much wider range of colors, patterns and borders than concrete, and a surface that flexes with the ground instead of cracking. Done on our driveway-grade base, it lasts 50 years or more.',
    ],
    sections: [
      {
        h2: 'Paver projects in Farragut',
        bullets: [
          'Paver driveways and grand entrances',
          'Paver patios and multi-level outdoor rooms',
          'Outdoor kitchens, seat walls and fire features',
          'Walkways, courtyards and steps',
          'Pool decks and coping',
        ],
      },
      {
        h2: 'Built to the Farragut standard',
        body: [
          'In neighborhoods like Fox Den and Village Green, the details are the whole point — herringbone driveways, banded borders, seat walls and lighting that make the space feel designed. We build on a deep compacted base with locked joints and edge restraint so the finish stays as tight in year ten as it was on install day.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'How much does a paver driveway cost in Farragut?',
        a: 'Paver driveways generally run about $45–$55 per square foot installed depending on the paver, pattern and base depth. It’s more than concrete up front, but far longer-lasting, repairable, and a strong curb-appeal and resale investment for Farragut homes.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ============================ MARYVILLE ============================ */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'maryville',
    city: 'Maryville',
    county: 'Blount County',
    areaSlug: 'maryville',
    title: 'Concrete Contractor Maryville TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and stamped concrete in Maryville, TN and Blount County. Built for foothills terrain. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Maryville, TN',
    heroSubhead:
      'Driveways, patios and decorative concrete for Maryville and the Blount County foothills.',
    primaryKeyword: 'concrete contractor Maryville TN',
    intro: [
      'Maryville sits in the foothills at the gateway to the Smokies, and that terrain shapes almost every concrete job here — more grade, more drainage planning, and lots that fall away toward creeks and hollows. We build driveways, patios and decorative concrete across Maryville and Blount County that account for the slope instead of fighting it.',
      'From established neighborhoods near downtown and Maryville College to newer developments toward Pellissippi and the airport, we handle both new pours and tearing out aging concrete that settled because the base was never built right.',
    ],
    sections: [
      {
        h2: 'Concrete we pour in Maryville',
        bullets: [
          'Driveways on flat and sloped lots',
          'Patios — broom, troweled and stamped',
          'Stamped and stained decorative concrete',
          'Sidewalks, walkways and steps',
          'Garage and outbuilding slabs',
        ],
      },
      {
        h2: 'Foothills grading and drainage',
        body: [
          'The number-one killer of concrete in the Blount County foothills is water with nowhere to go. On graded Maryville lots we plan the slope and runoff first, so a new driveway or patio sheds water downhill and away from the house rather than pooling and undermining the slab.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you serve Maryville and the rest of Blount County?',
        a: 'Yes — Maryville, Alcoa, Louisville and the surrounding Blount County communities are all part of our regular service area for driveways, patios and decorative concrete.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'maryville',
    city: 'Maryville',
    county: 'Blount County',
    areaSlug: 'maryville',
    title: 'Paver Patios & Driveways Maryville TN | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in Maryville, TN — Belgard & Techo-Bloc built for foothills lots that move. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Maryville, TN',
    heroSubhead:
      'Paver patios, driveways and walkways for Maryville and the Blount County foothills.',
    primaryKeyword: 'paver patio Maryville TN',
    intro: [
      'On Maryville’s foothills lots, pavers have a real edge — they flex with ground that shifts on slopes and settles after grading, instead of cracking like a rigid slab. We build paver patios, driveways and walkways throughout Maryville and Blount County, tying each into the grading and drainage the terrain demands.',
      'A paver patio also opens up sloped backyards that a flat slab can’t handle well: we can step it, terrace it, and wrap it with seat walls so a hillside becomes usable outdoor living space.',
    ],
    sections: [
      {
        h2: 'Paver work across Maryville',
        bullets: [
          'Paver patios, including terraced and multi-level',
          'Paver driveways and aprons',
          'Walkways, paths and steps up a grade',
          'Seat walls, fire pits and retaining tie-ins',
          'Pool decks',
        ],
      },
      {
        h2: 'Pavers plus retaining on foothills lots',
        body: [
          'Maryville projects often combine a paver patio with a retaining wall to carve level space out of a slope. Because we build both, we design them together — the wall holds the grade and drains properly, and the patio sits level on top, so the whole outdoor room works as one piece.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'Can you build a patio on my sloped Maryville backyard?',
        a: 'Yes — sloped lots are a specialty in the foothills. We often pair a paver patio with a retaining wall and drainage to turn an unusable grade into level, usable outdoor living space.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ============================== ALCOA ============================== */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'alcoa',
    city: 'Alcoa',
    county: 'Blount County',
    areaSlug: 'alcoa',
    title: 'Concrete Contractor Alcoa TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and slabs in Alcoa, TN — near Springbrook, the Alcoa Highway corridor and McGhee Tyson. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Alcoa, TN',
    heroSubhead:
      'Driveways, patios and slabs for Alcoa and the greater Maryville area.',
    primaryKeyword: 'concrete contractor Alcoa TN',
    intro: [
      'Alcoa sits at the center of Blount County’s steady growth, and we pour the full range of concrete work across it — driveways, patios, decorative concrete and slabs, from the neighborhoods around Springbrook to newer builds along the Alcoa Highway and Pellissippi corridors.',
      'A lot of Alcoa work is new-construction backyards ready for their first real patio, plus replacing driveways and walks that were poured thin and are already cracking. Either way, the base and drainage are what make it last.',
    ],
    sections: [
      {
        h2: 'Concrete we build in Alcoa',
        bullets: [
          'Driveways and parking pads',
          'New-construction and replacement patios',
          'Stamped and stained decorative concrete',
          'Sidewalks, walkways and steps',
          'Garage, shop and equipment slabs',
        ],
      },
      {
        h2: 'Solid slabs on Blount County ground',
        body: [
          'Closer to the river bottoms around Alcoa the ground can be softer, which makes sub-base compaction and proper thickness even more important for a slab that carries vehicles. We build the base to match the lot so your driveway or shop slab doesn’t settle and crack.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you serve both Alcoa and Maryville?',
        a: 'Yes — Alcoa, Maryville, Louisville and the surrounding Blount County communities are all part of our regular concrete service area.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'alcoa',
    city: 'Alcoa',
    county: 'Blount County',
    areaSlug: 'alcoa',
    title: 'Paver Patios & Driveways Alcoa TN | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in Alcoa, TN — Belgard & Techo-Bloc installed on a base built to last. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Alcoa, TN',
    heroSubhead:
      'Paver patios, driveways and outdoor living for Alcoa and the greater Maryville area.',
    primaryKeyword: 'paver patio Alcoa TN',
    intro: [
      'With so many newer backyards around Alcoa and Springbrook, pavers are a popular way to turn a blank builder lot into a designed outdoor space. We install paver patios, driveways and walkways throughout Alcoa and Blount County, built on the deep compacted base that keeps them flat for decades.',
      'On the flatter, freshly graded lots common in Alcoa’s newer developments, we pay close attention to edge restraint and drainage so the field stays tight and water leaves the patio rather than sitting on it.',
    ],
    sections: [
      {
        h2: 'Paver projects in Alcoa',
        bullets: [
          'Paver patios and outdoor rooms',
          'Paver driveways and aprons',
          'Walkways, paths and steps',
          'Seat walls, fire pits and outdoor kitchens',
          'Pool decks',
        ],
      },
      {
        h2: 'Why pavers hold up here',
        body: [
          'A paver surface handles ground movement and settling far better than a poured slab — a real advantage on newer Alcoa lots where fill soil is still consolidating. And if a unit ever settles, it lifts and resets in minutes instead of requiring a whole new pour.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'Are pavers a good choice for a new-construction backyard in Alcoa?',
        a: 'Often, yes. Because pavers flex with settling ground and are repairable one unit at a time, they’re well suited to newer graded lots. We build on a deep compacted base so the patio or driveway stays flat as the lot finishes settling.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ============================ LOUISVILLE ============================ */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'louisville',
    city: 'Louisville',
    county: 'Blount County',
    areaSlug: 'louisville',
    title: 'Concrete Contractor Louisville TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and decorative concrete in Louisville, TN on Fort Loudoun Lake. Built for sloped, waterfront lots. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Louisville, TN',
    heroSubhead:
      'Driveways, patios and decorative concrete for Louisville’s lakeside lots on Fort Loudoun Lake.',
    primaryKeyword: 'concrete contractor Louisville TN',
    intro: [
      'Louisville is lake country between Knoxville and Maryville, and its lots tend to fall away toward Fort Loudoun Lake — which puts grade and drainage at the center of nearly every concrete job here. We pour driveways, patios and decorative concrete for Louisville homes, planning the slope and water runoff so the work lasts on waterfront ground.',
      'Lakeside living also means longer approach driveways and entertaining space that gets real use. We build both to hold up — proper base, correct thickness, and drainage that carries water down the grade instead of under the slab.',
    ],
    sections: [
      {
        h2: 'Concrete we pour in Louisville',
        bullets: [
          'Driveways and long lakeside approaches',
          'Patios — broom, troweled and stamped',
          'Stamped and stained decorative concrete',
          'Walkways, steps and lake-path connections',
          'Garage and boathouse-area slabs',
        ],
      },
      {
        h2: 'Concrete that respects the grade',
        body: [
          'On a lot that slopes toward the water, a slab poured without a drainage plan becomes a problem fast — runoff undermines it and erosion does the rest. We handle the grading and drainage as part of the job so a Louisville driveway or patio stays put where a rushed pour would slide.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you handle sloped, lakefront concrete jobs in Louisville?',
        a: 'Yes — waterfront and sloped lots are some of our favorite work. We plan grading and drainage first so a lakeside driveway, patio or walkway stays stable and drains properly instead of eroding down the grade.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'louisville',
    city: 'Louisville',
    county: 'Blount County',
    areaSlug: 'louisville',
    title: 'Paver Patios & Lakeside Outdoor Living Louisville TN | Paramount',
    metaDescription:
      'Paver patios, driveways and lakeside outdoor living in Louisville, TN on Fort Loudoun Lake. Built for sloped waterfront lots. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Outdoor Living in Louisville, TN',
    heroSubhead:
      'Lakeside paver patios, driveways and outdoor rooms for Louisville homes on Fort Loudoun Lake.',
    primaryKeyword: 'paver patio Louisville TN',
    intro: [
      'Louisville’s waterfront lots are made for outdoor living — and pavers are the right surface for them. On ground that slopes toward Fort Loudoun Lake, pavers flex with the grade and terrace beautifully, so we can carve level patio space out of a hillside and step it down toward the water.',
      'We build paver patios, driveways, walkways and full outdoor rooms for Louisville homes, usually tying them into retaining walls and drainage so a lakeside slope becomes usable, entertaining space that holds up.',
    ],
    sections: [
      {
        h2: 'Lakeside paver projects in Louisville',
        bullets: [
          'Terraced paver patios stepping toward the water',
          'Paver driveways and lakeside approaches',
          'Walkways and steps down to docks and shoreline',
          'Fire pits, seat walls and outdoor kitchens',
          'Pool decks and coping',
        ],
      },
      {
        h2: 'Pavers, walls and drainage as one system',
        body: [
          'A lakefront outdoor space is really three jobs in one: a retaining wall to hold the grade, drainage so runoff doesn’t erode the slope, and the paver surface on top. Because we build all three, we design them together — the reason our Louisville patios stay level and the slope behind them stays put.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'Can you build a terraced lakeside patio in Louisville?',
        a: 'Yes — terracing a slope toward the water with paver patios and retaining walls is exactly the kind of project we love. We plan the walls, drainage and grading first so the finished outdoor room is level, stable and built for lake living.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ============================= OAK RIDGE ============================= */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'oak-ridge',
    city: 'Oak Ridge',
    county: 'Anderson County',
    areaSlug: 'oak-ridge',
    title: 'Concrete Contractor Oak Ridge TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and replacement concrete in Oak Ridge, TN — built for the city’s ridge lots and older homes. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Oak Ridge, TN',
    heroSubhead:
      'Driveways, patios and replacement concrete for Oak Ridge’s ridge-and-valley lots.',
    primaryKeyword: 'concrete contractor Oak Ridge TN',
    intro: [
      'Oak Ridge is full of established, mid-century homes on ridge lots — and a lot of them are running on original concrete that’s cracked, heaved and settled after decades. Replacement and repair is a big part of what we do here: tearing out tired driveways, walks and patios and rebuilding them on a base that will actually hold.',
      'The city’s ridge-and-valley terrain means grade and drainage are almost always part of the job. We pour new driveways, patios and decorative concrete throughout Oak Ridge and Anderson County with the slope planned in from the start.',
    ],
    sections: [
      {
        h2: 'Concrete work we do in Oak Ridge',
        bullets: [
          'Driveway tear-out and replacement',
          'Patios — broom, troweled and stamped',
          'Stamped and stained decorative concrete',
          'Sidewalks, walkways and steps',
          'Garage and carport slabs',
        ],
      },
      {
        h2: 'Replacing decades-old concrete the right way',
        body: [
          'Original mid-century slabs in Oak Ridge usually failed for the same reasons: thin pours on uncompacted ground with no drainage. We don’t just pour over the problem — we dig out, compact the sub-base, fix the grade, reinforce and joint it properly, so the replacement doesn’t crack like the one it replaced.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you replace old cracked driveways in Oak Ridge?',
        a: 'Yes — replacing aging mid-century concrete is one of the most common jobs we do in Oak Ridge. The value is in rebuilding on a properly compacted, well-drained base so the new driveway or patio lasts decades, not a few winters.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'oak-ridge',
    city: 'Oak Ridge',
    county: 'Anderson County',
    areaSlug: 'oak-ridge',
    title: 'Paver Patios & Driveways Oak Ridge TN | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in Oak Ridge, TN — Belgard & Techo-Bloc built to flex with ridge-lot ground movement. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Oak Ridge, TN',
    heroSubhead:
      'Paver patios, driveways and walkways for Oak Ridge homes on ridge-and-valley terrain.',
    primaryKeyword: 'paver patio Oak Ridge TN',
    intro: [
      'For Oak Ridge homeowners tired of watching a poured slab crack on shifting ridge ground, pavers are the upgrade that solves it — a flexible surface on a deep base that moves with the soil instead of splitting on it. We install paver patios, driveways and walkways across Oak Ridge and Anderson County.',
      'Pavers also modernize the look of the city’s many mid-century homes: a paver driveway or patio brings color, pattern and real curb appeal to a house that’s been staring at gray concrete since it was built.',
    ],
    sections: [
      {
        h2: 'Paver projects in Oak Ridge',
        bullets: [
          'Paver patios and outdoor living rooms',
          'Paver driveways replacing cracked concrete',
          'Walkways, paths and steps',
          'Seat walls, fire pits and retaining tie-ins',
          'Pool decks',
        ],
      },
      {
        h2: 'A flexible surface for ridge lots',
        body: [
          'The ridge-and-valley ground under Oak Ridge is exactly what cracks rigid slabs. Pavers handle it — the interlocking field flexes with seasonal movement, and any unit that ever settles lifts and resets rather than requiring a full replacement. On sloped Oak Ridge lots we tie the paver work into grading and retaining so the whole space stays put.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'Will pavers hold up better than concrete on my Oak Ridge lot?',
        a: 'On shifting ridge ground, usually yes. Pavers flex with soil movement instead of cracking, last 50+ years, and are repairable one unit at a time — a real advantage over a rigid slab on Oak Ridge’s terrain.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* ============================== CLINTON ============================== */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'clinton',
    city: 'Clinton',
    county: 'Anderson County',
    areaSlug: 'clinton',
    title: 'Concrete Contractor Clinton TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and slabs in Clinton, TN and Anderson County — including riverside and rural lots. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Clinton, TN',
    heroSubhead:
      'Driveways, patios and slabs for Clinton and the Anderson County area.',
    primaryKeyword: 'concrete contractor Clinton TN',
    intro: [
      'From Clinton’s historic downtown to riverside properties along the Clinch and the more rural lots north toward Norris Lake, we pour driveways, patios, slabs and decorative concrete across Anderson County. The mix here runs from tight in-town replacements to long approach driveways on acreage.',
      'Clinton’s established homes often need aging concrete torn out and rebuilt, while its rural lots call for bigger pours — shop slabs, barns and long drives — where getting the base and thickness right is what keeps them from cracking under load.',
    ],
    sections: [
      {
        h2: 'Concrete we pour in Clinton',
        bullets: [
          'Driveways, including long rural approaches',
          'Patios — broom, troweled and stamped',
          'Shop, barn and equipment slabs',
          'Sidewalks, walkways and steps',
          'Decorative and stamped concrete',
        ],
      },
      {
        h2: 'From in-town replacements to rural slabs',
        body: [
          'A downtown Clinton driveway replacement and a rural shop slab are different jobs, but the fundamentals don’t change: compacted sub-base, correct thickness and reinforcement for the load, and drainage so water doesn’t sit under it. Near the Clinch River, we pay extra attention to grade and runoff.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you pour large shop slabs and rural driveways around Clinton?',
        a: 'Yes — along with in-town driveway and patio work, we regularly pour larger shop and equipment slabs and long rural approach driveways across Anderson County. We size the base, thickness and reinforcement to the load and the lot.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'clinton',
    city: 'Clinton',
    county: 'Anderson County',
    areaSlug: 'clinton',
    title: 'Paver Patios & Driveways Clinton TN | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in Clinton, TN and Anderson County — Belgard & Techo-Bloc built to last. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Clinton, TN',
    heroSubhead:
      'Paver patios, driveways and walkways for Clinton and the Anderson County area.',
    primaryKeyword: 'paver patio Clinton TN',
    intro: [
      'Whether it’s a patio behind an established home near downtown Clinton or an outdoor living space on a lot toward Norris Lake, pavers bring a look and a longevity that poured concrete can’t match. We build paver patios, driveways and walkways throughout Clinton and Anderson County.',
      'Pavers flex with the ground instead of cracking, which suits Clinton’s mix of settled in-town lots and rural ground alike — and any single unit can be lifted and reset if it ever shifts.',
    ],
    sections: [
      {
        h2: 'Paver work across Clinton',
        bullets: [
          'Paver patios and outdoor rooms',
          'Paver driveways and aprons',
          'Walkways, paths and steps',
          'Fire pits, seat walls and pillars',
          'Pool decks',
        ],
      },
      {
        h2: 'Built to last on any Clinton lot',
        body: [
          'From a compact downtown backyard to acreage near the Clinch, we build every paver project on the same deep, compacted base with locked joints and edge restraint. That’s what keeps the field tight and level for decades, whatever the lot started as.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'Do you install pavers on rural properties around Clinton?',
        a: 'Yes — we build paver patios, driveways and walkways on both in-town and rural Anderson County lots. Every one goes on a properly compacted, well-drained base so it stays flat and tight for the long haul.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },

  /* =============================== POWELL =============================== */
  {
    service: 'concrete',
    serviceLabel: 'Concrete',
    townSlug: 'powell',
    city: 'Powell',
    county: 'Knox County',
    areaSlug: 'powell',
    title: 'Concrete Contractor Powell TN | Driveways & Patios | Paramount',
    metaDescription:
      'Concrete driveways, patios and stamped concrete in Powell, TN — along the Emory Road corridor and North Knox. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Contractor in Powell, TN',
    heroSubhead:
      'Driveways, patios and decorative concrete for Powell, Halls and North Knox County.',
    primaryKeyword: 'concrete contractor Powell TN',
    intro: [
      'Powell is a growing North Knox community with a mix of established family neighborhoods and newer builds along the Emory Road corridor. We pour driveways, patios and decorative concrete throughout Powell and the Halls area, on the roomy lots that make this part of the county popular.',
      'A lot of Powell projects are practical family upgrades — a bigger driveway, a real backyard patio, a slab for a shop or RV pad — done right so they hold up to daily use for years.',
    ],
    sections: [
      {
        h2: 'Concrete we build in Powell',
        bullets: [
          'Driveways, extensions and parking pads',
          'Patios — broom, troweled and stamped',
          'RV pads and shop slabs',
          'Sidewalks, walkways and steps',
          'Stamped and stained decorative concrete',
        ],
      },
      {
        h2: 'Room to build on North Knox lots',
        body: [
          'The larger lots around Powell and Halls leave room for driveway extensions, parking pads and outbuilding slabs — and each one still needs a compacted base, the right thickness and drainage to carry the load without cracking. We size the pour to how you’ll actually use it.',
        ],
      },
    ],
    costNote: CONCRETE_COST,
    faqs: [
      {
        q: 'Do you pour RV pads and shop slabs in Powell?',
        a: 'Yes — along with driveways and patios, RV pads, parking pads and shop slabs are common Powell projects. We build the base and thickness to carry the load so the slab doesn’t crack or settle under weight.',
      },
    ],
    relatedServices: CONCRETE_RELATED,
  },
  {
    service: 'pavers',
    serviceLabel: 'Pavers',
    townSlug: 'powell',
    city: 'Powell',
    county: 'Knox County',
    areaSlug: 'powell',
    title: 'Paver Patios & Driveways Powell TN | Paramount',
    metaDescription:
      'Paver patios, driveways and walkways in Powell, TN and North Knox — Belgard & Techo-Bloc built on a lasting base. Free phone consultation: (865) 237-9770.',
    h1: 'Paver Patios & Driveways in Powell, TN',
    heroSubhead:
      'Paver patios, driveways and walkways for Powell, Halls and North Knox County.',
    primaryKeyword: 'paver patio Powell TN',
    intro: [
      'Powell families who want a backyard that stands out are increasingly choosing pavers over a plain slab — a designed patio, a standout driveway, or a full outdoor room. We build paver patios, driveways and walkways across Powell, Halls and North Knox County.',
      'On the generous lots common around Powell, there’s room to do it right: a patio with seat walls and a fire pit, a wider paver driveway, and walkways that tie the yard together — all on a base that keeps them flat for decades.',
    ],
    sections: [
      {
        h2: 'Paver projects in Powell',
        bullets: [
          'Paver patios and outdoor living rooms',
          'Paver driveways and aprons',
          'Walkways, paths and steps',
          'Fire pits, seat walls and outdoor kitchens',
          'Pool decks',
        ],
      },
      {
        h2: 'The upgrade that lasts',
        body: [
          'Pavers cost more up front than a poured patio, but on a Powell family lot that gets daily use, the payoff is real: they flex with the ground instead of cracking, last 50+ years, and any unit that settles lifts and resets. We build on a deep compacted base with locked joints so the field stays tight year after year.',
        ],
      },
    ],
    costNote: PAVER_COST,
    faqs: [
      {
        q: 'How much does a paver patio cost in Powell?',
        a: 'Most paver patios run about $25–$35 per square foot installed, with a typical 300–400 sq ft patio landing in the $7,500–$14,000 range depending on the paver, pattern and any walls or fire features. We give an itemized estimate after seeing the space.',
      },
    ],
    relatedServices: PAVER_RELATED,
  },
];

/* ------------------------------ helpers ------------------------------ */

export function getLocalPage(service: LocalService, townSlug: string) {
  return localServicePages.find((p) => p.service === service && p.townSlug === townSlug);
}

/** All local pages for a given town (used to cross-link concrete↔pavers). */
export function localPagesForTown(townSlug: string) {
  return localServicePages.filter((p) => p.townSlug === townSlug);
}

/** All towns that have a page for a given service (used on the service hubs). */
export function localTownsForService(service: LocalService) {
  return localServicePages
    .filter((p) => p.service === service)
    .map((p) => ({ townSlug: p.townSlug, city: p.city, county: p.county }));
}

/** Distinct towns covered, in listing order. */
export function localTowns() {
  const seen = new Set<string>();
  const out: { townSlug: string; city: string; county: string }[] = [];
  for (const p of localServicePages) {
    if (!seen.has(p.townSlug)) {
      seen.add(p.townSlug);
      out.push({ townSlug: p.townSlug, city: p.city, county: p.county });
    }
  }
  return out;
}
