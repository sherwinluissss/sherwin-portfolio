export const profile = {
  name: 'Sherwin Luis Morantte',
  role: 'Web Developer',
  tagline:
    'Web Developer building storefronts, brochure sites, and integrations for clients across Southeast Asia and Europe — with an eye for detail and a habit of shipping things that hold up.',
  bio: [
    "I'm a Full-Stack Web Developer from the Philippines with over eight years of professional experience. Throughout my career, I've worked with startups, agencies, and established businesses, building everything from business websites and e-commerce stores to membership platforms and custom web applications. My expertise includes custom WordPress theme and plugin development, REST API integrations, performance optimization, technical SEO, and turning Figma designs into pixel-perfect, responsive websites.",
    'I spend most of my time exploring new corners of web development and enjoy the problem-solving side of the work most — weighing a few approaches before settling on the one that fits. The goal is simple: keep getting better at the craft.',
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
