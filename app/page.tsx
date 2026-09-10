import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import SimpleFooter from "@/components/home/Footer";
import TrustBrand from "@/components/home/TrustBrand";
import ContactFlow from "@/components/home/ContactFlow";
import Clients from "@/components/home/Clients";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/Services";
import BerryConcept from "@/components/home/BerryConcept";
import ProjectStrip from "@/components/home/ProjectStrip";
import ScrollReveal from "@/components/home/ScrollReveal";
import Industries from "@/components/home/Industries";
import Insights from "@/components/home/Insights";
import AboutUs from "@/components/home/AboutUsSection";
import ImpactStats from "@/components/home/ImpactStats";
import CapabilityWave from "@/components/home/CapabilityWave";

export default function Home() {
  return (
    <>
      <main id="top" className="min-h-screen w-full bg-white">
        <Navbar />
        <Hero />
        <ScrollReveal className="scroll-reveal--trust">
          <TrustBrand />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--portfolio">
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--industries">
          <Industries />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--strip">
          <ProjectStrip />
        </ScrollReveal>
        <CapabilityWave />
        <Services />
        <ScrollReveal className="scroll-reveal--concept">
          <BerryConcept />
        </ScrollReveal>
        <CapabilityWave />
        <ScrollReveal className="scroll-reveal--insights">
          <Insights />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--clients">
          <Clients />
        </ScrollReveal>
        <AboutUs />
        <ScrollReveal className="scroll-reveal--stats">
          <ImpactStats />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--contact">
          <ContactFlow />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--footer">
          <SimpleFooter />
        </ScrollReveal>
      </main>
    </>
  );
}
