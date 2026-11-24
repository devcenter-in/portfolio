import AboutOverview from "@/components/home/AboutOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechnologyStack from "@/components/home/TechnologyStack";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <FeaturedProjects />
        <AboutOverview />
        <TechnologyStack />
      </main>
      <Footer />
    </>
  );
}
