/**
 * Structured-data (JSON-LD) builders. Everything pulls from company.ts so the
 * NAP, hours and socials stay consistent across the whole site.
 */
import { company } from '../data/company';

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
 * The core business node, reused sitewide and referenced by @id everywhere.
 * This is the ONLY node that should carry @id "…/#business". Reviews on
 * /reviews/ attach to this same @id instead of emitting a second business node.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': `${SITE}/#business`,
    name: company.name,
    description:
      'Paramount Concrete & Hardscapes designs and builds new concrete, pavers, retaining walls, patio covers, and outdoor kitchens for homeowners across Knoxville and East Tennessee.',
    url: SITE,
    telephone: company.phoneHref.replace('tel:', ''),
    email: company.email,
    image: `${SITE}/images/og-default.jpg`,
    logo: `${SITE}${company.logo}`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating.value,
      reviewCount: String(company.rating.count),
      bestRating: '5',
      worstRating: '1',
    },
    // Verified profiles (Instagram handle confirmed working on the live site).
    sameAs: [
      'https://www.facebook.com/paramountknox/',
      'https://www.instagram.com/parmounthomerenovations/',
      'https://www.google.com/maps?cid=17529004164000047395',
    ],
    // Merged from the prior business node, per the brief.
    openingHoursSpecification: company.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed,
  };
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
  serviceType?: string;
  areaServedList?: string[];
}) {
  const area = opts.areaServedList
    ? opts.areaServedList.map((c) => ({ '@type': 'City', name: `${c}, TN` }))
    : opts.areaServed
      ? { '@type': 'City', name: opts.areaServed }
      : areaServedCities;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    url: `${SITE}${opts.path}`,
    areaServed: area,
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

/** BlogPosting schema for blog posts. */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = `${SITE}${opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: opts.image ? `${SITE}${opts.image}` : `${SITE}/images/og-default.jpg`,
    author: { '@type': 'Organization', name: company.name, url: SITE },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: `${SITE}${company.logo}` },
    },
  };
}
