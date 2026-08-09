/**
 * Customer reviews shown in the carousel on /reviews/.
 *
 * IMPORTANT: keep these 100% real. Add only genuine reviews (from Google or
 * Facebook) — first name (or "Homeowner"), optional town, star rating (1–5),
 * and the real text. The page and schema render only what's in this array, and
 * the aggregateRating is derived from these, so nothing can claim more than is
 * true. Empty array = the page shows a "leave us a review" state (no fake data).
 */
export interface Review {
  author: string;
  location?: string;
  rating: number;
  text: string;
  service?: string;
}

export const reviews: Review[] = [
  // Real reviews go here. Example shape:
  // { author: 'Jane D.', location: 'Farragut, TN', rating: 5, text: '…', service: 'Concrete Driveway' },
];
