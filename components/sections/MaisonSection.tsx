"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function MaisonSection() {
  return (
    <section
      id="maison"
      className="relative bg-[#FAF7F0] text-[#211719] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-[#D8C7AE]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-[#541326]/20">
          <div>
            <SectionLabel number="06" label="La Maison ORRÉ" />
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#21060D] mt-3">
              A DISTINCT
              <br />
              <span className="font-editorial italic text-[#541326]">
                POINT OF VIEW.
              </span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 font-sans text-xs sm:text-sm text-[#211719]/70 max-w-md font-light leading-relaxed">
            Founded on the conviction that true elegance requires no noise. We
            create garments that exist as architecture for the individual.
          </p>
        </div>

        {/* Maison Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Atmospheric Atelier Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-[#300914]">
              <Image
                src="/images/hero/maison-atelier.jpg"
                alt="ORRÉ Maison Atelier in Paris"
                fill
                className="object-cover filter contrast-[1.05]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-[#FAF7F0] flex justify-between">
                <span className="tracking-widest uppercase text-[10px] text-[#B49A70]">
                  Atelier Paris
                </span>
                <span className="font-editorial italic">Rue de la Paix</span>
              </div>
            </div>
            {/* Outline Box Accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border border-[#541326]/30 -z-0 pointer-events-none" />
          </div>

          {/* Right: Core Values and Design Ethos (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#541326] font-sans font-medium block mb-2">
                Ethos & Integrity
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-[#21060D] font-light leading-snug">
                Designed to Transcend Seasons.
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#211719]/80 leading-relaxed font-light">
              At ORRÉ, collections are treated not as commercial quarters, but
              as ongoing design études. Each piece is designed to converse
              effortlessly with garments produced five years ago or five years
              hence.
            </p>

            {/* Core Values 3-column breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D8C7AE]/60">
              <div>
                <span className="font-editorial italic text-2xl text-[#541326] block">
                  I. Restraint
                </span>
                <h4 className="font-display text-sm text-[#21060D] mt-1 mb-1 font-medium">
                  Quiet Opulence
                </h4>
                <p className="font-sans text-xs text-[#211719]/65 leading-relaxed">
                  Rejecting overt ornamentation in favor of perfect line and
                  drape.
                </p>
              </div>

              <div>
                <span className="font-editorial italic text-2xl text-[#541326] block">
                  II. Longevity
                </span>
                <h4 className="font-display text-sm text-[#21060D] mt-1 mb-1 font-medium">
                  Enduring Form
                </h4>
                <p className="font-sans text-xs text-[#211719]/65 leading-relaxed">
                  Materials selected for structural integrity over decades of
                  wear.
                </p>
              </div>

              <div>
                <span className="font-editorial italic text-2xl text-[#541326] block">
                  III. Intention
                </span>
                <h4 className="font-display text-sm text-[#21060D] mt-1 mb-1 font-medium">
                  Considered Cut
                </h4>
                <p className="font-sans text-xs text-[#211719]/65 leading-relaxed">
                  Every seam, lapel angle, and button position serves human
                  dignity.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/maison"
                data-cursor="MAISON"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#541326] hover:text-[#21060D] font-medium font-sans group border-b border-[#541326]/40 pb-1 hover:border-[#541326] transition-colors"
              >
                <span>Read Full Maison Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
