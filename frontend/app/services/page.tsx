import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesListing from "@/components/services/ServicesListing";

export const metadata: Metadata = {
  title: "Our Services | DevCenter",
  description:
    "Explore DevCenter's web development, mobile app development, AI solutions, and cloud and backend services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesListing />
      <Footer />
    </>
  );
}