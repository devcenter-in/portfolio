"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { projectDetails } from "@/data/project-details";

const filters = ["All", "Web", "Mobile", "AI", "SaaS"] as const;

type Filter = (typeof filters)[number];

function matchesFilter(category: string, filter: Filter) {
  if (filter === "All") return true;

  const value = category.toLowerCase();

  switch (filter) {
    case "Web":
      return value.includes("website") || value.includes("web");
    case "Mobile":
      return value.includes("mobile");
    case "AI":
      return value.includes("ai");
    case "SaaS":
      return value.includes("saas") || value.includes("crm");
    default:
      return true;
  }
}

export default function ProjectsListing() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(
    () =>
      projectDetails.filter((project) =>
        matchesFilter(project.category, activeFilter)
      ),
    [activeFilter]
  );

  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="px-5 pb-16 pt-36 sm:px-8 lg:px-16 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
            Our selected work
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Ideas into
              <br />
              <span className="text-primary-600">experiences.</span>
            </h1>

            <div className="lg:pb-3">
              <p className="max-w-lg text-lg leading-8 text-neutral-500">
                A selection of digital products and experiences built to
                solve real problems, support businesses, and create value
                through technology.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-primary-600"
              >
                Have a project in mind?
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-y border-neutral-200 py-6">
            <p className="text-sm text-neutral-500">
              Explore our projects
            </p>

            <div
              className="flex flex-wrap gap-2"
              aria-label="Filter projects by category"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>

            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Dev Center Portfolio
            </span>
          </div>

          <motion.div
            layout
            className="grid gap-x-8 gap-y-14 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block"
                    aria-label={`View ${project.name} project details`}
                  >
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100">
                      <Image
                        src={project.heroImage}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                      <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={21} />
                      </div>
                    </div>

                    <div className="mt-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
                          {project.category}
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary-600 sm:text-3xl">
                          {project.name}
                        </h2>
                      </div>

                      <span className="mt-1 text-sm text-neutral-400">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-3 max-w-xl leading-7 text-neutral-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500"
                        >
                          {technology}
                        </span>
                      ))}

                      {project.technologies.length > 4 && (
                        <span className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <h2 className="text-2xl font-semibold">
                More projects coming soon.
              </h2>
              <p className="mt-3 text-neutral-500">
                We are working on adding more work to our portfolio.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-6 text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-neutral-950 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
              Your project could be next
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Have an idea?
              <br />
              Let&apos;s make it real.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-neutral-400">
              Tell us what you are building. We can help you turn your
              idea into a digital product that makes a difference.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-primary-500 hover:text-white"
            >
              Start a conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}