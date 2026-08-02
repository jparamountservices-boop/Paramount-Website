/**
 * Featured project write-ups (mini case studies). Each one pulls its photos
 * automatically from src/assets/projects/ by matching filenames that contain
 * `photoMatch`, so adding photos named for the project wires them in.
 */
export interface FeaturedProject {
  title: string;
  location: string;
  /** Service page this project links to. */
  href: string;
  /** Filenames containing this string are shown as the project's photos. */
  photoMatch: string;
  intro: string[];
  specs: { label: string; value: string }[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Paver Patio, Walkway & Steps',
    location: 'West Knoxville (near Lovell Rd)',
    href: '/pavers/patios/',
    photoMatch: 'west-knoxville-paver',
    intro: [
      'A full backyard transformation off Lovell Road in West Knoxville. We built a Techo-Bloc Eva paver patio in Champlain Gray, framed with a crisp dark-charcoal Unilock Holland Stone border, then tied it into a matching paver walkway and natural-stone steps so the whole space flows as one.',
      'Like every project, the part you don’t see is what makes it last: a deep compacted base and a full drainage system — including a linear channel drain along the raised planter wall — so water leaves the patio instead of pooling on our East Tennessee clay.',
    ],
    specs: [
      { label: 'Paver', value: 'Techo-Bloc Eva — Champlain Gray' },
      { label: 'Border', value: 'Unilock Holland Stone — Dark Charcoal' },
      { label: 'Steps', value: 'Natural stone' },
      { label: 'Drainage', value: 'Full system with linear channel drain' },
    ],
  },
];
