import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Globe2,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactInquiry from "@/components/home/ContactInquiry";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project with DevCenter",
  description:
    "Have a website, mobile app, custom software, or AI project in mind? Contact DevCenter to discuss your requirements and next steps.",
  openGraph: {
    title: "Contact DevCenter",
    description:
      "Let's discuss your next digital product or software project.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-neutral-900">
        {/* Hero */}
        <section className="px-5 pb-16 pt-36 sm:px-8 lg:px-16 lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Contact Dev Center
            </p>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Have an idea?
                <br />
                <span className="text-primary-600">Let&apos;s talk.</span>
              </h1>

              <div className="lg:pb-3">
                <p className="text-lg leading-8 text-neutral-500">
                  Whether you&apos;re starting something new or improving an
                  existing product, tell us what you&apos;re working on. Let&apos;s
                  explore how we can help.
                </p>

                <Link
                  href="#project-inquiry"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-primary-600"
                >
                  Tell us about your project
                  <ArrowDown size={17} />
                </Link>
              </div>
            </div>

            {/* Contact highlights */}
            <div className="mt-16 grid gap-4 border-y border-neutral-200 py-7 sm:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <MessageSquare size={21} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Project inquiries</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Tell us what you want to build
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Globe2 size={21} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Global collaboration</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Working with businesses worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Sparkles size={21} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Practical solutions</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Technology built around your goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Inquiry */}
        <section
          id="project-inquiry"
          className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50 px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Start a conversation
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Tell us about your project.
              </h2>

              <p className="mt-5 leading-8 text-neutral-500">
                Share a few details about your idea, requirements, and
                expectations. The more context you provide, the easier it
                will be to understand what you need.
              </p>
            </div>

            {/* Reuse the existing form */}
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
              <ContactInquiry />
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                What happens next?
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Every good project starts with a conversation.
              </h2>

              <p className="mt-6 leading-8 text-neutral-500">
                Once you submit your inquiry, we&apos;ll review the information
                and use it to understand your project requirements and
                possible next steps.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "We review your inquiry",
                  description:
                    "We look at your goals, requirements, and project details.",
                },
                {
                  number: "02",
                  title: "We discuss the requirements",
                  description:
                    "We clarify the scope, expectations, and possible approach.",
                },
                {
                  number: "03",
                  title: "We plan the next steps",
                  description:
                    "We discuss a suitable proposal and a realistic way forward.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 border-b border-neutral-200 py-7 first:border-t"
                >
                  <span className="text-sm font-semibold text-primary-600">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
          <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-950 px-7 py-14 text-white sm:px-12 lg:px-20 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
              DevCenter
            </p>

            <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                We build.
                <br />
                You grow.
              </h2>

              <Link
                href="/projects"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-neutral-900"
              >
                Explore our work
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