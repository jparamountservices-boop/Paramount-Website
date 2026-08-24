/**
 * Service architecture + full page copy. Drives navigation, internal linking,
 * breadcrumbs, JSON-LD Service schema, and the [...service] page generator.
 *
 * `path` is the full URL path (no leading/trailing slash). Existing indexed
 * slugs are preserved to protect ranking equity: concrete, concrete/patio,
 * concrete/decorative-and-stamped, pavers, hardscapes, retaining-walls, decks.
 */

export type NavGroup = 'Outdoor Living' | 'Concrete' | 'Pavers' | 'Hardscapes';

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
  /** Optional link to a related blog post (renders a callout on the page). */
  relatedPost?: { label: string; path: string };
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
    related: ['outdoor-living/patio-covers', 'concrete', 'concrete/decorative-and-stamped', 'pavers/patios', 'hardscapes/fire-pits'],
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
  {
    path: 'concrete/basketball-courts',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Basketball Courts',
    title: 'Concrete Basketball Courts Knoxville TN | Backyard Courts | Paramount',
    metaDescription:
      'Custom concrete basketball court slabs in Knoxville, TN — flat, level and crack-resistant, built for a backyard half-court or full court. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Basketball Courts in Knoxville, TN',
    heroSubhead:
      'A backyard basketball court lives or dies on the slab underneath — flat, properly based and built not to crack. That’s the part we obsess over.',
    primaryKeyword: 'concrete basketball court Knoxville TN',
    intro: [
      'A backyard basketball court is one of the best upgrades an active family can make — but it’s only as good as the concrete under it. A court slab has to be dead-flat so the ball bounces true, thick and reinforced enough to take years of play, and built on a base that won’t heave or crack on our East Tennessee clay. We pour basketball court slabs to exactly that standard across Knoxville and East Tennessee.',
      'Whether you want a compact half-court beside the driveway or a full-size court, we handle the concrete start to finish: excavation, a deep compacted base, drainage, reinforcement and a smooth troweled finish that’s ready for an acrylic court coating and lines.',
    ],
    sections: [
      {
        h2: 'What goes into a basketball court slab',
        bullets: [
          'Excavation and a deep, compacted crushed-stone base',
          'Correct slab thickness (typically 4″+) with rebar or wire reinforcement',
          'A dead-flat, smooth troweled finish for a true bounce',
          'A slight, even slope so it drains without affecting play',
          'Control joints placed to minimize and hide cracking',
          'Left smooth and ready for acrylic court coating, lines and a hoop',
        ],
      },
      {
        h2: 'Half-court or full-court — sized to your yard',
        body: [
          'A backyard half-court commonly runs around 30′ × 30′ (or a compact 20′ × 25′), while a full court is considerably larger. We’ll help you size the slab to your yard and budget, then build it so you can add a coated surface, striping and a hoop when you’re ready.',
        ],
      },
    ],
    costNote:
      'A basketball court is priced mainly by the size and thickness of the slab — reinforced, troweled concrete runs about $10–$12 per square foot, so even a 30′ × 30′ half-court is a sizable pour. The acrylic court coating, lines and hoop are separate (usually added by a court-surfacing specialist). We give an itemized number for the concrete after measuring your yard.',
    faqs: [
      {
        q: 'How thick should a backyard basketball court be?',
        a: 'We typically pour court slabs at least 4 inches thick with reinforcement. The compacted base underneath matters just as much as the thickness — it’s what keeps the surface flat and crack-free for years.',
      },
      {
        q: 'What size is a backyard basketball court?',
        a: 'A half-court is often around 30′ × 30′ (a compact version can be ~20′ × 25′); a regulation-style full court is much larger. We’ll size the slab to fit your yard and how you want to play.',
      },
      {
        q: 'Do you paint the lines and coat the surface?',
        a: 'We build the concrete — a flat, smooth slab ready for a coating. The acrylic sport surface, lines and hoop are usually installed by a court-coating specialist. We leave you a slab that’s perfect for it.',
      },
      {
        q: 'Can you build a court on a sloped yard?',
        a: 'Yes — sloped lots just need grading and sometimes a retaining wall to carve out level space. We plan that first so the finished court sits flat and drains properly.',
      },
    ],
    related: ['outdoor-living/sport-courts', 'concrete', 'concrete/slabs-foundations', 'concrete/pickleball-courts', 'concrete/repair'],
    relatedPost: {
      label: 'Read: what goes into building a court in East Tennessee',
      path: '/blog/concrete-basketball-courts-knoxville-tn/',
    },
  },
  {
    path: 'concrete/pickleball-courts',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Pickleball Courts',
    title: 'Concrete Pickleball Courts Knoxville TN | Backyard Courts | Paramount',
    metaDescription:
      'Concrete pickleball court slabs in Knoxville, TN — flat, true and crack-resistant, sized for a regulation backyard court. Free phone consultation: (865) 237-9770.',
    h1: 'Concrete Pickleball Courts in Knoxville, TN',
    heroSubhead:
      'Pickleball is the fastest-growing backyard build in East Tennessee — and it all rides on a slab that’s flat, true and built to last.',
    primaryKeyword: 'concrete pickleball court Knoxville TN',
    intro: [
      'Pickleball has taken off across Knoxville, and more homeowners are putting a court right in the backyard. The foundation of a great court is exactly that — the foundation. A pickleball slab has to be dead-flat for a consistent bounce, precisely sloped so it drains, and built on a base that won’t crack or heave. We pour pickleball court slabs to that standard across East Tennessee.',
      'A regulation pickleball playing area is 20′ × 44′, and most home courts add buffer space around it — so the finished slab is usually larger. We handle the concrete side start to finish and leave you a smooth, true slab ready for an acrylic surface, net posts and lines.',
    ],
    sections: [
      {
        h2: 'What makes a pickleball slab play right',
        bullets: [
          'A precise, dead-flat finish for a consistent bounce',
          'A slight, even slope (about 1%) so it drains without affecting play',
          'A deep compacted base and reinforcement so it stays true',
          'Control joints placed to protect the playing surface',
          'A smooth troweled finish ready for acrylic coating, net posts and lines',
        ],
      },
      {
        h2: 'Court sizing',
        body: [
          'The playing area is 20′ × 44′, but for comfortable play most backyard courts finish out larger — commonly around 30′ × 60′ overall with buffer space. We’ll size the slab to your yard and how you want to use it, including multi-sport striping if you’d like.',
        ],
      },
    ],
    costNote:
      'The slab for a pickleball court is priced by its size and thickness — reinforced, troweled concrete runs about $10–$12 per square foot, and a full court with buffer is a large pour. The acrylic surface, net posts and lines are separate (added by a court-surfacing specialist). We measure your space and give an itemized number for the concrete.',
    faqs: [
      {
        q: 'What size slab do I need for a pickleball court?',
        a: 'The playing area is 20′ × 44′. For comfortable play, most homeowners finish out around 30′ × 60′ overall to allow buffer space. We’ll help you fit it to your yard.',
      },
      {
        q: 'Does a pickleball court need to slope?',
        a: 'Yes — a slight, even slope of about 1% lets water run off, and it’s gentle enough that it doesn’t affect play. Flat-but-not-draining is a mistake we never make.',
      },
      {
        q: 'Do you install the surface and net?',
        a: 'We build the concrete slab — flat, true and ready. The acrylic coating, net posts and lines are usually installed by a court-surfacing specialist. We leave you the ideal base for it.',
      },
      {
        q: 'How thick is a pickleball court slab?',
        a: 'Typically at least 4 inches with reinforcement, on a properly compacted base. The base prep is what keeps the surface flat and true over the years.',
      },
    ],
    related: ['concrete', 'concrete/slabs-foundations', 'concrete/basketball-courts', 'concrete/repair'],
  },
  {
    path: 'concrete/garage-foundations',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Garage Foundations',
    title: 'Garage Foundations & Slabs Knoxville TN | Concrete | Paramount',
    metaDescription:
      'Concrete garage foundations and slabs in Knoxville, TN — thickened-edge slabs and footings engineered to carry the load and resist cracking. Free phone consultation: (865) 237-9770.',
    h1: 'Garage Foundations & Slabs in Knoxville, TN',
    heroSubhead:
      'A garage is only as solid as the slab under it. We pour garage foundations built to carry the load and hold up on East Tennessee ground.',
    primaryKeyword: 'garage foundation Knoxville TN',
    intro: [
      'Whether you’re building a detached garage, a workshop or an addition, it starts with the foundation — and a garage slab does far more than a patio. It carries the walls, the roof load and vehicles, so it needs proper footings or a thickened edge, the right thickness, reinforcement, and a base that won’t settle. We pour garage foundations and slabs across Knoxville and East Tennessee to that standard.',
      'We build monolithic (thickened-edge) slabs and slab-with-footing foundations, sized to your structure and local code — handling excavation, base compaction, forming, reinforcement, vapor barrier where needed, anchor bolts, and a clean troweled finish.',
    ],
    sections: [
      {
        h2: 'Garage foundation types we pour',
        bullets: [
          'Monolithic (thickened-edge) slab foundations',
          'Slab-on-grade with perimeter footings',
          'Rebar and/or fiber reinforcement sized to the load',
          'Vapor barrier under heated or finished spaces',
          'Anchor bolts set for the wall framing',
          'Proper slope to the door for drainage',
        ],
      },
      {
        h2: 'Built to carry the load',
        body: [
          'A garage slab has to handle wall and roof loads plus vehicles without cracking or settling. We size the thickness, footings and reinforcement to your structure and set it on a properly compacted base — the difference between a floor that lasts and one that cracks in a couple of winters.',
        ],
      },
      {
        h2: 'Permits and engineering',
        body: [
          'Garage foundations generally require a permit and must meet local code, and larger structures may need an engineered design. We build to the approved plan; if a stamped foundation design is required, we can connect you with a good engineer — we don’t do the engineering in-house, but we pour to spec.',
        ],
      },
    ],
    costNote:
      'Garage slabs and foundations are priced by the project — size, thickness, footings, reinforcement, site access and excavation all factor in. As a rough guide the flatwork runs about $10–$12 per square foot, with footings and thickened edges adding to that. We measure the site and give you an itemized number.',
    faqs: [
      {
        q: 'How thick should a garage slab be?',
        a: 'A typical garage slab is 4 inches, thickened to 6″+ at the edges and under load-bearing walls, with reinforcement. Heavy vehicles or a lift call for more. The compacted base under it is just as important as the thickness.',
      },
      {
        q: 'Do I need footings for a garage?',
        a: 'It depends on the structure and code. Many detached garages use a monolithic thickened-edge slab; larger or taller buildings use perimeter footings. We’ll build the type your plan and inspector call for.',
      },
      {
        q: 'Do you pull the permit and do the engineering?',
        a: 'Garage foundations typically need a permit and must meet code. We build to the approved plan; if a stamped engineered design is required, we can connect you with an engineer rather than doing the engineering ourselves.',
      },
      {
        q: 'Can you pour a slab for a detached garage or shop?',
        a: 'Yes — detached garages, shops and outbuildings are common work for us. We size the base, thickness and reinforcement to how you’ll use the building.',
      },
    ],
    related: ['concrete', 'concrete/slabs-foundations', 'concrete/pole-barn-foundations', 'concrete/driveways'],
  },
  {
    path: 'concrete/pole-barn-foundations',
    parent: 'concrete',
    navGroup: 'Concrete',
    navLabel: 'Pole Barn Foundations',
    title: 'Pole Barn Foundations & Slabs Knoxville TN | Concrete | Paramount',
    metaDescription:
      'Concrete pole barn foundations and slabs in Knoxville, TN — post footings, piers and flat interior slabs for post-frame buildings. Free phone consultation: (865) 237-9770.',
    h1: 'Pole Barn Foundations & Slabs in Knoxville, TN',
    heroSubhead:
      'Post-frame buildings need the concrete done right — from the post footings to a flat, durable interior slab. That’s our lane.',
    primaryKeyword: 'pole barn foundation Knoxville TN',
    intro: [
      'Pole barns and post-frame buildings are a popular, cost-effective way to add a garage, shop, barn or storage building — and the concrete is a big part of getting them right. From the post footings and piers that carry the frame to the interior slab you’ll actually use, the foundation work has to be flat, properly based and built for the load. We pour pole barn foundations and slabs across Knoxville and East Tennessee.',
      'We handle the concrete side of post-frame construction: drilled or dug post footings and piers, perimeter work, a compacted base, reinforcement, vapor barrier where needed, and a smooth, level interior slab ready for equipment, vehicles or a finished floor.',
    ],
    sections: [
      {
        h2: 'Concrete work for post-frame buildings',
        bullets: [
          'Post footings and concrete piers to carry the columns',
          'A flat, level interior slab for equipment and vehicles',
          'Thickened edges and reinforcement where the load calls for it',
          'Vapor barrier under heated or finished floors',
          'Proper slope and drainage for a shop or garage floor',
          'Control joints to manage cracking on big pours',
        ],
      },
      {
        h2: 'Slab now or slab later',
        body: [
          'Some owners pour the interior slab with the build; others frame first and pour the floor after. We can work either way and coordinate with your builder so the concrete and the structure line up cleanly.',
        ],
      },
      {
        h2: 'Sized to your building and load',
        body: [
          'A floor you’ll park a tractor, RV or lift on is not the same pour as a storage-only slab. We size the thickness, base and reinforcement to how you’ll actually use the building so it doesn’t crack or settle under weight.',
        ],
      },
    ],
    costNote:
      'Pole barn foundations and slabs are priced by the project — the number of post footings, the slab size and thickness, reinforcement, site access and grading all factor in. As a rough guide the interior flatwork runs about $10–$12 per square foot, with footings and piers added separately. We measure the site and give you an itemized number.',
    faqs: [
      {
        q: 'How thick should a pole barn slab be?',
        a: 'A typical pole barn floor is 4 inches with reinforcement. If you’ll park heavy equipment, run a lift or drive tractors on it, we go thicker. The base prep matters as much as the thickness.',
      },
      {
        q: 'Do you pour the post footings too?',
        a: 'Yes — we handle the drilled or dug post footings and concrete piers that carry the frame, along with the interior slab. It’s all part of getting a post-frame building on solid ground.',
      },
      {
        q: 'Can you pour the slab after the building is up?',
        a: 'Absolutely — that’s a common approach. We coordinate with your builder and pour a flat, level floor once the frame is standing.',
      },
      {
        q: 'Do pole barn foundations need a permit?',
        a: 'Usually yes, and they must meet local code; larger post-frame buildings may need an engineered design. We build to the approved plan and can connect you with an engineer if a stamped design is required.',
      },
    ],
    related: ['concrete', 'concrete/slabs-foundations', 'concrete/garage-foundations', 'concrete/driveways'],
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
    related: ['outdoor-living/backyard-builds', 'pavers', 'concrete/patio', 'hardscapes/fire-pits', 'retaining-walls'],
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
    path: 'outdoor-living',
    isHub: true,
    navGroup: 'Outdoor Living',
    navLabel: 'Outdoor Living (overview)',
    title: 'Outdoor Living Builder Knoxville TN | Covered Patios, Kitchens & Backyard Builds | Paramount',
    metaDescription:
      'Outdoor living builder in Knoxville & East TN — covered patios and pergolas, outdoor kitchens, backyard sport courts and full backyard transformations, designed and built as one project on concrete and hardscape work made for our clay soil. Free consultation: (865) 237-9770.',
    h1: 'Outdoor Living in Knoxville, TN',
    heroSubhead:
      'Covered patios, outdoor kitchens, sport courts and full backyard transformations — designed and built as one connected space, not a pile of disconnected projects.',
    primaryKeyword: 'outdoor living Knoxville TN',
    intro: [
      'Outdoor living is what happens when your backyard stops being a yard and becomes another room of the house — a place to cook, gather, unwind and actually live. In East Tennessee our long springs and falls mean an outdoor space earns its keep most of the year, and the homes that use theirs the most are the ones where every piece was designed to work together.',
      'That’s the difference between an outdoor living space and a pile of separate projects. A patio here, a cover there and a kitchen somewhere else rarely add up. We plan the whole space — how you’ll move through it, where people gather, how it drains and how it flows — then build it so each element ties into the next, on concrete and hardscape work engineered to last here.',
    ],
    sections: [
      {
        h2: 'Three ways to build your backyard',
        body: [
          'Not every project is a full transformation, and it shouldn’t have to be. We build at three levels, and the right one depends on how you use the space and where you want to land on budget:',
        ],
        bullets: [
          'Concrete & flatwork ($8k–$15k) — driveways, slabs, sidewalks, a standalone patio or a repair. The foundation everything else is built on.',
          'Patio + cover package ($15k–$25k) — a concrete or paver patio paired with a manufactured or pergola-style cover. The value option: engineered, faster to install, defined sizes, shade and rain protection without a full custom build.',
          'Full custom build ($25k–$60k+) — site-built structures, outdoor kitchens, sport courts, walls, drainage and lighting, designed and built as one project. Unlimited spans, materials matched to your home, and an integrated kitchen or fire feature — no size constraints.',
        ],
      },
      {
        h2: 'What an outdoor living space brings together',
        bullets: [
          'Patios in poured concrete, pavers or natural stone',
          'Fire pits and fire features as the gathering point',
          'Seat walls and built-in seating',
          'Walkways and steps that connect the whole yard',
          'Retaining walls to carve level, usable space out of a slope',
          'Lighting, drainage and grading so it looks right and lasts',
        ],
      },
      {
        h2: 'Designed together, not piece by piece',
        body: [
          'We start with a master plan for the whole space, then build it so the patio, fire feature, seating and paths read as one designed outdoor room. Not ready to do it all at once? We build in phases as budget allows — each stage fitting the master plan instead of boxing you in later.',
        ],
      },
      {
        h2: 'Outdoor living & entertainment packages',
        body: [
          'We’re building signature outdoor living packages — proven combinations of the pieces that work best together. Think a patio with an integrated fire feature and seat walls, an entertainer’s setup with a grilling area and lighting, or a low-maintenance paver retreat sized for the whole family. Ask us what packages we’re offering and we’ll tailor one to your yard, your budget and how you like to spend time outside.',
        ],
      },
    ],
    costNote:
      'Outdoor living projects are priced by the scope of the plan — each piece (patio, fire feature, seat walls, walkways, retaining walls) has its own range, and how they combine drives the total. We design the space, then give you an itemized proposal so you can see every part and phase it if you’d like. The individual service pages linked below give per-element pricing.',
    faqs: [
      {
        q: 'Can you design my whole backyard at once?',
        a: 'Yes — that’s our favorite way to work. We create a master plan for the entire space so the patio, fire feature, seating, walls and paths all flow together, then build it as one project or in phases.',
      },
      {
        q: 'Can we build it in phases to spread the cost?',
        a: 'Absolutely. We design the full plan up front and build in stages as your budget allows, so each phase fits the master plan and nothing has to be torn out or redone later.',
      },
      {
        q: 'What’s included in an outdoor living project?',
        a: 'Whatever the space calls for — commonly a patio, a fire feature, seat walls or seating, walkways and steps, and often a retaining wall to create level space, all tied together with lighting, drainage and grading.',
      },
      {
        q: 'Do you handle the drainage and grading too?',
        a: 'Yes, and on our sloped, clay lots it’s the part that makes or breaks the project. We plan grading and drainage first so the finished space stays level, dry and usable for years.',
      },
    ],
    related: ['outdoor-living/backyard-builds', 'outdoor-living/patio-covers', 'outdoor-living/outdoor-kitchens', 'outdoor-living/sport-courts', 'hardscapes/fire-pits', 'retaining-walls'],
  },
  {
    path: 'outdoor-living/patio-covers',
    parent: 'outdoor-living',
    navGroup: 'Outdoor Living',
    navLabel: 'Patio Covers & Pergolas',
    title: 'Covered Patios & Pergolas Knoxville TN | Kit & Custom | Paramount',
    metaDescription:
      'Covered patio builder in Knoxville & East TN. Manufactured kit covers and site-built custom structures — engineered for snow load and wind, with slab, footings, electrical rough-in and lighting. Free consultation: (865) 237-9770.',
    h1: 'Covered Patios & Pergolas in Knoxville, TN',
    heroSubhead:
      'A patio you can use in the rain and the July sun — from engineered kit covers to fully custom, site-built structures matched to your home.',
    primaryKeyword: 'patio cover Knoxville TN',
    intro: [
      'A patio is only as useful as the days you can actually sit on it. In East Tennessee that means shade in the summer, cover in the afternoon rain, and a roof you can hang a fan and lights from. A cover is what turns a slab you use a few evenings a year into the most-used room of the house.',
      'There are two honest ways to get there — a manufactured kit cover or a site-built custom structure — and the right one comes down to your budget, your roofline and how far you want to push the design. We build both, and we’ll tell you straight which one fits your project.',
    ],
    sections: [
      {
        h2: 'Kit cover vs. custom — the honest comparison',
        body: [
          'Neither is “better.” They solve the same problem at different price points and levels of flexibility.',
        ],
        bullets: [
          'Kit / manufactured cover — engineered aluminum or pergola-style systems in defined sizes. Faster to install, strong value, insulated roof options, and clean lines. Best when your patio is a standard rectangle and you want shade, rain protection and lighting without a full custom build. This is the heart of our $15k–$25k patio-plus-cover package.',
          'Custom, site-built structure — framed and finished on site with unlimited spans and footprints, materials matched to your house, and full integration of an outdoor kitchen, fireplace, ceiling, fans and lighting. Best when the roofline has to tie into the home, the span is wide, or the cover is one piece of a larger build. Starts around $25k and scales with size and finish.',
        ],
      },
      {
        h2: 'What’s included in a covered patio project',
        bullets: [
          'The slab or paver base — poured or laid, sloped for drainage, sized to the structure',
          'Footings and posts engineered for the load, not just set in the ground',
          'The cover structure itself — kit system or site-built frame and roof',
          'Electrical rough-in for a ceiling fan, recessed or string lighting, and outlets',
          'Provisions to tie into the house for an attached cover, or a freestanding footprint',
          'Flashing and attachment detailing so water goes where it should — never into your wall',
        ],
      },
      {
        h2: 'Built for East Tennessee weather',
        body: [
          'A cover is a structure, and structures here have to handle real snow load and the wind that comes with our storms. We size the posts, beams and footings to the span and the load — and where a cover attaches to the house, the flashing and ledger detailing is what keeps the connection dry for the life of the roof. Attached or freestanding, we plan that before anyone digs.',
        ],
      },
    ],
    costNote:
      'A patio-plus-cover package typically runs $15,000–$25,000 for a concrete or paver patio with an engineered kit cover, lighting and a fan. Fully custom, site-built covered structures start around $25,000 and scale with span, roofline, materials and any integrated kitchen or fireplace. We price the slab, the structure and the electrical separately on your proposal so you can see exactly what drives the number.',
    faqs: [
      {
        q: 'What’s the difference between a kit cover and a custom structure?',
        a: 'A kit cover is an engineered, manufactured system in defined sizes — faster and a strong value for a standard patio. A custom structure is framed and built on site with unlimited spans, materials matched to your home, and full integration of kitchens, fireplaces and lighting. We build both and will tell you which fits your project and budget.',
      },
      {
        q: 'Can the cover attach to my house?',
        a: 'Yes — covers can be attached to the home or freestanding. Attached covers need careful flashing and ledger detailing so water never gets into the wall; freestanding structures avoid the connection entirely and can go anywhere the footprint allows. We plan which approach before we build.',
      },
      {
        q: 'Will it hold up to snow and wind?',
        a: 'We size the posts, beams and footings to the span and the snow and wind loads we actually get in East Tennessee — not to a generic minimum. That engineering is exactly why a cover costs more than a bare patio, and why it lasts.',
      },
      {
        q: 'Do I need a permit for a covered patio?',
        a: 'A roofed structure usually does require a building permit, and HOA approval and setbacks apply. We handle the details as part of the design and let you know what your specific lot and jurisdiction require.',
      },
      {
        q: 'Can you add a kitchen or fireplace under the cover?',
        a: 'Yes — and that’s where custom shines. We can rough in gas, water, electrical and drainage during the build so an outdoor kitchen, fireplace or heaters integrate cleanly instead of being bolted on later.',
      },
    ],
    related: ['outdoor-living', 'outdoor-living/outdoor-kitchens', 'outdoor-living/backyard-builds', 'concrete/patio', 'pavers/patios', 'hardscapes/fire-pits'],
  },
  {
    path: 'outdoor-living/outdoor-kitchens',
    parent: 'outdoor-living',
    navGroup: 'Outdoor Living',
    navLabel: 'Outdoor Kitchens',
    title: 'Outdoor Kitchens Knoxville TN | Grill Islands to Full Builds | Paramount',
    metaDescription:
      'Outdoor kitchen builder in Knoxville & East TN — grill stations, full masonry kitchens with counters, storage, sinks and refrigeration. Gas, water, electrical and freeze-thaw-ready finishes. Free consultation: (865) 237-9770.',
    h1: 'Outdoor Kitchens in Knoxville, TN',
    heroSubhead:
      'From a clean grill island to a full masonry kitchen with bar seating and refrigeration — built to cook on, entertain around, and survive an East Tennessee winter.',
    primaryKeyword: 'outdoor kitchen Knoxville TN',
    intro: [
      'An outdoor kitchen is the piece that keeps the cook in the party instead of stuck inside at the stove. Done right it’s not a grill on a cart — it’s counter space, storage, a place to prep and serve, and often a sink and refrigeration, all built to live outdoors year-round.',
      'The range is wide, and that’s the point: you can start with a solid grill station and grow, or build the whole thing at once. What matters most here isn’t the appliances — it’s the structure under them and the utilities run to them, because that’s what fails first when it’s done cheap.',
    ],
    sections: [
      {
        h2: 'Three tiers, real differences',
        bullets: [
          'Grill station — a built-in grill in a masonry or framed surround with counter space on either side. The clean, right-sized starting point for most patios.',
          'Mid kitchen — grill plus a run of counter, storage doors and drawers, and a sink with a water and drain line. The setup that actually replaces trips back into the house.',
          'Full kitchen — appliances (grill, side burner, sometimes a pizza oven or griddle), bar seating, refrigeration, and finished counters and facing. The centerpiece of a full backyard build.',
        ],
      },
      {
        h2: 'Masonry vs. framed — what’s underneath',
        body: [
          'The two ways to build the body of an outdoor kitchen are full masonry (block and stone or brick) or a framed structure clad in stone veneer or stucco. Masonry is the heaviest, longest-lived option and takes stone facing beautifully. A framed structure is lighter and faster and, built correctly with the right substrate and weatherproofing, holds up just as well. Either way, the countertop — granite, porcelain or concrete — has to be rated for freeze-thaw, because a counter that traps water spalls in a couple of winters.',
        ],
      },
      {
        h2: 'Utilities: the part you can’t add later cheaply',
        bullets: [
          'Gas — a dedicated natural-gas or propane line sized to the grill and any burners',
          'Water & drainage — a supply line for the sink and a proper drain, freeze-protected',
          'Electrical — outlets, lighting, and circuits for refrigeration and any powered appliances',
          'Structure — footings and a slab that carry the weight of masonry and stone without settling',
        ],
      },
    ],
    costNote:
      'A built-in grill station generally starts in the mid-four figures to around $10,000. A mid kitchen with counters, storage and a sink typically runs $12,000–$25,000. A full outdoor kitchen with appliances, refrigeration, bar seating and finished stone runs $25,000 and up, depending on appliances and materials. Utilities (gas, water, electrical) and the slab are quoted as their own line items — they’re most of what separates a cheap build from one that lasts.',
    faqs: [
      {
        q: 'How much does an outdoor kitchen cost in Knoxville?',
        a: 'A built-in grill station starts in the mid-four figures to about $10,000; a mid kitchen with counters, storage and a sink runs roughly $12,000–$25,000; and a full kitchen with appliances, refrigeration and bar seating runs $25,000 and up. Appliances and countertop material move the number the most.',
      },
      {
        q: 'Masonry or framed — which should I build?',
        a: 'Masonry is the heaviest, longest-lived option and takes stone facing beautifully. A framed structure clad in stone veneer is lighter, faster and, built correctly, just as durable. We’ll recommend based on your design, your budget and how the kitchen ties into the rest of the space.',
      },
      {
        q: 'Will an outdoor kitchen survive our winters?',
        a: 'Yes, when it’s built for it. The countertop has to be freeze-thaw rated so it doesn’t trap water and spall, water lines have to be freeze-protected or drainable, and appliances should be rated for outdoor use. Those details are exactly where a cheap build fails.',
      },
      {
        q: 'Can you run gas, water and electric to it?',
        a: 'Yes — we coordinate the gas line, water supply and drain, and the electrical circuits as part of the build. Roughing these in during construction is far cheaper than trying to add them to a finished kitchen later.',
      },
      {
        q: 'Can the kitchen go under a covered patio?',
        a: 'That’s the ideal setup — a cover keeps the cook and the appliances out of the weather and lets us integrate lighting and fans overhead. We often build the kitchen and the cover together as one project.',
      },
    ],
    related: ['outdoor-living', 'outdoor-living/patio-covers', 'outdoor-living/backyard-builds', 'hardscapes/fire-pits', 'pavers/patios', 'concrete/patio'],
  },
  {
    path: 'outdoor-living/sport-courts',
    parent: 'outdoor-living',
    navGroup: 'Outdoor Living',
    navLabel: 'Backyard Sport Courts',
    title: 'Backyard Sport Courts Knoxville TN | Basketball & Multi-Sport | Paramount',
    metaDescription:
      'Backyard sport court builder in Knoxville & East TN — basketball and multi-sport courts built as part of a full outdoor living space with patio, cover and grilling area. Base, drainage and finishes done right. Free consultation: (865) 237-9770.',
    h1: 'Backyard Sport Courts in Knoxville, TN',
    heroSubhead:
      'The signature family build — a basketball or multi-sport court designed together with the patio, cover and grilling area as one space the whole family lives in.',
    primaryKeyword: 'backyard sport court Knoxville TN',
    intro: [
      'A sport court is the build that gets the neighborhood’s kids to your house and keeps them there. But the courts that get used every day aren’t just a slab with a hoop — they’re part of a space, with somewhere for parents to sit, shade and lights so the game doesn’t stop at dark, and a grill going while it happens.',
      'That’s how we build them: the court, the patio, the cover and the grilling area planned as one outdoor room, so the whole family has a reason to be out there at the same time. It’s our signature build, and it reads that way when it’s done.',
    ],
    sections: [
      {
        h2: 'More than a slab and a hoop',
        body: [
          'The court surface itself is a concrete build done right — excavation, a compacted stone base, drainage designed before the pour, the correct thickness and reinforcement, and control joints laid out to align with the striping. What turns it into an outdoor living space is everything we plan around it.',
        ],
        bullets: [
          'The court — basketball, pickleball lines, or a multi-sport layout, striped or acrylic-coated',
          'A patio and seating area so parents and guests have somewhere to be',
          'A cover or pergola for shade over the seating — and lights over the court for night games',
          'A grilling or kitchen area so it’s a gathering space, not just a practice pad',
          'Retaining walls and drainage where the lot slopes — usually most of East Tennessee',
        ],
      },
      {
        h2: 'Designed for how the family actually uses it',
        body: [
          'Court orientation, run-out space, where the seating goes, where the goal and lights sit — these are design decisions, and they’re the difference between a court that gets used daily and one that gets used twice. We work them out on site as part of the plan, then build the whole thing on one contract with one crew.',
        ],
      },
    ],
    costNote:
      'A sport court as part of a full outdoor living build is a custom project — the court surface, the surrounding patio, a cover, lighting and a grilling area each carry their own range, and how they combine drives the total. Most full-court-plus-space builds land in the $25,000–$60,000+ range. If you just want the court surface itself, our concrete basketball court page has honest per-size pricing.',
    faqs: [
      {
        q: 'Do I have to build the whole outdoor space, or just the court?',
        a: 'Either. If you just want the court surface, our concrete basketball court page covers that with honest per-size pricing. This page is about the bigger build — court plus patio, cover, lighting and a grilling area designed as one family space.',
      },
      {
        q: 'Can you build on a sloped lot?',
        a: 'Yes — that’s most of East Tennessee. It usually means cut-and-fill, sometimes a retaining wall on the high side, and a drainage plan. We build the walls and drainage in-house, so it’s one crew and one contract.',
      },
      {
        q: 'Can the court do more than basketball?',
        a: 'Yes. We stripe pickleball lines alongside basketball on most courts, and can lay out a multi-sport surface. One slab, multiple line colors, far more use.',
      },
      {
        q: 'Can you add lights so we can play at night?',
        a: 'Yes — we run conduit under the slab during the build and coordinate pole-mounted LED lighting with a licensed electrician. It turns a court from a six-month asset into a year-round one.',
      },
    ],
    relatedPost: { label: 'Read: what goes into building a court in East Tennessee', path: '/blog/concrete-basketball-courts-knoxville-tn/' },
    related: ['outdoor-living', 'concrete/basketball-courts', 'outdoor-living/patio-covers', 'outdoor-living/backyard-builds', 'retaining-walls', 'concrete/driveways'],
  },
  {
    path: 'outdoor-living/backyard-builds',
    parent: 'outdoor-living',
    navGroup: 'Outdoor Living',
    navLabel: 'Full Backyard Builds',
    title: 'Full Backyard Builds Knoxville TN | Complete Outdoor Transformations | Paramount',
    metaDescription:
      'Complete backyard transformations in Knoxville & East TN — design, grading and drainage, hardscape, covered structures, outdoor kitchens and lighting, built as one project. Free design consultation: (865) 237-9770.',
    h1: 'Full Backyard Builds in Knoxville, TN',
    heroSubhead:
      'The whole backyard, designed and built as one project — grading and drainage, hardscape, structures, kitchen and lighting — so every piece works together from day one.',
    primaryKeyword: 'backyard renovation Knoxville TN',
    intro: [
      'A full backyard build is what happens when you stop adding one project at a time and design the whole space at once. Instead of a patio this year, a wall next year and a cover someday, we plan the finished backyard up front — how it drains, how you move through it, where you gather — then build it in one coordinated project.',
      'This is our flagship work, and it’s where doing everything in-house pays off. Grading, drainage, concrete, pavers, walls, covered structures, an outdoor kitchen and lighting are all one crew and one plan — no coordinating three contractors who each blame the other when something doesn’t line up.',
    ],
    sections: [
      {
        h2: 'What a full build includes',
        bullets: [
          'Design — a master plan for the whole space before anything is built',
          'Grading & drainage — the unglamorous foundation that keeps a sloped, clay lot dry and level',
          'Hardscape — patios and walkways in concrete, pavers or natural stone',
          'Structures — covered patios, pergolas and pavilions',
          'Outdoor kitchen — from a grill station to a full cooking and bar setup',
          'Retaining walls — to carve level, usable space out of a slope',
          'Lighting & finish — so the space works after dark and reads as one designed room',
        ],
      },
      {
        h2: 'The design-first process',
        body: [
          'Large builds don’t start with a truck showing up. They start with a paid design step: an on-site evaluation of grade, drainage and access, then a plan and a written proposal you can actually build from. That fee is credited toward your project. It’s how a $40k+ transformation gets built once, correctly, instead of improvised in the field.',
        ],
      },
      {
        h2: 'Built in phases, if you want',
        body: [
          'A full plan doesn’t mean a full invoice all at once. We design the entire space up front, then build in phases as budget allows — each stage fitting the master plan so nothing has to be torn out and redone later. The plan is the thing that protects your money; the phasing just decides the pace.',
        ],
      },
    ],
    costNote:
      'Full backyard builds are custom by definition. Most land in the $25,000–$60,000+ range, and larger transformations with a covered structure, outdoor kitchen and extensive hardscape run higher. Every build starts with a paid on-site design consultation — credited toward the project — and a written, itemized proposal so you can see every element and phase it if you’d like.',
    faqs: [
      {
        q: 'What does a full backyard build cost?',
        a: 'Most full transformations land in the $25,000–$60,000+ range, and larger builds with a covered structure, outdoor kitchen and extensive hardscape run higher. Because every yard and plan is different, we start with a paid on-site design consultation and give you a written, itemized proposal.',
      },
      {
        q: 'Do I have to build it all at once?',
        a: 'No. We design the whole space up front, then build in phases as your budget allows. Each phase fits the master plan, so nothing gets torn out and redone later. The full design is what protects your investment — phasing just sets the pace.',
      },
      {
        q: 'Why is there a design fee?',
        a: 'A real plan for a large build takes an on-site evaluation of grade, drainage and access plus design time — that’s work. The consultation fee covers it and is credited in full toward your project. It’s what lets us build a big project once, correctly, instead of guessing in the field.',
      },
      {
        q: 'Do you handle grading and drainage too?',
        a: 'Yes — and on our sloped, clay lots it’s the part that makes or breaks everything above it. We plan grading and drainage first so the finished space stays level, dry and usable for decades.',
      },
      {
        q: 'Is it really one crew for everything?',
        a: 'Yes. Concrete, pavers, walls, structures, the kitchen and lighting are all handled in-house on one contract. That’s the whole advantage of a full build — no finger-pointing between separate contractors when pieces don’t line up.',
      },
    ],
    related: ['outdoor-living', 'outdoor-living/patio-covers', 'outdoor-living/outdoor-kitchens', 'outdoor-living/sport-courts', 'retaining-walls', 'pavers/patios'],
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
