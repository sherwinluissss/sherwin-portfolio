export const profile = {
  name: 'Sherwin Luis Morantte',
  role: 'Senior Web Developer',
  tagline:
    'Building high-performance WordPress and Shopify websites, eCommerce experiences, and custom web solutions.',
  shortBio: "I’m a Web Developer with 8+ years of experience building and maintaining WordPress and Shopify websites, WooCommerce stores, custom integrations, and modern web applications for businesses and agencies worldwide.",
    bio: [
      "I’m a Web Developer with 8+ years of professional experience specializing in WordPress development, custom web solutions, and eCommerce.",
      "I build websites and applications that go beyond standard themes and page builders—from custom WordPress themes and plugins to WooCommerce functionality, third-party integrations, APIs, and performance optimization.",
      "My experience also extends into modern JavaScript development, React, Next.js, and headless architectures, allowing me to work across both traditional WordPress projects and modern web applications.",
      "I’m comfortable working independently or as part of a distributed team, collaborating with designers, developers, project managers, and clients to turn requirements into reliable, maintainable products.",
      "My approach is simple: understand the problem, choose the right technology, and build something that works well for both the user and the business."
  ],
  location: 'Tagum City, Davao del Norte, Philippines',
  locationShort: 'Tagum City, PH',
  timezone: 'Asia/Manila',
  timezoneLabel: 'GMT+8',
  experience: '8+ years',
  education: 'Ateneo de Davao University',
  educationFull: 'BS Information Technology, Ateneo de Davao University',
  email: 'sherwinluissss@gmail.com',
  phone: '+63 975 508 7035',
  phoneHref: '+639755087035',
  portrait: '/assets/img/hero.jpg',
  whatIDo: [
    {
      title: 'Custom WordPress Development',
      description: 'Custom themes, plugins, templates, Gutenberg/ACF components, custom post types, taxonomies, and functionality built around specific business requirements.',     
    },
    {
      title: 'WooCommerce & eCommerce',
      description: 'Custom WooCommerce functionality, product experiences, checkout improvements, integrations, and performance optimization for online stores.',
    },
    {
      title: 'Web Integrations',
      description: 'REST APIs, third-party services, forms, CRM integrations, payment services, analytics, and custom data-driven functionality.',
    },
    {
      title: 'Performance & Optimization',
      description: 'Improving Core Web Vitals, page speed, caching, images, database performance, and third-party scripts to create faster and more reliable websites.'
    },
    {
      title: 'Modern Web Development',
      description: 'React, Next.js, headless WordPress, and modern JavaScript development for web applications and custom solutions.'
    },
    {
      title: 'Maintenance & Problem Solving',
      description: 'Debugging complex WordPress issues, security problems, migrations, hosting issues, plugin conflicts, and ongoing website maintenance.'
    }
  ]
};

export type SkillLevel = 'Advanced' | 'Proficient' | 'Working knowledge';

export const skillGroups: { group: string; items: { name: string; level: SkillLevel }[] }[] = [
  {
    group: 'Core Web',
    items: [
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'JavaScript', level: 'Proficient' },
    ],
  },
  {
    group: 'Commerce & Integrations',
    items: [
      { name: 'PHP', level: 'Proficient' },
      { name: 'Shopify Liquid', level: 'Proficient' },
      { name: 'REST API', level: 'Proficient' },
    ],
  },
  {
    group: 'Visual Design',
    items: [
      { name: 'Figma', level: 'Working knowledge' },
      { name: 'Photoshop', level: 'Working knowledge' },
      { name: 'Illustrator', level: 'Working knowledge' },
      { name: 'Canva', level: 'Working knowledge' },
    ],
  },
];

export type Project = {
  name: string;
  tag: string;
  region?: string;
  tech?: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Farsons',
    tag: 'Eccommerce',
    region: 'Malta',
    tech: 'Shopify',
    image: '/assets/img/gallery-farsons.jpg',
  },
  {
    name: 'Niki Hudson',
    tag: 'Eccommerce',
    tech: 'Shopify',
    image: '/assets/img/niki-hudson.jpg',
  },
  {
    name: 'Ezee Fiber',
    tag: 'Corporate',
    region: 'Malta',
    tech: 'NextJS',
    image: '/assets/img/ezee-fiber.jpg',
  },
  {
    name: 'MBS Education',
    tag: 'Education',
    tech: 'Wordpress',
    image: '/assets/img/gallery-mbs-edu.jpg',
  },
  {
    name: 'Academy 147',
    tag: 'Education',
    tech: 'Wordpress',
    image: '/assets/img/gallery-academy147.jpg',
  },
  {
    name: 'PwC',
    tag: 'Corporate site',
    tech: 'Wordpress',
    image: '/assets/img/gallery-pwc.jpg',
  },
  {
    name: 'Malta Property Auctioneers',
    tag: 'Real estate',
    region: 'Malta',
    tech: 'Wordpress',
    image: '/assets/img/gallery-mpa.jpg',
  },
  {
    name: 'Visit Gozo',
    tag: 'Tourism',
    region: 'Malta',
    tech: 'Wordpress',
    image: '/assets/img/gallery-gozo.jpg',
  },
  {
    name: 'Phoenicia',
    tag: 'Hospitality',
    region: 'Malta',
    tech: 'WordPress',
    image: '/assets/img/gallery-phoenicia.jpg',
  }
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/sherwinluis' },
  { label: 'Instagram', href: 'https://www.instagram.com/sherwinluissss' },
  { label: 'GitHub', href: 'https://github.com/sherwinluissss' },
];
