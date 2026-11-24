export type ProjectDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  year: string;
  services: string[];
  technologies: string[];
  website?: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  outcomes: string[];
  gallery: string[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "afs-desk",
    name: "AFS Desk",
    category: "CRM / SaaS Platform",
    tagline: "A smarter way to manage leads and customer relationships.",
    description:
      "A modern CRM platform designed to help businesses organize leads, manage customer communication, and streamline everyday workflows.",
    year: "2026",
    services: [
      "Web Application Development",
      "Mobile Application Development",
      "Backend Development",
      "UI/UX Implementation",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    website: "https://afsdesk.com/",
    heroImage: "/images/projects/afsdesk.jpg",
    overview:
      "AFS Desk brings lead management and customer communication into one organized workspace. The platform is designed around business teams, with role-based access and organization-level data management.",
    challenge:
      "Managing leads, follow-ups, team activity, and customer conversations across disconnected tools can make daily operations difficult. Businesses need a centralized workspace where teams can manage these activities efficiently.",
    solution:
      "We developed a CRM experience with lead management, follow-up scheduling, notifications, team roles, and organization-based access. The platform also includes a mobile application experience for users who need access while away from their desks.",
    features: [
      "Lead management and status tracking",
      "Follow-up scheduling and reminders",
      "Role-based team access",
      "Organization-level data management",
      "Notifications and activity tracking",
      "Mobile-friendly CRM experience",
    ],
    outcomes: [
      "A centralized workspace for lead management",
      "Structured follow-up and team workflows",
      "A foundation for organization-based SaaS subscriptions",
    ],
    gallery: ["/images/projects/afsdesk.jpg"],
  },
  {
    slug: "captify",
    name: "Captify",
    category: "AI / Mobile Application",
    tagline: "Creative words, powered by artificial intelligence.",
    description:
      "An AI-powered mobile application that helps users create quotes and captions for their social content.",
    year: "2026",
    services: [
      "Mobile Application Development",
      "AI Integration",
      "Backend Integration",
      "UI Implementation",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Appwrite",
      "AI APIs",
    ],
    website:
      "https://play.google.com/store/apps/details?id=com.devcenter.in.captify",
    heroImage: "/images/projects/captify.jpg",
    overview:
      "Captify is a mobile app concept focused on making creative writing easier. It uses AI-powered generation to help users discover and create quotes and captions for different occasions and social media needs.",
    challenge:
      "Creating engaging captions and finding the right words for social posts can take time. The goal was to make the creative process simpler through an accessible mobile experience.",
    solution:
      "We built a mobile application with an intuitive interface and AI-powered content generation capabilities, helping users create and explore written content from their devices.",
    features: [
      "AI-powered quote generation",
      "Caption creation assistance",
      "Mobile-first user experience",
      "Content discovery and exploration",
      "Backend integration",
    ],
    outcomes: [
      "An accessible AI-powered creative tool",
      "A mobile experience built around quick content creation",
      "A foundation for expanding creative AI features",
    ],
    gallery: ["/images/projects/captify.jpg"],
  },
  {
    slug: "studio-photoworld",
    name: "Studio Photoworld",
    category: "Website / Creative Business",
    tagline: "A digital presence for a photography business.",
    description:
      "A website project designed to present a photography brand and its creative work through a clear digital experience.",
    year: "2026",
    services: ["Website Design", "Frontend Development", "Responsive UI"],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    heroImage: "/images/projects/photoworld.jpg",
    overview:
      "Studio Photoworld is a website project focused on presenting a photography business online. The experience is intended to help visitors explore the brand and its work.",
    challenge:
      "Creative businesses need a digital presence that communicates their identity and presents their work clearly across desktop and mobile devices.",
    solution:
      "We created a responsive website experience with a visual-first approach, clear content structure, and layouts designed to work across screen sizes.",
    features: [
      "Responsive website layout",
      "Photography-focused visual presentation",
      "Structured content sections",
      "Mobile-friendly browsing experience",
    ],
    outcomes: [
      "A dedicated online presence for the brand",
      "A responsive experience across devices",
      "A foundation for showcasing photography work",
    ],
    gallery: ["/images/projects/photoworld.jpg"],
  },
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}