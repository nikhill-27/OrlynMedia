export type ProjectCategory = 'all' | 'design' | 'development' | 'video';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'design' | 'development' | 'video';
  niche: 'E-commerce' | 'Real Estate' | 'Healthcare & Dental';
  summary: string;
  resultStat: string;
  resultLabel: string;
  year: string;
  thumbnailUrl: string;
  videoPreviewUrl?: string;
  tags: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  disciplines: string[];
  capabilities: string[];
  deliverables: string[];
  highlightMetric: string;
  highlightLabel: string;
  badge: string;
}

export interface NicheItem {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  iconName: string;
  metrics: string;
  metricDescription: string;
  featuredDeliverables: string[];
  caseHighlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  output: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  niche: 'E-commerce' | 'Real Estate' | 'Healthcare & Dental';
  impactMetric: string;
  impactLabel: string;
  avatarUrl: string;
}
