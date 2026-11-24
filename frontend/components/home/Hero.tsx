"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Layers3,
} from "lucide-react";
import Image from "next/image";

const floatingCards = [
  {
    icon: Code2,
    title: "Software Development",
    subtitle: "Built for scale",
    position: "left-0 top-8",
  },
  {
    icon: BrainCircuit,
    title: "AI Innovation",
    subtitle: "Smarter solutions",
    position: "right-0 bottom-8",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-150 w-150 rounded-full bg-primary-100/50 blur-[130px]" />

      <div className="mx-auto grid min-h-175 max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-semibold tracking-wide text-neutral-600">
              YOUR PARTNER IN DIGITAL INNOVATION
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-[72px]">
            Building
            <br />
            Technology.
            <br />
            <span className="bg-linear-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Empowering
              <br />
              Businesses.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-neutral-500 sm:text-lg">
            We transform ambitious ideas into powerful digital products. From
            custom software and mobile applications to AI-powered solutions, we
            help businesses move forward with technology.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-600 hover:text-black"
            >
              Start a Project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-neutral-200 px-7 py-4 text-sm font-semibold text-neutral-800 transition hover:border-neutral-950"
            >
              Explore Our Work
              <ArrowDown size={17} />
            </Link>
          </div>

          {/* SMALL TRUST TEXT */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-neutral-400">
            <span>CREATIVE THINKING</span>
            <span>MODERN TECHNOLOGY</span>
            <span>MEANINGFUL RESULTS</span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex min-h-107.5 w-full max-w-135 items-center justify-center"
        >
          {/* ORBIT */}
          <div className="absolute h-97.5 w-97.5 rounded-full border border-primary-100 sm:h-117.5 sm:w-117.5" />
          <div className="absolute h-75 w-75 rounded-full border border-primary-100 sm:h-90 sm:w-90" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-117.5 w-117.5 rounded-full border border-dashed border-primary-200"
          />

          {/* CENTER CARD */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-[2.5rem] border border-white/70 bg-neutral-950 shadow-2xl shadow-primary-900/20 sm:h-60 sm:w-60"
          >
            <div className="mb-4 flex items-center justify-center rounded-2xl">
             <Image src="/logo.png" alt="DevCenter Logo" width={64} height={64} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              DEV CENTER
            </h3>
            <p className="mt-2 text-xs tracking-widest text-neutral-400">
              BUILDING THE FUTURE
            </p>
            <Sparkles
              className="absolute -right-5 -top-5 text-primary-500"
              size={32}
            />
          </motion.div>

          {/* FLOATING CARDS */}
          {floatingCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute ${card.position} z-20 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-900">
                    {card.title}
                  </p>
                  <p className="mt-1 text-[10px] text-neutral-500">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* BOTTOM LABEL */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs font-medium text-neutral-400">
            <Layers3 size={15} />
            Innovation through technology
          </div>
        </motion.div>
      </div>
    </section>
  );
}