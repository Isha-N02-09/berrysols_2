import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffdf9] text-[#171410]">
      <Navbar />
      <div className="pt-[74px]">{children}</div>
      <SimpleFooter />
    </div>
  );
}
