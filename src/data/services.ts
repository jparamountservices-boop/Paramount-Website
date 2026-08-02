/**
 * Service architecture + full page copy. Drives navigation, internal linking,
 * breadcrumbs, JSON-LD Service schema, and the [...service] page generator.
 *
 * `path` is the full URL path (no leading/trailing slash). Existing indexed
 * slugs are preserved to protect ranking equity: concrete, concrete/patio,
 * concrete/decorative-and-stamped, pavers, hardscapes, retaining-walls, decks.
 */

export type NavGroup = 'Concrete' | 'Pavers' | 'Hardscapes';

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
      'Trusted concrete contractor in Knoxville, TN. Driveways, patios, stamped & decorative concrete, sidewalks, slabs and pool decks — done right the first time. Free phone consultation: (865) 237-9770.',
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
      'Concrete flatwork in the Knoxville area generally runs about $10–$12 per square foot for a broom or troweled finish, and upwards of $18–$20 for stained or stamped decorative work. The final number depends on the size and accessibility of the job, whether the concrete has to be pumped, the mix (PSI and fiber), and upgrades like wire mesh. We give itemized, no-pressure estimates so you can see exactly what you’re paying for.',
    faqs: [
      {
        q: 'How much does concrete cost in Knoxville, TN?',
        a: 'Most residential concrete flatwork in the Knoxville area runs about $10–$12 per square foot for a broom or troweled finish, and upwards of $18–$20 for stained or stamped decorative work. The price depends on the size and access of the job, whether it needs to be pumped, the mix (PSI and fiber), and upgrades like wire mesh. We provide itemized estimates.',
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
      'Concrete driveway installation and replacement in Knoxville, TN. Durable, properly-based driveways that resist cracking and settling. Free phone consultation: (865) 237-9770.',
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
      'A typical Knoxville concrete driveway runs about $10–$12 per square foot for a standard broom finish, or more with decorative finishes, tear-out of an existing slab, or added drainage. The final price also depends on size and access, whether the pour has to be pumped, and mix upgrades like higher PSI, fiber and wire mesh. We’ll measure and give you an exact, itemized number.',
    faqs: [
      {
        q: 'How much does a concrete driveway cost in Knoxville?',
        a: 'Standard broom-finish concrete driveways in the Knoxville area typically run about $10–$12 per square foot installed. A standard 2-car driveway often lands in the $6,000–$10,000 range depending on size, access, thickness, tear-out, drainage and mix upgrades like fiber or wire mesh.',
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
      'Custom concrete patio design and installation in Knoxville, TN — broom, stamped and decorative finishes with proper grading and drainage. Free phone consultation: (865) 237-9770.',
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
      'Concrete patios in Knoxville typically run about $10–$12 per square foot for a broom or troweled finish and upwards of $18–$20 for stamped/decorative. Size and access, whether the pour has to be pumped, grading, drainage and mix upgrades like fiber or wire mesh affect the final number.',
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
      'Premium stamped and decorative concrete in Knoxville, TN — stone, slate, brick and wood-plank patterns with color and borders. Free phone consultation: (865) 237-9770.',
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
      'Stamped, stained and decorative concrete in Knoxville typically runs upwards of $18–$20 per square foot depending on pattern complexity, number of colors and borders — still well below the installed cost of natural stone or pavers.',
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
      'Concrete sidewalk and walkway installation in Knoxville, TN — safe, level, properly-drained paths and steps that connect your property. Free phone consultation: (865) 237-9770.',
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
      'Concrete walkways and steps are priced by the project, not a flat per-square-foot rate — width, length, finish (broom, troweled, stamped or stained), steps and site access all change the number. We give itemized estimates after seeing the path.',
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
      'Concrete slab and foundation pours in Knoxville, TN — shed, garage, addition and equipment pads built on a proper base and reinforced to last. Free phone consultation: (865) 237-9770.',
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
      'Concrete slabs in Knoxville generally run about $10–$12 per square foot depending on thickness, reinforcement (fiber, wire mesh or rebar), footings, site access and prep. Thicker load-bearing slabs and higher-PSI mixes cost more.',
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
      'Concrete pool deck installation in Knoxville, TN — stamped, decorative and slip-resistant finishes that stay cooler and drain away from the pool. Free phone consultation: (865) 237-9770.',
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
      'Concrete pool decks in Knoxville typically run about $10–$12 per square foot for a broom or textured finish and upwards of $18–$20 for stamped/decorative, depending on finish, size, access and drainage detailing.',
    faqs: [
      {
        q: 'Is stamped concrete too slippery for a pool deck?',
        a: 'Not when it’s finished right. We use non-slip additives in the sealer and slip-resistant textures so a stamped pool deck stays grippy even when wet.',
      },
    ],
    related: ['concrete/decorative-and-stamped', 'concrete', 'pavers/pool-decks'],
  },
  {
    path: 'concrete/repair',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Concrete Repair',
    title: 'Concrete Repair Knoxville TN | Driveway & Slab Repair | Paramount',
    metaDescription:
      'Concrete repair in Knoxville, TN — we replace cracked, sunken and heaved sections on a proper base so they don’t fail again. Honest advice on repair vs. replace. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Repair in Knoxville, TN',
    heroSubhead:
      'Cracked, sunken or heaved concrete? We fix the cause — not just the surface — so the repair actually lasts.',
    primaryKeyword: 'concrete repair Knoxville TN',
    intro: [
      'Most concrete around Knoxville doesn’t fail because of bad concrete — it fails because of what’s underneath: an uncompacted base, no drainage, or a slab poured too thin on our shifting clay. So when we repair concrete, we don’t just smear patch over the crack and hand it back. In most cases the right fix is to remove the failed section and re-pour it on a properly compacted, well-drained base — so it doesn’t crack, sink or heave again a couple of winters later.',
      'We’ll give you a straight answer on whether your concrete is worth repairing or whether replacement is the smarter money. Sometimes a single settled section is an easy fix; sometimes a driveway is cracked in a dozen places and patching is just throwing good money after bad. Either way, you’ll hear it honestly.',
    ],
    sections: [
      {
        h2: 'Concrete problems we fix',
        bullets: [
          'Cracked driveways, patios, sidewalks and steps',
          'Sunken or settled slabs and trip hazards',
          'Heaved or lifted sections from freeze-thaw and roots',
          'Spalling, flaking and pitted surfaces',
          'Sections damaged by drainage or a failed base',
        ],
      },
      {
        h2: 'Repair vs. replace — the honest answer',
        body: [
          'Patching and resurfacing can hide a problem for a season, but they don’t fix why the concrete failed — so the crack or settling usually comes right back. That’s why, for most failures, we replace the affected section: we saw-cut it clean, remove it, fix the base and drainage that caused the problem, then re-pour and match the finish to the surrounding slab.',
          'When a crack is minor and stable, we’ll tell you it’s fine to leave alone or seal — we’re not going to sell you a teardown you don’t need. Our goal is the fix that actually holds, at the price that makes sense for your situation.',
        ],
      },
      {
        h2: 'How we replace a failed section',
        bullets: [
          'Saw-cut clean, straight lines so the repair reads as intentional',
          'Remove the broken concrete and get to the real cause',
          'Re-compact the base and correct grading/drainage',
          'Reinforce and re-pour at the proper thickness',
          'Match the finish (broom, troweled or stamped) to the existing surface',
        ],
      },
    ],
    costNote:
      'Concrete repair is priced by the project, not a flat per-square-foot rate — it depends on how much has to come out, why it failed, site access, and how much base and drainage work is needed. We’ll assess it and give you an itemized number, plus an honest repair-vs-replace recommendation.',
    faqs: [
      {
        q: 'Can’t you just patch the crack?',
        a: 'We can, but we’ll be honest about whether it will last. A surface patch doesn’t fix what caused the crack — an unstable base, poor drainage or a thin slab — so it usually reappears. For most failures, replacing the affected section on a proper base is the fix that actually holds.',
      },
      {
        q: 'Why did my concrete crack or sink in the first place?',
        a: 'In East Tennessee it’s almost always the base and water: a slab poured on uncompacted clay with nowhere for water to drain will crack, settle and heave with our freeze-thaw winters. Fixing the cause is the whole point of doing the repair right.',
      },
      {
        q: 'Is it cheaper to repair or replace?',
        a: 'It depends. One settled section is usually a straightforward, affordable repair. But if a driveway is cracked in many places, repeated patches cost more over time than replacing it once, done right. We’ll walk you through the math for your specific slab.',
      },
      {
        q: 'Will the new concrete match the old?',
        a: 'We match finish and jointing as closely as possible so a replaced section blends in. New concrete does start out lighter and cures to match over time — a normal part of any repair. For a seamless look, resurfacing or a decorative overlay on the whole area is an option we can discuss.',
      },
    ],
    related: ['concrete', 'concrete/driveways', 'concrete/patio', 'concrete/slabs-foundations'],
  },

  /* ================= PAVERS ================= */
  {
    path: 'pavers',
    isHub: true,
    navGroup: 'Pavers',
    navLabel: 'Pavers (overview)',
    title: 'Paver Installation Knoxville TN | Patios, Driveways & Walkways | Paramount',
    metaDescription:
      'Premium paver installation in Knoxville, TN — Belgard & Techo-Bloc patios, driveways, walkways and pool decks built on a proper base to last 50+ years. Free phone consultation: (865) 237-9770.',
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
      'Paver patios in Knoxville generally run about $25–$35 per square foot installed, and paver driveways $45–$55, depending on the paver, pattern and base work. Pavers cost more up front than poured concrete but last longer and are repairable.',
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
      'Custom paver patio design and installation in Knoxville, TN. Belgard & Techo-Bloc patios built on a deep compacted base to last a lifetime. Free phone consultation: (865) 237-9770.',
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
      'Most paver patios in Knoxville run about $25–$35 per square foot installed depending on the paver, pattern complexity, walls and site prep.',
    faqs: [
      {
        q: 'How much does a paver patio cost in Knoxville?',
        a: 'Typically $25–$35 per square foot installed. A common 300–400 sq ft patio often lands in the $7,500–$14,000 range depending on the paver chosen, pattern, and any walls, steps or fire features.',
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
      'Paver driveway design and installation in Knoxville, TN — durable, drainable interlocking driveways that flex with our soil and last 50+ years. Free phone consultation: (865) 237-9770.',
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
      'Paver driveways in Knoxville generally run about $45–$55 per square foot installed depending on the paver, pattern and base depth — more than concrete up front, but far longer-lasting and repairable.',
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
      'Paver walkway and pathway installation in Knoxville, TN — durable, elegant paths and steps that flex with the ground and never crack. Free phone consultation: (865) 237-9770.',
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
      'Paver walkways and steps are priced by the project rather than a flat per-square-foot rate — the paver, pattern, curves, steps and site conditions all affect it. We give itemized estimates after seeing the space.',
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
      'Paver pool deck installation in Knoxville, TN — cooler underfoot, slip-resistant, repairable pool decks that drain and last. Free phone consultation: (865) 237-9770.',
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
      'Full-service hardscaping in Knoxville, TN — retaining walls, walkways, steps and fire pits designed and built as one outdoor living space. Free phone consultation: (865) 237-9770.',
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
      'Engineered retaining wall design and installation in Knoxville, TN — block, boulder and stone walls with proper drainage that won’t bulge or fail. Free phone consultation: (865) 237-9770.',
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
      'Retaining walls in Knoxville typically start around $48 and run up to $65+ per face square foot depending on wall type, height, drainage and whether engineering/geogrid is required. Taller walls (generally over 4 ft) may require an engineered design and permit.',
    faqs: [
      {
        q: 'Why do retaining walls fail?',
        a: 'Almost always water and base. A wall built on poor base, backfilled with the same clay it’s holding back, and without drainage behind it will build up water pressure and bulge or collapse. Proper footing, free-draining backfill and a drain line are what keep a wall standing for decades.',
      },
      {
        q: 'Do I need a permit for a retaining wall in Knox County?',
        a: 'Walls over a certain height (commonly 4 feet, measured from the bottom of the footing) typically require an engineered design and a permit. If you don’t already have an engineer, we can connect you with a good one — then we build to that design and handle the permitting.',
      },
      {
        q: 'How much does a retaining wall cost?',
        a: 'Most residential retaining walls start around $48 and run up to $65+ per face square foot installed. Height, wall system, drainage and soil reinforcement drive the price. We provide itemized estimates.',
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
      'Custom fire pit design and installation in Knoxville, TN — wood-burning and gas, block, stone and paver fire features built into your patio. Free phone consultation: (865) 237-9770.',
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
      'Custom walkways and stone steps in Knoxville, TN — paver, natural stone and flagstone paths and stairs that navigate slopes safely and beautifully. Free phone consultation: (865) 237-9770.',
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
