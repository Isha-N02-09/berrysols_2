import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SimpleFooter from "@/components/Footer";
import TrustBrand from "@/components/TrustBrand";
import ImpactStats from "@/components/ImpactStats";
import ContactFlow from "@/components/ContactFlow";
import Loader from "@/components/Loader";
import Clients from "@/components/Clients";
import Portfolio from "@/components/portfolio";
import Services from "@/components/Services";
import BerryConcept from "@/components/BerryConcept";
import ProjectStrip from "@/components/ProjectStrip";
export default function Home() {
  return (
    <>
      <Loader />

      <main className="min-h-screen w-full bg-white">
        <Navbar />
        <Hero />
        <TrustBrand />
        <ImpactStats />
        <Portfolio />
        <ProjectStrip />
        <Services />
        <Clients />
        <BerryConcept />
        <ContactFlow />
        <SimpleFooter />
      </main>
    </>
  );
}