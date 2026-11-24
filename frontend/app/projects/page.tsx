import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsListing from "@/components/projects/ProjectsListing";

export const metadata: Metadata = {
  title: "Our Projects | DevCenter",
  description:
    "Explore selected web development, mobile application, SaaS, and AI projects by DevCenter.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsListing />
      <Footer />
    </>
  );
}