import IntroLoader from "@/components/animation/IntroLoader";
import SmoothScroll from "@/components/animation/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CollectionSection from "@/components/sections/CollectionSection";
import CampaignSection from "@/components/sections/CampaignSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import CraftSection from "@/components/sections/CraftSection";
import MaisonSection from "@/components/sections/MaisonSection";
import JournalSection from "@/components/sections/JournalSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <IntroLoader />
      <ScrollProgress />
      <Navbar />

      <main className="min-h-screen bg-[#FAF7F0] text-[#211719] relative">
        {/* 1. Cinematic Hero Runway */}
        <HeroSection />

        {/* 2. Pinned Philosophy Storytelling: FORM • FEELING • FOREVER */}
        <PhilosophySection />

        {/* 3. Pinned Horizontal Collection Runway */}
        <CollectionSection />

        {/* 4. Full-Screen Campaign Film & Expanding Stage */}
        <CampaignSection />

        {/* 5. Editorial Product Showcase & Inspection Modal */}
        <ProductShowcase />

        {/* 6. Tactile Craft & Details Exploration */}
        <CraftSection />

        {/* 7. The Maison — About ORRÉ */}
        <MaisonSection />

        {/* 8. Editorial Journal / Magazine Monographs */}
        <JournalSection />

        {/* 9. Newsletter Experience */}
        <NewsletterSection />
      </main>

      {/* Monumental Closing Footer */}
      <Footer />
    </SmoothScroll>
  );
}
