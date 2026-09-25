import { Project, ServiceItem, NicheItem, ProcessStep, Testimonial } from '../types';

export const HERO_HEADLINE_OPTIONS = [
  {
    main: 'Where Structure',
    accent: 'Meets Motion.',
    sub: 'Orlyn Media merges technical precision in web engineering with cinematic video storytelling for high-growth global enterprises.'
  },
  {
    main: 'Somewhere Between',
    accent: 'Light & Logic.',
    sub: 'Full-stack digital architecture meets director-grade visual media to scale e-commerce, real estate, and healthcare leaders.'
  },
  {
    main: 'Engineered for Scale.',
    accent: 'Crafted for Emotion.',
    sub: 'One unified hybrid agency delivering interactive web platforms and high-retention video production across international markets.'
  }
];

export const TRUSTED_CLIENTS = [
  { name: 'Lumin Real Estate', city: 'Miami & Zurich', sector: 'Ultra-Luxury Brokerage', logoText: 'LUMIN' },
  { name: 'Solis Commerce', city: 'New York', sector: 'DTC Lifestyle Retail', logoText: 'SOLIS' },
  { name: 'Apex Dental Partners', city: 'London & Berlin', sector: 'Surgical & Aesthetics', logoText: 'APEX DENTAL' },
  { name: 'Novus Wealth', city: 'Singapore', sector: 'Private Asset Group', logoText: 'NOVUS' },
  { name: 'Aethel MedSpa', city: 'Los Angeles', sector: 'Cosmetic Healthcare', logoText: 'AETHEL' },
  { name: 'Kinetik Performance', city: 'Tokyo & Oslo', sector: 'Technical Apparel', logoText: 'KINETIK' }
];

export const HERO_STATS = [
  {
    value: '140+',
    label: 'Projects Delivered',
    growth: '+34% YoY',
    sub: 'Across 12 global markets'
  },
  {
    value: '98.4%',
    label: 'Client Retention',
    growth: '4.9★ Clutch',
    sub: 'Continuous engagement'
  },
  {
    value: '14d',
    label: 'Avg. Turnaround',
    growth: 'Sprint Model',
    sub: 'Zero agency bloat'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-engineering',
    title: 'Web Design & Development',
    tagline: 'Precision digital architecture that converts with mathematical certainty.',
    description: 'We construct high-performance digital flagships, bespoke web applications, and immersive 3D e-commerce portals. Built on modern stacks with 99+ Lighthouse speed scores and clean micro-interactions.',
    iconName: 'Code2',
    badge: 'Structure & Logic',
    disciplines: ['Next.js / React 19', 'Interactive 3D / WebGL', 'Headless Shopify / Commerce', 'Custom Patient & Client Portals'],
    capabilities: [
      'Bespoke UX/UI Design Systems',
      'Full-Stack Cloud Development',
      'Ultra-Low Latency Edge Architecture',
      'Conversion Rate Optimization (CRO)',
      'Algorithmic SEO & Internationalization'
    ],
    deliverables: [
      'Design token library & Figma architecture',
      'Production code with automated CI/CD',
      'Interactive 3D asset integration',
      'Enterprise CMS & CRM sync'
    ],
    highlightMetric: '+44%',
    highlightLabel: 'Average customer conversion lift post-launch'
  },
  {
    id: 'video-production',
    title: 'Video Editing & Production',
    tagline: 'Cinematic visual gravity engineered to stop the scroll and captivate.',
    description: 'From 4K luxury architectural walk-throughs to viral high-retention commercial campaigns and clinical trust documentaries. We combine director-grade color grading with surgical audio mastering and 3D VFX.',
    iconName: 'Film',
    badge: 'Light & Motion',
    disciplines: ['Commercial Brand Films', 'High-Retention Short Form', '4K Architectural Real Estate', 'Healthcare Trust Documentaries'],
    capabilities: [
      'DaVinci Resolve ACES Color Grading',
      'Bespoke Motion Graphics & 3D CGI',
      'Multi-Format Social Cutdowns (9:16 / 16:9)',
      'Spatial & Foley Sound Design',
      'Scripting & Creative Art Direction'
    ],
    deliverables: [
      'Master 4K ProRes deliverables',
      'Optimized web video streaming assets',
      'Social ad campaign cutdowns & hooks',
      'Custom kinetic typography packages'
    ],
    highlightMetric: '3.8x',
    highlightLabel: 'Average audience watch-time vs. industry benchmark'
  }
];

