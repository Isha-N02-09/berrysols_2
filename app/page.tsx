import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SimpleFooter from "@/components/Footer";
import TrustBrand from "@/components/TrustBrand";
import ImpactStats from "@/components/ImpactStats";
import ContactFlow from "@/components/ContactFlow";
import Clients from "@/components/Clients";
import Portfolio from "@/components/portfolio";
import Services from "@/components/Services";
import BerryConcept from "@/components/BerryConcept";
import ProjectStrip from "@/components/ProjectStrip";
import ScrollReveal from "@/components/ScrollReveal";
import Industries from "@/components/Industries";
import Insights from "@/components/Insights";
export default function Home() {
  return (
    <>
      {/* <Loader />  */}
      <main id="top" className="min-h-screen w-full bg-white">
        <Navbar />
        <Hero />
        <ScrollReveal className="scroll-reveal--trust">
          <TrustBrand />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--stats">
          <ImpactStats />
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
        <ScrollReveal className="scroll-reveal--services">
          <Services />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--concept">
          <BerryConcept />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--insights">
          <Insights />
        </ScrollReveal>
        <ScrollReveal className="scroll-reveal--clients">
          <Clients />
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
