import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mancominc.com',
  integrations: [sitemap()],
  build: { format: 'directory' },
  // Preserve URLs from the original mancominc.com site.
  redirects: {
    '/about-our-it-support-services-company': '/about/',
    '/contact-it-support-services': '/contact/',
    '/contact-us-foo': '/contact/',
    '/it-support-services': '/services/',
    '/it-support-services/network-engineering-management': '/services/network-engineering/',
    '/network-management': '/services/network-engineering/',
    '/cyber-security': '/services/cyber-security/',
    '/consulting': '/services/it-consulting/',
  },
});