export const NICHES_DATA: NicheItem[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Brands',
    subTitle: 'DTC & High-Ticket International Retail',
    description: 'We replace flat product pages with tactile 3D product viewports, headless checkouts, and high-velocity commercial video ad creative that turns paid traffic into lifetime brand advocates.',
    iconName: 'ShoppingBag',
    metrics: '+42% ROAS',
    metricDescription: 'Average lift in blended return on ad spend within 90 days',
    featuredDeliverables: [
      'Headless 3D interactive storefronts',
      'Direct-response TikTok & Meta video hooks',
      'Instant sub-second mobile checkout flows',
      'Omnichannel email & post-purchase loops'
    ],
    caseHighlight: 'Scaled Solis direct-to-consumer revenue by $3.4M across US and EU storefronts.'
  },
  {
    id: 'real-estate',
    title: 'Luxury Real Estate',
    subTitle: 'Prime Brokerages & Flagship Developments',
    description: 'High-net-worth buyers purchase an emotion. We produce Hollywood-grade 4K drone cinematography and bespoke architectural listing platforms that pre-qualify international buyers before their first flight.',
    iconName: 'Building2',
    metrics: '$180M+',
    metricDescription: 'Total real estate transaction volume powered by our media',
    featuredDeliverables: [
      'Architectural cinema tours & FPV drone footage',
      'Interactive 3D floor plan explorer portals',
      'Private investor pitch decks & teaser trailers',
      'Multi-currency global buyer inquiry funnels'
    ],
    caseHighlight: 'Propelled 100% pre-sale sellout for Biscayne Sky Tower within 4 months.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Dental',
    subTitle: 'Aesthetic Surgeons, Cosmetic Clinics & DSOs',
    description: 'Medical decisions require immense clinical credibility. We craft reassuring patient transformation documentaries and frictionless digital consultation booking portals compliant with privacy standards.',
    iconName: 'Activity',
    metrics: '2.4x',
    metricDescription: 'Increase in qualified high-ticket cosmetic consultations',
    featuredDeliverables: [
      'High-definition patient transformation stories',
      'HIPAA / GDPR compliant online intake engines',
      'Interactive smile makeover preview modules',
      'Surgeon authority interviews & educational shorts'
    ],
    caseHighlight: 'Secured 320+ private veneer and implant cases for Apex Dental London.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Align',
    duration: 'Week 1',
    description: 'We dissect your market position, competitive voids, and customer psychology. Both web engineers and creative directors sit in the room together.',
    activities: [
      'Business model & unit economics audit',
      'Cross-discipline creative brief alignment',
      'Technical stack architecture specification',
      'Visual moodboards & pacing benchmarks'
    ],
    output: 'Unified Creative & Technical Blueprint'
  },
  {
    step: '02',
    title: 'Design & Storyboard',
    duration: 'Week 2',
    description: 'Translating strategic insight into high-fidelity Figma components, interactive prototypes, and precise scene-by-scene video shot-lists.',
    activities: [
      'Responsive design systems & token library',
      'Cinematic scriptwriting & audio mockups',
      '3D asset concepting & lighting studies',
      'Frictionless user flow wireframing'
    ],
    output: 'Interactive Prototype & Production Storyboard'
  },
  {
    step: '03',
    title: 'Build & Produce',
    duration: 'Week 3-4',
    description: 'Full-stack engineering sprint occurs parallel to video post-production. Zero handoff delay—our developers optimize video assets directly into code.',
    activities: [
      'Component-level clean TypeScript development',
      'DaVinci Resolve color grading & sound foley',
      'Lighthouse 99+ speed optimization',
      'Motion graphics & kinetic typography'
    ],
    output: 'Staging Deployment & Master 4K Video Cuts'
  },
  {
    step: '04',
    title: 'Launch & Compound',
    duration: 'Week 5 & Beyond',
    description: 'Seamless DNS switch, edge deployment, and multi-channel video distribution launch with active telemetry and conversion tracking.',
    activities: [
      'Zero-downtime production deployment',
      'Social asset distribution kit delivery',
      'Hotjar & conversion funnel analytics setup',
      'Bi-weekly optimization & iteration sprints'
    ],
    output: 'Live Global Flagship & High-Velocity Content'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Aurae Watchmaking Flagship',
    client: 'Aurae Horology',
    category: 'development',
    niche: 'E-commerce',
    summary: 'Headless 3D timepiece customizer and ultra-luxury shopping experience with sub-second page loads.',
    resultStat: '+68%',
    resultLabel: 'Average Order Value Increase',
    year: '2025',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Three.js / WebGL', 'Headless Shopify', 'Custom Shader'],
    challenge: 'Aurae needed to transition their bespoke Swiss timepieces to an international direct-to-consumer model without losing the tactile majesty of in-store boutique purchases.',
    solution: 'Engineered an interactive 3D WebGL watch visualizer allowing customers to inspect micro-machined complications in 60fps real-time, paired with a custom Shopify checkout backend.',
    deliverables: [
      '3D procedural metal & sapphire glass WebGL shaders',
      'Mobile-first responsive purchasing architecture',
      'Dynamic currency conversion across 18 countries',
      'Automated serial number certificate generator'
    ],
    techStack: ['Next.js 15', 'Three.js', 'Tailwind CSS', 'Shopify Storefront API', 'Vercel Edge'],
    metrics: [
      { label: 'Conversion Rate', value: '4.8%', change: '+1.9%' },
      { label: 'Time on Product Page', value: '4m 12s', change: '+180%' },
      { label: 'Lighthouse Performance', value: '99/100', change: '+32 pts' }
    ],
    testimonial: {
      quote: 'Orlyn delivered what two prior agencies declared technically impossible on the web. Our international pre-orders shattered all historical records.',
      author: 'Julian Vane',
      role: 'Head of Digital, Aurae Horology'
    }
  },
  {
    id: 'proj-2',
    title: 'The Edge Penthouse Cinema Campaign',
    client: 'Lumin Real Estate Group',
    category: 'video',
    niche: 'Real Estate',
    summary: 'Cinematic 4K architectural film and multi-channel teaser suite for an iconic $28M Miami waterfront residence.',
    resultStat: '$28M',
    resultLabel: 'Sold at Record Price per Sq Ft',
    year: '2025',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['4K Cinema', 'ACES Color Grading', 'FPV Drone', 'Sound Design'],
    challenge: 'Reaching ultra-high-net-worth international buyers who could not tour the property physically before the competitive bidding window closed.',
    solution: 'Shot at dawn and golden hour using RED V-Raptor and custom indoor micro-FPV drones to create an emotional narrative contrasting raw ocean horizons with bespoke Italian stone interiors.',
    deliverables: [
      '3-minute Director’s Cut master film (4K ProRes)',
      '12 tailored vertical Reels for Instagram & Private Client WhatsApp',
      'Orchestral audio score composed specifically to pacing',
      'Print-grade architectural still captures'
    ],
    techStack: ['RED 8K Cinema', 'DaVinci Resolve Studio', 'Pro Tools Ultimate', 'DJI Inspire 3'],
    metrics: [
      { label: 'Total Qualified Inquiries', value: '84 HNWIs', change: 'Record High' },
      { label: 'Average Video Completion', value: '89.2%', change: '+41%' },
      { label: 'Contract Execution', value: '23 Days', change: '-60% Market Avg' }
    ],
    testimonial: {
      quote: 'The buyer placed their non-contingent deposit from Zurich after viewing the film. The video alone paid for our entire annual marketing budget.',
      author: 'Elena Rostova',
      role: 'Managing Partner, Lumin Group'
    }
  },
  {
    id: 'proj-3',
    title: 'Apex Dental Implant & Smile Portal',
    client: 'Apex Specialty Clinics',
    category: 'design',
    niche: 'Healthcare & Dental',
    summary: 'Empathetic digital brand system and patient onboarding experience designed to dismantle clinical anxiety.',
    resultStat: '3.2x',
    resultLabel: 'Increase in High-Value Consultations',
    year: '2025',
    thumbnailUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    tags: ['Design System', 'Figma Tokens', 'Interactive Smile Quiz', 'UX Research'],
    challenge: 'Patients seeking high-ticket cosmetic full-mouth rehabilitation felt overwhelmed by technical clinical jargon and sterile dental marketing.',
    solution: 'Crafted a warm, calm, museum-grade visual design identity featuring warm ambient lighting, before/after interactive sliders, and transparent pricing estimators.',
    deliverables: [
      'Comprehensive 120-component Figma design system',
      'Interactive cosmetic outcome preview widget',
      'WCAG AAA accessible color contrast verification',
      'Clinical staff photography direction guide'
    ],
    techStack: ['Figma Enterprise', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Stripe Medical'],
    metrics: [
      { label: 'Appointment Booking Rate', value: '14.2%', change: '+8.6%' },
      { label: 'Inquiry Drop-off Rate', value: '8.1%', change: '-64%' },
      { label: 'Patient Trust Score', value: '4.98 / 5', change: '+22%' }
    ],
    testimonial: {
      quote: 'Patients walk in already feeling like they know our doctors. Orlyn captured the human warmth of our surgery perfectly.',
      author: 'Dr. Julian Thorne',
      role: 'Lead Prosthodontist, Apex Dental'
    }
  },
  {
    id: 'proj-4',
    title: 'Vela Botanical Oral Care Campaign',
    client: 'Vela Wellness London',
    category: 'video',
    niche: 'Healthcare & Dental',
    summary: 'Macro visual campaign merging clean cosmetic dentistry aesthetics with luxury skincare sensory pacing.',
    resultStat: '1.8M+',
    resultLabel: 'Organic Video Views in 30 Days',
    year: '2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    tags: ['Commercial Directing', 'Macro Cinematography', 'Social First', 'Color Grading'],
    challenge: 'Differentiating an organic hydroxyapatite dental formulation from generic supermarket toothpaste brands.',
    solution: 'Designed ultra-slow motion macro water-droplet and mineral powder textures paired with minimalist typography and ASMR audio sound design.',
    deliverables: [
      '60-second Brand Commercial Film',
      '8 TikTok / Reels hook variations with verified A/B testing',
      'Custom kinetic subtitles in brand cyan and magenta',
      'High-resolution retail display billboard masters'
    ],
    techStack: ['ARRI Alexa Mini LF', 'Laowa 24mm Probe Lens', 'DaVinci Resolve', 'Ableton Live'],
    metrics: [
      { label: 'Organic Viral Reach', value: '1.82M', change: 'Top 1% Niche' },
      { label: 'Click-Through Rate (CTR)', value: '5.4%', change: '+3.1%' },
      { label: 'Retail Distribution', value: '48 Stores', change: 'Harrods & Selfridges' }
    ],
    testimonial: {
      quote: 'Orlyn created visual poetry out of oral health. Our retail partners took one look at the campaign and agreed to stock us nationwide.',
      author: 'Chloe Dupont',
      role: 'Co-Founder, Vela Wellness'
    }
  },
  {
    id: 'proj-5',
    title: 'Novus Global Asset Management Portal',
    client: 'Novus Capital Partners',
    category: 'development',
    niche: 'Real Estate',
    summary: 'Ultra-secure institutional portal tracking $420M in commercial real estate syndication assets.',
    resultStat: '$420M',
    resultLabel: 'Assets Monitored in Real Time',
    year: '2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    tags: ['React 19', 'D3 Financial Visuals', 'Role-Based Auth', 'Financial API'],
    challenge: 'Institutional investors required live yield calculations, capital call transparency, and high-frequency document encryption in one sleek web interface.',
    solution: 'Built a dark-mode, high-density dashboard inspired by modern Bloomberg terminals with reactive D3 charts and sub-10ms response times.',
    deliverables: [
      'Interactive yield curve and dividend calculator',
      'Bank-grade encrypted investor vault',
      'Automated tax statement generation engine',
      'Mobile-optimized biometric login portal'
    ],
    techStack: ['TypeScript', 'React 19', 'Tailwind CSS', 'D3.js', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Investor Login Frequency', value: '4.2x / wk', change: '+210%' },
      { label: 'Support Ticket Reduction', value: '-78%', change: 'Self-Service' },
      { label: 'SOC2 Compliance', value: '100% Passed', change: 'Zero Flaws' }
    ],
    testimonial: {
      quote: 'Our LPs constantly compliment the elegance of the portal. It sets us miles ahead of traditional real estate private equity firms.',
      author: 'David Tan',
      role: 'Chief Investment Officer, Novus'
    }
  },
  {
    id: 'proj-6',
    title: 'Kinetik Athletic High-Impact Showcase',
    client: 'Kinetik Sportswear',
    category: 'design',
    niche: 'E-commerce',
    summary: 'Brutalist, high-contrast digital lookbook and conversion flow for technical marathon apparel.',
    resultStat: '+92%',
    resultLabel: 'Mobile Checkout Velocity',
    year: '2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    tags: ['Art Direction', 'Motion Prototype', 'Mobile UX', 'Micro-Interactions'],
    challenge: 'Fast-paced running athletes were abandoning checkout due to clunky size guides and slow image loading on cellular connections.',
    solution: 'Designed an aerodynamic, keyboard-and-thumb friendly shopping system with instant size recommendation sliders and haptic feedback cues.',
    deliverables: [
      'Complete e-commerce visual architecture',
      'Dynamic size predictor micro-app',
      'Custom SVG icon set & typography styling',
      'Comprehensive developer design spec'
    ],
    techStack: ['Figma', 'React', 'Tailwind', 'Motion', 'Shopify Hydrogen'],
    metrics: [
      { label: 'Mobile Drop-off', value: '11.4%', change: '-48%' },
      { label: 'Average Order Value', value: '$184', change: '+24%' },
      { label: 'Page Load Speed', value: '0.68s', change: 'Top 0.1%' }
    ],
    testimonial: {
      quote: 'Orlyn understood the athletic mindset. The UI feels like wearing a race-day carbon fiber shoe: light, explosive, and purposeful.',
      author: 'Soren Lindqvist',
      role: 'Creative Director, Kinetik'
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Orlyn Media merged our high-ticket e-commerce storefront with breathtaking product visuals in a single coordinated sprint. Our conversion rate surged 48% within 60 days of launch.',
    author: 'Marcus Vance',
    role: 'Chief Marketing Officer',
    company: 'Solis Direct Global',
    niche: 'E-commerce',
    impactMetric: '+48%',
    impactLabel: 'Conversion Rate Lift',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    quote: 'In ultra-luxury real estate, standard video tours feel cheap. Orlyn delivered Hollywood-grade cinema combined with an interactive investor portal that sold our $28M penthouse to an international buyer sight-unseen.',
    author: 'Elena Rostova',
    role: 'Managing Partner',
    company: 'Lumin Real Estate (Miami & Zurich)',
    niche: 'Real Estate',
    impactMetric: '$28M',
    impactLabel: 'Transaction Facilitated',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    quote: 'Cosmetic dentistry requires deep clinical trust. Orlyn’s patient journey documentary and interactive smile preview platform doubled our high-ticket surgical consultations in London within one quarter.',
    author: 'Dr. Julian Thorne',
    role: 'Founder & Medical Director',
    company: 'Apex Dental Specialists',
    niche: 'Healthcare & Dental',
    impactMetric: '2.4x',
    impactLabel: 'Cosmetic Patient Inflow',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];
