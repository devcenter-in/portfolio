import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  GraduationCap,
  ShoppingBag,
  Wallet,
  Building2,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Industries We Serve | DevCenter",
  description:
    "Explore how DevCenter can help healthcare, education, e-commerce, finance, real estate, and SaaS businesses build digital solutions.",
};

const industries = [
  {
    number: "01",
    slug: "healthcare",
    name: "Healthcare",
    subtitle: "Technology for better connected care.",
    description:
      "Digital experiences can help healthcare providers streamline administrative workflows, improve access to information, and make services easier to use.",
    icon: Activity,
    solutions: [
      "Appointment booking platforms",
      "Patient and provider portals",
      "Healthcare administration dashboards",
      "Clinic and practice management software",
      "Secure workflow and API integrations",
    ],
    opportunities:
      "Build accessible digital experiences that help patients and healthcare teams manage everyday interactions.",
  },
  {
    number: "02",
    slug: "education",
    name: "Education",
    subtitle: "Making learning more accessible.",
    description:
      "We can help educational organizations create digital platforms that support learners, educators, and administrators.",
    icon: GraduationCap,
    solutions: [
      "Learning management systems",
      "Online course platforms",
      "Student and teacher dashboards",
      "Assessment and quiz applications",
      "Education mobile applications",
    ],
    opportunities:
      "Create connected learning experiences that make educational content and administrative tools easier to access.",
  },
  {
    number: "03",
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    subtitle: "Better digital shopping experiences.",
    description:
      "We build digital commerce experiences that help businesses present products, manage operations, and serve customers online.",
    icon: ShoppingBag,
    solutions: [
      "E-commerce websites and storefronts",
      "Product and inventory management",
      "Order management dashboards",
      "Customer account and checkout flows",
      "Retail integrations and APIs",
    ],
    opportunities:
      "Connect storefront experiences with the systems that support everyday retail operations.",
  },
  {
    number: "04",
    slug: "finance-fintech",
    name: "Finance & FinTech",
    subtitle: "Reliable foundations for financial products.",
    description:
      "Financial products need thoughtful interfaces, dependable backend workflows, and careful attention to security and data handling.",
    icon: Wallet,
    solutions: [
      "Financial dashboards and reporting",
      "Expense and budget management tools",
      "Payment gateway integrations",
      "Account and transaction interfaces",
      "Business workflow automation",
    ],
    opportunities:
      "Develop clear digital interfaces and organized workflows for financial and business applications.",
  },
  {
    number: "05",
    slug: "real-estate",
    name: "Real Estate",
    subtitle: "Digital tools for property businesses.",
    description:
      "We can help property businesses organize listings, manage enquiries, and create better digital experiences for buyers, tenants, and teams.",
    icon: Building2,
    solutions: [
      "Property listing platforms",
      "Real estate websites",
      "Lead and enquiry management systems",
      "Property management dashboards",
      "Virtual enquiry and booking workflows",
    ],
    opportunities:
      "Bring property discovery, customer enquiries, and internal operations into a more connected digital experience.",
  },
  {
    number: "06",
    slug: "startups-saas",
    name: "Startups & SaaS",
    subtitle: "From early ideas to scalable products.",
    description:
      "We work with product ideas and growing businesses to develop digital products, SaaS platforms, and the technical foundations behind them.",
    icon: Rocket,
    solutions: [
      "MVP and product development",
      "SaaS application development",
      "Subscription and billing integrations",
      "Admin and analytics dashboards",
      "AI-powered product features",
    ],
    opportunities:
      "Turn a product concept into a usable digital experience, then improve it as customer and business needs evolve.",
  },
];

const capabilities = [
  "Web and software development",
  "Mobile application development",
  "AI integration and automation",
  "Backend and API development",
  "Cloud deployment solutions",
  "Product dashboards and portals",
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-neutral-900">
        {/* Hero */}
        <section className="px-5 pb-20 pt-36 sm:px-8 lg:px-16 lg:pb-28 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
              Industries we serve
            </p>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Technology for
                <br />
                <span className="text-primary-600">every ambition.</span>
              </h1>

              <div className="lg:pb-3">
                <p className="text-lg leading-8 text-neutral-500">
                  Every industry has different challenges. We help businesses
                  explore and build digital solutions around their workflows,
                  customers, and goals.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-primary-600"
                >
                  Discuss your industry needs
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 border-y border-neutral-200 py-7 sm:grid-cols-3 lg:grid-cols-6">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <a
                    key={industry.slug}
                    href={`#${industry.slug}`}
                    className="group flex items-center gap-3 text-sm text-neutral-500 transition hover:text-primary-600"
                  >
                    <Icon
                      size={19}
                      className="shrink-0 text-neutral-400 transition group-hover:text-primary-600"
                    />
                    <span>{industry.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Sections */}
        <section className="px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
          <div className="mx-auto max-w-7xl space-y-6">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.slug}
                  id={industry.slug}
                  className="scroll-mt-28 rounded-3xl border border-neutral-200 p-7 transition duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-950/5 sm:p-10 lg:p-12"
                >
                  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">
                          {industry.number} / Industry
                        </span>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                          <Icon size={27} />
                        </div>
                      </div>

                      <h2 className="mt-9 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {industry.name}
                      </h2>

                      <p className="mt-3 text-lg font-medium text-primary-600">
                        {industry.subtitle}
                      </p>

                      <p className="mt-5 max-w-xl leading-8 text-neutral-500">
                        {industry.description}
                      </p>
                    </div>

                    <div className="lg:pt-5">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                        Potential digital solutions
                      </h3>

                      <div className="mt-6 grid gap-x-7 gap-y-5 sm:grid-cols-2">
                        {industry.solutions.map((solution) => (
                          <div
                            key={solution}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-1 shrink-0 text-primary-600"
                            />
                            <span className="text-sm leading-6 text-neutral-600">
                              {solution}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-9 border-t border-neutral-200 pt-6">
                        <p className="text-sm leading-7 text-neutral-500">
                          {industry.opportunities}
                        </p>

                        <Link
                          href={`/contact?industry=${industry.slug}`}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-primary-600"
                        >
                          Discuss a solution
                          <ArrowUpRight size={17} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-neutral-50 px-5 py-24 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Our capabilities
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                One technology partner. Multiple possibilities.
              </h2>

              <p className="mt-6 leading-8 text-neutral-500">
                Our services can be combined to support different business
                needs, from a single website to a connected software product.
              </p>
            </div>

            <div className="grid gap-x-8 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center gap-4 border-b border-neutral-200 py-6"
                >
                  <span className="text-xs text-primary-600">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium text-neutral-700">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-neutral-950 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-300">
              <Sparkles size={27} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
              Your industry. Your idea. Our expertise.
            </p>

            <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Let&apos;s build a solution for your business.
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-neutral-400">
                  Tell us about your industry and the challenge you want to
                  solve. We&apos;ll explore the right technology approach together.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-900 transition hover:bg-primary-500 hover:text-white"
              >
                Start a conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}