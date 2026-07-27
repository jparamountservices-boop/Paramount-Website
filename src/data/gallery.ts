/**
 * Portfolio / "Our Work" gallery.
 *
 * HOW TO ADD REAL PHOTOS:
 *  1. Drop optimized images into `public/images/work/` (e.g. patio-farragut-01.jpg).
 *  2. Set `image` to the path (e.g. '/images/work/patio-farragut-01.jpg').
 *  3. Write a descriptive `alt` (good for SEO + accessibility).
 * Until an image is set, the tile renders as a labeled placeholder — so the
 * layout is ready and you just drop photos in.
 */
export type GalleryCategory =
  | 'Concrete'
  | 'Stamped'
  | 'Pavers'
  | 'Retaining Walls'
  | 'Fire & Outdoor Living';

export interface GalleryItem {
  title: string;
  category: GalleryCategory;
  image?: string;
  alt: string;
  /** Service page this project links to. */
  href: string;
  location?: string;
}

export const galleryCategories: GalleryCategory[] = [
  'Concrete',
  'Stamped',
  'Pavers',
  'Retaining Walls',
  'Fire & Outdoor Living',
];

export const gallery: GalleryItem[] = [
  { title: 'Concrete Driveway', category: 'Concrete', href: '/concrete/driveways/', location: 'West Knoxville', alt: 'New broom-finish concrete driveway in West Knoxville, TN' },
  { title: 'Stamped Concrete Patio', category: 'Stamped', href: '/concrete/decorative-and-stamped/', location: 'Farragut', alt: 'Stamped concrete patio with stone pattern in Farragut, TN' },
  { title: 'Paver Patio & Seat Wall', category: 'Pavers', href: '/pavers/patios/', location: 'Knoxville', alt: 'Paver patio with built-in seat wall in Knoxville, TN' },
  { title: 'Block Retaining Wall', category: 'Retaining Walls', href: '/retaining-walls/', location: 'Maryville', alt: 'Segmental block retaining wall on a sloped lot in Maryville, TN' },
  { title: 'Fire Pit & Patio', category: 'Fire & Outdoor Living', href: '/hardscapes/fire-pits/', location: 'Knoxville', alt: 'Custom stone fire pit built into a paver patio in Knoxville, TN' },
  { title: 'Paver Driveway', category: 'Pavers', href: '/pavers/driveways/', location: 'Farragut', alt: 'Interlocking paver driveway in Farragut, TN' },
  { title: 'Stone Steps & Walkway', category: 'Retaining Walls', href: '/hardscapes/walkways/', location: 'Knoxville', alt: 'Natural stone steps and walkway on a hillside in Knoxville, TN' },
  { title: 'Pool Deck', category: 'Stamped', href: '/concrete/pool-decks/', location: 'Farragut', alt: 'Stamped, slip-resistant concrete pool deck in Farragut, TN' },
];
