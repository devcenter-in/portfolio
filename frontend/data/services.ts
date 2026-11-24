
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Cloud,
  Globe2,
  ShoppingCart,
  Layout,
  Workflow,
  Database,
  Server,
  Bot,
  Palette,
} from "lucide-react";

export const services = [
  {
    id: "01",
    title: "Web & Software Development",
    description:
      "We build high-performance websites, web applications and custom software that help businesses streamline operations and scale confidently.",
    icon: Code2,
    href: "/services/web-development",
    color: "indigo",
    services: [
      "Website Development",
      "Web Applications",
      "Custom Software",
      "E-commerce Development",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript"],
    capabilities: [
      { icon: Globe2, label: "Business Websites" },
      { icon: Layout, label: "Web Applications" },
      { icon: ShoppingCart, label: "E-commerce" },
    ],
  },
  {
    id: "02",
    title: "Mobile App Development",
    description:
      "We create intuitive, scalable mobile applications that deliver seamless experiences across Android and iOS devices.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    color: "violet",
    services: [
      "Android Applications",
      "iOS Applications",
      "Cross-platform Apps",
      "App UI/UX Design",
    ],
    technologies: ["React Native", "Expo", "TypeScript"],
    capabilities: [
      { icon: Smartphone, label: "Mobile Apps" },
      { icon: Palette, label: "App Design" },
      { icon: Workflow, label: "Integrations" },
    ],
  },
  {
    id: "03",
    title: "AI & Automation",
    description:
      "We integrate intelligent AI capabilities and automation into digital products to simplify workflows and unlock new possibilities.",
    icon: BrainCircuit,
    href: "/services/ai-solutions",
    color: "blue",
    services: [
      "AI-powered Applications",
      "AI API Integration",
      "Business Automation",
      "AI Chatbots",
    ],
    technologies: ["OpenAI", "Claude", "Python", "Node.js"],
    capabilities: [
      { icon: Bot, label: "AI Assistants" },
      { icon: BrainCircuit, label: "AI Integration" },
      { icon: Workflow, label: "Automation" },
    ],
  },
  {
    id: "04",
    title: "Cloud & Backend Solutions",
    description:
      "We develop secure backend systems, scalable APIs and cloud infrastructure to power reliable digital experiences.",
    icon: Cloud,
    href: "/services/cloud-backend",
    color: "cyan",
    services: [
      "Backend Development",
      "REST API Development",
      "Database Architecture",
      "Cloud Deployment",
    ],
    technologies: ["Node.js", "MongoDB", "MySQL", "DigitalOcean"],
    capabilities: [
      { icon: Server, label: "Backend Systems" },
      { icon: Database, label: "Databases" },
      { icon: Cloud, label: "Cloud Solutions" },
    ],
  },
];
