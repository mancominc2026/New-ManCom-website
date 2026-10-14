export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: string;
  summary: string;
  intro: string;
  features: { title: string; text: string }[];
  outcomes: string[];
  faq?: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'managed-it-support',
    title: 'Managed IT Support',
    short: 'Help desk, monitoring, and maintenance so your team stays productive.',
    icon: 'headset',
    summary:
      'Proactive, flat-rate IT support for small and mid-sized businesses. We keep your computers, servers, and users running — and we pick up the phone when something breaks.',
    intro:
      'Most businesses do not need a full-time IT department. They need someone who answers the phone, fixes the problem, and prevents it from happening again. ManCom provides remote monitoring, help desk support, and on-site service across the Phoenix metro, with a team that is available 24x7x365.',
    features: [
      { title: 'Help desk & on-site support', text: 'Phone, email, and remote support for your staff, with technicians dispatched on-site when hands-on work is needed.' },
      { title: 'Remote monitoring', text: 'Workstations and servers are monitored around the clock so we can catch failing drives, patch gaps, and outages before they cost you a workday.' },
      { title: 'Patching & maintenance', text: 'Scheduled Windows, firmware, and application updates keep systems secure and stable without interrupting your business.' },
      { title: 'Backup & business continuity', text: 'Backups that are tested, documented, and ready to restore — plus planning so an outage is an inconvenience, not a crisis.' },
      { title: 'Staff augmentation', text: 'Need an extra engineer for a project or a vacation gap? Our team can slot into yours for a week or a year.' },
      { title: 'Vendor management', text: 'We deal with your ISP, phone carrier, and software vendors so you don\'t have to sit on hold.' },
    ],
    outcomes: ['Fewer interruptions and faster fixes', 'Predictable monthly IT costs', 'One number to call for any technology problem'],
    faq: [
      { q: 'Do you support businesses outside Phoenix?', a: 'Our on-site service area covers Phoenix, Peoria, Mesa, Gilbert, Glendale, Avondale, Goodyear, and Surprise. Remote support is available anywhere.' },
      { q: 'Can you work alongside our existing IT person?', a: 'Yes. Many clients use ManCom as a co-managed partner — we handle monitoring, escalations, and projects while your in-house staff handles day-to-day requests.' },
    ],
  },
  {
    slug: 'network-engineering',
    title: 'Network Engineering & Management',
    short: 'Design, installation, upgrades, and 24/7 monitoring of your LAN and WAN.',
    icon: 'network',
    summary:
      'Cisco-certified engineers who design, build, and maintain business networks — from a single office switch stack to multi-site WANs with secure remote access.',
    intro:
      'We understand that over the years, your network infrastructure may become antiquated and possibly disorganized. ManCom will review, analyze, and provide critical information on your network. We offer quick and timely network engineering management including design, installation, upgrades, repairs, and maintenance services — and you can also get design, hosting, backup, and co-location services.',
    features: [
      { title: 'Network assessment', text: 'A clear-eyed review of your current infrastructure with a prioritized list of risks and recommendations.' },
      { title: 'Design & installation', text: 'Switching, routing, wireless, and firewalls designed for your building and your growth plans — installed and labeled properly.' },
      { title: 'Structured cabling', text: 'Clean, certified copper and fiber cabling for new buildouts, moves, and expansions.' },
      { title: 'Internet connectivity', text: 'We source, provision, and manage your internet circuits, including failover so one carrier outage doesn\'t stop your business.' },
      { title: 'Hosting, backup & co-location', text: 'Design, hosting, backup, and co-location services for workloads that should live outside your office.' },
      { title: '24x7x365 monitoring', text: 'Continuous monitoring of uptime, performance, and security events, with engineers on call every hour of the year.' },
    ],
    outcomes: ['Documented, standardized infrastructure', 'Reliable connectivity with failover', 'Networks ready for VoIP, cloud, and growth'],
    faq: [
      { q: 'What certifications does your team hold?', a: 'Our engineers hold CCIE, CCNP, CCDP, VTSP, VSP, MCP, and MCSE certifications and work with Cisco, HP, Dell, and Microsoft equipment and platforms.' },
    ],
  },
  {
    slug: 'voip-phone-systems',
    title: 'VoIP Business Phone Systems',
    short: 'Modern cloud and on-premise phone systems, plus support for legacy PBX.',
    icon: 'phone',
    summary:
      'Business telephone systems that work wherever your people do: desk phones, softphones, mobile apps, auto-attendants, and call queues — installed, configured, and supported by ManCom.',
    intro:
      'ManCom began as a communications company, and telephony is still a core strength. We install and support VoIP systems for businesses of every size, migrate aging PBX systems without losing your numbers, and handle the cabling and network changes that make voice quality reliable.',
    features: [
      { title: 'Cloud & on-premise VoIP', text: 'We help you choose between hosted and on-site systems based on your budget, bandwidth, and compliance needs.' },
      { title: 'Auto-attendant & call routing', text: 'Menus, ring groups, queues, voicemail-to-email, and after-hours rules configured the way your business actually operates.' },
      { title: 'Mobile & remote workers', text: 'Softphones and mobile apps so staff can use their business number from anywhere.' },
      { title: 'Legacy PBX support', text: 'Maintenance and repair for traditional PBX systems, and a planned migration path when you are ready.' },
      { title: 'Number porting & carriers', text: 'We manage porting and carrier relationships so the switch is seamless for your customers.' },
      { title: 'Network readiness', text: 'QoS, PoE switching, and bandwidth planning so calls stay crisp even when the office is busy.' },
    ],
    outcomes: ['Lower monthly phone bills', 'Professional caller experience', 'Phones that follow your team anywhere'],
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    short: 'Layered protection, 24/7 monitoring, and HIPAA-minded security reviews.',
    icon: 'shield',
    summary:
      'Security is more than a firewall. ManCom takes a broad view — from where your hardware comes from to how your staff logs in — and monitors your network around the clock.',
    intro:
      'ManCom takes the protection of your network seriously, and we staff an industry leader in the field of cyber security. Threats do not only come from outside hackers: where did your hardware come from? Supply-chain risk, weak passwords, unpatched systems, and untrained users are just as dangerous. We assess your environment, close the gaps, and keep watching.',
    features: [
      { title: 'Security assessment', text: 'A practical review of your firewalls, endpoints, identity, and policies with a prioritized remediation plan.' },
      { title: 'Firewall & endpoint protection', text: 'Managed next-generation firewalls, endpoint detection and response, and content filtering.' },
      { title: 'Multi-factor authentication', text: 'MFA rollout for email, VPN, and line-of-business applications — the single most effective control against account takeover.' },
      { title: 'HIPAA & compliance reviews', text: 'Security reviews for medical, legal, and financial practices that need to document safeguards.' },
      { title: 'Security awareness training', text: 'Short, regular training and phishing simulations that turn your staff into a line of defense.' },
      { title: '24x7x365 monitoring', text: 'Continuous monitoring and alerting so suspicious activity is caught at 2 a.m., not Monday morning.' },
    ],
    outcomes: ['Reduced risk of breach and downtime', 'Documented safeguards for audits and insurance', 'Staff who recognize and report threats'],
  },
  {
    slug: 'computer-repair',
    title: 'Computer & Server Repair',
    short: 'Fast diagnosis and repair of PCs, laptops, and servers — on-site or in our shop.',
    icon: 'wrench',
    summary:
      'From a laptop that won\'t boot to a server throwing disk errors, our technicians diagnose the problem, explain your options plainly, and fix it quickly.',
    intro:
      'Hardware fails. When it does, you need someone who can tell you honestly whether to repair or replace, recover your data, and get you back to work. ManCom repairs and maintains desktops, laptops, and servers for businesses throughout the Phoenix metro.',
    features: [
      { title: 'Diagnostics & repair', text: 'Hardware and software troubleshooting for Windows PCs, laptops, and servers.' },
      { title: 'Data recovery', text: 'Recovery from failing drives and accidental deletion, with honest expectations up front.' },
      { title: 'Upgrades', text: 'SSD, memory, and OS upgrades that extend the useful life of equipment you already own.' },
      { title: 'Virus & malware removal', text: 'Thorough cleanup and hardening so the same infection doesn\'t come back.' },
      { title: 'Procurement & setup', text: 'We source business-grade equipment from Dell, HP, and others, and deliver it configured and ready to use.' },
      { title: 'Preventive maintenance', text: 'Scheduled cleaning, updates, and health checks that prevent most emergency calls.' },
    ],
    outcomes: ['Less downtime for your staff', 'Honest repair-or-replace advice', 'Equipment that lasts longer'],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    short: 'Short- or long-term expertise for projects, planning, and gaps in your team.',
    icon: 'compass',
    summary:
      'Whether you need a technology roadmap, a project lead for an office move, or temporary coverage for your IT staff, ManCom can support you for as long as you need.',
    intro:
      'Not every need fits a monthly support plan. ManCom provides consulting for one-time projects and ongoing strategy: office relocations, cloud migrations, vendor selection, compliance preparation, and interim IT leadership. Whether you need long-term or short-term temp support, ManCom can support you.',
    features: [
      { title: 'Technology roadmaps', text: 'A plain-language plan for the next one to three years, with budgets your leadership can act on.' },
      { title: 'Office moves & buildouts', text: 'Cabling, network, phones, and workstation moves coordinated so you open on day one.' },
      { title: 'Cloud & Microsoft 365', text: 'Migration planning and execution for email, files, and line-of-business applications.' },
      { title: 'Interim & fractional IT', text: 'Temporary coverage or a part-time IT director for organizations that are between hires.' },
      { title: 'Vendor & contract review', text: 'Independent advice on carrier contracts, software renewals, and equipment quotes.' },
      { title: 'Government & public sector', text: 'Experience with public-sector procurement as a veteran-owned small business.' },
    ],
    outcomes: ['Decisions backed by experience, not sales pitches', 'Projects delivered on time', 'Flexible engagements that fit your budget'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
