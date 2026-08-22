import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SimpleFooter from "@/components/Footer";
import TrustBrand from "@/components/TrustBrand";
import ContactFlow from "@/components/ContactFlow";
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <TrustBrand />
      <ContactFlow />
      <SimpleFooter />
    </main>
  );
}