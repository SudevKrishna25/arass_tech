"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";

const CAMPAIGN_SCENES = [
  {
    act: "Act I",
    title: "The Architecture of Poise",
    statement: "THE BEAUTY OF RESTRAINT.",
    caption:
      "A silhouette designed not to attract fleeting gaze, but to command quiet presence. Tailored in heavy double-faced wool with natural horn buttons.",
    image: "/images/campaigns/campaign-act1.jpg",
    tag: "Paris Atelier",
  },
  {
    act: "Act II",
    title: "Shadows in Radical Velvet",
    statement: "DESIGNED TO BE REMEMBERED.",
    caption:
      "Nocturnal luxury rendered in dense oxblood velvet and structured corsetry. Designed to capture candlelight and reflect quiet drama.",
    image: "/images/campaigns/campaign-act2.jpg",
    tag: "Nocturne Étude",
  },
  {
    act: "Act III",
    title: "The Weightlessness of Motion",
    statement: "FORM MEETS FEELING.",
    caption:
      "Mulberry silk radzimir bias-cut to cascade along the contour of the human stride. Unlined for pure kinetic grace.",
    image: "/images/campaigns/campaign-act3.jpg",
    tag: "Haute Couture",
  },
];

export default function CampaignSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const expandFrameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      // 1. Expanding Camera Frame on Scroll
      gsap.fromTo(
        expandFrameRef.current,
        { scale: isMobile ? 0.94 : 0.88, borderRadius: isMobile ? "12px" : "24px" },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "power2.out",
          scrollTrigger: {
            trigger: expandFrameRef.current,
            start: "top 85%",
            end: "center center",
            scrub: true,
          },
        }
      );

      // 2. Parallax on Scene Imagery (Desktop / Tablet only for smooth 60fps mobile touch)
      if (!isMobile) {
        const sceneCards = gsap.utils.toArray<HTMLElement>(".campaign-scene");
        sceneCards.forEach((card) => {
          const img = card.querySelector(".campaign-img");
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -10 },
              {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="campaign"
      ref={containerRef}
      className="relative bg-[#21060D] text-[#FAF7F0] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-[#541326]/50 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#541326]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-[#541326]/60">
          <SectionLabel number="04" label="Campagne Mondiale" theme="dark" />
          <span className="hidden md:block text-xs uppercase tracking-[0.25em] text-[#D8C7AE]/60 font-sans">
            The World of ORRÉ • Visual Narrative
          </span>
        </div>

        {/* Hero Campaign Headline */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.38em] text-[#B49A70] font-sans font-medium mb-3 block">
            The World of ORRÉ
          </span>
          <h2
            ref={headlineRef}
            className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF7F0] leading-[1.05] tracking-tight"
          >
            AN ATTITUDE.
            <br />
            <span className="font-editorial italic text-[#D8C7AE]">
              AN ART FORM.
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 font-sans text-xs sm:text-base text-[#FAF7F0]/75 font-light leading-relaxed max-w-2xl">
            Captured under the cinematic studio lights of our Paris atelier, the
            campaign celebrates the quiet tension between monolithic tailoring
            and sensual fluid drape.
          </p>
        </div>

        {/* Expanding Hero Stage */}
        <div
          ref={expandFrameRef}
          className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden shadow-2xl bg-[#300914] border border-[#541326]/60 mb-16 sm:mb-28 will-change-transform"
        >
          <Image
            src="/images/campaigns/campaign-act1.jpg"
            alt="The World of ORRÉ Campaign Key Art"
            fill
            className="object-cover filter brightness-[0.8] contrast-[1.1]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/90 via-[#21060D]/30 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-4 text-xs text-[#FAF7F0]">
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#B49A70] font-sans">
                Campagne Principale
              </p>
              <h3 className="font-display text-xl sm:text-4xl text-[#F3EBDD]">
                THE BEAUTY OF RESTRAINT.
              </h3>
            </div>
            <p className="font-editorial italic text-xs sm:text-base text-[#D8C7AE]">
              Paris Atelier • Rue de la Paix
            </p>
          </div>
        </div>

        {/* Multi-Scene Cinematic Sequence */}
        <div className="space-y-16 sm:space-y-28 md:space-y-40">
          {CAMPAIGN_SCENES.map((scene, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={scene.act}
                className={`campaign-scene grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Frame (7 cols) */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden shadow-2xl bg-[#300914] border border-[#541326]/40">
                    <div className="campaign-img relative w-full h-[120%] -top-[10%]">
                      <Image
                        src={scene.image}
                        alt={scene.title}
                        fill
                        className="object-cover filter brightness-[0.9] contrast-[1.08]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-[#D8C7AE]/90">
                      <span>{scene.act}</span>
                      <span className="text-[#B49A70]">{scene.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Frame (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-sans text-[#B49A70] uppercase tracking-[0.3em] mb-2 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{scene.act} Narrative</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F3EBDD] font-light leading-snug mb-2">
                    {scene.title}
                  </h3>

                  <p className="font-editorial italic text-xl text-[#B49A70] mb-4">
                    “{scene.statement}”
                  </p>

                  <p className="font-sans text-sm sm:text-base text-[#FAF7F0]/75 font-light leading-relaxed mb-8">
                    {scene.caption}
                  </p>

                  <div className="pt-6 border-t border-[#541326]/60 flex items-center justify-between">
                    <Link
                      href="/collections"
                      data-cursor="LOOKS"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D8C7AE] hover:text-[#FAF7F0] font-sans transition-colors group"
                    >
                      <span>Explore Scene Looks</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B49A70] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <span className="text-[10px] uppercase tracking-widest text-[#FAF7F0]/40 font-sans">
                      ORRÉ ÉTUDE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
