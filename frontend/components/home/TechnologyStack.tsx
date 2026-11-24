
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import Link from "next/link";
import { technologies } from "@/data/technologies";
import TechnologyCard from "@/components/ui/TechnologyCard";

const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "React Native",
  "Python",
  "OpenAI",
  "Tailwind CSS",
];

export default function TechnologyStack() {
  return (
    <section
      id="technology"
      className="overflow-hidden bg-[#FAFAFA] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-600">
            <Layers3 size={14} />
            Our Technology Ecosystem
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Powered by technology.
            <br />
            <span className="text-neutral-400">
              Driven by innovation.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-500">
            We leverage modern frameworks, development tools and
            intelligent technologies to build secure, scalable and
            future-ready digital products.
          </p>
        </div>

        {/* ANIMATED MARQUEE */}
        <div className="relative mt-16 overflow-hidden border-y border-neutral-200 py-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#FAFAFA] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#FAFAFA] to-transparent sm:w-32" />

          <motion.div
            className="flex w-max gap-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-4"
              >
                <Sparkles size={16} className="text-primary-500" />
                <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-neutral-400 sm:text-xl">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* TECHNOLOGY CATEGORIES */}
        <div className="mt-20 space-y-16">
          {technologies.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {category.category}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {category.description}
                  </p>
                </div>

                <span className="text-xs font-medium text-neutral-400">
                  {String(category.items.length).padStart(2, "0")} Technologies
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.items.map((technology) => (
                  <TechnologyCard
                    key={technology.name}
                    name={technology.name}
                    icon={technology.icon}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 flex flex-col items-start justify-between gap-6 rounded-2xl bg-neutral-950 p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-primary-400">
              <Sparkles size={16} />
              <span className="text-xs font-semibold uppercase tracking-widest">
                The right technology for your idea
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Let&apos;s find the right tech stack.
            </h3>

            <p className="mt-3 text-sm text-neutral-400">
              Tell us about your project and we&apos;ll help you choose.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-primary-500 hover:text-white"
          >
            Discuss Your Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
