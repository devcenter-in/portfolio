
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="bg-white px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-600">
              Selected Projects
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Work that speaks
              <br />
              <span className="text-neutral-400">
                for itself.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
              Explore how we turn ideas into meaningful digital
              experiences through thoughtful design and modern technology.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-primary-600"
          >
            View all projects
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 border-t border-neutral-200 pt-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Let&apos;s create something remarkable together.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 self-start rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-600 md:self-auto"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
