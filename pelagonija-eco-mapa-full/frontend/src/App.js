import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { TopBanner } from "@/components/TopBanner";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { PhotoCard } from "@/components/PhotoCard";
import { Marquee } from "@/components/Marquee";
import { MapSection } from "@/components/MapSection";
import { HowTo } from "@/components/HowTo";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0D0C] font-body text-[#E6F4EE] antialiased">
      <div className="grain-overlay" aria-hidden="true" />
      <TopBanner />
      <NavBar />
      <main>
        <Hero />
        <section
          id="report-cards"
          className="relative z-10 mx-auto -mt-28 grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-8"
        >
          <LocationCard />
          <PhotoCard />
        </section>
        <Marquee />
        <MapSection />
        <HowTo />
        <FaqSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;
