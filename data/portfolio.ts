import type {
  EditorFileMeta,
  ExplorerNode,
  ProjectCategory,
  ProjectItem,
  SectionId,
  SkillCategory,
  TimelineEntry,
} from "@/types/portfolio";

export const SITE_CONFIG = {
  windowTitle: "Rishabh — Portfolio",
  fullName: "Rishabh Kaushik",
  shortName: "Rishabh",
  role: "Frontend Developer | Full-Stack Enthusiast",
  email: "rishavkaushik70@gmail.com",
  location: "Arrah, Bihar, India",
  availability: "Available for Opportunities",
  availabilitySummary:
    "Open to frontend development opportunities, full-stack projects, and meaningful collaborations.",
  responseTime: "Usually within 24 hours",
  githubUrl: "https://github.com/rishavkaushik70",
  githubHandle: "github.com/rishavkaushik70",
  linkedinUrl: "https://www.linkedin.com/in/rishabh-kaushik-dev/",
  linkedinHandle: "linkedin.com/in/rishabh-kaushik-dev",
  resumePath: "/resume/Rishabh-Kaushik-Resume.pdf",
  resumeDownloadName: "Rishabh-Kaushik-Resume.pdf",
  profileImagePath: "/images/profile/profile.jpg",
} as const;

export const PORTFOLIO_FILES: Record<SectionId, EditorFileMeta> = {
  home: {
    id: "home",
    tabLabel: "home.tsx",
    fileName: "home.tsx",
    breadcrumbs: ["src", "pages", "home.tsx", "Hero"],
    language: "TypeScript React",
    cursorPos: "Ln 14, Col 28",
    modified: true,
    iconKind: "tsx",
    outline: ["developer", "Hero", "FeaturedProjects"],
  },
  about: {
    id: "about",
    tabLabel: "about-me.tsx",
    fileName: "about-me.tsx",
    breadcrumbs: ["src", "pages", "about-me.tsx", "AboutMe"],
    language: "TypeScript React",
    cursorPos: "Ln 22, Col 12",
    iconKind: "tsx",
    outline: ["AboutMe", "WhatIFocusOn", "DevelopmentPhilosophy", "Journey"],
  },
  experience: {
    id: "experience",
    tabLabel: "experience/index.tsx",
    fileName: "index.tsx",
    breadcrumbs: ["src", "experience", "index.tsx", "Timeline"],
    language: "TypeScript React",
    cursorPos: "Ln 18, Col 9",
    iconKind: "tsx",
    outline: ["ExperienceTimeline", "EducationTimeline"],
  },
  projects: {
    id: "projects",
    tabLabel: "projects.tsx",
    fileName: "projects.tsx",
    breadcrumbs: ["src", "pages", "projects.tsx", "SelectedWork"],
    language: "TypeScript React",
    cursorPos: "Ln 31, Col 16",
    iconKind: "tsx",
    outline: ["FilterBar", "ProjectCards", "ProjectGalleryViewer"],
  },
  skills: {
    id: "skills",
    tabLabel: "skills.tsx",
    fileName: "skills.tsx",
    breadcrumbs: ["src", "pages", "skills.tsx", "TechnicalStack"],
    language: "TypeScript React",
    cursorPos: "Ln 9, Col 19",
    iconKind: "tsx",
    outline: ["Frontend", "StateManagement", "Backend", "DatabaseORM", "Tools"],
  },
  resume: {
    id: "resume",
    tabLabel: "resume.tsx",
    fileName: "resume.tsx",
    breadcrumbs: ["src", "pages", "resume.tsx", "ResumePreview"],
    language: "TypeScript React",
    cursorPos: "Ln 1, Col 1",
    iconKind: "pdf",
    outline: ["HeaderActions", "Experience", "Education", "SkillsSummary"],
  },
  contact: {
    id: "contact",
    tabLabel: "contact.tsx",
    fileName: "contact.tsx",
    breadcrumbs: ["src", "pages", "contact.tsx", "Contact"],
    language: "TypeScript React",
    cursorPos: "Ln 42, Col 7",
    modified: true,
    iconKind: "tsx",
    outline: ["ContactForm", "TerminalDetails", "OpportunityTypes"],
  },
  styles: {
    id: "styles",
    tabLabel: "styles.css",
    fileName: "styles.css",
    breadcrumbs: ["src", "styles.css", ":root"],
    language: "CSS",
    cursorPos: "Ln 1, Col 1",
    iconKind: "css",
    outline: [":root", "ColorPalette", "Typography"],
  },
};

