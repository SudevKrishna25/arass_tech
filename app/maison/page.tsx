import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/animation/SmoothScroll";
import SectionLabel from "@/components/ui/SectionLabel";

export default function MaisonPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#FAF7F0] text-[#211719] pt-32 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#762D42] hover:text-[#541326] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Flagship</span>
            </Link>
          </div>

          <SectionLabel number="MAISON" label="About ORRÉ" />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#21060D] mt-3 mb-6">
            A DISTINCT
            <br />
            <span className="font-editorial italic text-[#541326]">
              POINT OF VIEW.
            </span>
          </h1>

          <p className="font-editorial text-2xl sm:text-3xl text-[#762D42] max-w-3xl leading-relaxed mb-6 font-normal">
            “Elegance, without excess. Created with intention. Designed to
            transcend seasons. Defined by detail.”
          </p>
        </div>

        {/* Hero Atelier Visual */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden shadow-2xl bg-[#21060D] border border-[#541326]/30">
            <Image
              src="/images/hero/maison-atelier.jpg"
              alt="Maison ORRÉ Salon in Paris"
              fill
              className="object-cover filter contrast-[1.05]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end text-xs text-[#FAF7F0]">
              <div>
                <p className="font-display text-lg sm:text-xl text-[#F3EBDD]">
                  The Paris Salon & Atelier
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#B49A70] mt-0.5">
                  14 Rue de la Paix, 75001 Paris
                </p>
              </div>
              <p className="font-editorial italic text-sm text-[#D8C7AE] mt-2 sm:mt-0">
                A sanctuary dedicated to quiet perfection.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Chapters */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Chapter I: The Founding Ethos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#541326]/20 pt-12">
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#762D42] font-sans font-medium block mb-1">
                Chapitre I
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#21060D]">
                The Rejection of the Ephemeral
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base font-sans text-[#211719]/80 font-light leading-relaxed">
              <p>
                The contemporary fashion landscape has largely succumbed to the
                tyranny of the algorithm—a ceaseless churn of viral micro-trends
                designed to ignite instant desire and disappear into landfill
                months later.
              </p>
              <p>
                ORRÉ exists as an intentional counter-movement. We believe that
                garments should not be disposed of with the changing of the
                seasons. A great overcoat or an impeccably draped column gown
                must feel as sovereign, modern, and emotionally resonant twenty
                years from now as it did the morning it left our cutting tables.
              </p>
              <p className="font-editorial italic text-xl text-[#541326] pt-2">
                “When you design for eternity, you cease to worry about next
                Tuesday.”
              </p>
            </div>
          </div>

          {/* Chapter II: The Chromatic Signature */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#541326]/20 pt-12">
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#762D42] font-sans font-medium block mb-1">
                Chapitre II
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#21060D]">
                Royal Burgundy & Warm Cream
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base font-sans text-[#211719]/80 font-light leading-relaxed">
              <p>
                Every maison possesses an indelible chromatic vocabulary. For
                ORRÉ, that identity is anchored in the majestic resonance of
                deep royal burgundy, oxblood, and warm cream.
              </p>
              <p>
                Burgundy is not passive. It commands the room without shouting.
                It possesses the historic authority of ceremonial cloaks and the
                sensual warmth of rich viticulture. When juxtaposed with soft
                ivory and muted champagne, it forms a visual environment of
                sublime balance—powerful yet profoundly welcoming.
              </p>

              {/* Swatch Showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-3 bg-[#FAF7F0] border border-[#D8C7AE]/60">
                  <div className="w-full h-12 bg-[#541326] mb-2" />
                  <p className="text-[10px] font-medium text-[#211719]">Royal Burgundy</p>
                  <p className="text-[9px] text-[#211719]/50 font-mono">#541326</p>
                </div>
                <div className="p-3 bg-[#FAF7F0] border border-[#D8C7AE]/60">
                  <div className="w-full h-12 bg-[#300914] mb-2" />
                  <p className="text-[10px] font-medium text-[#211719]">Deep Oxblood</p>
                  <p className="text-[9px] text-[#211719]/50 font-mono">#300914</p>
                </div>
                <div className="p-3 bg-[#FAF7F0] border border-[#D8C7AE]/60">
                  <div className="w-full h-12 bg-[#F3EBDD] border border-black/10 mb-2" />
                  <p className="text-[10px] font-medium text-[#211719]">Warm Cream</p>
                  <p className="text-[9px] text-[#211719]/50 font-mono">#F3EBDD</p>
                </div>
                <div className="p-3 bg-[#FAF7F0] border border-[#D8C7AE]/60">
                  <div className="w-full h-12 bg-[#B49A70] mb-2" />
                  <p className="text-[10px] font-medium text-[#211719]">Soft Gold Accent</p>
                  <p className="text-[9px] text-[#211719]/50 font-mono">#B49A70</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter III: The Salons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#541326]/20 pt-12">
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#762D42] font-sans font-medium block mb-1">
                Chapitre III
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#21060D]">
                Private Salons & Fittings
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-sm sm:text-base font-sans text-[#211719]/80 font-light leading-relaxed">
                We operate by private appointment in three global capitals. Each
                salon provides confidential consultation, bespoke alterations,
                and direct access to our master cutters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="p-5 bg-[#F3EBDD] border border-[#D8C7AE]">
                  <p className="text-[10px] uppercase tracking-widest text-[#541326] font-medium mb-1">
                    Paris
                  </p>
                  <p className="font-display text-lg text-[#21060D]">
                    14 Rue de la Paix
                  </p>
                  <p className="text-xs text-[#211719]/60 font-sans mt-1">
                    Atelier Principal & Archives
                  </p>
                </div>

                <div className="p-5 bg-[#F3EBDD] border border-[#D8C7AE]">
                  <p className="text-[10px] uppercase tracking-widest text-[#541326] font-medium mb-1">
                    London
                  </p>
                  <p className="font-display text-lg text-[#21060D]">
                    28 Old Bond Street
                  </p>
                  <p className="text-xs text-[#211719]/60 font-sans mt-1">
                    Mayfair Salon & Fitting Suites
                  </p>
                </div>

                <div className="p-5 bg-[#F3EBDD] border border-[#D8C7AE]">
                  <p className="text-[10px] uppercase tracking-widest text-[#541326] font-medium mb-1">
                    New York
                  </p>
                  <p className="font-display text-lg text-[#21060D]">
                    720 Madison Avenue
                  </p>
                  <p className="text-xs text-[#211719]/60 font-sans mt-1">
                    Upper East Side Private Suite
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#541326] text-[#FAF7F0] hover:bg-[#300914] text-xs uppercase tracking-[0.25em] font-sans font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#B49A70]" />
                  <span>Request Private Salon Appointment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
