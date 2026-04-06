
export const globalData = {
  navigation: {
    siteName: 'Juan Reyes',
    ctaText: 'Hire Me',
    ctaRoute: '/contact',
    items: [
      { id: 1, href: '/', label: 'Home' },
      { id: 2, href: '/about', label: 'About' },
      { id: 3, href: '/skills', label: 'Skills' },
      { id: 4, href: '/experience', label: 'Experience' },
      { id: 5, href: '/works', label: 'Projects' },
      { id: 6, href: '/contact', label: 'Contact' },
    ]
  },
  footer: {
    brandName: 'JUAN MANUEL',
    brandHighlight: 'REYES FELIZ.',
    copyright: '© 2026 Juan Manuel Reyes Feliz.',
    socialLinks: [
      { id: 1, name: 'LinkedIn', url: 'https://linkedin.com/in/juanmreyesf' },
      { id: 2, name: 'GitHub', url: 'https://github.com/j-reyes132' },
      { id: 3, name: 'Email', url: 'mailto:juanreyes1321@outlook.com' },
    ]
  }
};


export const homeData = {
  hero: {
    title: 'Building',
    subtitle: 'Scalable APIs & Microservices.',
    description: 'Senior Backend Engineer & Team Lead specializing in high-performance distributed systems with Node.js, NestJS, and Laravel.',
    badge: 'Available for projects',
    imageUrl: '/1746723554284.jpeg',
    ctaText: 'View Projects',
    ctaLink: '/works',
  },
  about: {
    name: 'JUAN MANUEL REYES FELIZ',
    title: 'Senior Backend Engineer',
    description: 'I am a Senior Backend Engineer and Team Lead with strong experience designing and building scalable backend systems, high-performance APIs, and distributed applications.',
    fullDescription: 'Based in Santo Domingo, I specialize in modern backend architectures using Node.js, NestJS, and Laravel. I bridge the gap between complex business requirements and robust, maintainable technical solutions.',
  },
  skills: [
    { id: 1, name: 'Node.js', icon: '/icons/nodejs.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
    { id: 2, name: 'NestJS', icon: '/icons/nestjs.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
    { id: 3, name: 'Laravel', icon: '/icons/laravel.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
    { id: 4, name: 'TypeScript', icon: '/icons/typescript.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
    { id: 5, name: 'SQL Server', icon: '/icons/sqlserver.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
    { id: 6, name: 'Docker', icon: '/icons/docker.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
    { id: 7, name: 'Python', icon: '/icons/python.png', iconClass: 'text-4xl text-orange-600 group-hover:text-white transition-colors' },
   ],
  projects: [
    {
      id: 1,
      title: 'Enterprise Microservices',
      description: 'Architected and implemented a high-availability microservices ecosystem for government infrastructure. Focused on data integrity, security, and sub-second response times.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClG2EyXBa_raEujeXBGq1D55Q8IPpbp0tfYn6sjRiE6Y0qWaGHojmJ-Uf6e2q37sujHB7C5TCspUFZ0c9mVO4-GLIsxJlzWWq5_A3M4On6BOCnSFr_kdBpG5eMbu3k_cMAa-QAfxjyw6A6tU_qg9MvXn0m4StuxY8ALKkpMP5DWDwj-aN_dTvbsebyz2xEFv4dsuUTyqRtxB_QSr8lI_mrZLEIYAedsXLYeNH44SXWpcGu0smcpBkicxyl2xpeCsFlMWtzscKOfvg6',
      technologies: ['NestJS', 'Laravel', 'Docker', 'Kubernetes'],
      links: [
       
      ]
    },
    {
      id: 2,
      title: 'API Gateway Engine',
      description: 'Developed a custom API gateway using Laravel and PHP to manage authentication, rate limiting, and request routing across multiple legacy and modern systems.',
      imageUrl: '/swaggercapture.png',
      technologies: ['Laravel', 'PHP', 'Redis', 'JWT', 'MySQL', 'Swagger'],
      links: [
        { label: 'Project live', url: 'https://becas.gob.do' },
      ]
    }
  ],
  experience: [
    {
      id: 1,
      title: 'Backend Team Lead',
      company: 'OGTIC',
      period: '2024 — PRESENT',
      description: 'Leading backend development teams to build and maintain the foundational digital infrastructure for national-scale government services.'
    },
    {
      id: 2,
      title: 'Backend Developer | Systems Analyst',
      company: 'OGTIC',
      period: 'JAN 2022 — NOV 2024',
      description: 'Focused on the development of high-impact RESTful APIs and robust system analysis for critical national platforms.'
    }
  ]
};


export const aboutData = {
  hero: {
    badge: 'Senior Backend Engineer',
    title: 'Juan Manuel',
    lastName: 'Reyes Feliz',
    description: 'Specialized in Node.js, NestJS, and Laravel. I focus on crafting scalable APIs and robust microservices architectures that power seamless digital experiences.',
    location: 'Based in Santo Domingo, Working Globally.',
    imageUrl: '/about_photo.jpg',
  },
  education: [
    { id: 1, number: '01', title: 'UNIBE', subtitle: 'Bachelor of Engineering in ICT (In Progress)', description: '2023 - Present. Pursuing advanced knowledge in Information and Communication Technologies.' },
    { id: 2, number: '02', title: 'ITLA', subtitle: 'Software Development Technology Degree', description: 'Completed in October 2020. Specialized in modern software engineering principles and practices.' },
  ],
  philosophy: [
    { id: 1, title: 'Scalability First', description: 'I build systems that don\'t just work for today, but scale for tomorrow. Architecture is about anticipating growth while maintaining performance.', icon: '/icons/hub.png', variant: 'default' },
    { id: 2, title: 'Code Precision', description: 'Clean, maintainable, and efficient code is non-negotiable. I believe in radical simplicity in the backend to ensure stability in the frontend.', icon: '/icons/web_development.png', variant: 'highlight' },
    { id: 3, title: 'Resilient APIs', description: 'Designing interfaces that are robust, secure, and intuitive for other developers to consume. The API is the bridge of the digital world.', icon: '/icons/security.png', variant: 'light' },
  ],
  personal: [
    { id: 1, imageUrl: '/cars.jpeg', label: 'working with cars' },
    { id: 2, imageUrl: '/gaming.jpeg', label: 'Gaming' },
    { id: 3, imageUrl: '/tourism.jpeg', label: 'Tourism' },
    { id: 4, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL4kXeB7CVnaBk9CduyPxefFNJLWrflkR_3ejtyuCBVHm69PqVbZD3aHwX4ERxvln0Uo0BGeDGRw9HoCEr2AKL-p04wpHjabAfJBx_b56Ha9Hi5fWIZdbAoAHC039F7Nq72PzM5-lQ6QVJeX3f9-SGrn57HAedDkergNJV7rI2a6ZX7bNjgWK2JQKu1zMUM8ONZiJ6CQcArjTeBzJFciVPIkr63NHrIDtKZICvYI623ATnJXl_dX2WZRTDnfr6zWHXNRRTNkEe8cuU', label: 'Studying' },
  ],
  cta: {
    title: 'Ready to build your next',
    highlightText: 'Digital Architecture?',
    primaryButtonText: 'Let\'s Connect',
    primaryButtonLink: '/contact',
    secondaryButtonText: 'Download CV',
  }
};

export const skillsData = {
  hero: {
    title: 'Technical',
    subtitle: 'Precision & Creative Flow.',
    description: 'My toolkit is a blend of backend architecture, performance-oriented engineering, and scalable systems design. I build robust digital foundations that feel effortless.',
    quote: '"Simplicity is the ultimate sophistication, achieved through relentless technical refinement."',
    quoteAuthor: 'Focusing on high-performance architecture & clean system design.',
  },
programmingLanguages: [
    { id: 1, name: 'JavaScript', icon: 'javascript', iconClass: 'text-orange-600' },
    { id: 2, name: 'TypeScript', icon: 'code', iconClass: 'text-orange-600' },
    { id: 3, name: 'PHP', icon: 'php', iconClass: 'text-orange-600' },
    { id: 4, name: 'Python', icon: 'terminal', iconClass: 'text-orange-600' },
    { id: 5, name: 'Go', icon: 'google', iconClass: 'text-orange-600' },
  ],

coreCompetencies: [
    { 
      id: 1,
      name: 'Backend System Design',
      icon: 'architecture',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Designing scalable and maintainable backend architectures'
    },
    { 
      id: 2,
      name: 'API Development',
      icon: 'api',
      iconClass: 'text-orange-600 text-2xl',
      description: 'RESTful and GraphQL API design and implementation'
    },
    { 
      id: 3,
      name: 'Performance Optimization',
      icon: 'bolt',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Improving system speed and efficiency'
    },
    { 
      id: 4,
      name: 'Agile Development',
      icon: 'groups',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Scrum and Kanban methodologies'
    },
    { 
      id: 5,
      name: 'Debugging',
      icon: 'bug_report',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Advanced troubleshooting and problem-solving'
    },
    { 
      id: 6,
      name: 'Team Leadership',
      icon: 'leaderboard',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Leading and mentoring engineering teams'
    },
    { 
      id: 7,
      name: 'Code Review',
      icon: 'rate_review',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Maintaining code quality standards'
    },
    { 
      id: 8,
      name: 'Technical Documentation',
      icon: 'description',
      iconClass: 'text-orange-600 text-2xl',
      description: 'Creating clear and comprehensive documentation'
    },
  ],



  backendDevops: [
    { id: 1, name: 'Node.js / NestJS', icon: 'terminal', iconClass: 'text-orange-600' },
    { id: 2, name: 'Laravel', icon: 'code_blocks', iconClass: 'text-orange-600' },
    { id: 3, name: 'Docker', icon: 'dock', iconClass: 'text-orange-600' },
    { id: 4, name: 'CI/CD', icon: 'settings_suggest', iconClass: 'text-orange-600' },
    { id: 5, name: 'GitHub Actions', icon: 'code', iconClass: 'text-orange-600' },
    { id: 6, name: 'AWS', icon: 'cloud', iconClass: 'text-orange-600' },
  ],

  databases: [
    { id: 1, name: 'SQL Server', icon: 'database', iconClass: 'text-orange-600' },
    { id: 2, name: 'MySQL', icon: 'database', iconClass: 'text-orange-600' },
    { id: 3, name: 'PostgreSQL', icon: 'database', iconClass: 'text-orange-600' },
    { id: 4, name: 'Redis', icon: 'storage', iconClass: 'text-orange-600' },
    { id: 5, name: 'MongoDB', icon: 'database', iconClass: 'text-orange-600' },
  ],

  engineering: [
    { id: 1, name: 'OOP', icon: 'data_object', iconClass: 'text-orange-600' },
    { id: 2, name: 'Design Patterns', icon: 'architecture', iconClass: 'text-orange-600' },
    { id: 3, name: 'Clean Code', icon: 'code', iconClass: 'text-orange-600' },
    { id: 4, name: 'SOLID Principles', icon: 'verified', iconClass: 'text-orange-600' },
    { id: 5, name: 'DDD', icon: 'layers', iconClass: 'text-orange-600' },
    { id: 6, name: 'TDD', icon: 'check_circle', iconClass: 'text-orange-600' },
  ],
};

// lib/data.ts
export const skillsPageData = {
  hero: {
    title: "My",
    subtitle: "Technical Stack & Skills",
    description:
      "A fullstack developer passionate about building robust, scalable, and well-designed systems. From frontend to backend, from database to deployment.",
    quote:
      "Clean code is not just functional — it's a work of art that others can read, maintain, and admire.",
  },

  programming: {
    icon: "code",
    title: "Languages & Frameworks",
    description:
      "Versatile polyglot with deep expertise in modern web languages and systems programming.",
    items: [
      "Laravel", "NestJS", "Next.js", "JavaScript", "TypeScript", "Python", "Go", "PHP", "X++", 
      , "C#", "SQL", "Bash", "Next.js",
      "React", "Node.js", "FastAPI", "Django",
    ],
  },

  coreCompetencies: {
    icon: "verified",
    title: "Core Competencies",
    description:
      "Strategic technical focus areas for building high-scale, production-grade applications.",
    items: [
      "Backend System Design",
      "Fullstack Development",
      "API Development",
      "Performance Optimization",
      "Agile Development",
      "Debugging",
      "Web Security",
      "Code Review",
      "Systems Architecture",
    ],
  },

  engineering: {
    icon: "engineering",
    title: "Engineering",
    items: [
      "OOP",
      "Design Patterns",
      "Clean Architecture",
      "Domain-Driven Design",
      "SOLID Principles",
      "Event-Driven Systems",
    ],
  },

  databases: {
    icon: "storage",
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL / SQL Server",
      "MongoDB",
      "Redis",
      "Oracle",
      "Query Optimization",
    ],
  },

  backendDevops: {
    icon: "dns",
    title: "Backend & DevOps",
    description:
      "Architecting robust server-side logic and automated deployment pipelines.",
    items: [
      "Node.js / NestJS",
      "Laravel",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "FastAPI",
      "Kubernetes",
      "Nginx",
    ],
  },

  ecosystem: {
    title: "Core Ecosystem",
    items: [
      { name: "REST APIs & Microservices", icon: "hub" },
      { name: "Swagger Documentation", icon: "description" },
      { name: "GitHub & Jira Workflow", icon: "settings" },
      { name: "VS Code / Atom", icon: "edit_note" },
      { name: "Figma", icon: "design_services" },
    ],
  },

  quote: {
    text: "The best code is the code you don't have to write. The second best is the code anyone can understand.",
    author: "— Engineering Principle",
  },
};

export const experienceData = {
  header: {
    badge: 'Professional Path',
    title: 'Engineering',
    highlight: 'Reliability.',
    description: 'A chronological journey through backend architecture, high-scale systems, and technical leadership in the public and private sectors.',
  },
  roles: [
    {
      id: 1,
      title: 'Backend Team Lead',
      company: 'OGTIC',
      period: '2024 — PRESENT',
      logoUrl: '/ogtic.png',
      description: 'Leading backend development teams to build and maintain the foundational digital infrastructure for national-scale government services.',
      achievements: [
        'Designing and implementing scalable APIs and microservices using NestJS and Laravel architectures.',
        'Directing architectural design sessions and establishing rigorous clean code practices across multiple project streams.',
        'Mentoring technical teams and managing cross-functional delivery to ensure high system availability and security.'
      ],
      technologies: ["Power BI", "Database Migration", 'NestJS', 'Laravel', 'Architecture', 'Leadership']
    },
    {
      id: 2,
      title: 'Backend Developer | Systems Analyst',
      company: 'OGTIC',
      period: 'JAN 2022 — NOV 2024',
      logoUrl: '/ogtic.png',
      description: 'Focused on the development of high-impact RESTful APIs and robust system analysis for critical national platforms.',
      achievements: [
        'Architected and deployed scalable backend solutions that powered government digital transformation initiatives.',
        'Collaborated within Agile workflows to deliver iterative improvements to complex public service portals.'
      ],
      technologies: ["Power BI",'REST APIs', 'Systems Analysis', 'Agile']
    },
    {
      id: 3,
      title: 'Senior Microsoft Dynamics Developer',
      company: 'Sigma Petroleum',
      period: 'JAN 2021 — JAN 2022',
      logoUrl: '/sigma.png',
      description: 'Specializing in enterprise resource planning (ERP) solutions and internal system integrations for large-scale operations.',
      achievements: [
        'Developed and customized enterprise applications using Microsoft Dynamics AX and 365 environments.',
        'Implemented critical POS integrations and optimized SQL Server database performance for real-time transactions.'
      ],
      technologies: ["Power BI", "Dynamics AX", 'X++', 'SQL Server', 'ERP']
    },
    {
      id: 4,
      title: 'Development Consultant',
      company: 'Sitcorp S.R.L',
      period: 'MAY 2020 — JAN 2021',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFbiZxVkiVuYIZaGwvg8egFFHuFZN56ZAT3ShTiI8YddouVF62CTEoUeFgTOAO9Aj46uvbSFu44UXlCzn7PwsbFqB2gmgwvd0qM-hVVpUAB34KvqD751QRdVesszBvrlJx9q2gqugwPIxrEaEA6yT2418sw7F19BqJ2twQ9h_wJBniuCNAdtELuw6WozSIZnTbS1i0wf7WEgDrJZUeYnA1Nf4yGa71Ioe_wrzY81l1r5ApvrbYAjUjGqF4frye1ZmSW7qV-tk2hHa-',
      description: 'Providing custom Dynamics ERP/CRM consultancy and engineering services for retail sector clients seeking operational efficiency.',
      achievements: [
        'Delivered bespoke ERP solutions tailored to retail management and inventory tracking.',
        'Architected workflow automation tools that significantly reduced manual processing time for core business operations.'
      ],
      technologies: ["Power BI", "Dynamics AX", "Dynamics 365", "Dynamics CRM", 'Automation', 'Consultancy']
    }
  ],
  cta: {
    title: 'Want the full history?',
    description: 'I\'m always open to discussing my professional journey or how my backend expertise can help your organization scale.',
    primaryButtonText: 'Download CV',
    secondaryButtonText: 'View LinkedIn',
  }
};


export const architectureData = {
  header: {
    badge: 'Juan Manuel Reyes Feliz',
    title: 'Architecture &',
    highlight: 'Technical Logic.',
    description: 'A deep dive into the orchestrated synergy between Next.js frontend reactivity and Laravel\'s robust backend architecture.',
  },
  overview: {
    title: 'The Synergy Stack',
    description: 'Utilizing a headless approach where Next.js handles the presentation layer while Laravel serves as a JSON API powerhouse, ensuring scalability and peak performance.',
    frontendTech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backendTech: ['Laravel 11', 'PHP 8.3', 'MySQL / Redis', 'Sanctum'],
  },
  frontend: {
    title: 'Frontend: The App Router Engine',
    features: [
      { icon: 'layers', title: 'Atomic Component Design', description: 'Modular components organized by complexity, ensuring reusability across the entire application while maintaining a strict separation of concerns.' },
      { icon: 'bolt', title: 'Server-Side Excellence', description: 'Leveraging React Server Components for initial load speed, while hydration happens only where interactivity is strictly required.' },
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUtsi8WHR2IEWopffCSnNnqPFQ5ge0UGir3dOgCJARc4RAP7ZjNezXYPKV4dnF6rbUycZyizcusQh5TMjt_ZRIjzToWBOsltmLQZsA_zk0VFJeXrh-WL7K1PBvkEgxNv45m2tJDmOvIR4UAS5EdOAeGszffAD-TZTPF3sB4lWpaIuaJztdbSGsfpzaEYQnoNTEosaLQ0xMV4qlAc0flJSvf9_-ynbZr5Wnj07NbBLrBhIAs78FyeD74YabmWvnqaLDtVY_AnTwpEmo',
    imageCaption: 'Dynamic App Directory & Custom Hooks orchestration.',
  },
  backend: {
    title: 'Backend',
    highlight: 'Laravel JSON API',
    features: [
      { icon: 'api', title: 'API Logic', description: 'Dedicated Http Controllers for resource management, utilizing Laravel Resources for consistent JSON response formatting.' },
      { icon: 'shield_person', title: 'Security First', description: 'Sanctum-based SPA authentication with token-based authorization and strict CORS policies for maximum data protection.' },
      { icon: 'database', title: 'Eloquent ORM', description: 'Sophisticated data relationship mapping with eager loading to prevent N+1 queries and ensure efficient data fetching.' },
    ],
  },
  fileStructure: {
    frontend: [
      { name: 'app/', type: 'folder' },
      { name: 'dashboard/', type: 'folder' },
      { name: 'layout.tsx', type: 'file' },
      { name: 'components/', type: 'folder' },
      { name: 'ui/', type: 'folder' },
      { name: 'forms/', type: 'folder' },
      { name: 'hooks/', type: 'folder' },
      { name: 'lib/', type: 'folder' },
      { name: 'types/', type: 'folder' },
    ],
    backend: [
      { name: 'app/', type: 'folder' },
      { name: 'Http/', type: 'folder' },
      { name: 'Models/', type: 'folder' },
      { name: 'database/', type: 'folder' },
      { name: 'migrations/', type: 'folder' },
      { name: 'seeders/', type: 'folder' },
      { name: 'routes/', type: 'folder' },
      { name: 'api.php', type: 'file' },
      { name: 'tests/', type: 'folder' },
    ],
  },
  cta: {
    title: 'Inquisitive about the specifics?',
    description: 'View the full implementation details or explore the open-source repository for this architectural blueprint.',
    primaryButtonText: 'Explore Repository',
    secondaryButtonText: 'Download Tech Specs',
  }
};

export const projectsData = {
  header: {
    badge: 'Portfolio',
    title: 'Selected',
    highlight: 'Works',
    description: 'A curated collection of backend architectures, scalable APIs, and microservices I\'ve engineered for enterprise and government systems.',
  },
  projects: [
   {
     id: 1,
     title: 'Beca Tu Futuro',
     category: 'Backend Architecture & API Development',
     description: 'Designed and developed the core backend architecture and APIs for a national scholarship platform, including data migration from legacy systems.',
     fullDescription: 'Beca Tu Futuro is a government platform designed to manage scholarship applications at a national scale. I was responsible for designing the backend architecture, developing the core APIs, and leading the migration of data from legacy systems into a modern, scalable infrastructure. The system handles high volumes of concurrent users and ensures reliable processing of applications, validations, and workflows.',
     imageUrl: '/projects/becas.png',
     technologies: ['PHP', 'Laravel','Power BI', 'MySQL', 'Docker'],
     features: [
       'Core backend architecture design',
       'High-performance REST API development',
       'Legacy system data migration',
       'Validation and workflow processing engine',
       'Scalable architecture for high user demand'
     ],
     links: [
       { label: 'Live Platform', url: 'https://becas.gob.do' }
     ],
     year: '2024',
     client: 'Government (OGTIC)'
   },
   {
     id: 2,
     title: 'Gob.do',
     category: 'API Development & System Integration',
     description: 'Developed and maintained backend services and APIs for the central government services platform, integrating multiple institutions and systems.',
     fullDescription: 'Gob.do is the central platform for accessing government services in the Dominican Republic. I contributed to the development and maintenance of backend services and APIs that integrate multiple government institutions. The platform handles thousands of daily transactions and requires high availability, performance, and secure data exchange between systems.',
     imageUrl: '/projects/gob.do.png',
     technologies: ['PHP', 'Laravel', 'MySQL', 'Docker', 'REST APIs'],
     features: [
       'Integration with multiple government systems',
       'Secure API communication and data exchange',
       'High-availability backend services',
       'Scalable architecture for public service access',
       'Performance optimization for high traffic'
     ],
     links: [
       { label: 'Live Platform', url: 'https://www.gob.do' }
     ],
     year: '2022',
     client: 'Government (OGTIC)'
   },
    {
      id: 3,
      title: '311.gob.do',
      category: 'Backend Systems & API Development',
      description: 'Developed the core backend and APIs for the national citizen service platform, enabling request management and inter-institutional workflows.',
      fullDescription: '311.gob.do is a national platform that allows citizens to submit complaints, claims, and service requests to government institutions. I was responsible for developing the core backend system, including APIs, business logic, and workflow management. The system ensures reliable processing of citizen requests and efficient communication between institutions.',
      imageUrl: '/projects/311.gob.do.png',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Docker'],
      features: [
        'Core backend system development',
        'Workflow and request management system',
        'API design for inter-institution communication',
        'Scalable handling of citizen requests',
        'Robust validation and business logic layer'
      ],
      links: [
        { label: 'Live Platform', url: 'https://311.gob.do' }
      ],
      year: '2025',
      client: 'Government (OGTIC)'
    },
    {
      id: 4,
      title: 'Legacy System Modernization',
      category: 'Migration & Integration',
      description: 'Led the migration of a monolithic legacy system to a modular microservices architecture, improving scalability and reducing deployment time.',
      fullDescription: 'A complex migration project that transformed a 15-year-old monolithic application into modern microservices. Implemented strangler pattern to gradually replace components. Achieved zero downtime during migration and reduced deployment time from days to minutes.',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      technologies: ['Laravel', 'NestJS', 'PostgreSQL', 'Docker', 'AWS ECS'],
      features: [
        'Strangler pattern implementation',
        'Database migration with zero downtime',
        'Gradual feature rollout',
        'Comprehensive integration testing',
        'Team training and knowledge transfer'
      ],
      links: [
        { label: 'Case Study', url: '#' },
        { label: 'GitHub', url: '#' }
      ],
      year: '2023-2024',
      client: 'Enterprise Corporation'
    },
  ]
};

export const contactData = {
  hero: {
    badge: 'Available for Projects',
    title: 'Let\'s build something',
    highlight: 'exceptional together.',
    description: 'I\'m currently seeking new opportunities to collaborate on high-impact digital products. Whether you have a specific project in mind or just want to say hello, my inbox is always open.',
  },
  contactInfo: [
        { 
      id: 1, 
      icon: '/icons/mail.png', 
      iconClass: 'w-14 h-14 rounded-2xl bg-[#e5e2e1] flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white',
      title: 'Email Me', 
      subtitle: 'I typically respond within 24 hours.', 
      value: 'juanreyes1321@outlook.com', 
      link: 'mailto:juanreyes1321@outlook.com' 
    },
    { 
      id: 2, 
      icon: '/icons/cell.png', 
      iconClass: 'w-14 h-14 rounded-2xl bg-[#e5e2e1] flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white',
      title: 'Phone', 
      subtitle: 'Available for calls and messages.', 
      value: '+1 (809) 396-5015', 
      link: 'tel:+18093965015' 
    },    { 
      id: 3, 
      icon: '/icons/location.png',  // ← Nombre del icono
      iconClass: 'w-14 h-14 rounded-2xl bg-[#e5e2e1] flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white',
      title: 'Location', 
      subtitle: 'Currently based in Santo Domingo, DR.', 
      value: 'Open to remote and hybrid roles.', 
      link: null 
    },
  ],
  socialLinks: [
    { id: 1, name: 'LinkedIn', url: 'https://linkedin.com/in/juanmreyesf' },
    { id: 2, name: 'GitHub', url: 'https://github.com/juanmreyesf' },
    { id: 3, name: 'Email', url: 'mailto:juanreyes1321@outlook.com' },
  ],
  location: {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-FtjDLzMeXCG2OSVyso0Jz6x49PqgTKWoJRk_i4Yb_YvDBO4bCYnZiMGriRlh64Zz3USxQ2QSV8TTX-sREK4DN8xDk5ExDDquPG2yxw7MjXyqhDaUQHPA9iKqTjxnavEOc2mzr_pUPvPNgA0Ax8MimxngJFgp-96mIsVJNGloRsXyJ3OJMQK3q9d_RLOqbPaiQzsK6BkUWXaxatUKAsUnlJwVpy5XX9nXhOgdlNV-h1fWU6vI9IoUdlkWU_ngDxfa6mvQXpGi_zUH',
    city: 'SANTO DOMINGO',
    country: 'DR',
  }
};