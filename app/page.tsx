import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NorthStarSection } from "@/components/NorthStarSection";
import { FounderSection } from "@/components/founder";
import { SolutionSection } from "@/components/SolutionSection";
import { MethodologySection } from "@/components/MethodologySection";
import { EcosystemSection } from "@/components/EcosystemSection";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white overflow-x-hidden selection:bg-white/20 selection:text-white bg-[#020d14]">
      <div className="relative z-10 font-sans">
        <Header />
        <HeroSection />
        <NorthStarSection />
        <FounderSection />
        <SolutionSection />
        <MethodologySection />
        <EcosystemSection />
      </div>
    </main>
  );
}
