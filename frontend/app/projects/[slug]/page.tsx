import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { getProjectDetail, projectDetails } from "@/data/project-details";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return { title: "Project Not Found | DevCenter" };
  }

  return {
    title: `${project.name} | DevCenter Projects`,
    description: project.description,
    openGraph: {
      title: `${project.name} | DevCenter`,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) notFound();

  const currentIndex = projectDetails.findIndex(
    (item) => item.slug === project.slug,
  );

  const nextProject =
    projectDetails[(currentIndex + 1) % projectDetails.length];

  return (
    <>
      <Navbar />
      <main className="bg-white text-neutral-900">
        {/* Project Hero */}
        <section className="px-5 pb-16 pt-32 sm:px-8 lg:px-16 lg:pb-24 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/projects"
              className="mb-12 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  {project.category}
                </p>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-6xl">
                  {project.name}
                  <span className="text-primary-600">.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-xl leading-relaxed text-neutral-500 sm:text-2xl">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:items-end">
                <p className="max-w-md text-base leading-8 text-neutral-600 lg:text-right">
                  {project.description}
                </p>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-primary-600"
                  >
                    Visit live project
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Cover */}
            <div className="relative mt-16 aspect-video overflow-hidden rounded-2xl bg-neutral-100 sm:rounded-3xl">
              <Image
                src={project.heroImage}
                alt={`${project.name} project preview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* Project Metadata */}
            <div className="mt-8 grid grid-cols-2 gap-8 border-b border-neutral-200 pb-8 sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Project
                </p>
                <p className="mt-2 font-medium">{project.name}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Category
                </p>
                <p className="mt-2 font-medium">{project.category}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Services
                </p>
                <p className="mt-2 font-medium">
                  {project.services.length} Services
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Year
                </p>
                <p className="mt-2 font-medium">{project.year}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                01 / Overview
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                About the project
              </h2>
            </div>

            <p className="text-xl leading-[1.8] text-neutral-600 sm:text-2xl">
              {project.overview}
            </p>
          </div>
        </section>

        {/* Challenge and Solution */}
        <section className="bg-neutral-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  02 / The challenge
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  The problem we set out to solve.
                </h2>
                <p className="mt-7 leading-8 text-neutral-600">
                  {project.challenge}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  03 / Our approach
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Turning ideas into solutions.
                </h2>
                <p className="mt-7 leading-8 text-neutral-600">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                04 / What we built
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Thoughtful features. Practical solutions.
              </h2>
              <p className="mt-6 leading-8 text-neutral-500">
                Every part of the experience was designed around the
                project&apos;s goals and the needs of its users.
              </p>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {project.features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-5 py-6">
                  <span className="text-sm text-neutral-400">0{index + 1}</span>
                  <h3 className="flex-1 text-lg font-medium sm:text-xl">
                    {feature}
                  </h3>
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-primary-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        {project.gallery.length > 0 && (
          <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                05 / Project visuals
              </p>
              <h2 className="mb-10 mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                A closer look.
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100"
                  >
                    <Image
                      src={image}
                      alt={`${project.name} preview ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technology and Outcomes */}
        <section className="bg-neutral-950 px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
                06 / Technology
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Built with the right technology.
              </h2>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/15 px-5 py-3 text-sm text-neutral-300 transition hover:border-primary-400 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
                07 / Project highlights
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                What this project delivers.
              </h2>

              <div className="mt-10 space-y-6">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-4">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-primary-400"
                    />
                    <p className="leading-7 text-neutral-300">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Explore more
            </p>

            <div className="mt-8 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm text-neutral-400">Next project</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
                  {nextProject.name}
                  <span className="text-primary-600">.</span>
                </h2>
                <p className="mt-4 max-w-xl text-neutral-500">
                  {nextProject.tagline}
                </p>
              </div>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex w-fit items-center gap-3 rounded-full border border-neutral-300 px-6 py-4 text-sm font-medium transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                View next project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-7xl rounded-3xl bg-primary-600 px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">
              Have a project in mind?
            </p>

            <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Let&apos;s create something meaningful together.
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
