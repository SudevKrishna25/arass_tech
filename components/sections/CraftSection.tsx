"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const CRAFT_PILLARS = [
  {
    id: "fabric",
    title: "Double-Faced Wool & Silk Radzimir",
    frenchTitle: "La Matière Noble",
    subtitle: "Tactility & Density",
    description:
      "Two independent fabric faces woven simultaneously and split apart by hand along raw seam margins to create seamless, hem-less exterior finishes with monumental structural drape.",
    image: "/images/details/fabric-wool.jpg",
    metric: "480 GSM",
    metricLabel: "Fabric Weight",
    annotation: "Zero external stitch lines along front edge margins",
  },
  {
    id: "stitching",
    title: "Hand-Pick Stitching & French Seams",
    frenchTitle: "Le Point Sellier",
    subtitle: "Seam Architecture",
    description:
      "Every lapel edge and pocket welt is stabilized with microscopic hand-pick stitching. Seam allowances inside jackets and trousers are bound in silk bias tape rather than overlocked.",
    image: "/images/details/hand-stitch.jpg",
    metric: "18 Stitches/Inch",
    metricLabel: "Precision Density",
    annotation: "Microscopic hand-turned stitches prevent edge rolling",
  },
  {
    id: "canvas",
    title: "Floating Horsehair Internal Canvas",
    frenchTitle: "L'Entoilage Volant",
    subtitle: "Internal Soul",
    description:
      "Instead of modern heat-fused plastic adhesives, our jackets utilize floating natural horsehair canvases stitched loosely by hand to allow the garment to mold naturally to the wearer's body.",
    image: "/images/details/canvas.jpg",
    metric: "100% Floating",
    metricLabel: "Canvas Architecture",
    annotation: "Natural mold conforms to body heat over decades",
  },
  {
    id: "hardware",
    title: "Natural Water Buffalo Horn & Brushed Gold",
    frenchTitle: "La Quincaillerie Brossée",
    subtitle: "Hardware & Closures",
    description:
      "Buttons are individually turned from sustainable buffalo horn with matte-polished centers and laser-engraved cross-stitch anchors. Metals are finished in custom 24k brushed soft gold.",
    image: "/images/details/hardware.jpg",
    metric: "24-Karat",
    metricLabel: "Brushed Satin Gold",
    annotation: "Hand-lacquered beveling with cross-lock threading",
  },
];

export default function CraftSection() {
  const [activePillar, setActivePillar] = useState(CRAFT_PILLARS[0]);

  return (
    <section
      id="craft"
      className="relative bg-[#21060D] text-[#FAF7F0] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-[#541326]/50 overflow-hidden"
    >
      {/* Background Burgundy Ambient Accent */}
      <div className="absolute -left-20 top-1/3 w-96 h-96 bg-[#541326]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-[#541326]/60">
          <div>
            <SectionLabel number="05" label="Savoir-Faire & Matières" theme="dark" />
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#FAF7F0] mt-3">
              BEAUTY LIVES IN
              <br />
              <span className="font-editorial italic text-[#D8C7AE]">
                THE DETAILS.
              </span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 font-sans text-xs sm:text-sm text-[#FAF7F0]/70 max-w-md font-light leading-relaxed">
            Quiet opulence is not discovered in outward adornment, but in the
            tactile intimacy of internal construction, hand-pressed canvas, and
            impeccable seams.
          </p>
        </div>

        {/* Interactive Craft Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B49A70] font-sans font-medium block mb-2">
              Select Pillar to Inspect Savoir-Faire
            </span>

            {CRAFT_PILLARS.map((pillar) => {
              const isActive = activePillar.id === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  data-cursor="INSPECT"
                  className={`p-6 border cursor-pointer transition-all duration-300 relative ${
                    isActive
                      ? "bg-[#300914] border-[#B49A70] shadow-xl translate-x-2"
                      : "bg-[#21060D]/50 border-[#541326]/40 hover:border-[#541326] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#D8C7AE]/70 mb-1 font-sans">
                    <span>{pillar.subtitle}</span>
                    {isActive && (
                      <span className="flex items-center gap-1 text-[#B49A70]">
                        <Sparkles className="w-3 h-3" />
                        <span>Active Spec</span>
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-display text-xl sm:text-2xl transition-colors ${
                      isActive ? "text-[#FAF7F0]" : "text-[#FAF7F0]/80"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="font-editorial italic text-xs text-[#B49A70] mt-0.5">
                    {pillar.frenchTitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Definition Inspection Stage (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#300914] border border-[#541326] shadow-2xl">
              <Image
                key={activePillar.id}
                src={activePillar.image}
                alt={activePillar.title}
                fill
                className="object-cover filter brightness-[0.88] contrast-[1.1] transition-all duration-700 animate-fadeIn"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21060D] via-[#21060D]/40 to-transparent" />

              {/* Technical Annotation Line Overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#21060D]/80 backdrop-blur-xs text-[10px] uppercase tracking-widest text-[#D8C7AE] px-3 py-1.5 border border-[#B49A70]/40">
                <Compass className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>{activePillar.annotation}</span>
              </div>

              {/* Spotlight Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="max-w-md">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B49A70] font-sans block mb-1">
                    Atelier Specification
                  </span>
                  <h4 className="font-display text-2xl text-[#FAF7F0] font-normal mb-2">
                    {activePillar.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#FAF7F0]/80 leading-relaxed font-light">
                    {activePillar.description}
                  </p>
                </div>

                <div className="text-right sm:text-right shrink-0 p-3.5 bg-[#21060D]/85 backdrop-blur-xs border border-[#541326]/60">
                  <div className="font-display text-2xl sm:text-3xl text-[#B49A70]">
                    {activePillar.metric}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-[#FAF7F0]/50 font-sans">
                    {activePillar.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
