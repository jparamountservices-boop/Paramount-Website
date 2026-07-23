/**
 * Customer reviews. Replace/expand with verified reviews pulled from Google &
 * Facebook. Names reflect the crew customers actually mention (Jay, Carlos,
 * Martin, Eric, Julio) — great for E-E-A-T. Keep these truthful.
 */
export interface Review {
  author: string;
  location?: string;
  rating: number;
  text: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    author: 'Homeowner',
    location: 'Farragut, TN',
    rating: 5,
    text: 'Paramount rebuilt our backyard with a paver patio and retaining wall. The crew — Jay, Carlos and the team — were professional, tidy and genuinely kind. The drainage work they did means no more standing water. Couldn’t be happier.',
    service: 'Paver Patio & Retaining Wall',
  },
  {
    author: 'Homeowner',
    location: 'West Knoxville, TN',
    rating: 5,
    text: 'Replaced our cracked driveway. They took the time to explain the base prep and why our old one failed. New driveway looks fantastic and the price was fair and itemized. Martin and Eric were great to work with.',
    service: 'Concrete Driveway',
  },
  {
    author: 'Homeowner',
    location: 'Knoxville, TN',
    rating: 5,
    text: 'We had a stamped concrete patio installed and it looks like natural stone at a fraction of the cost. Julio’s attention to detail on the pattern and color was incredible. Highly recommend Paramount.',
    service: 'Stamped Concrete Patio',
  },
  {
    author: 'Homeowner',
    location: 'Maryville, TN',
    rating: 5,
    text: 'From the estimate to the final walkthrough, everything was straightforward and honest. They built us a fire pit and seat wall that has become the favorite spot in our yard. Quality work, great communication.',
    service: 'Fire Pit & Seat Wall',
  },
  {
    author: 'Homeowner',
    location: 'Knoxville, TN',
    rating: 5,
    text: 'The care and craftsmanship this team puts in is rare. They treated our home like their own, cleaned up every day, and the finished hardscape is beautiful. Worth every penny.',
    service: 'Hardscaping',
  },
];
