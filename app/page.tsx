import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SimpleFooter from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <SimpleFooter />
    </main>
  );
}
