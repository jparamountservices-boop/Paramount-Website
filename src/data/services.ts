/**
 * Service architecture + full page copy. Drives navigation, internal linking,
 * breadcrumbs, JSON-LD Service schema, and the [...service] page generator.
 *
 * `path` is the full URL path (no leading/trailing slash). Existing indexed
 * slugs are preserved to protect ranking equity: concrete, concrete/patio,
 * concrete/decorative-and-stamped, pavers, hardscapes, retaining-walls, decks.
 */

export type NavGroup = 'Concrete' | 'Pavers' | 'Hardscapes' | 'Structures';

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
    related: ['concrete', 'concrete/decorative-and-stamped', 'pavers/patios', 'hardscapes/fire-pits'],
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

  {
    path: 'concrete/sidewalks-walkways',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Sidewalks & Walkways',
    title: 'Concrete Sidewalks & Walkways Knoxville TN | Paramount',
    metaDescription:
      'Concrete sidewalk and walkway installation in Knoxville, TN — safe, level, properly-drained paths and steps that connect your property. Free estimates: (865) 237-9770.',
    h1: 'Concrete Sidewalks & Walkways in Knoxville, TN',
    heroSubhead:
      'The paths that tie your property together — poured level, pitched to drain, and built to stay trip-free for decades.',
    primaryKeyword: 'concrete sidewalk Knoxville TN',
    intro: [
      'A sidewalk or walkway is a small project with an outsized impact — it’s the first thing guests walk on and, done wrong, the first thing that heaves, cracks and becomes a trip hazard. We pour walkways that stay level and drain properly, from front-entry approaches to paths that connect a driveway to a patio or garden.',
    ],
    sections: [
      {
        h2: 'Walkway options',
        bullets: [
          'Broom-finish concrete paths and approaches',
          'Stamped or decorative walkways to match your patio',
          'Concrete steps and stoops with safe, consistent risers',
          'ADA-friendly grading where needed',
        ],
      },
      {
        h2: 'Why walkways heave — and how we stop it',
        body: [
          'Thin, un-based walkways poured straight on our clay are the ones that lift and crack after a couple of freeze-thaw winters. We prep a compacted base, pour at the right thickness, and joint properly so your path stays flat and safe.',
        ],
      },
    ],
    costNote:
      'Concrete walkways in Knoxville typically run about $8–$15 per square foot depending on width, finish and site prep. Steps and decorative finishes add to the cost.',
    faqs: [
      {
        q: 'How wide should a walkway be?',
        a: 'A comfortable primary walkway is 4 feet wide so two people can walk side by side; secondary garden paths can be 2–3 feet. We’ll recommend a width based on how the path is used.',
      },
    ],
    related: ['concrete', 'concrete/patio', 'hardscapes/walkways', 'pavers/walkways'],
  },
  {
    path: 'concrete/slabs-foundations',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Slabs & Foundations',
    title: 'Concrete Slabs & Foundations Knoxville TN | Sheds, Garages & Pads',
    metaDescription:
      'Concrete slab and foundation pours in Knoxville, TN — shed, garage, addition and equipment pads built on a proper base and reinforced to last. Free estimates: (865) 237-9770.',
    h1: 'Concrete Slabs & Foundations in Knoxville, TN',
    heroSubhead:
      'Flat, level, reinforced slabs for sheds, garages, additions, shops and equipment pads — built to carry the load.',
    primaryKeyword: 'concrete slab Knoxville TN',
    intro: [
      'Whether you’re setting a shed, building a garage or shop, adding on to the house, or pouring a pad for a generator or hot tub, the slab underneath has to be flat, level and reinforced for the load it carries. We handle the excavation, base, forming, reinforcement and pour.',
    ],
    sections: [
      {
        h2: 'Slabs we pour',
        bullets: [
          'Shed and outbuilding slabs',
          'Garage and shop floors',
          'Room-addition slabs',
          'Hot tub, generator and HVAC equipment pads',
          'Monolithic and footed slabs',
        ],
      },
    ],
    costNote:
      'Concrete slabs in Knoxville generally run about $6–$12 per square foot depending on thickness, reinforcement, footings and site prep. Thicker load-bearing slabs cost more.',
    faqs: [
      {
        q: 'How thick should a concrete slab be?',
        a: 'It depends on the load. A shed or patio slab is usually 4 inches; a garage or shop floor that carries vehicles is typically 5–6 inches with heavier reinforcement. We size the slab to what it’ll carry.',
      },
    ],
    related: ['concrete', 'concrete/driveways'],
  },
  {
    path: 'concrete/pool-decks',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Pool Decks',
    title: 'Concrete Pool Decks Knoxville TN | Stamped & Slip-Resistant | Paramount',
    metaDescription:
      'Concrete pool deck installation in Knoxville, TN — stamped, decorative and slip-resistant finishes that stay cooler and drain away from the pool. Free estimates: (865) 237-9770.',
    h1: 'Concrete Pool Decks in Knoxville, TN',
    heroSubhead:
      'A pool deck has a hard job: look great, drain away from the water, and stay slip-resistant underfoot. We build ours to do all three.',
    primaryKeyword: 'concrete pool deck Knoxville TN',
    intro: [
      'Your pool deck takes constant wet feet, sunscreen, splash-out and full sun. It needs slip resistance, proper drainage away from the pool, and a finish that doesn’t get scorching hot. We build stamped and decorative concrete pool decks designed for exactly those demands.',
    ],
    sections: [
      {
        h2: 'Built for a pool environment',
        bullets: [
          'Slip-resistant textures and non-slip sealer additives',
          'Grading that drains splash-out away from the pool and house',
          'Stamped and decorative finishes in lighter, cooler colors',
          'Expansion joints and detailing around the pool shell',
        ],
      },
    ],
    costNote:
      'Concrete pool decks in Knoxville typically run about $10–$20 per square foot depending on finish, texture and drainage detailing.',
    faqs: [
      {
        q: 'Is stamped concrete too slippery for a pool deck?',
        a: 'Not when it’s finished right. We use non-slip additives in the sealer and slip-resistant textures so a stamped pool deck stays grippy even when wet.',
      },
    ],
    related: ['concrete/decorative-and-stamped', 'concrete', 'pavers/pool-decks'],
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
          'We work with the manufacturers that back their products with real warranties — Belgard, Techo-Bloc and Regal among them — so you get proven, color-fast pavers, not the cheapest unit on the rack. That means a manufacturer warranty on the pavers and our workmanship warranty on the install.',
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
        a: 'We install premium, warrantied systems including Belgard, Techo-Bloc and Regal, chosen for color-fastness and durability in East Tennessee’s freeze-thaw climate.',
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
          'We can integrate seat walls, fire pits, steps and lighting so the patio reads as one designed space rather than a slab with furniture on it. See our related hardscape services to build the whole backyard at once.',
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
    related: ['pavers', 'concrete/patio', 'hardscapes/fire-pits', 'retaining-walls'],
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
  {
    path: 'pavers/walkways',
    parent: 'pavers',
    navGroup: 'Pavers',
    navLabel: 'Paver Walkways',
    title: 'Paver Walkways Knoxville TN | Paths & Steps | Paramount',
    metaDescription:
      'Paver walkway and pathway installation in Knoxville, TN — durable, elegant paths and steps that flex with the ground and never crack. Free estimates: (865) 237-9770.',
    h1: 'Paver Walkways in Knoxville, TN',
    heroSubhead:
      'Curved, character-filled paths that flex with the ground and tie your whole landscape together.',
    primaryKeyword: 'paver walkway Knoxville TN',
    intro: [
      'A paver walkway does what a straight concrete path can’t — it curves, changes materials, and adds real craftsmanship to the journey from the driveway to the door or through the garden. And because it’s built from individual units on a compacted base, it flexes with our soil instead of cracking.',
    ],
    sections: [
      {
        h2: 'Walkways and paths we build',
        bullets: [
          'Front-entry and approach walkways',
          'Garden and landscape paths',
          'Paver steps and stair landings',
          'Borders and banding to match your patio or driveway',
        ],
      },
    ],
    costNote:
      'Paver walkways in Knoxville generally run about $20–$40 per square foot installed depending on paver, pattern, curves and steps.',
    faqs: [
      {
        q: 'Do paver walkways get uneven over time?',
        a: 'Not when they’re built on a proper compacted base with edge restraint and polymeric sand — which is how we install them. And if a unit ever settles, it lifts and resets in minutes rather than requiring a whole new pour.',
      },
    ],
    related: ['pavers', 'pavers/patios', 'concrete/sidewalks-walkways', 'hardscapes/walkways'],
  },
  {
    path: 'pavers/pool-decks',
    parent: 'pavers',
    navGroup: 'Pavers',
    navLabel: 'Paver Pool Decks',
    title: 'Paver Pool Decks Knoxville TN | Cool, Slip-Resistant | Paramount',
    metaDescription:
      'Paver pool deck installation in Knoxville, TN — cooler underfoot, slip-resistant, repairable pool decks that drain and last. Free estimates: (865) 237-9770.',
    h1: 'Paver Pool Decks in Knoxville, TN',
    heroSubhead:
      'Pavers stay cooler underfoot, grip when wet, and lift out one at a time for repairs — the ideal pool deck surface.',
    primaryKeyword: 'paver pool deck Knoxville TN',
    intro: [
      'Pavers are one of the best surfaces you can put around a pool. They stay cooler than solid concrete in full sun, offer natural slip resistance, drain through their joints, and — critically around a pool where settling and plumbing repairs happen — they lift and reset individually.',
    ],
    sections: [
      {
        h2: 'Why pavers around a pool',
        bullets: [
          'Cooler underfoot than poured concrete',
          'Naturally slip-resistant, textured surfaces',
          'Drain through the joints; grade splash-out away from the pool',
          'Repairable one unit at a time over plumbing or settling',
          'Coping and border options that frame the pool',
        ],
      },
    ],
    costNote:
      'Paver pool decks in Knoxville typically run about $20–$40 per square foot installed depending on paver, coping and pattern.',
    faqs: [
      {
        q: 'Are pavers or concrete better for a pool deck?',
        a: 'Pavers usually win around a pool: cooler underfoot, better traction when wet, and repairable over plumbing or settling without patching. Stamped concrete costs less up front but a crack or repair is much harder to hide.',
      },
    ],
    related: ['pavers', 'concrete/pool-decks', 'pavers/patios'],
  },

  /* ================= HARDSCAPES ================= */
  {
    path: 'hardscapes',
    isHub: true,
    navGroup: 'Hardscapes',
    navLabel: 'Hardscapes (overview)',
    title: 'Hardscaping Knoxville TN | Retaining Walls, Fire Pits & Walkways | Paramount',
    metaDescription:
      'Full-service hardscaping in Knoxville, TN — retaining walls, walkways, steps and fire pits designed and built as one outdoor living space. Free estimates: (865) 237-9770.',
    h1: 'Hardscaping in Knoxville, TN',
    heroSubhead:
      'Retaining walls, fire pits and walkways — designed together so your whole backyard works as one outdoor living space.',
    primaryKeyword: 'hardscaping Knoxville TN',
    intro: [
      'Hardscaping is everything in your landscape that isn’t plants — the walls, patios, walkways, steps and fire pits that make a yard usable. Done piecemeal, these features fight each other. Designed together, they turn a sloped, awkward lot into a series of outdoor rooms.',
      'Paramount plans and builds complete hardscapes across Knoxville and East Tennessee, handling grading, drainage, structure and finish so every element ties into the next.',
    ],
    sections: [
      {
        h2: 'Our hardscape services',
        bullets: [
          'Retaining walls and seat walls',
          'Paver and stone walkways, paths and steps',
          'Fire pits and fire features',
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
        a: 'Landscaping is the living material — grass, plants, trees. Hardscaping is the built material — patios, walls, walkways and fire features. We focus on the hardscape: the structure that makes an outdoor space usable year-round.',
      },
      {
        q: 'Can you build my whole backyard in phases?',
        a: 'Yes. We can design the full plan up front and build it in phases as budget allows, so each stage fits the master plan instead of boxing you in later.',
      },
    ],
    related: ['retaining-walls', 'hardscapes/fire-pits', 'hardscapes/walkways', 'pavers/patios'],
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
    related: ['hardscapes', 'hardscapes/walkways', 'pavers/patios', 'concrete/patio', 'retaining-walls'],
  },

  {
    path: 'hardscapes/walkways',
    parent: 'hardscapes',
    navGroup: 'Hardscapes',
    navLabel: 'Walkways & Steps',
    title: 'Walkways & Stone Steps Knoxville TN | Hardscape Paths | Paramount',
    metaDescription:
      'Custom walkways and stone steps in Knoxville, TN — paver, natural stone and flagstone paths and stairs that navigate slopes safely and beautifully. Free estimates: (865) 237-9770.',
    h1: 'Walkways & Stone Steps in Knoxville, TN',
    heroSubhead:
      'On a hilly East Tennessee lot, the right steps and paths make the whole landscape usable — and safe underfoot.',
    primaryKeyword: 'stone steps Knoxville TN',
    intro: [
      'Knoxville’s sloped lots often need more than a flat path — they need steps that navigate the grade safely and paths that connect different levels of the yard. We build walkways and stone steps in pavers, natural stone and flagstone, engineered with consistent risers and solid footing so they’re safe for years.',
    ],
    sections: [
      {
        h2: 'What we build',
        bullets: [
          'Natural stone and flagstone steps',
          'Paver and stone walkways across grades',
          'Boulder and stone stair treads',
          'Landings and terraced paths on steep lots',
        ],
      },
    ],
    costNote:
      'Walkways and steps vary widely with material and grade — natural stone steps in particular are labor-intensive. We provide itemized estimates after seeing the slope.',
    faqs: [
      {
        q: 'Can you build steps into a steep hillside?',
        a: 'Yes — that’s a specialty on our hilly lots. We build stone and paver steps with proper footing, consistent riser heights and landings so a steep grade becomes safe, usable space.',
      },
    ],
    related: ['hardscapes', 'retaining-walls', 'pavers/walkways', 'concrete/sidewalks-walkways'],
  },

  /* ================= STRUCTURES ================= */
  {
    path: 'structures',
    isHub: true,
    navGroup: 'Structures',
    navLabel: 'Structures (overview)',
    title: 'Outdoor Structures Knoxville TN | Pergolas, Patio Covers, Garages & Additions | Paramount',
    metaDescription:
      'Custom outdoor structures in Knoxville, TN — pergolas, patio covers, screen rooms, sunrooms, garages and home additions. Built to code, engineered for load, finished to last. Free consultation: (865) 237-9770.',
    h1: 'Outdoor Structures & Additions in Knoxville, TN',
    heroSubhead:
      'Pergolas, patio covers, screen rooms, sunrooms, garages and home additions — designed to match your home, built to code, and engineered to last through East Tennessee weather.',
    primaryKeyword: 'outdoor structures Knoxville TN',
    intro: [
      'Outdoor structures are what tie an entire property together — the pergola over the patio, the cover that turns a bare slab into a three-season room, the garage that finally gets your projects out of the weather. At Paramount Concrete & Hardscapes, we don’t just build to look good; we build so it lasts. Every structure is engineered for load, built to code, and finished to elevate the way you actually use your space.',
      'Because we’re a concrete and hardscape company first, your structure starts where most builders cut corners — underground. Reinforced footings, real drainage, and a clean tie-in to your existing patio, retaining wall or home exterior are built into every project, so the finished structure doesn’t just look right on day one, it stays that way. We build for homeowners across Knoxville, Farragut, Maryville, Oak Ridge, Lenoir City and the surrounding East Tennessee counties.',
    ],
    sections: [
      {
        h2: 'Why add an outdoor structure',
        bullets: [
          'Adds usable covered or shaded space for relaxing and entertaining',
          'Protects patios and outdoor features from sun and weather, extending their life',
          'Increases property value with integrated craftsmanship and materials that match your hardscapes',
          'Built to code, engineered for load, and finished to elevate your whole outdoor experience',
        ],
      },
      {
        h2: 'Structures we design and build',
        body: ['From open-air relaxation to fully enclosed additions, we offer complete start-to-finish construction tailored to your space, goals and budget:'],
        bullets: [
          'Pergolas — open-air wood or metal frameworks that add shade and definition',
          'Patio covers — solid-roof structures for true year-round outdoor living',
          'Screen rooms — aluminum-framed, screened space with airflow and no bugs',
          'Sunrooms — fully enclosed, insulated, light-filled living space',
          'Garages & workshops — concrete, framing and finishing handled in-house',
          'Home additions — expand your living space without moving',
          'Outdoor kitchens — counters, grills, sinks and bars built into your patio',
        ],
      },
      {
        h2: 'How we build: design, engineering and permits',
        body: [
          'Every structure starts with a vision and an on-site visit. We evaluate your space, grade, sunlight and drainage, and plan exactly how the structure will tie into your existing patio, retaining wall or home exterior. Then we handle the engineering and paperwork most homeowners don’t want to touch:',
        ],
        bullets: [
          'Design consultation and precise measurements',
          'Material and style selection — wood, steel, composite or masonry finishes',
          'Engineering review for spans, loads and wind rating',
          'Permitting when required by local Knox County code',
          'A transparent, itemized quote with clear scope and timeline',
        ],
      },
      {
        h2: 'Our build standards',
        bullets: [
          'Base & footings — reinforced concrete footers sized to the structure’s load',
          'Frame & support — pressure-treated or steel framing anchored to code',
          'Finish & detail — premium finishes, hidden fasteners and weather protection',
          'Drainage & integration — proper slope, sealed joints and clean tie-ins to existing patios or walls',
          'Cleanup & walk-through — we leave the site spotless and review every detail with you',
        ],
      },
      {
        h2: 'Finishing touches that make a structure yours',
        body: [
          'A structure is only as good as the details that bring it to life. These are the upgrades we recommend most to our Knoxville clients — the ones that turn a simple build into a true extension of the home:',
        ],
        bullets: [
          'Lighting & electrical — recessed LED lighting, ceiling fans or heaters, and outlets for TVs, sound and appliances, wired to code',
          'Custom finishes — stained cedar, composite panels, decorative beams, and stone, brick or stucco columns that tie into your hardscape',
          'Functional add-ons — built-in seating, storage benches, outdoor kitchens, bar tops and privacy or shade panels',
          'Drainage & weatherproofing — integrated gutters and downspouts, flashing, sealed joints and grading that keeps runoff away from the foundation',
        ],
      },
    ],
    costNote:
      'Because “structures” covers everything from a compact pergola to a full garage or home addition, pricing varies widely with size, materials, engineering and finishes. We give every homeowner a transparent, itemized quote with clear scope and timeline — no guesswork and no pressure.',
    faqs: [
      {
        q: 'Do you build outdoor structures, or just concrete and hardscapes?',
        a: 'Both. Paramount is a concrete and hardscape company that also designs and builds outdoor structures — pergolas, patio covers, screen rooms, sunrooms, garages and home additions. Because we pour the footings and slabs ourselves, your structure is built on the same engineered base we’re known for.',
      },
      {
        q: 'Do I need a permit for an outdoor structure in Knox County?',
        a: 'It depends on the structure. Many covered, enclosed or attached structures — and anything carrying a real roof load — require a permit and an engineered design in Knox County and the surrounding areas. We handle the engineering review and pull the permits when local code requires them.',
      },
      {
        q: 'Will the structure match my existing patio and home?',
        a: 'That’s the advantage of using a hardscape builder. We select materials and finishes — stained wood, composite, steel, or stone and masonry columns — that tie into your existing patio, retaining wall or home exterior so the structure looks original to the property, not bolted on.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes. Paramount is licensed and insured and backed by years of local hardscape and construction experience. We’re happy to provide proof of insurance before any work begins.',
      },
    ],
    related: ['structures/pergolas-patio-covers', 'structures/garages-workshops', 'structures/home-additions', 'concrete/patio', 'pavers/patios', 'hardscapes'],
  },
  {
    path: 'structures/pergolas-patio-covers',
    parent: 'structures',
    navGroup: 'Structures',
    navLabel: 'Pergolas & Patio Covers',
    title: 'Pergolas & Patio Covers Knoxville TN | Custom Builders | Paramount',
    metaDescription:
      'Custom pergolas and patio covers in Knoxville, TN — wood, steel and composite structures that add shade and year-round outdoor living. Built to code. Free consultation: (865) 237-9770.',
    h1: 'Pergolas & Patio Covers in Knoxville, TN',
    heroSubhead:
      'Turn a bare patio into a shaded, year-round outdoor room — with a pergola or solid-roof cover engineered for load and built to match your home.',
    primaryKeyword: 'pergolas Knoxville TN',
    intro: [
      'A pergola or patio cover is the fastest way to make your patio usable in more than just perfect weather. A pergola adds shade, structure and a timeless backyard centerpiece without enclosing the space; a solid-roof patio cover creates outdoor living that truly feels like part of your home — dry in the rain, shaded in July, and ready for a fan or heater when the season turns.',
      'We build both in wood, steel and composite, anchored to reinforced footings and tied cleanly into your existing patio or roofline so they hold up to East Tennessee wind and weather.',
    ],
    sections: [
      {
        h2: 'Pergolas — shade with style',
        body: [
          'Open-air wood or metal frameworks that add definition and comfort to patios, pool decks and gardens. Ideal for homeowners who want a backyard centerpiece and dappled shade without fully covering the space. We can add louvered roofs, shade panels and integrated lighting to turn a pergola into a true evening retreat.',
        ],
      },
      {
        h2: 'Patio covers — year-round protection',
        body: [
          'A solid-roof structure that extends from your home or stands on its own. A patio cover is one of the most popular ways to create outdoor living space in Knoxville — it protects your furniture and hardscape from sun and rain, extends the life of the patio underneath, and, wired for lighting and a fan or heater, becomes a space you use nine months a year.',
        ],
      },
      {
        h2: 'Built for load and weather',
        bullets: [
          'Reinforced concrete footings sized to the structure’s load',
          'Pressure-treated or steel framing anchored to code',
          'Engineering review for spans, loads and wind rating',
          'Flashing and clean tie-ins where a cover meets your home',
          'Integrated lighting, fans and drainage as options',
        ],
      },
    ],
    costNote:
      'Pergolas and patio covers in the Knoxville area vary widely with size, material (wood vs. steel vs. composite), roof style and add-ons like lighting or a louvered roof. We provide an itemized quote after an on-site visit.',
    faqs: [
      {
        q: 'What’s the difference between a pergola and a patio cover?',
        a: 'A pergola is an open-air framework — rafters or louvers overhead that give partial, dappled shade while keeping the space airy. A patio cover has a solid roof that fully blocks sun and rain, so the space stays dry and usable in any weather. Pergolas are about style and definition; covers are about all-weather protection.',
      },
      {
        q: 'Do I need a permit for a pergola or patio cover in Knoxville?',
        a: 'Attached covers and larger roofed structures usually require a permit and an engineered design in Knox County; freestanding pergolas may or may not, depending on size and location. We check local code, handle the engineering, and pull permits when they’re required.',
      },
      {
        q: 'Can you attach a cover to my existing patio?',
        a: 'Usually yes. We assess the existing slab and footings first — a solid-roof cover needs footings sized for its load — then anchor and flash it cleanly to your home, or set it as a freestanding structure over the patio.',
      },
    ],
    related: ['structures', 'concrete/patio', 'pavers/patios', 'hardscapes/fire-pits', 'structures/screen-rooms-sunrooms'],
  },
  {
    path: 'structures/screen-rooms-sunrooms',
    parent: 'structures',
    navGroup: 'Structures',
    navLabel: 'Screen Rooms & Sunrooms',
    title: 'Screen Rooms & Sunrooms Knoxville TN | Custom Builders | Paramount',
    metaDescription:
      'Custom screen rooms and sunrooms in Knoxville, TN — screened porches with airflow and no bugs, or fully enclosed, insulated sunrooms that add livable space. Free consultation: (865) 237-9770.',
    h1: 'Screen Rooms & Sunrooms in Knoxville, TN',
    heroSubhead:
      'Enjoy your backyard without the bugs — or add year-round, climate-ready living space. We build screen rooms and sunrooms on a foundation that lasts.',
    primaryKeyword: 'sunrooms Knoxville TN',
    intro: [
      'Screen rooms and sunrooms are the natural step up from a patio cover — they take a covered space and enclose it, either for airflow-and-no-bugs or for true, climate-controlled living space. Both add comfort and resale value, and both are only as good as the foundation and framing underneath them.',
    ],
    sections: [
      {
        h2: 'Screen rooms — fresh air, no bugs',
        body: [
          'Enclosed structures with aluminum framing and fine mesh screening that keep pests out while letting the breeze in — the perfect in-between for shade, airflow and comfort. A screen room turns a covered patio into a space you’ll actually use on a Tennessee summer evening.',
        ],
      },
      {
        h2: 'Sunrooms — light-filled living space',
        body: [
          'Fully enclosed rooms built with insulated windows and climate-ready framing. A sunroom is a smart investment that adds genuinely livable square footage and resale value — morning coffee in the sun, a home office, a playroom — usable in every season.',
        ],
      },
      {
        h2: 'Built on a real foundation',
        bullets: [
          'Reinforced footings and a proper slab or floor system',
          'Framing anchored to code with engineering review',
          'Insulated glass and climate-ready details on sunrooms',
          'Drainage, flashing and clean tie-ins to the home',
        ],
      },
    ],
    costNote:
      'Screen rooms cost less than full sunrooms, which require insulated glass and climate-ready framing. Final pricing depends on size, foundation, glazing and finishes — we provide an itemized quote after an on-site visit.',
    faqs: [
      {
        q: 'What’s the difference between a screen room and a sunroom?',
        a: 'A screen room is enclosed with mesh screening — it keeps bugs out and lets air flow through, but it isn’t climate-controlled. A sunroom is fully enclosed with insulated glass and climate-ready framing, so it’s usable year-round and counts as livable space. Screen rooms cost less; sunrooms add more resale value.',
      },
      {
        q: 'Does a sunroom add value to my home?',
        a: 'Generally, yes — a well-built, permitted sunroom adds finished, usable square footage, which buyers and appraisers recognize. We build to code with proper foundations and engineering so the space is a real, documented addition.',
      },
    ],
    related: ['structures', 'structures/pergolas-patio-covers', 'structures/home-additions', 'concrete/patio'],
  },
  {
    path: 'structures/garages-workshops',
    parent: 'structures',
    navGroup: 'Structures',
    navLabel: 'Garages & Workshops',
    title: 'Garage Builders Knoxville TN | Detached Garages & Workshops | Paramount',
    metaDescription:
      'Custom garage and workshop construction in Knoxville, TN — detached and attached garages, hobby shops and outbuildings with concrete, framing and finishing handled in-house. Free consultation: (865) 237-9770.',
    h1: 'Garages & Workshops in Knoxville, TN',
    heroSubhead:
      'From a single-car garage to a detached hobby shop — we handle the concrete, framing and finishing all in-house, so it’s built for strength, convenience and a seamless look.',
    primaryKeyword: 'garage builder Knoxville TN',
    intro: [
      'A garage or workshop is one of the best investments you can make in a property — secure storage, a real workspace, and protection for vehicles and equipment out of the East Tennessee weather. Because we’re a concrete company first, we handle the whole build in-house: the slab and footings, the framing, and the finishing — no juggling three subcontractors and no one pointing fingers when something doesn’t line up.',
      'We build detached and attached garages, shops and outbuildings across Knoxville and the surrounding counties, sized and reinforced for exactly what you’ll park or store in them.',
    ],
    sections: [
      {
        h2: 'What we build',
        bullets: [
          'Single-, two- and three-car garages — detached or attached',
          'Detached workshops and hobby shops',
          'Storage and equipment outbuildings',
          'Garage slabs and footings sized to the load',
          'Full finishing — doors, electrical rough-in, siding and trim to match your home',
        ],
      },
      {
        h2: 'Concrete, framing and finishing — all in-house',
        body: [
          'The slab is where most garages fail: too thin, no reinforcement, poor drainage. We pour a garage-grade slab on a compacted base with the thickness and reinforcement to carry vehicles and equipment, then frame and finish on top of it to code. One team, one point of accountability, one seamless result.',
        ],
      },
    ],
    costNote:
      'Garage and workshop pricing in the Knoxville area depends heavily on size, whether it’s attached or detached, slab and site prep, and finish level (from a functional shop to a fully-finished, matched-to-the-house garage). We provide a detailed, itemized quote after an on-site visit.',
    faqs: [
      {
        q: 'Do you build detached garages in Knoxville?',
        a: 'Yes — detached garages and workshops are one of our core structure builds. We handle everything from the footings and garage-grade slab through framing, doors and finishing, all in-house.',
      },
      {
        q: 'Do I need a permit to build a garage in Knox County?',
        a: 'Almost always, yes. Garages are permanent structures with foundations and often electrical, so they require a building permit and a code-compliant, often engineered, design. We handle the permitting and build to code.',
      },
      {
        q: 'How thick should a garage slab be?',
        a: 'A garage floor that carries vehicles is typically poured 5–6 inches thick with reinforcement, versus 4 inches for a patio or shed. We size and reinforce the slab for what you’ll actually park or store on it, on a properly compacted base.',
      },
    ],
    related: ['structures', 'concrete/slabs-foundations', 'concrete/driveways', 'structures/home-additions'],
  },
  {
    path: 'structures/home-additions',
    parent: 'structures',
    navGroup: 'Structures',
    navLabel: 'Home Additions',
    title: 'Home Additions Knoxville TN | Room Additions & Expansions | Paramount',
    metaDescription:
      'Home addition contractor in Knoxville, TN — room additions and expansions built on reinforced foundations, framed and finished to match your home. Free consultation: (865) 237-9770.',
    h1: 'Home Additions in Knoxville, TN',
    heroSubhead:
      'Love your home but need more space? A well-built addition lets your home grow with your family — and adds serious value — without the cost and hassle of moving.',
    primaryKeyword: 'home additions Knoxville TN',
    intro: [
      'When you love your neighborhood but you’ve run out of room, a home addition transforms what you already have — an extra bedroom, a bigger kitchen, a primary suite, a bonus room over the garage. Done right, it adds real, appraisable value and blends so cleanly you’d never know it wasn’t original to the house.',
      'Additions live and die on the foundation. As a concrete company, we start there — reinforced footings and slab tied properly to the existing structure — then frame, finish and detail so the new space matches the old inside and out.',
    ],
    sections: [
      {
        h2: 'Additions we build',
        bullets: [
          'Room additions — bedrooms, bonus rooms, home offices',
          'Primary-suite and bathroom additions',
          'Kitchen and living-space expansions',
          'Garage conversions and over-garage additions',
        ],
      },
      {
        h2: 'Foundation first, finished to match',
        body: [
          'The two things that make an addition look bolted-on are a foundation that settles differently than the house and finishes that don’t match. We handle both — a properly-tied, reinforced foundation and framing to code, then siding, roofline and trim detailing that complements your existing home so the addition reads as original.',
        ],
      },
    ],
    costNote:
      'Home additions vary more than any other structure — a simple bump-out is worlds apart from a full primary suite. Foundation, roof tie-in, finishes and mechanicals all drive the number. We provide a clear, itemized scope and quote after an on-site consultation.',
    faqs: [
      {
        q: 'Is a home addition cheaper than moving?',
        a: 'Very often, yes — especially once you factor in agent commissions, closing costs, moving expenses and today’s interest rates. An addition keeps you in the neighborhood you love and puts your money into your own property as added value.',
      },
      {
        q: 'Do home additions require permits in Knox County?',
        a: 'Yes. Additions change the footprint and structure of the home, so they require permits and code-compliant, often engineered, plans. We handle the permitting and build to code from the foundation up.',
      },
    ],
    related: ['structures', 'structures/garages-workshops', 'concrete/slabs-foundations', 'structures/screen-rooms-sunrooms'],
  },
  {
    path: 'structures/outdoor-kitchens',
    parent: 'structures',
    navGroup: 'Structures',
    navLabel: 'Outdoor Kitchens',
    title: 'Outdoor Kitchens Knoxville TN | Custom Built-In Grills & Bars | Paramount',
    metaDescription:
      'Custom outdoor kitchens in Knoxville, TN — built-in grills, counters, sinks, bars and masonry that tie into your patio and hardscape. Free consultation: (865) 237-9770.',
    h1: 'Outdoor Kitchens in Knoxville, TN',
    heroSubhead:
      'Counters, grills, sinks and bar tops built right into your patio — a true outdoor kitchen that turns your backyard into the place everyone gathers.',
    primaryKeyword: 'outdoor kitchen Knoxville TN',
    intro: [
      'An outdoor kitchen is the upgrade that gets used every single week — grilling for the family, hosting on weekends, keeping the cook out of the house and in on the party. We build outdoor kitchens as an integrated part of your patio and hardscape: masonry counters, built-in grills, sinks, bar tops and accent walls, all tied into the surrounding stone, brick or pavers so it looks built-in, not bolted-on.',
    ],
    sections: [
      {
        h2: 'What goes into an outdoor kitchen',
        bullets: [
          'Masonry counters and bases in stone, brick or stucco to match your patio',
          'Built-in grills, side burners and storage',
          'Sinks, bar tops and serving areas',
          'Accent walls, seat walls and privacy panels',
          'Lighting, outlets and gas or water run to code',
        ],
      },
      {
        h2: 'Built into your patio, not on top of it',
        body: [
          'The best outdoor kitchens are planned with the patio, so the slab, drainage, gas, water and electrical are all in place before the counters go up. Whether we’re building your patio too or working with an existing one, we integrate the kitchen so it ties into your hardscape and holds up to the weather.',
        ],
      },
    ],
    costNote:
      'Outdoor kitchens range from a compact built-in grill surround to a full masonry kitchen with sink, bar and appliances. Materials, appliances and utility runs (gas, water, electrical) drive the price. We provide an itemized quote after an on-site visit.',
    faqs: [
      {
        q: 'Can you add an outdoor kitchen to my existing patio?',
        a: 'Usually yes. We assess the existing slab and access for gas, water and electrical first, then build the kitchen to tie into your patio and hardscape. If the patio can’t carry it, we’ll tell you what’s needed up front.',
      },
      {
        q: 'What materials hold up best for an outdoor kitchen in East Tennessee?',
        a: 'Masonry bases (block faced with stone, brick or stucco), stainless appliances and sealed stone or concrete countertops handle our humidity and freeze-thaw best. We match the materials to your existing hardscape so it looks original to the space.',
      },
    ],
    related: ['structures', 'hardscapes/fire-pits', 'pavers/patios', 'concrete/patio'],
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
