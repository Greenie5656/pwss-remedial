import { CONTACT, LINKS, COMPANY, SUBURBS } from './constants';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Remedial Waterproofing Perth — PWSS',
  description: COMPANY.description,
  url: LINKS.domain,
  telephone: '+611300271425',
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Perth',
    addressRegion: 'WA',
    postalCode: '6964',
    addressCountry: 'AU',
  },
  areaServed: SUBURBS.map((suburb) => ({
    '@type': 'City',
    name: suburb,
  })),
  parentOrganization: {
    '@type': 'Organization',
    name: COMPANY.legalName,
    url: LINKS.mainSite,
  },
  serviceType: [
    'Remedial Waterproofing',
    'Leak Rectification',
    'Waterproofing Repairs',
    'Concrete Remediation',
    'Balcony Waterproofing',
    'Commercial Waterproofing',
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  sameAs: [LINKS.facebook, LINKS.linkedin],
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Remedial Waterproofing',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Remedial Waterproofing Perth — PWSS',
    url: LINKS.domain,
  },
  areaServed: {
    '@type': 'State',
    name: 'Western Australia',
  },
  description:
    'Specialist leak investigation, failed membrane replacement, balcony and roof waterproofing repairs across Perth.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Remedial Waterproofing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Leak Investigation',
          description: 'Systematic investigation to trace water ingress back to its source.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Failed Membrane Replacement',
          description: 'Full removal and replacement of waterproofing membranes that have cracked, delaminated, or reached end of life.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Balcony Waterproofing Repairs',
          description: 'Targeted repairs to leaking balconies including membrane replacement, drainage correction, and joint sealing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Leak Rectification',
          description: 'Investigation and repair of roof waterproofing failures including failed flashings and membrane breakdowns.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Ingress Repairs',
          description: 'Comprehensive repairs where water is entering through walls, windows, expansion joints, or below-ground structures.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Crack Injection',
          description: 'High-pressure injection of polyurethane or epoxy resins into concrete cracks to seal active leaks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Concrete Remediation',
          description: 'Repair of spalling, carbonation damage, and water-affected concrete.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Expansion Joint Repairs',
          description: 'Replacement and re-sealing of failed expansion joints in car parks, podiums, and building facades.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Protective Coating Systems',
          description: 'Application of high-performance protective coatings to prevent water penetration and extend asset life.',
        },
      },
    ],
  },
};