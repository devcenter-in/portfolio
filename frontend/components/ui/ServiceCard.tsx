import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  services: string[];
  technologies: string[];
}

export default function ServiceCard({
  id,
  title,
  description,
  icon: Icon,
  href,
  services,
  technologies,
}: ServiceCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-950/5 sm:p-9">
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary-50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* HEADER */}
      <div className="relative flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
          <Icon size={27} strokeWidth={1.6} />
        </div>

        <span className="text-sm font-medium text-neutral-400">{id}</span>
      </div>

      {/* CONTENT */}
      <div className="relative mt-9">
        <h3 className="max-w-sm text-2xl font-semibold tracking-tight text-neutral-950">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-500">{description}</p>
      </div>

      {/* SERVICE LIST */}
      <div className="relative mt-7 space-y-3">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3 text-sm text-neutral-600"
          >
            <Check size={15} className="shrink-0 text-primary-600" />
            {service}
          </div>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <div className="relative my-8 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-500"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="relative mt-auto border-t border-neutral-100 pt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-primary-600"
        >
          Explore Service
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}