export const DEFAULT_OPEN_TABS: SectionId[] = [
  "home",
  "about",
  "projects",
  "skills",
  "resume",
  "contact",
];

export const EXPLORER_TREE: ExplorerNode[] = [
  {
    id: "folder-about-me",
    name: "about-me",
    kind: "folder",
    iconKind: "folder",
    children: [
      {
        id: "about-me-index",
        name: "index.tsx",
        kind: "file",
        iconKind: "tsx",
        sectionId: "about",
      },
    ],
  },
  {
    id: "folder-experience",
    name: "experience",
    kind: "folder",
    iconKind: "folder",
    children: [
      {
        id: "experience-index",
        name: "index.tsx",
        kind: "file",
        iconKind: "tsx",
        sectionId: "experience",
      },
    ],
  },
  {
    id: "folder-projects",
    name: "projects",
    kind: "folder",
    iconKind: "folder",
    children: [
      {
        id: "projects-index",
        name: "index.tsx",
        kind: "file",
        iconKind: "tsx",
        sectionId: "projects",
      },
    ],
  },
  {
    id: "folder-skills",
    name: "skills",
    kind: "folder",
    iconKind: "folder",
    children: [
      {
        id: "skills-index",
        name: "index.tsx",
        kind: "file",
        iconKind: "tsx",
        sectionId: "skills",
      },
    ],
  },
  {
    id: "folder-assets",
    name: "assets",
    kind: "folder",
    iconKind: "folder",
    children: [
      {
        id: "asset-profile",
        name: "profile.jpg",
        kind: "file",
        iconKind: "image",
        sectionId: "home",
        assetPath: "/images/profile/profile.jpg",
      },
      {
        id: "asset-savemymoney",
        name: "savemymoney-cover.png",
        kind: "file",
        iconKind: "image",
        sectionId: "projects",
        assetPath: "/images/projects/savemymoney/cover.png",
      },
      {
        id: "asset-cinestream",
        name: "cinestream-cover.png",
        kind: "file",
        iconKind: "image",
        sectionId: "projects",
        assetPath: "/images/projects/cinestream/cover.png",
      },
      {
        id: "asset-electronica",
        name: "electronica-cover.png",
        kind: "file",
        iconKind: "image",
        sectionId: "projects",
        assetPath: "/images/projects/electronica/cover.png",
      },
    ],
  },
  {
    id: "file-home",
    name: "home.tsx",
    kind: "file",
    iconKind: "tsx",
    sectionId: "home",
    modified: true,
  },
  {
    id: "file-about-me",
    name: "about-me.tsx",
    kind: "file",
    iconKind: "tsx",
    sectionId: "about",
  },
  {
    id: "file-projects",
    name: "projects.tsx",
    kind: "file",
    iconKind: "tsx",
    sectionId: "projects",
  },
  {
    id: "file-skills",
    name: "skills.tsx",
    kind: "file",
    iconKind: "tsx",
    sectionId: "skills",
  },
  {
    id: "file-resume",
    name: "resume.tsx",
    kind: "file",
    iconKind: "tsx",
    sectionId: "resume",
  },
  {
    id: "file-contact",
    name: "contact.tsx",
    kind: "file",
    iconKind: "tsx",
    sectionId: "contact",
    modified: true,
  },
  {
    id: "file-styles",
    name: "styles.css",
    kind: "file",
    iconKind: "css",
    sectionId: "styles",
  },
  {
    id: "file-resume-pdf",
    name: "resume.pdf",
    kind: "file",
    iconKind: "pdf",
    sectionId: "resume",
  },
];

export const RIGHT_NAV_ITEMS: {
  id: SectionId;
  label: string;
}[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "UI Engineering & Modern Web",
    accent: "blue",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    subtitle: "Predictable Client State",
    accent: "purple",
    items: ["Redux Toolkit"],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server-Side & API Design",
    accent: "green",
    items: ["Node.js", "NestJS", "REST APIs"],
  },
  {
    id: "database-orm",
    title: "Database & ORM",
    subtitle: "Relational Data & Type-Safe Queries",
    accent: "blue",
    items: ["PostgreSQL", "Neon", "Prisma"],
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Workflow, Version Control & Deployment",
    accent: "purple",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
  },
];

export const ABOUT_FOCUS_AREAS = [
  {
    title: "Clean Code & Component Architecture",
    description:
      "Designing modular, reusable TypeScript and React components with clear separation between data and presentation.",
  },
  {
    title: "Responsive UI & Performance",
    description:
      "Building interfaces that adapt cleanly across desktop, tablet, and mobile screens with semantic HTML and fast rendering.",
  },
  {
    title: "API Integration & Scalable Apps",
    description:
      "Connecting frontend workflows with structured REST APIs, validation, and type-safe database layers using Prisma and PostgreSQL.",
  },
] as const;

