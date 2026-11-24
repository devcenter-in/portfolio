import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Target,
  Users,
  Rocket,
  Code2,
  ShieldCheck,
  Layers3,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | DevCenter",
  description:
    "Learn about DevCenter, a technology agency building web applications, mobile products, custom software, and AI-powered solutions.",
};

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation first",
    description:
      "We explore modern technologies and practical ideas to create better digital experiences.",
  },
  {
    number: "02",
    icon: Target,
    title: "Purpose driven",
    description:
      "Every solution starts with understanding the problem and defining what success should look like.",
  },
  {
    number: "03",
    icon: Users,
    title: "Client partnership",
    description:
      "We believe in clear communication, collaboration, and building long-term professional relationships.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Built to evolve",
    description:
      "We build with maintainability, performance, and future improvements in mind.",
  },
];

const differentiators = [
  {
    icon: Code2,
    title: "Business-focused development",
    description:
      "We focus on building useful digital products that support real business goals.",
  },
  {
    icon: Layers3,
    title: "End-to-end capabilities",
    description:
      "From frontend experiences to backend systems and mobile applications, we connect the pieces.",
  },
  {
    icon: Sparkles,
    title: "Modern technology",
    description:
      "We use modern frameworks, cloud platforms, and AI integrations where they make sense.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-minded execution",
    description:
      "We prioritize clean implementation, responsive interfaces, and maintainable code.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your idea, business needs, users, and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, technical direction, milestones, and delivery approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop the solution through an iterative process.",
  },
  {
    number: "04",
    title: "Launch & improve",
    description:
      "We prepare the product for launch and identify opportunities for future improvements.",
  },
];

const capabilities = [
  "Web Application Development",
  "Mobile App Development",
  "Custom Software Development",
  "AI Integration & Automation",
  "Backend & API Development",
  "Cloud & Deployment Solutions",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-neutral-900">
        {/* Hero */}
        <section className="px-5 pb-24 pt-36 sm:px-8 lg:px-16 lg:pb-32 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              About Dev Center
            </p>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Technology with
                <br />
                <span className="text-primary-600">purpose.</span>
              </h1>

              <div className="lg:pb-3">
                <p className="text-lg leading-8 text-neutral-500">
                  We are Dev Center — a technology agency focused on building
                  thoughtful digital products, modern software, and AI-powered
                  solutions that help businesses move forward.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-primary-600"
                >
                  Let&apos;s work together
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative mt-20 overflow-hidden rounded-3xl bg-neutral-950 px-7 py-16 sm:px-12 lg:px-20 lg:py-24">
              <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary-600/30 blur-[100px]" />
              <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-primary-500/20 blur-[100px]" />

              <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
                    We build. You grow.
                  </p>

                  <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                    Turning ambitious ideas into useful technology.
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Great technology is more than code. It is about solving
                  problems, creating better experiences, and giving businesses
                  the tools they need to grow and adapt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-y border-neutral-200 bg-neutral-50 px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                01 / Our story
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built around a simple belief.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-9 text-neutral-600">
              <p>
                Technology should make things simpler, smarter, and more
                accessible. That belief is at the heart of DevCenter.
              </p>

              <p>
                We work across web development, mobile applications, custom
                software, and artificial intelligence. Our focus is on
                understanding what a business needs and translating that into
                practical digital solutions.
              </p>

              <p>
                Whether it is a new product idea, an existing business looking
                to modernize, or a team that needs a reliable development
                partner, we approach each project with curiosity, care, and a
                commitment to quality.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                02 / Our direction
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What drives us forward.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-neutral-950 p-8 text-white sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-300">
                  <Target size={27} />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
                  Our mission
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  Make technology work for everyone.
                </h3>

                <p className="mt-6 leading-8 text-neutral-400">
                  To create accessible, reliable, and meaningful digital
                  solutions that help businesses solve problems and achieve
                  their goals.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <Lightbulb size={27} />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  Our vision
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  A smarter digital future.
                </h3>

                <p className="mt-6 leading-8 text-neutral-500">
                  To become a trusted technology partner for businesses
                  worldwide through innovation, thoughtful engineering, and
                  lasting partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-neutral-50 px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                03 / Our values
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Principles behind every project.
              </h2>
              <p className="mt-6 leading-8 text-neutral-500">
                The way we work matters just as much as what we build.
              </p>
            </div>

            <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.number} className="border-t border-neutral-300 pt-7">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-400">
                        {value.number}
                      </span>
                      <Icon size={23} className="text-primary-600" />
                    </div>

                    <h3 className="mt-9 text-xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-7 text-neutral-500">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why DevCenter */}
        <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  04 / Why DevCenter
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  More than development. A technology partner.
                </h2>

                <p className="mt-6 leading-8 text-neutral-500">
                  We combine technical thinking with a practical understanding
                  of business needs to deliver solutions with a clear purpose.
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-primary-600"
                >
                  Explore our services
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {differentiators.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-neutral-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-950/5"
                    >
                      <Icon size={27} className="text-primary-600" />
                      <h3 className="mt-7 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-neutral-950 px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
                05 / How we work
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A clear path from idea to launch.
              </h2>
              <p className="mt-6 leading-8 text-neutral-400">
                A collaborative process helps keep projects focused,
                transparent, and aligned with their goals.
              </p>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/20 pt-7"
                >
                  <span className="text-sm font-medium text-primary-400">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                06 / What we do
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology capabilities for modern businesses.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-neutral-500">
                We bring together development skills and modern tools to
                create digital products across multiple platforms.
              </p>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center gap-4 border-b border-neutral-200 py-6"
                >
                  <span className="text-xs text-primary-600">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium sm:text-base">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
          <div className="mx-auto max-w-7xl rounded-3xl bg-primary-600 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">
              Let&apos;s build together
            </p>

            <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Have a vision?
                <br />
                We&apos;re ready to build.
              </h2>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Start a project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}