
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Globe2,
  MessageCircle,
} from "lucide-react";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";


import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "AI Solutions & Automation",
  "Cloud & Backend Solutions",
  "UI/UX Design",
  "Other",
];

const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
  "Not sure yet",
];

const timelines = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10";

const labelClass =
  "mb-2 block text-sm font-semibold text-neutral-800";

export default function ContactInquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#FAFAFA] px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Let&apos;s work together
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-neutral-400">
              Let&apos;s make it happen.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
            Tell us about your project, business goals or technical
            challenges. We&apos;ll get back to you to discuss how we can help.
          </p>
        </div>

        {/* CONTACT LAYOUT */}
        <div className="grid overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.5fr]">

          {/* LEFT CONTACT PANEL */}
          <div className="relative overflow-hidden bg-neutral-950 p-8 text-white sm:p-10 lg:p-12">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-600/20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-400">
                Get in touch
              </p>

              <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                Let&apos;s discuss your next big idea.
              </h3>

              <p className="mt-5 text-sm leading-7 text-neutral-400">
                Whether you&apos;re a startup, growing business or established
                organization, we&apos;re ready to explore how technology can
                move your business forward.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-12 space-y-7">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-400">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">
                      Email us
                    </p>
                    <a
                      href="mailto:devcenter.in@gmail.com"
                      className="mt-1 block text-sm font-medium hover:text-primary-400"
                    >
                      devcenter.in@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-400">
                    <MessageCircle size={20}/>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">
                      Whatsapp us
                    </p>
                    <a
                      href="https://wa.me/918972982503"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium hover:text-primary-400"
                    >
                      +91 89729 82503
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-400">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">
                      Working worldwide
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      India · Serving Global Clients
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-400">
                    <Globe2 size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">
                      Website
                    </p>
                    <a
                      href="https://devcenter.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium hover:text-primary-400"
                    >
                      devcenter.in
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-14 border-t border-white/10 pt-8">
                <p className="text-xs font-medium text-neutral-400">
                  CONNECT WITH US
                </p>

                <div className="mt-5 flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/dev-center/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-neutral-950"
                  >
                    <SlSocialLinkedin size={17} />
                  </a>

                  <a
                    href="https://www.instagram.com/devcenter.in?cnvx=NTA2eWJ0NXNpZ25x"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-neutral-950"
                  >
                    <SlSocialInstagram size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT INQUIRY FORM */}
          <div className="p-7 sm:p-10 lg:p-12">

            <div className="mb-9">
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                Tell us about your project
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                Fill out the form below and our team will get in touch.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-112.5 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Inquiry received!
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-500">
                  Thank you for reaching out to DevCenter. We&apos;ll review
                  your project requirements and get back to you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >

                {/* NAME & EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* COMPANY */}
                <div>
                  <label className={labelClass}>
                    Company / Organization
                  </label>
                  <input
                    {...register("company")}
                    placeholder="Your company name (optional)"
                    className={inputClass}
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className={labelClass}>
                    What service are you looking for? *
                  </label>

                  <select
                    {...register("service")}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* BUDGET & TIMELINE */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Estimated Budget *
                    </label>

                    <select
                      {...register("budget")}
                      className={inputClass}
                    >
                      <option value="">Select budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>

                    {errors.budget && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Project Timeline *
                    </label>

                    <select
                      {...register("timeline")}
                      className={inputClass}
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>

                    {errors.timeline && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className={labelClass}>
                    Tell us about your project *
                  </label>

                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Describe your idea, requirements, goals or challenges..."
                    className={`${inputClass} resize-none`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* SERVER ERROR */}
                {serverError && (
                  <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                    {serverError}
                  </p>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending inquiry...
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <Send size={17} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-neutral-400">
                  By submitting this form, you agree to be contacted
                  regarding your project inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
