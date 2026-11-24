import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { serviceDetails } from "@/data/service-details";

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, challenges, and goals.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We establish the scope, technical direction, and project milestones.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We design, build, and refine the solution through collaboration.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We prepare your solution for launch and discuss ongoing improvements.",
  },
];

export default function ServicesListing() {
  return (
    <main className="overflow-hidden bg-white text-neutral-900">
      {/* Hero */}
      <section className="px-5 pb-20 pt-36 sm:px-8 lg:px-16 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            What we do
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Technology that
              <br />
              <span className="text-primary-600">moves you forward.</span>
            </h1>

            <div className="lg:pb-3">
              <p className="text-lg leading-8 text-neutral-500">
                From your first digital idea to a complete software product,
                we bring together development, design thinking, and modern
                technology to help you build with confidence.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-primary-600"
              >
                Discuss your project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-16 border-t border-neutral-200 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Our capabilities
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-600">
              <span>Web & Software</span>
              <span>Mobile Applications</span>
              <span>AI & Automation</span>
              <span>Cloud & Backend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Our services
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                What can we build for you?
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-neutral-500 lg:justify-self-end">
              We offer connected technology services that cover the major
              stages of building and growing a digital product. Choose a
              capability to explore how we can help.
            </p>
          </div>

          <div className="space-y-5">
            {serviceDetails.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="group rounded-3xl border border-neutral-200 bg-white p-7 transition duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-950/5 sm:p-10 lg:p-12"
                >
                  <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-400">
                          {service.category}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                          <Icon size={24} />
                        </div>
                      </div>

                      <h3 className="mt-8 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 max-w-lg leading-8 text-neutral-500">
                        {service.description}
                      </p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition group-hover:text-primary-600"
                      >
                        Explore service
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                          What we offer
                        </h4>

                        <ul className="mt-5 space-y-4">
                          {service.capabilities.slice(0, 5).map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-neutral-600"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-primary-600"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                          Technologies
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {service.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-neutral-200 px-3 py-2 text-xs text-neutral-600"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                How we work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A thoughtful process. Better outcomes.
              </h2>

              <p className="mt-6 leading-8 text-neutral-500">
                Good software comes from clear requirements, careful
                engineering, and consistent communication.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-neutral-200 pt-6"
                >
                  <span className="text-sm font-semibold text-primary-600">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why DevCenter */}
      <section className="bg-neutral-950 px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-300">
              <Sparkles size={24} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
              The DevCenter approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built around your goals, not just technology.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-300">
              The right solution is not always the most complicated one. We
              focus on understanding your requirements and selecting a
              practical approach that fits your product, users, and business.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-primary-300"
            >
              Learn about DevCenter
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary-600 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">
            Have an idea?
          </p>

          <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Let&apos;s find the right solution for your business.
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
  );
}