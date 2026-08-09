/**
 * Structured-data (JSON-LD) builders. Everything pulls from company.ts so the
 * NAP, hours and socials stay consistent across the whole site.
 */
import { company, sameAs } from '../data/company';

const SITE = company.url;

/** Cities we serve, formatted for schema `areaServed` (schema.org City nodes). */
const AREA_CITIES = [
  'Knoxville', 'Farragut', 'West Knoxville', 'Maryville', 'Oak Ridge',
  'Sevierville', 'Lenoir City', 'Alcoa', 'Louisville', 'Clinton',
  'Seymour', 'Powell', 'Karns',
];
const areaServedCities = AREA_CITIES.map((c) => ({ '@type': 'City', name: `${c}, TN` }));
const areaServed = [
  ...areaServedCities,
  { '@type': 'AdministrativeArea', name: 'Knox County, TN' },
  { '@type': 'AdministrativeArea', name: 'Blount County, TN' },
];

/**
 * The core LocalBusiness / GeneralContractor node, reused via @id.
 * `includeRating` scopes aggregateRating to pages where reviews are shown
 * (per Google's guidance) — default off; the homepage passes it on.
 */
export function localBusinessSchema(opts: { includeRating?: boolean } = {}) {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE}/#business`,
    name: company.name,
    alternateName: company.legalName,
    description: company.description,
    url: SITE,
    telephone: company.phoneHref.replace('tel:', ''),
    email: company.email,
    image: `${SITE}/images/og-default.jpg`,
    logo: `${SITE}${company.logo}`,
    foundingDate: String(company.yearFounded),
    priceRange: company.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    areaServed,
    openingHoursSpecification: company.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs,
  };
  if (opts.includeRating) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: company.rating.value,
      reviewCount: company.rating.count,
    };
  }
  return node;
}

/** BreadcrumbList from an ordered array of {name, path}. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

/** Service schema tied to the business as provider. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: `${SITE}${opts.path}`,
    areaServed: opts.areaServed ? { '@type': 'City', name: opts.areaServed } : areaServedCities,
    provider: { '@id': `${SITE}/#business` },
  };
}

/** FAQPage schema from Q/A pairs. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Article schema for blog posts. */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: `${SITE}${opts.path}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: opts.image ? `${SITE}${opts.image}` : `${SITE}${company.logo}`,
    author: { '@type': 'Organization', name: company.name },
    publisher: { '@id': `${SITE}/#business` },
  };
}
