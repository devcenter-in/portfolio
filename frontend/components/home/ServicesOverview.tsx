"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FAFAFA] px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-500">
              Our Expertise
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Technology solutions
              <br />
              <span className="text-neutral-400">built around you.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-8 text-neutral-500">
              From initial idea to final deployment, we combine technical
              expertise and creative thinking to deliver solutions that solve
              real business challenges.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-primary-600"
            >
              Explore all services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-neutral-950 p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-400">
              Have a project in mind?
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Let&apos;s build something meaningful.
            </h3>

            <p className="mt-3 text-sm text-neutral-400">
              Tell us about your idea. We&apos;ll help you bring it to life.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-primary-500 hover:text-white"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
