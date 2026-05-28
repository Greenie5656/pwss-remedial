// ─── Brand Colours ───────────────────────────────────────────
export const COLORS = {
  antiFlashWhite: '#efefef',
  gunmetal: '#172d38',
  mint: '#1cca98',
  aero: '#5ac2df',
  darkCyan: '#3c887e',
} as const;

// ─── Contact Info ────────────────────────────────────────────
export const CONTACT = {
  phone: '1300 271 425',
  phoneHref: 'tel:1300271425',
  email: 'info@perthwss.com.au',
  address: 'Perth, WA 6964, Australia',
  hours: 'Mon–Fri 7:00–17:00 AWST',
} as const;

// ─── Links ───────────────────────────────────────────────────
export const LINKS = {
  mainSite: 'https://www.perthwss.com.au/',
  facebook: 'https://www.facebook.com/PerthSiliconeSolutions/',
  linkedin: 'https://www.linkedin.com/company/perth-silicone-solutions/',
  domain: 'https://perthwaterproofingremedial.com',
} as const;

// ─── Company Info ────────────────────────────────────────────
export const COMPANY = {
  name: 'Remedial Waterproofing Perth',
  legalName: 'Perth Waterproofing & Silicone Solutions',
  shortName: 'PWSS',
  tagline: 'A Reputation for Quality and Detail',
  description:
    'Remedial Waterproofing Perth is a division of Perth Waterproofing & Silicone Solutions, specialising in waterproofing failure investigations and long-term repair solutions across the Perth metro area.',
} as const;

// ─── Navigation ──────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#case-studies' },
  { label: 'About', href: '#why-choose-us' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

// ─── Services ────────────────────────────────────────────────
export const SERVICES = [
  { name: 'Leak Investigation', priority: 'primary' },
  { name: 'Failed Membrane Replacement', priority: 'primary' },
  { name: 'Balcony Waterproofing Repairs', priority: 'primary' },
  { name: 'Roof Leak Rectification', priority: 'primary' },
  { name: 'Water Ingress Repairs', priority: 'primary' },
  { name: 'Crack Injection', priority: 'secondary' },
  { name: 'Concrete Remediation', priority: 'secondary' },
  { name: 'Internal/External Waterproofing Repairs', priority: 'primary' },
  { name: 'Expansion Joint Repairs', priority: 'secondary' },
  { name: 'Protective Coating Systems', priority: 'secondary' },
] as const;

// ─── Target Suburbs ──────────────────────────────────────────
export const SUBURBS = [
  'Perth',
  'Joondalup',
  'Osborne Park',
  'Subiaco',
  'Canning Vale',
  'Fremantle',
  'Rockingham',
  'Mandurah',
  'Midland',
] as const;

// ─── Metadata Defaults ───────────────────────────────────────
export const META = {
  title: 'Remedial Waterproofing Perth | PWSS Remedial Division',
  description:
    'Expert remedial waterproofing in Perth. Leak investigation, membrane replacement, balcony repairs & more. Backed by Perth Waterproofing & Silicone Solutions. Call 1300 271 425.',
  ogImage: '/images/og-image.jpg',
} as const;