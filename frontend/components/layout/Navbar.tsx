"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  Cloud,
  Code2,
  Menu,
  Smartphone,
  X,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Websites and scalable applications",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    title: "AI Solutions",
    description: "Intelligent applications and automation",
    icon: BrainCircuit,
    href: "/services/ai-solutions",
  },
  {
    title: "Mobile Applications",
    description: "Modern iOS and Android apps",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    title: "Cloud & Backend",
    description: "APIs and scalable infrastructure",
    icon: Cloud,
    href: "/services/cloud-backend",
  },
];
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur-xl px-5 lg:px-8">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* LOGO */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-full.png"
              width={250}
              height={100}
              alt="Dev Center Logo"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-700 transition hover:text-primary-500"
          >
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 py-4 text-sm font-medium text-neutral-700 hover:text-primary-600"
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-140 -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="group/item flex gap-3 rounded-xl p-4 transition hover:bg-neutral-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-neutral-900">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-neutral-500">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 border-t border-neutral-100 pt-4">
                  <Link
                    href="/services"
                    className="flex items-center justify-between text-sm font-semibold text-primary-600"
                  >
                    Explore all services
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-sm font-medium text-neutral-700 hover:text-primary-600"
          >
            About Us
          </Link>

          <Link
            href="/projects"
            className="text-sm font-medium text-neutral-700 hover:text-primary-600"
          >
            Our Work
          </Link>

          <Link
            href="/industries"
            className="text-sm font-medium text-neutral-700 hover:text-primary-600"
          >
            Industries
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-medium text-neutral-700 hover:text-primary-600"
          >
            Blogs
          </Link>
        </div>

        {/* CONTACT BUTTON */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-primary-500/90 md:flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-neutral-200 p-2 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="border-t border-neutral-100 bg-white px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between"
              >
                Services
                <ChevronDown size={17} />
              </button>

              {servicesOpen && (
                <div className="mt-4 flex flex-col gap-4 border-l-2 border-primary-100 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-neutral-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/projects" onClick={() => setMobileOpen(false)}>
              Our Work
            </Link>
            <Link href="/industries" onClick={() => setMobileOpen(false)}>
              Industries
            </Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)}>
              Blogs
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
            >
              Let&apos;s Talk <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;