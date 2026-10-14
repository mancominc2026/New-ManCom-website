export const site = {
  name: 'ManCom Inc.',
  legalName: 'Management Communications, Inc.',
  tagline: 'Managed IT, networks, and business phones for the Phoenix metro.',
  description:
    'ManCom Inc. is a veteran-owned Phoenix IT services company providing managed IT support, network engineering, VoIP business phone systems, cyber security, and computer repair across the Phoenix metro — available 24x7x365.',
  phone: '623-236-3500',
  phoneHref: 'tel:+16232363500',
  fax: '623-217-2413',
  email: 'info@mancominc.com',
  address: {
    street: '8601 N Black Canyon Hwy, Suite 117',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85021',
  },
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=8601+N+Black+Canyon+Hwy+Suite+117+Phoenix+AZ+85021',
  hours: 'Support available 24 hours a day, 7 days a week, 365 days a year',
  founded: 2012,
  serviceArea: [
    'Phoenix',
    'Peoria',
    'Mesa',
    'Gilbert',
    'Glendale',
    'Avondale',
    'Goodyear',
    'Surprise',
  ],
  certifications: ['CCIE', 'CCNP', 'CCDP', 'VTSP', 'VSP', 'MCP', 'MCSE'],
  partners: ['Cisco', 'HP', 'Dell', 'Microsoft'],
  social: {
    linkedin: 'https://www.linkedin.com/company/mancom-inc',
    facebook: 'https://www.facebook.com/ManComInc/',
    x: 'https://x.com/mancominc',
  },
  nav: [
    { label: 'Services', href: '/services/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
