
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  website: string;
  theme: string;
  slug: string;
}

export default function ProjectCard({
  name,
  category,
  title,
  description,
  technologies,
  image,
  website,
  theme,
  slug,
}: ProjectCardProps) {
  return (
    <article className="group">
      {/* PROJECT VISUAL */}
      <Link
        href={`/projects/${slug}`}
        className={`relative block overflow-hidden rounded-2xl ${theme} p-5 sm:p-8`}
      >
        <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-white shadow-xl shadow-neutral-900/10">
          <Image
            src={image}
            alt={`${name} project preview`}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="absolute right-8 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition group-hover:bg-neutral-950 group-hover:text-white">
          <ArrowUpRight size={19} />
        </div>
      </Link>

      {/* PROJECT DETAILS */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-500">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
          {name}
        </h3>

        <h4 className="mt-2 text-base font-medium text-neutral-800">
          {title}
        </h4>

        <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-neutral-100 pt-5">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-primary-500"
          >
            View Case Study <ArrowUpRight size={16} />
          </Link>

          {website !== "#" && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-950"
            >
              Live Project <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
