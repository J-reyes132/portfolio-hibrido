// Tipos globales
export interface NavItem {
  id: number;
  href: string;
  label: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
}

// Home
export interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
  };
  about: {
    name: string;
    title: string;
    description: string;
    fullDescription: string;
  };
  skills: {
    id: number;
    name: string;
    icon: string;
  }[];
  projects: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    links: { label: string; url: string }[];
  }[];
  experience: {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}

// About
export interface AboutData {
  hero: {
    badge: string;
    title: string;
    lastName: string;
    description: string;
    location: string;
    imageUrl: string;
  };
  education: {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
  philosophy: {
    id: number;
    title: string;
    description: string;
    icon: string;
    variant: 'default' | 'highlight' | 'light';
  }[];
  personal: {
    id: number;
    imageUrl: string;
    label: string;
    order: number;
  }[];
  cta: {
    title: string;
    highlightText: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
}

// Skills
export interface SkillsData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };
  programmingLanguages: string[];
  coreCompetencies: string[];
  backendDevops: string[];
  databases: string[];
  engineering: string[];
}

// Experience
export interface ExperienceData {
  header: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  roles: {
    id: number;
    title: string;
    company: string;
    period: string;
    logoUrl: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }[];
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
}

// Architecture
export interface ArchitectureData {
  header: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  overview: {
    title: string;
    description: string;
    frontendTech: string[];
    backendTech: string[];
  };
  frontend: {
    title: string;
    features: { icon: string; title: string; description: string }[];
    imageUrl: string;
    imageCaption: string;
  };
  backend: {
    title: string;
    highlight: string;
    features: { icon: string; title: string; description: string }[];
  };
  fileStructure: {
    frontend: any[];
    backend: any[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
}

export interface FileStructureNode {
  name: string;
  type: string;
  children?: FileStructureNode[];
}

// Contact
export interface ContactData {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  contactInfo: {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    value: string;
    link?: string;
  }[];
  socialLinks: SocialLink[];
  location: {
    imageUrl: string;
    city: string;
    country: string;
  };
}

// Global
export interface GlobalData {
  navigation: {
    siteName: string;
    items: NavItem[];
    ctaText: string;
  };
  footer: {
    brandName: string;
    brandHighlight: string;
    socialLinks: SocialLink[];
    copyright: string;
  };
}