export const ABOUT_STRENGTHS = [
  "Clean code",
  "Responsive UI",
  "Component architecture",
  "API integration",
  "Performance",
  "Scalable application development",
  "Problem-solving",
] as const;

export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    id: "personal-projects",
    period: "June 2025 – Present",
    title: "Frontend & Full-Stack Project Development",
    organization: "Independent Projects (SaveMyMoney, CineStream, Electronica)",
    location: "Arrah, Bihar, India",
    highlights: [
      "Built responsive and scalable web applications using React, Next.js, TypeScript, and Tailwind CSS.",
      "Implemented REST APIs, Route Handlers, authentication workflows, and PostgreSQL / Prisma data models.",
      "Used Git and GitHub for version control and structured component-based UI architecture.",
    ],
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Git"],
  },
];

export const EDUCATION_TIMELINE: TimelineEntry[] = [
  {
    id: "bca",
    period: "Apr 2022 – Aug 2025",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Maharaja College, Arrah",
    highlights: [
      "Undergraduate degree focused on Computer Science, software fundamentals, and web application development.",
    ],
    tags: ["Computer Applications", "Software Foundations"],
  },
  {
    id: "senior-secondary",
    period: "2021 – 2022",
    title: "Senior Secondary (Science — PCM)",
    organization: "Bihar School Examination Board (BSEB)",
    highlights: [
      "Completed higher secondary education in Physics, Chemistry, and Mathematics.",
    ],
    tags: ["Physics", "Chemistry", "Mathematics"],
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Frontend",
  "Full Stack",
  "UI Architecture",
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "savemymoney",
    title: "SaveMyMoney",
    category: "Full Stack",
    role: "Full-Stack Developer",
    shortDescription:
      "AI-powered personal finance platform featuring transaction management, budgeting, financial reports, and interactive dashboard analytics.",
    thumbnail: "/images/projects/savemymoney/cover.png",
    thumbnailAlt: "SaveMyMoney dashboard overview and AI Quick Add interface",
    thumbnailWidth: 1891,
    thumbnailHeight: 861,
    images: [
      {
        src: "/images/projects/savemymoney/cover.png",
        alt: "SaveMyMoney Dashboard with setup progress and AI Quick Add input",
        caption: "Dashboard & AI Quick Add (English / Hinglish / Voice)",
        width: 1891,
        height: 861,
      },
      {
        src: "/images/projects/savemymoney/screenshot-01.png",
        alt: "SaveMyMoney Transactions table with search, category, type, and date filters",
        caption: "Transactions Ledger & Multi-Filter Search",
        width: 1917,
        height: 837,
      },
      {
        src: "/images/projects/savemymoney/screenshot-02.png",
        alt: "SaveMyMoney Goals workspace screen",
        caption: "Savings Goals Workspace",
        width: 1903,
        height: 861,
      },
      {
        src: "/images/projects/savemymoney/screenshot-03.png",
        alt: "SaveMyMoney Financial Reports summary cards for income, expenses, and net savings",
        caption: "Financial Reports & Cash Flow Overview",
        width: 1902,
        height: 857,
      },
      {
        src: "/images/projects/savemymoney/screenshot-04.png",
        alt: "SaveMyMoney Account Settings and Profile view",
        caption: "Account & Profile Settings",
        width: 1892,
        height: 852,
      },
      {
        src: "/images/projects/savemymoney/screenshot-05.png",
        alt: "SaveMyMoney Add Transaction modal form",
        caption: "Add Transaction Modal Form",
        width: 1906,
        height: 852,
      },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Gemini AI",
      "Razorpay",
    ],
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyNotes: [
      "Developed a full-stack personal finance platform featuring transaction management, budgeting, financial reports, and interactive dashboard analytics.",
      "Integrated Google Gemini AI to parse multiple financial transactions from natural-language input in English, Hindi, and Hinglish with an editable confirmation workflow.",
      "Implemented session-based authentication with Better Auth, Prisma ORM, and Neon PostgreSQL, plus Razorpay test-mode payments with webhook signature verification.",
    ],
  },
  {
    id: "cinestream",
    title: "CineStream",
    category: "Frontend",
    role: "Full-Stack / Frontend Developer",
    shortDescription:
      "Responsive movie and TV discovery platform built with Next.js App Router, server-side TMDB Route Handlers, and local persistence.",
    thumbnail: "/images/projects/cinestream/cover.png",
    thumbnailAlt: "CineStream featured movie hero carousel",
    thumbnailWidth: 1880,
    thumbnailHeight: 852,
    images: [
      {
        src: "/images/projects/cinestream/cover.png",
        alt: "CineStream featured hero showcase with trailer and details actions",
        caption: "Featured Discovery Carousel",
        width: 1880,
        height: 852,
      },
      {
        src: "/images/projects/cinestream/screenshot-01.png",
        alt: "CineStream Movie Catalog with genre filters and rating badges",
        caption: "Movie Catalog & Genre Filtering",
        width: 1892,
        height: 852,
      },
      {
        src: "/images/projects/cinestream/screenshot-02.png",
        alt: "CineStream multi-search interface for movies, TV shows, and actors",
        caption: "Multi-Search Discovery",
        width: 1892,
        height: 856,
      },
      {
        src: "/images/projects/cinestream/screenshot-03.png",
        alt: "CineStream Application Settings with Dark Cinema and Warm Linen themes",
        caption: "Appearance Settings & Local Storage Controls",
        width: 1891,
        height: 862,
      },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "TMDB API",
    ],
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyNotes: [
      "Developed a responsive movie and TV discovery platform using Next.js App Router, React Server Components, and TypeScript.",
      "Integrated TMDB APIs through server-side Route Handlers, keeping API credentials off the client while powering catalog browsing and search.",
      "Implemented hydration-safe Favorites, Watchlist, and Watch History persistence using React's useSyncExternalStore and LocalStorage along with theme switching.",
    ],
  },
  {
    id: "electronica",
    title: "Electronica",
    category: "UI Architecture",
    role: "Frontend Developer",
    shortDescription:
      "Responsive e-commerce web application built with reusable React components, Redux Toolkit state management, and Clerk authentication.",
    thumbnail: "/images/projects/electronica/cover.png",
    thumbnailAlt: "Electronica storefront hero slider featuring iPhone X",
    thumbnailWidth: 1901,
    thumbnailHeight: 875,
    images: [
      {
        src: "/images/projects/electronica/cover.png",
        alt: "Electronica storefront hero carousel",
        caption: "Storefront Hero Carousel",
        width: 1901,
        height: 875,
      },
      {
        src: "/images/projects/electronica/screenshot-01.png",
        alt: "Electronica product catalog with category, brand, and price range filters",
        caption: "Product Catalog & Sidebar Filters",
        width: 1893,
        height: 867,
      },
      {
        src: "/images/projects/electronica/screenshot-02.png",
        alt: "Electronica promotional banner section",
        caption: "Promotional Callout Section",
        width: 1890,
        height: 848,
      },
      {
        src: "/images/projects/electronica/screenshot-03.png",
        alt: "About Electronica mission and vision page",
        caption: "About Electronica Page",
        width: 1880,
        height: 862,
      },
      {
        src: "/images/projects/electronica/screenshot-04.png",
        alt: "Sign in to Electronica modal secured by Clerk",
        caption: "Clerk Authentication Sign-In Flow",
        width: 1885,
        height: 861,
      },
    ],
    techStack: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Clerk",
    ],
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyNotes: [
      "Developed a responsive e-commerce application with reusable React components and adaptive layouts across desktop, tablet, and mobile viewports.",
      "Implemented shopping cart and wishlist state management using Redux Toolkit and multi-page navigation with React Router.",
      "Integrated Clerk sign-in authentication and category, brand, and price-range product filtering.",
    ],
  },
];

export const DESIGN_TOKENS = [
  { token: "--bg-main", hex: "#07111B", usage: "Top bar, activity bar, terminal shell" },
  { token: "--bg-editor", hex: "#08131E", usage: "Central editor workspace" },
  { token: "--bg-sidebar", hex: "#091521", usage: "Explorer & right navigation sidebars" },
  { token: "--bg-panel", hex: "#0D1B28", usage: "Cards, dialogs & elevated surfaces" },
  { token: "--border-subtle", hex: "#243342", usage: "Window dividers & card borders" },
  { token: "--accent-primary", hex: "#1685F8", usage: "Active tabs, buttons & status bar" },
  { token: "--accent-secondary", hex: "#8B5CF6", usage: "Code accents & secondary highlights" },
  { token: "--text-primary", hex: "#E5EAF0", usage: "Primary headings & body copy" },
  { token: "--text-secondary", hex: "#9AA8B7", usage: "Muted metadata & labels" },
  { token: "--status-success", hex: "#4ADE80", usage: "Availability & terminal success" },
] as const;
