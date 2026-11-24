
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  MapPin,
  Globe2,
  Heart,
  MessageCircle,
} from "lucide-react";
import { SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import Image from "next/image";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "AI & Automation", href: "/services/ai-solutions" },
  { name: "Custom Software", href: "/services/custom-software" },
  { name: "Cloud & Backend", href: "/services/cloud-backend" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/dev-center/",
    icon: SlSocialLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/devcenter.in?cnvx=NTA2eWJ0NXNpZ25x",
    icon: SlSocialInstagram,
  },
  // {
  //   name: "Facebook",
  //   href: "https://www.facebook.com/devcenter/",
  //   icon: SlSocialFacebook,
  // },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 lg:px-8 lg:pt-24">

        {/* CTA BANNER */}
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/10 pb-16 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
              Have a project in mind?
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-neutral-500">
                extraordinary together.
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-primary-500 hover:text-white md:self-auto"
          >
            Start a Conversation
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* FOOTER GRID */}
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
             <Image src="/logo.png" alt="Dev Center" width={40} height={40} />
              <span className="text-2xl font-bold tracking-tight">
                Dev Center<span className="text-primary-400">.</span>
              </span>
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-neutral-400">
              We build meaningful digital experiences through
              software development, modern technology and intelligent
              solutions.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm text-neutral-400">
              <Globe2 size={16} className="text-primary-400" />
              Building for a connected world.
            </div>

            {/* SOCIALS */}
            <div className="mt-8 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-primary-400 hover:bg-primary-600 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Our Services
            </h3>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="mt-7 space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get in Touch
            </h3>

            <div className="mt-7 space-y-6">

              <a
                href="mailto:devcenter.in@gmail.com"
                className="group flex items-start gap-3"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-primary-400" />

                <div>
                  <p className="text-xs text-neutral-500">Email</p>
                  <p className="mt-1 text-sm text-neutral-300 transition group-hover:text-white">
                    devcenter.in@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/918972982503"
                className="group flex items-start gap-3"
              >
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-primary-400" />

                <div>
                  <p className="text-xs text-neutral-500">WhatsApp</p>
                  <p className="mt-1 text-sm text-neutral-300 transition group-hover:text-white">
                    +91 89729 82503
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-400" />

                <div>
                  <p className="text-xs text-neutral-500">Location</p>
                  <p className="mt-1 text-sm text-neutral-300">
                    India · Worldwide
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-400 transition hover:text-white"
              >
                Discuss your project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Dev Center. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-neutral-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-xs text-neutral-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/refund-policy"
              className="text-xs text-neutral-500 transition hover:text-white"
            >
              Refund Policy
            </Link>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            Crafted with <Heart size={12} className="fill-primary-500 text-primary-500" /> by Dev Center
          </p>
        </div>
      </div>
    </footer>
  );
}
