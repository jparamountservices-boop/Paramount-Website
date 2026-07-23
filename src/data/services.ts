/**
 * Service architecture + full page copy. Drives navigation, internal linking,
 * breadcrumbs, JSON-LD Service schema, and the [...service] page generator.
 *
 * `path` is the full URL path (no leading/trailing slash). Existing indexed
 * slugs are preserved to protect ranking equity: concrete, concrete/patio,
 * concrete/decorative-and-stamped, pavers, hardscapes, retaining-walls, decks.
 */

export type NavGroup = 'Concrete' | 'Pavers' | 'Hardscapes' | 'Decks & Masonry';

export interface Faq {
  q: string;
  a: string;
}
export interface Section {
  h2: string;
  body?: string[];
  bullets?: string[];
}
export interface Service {
  path: string;
  parent?: string;
  isHub?: boolean;
  navGroup: NavGroup;
  navLabel: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  primaryKeyword: string;
  intro: string[];
  sections: Section[];
  costNote?: string;
  faqs: Faq[];
  related: string[];
}

export const services: Service[] = [
  /* ================= CONCRETE ================= */
  {
    path: 'concrete',
    isHub: true,
    navGroup: 'Concrete',
    navLabel: 'Concrete (overview)',
    title: 'Concrete Contractor Knoxville TN | Driveways, Patios & Slabs | Paramount',
    metaDescription:
      'Trusted concrete contractor in Knoxville, TN. Driveways, patios, stamped & decorative concrete, sidewalks, slabs and pool decks — done right the first time. Free estimates: (865) 237-9770.',
    h1: 'Concrete Services in Knoxville, TN',
    heroSubhead:
      'Driveways, patios, stamped concrete, sidewalks and slabs engineered for East Tennessee soil and weather — poured right the first time.',
    primaryKeyword: 'concrete contractor Knoxville TN',
    intro: [
      'Concrete is the foundation of almost every outdoor project — and in East Tennessee, it either lasts for decades or it cracks, heaves and stains within a few winters. The difference is never the bag of concrete. It’s the prep: the base, the grading, the drainage, the reinforcement and the joints.',
      'Paramount Concrete & Hardscapes builds concrete that holds up to Knoxville’s clay soil and freeze-thaw cycles. We do the unglamorous work — proper sub-base compaction, correct slab thickness, rebar or fiber reinforcement, and control joints placed where the slab actually wants to crack — so your driveway or patio still looks right ten years from now.',
    ],
    sections: [
      {
        h2: 'Concrete services we offer',
        body: ['From a single sidewalk to a full stamped-concrete patio and driveway package, we handle residential flatwork across Knox County and the surrounding area:'],
        bullets: [
          'Concrete driveways — new pours, replacements and widenings',
          'Concrete & stamped patios',
          'Decorative and stamped concrete (patterns, borders, color)',
          'Sidewalks, walkways and steps',
          'Concrete slabs and foundations (sheds, garages, additions)',
          'Concrete pool decks with slip-resistant finishes',
        ],
      },
      {
        h2: 'Why concrete fails in East Tennessee — and how we prevent it',
        body: [
          'Most cracked, sunken driveways in Knox County fail for the same reasons: the base was never compacted, water was never given anywhere to go, and control joints were an afterthought. Our clay-heavy soil holds water and moves with temperature, so a slab poured on poor prep is a slab that’s already failing.',
          'We start every project underground: excavate to the right depth, compact a proper crushed-stone base, and grade for positive drainage away from your home and hardscape. Then we reinforce, pour at the correct thickness, finish, and cut control joints on a plan — not by guesswork.',
        ],
      },
    ],
    costNote:
      'Concrete pricing in the Knoxville area generally runs about $8–$16 per square foot installed depending on thickness, finish (broom vs. stamped/decorative), site access, tear-out and drainage work. We give itemized, no-pressure estimates so you can see exactly what you’re paying for.',
    faqs: [
      {
        q: 'How much does concrete cost in Knoxville, TN?',
        a: 'Most residential concrete flatwork in the Knoxville area runs roughly $8–$16 per square foot installed. Plain broom-finish is at the low end; stamped and decorative finishes, heavy tear-out, and extensive drainage or grading push it higher. We provide free, itemized estimates.',
      },
      {
        q: 'How long before I can drive or walk on new concrete?',
        a: 'You can usually walk on new concrete after about 24–48 hours. Wait about 7 days before regular foot traffic on patios and 28–30 days before parking vehicles on a new driveway — concrete keeps curing and gaining strength for a month.',
      },
      {
        q: 'Will my concrete crack?',
        a: 'All concrete develops hairline shrinkage over time, which is why we cut control joints to direct where any cracking happens. Structural cracking — the kind that ruins a slab — is almost always a base, thickness or drainage failure, and that’s exactly what our prep is built to prevent.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes. Paramount is fully licensed and insured, and we stand behind our workmanship. We’re happy to provide proof of insurance before any work begins.',
      },
    ],
    related: ['concrete/driveways', 'concrete/patio', 'concrete/decorative-and-stamped', 'pavers', 'retaining-walls'],
  },
  {
    path: 'concrete/driveways',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Concrete Driveways',
    title: 'Concrete Driveways Knoxville TN | Installation & Replacement | Paramount',
    metaDescription:
      'Concrete driveway installation and replacement in Knoxville, TN. Durable, properly-based driveways that resist cracking and settling. Free estimates: (865) 237-9770.',
    h1: 'Concrete Driveways in Knoxville, TN',
    heroSubhead:
      'A new concrete driveway is the biggest first impression your home makes — and one of the easiest to get wrong. We build ours to last.',
    primaryKeyword: 'concrete driveway Knoxville TN',
    intro: [
      'Your driveway takes more abuse than any other slab on your property — thousands of pounds of vehicles, standing water, road salt and full sun. When it’s poured on a proper base at the right thickness, a concrete driveway will serve you for 30+ years. When it isn’t, you’ll see cracks and settling within a couple of winters.',
      'Paramount installs and replaces concrete driveways across Knoxville and Knox County, from single-car pours to long rural drives, with the base prep and reinforcement that make the difference between “new” and “lasts.”',
    ],
    sections: [
      {
        h2: 'What goes into a driveway that lasts',
        bullets: [
          'Excavation to the correct depth for our soil',
          'Compacted crushed-stone base for uniform support',
          'Minimum 4"–5" slab thickness (thicker at aprons and heavy-load areas)',
          'Rebar or fiber reinforcement',
          'Positive grading and drainage so water never pools or undercuts the slab',
          'Control joints placed on an engineered plan',
        ],
      },
      {
        h2: 'New install, replacement or widening',
        body: [
          'Whether you’re replacing a cracked, heaved driveway, adding a parking pad, or widening for a second vehicle, we handle demolition and haul-off of the old slab and rebuild the base correctly — not just pour over the problem.',
        ],
      },
    ],
    costNote:
      'A typical Knoxville concrete driveway runs about $6–$12 per square foot for a standard broom finish, or more with decorative finishes, tear-out of an existing slab, or added drainage. We’ll measure and give you an exact, itemized number.',
    faqs: [
      {
        q: 'How much does a concrete driveway cost in Knoxville?',
        a: 'Standard broom-finish concrete driveways in the Knoxville area typically run about $6–$12 per square foot installed. A standard 2-car driveway often lands in the $3,500–$8,000 range depending on size, thickness, tear-out and drainage.',
      },
      {
        q: 'How long does a concrete driveway last?',
        a: 'A properly-based, correctly-poured concrete driveway lasts 30 years or more in East Tennessee. Longevity comes almost entirely from the base prep and drainage — which is where we focus.',
      },
      {
        q: 'How long before I can park on a new driveway?',
        a: 'Plan on about 7 days before light foot traffic and 28–30 days before parking vehicles. Concrete continues to gain strength for a full month after the pour.',
      },
    ],
    related: ['concrete', 'concrete/decorative-and-stamped', 'pavers/driveways', 'concrete/sidewalks-walkways'],
  },
  {
    path: 'concrete/patio',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Concrete Patios',
    title: 'Concrete Patio Contractors Knoxville TN | Custom Patios | Paramount',
    metaDescription:
      'Custom concrete patio design and installation in Knoxville, TN — broom, stamped and decorative finishes with proper grading and drainage. Free estimates: (865) 237-9770.',
    h1: 'Concrete Patios in Knoxville, TN',
    heroSubhead:
      'The foundation of your outdoor living space. We design and pour patios that drain right, resist cracking and look built-in — not bolted-on.',
    primaryKeyword: 'concrete patio Knoxville TN',
    intro: [
      'A concrete patio is the most cost-effective way to add real, usable outdoor living space to your Knoxville home. But a patio that slopes toward the house, pools water, or cracks across the middle turns into a liability fast.',
      'We plan every patio around grading and drainage first, then finish — broom, stamped, or decorative — so it looks great and stays that way through East Tennessee’s wet springs and freezing nights.',
    ],
    sections: [
      {
        h2: 'Patio finishes we build',
        bullets: [
          'Classic broom finish — clean, durable, budget-friendly',
          'Stamped concrete — stone, slate, brick and wood-plank looks',
          'Decorative color, borders and exposed aggregate',
          'Integrated steps, seat walls and fire-feature pads',
        ],
      },
      {
        h2: 'Grading and drainage come first',
        body: [
          'Before we ever talk finishes, we plan the slope. A patio needs to shed water away from your foundation at the right pitch — enough to drain, not so much you feel it underfoot. On tricky lots we add drainage solutions so runoff has somewhere to go.',
        ],
      },
    ],
    costNote:
      'Concrete patios in Knoxville typically run about $8–$15 per square foot for broom finish and $12–$20+ for stamped/decorative. Access, grading and drainage affect the final number.',
    faqs: [
      {
        q: 'Is a concrete patio cheaper than pavers?',
        a: 'Usually yes. Poured concrete patios generally cost less up front than a paver patio because there’s far less hand labor. Pavers cost more but flex with the ground and are easy to repair. We build both and can walk you through the trade-offs for your yard.',
      },
      {
        q: 'Can you match my house or existing hardscape?',
        a: 'Yes — with stamped patterns, integral color and borders we can complement your home’s brick, stone or existing patio so the new space looks original to the house.',
      },
    ],
    related: ['concrete', 'concrete/decorative-and-stamped', 'pavers/patios', 'hardscapes/fire-pits', 'decks'],
  },
  {
    path: 'concrete/decorative-and-stamped',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Decorative & Stamped',
    title: 'Stamped & Decorative Concrete Knoxville TN | Patios & Driveways | Paramount',
    metaDescription:
      'Premium stamped and decorative concrete in Knoxville, TN — stone, slate, brick and wood-plank patterns with color and borders. Free estimates: (865) 237-9770.',
    h1: 'Stamped & Decorative Concrete in Knoxville, TN',
    heroSubhead:
      'The look of natural stone, brick or slate at a fraction of the cost — poured as one seamless, low-maintenance surface.',
    primaryKeyword: 'stamped concrete Knoxville TN',
    intro: [
      'Stamped concrete gives you the high-end look of stone, brick, slate or even weathered wood without the price tag or the joints of individual pavers. It’s one of the most popular ways to upgrade a patio, walkway, pool deck or entryway in Knoxville.',
      'The catch: stamped concrete is only as good as the crew placing it. Color, pattern alignment and timing all happen in a narrow window while the concrete is setting. We’ve done enough of it to get the details right.',
    ],
    sections: [
      {
        h2: 'Patterns and colors',
        bullets: [
          'Natural stone, flagstone and slate textures',
          'Running-bond and herringbone brick',
          'Wood-plank and board-formed looks',
          'Integral color, accent release and custom borders',
        ],
      },
      {
        h2: 'Sealing and long-term care',
        body: [
          'Decorative concrete should be sealed to protect the color and make cleanup easy, then re-sealed every couple of years. We finish every stamped project sealed and give you a simple maintenance plan so the color stays rich.',
        ],
      },
    ],
    costNote:
      'Stamped and decorative concrete in Knoxville typically runs about $12–$20 per square foot depending on pattern complexity, number of colors and borders — still well below the installed cost of natural stone or pavers.',
    faqs: [
      {
        q: 'Does stamped concrete crack?',
        a: 'Like all concrete, it can develop hairline shrinkage cracks, which we control with properly placed joints and reinforcement. Good base prep and jointing keep cracking minor and out of sight. Cracks are also far less noticeable within a busy stamped pattern than on a plain slab.',
      },
      {
        q: 'Is stamped concrete slippery?',
        a: 'It can be when wet, especially with a glossy sealer. For pool decks and walkways we add a non-slip additive to the sealer to keep the surface grippy.',
      },
      {
        q: 'How is stamped concrete different from pavers?',
        a: 'Stamped concrete is one continuous poured slab textured to look like stone or brick — lower cost, seamless surface, but a hairline crack shows across the whole slab. Pavers are individual units that flex with the ground and are repairable one piece at a time. We install both.',
      },
    ],
    related: ['concrete', 'concrete/patio', 'concrete/pool-decks', 'pavers'],
  },

  /* ================= PAVERS ================= */
  {
    path: 'pavers',
    isHub: true,
    navGroup: 'Pavers',
    navLabel: 'Pavers (overview)',
    title: 'Paver Installation Knoxville TN | Patios, Driveways & Walkways | Paramount',
    metaDescription:
      'Premium paver installation in Knoxville, TN — Belgard & Techo-Bloc patios, driveways, walkways and pool decks built on a proper base to last 50+ years. Free estimates: (865) 237-9770.',
    h1: 'Paver Installation in Knoxville, TN',
    heroSubhead:
      'Interlocking pavers flex with our clay soil instead of cracking on it — and when installed right, they outlast poured concrete by decades.',
    primaryKeyword: 'pavers Knoxville TN',
    intro: [
      'Pavers are the premium choice for patios, driveways and walkways — endless colors and patterns, a surface that flexes with the ground instead of cracking, and individual units you can lift and reset if anything ever shifts. Done right, a paver installation lasts 50 years or more.',
      'The phrase that matters is “done right.” A paver patio is only as good as its base. We build ours on a deep, compacted aggregate base with proper edge restraint and polymeric-sand joints so they don’t sink, spread or sprout weeds.',
    ],
    sections: [
      {
        h2: 'Paver services we install',
        bullets: [
          'Paver patios and outdoor living areas',
          'Paver driveways',
          'Walkways, paths and steps',
          'Pool decks with cool, slip-resistant pavers',
          'Retaining and seat walls in matching block',
        ],
      },
      {
        h2: 'We install premium paver systems',
        body: [
          'We work with the manufacturers that back their products with real warranties — Belgard, Techo-Bloc and Unilock among them — so you get proven, color-fast pavers, not the cheapest unit on the rack. That means a manufacturer warranty on the pavers and our workmanship warranty on the install.',
        ],
      },
    ],
    costNote:
      'Paver patios in Knoxville generally run about $18–$35 per square foot installed, and paver driveways $20–$40, depending on the paver, pattern and base work. Pavers cost more up front than poured concrete but last longer and are repairable.',
    faqs: [
      {
        q: 'Are pavers worth the extra cost over concrete?',
        a: 'For many homeowners, yes. Pavers cost more up front but flex with our shifting clay soil instead of cracking, last 50+ years, and can be lifted and reset individually if anything ever settles. Concrete is the value option; pavers are the long-term investment.',
      },
      {
        q: 'Do weeds grow between pavers?',
        a: 'Only when they’re installed without polymeric sand or edge restraint. We lock the joints with polymeric sand and restrain the edges so the field stays tight and weed-free with minimal maintenance.',
      },
      {
        q: 'What paver brands do you use?',
        a: 'We install premium, warrantied systems including Belgard, Techo-Bloc and Unilock, chosen for color-fastness and durability in East Tennessee’s freeze-thaw climate.',
      },
    ],
    related: ['pavers/patios', 'pavers/driveways', 'pavers/walkways', 'concrete', 'retaining-walls'],
  },
  {
    path: 'pavers/patios',
    parent: 'pavers',
    navGroup: 'Pavers',
    navLabel: 'Paver Patios',
    title: 'Paver Patios Knoxville TN | Custom Belgard & Techo-Bloc Patios | Paramount',
    metaDescription:
      'Custom paver patio design and installation in Knoxville, TN. Belgard & Techo-Bloc patios built on a deep compacted base to last a lifetime. Free estimates: (865) 237-9770.',
    h1: 'Paver Patios in Knoxville, TN',
    heroSubhead:
      'A paver patio turns an unused backyard into the best room in the house — and ours are built on a base that won’t sink or shift.',
    primaryKeyword: 'paver patio Knoxville TN',
    intro: [
      'A well-designed paver patio is where Knoxville summers actually happen — dinners, fire pits, morning coffee. Unlike a poured slab, a paver patio can be curved, multi-level, and banded with borders, and it flexes with the ground instead of cracking across the middle.',
      'We design the layout around how you’ll actually use the space, then build it on the deep compacted base and locked joints that keep it flat and tight for decades.',
    ],
    sections: [
      {
        h2: 'What makes our paver patios last',
        bullets: [
          'Excavation and a deep, compacted crushed-stone base',
          'Proper bedding layer, screeded flat',
          'Tight joints locked with polymeric sand',
          'Steel or paver edge restraint so the field never spreads',
          'Built-in drainage and slope away from the home',
        ],
      },
      {
        h2: 'Design it as one outdoor room',
        body: [
          'We can integrate seat walls, fire pits, outdoor kitchens, steps and lighting so the patio reads as one designed space rather than a slab with furniture on it. See our related hardscape services to build the whole backyard at once.',
        ],
      },
    ],
    costNote:
      'Most paver patios in Knoxville run about $18–$35 per square foot installed depending on the paver, pattern complexity, walls and site prep.',
    faqs: [
      {
        q: 'How much does a paver patio cost in Knoxville?',
        a: 'Typically $18–$35 per square foot installed. A common 300–400 sq ft patio often lands in the $6,000–$14,000 range depending on the paver chosen, pattern, and any walls, steps or fire features.',
      },
      {
        q: 'How long does a paver patio take to build?',
        a: 'Most residential paver patios take about 3–7 working days depending on size, access and features. The base work is what takes the time — and it’s what makes the patio last.',
      },
    ],
    related: ['pavers', 'concrete/patio', 'hardscapes/fire-pits', 'hardscapes/outdoor-kitchens', 'retaining-walls'],
  },

  {
    path: 'pavers/driveways',
    parent: 'pavers',
    navGroup: 'Pavers',
    navLabel: 'Paver Driveways',
    title: 'Paver Driveways Knoxville TN | Installation | Paramount',
    metaDescription:
      'Paver driveway design and installation in Knoxville, TN — durable, drainable interlocking driveways that flex with our soil and last 50+ years. Free estimates: (865) 237-9770.',
    h1: 'Paver Driveways in Knoxville, TN',
    heroSubhead:
      'The most durable driveway you can build — interlocking pavers that flex with the ground, shed water, and repair one unit at a time.',
    primaryKeyword: 'paver driveway Knoxville TN',
    intro: [
      'A paver driveway is the premium upgrade over poured concrete or asphalt. Instead of one rigid slab that cracks when the ground moves, a paver driveway is thousands of interlocking units on a deep, engineered base — so it flexes with East Tennessee’s clay soil, drains better, and can be repaired without ripping out the whole thing.',
      'They cost more up front, but a properly-installed paver driveway lasts 50 years or more and makes a serious first impression.',
    ],
    sections: [
      {
        h2: 'Why pavers outperform concrete for driveways',
        bullets: [
          'Flex with the ground instead of cracking on it',
          'Better drainage — including permeable paver options',
          'Repairable one unit at a time; no ugly patches',
          'Huge range of colors, borders and patterns',
          'No seasonal cracking from freeze-thaw',
        ],
      },
      {
        h2: 'Built on a driveway-grade base',
        body: [
          'A driveway carries far more weight than a patio, so the base is deeper and more heavily compacted. We excavate, build and compact a thick aggregate base, set the pavers on a screeded bedding layer, and lock it all in with edge restraint and polymeric sand.',
        ],
      },
    ],
    costNote:
      'Paver driveways in Knoxville generally run about $20–$40 per square foot installed depending on the paver, pattern and base depth — more than concrete up front, but far longer-lasting and repairable.',
    faqs: [
      {
        q: 'Are paver driveways worth it over concrete?',
        a: 'If you want maximum longevity and curb appeal, yes. Pavers cost more up front but flex with our soil instead of cracking, last 50+ years, drain better, and can be repaired one unit at a time. Concrete is the value option; pavers are the long-term investment.',
      },
      {
        q: 'Do paver driveways hold up to vehicles?',
        a: 'Absolutely — on a proper driveway-grade base. Interlocking pavers actually distribute vehicle loads very well. The key is the deeper, heavily-compacted base we build for driveways versus patios.',
      },
    ],
    related: ['pavers', 'concrete/driveways', 'pavers/patios', 'retaining-walls'],
  },

  /* ================= HARDSCAPES ================= */
  {
    path: 'hardscapes',
    isHub: true,
    navGroup: 'Hardscapes',
    navLabel: 'Hardscapes (overview)',
    title: 'Hardscaping Knoxville TN | Retaining Walls, Fire Pits & Outdoor Living | Paramount',
    metaDescription:
      'Full-service hardscaping in Knoxville, TN — retaining walls, walkways, fire pits, outdoor fireplaces and outdoor kitchens designed and built as one outdoor living space. Free estimates: (865) 237-9770.',
    h1: 'Hardscaping in Knoxville, TN',
    heroSubhead:
      'Retaining walls, fire features, outdoor kitchens and walkways — designed together so your whole backyard works as one outdoor living space.',
    primaryKeyword: 'hardscaping Knoxville TN',
    intro: [
      'Hardscaping is everything in your landscape that isn’t plants — the walls, patios, walkways, steps, fire pits and outdoor kitchens that make a yard usable. Done piecemeal, these features fight each other. Designed together, they turn a sloped, awkward lot into a series of outdoor rooms.',
      'Paramount plans and builds complete hardscapes across Knoxville and East Tennessee, handling grading, drainage, structure and finish so every element ties into the next.',
    ],
    sections: [
      {
        h2: 'Our hardscape services',
        bullets: [
          'Retaining walls and seat walls',
          'Paver and stone walkways, paths and steps',
          'Fire pits and fire features',
          'Outdoor fireplaces',
          'Outdoor kitchens and grill islands',
          'Patios in concrete, pavers or natural stone',
        ],
      },
      {
        h2: 'Grading, drainage and structure first',
        body: [
          'On Knoxville’s sloped, clay lots, water management is the whole game. Retaining walls need proper base, backfill and drainage behind them or they bulge and fail. We engineer the structure and drainage before anyone thinks about the finish.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What’s the difference between hardscaping and landscaping?',
        a: 'Landscaping is the living material — grass, plants, trees. Hardscaping is the built material — patios, walls, walkways, fire features and outdoor kitchens. We focus on the hardscape: the structure that makes an outdoor space usable year-round.',
      },
      {
        q: 'Can you build my whole backyard in phases?',
        a: 'Yes. We can design the full plan up front and build it in phases as budget allows, so each stage fits the master plan instead of boxing you in later.',
      },
    ],
    related: ['retaining-walls', 'hardscapes/fire-pits', 'hardscapes/outdoor-kitchens', 'pavers/patios', 'decks'],
  },
  {
    path: 'retaining-walls',
    parent: 'hardscapes',
    navGroup: 'Hardscapes',
    navLabel: 'Retaining Walls',
    title: 'Retaining Walls Knoxville TN | Design & Installation | Paramount',
    metaDescription:
      'Engineered retaining wall design and installation in Knoxville, TN — block, boulder and stone walls with proper drainage that won’t bulge or fail. Free estimates: (865) 237-9770.',
    h1: 'Retaining Walls in Knoxville, TN',
    heroSubhead:
      'Reclaim a sloped yard, stop erosion and create level space — with walls engineered to hold, not just to look good on day one.',
    primaryKeyword: 'retaining walls Knoxville TN',
    intro: [
      'A retaining wall does real structural work: it holds back tons of soil and water on Knoxville’s hilly, clay-heavy lots. That’s why a wall built without proper base, backfill and drainage will lean, bulge and eventually blow out — usually after the first few heavy East Tennessee rains.',
      'We build retaining walls that are engineered from the footing up, with the drainage behind them that most failed walls never had.',
    ],
    sections: [
      {
        h2: 'Wall types we build',
        bullets: [
          'Segmental block walls (Belgard, Techo-Bloc and similar systems)',
          'Natural stone and boulder walls',
          'Seat walls and garden walls',
          'Tiered walls for steeper grades',
        ],
      },
      {
        h2: 'Why our walls hold',
        bullets: [
          'Proper footing and compacted base',
          'Clean, free-draining backfill — not the excavated clay',
          'Drainage pipe and gravel behind the wall to relieve water pressure',
          'Geogrid soil reinforcement on taller walls',
          'Batter (set-back) and compaction lift by lift',
        ],
      },
    ],
    costNote:
      'Retaining walls in Knoxville typically run about $35–$65+ per face square foot depending on wall type, height, drainage and whether engineering/geogrid is required. Taller walls (generally over 4 ft) may require an engineered design and permit.',
    faqs: [
      {
        q: 'Why do retaining walls fail?',
        a: 'Almost always water and base. A wall built on poor base, backfilled with the same clay it’s holding back, and without drainage behind it will build up water pressure and bulge or collapse. Proper footing, free-draining backfill and a drain line are what keep a wall standing for decades.',
      },
      {
        q: 'Do I need a permit for a retaining wall in Knox County?',
        a: 'Walls over a certain height (commonly 4 feet, measured from the bottom of the footing) typically require an engineered design and a permit. We handle the design requirements and pull permits when needed.',
      },
      {
        q: 'How much does a retaining wall cost?',
        a: 'Most residential retaining walls run about $35–$65+ per face square foot installed. Height, wall system, drainage and soil reinforcement drive the price. We provide itemized estimates.',
      },
    ],
    related: ['hardscapes', 'pavers/patios', 'hardscapes/fire-pits', 'concrete'],
  },
  {
    path: 'hardscapes/fire-pits',
    parent: 'hardscapes',
    navGroup: 'Hardscapes',
    navLabel: 'Fire Pits',
    title: 'Fire Pits Knoxville TN | Custom Fire Pit Builders | Paramount',
    metaDescription:
      'Custom fire pit design and installation in Knoxville, TN — wood-burning and gas, block, stone and paver fire features built into your patio. Free estimates: (865) 237-9770.',
    h1: 'Fire Pits in Knoxville, TN',
    heroSubhead:
      'The feature that makes a patio a destination three seasons a year. Wood-burning or gas, built to match your hardscape.',
    primaryKeyword: 'fire pit Knoxville TN',
    intro: [
      'A fire pit is the single best return on a backyard — it extends your outdoor season well into fall and turns an ordinary patio into the place everyone gathers. We build custom fire pits and fire features integrated into your patio and hardscape, not dropped-in kits.',
    ],
    sections: [
      {
        h2: 'Wood-burning or gas',
        bullets: [
          'Wood-burning fire pits — classic, simple, high heat',
          'Natural gas or propane fire pits and fire tables — clean, instant, no smoke',
          'Block, natural stone or paver surrounds to match your patio',
          'Integrated seat walls for built-in seating',
        ],
      },
    ],
    costNote:
      'Custom masonry fire pits in Knoxville commonly run about $1,500–$6,000+ depending on size, materials, gas plumbing and integrated seating.',
    faqs: [
      {
        q: 'Wood-burning or gas fire pit — which is better?',
        a: 'Wood-burning gives you the most heat, the crackle and the lowest build cost, but means smoke and ash. Gas fire pits and fire tables light instantly, produce no smoke, and are easier where burn bans or HOA rules apply. We build both and can plumb gas as part of the project.',
      },
      {
        q: 'Can you add a fire pit to my existing patio?',
        a: 'Usually yes — we can build a fire feature into an existing patio and match the surrounding material. We’ll assess the surface and clearances first.',
      },
    ],
    related: ['hardscapes', 'hardscapes/outdoor-fireplaces', 'pavers/patios', 'concrete/patio', 'hardscapes/outdoor-kitchens'],
  },
  {
    path: 'hardscapes/outdoor-kitchens',
    parent: 'hardscapes',
    navGroup: 'Hardscapes',
    navLabel: 'Outdoor Kitchens',
    title: 'Outdoor Kitchens Knoxville TN | Design & Build | Paramount',
    metaDescription:
      'Custom outdoor kitchen design and construction in Knoxville, TN — grill islands, counters, masonry and utilities built to last. Free estimates: (865) 237-9770.',
    h1: 'Outdoor Kitchens in Knoxville, TN',
    heroSubhead:
      'Cook, host and hang out without running back inside. Custom-built masonry outdoor kitchens and grill islands designed around how you entertain.',
    primaryKeyword: 'outdoor kitchen Knoxville TN',
    intro: [
      'An outdoor kitchen turns your patio into the entertaining hub of the house. We design and build custom outdoor kitchens and grill islands — masonry structure, durable counters, and the gas, water and electrical to make them work — all tied into your patio and hardscape.',
    ],
    sections: [
      {
        h2: 'What we build into outdoor kitchens',
        bullets: [
          'Masonry grill islands with built-in grills',
          'Counters in granite, stone or concrete',
          'Bar seating, storage and refrigeration',
          'Pizza ovens, side burners and smokers',
          'Gas, water and electrical rough-in',
          'Coordinated fireplace or fire-pit features',
        ],
      },
    ],
    costNote:
      'Outdoor kitchens in Knoxville range widely — roughly $6,000 for a basic grill island to $30,000+ for a full kitchen with premium appliances, counters and utilities. We scope to your budget and how you entertain.',
    faqs: [
      {
        q: 'How much does an outdoor kitchen cost in Knoxville?',
        a: 'A simple masonry grill island can start around $6,000, while a full outdoor kitchen with premium appliances, stone counters, refrigeration and utilities can run $20,000–$30,000+. We design to your budget and priorities.',
      },
      {
        q: 'Can you run gas, water and power to it?',
        a: 'Yes. We coordinate the gas, water and electrical rough-in as part of the build so the kitchen is fully functional, not just a good-looking shell.',
      },
    ],
    related: ['hardscapes', 'hardscapes/fire-pits', 'hardscapes/outdoor-fireplaces', 'pavers/patios', 'masonry'],
  },

  /* ================= DECKS & MASONRY ================= */
  {
    path: 'decks',
    navGroup: 'Decks & Masonry',
    navLabel: 'Decks',
    title: 'Deck Builders Knoxville TN | Custom Decks & Pergolas | Paramount',
    metaDescription:
      'Custom deck design and construction in Knoxville, TN — wood and composite decks, pergolas and covered structures built to last. Free estimates: (865) 237-9770.',
    h1: 'Custom Decks in Knoxville, TN',
    heroSubhead:
      'Where a patio can’t reach — elevated, multi-level and covered outdoor space, built to code and built to last.',
    primaryKeyword: 'deck builder Knoxville TN',
    intro: [
      'When your grade drops off or your living space is on the second floor, a deck is how you get usable outdoor space. We design and build custom decks and pergolas across Knoxville — wood and composite — engineered and built to code so they’re safe underfoot for the long haul.',
    ],
    sections: [
      {
        h2: 'Decks we build',
        bullets: [
          'Composite decks (Trex and similar) — low maintenance, long warranty',
          'Pressure-treated and hardwood decks',
          'Multi-level and wrap-around decks',
          'Covered decks, pergolas and pavilions',
          'Deck-and-patio combinations',
        ],
      },
    ],
    costNote:
      'Decks in Knoxville typically run about $30–$60 per square foot depending on material (pressure-treated vs. composite), height, railings and covers.',
    faqs: [
      {
        q: 'Composite or wood decking — which should I choose?',
        a: 'Composite (like Trex) costs more up front but barely needs maintenance and carries long warranties — no staining or sealing. Pressure-treated wood is cheaper to build but needs regular upkeep and doesn’t last as long. We build both and will price them side by side.',
      },
      {
        q: 'Do you pull permits for decks?',
        a: 'Yes. Decks require permits and inspections in Knox County and surrounding jurisdictions. We build to code and handle the permitting.',
      },
    ],
    related: ['concrete/patio', 'pavers/patios', 'hardscapes', 'masonry'],
  },
  {
    path: 'masonry',
    navGroup: 'Decks & Masonry',
    navLabel: 'Masonry',
    title: 'Masonry Contractor Knoxville TN | Brick, Block & Stone | Paramount',
    metaDescription:
      'Custom masonry in Knoxville, TN — brick, block and natural stone work, columns, veneers, steps and outdoor features. Free estimates: (865) 237-9770.',
    h1: 'Masonry in Knoxville, TN',
    heroSubhead:
      'Brick, block and natural stone craftsmanship that adds architectural character and lasting value to your property.',
    primaryKeyword: 'masonry contractor Knoxville TN',
    intro: [
      'Our masonry team works in brick, block, and natural stone to build the features that give a property permanence and character — from stone veneers and columns to steps, mailboxes and the structure behind fireplaces and outdoor kitchens.',
    ],
    sections: [
      {
        h2: 'Masonry work we do',
        bullets: [
          'Natural and manufactured stone veneer',
          'Brick and block columns, piers and mailboxes',
          'Stone and brick steps and stoops',
          'Structural masonry for fireplaces, kitchens and walls',
          'Repairs and tuckpointing',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you do both structural masonry and veneer?',
        a: 'Yes — from structural block and brick to decorative natural and manufactured stone veneer. Much of our masonry ties into fire features, outdoor kitchens and retaining walls.',
      },
    ],
    related: ['hardscapes/outdoor-fireplaces', 'hardscapes/outdoor-kitchens', 'retaining-walls', 'decks'],
  },
];

/** Look up one service by full path. */
export function getService(path: string): Service | undefined {
  return services.find((s) => s.path === path);
}

/** Hub services (top-level category pages). */
export const hubServices = services.filter((s) => s.isHub);

/** Group services for nav menus. */
export function servicesByGroup(): Record<NavGroup, Service[]> {
  const groups = {} as Record<NavGroup, Service[]>;
  for (const s of services) {
    (groups[s.navGroup] ||= []).push(s);
  }
  return groups;
}
