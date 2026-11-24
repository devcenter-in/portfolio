import {
  Code2,
  Smartphone,
  BrainCircuit,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  capabilities: string[];
  benefits: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web & Software Development",
    shortTitle: "Web Development",
    category: "01 / Web & Software",
    description:
      "We build responsive websites, custom web applications, and scalable software experiences that help businesses work smarter and serve their customers better.",
    icon: Code2,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    capabilities: [
      "Business websites and landing pages",
      "Custom web application development",
      "E-commerce platforms",
      "SaaS product development",
      "Dashboard and admin panel development",
      "API integration and frontend engineering",
    ],
    benefits: [
      "Responsive experiences across devices",
      "Maintainable and scalable architecture",
      "Performance-focused implementation",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    category: "02 / Mobile Applications",
    description:
      "We create intuitive mobile applications that bring your digital product closer to customers through thoughtful user experiences and reliable functionality.",
    icon: Smartphone,
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Appwrite",
      "Firebase",
      "REST APIs",
    ],
    capabilities: [
      "Cross-platform mobile applications",
      "Business and productivity apps",
      "AI-powered mobile applications",
      "Authentication and user management",
      "Push notifications and API integration",
      "App deployment and release support",
    ],
    benefits: [
      "One codebase for multiple platforms",
      "Consistent mobile user experience",
      "Faster product iteration",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    shortTitle: "AI Solutions",
    category: "03 / Artificial Intelligence",
    description:
      "We integrate artificial intelligence into digital products and business workflows to reduce repetitive work and create smarter user experiences.",
    icon: BrainCircuit,
    technologies: [
      "OpenAI APIs",
      "Anthropic APIs",
      "Python",
      "Node.js",
      "AI Agents",
      "API Integrations",
    ],
    capabilities: [
      "AI-powered application features",
      "AI chatbots and assistants",
      "Content generation workflows",
      "Business process automation",
      "LLM API integration",
      "AI-powered search and data experiences",
    ],
    benefits: [
      "Less repetitive manual work",
      "More helpful product experiences",
      "Practical AI integration into existing systems",
    ],
  },
  {
    slug: "cloud-backend",
    title: "Cloud & Backend Solutions",
    shortTitle: "Cloud & Backend",
    category: "04 / Infrastructure",
    description:
      "We develop backend systems, APIs, and deployment foundations that help digital products operate reliably and grow with business needs.",
    icon: Cloud,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "DigitalOcean",
      "Docker",
      "Cloudinary",
    ],
    capabilities: [
      "Backend application development",
      "REST API development and integration",
      "Database design and management",
      "Authentication and authorization",
      "Cloud deployment and configuration",
      "File and media management",
    ],
    benefits: [
      "Organized and maintainable backend systems",
      "Reliable data and API workflows",
      "Deployment foundations for future growth",
    ],
  },
];