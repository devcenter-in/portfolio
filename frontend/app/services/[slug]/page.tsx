import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceDetails } from "@/data/service-details";
import Image from "next/image";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found | DevCenter" };
  }

  return {
    title: `${service.title} | DevCenter`,
    description: service.description,
    openGraph: {
      title: `${service.title} | DevCenter`,
      description: service.description,
    },
  };
}

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, requirements, users, and project goals.",
  },
  {
    number: "02",
    title: "Strategy & planning",
    description:
      "We define the scope, architecture, technology choices, and milestones.",
  },
  {
    number: "03",
    title: "Design & development",
    description:
      "We build the solution in focused stages and share progress along the way.",
  },
  {
    number: "04",
    title: "Testing & delivery",
    description:
      "We test the implementation, prepare the release, and plan the next steps.",
  },
];

const faqs = [
  {
    question: "How do we get started with a project?",
    answer:
      "Start by contacting us with your idea, requirements, and expected outcomes. We'll review the information and discuss the possible scope and next steps.",
  },
  {
    question: "Can you work with an existing product?",
    answer:
      "Yes. We can discuss existing applications, improvements, integrations, new features, and modernization work after understanding your current setup.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on the scope, complexity, integrations, and requirements. We'll discuss a realistic delivery plan after the initial discovery.",
  },
  {
    question: "Can you provide ongoing support?",
    answer:
      "Ongoing maintenance and improvement can be discussed as part of the project engagement, depending on your product's needs.",
  },
];

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const serviceIndex = serviceDetails.findIndex(
    (item) => item.slug === slug
  );

  if (serviceIndex === -1) notFound();

  const service = serviceDetails[serviceIndex];
  const Icon = service.icon;
  const otherServices = serviceDetails.filter(
    (item) => item.slug !== service.slug
  );

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-neutral-900">
        {/* Hero */}
        <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-16 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/services"
              className="mb-12 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900"
            >
              <ArrowLeft size={16} />
              All services
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  {service.category}
                </p>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <Icon size={32} />
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  {service.title}
                  <span className="text-primary-600">.</span>
                </h1>
              </div>

              <div className="lg:pb-2">
                <p className="text-lg leading-8 text-neutral-500">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-600"
                >
                  Discuss your project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Service statement */}
            <div className="relative mt-16 overflow-hidden rounded-3xl bg-neutral-950 p-8 text-white sm:p-12 lg:p-16">
              <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary-600/30 blur-[100px]" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
                    The DevCenter approach
                  </p>

                  <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                    Technology built around your business goals.
                  </h2>
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-primary-300">
                  <Icon size={38} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-y border-neutral-200 bg-neutral-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                01 / Overview
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What we bring to the table.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-neutral-600">
                {service.description}
              </p>

              <p className="mt-6 leading-8 text-neutral-500">
                We work with you to understand the requirements, choose a
                suitable technical approach, and build a solution that
                supports your product and business objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                02 / Capabilities
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What we can help you build.
              </h2>

              <p className="mt-6 leading-8 text-neutral-500">
                Explore the capabilities available within our{" "}
                {service.shortTitle.toLowerCase()} services.
              </p>
            </div>

            <div className="grid gap-x-12 sm:grid-cols-2">
              {service.capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex gap-5 border-t border-neutral-200 py-7"
                >
                  <span className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {capability}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      Planned and delivered according to your project
                      requirements.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-neutral-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                03 / Why it matters
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Designed to deliver practical value.
              </h2>

              <p className="mt-6 leading-8 text-neutral-500">
                We focus on building solutions that are useful, maintainable,
                and aligned with your business needs.
              </p>
            </div>

            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-primary-600"
                  />

                  <p className="font-medium leading-7">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  04 / Technology
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  The right tools for the right solution.
                </h2>

                <p className="mt-6 leading-8 text-neutral-500">
                  We select technologies based on your requirements,
                  integration needs, and long-term product goals.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-primary-300 hover:text-primary-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-neutral-950 px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
                05 / Our process
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                From first conversation to delivery.
              </h2>

              <p className="mt-6 leading-8 text-neutral-400">
                A collaborative process keeps your project aligned with its
                goals at every stage.
              </p>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/20 pt-7"
                >
                  <span className="text-sm font-semibold text-primary-400">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold">
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

        {/* FAQ */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                06 / FAQ
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Questions before we begin?
              </h2>

              <p className="mt-6 leading-8 text-neutral-500">
                Have a question that isn&apos;t covered here? Tell us about your
                project and we&apos;ll be happy to discuss it.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold hover:text-primary-600"
              >
                <MessageCircle size={18} />
                Talk to our team
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="flex gap-4 text-base font-semibold sm:text-lg">
                      <span className="text-sm font-normal text-primary-600">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className="shrink-0 text-neutral-400 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-5 pl-9 text-sm leading-7 text-neutral-500">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="bg-neutral-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  Explore more
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Other services.
                </h2>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary-600"
              >
                All services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {otherServices.map((item) => {
                const OtherIcon = item.icon;

                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-950/5"
                  >
                    <div className="flex items-center justify-between">
                      <OtherIcon
                        size={25}
                        className="text-primary-600"
                      />
                      <ArrowUpRight
                        size={19}
                        className="text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-600"
                      />
                    </div>

                    <h3 className="mt-9 text-xl font-semibold">
                      {item.shortTitle}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-neutral-500">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary-600 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/50">
              <Image src="/logo.png" alt="Sparkles" width={27} height={27} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">
              Let&apos;s work together
            </p>

            <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Ready to build something meaningful?
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-primary-100">
                  Share your idea with us. Let&apos;s explore how the right
                  technology can help bring it to life.
                </p>
              </div>

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