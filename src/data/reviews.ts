/**
 * Customer reviews shown on /reviews/, the homepage, and matching service pages.
 *
 * IMPORTANT: keep these 100% real. Every entry below was copied from the
 * Paramount Google Business Profile (Nov 2026). Long reviews are trimmed with
 * "…" but never reworded. Authors are shortened to first name + last initial.
 *
 * To add a new one: copy it from Google, paste it at the TOP of the list, and
 * tag it with `tags` so it shows on the right service pages.
 *
 * Tags used to match reviews to pages:
 *   'outdoor-living' | 'patio' | 'pavers' | 'stamped' | 'driveway' |
 *   'fire-pit' | 'pergola' | 'pool-deck' | 'walkway' | 'retaining-wall'
 */
export interface Review {
  author: string;
  location?: string;
  rating: number;
  text: string;
  service?: string;
  /** Which kinds of pages this review should appear on. */
  tags?: string[];
  /** Pin to the homepage. */
  featured?: boolean;
}

/** Live totals from Google (update when the count changes). */
export const googleRating = { value: '4.9', count: 37 };

export const reviews: Review[] = [
  {
    author: 'Josh D.',
    rating: 5,
    service: 'Backyard Concrete & Hardscape',
    tags: ['outdoor-living', 'patio'],
    featured: true,
    text:
      'We recently hired Paramount Concrete and Hardscapes for a concrete and hardscape project at our home, and the entire experience was excellent from start to finish. Jay handled the initial site survey, quote, and communication throughout the project. He also made several recommendations during the planning process that I had not even considered, and those ideas ultimately made the finished project even better. At the end of each workday, the team lead would knock on the door and walk me through what had been completed, explain what was coming next, and ask whether I was satisfied or wanted anything changed. The finished work looks great, but just as importantly, the entire process was organized, professional, and stress-free.',
  },
  {
    author: 'Eddie & Lola D.',
    rating: 5,
    service: 'Pool Deck, Pavers & Pergolas',
    tags: ['outdoor-living', 'pool-deck', 'pavers', 'pergola'],
    featured: true,
    text:
      'Jay and his crews put concrete and pavers around our pool and added Pergolas and privacy wall to our pool area. Carlos and his crew were so creative and paid attention to every detail on the concrete and pavers area. Jays crew that worked on the Pergolas worked with us to give us the best possible results for this area. Both crews were very professional and pleasant to work with. We’re so pleased with our results and will continue to work with Paramount on future projects.',
  },
  {
    author: 'E. P.',
    rating: 5,
    service: 'Driveway & Front Walkway',
    tags: ['driveway', 'walkway'],
    featured: true,
    text:
      'I could not be more pleased with the work done by the Paramount team. They are professional, knowledgeable, and reliable. I worked with Jay to scope the project, driveway and front walkway demolition and replacement. The demo and installation crew led by Toni and including Mario and Vari is highly competent and skilled. I was able to drive on my new driveway two weeks after it was poured. I will not hesitate to call Paramount for future projects.',
  },
  {
    author: 'Tim R.',
    rating: 5,
    service: 'Paver Patio & Fire Pit',
    tags: ['outdoor-living', 'pavers', 'patio', 'fire-pit', 'pergola'],
    featured: true,
    text:
      'Had Paramount do a paver patio with a matching firepit. I was very impressed with the care taken to make sure that the entire job was done right. The gentleman that actually laid every paver stone was very meticulous in making sure all was level. They even put in concrete footings for me for a Pergola kit I had ordered, and came back to finish the paver stones around the posts of the pergola once I had it built.',
  },
  {
    author: 'Randall B.',
    rating: 5,
    service: 'Paver Patio',
    tags: ['pavers', 'patio'],
    text:
      'I had originally contracted to have Paramount put in a 12x22 stamped concrete patio, but we ran into some difficulties with the concrete supplier. Long story short, Jay made things right by doing a paver stone patio instead. It took awhile longer to get it done, but the final product came out better than I had expected. High quality workmanship. Would not hesitate to recommend Paramount to anyone.',
  },
  {
    author: 'Terri G.',
    rating: 5,
    tags: ['outdoor-living'],
    text:
      'From my first consultation to the end of my project I was met with absolute professionalism. Everyone on the team went out of their way to communicate and work in a timely manner. My project was completed as promised with a 10 out of 10 from us with satisfaction on the finished work. The team went above and beyond by leaving the project area better than when they started. I highly recommend Paramount Concrete & Hardscapes!!!',
  },
  {
    author: 'Alicia W.',
    rating: 5,
    service: 'Concrete Driveway',
    tags: ['driveway'],
    featured: true,
    text:
      'Paramount Concrete & Hardscapes absolutely crushed it! And by crushed it, I mean they made my property look so good that I’m now emotionally attached to my driveway 😂 I used to pull into my house and think, “Yep, that’s concrete.” Now I pull in and think, “WOW… should I be charging people admission?” The work is amazing, the crew was professional, and everything turned out better than I imagined. 10/10 would hire again.',
  },
  {
    author: 'Joanne S.',
    rating: 5,
    service: 'Patio',
    tags: ['patio'],
    text:
      'Jay and his crew did an amazing job installing my new patio, and I couldn’t be happier with the results! Their attention to detail truly stood out, and the worksite was kept clean and tidy throughout the entire project. Jay was also incredibly helpful when it came to selecting the right materials and made the whole process easy and enjoyable.',
  },
  {
    author: 'Robert K.',
    rating: 5,
    service: 'Stamped Concrete Patios',
    tags: ['outdoor-living', 'stamped', 'patio'],
    featured: true,
    text:
      'We wanted two stamped concrete pads (one on either side of our existing pad), one to be used for a cooking area and the other larger one for entertaining. I talked with at least 6 other companies and I got either really high quotes, or no responses. When I was close to giving up, I found Paramount Hardscapes. I spoke with Jay; the owner and he immediately made me feel like family, not just a client. The price was very reasonable and the timeline for completion worked for us too. With each step of the process we loved it more and more.',
  },
  {
    author: 'Patrick & Carrie T.',
    rating: 5,
    service: 'Patios, Driveway & Retaining Wall',
    tags: ['patio', 'driveway', 'retaining-wall'],
    text:
      'Top notch concrete contractors! Jay and his crew have poured two large patios for me and my wife, recently repaired a new poorly constructed retaining wall around my pool, and poured a driveway, and two large patios for my son and his wife at their home. Paramount Concrete is always on time, professional, respectful and honest…',
  },
  {
    author: 'Claire K.',
    rating: 5,
    service: 'Backyard',
    tags: ['outdoor-living'],
    text:
      'Jay and his crew are the best contractors I’ve ever worked with! They truly take pride in their work and you can trust that it is going to be done right and look amazing. I would give them 10 stars if I could!',
  },
  {
    author: 'Veronica M.',
    rating: 5,
    service: 'Stamped Patio, Path & Fire Pit',
    tags: ['stamped', 'patio', 'fire-pit', 'walkway', 'outdoor-living'],
    text:
      'We used Paramount for a project over the summer and could not be more pleased with the finished project! We had a stamped concrete patio, path and firepit installed. Jay was so helpful with color selection and any questions that came up along the way. His crew was professional, punctual and so respectful of our home. Highly recommend!',
  },
  {
    author: 'Mr. Foodie',
    rating: 5,
    service: 'Patio, Stairs & Fire Pit',
    tags: ['patio', 'fire-pit'],
    text:
      'Paramount is the only and best concrete company to use in Knox country period. Honest, on time, communicative and answers any questions you have. They took care of my back patio, stairs and firepit. If we get more done, they’re the only company I will call 📞',
  },
  {
    author: 'Holly D.',
    rating: 5,
    service: 'Patio',
    tags: ['patio'],
    text:
      'Absolutely 5 out of 5 stars. Paramount stood behind their promise - I have a patio that I love and they showed up when they said they would. Even more important, the follow-up care left my home looking better than it did when they arrived. I am so thankful to this crew. 10/10 service and 10/10 would recommend.',
  },
  {
    author: 'Kevin S.',
    rating: 5,
    service: 'Paver Patio',
    tags: ['pavers', 'patio'],
    text:
      'We are very pleased with Jay and team. Carlos and Martin were a pleasure to work with and worked hard. They communicated with us every step of the way. Martin and Carlos attention to detail was excellent. All took pride in their work and we are excited to use our new patio. We will use them again.',
  },
  {
    author: 'Bert M.',
    rating: 5,
    service: 'Sidewalk & Patio',
    tags: ['walkway', 'patio'],
    text:
      'Jay and his crew did a fantastic job on our sidewalk and patio upgrade, they worked tirelessly in the stifling heat and created a beautiful project for us. Jay, the foreman took every suggestion we had and talked us through all of them. Great job!',
  },
  {
    author: 'Jose M.',
    rating: 5,
    service: 'Patio Extension, Sidewalk & Grading',
    tags: ['patio', 'walkway'],
    text:
      'Paramount did a great job extending our back patio, adding a sidewalk, a pad for our trash can, and grading our back yard. Jay, Frank, and their crew were super friendly and professional. These guys are truly hard working men to ensure they deliver a great product. I definitely recommend them to do your next big project.',
  },
  {
    author: 'Jessi',
    rating: 5,
    service: 'Driveway Extension',
    tags: ['driveway'],
    text:
      'We had such a wonderful experience with Paramount. Jay, Carlos, and the whole crew were such a pleasure to work with! Extremely knowledgeable and very kind! We had talked with other companies, but choosing Paramount for our driveway repair and extension project was easy and obvious. We are so happy with our driveway and the careful details to make it perfect. Thank you!!',
  },
  {
    author: 'Angela S.',
    rating: 5,
    service: 'Driveway Addition',
    tags: ['driveway'],
    text:
      'Paramount did a driveway addition for us. They were thorough, professional, and prompt. Excellent customer service. Job was completed on time and as just as described. My only complaint is that I should have gotten a bigger pad. Will definitely use them as my primary source moving forward.',
  },
  {
    author: 'Bob A.',
    rating: 5,
    service: 'Driveway Replacement',
    tags: ['driveway'],
    text:
      'The services provided for removal and replacement of driveway was excellent. Jay and Carlos were professional and responsive to questions and concerns.',
  },
  {
    author: 'Rebecca O.',
    rating: 5,
    tags: ['driveway'],
    text:
      'We have used Paramount for a couple of our concrete needs and have always been impressed. They are professional, respectful and not out to make a quick buck. Each time we have used them they have walked us through the process asked us for our input and went above and beyond for us. 10/10 recommend',
  },
  {
    author: 'Eric L.',
    rating: 5,
    tags: [],
    text:
      'Highly Recommend. Julio Maldonado and Carlos Pimentel are the best. They go above and beyond to make sure the customers are satisfied. Plus you get more for your money. I had got a couple other quotes. And when I met Julio I knew instantly that Paramount Hardscapes was who I was hiring. Great Customer Service.',
  },
  {
    author: 'Irene P.',
    rating: 5,
    service: 'Concrete Patio',
    tags: ['patio'],
    text:
      'They started my little patio May 28th getting it prepped for the concrete pour. They came back on June 7th and poured. The guys did a superb job. Job was done better than even I expected. They kept me informed every step of the way.',
  },
  {
    author: 'Brandon M.',
    rating: 5,
    service: 'Driveway Addition',
    tags: ['driveway'],
    text:
      'Great guys. Always showed up when they said they were going to. Had a slight delay because of weather, but they kept in contact with me during the delay and let me know when they planned to proceed. Most companies would just leave you wondering. I got an answer every time I contacted them immediately.',
  },
  {
    author: 'Virginia O.',
    rating: 5,
    service: 'Concrete Back Porch',
    tags: ['patio'],
    text:
      'We hired Paramount Home Renovations to build a concrete porch at the back of the house- The work was well done!',
  },
  {
    author: 'JRT S.',
    rating: 5,
    tags: [],
    text: 'Great experience! They have completed 3 separate jobs on my home and all have exceeded my expectations.',
  },
];

/** Reviews matching any of the given tags (falls back to featured). */
export function reviewsFor(tags: string[], limit = 3): Review[] {
  const hits = reviews.filter((r) => r.tags?.some((t) => tags.includes(t)));
  const pool = hits.length ? hits : reviews.filter((r) => r.featured);
  return pool.slice(0, limit);
}
