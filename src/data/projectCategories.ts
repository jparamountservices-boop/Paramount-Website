/**
 * Photo category system. Each entry maps a FOLDER under src/assets/projects/
 * to a display label, a filter group (for the gallery chips), and the service
 * page the photos link to.
 *
 * Drop your chosen photos into the matching folder — they appear on the site
 * automatically (optimized). See docs/deployment/photos.md.
 */
export interface ProjectCategory {
  /** Folder name under src/assets/projects/ */
  folder: string;
  /** Caption label */
  label: string;
  /** Gallery filter chip group */
  group: 'Concrete' | 'Pavers' | 'Hardscapes';
  /** Service page these photos link to */
  href: string;
}

export const projectCategories: ProjectCategory[] = [
  { folder: 'driveways', label: 'Concrete Driveway', group: 'Concrete', href: '/concrete/driveways/' },
  { folder: 'concrete-patios', label: 'Concrete Patio', group: 'Concrete', href: '/concrete/patio/' },
  { folder: 'stamped-concrete', label: 'Stamped Concrete', group: 'Concrete', href: '/concrete/decorative-and-stamped/' },
  { folder: 'pool-decks', label: 'Pool Deck', group: 'Concrete', href: '/concrete/pool-decks/' },
  { folder: 'pavers', label: 'Paver Patio', group: 'Pavers', href: '/pavers/patios/' },
  { folder: 'paver-driveways', label: 'Paver Driveway', group: 'Pavers', href: '/pavers/driveways/' },
  { folder: 'paver-walkways', label: 'Paver Walkway', group: 'Pavers', href: '/pavers/walkways/' },
  { folder: 'retaining-walls', label: 'Retaining Wall', group: 'Hardscapes', href: '/retaining-walls/' },
  { folder: 'walkways', label: 'Walkway & Steps', group: 'Hardscapes', href: '/hardscapes/walkways/' },
  { folder: 'fire-pits', label: 'Fire Pit', group: 'Hardscapes', href: '/hardscapes/fire-pits/' },
];

export const projectFolders = projectCategories.map((c) => c.folder);
export const filterGroups = [...new Set(projectCategories.map((c) => c.group))];

export function catByFolder(folder: string): ProjectCategory | undefined {
  return projectCategories.find((c) => c.folder === folder);
}

/**
 * Turn a filename into a readable caption/alt.
 * "farragut-stamped-patio-01.jpg" -> "Farragut Stamped Patio"
 * Strips extension, trailing numbers, and "before"/"after" markers.
 */
export function captionFromFilename(filename: string): string {
  const base = filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]?(before|after)$/i, '')
    .replace(/[-_]?\d+$/,'')
    .replace(/[-_]+/g, ' ')
    .trim();
  return base.replace(/\b\w/g, (m) => m.toUpperCase());
}
