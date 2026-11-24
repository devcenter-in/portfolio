"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Target,
  Users,
  Zap,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace modern technologies and creative thinking to solve real-world business challenges.",
  },
  {
    icon: Target,
    title: "Purpose Driven",
    description:
      "Every solution is built around your goals, users and long-term business objectives.",
  },
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    description:
      "We believe in transparent communication, collaboration and lasting relationships.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "We create reliable digital products designed to evolve alongside your business.",
  },
];

export default function AboutOverview() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* INTRODUCTION */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-600">
              <Users size={14} />
              About Dev Center
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
              We believe
              <br />
              technology can
              <br />
              <span className="text-primary-600">move the world.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-500">
              Dev Center is a technology and digital solutions agency focused on
              helping businesses transform ideas into meaningful digital
              experiences.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-500">
              We bring together software engineering, modern design and
              intelligent technology to build products that simplify processes,
              solve problems and create opportunities.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-600"
            >
              Discover Our Story
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative flex min-h-110 items-center justify-center overflow-hidden rounded-3xl bg-[#F4F4F6] p-8">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

              <div className="relative z-10 w-full max-w-sm">
                <div className="rounded-3xl border border-white bg-white/80 p-8 shadow-2xl shadow-neutral-900/5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-2xl font-bold text-white">
                      D
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                      Digital Innovation
                    </span>
                  </div>

                  <h3 className="mt-10 text-3xl font-semibold tracking-tight">
                    We Build.
                    <br />
                    You Grow.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    Turning ambitious ideas into powerful digital experiences
                    through technology and creativity.
                  </p>

                  <div className="mt-9 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-primary-50 p-4">
                      <Zap className="text-primary-600" size={22} />
                      <p className="mt-3 text-sm font-semibold">Innovation</p>
                    </div>

                    <div className="rounded-xl bg-violet-50 p-4">
                      <ShieldCheck className="text-violet-600" size={22} />
                      <p className="mt-3 text-sm font-semibold">Quality</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-7 -right-5 flex items-center gap-3 rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Ideas to Impact</p>
                    <p className="text-xs text-neutral-500">
                      Built with purpose
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-28 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <Target size={24} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-primary-600">
              Our Mission
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Make technology work for everyone.
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-500">
              Our mission is to make digital innovation accessible through
              practical, scalable and thoughtfully engineered technology
              solutions.
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-950 p-8 text-white sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary-400">
              <Lightbulb size={24} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-primary-400">
              Our Vision
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              A smarter digital future.
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-400">
              We aspire to be a trusted technology partner for businesses
              worldwide, creating meaningful impact through innovation and
              engineering.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              Why Dev Center
            </p>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              What makes us different.
            </h3>

            <p className="mt-5 text-base leading-8 text-neutral-500">
              We focus on building the right solutions, not just writing code.
              Every project starts with understanding what matters to your
              business.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800 transition duration-300 group-hover:bg-primary-600 group-hover:text-white">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h4 className="mt-7 text-lg font-semibold">{value.title}</h4>

                  <p className="mt-3 text-sm leading-7 text-neutral-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#F4F4F6] p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Let&apos;s collaborate
            </p>

            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Your vision deserves the right technology partner.
            </h3>

            <p className="mt-4 text-sm text-neutral-500">
              Let&apos;s discuss your next digital project.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-600"
          >
            Let&apos;s Talk
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}