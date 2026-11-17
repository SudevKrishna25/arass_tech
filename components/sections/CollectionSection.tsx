"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COLLECTIONS } from "@/data/collections";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CollectionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      // Calculate total horizontal scroll width
      const totalWidth = track.scrollWidth - window.innerWidth;

      const horizontalTween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth * 1.2}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const slideIndex = Math.min(
              COLLECTIONS.length,
              Math.floor(progress * (COLLECTIONS.length + 0.99)) + 1
            );
            setCurrentSlide(slideIndex);
          },
        },
      });

      return () => {
        horizontalTween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="collections"
      ref={containerRef}
      className="relative bg-[#21060D] text-[#FAF7F0] border-b border-[#541326]/50 overflow-hidden"
    >
      {/* DESKTOP PINNED HORIZONTAL RUNWAY */}
      <div className="hidden lg:block h-screen w-full overflow-hidden relative">
        {/* Pinned Top Fixed Header */}
        <div className="absolute top-8 left-8 right-8 z-30 flex items-center justify-between pb-4 border-b border-[#541326]/60">
          <SectionLabel number="03" label="Les Collections" theme="dark" />

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-[#D8C7AE]/80 font-sans">
            <span className="font-editorial italic tracking-normal text-sm text-[#B49A70]">
              Horizontal Runway
            </span>
            <span>
              0{currentSlide} / 0{COLLECTIONS.length}
            </span>
          </div>

          <Link
            href="/collections"
            data-cursor="CATALOG"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FAF7F0] hover:text-[#B49A70] font-sans transition-colors"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex h-full items-center pl-8 pr-24 pt-24 pb-16 will-change-transform"
        >
          {/* Opening Statement Slide */}
          <div className="w-[45vw] shrink-0 pr-16 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B49A70] font-sans block mb-3">
              Automne-Hiver Étude
            </span>
            <h2 className="font-display text-6xl xl:text-8xl font-light text-[#FAF7F0] leading-none mb-6">
              THE
              <br />
              <span className="font-editorial italic text-[#D8C7AE]">
                COLLECTION.
              </span>
            </h2>
            <p className="font-editorial italic text-2xl text-[#FAF7F0]/85 mb-6 max-w-md">
              “A curated expression of style and individuality.”
            </p>
            <p className="font-sans text-xs text-[#FAF7F0]/65 leading-relaxed font-light max-w-sm mb-8">
              Scroll downward to advance horizontally through the seasonal
              volumes, sculpted outerwear, and kinetic evening studies.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B49A70]">
              <span>Scroll to navigate runway</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* 4 Collection Runway Panels */}
          {COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              className="w-[70vw] xl:w-[65vw] h-[78vh] shrink-0 px-8 flex items-center justify-between gap-12 border-l border-[#541326]/40"
            >
              {/* Left Details */}
              <div className="w-1/2 flex flex-col justify-between h-full py-4 pr-6">
                <div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#B49A70] font-sans mb-3">
                    <span>Vol. 0{idx + 1}</span>
                    <span>•</span>
                    <span>{col.season}</span>
                  </div>

                  <h3 className="font-display text-4xl xl:text-6xl text-[#FAF7F0] font-light leading-tight mb-2">
                    {col.title}
                  </h3>

                  <p className="font-editorial italic text-lg xl:text-xl text-[#D8C7AE] mb-6">
                    {col.subtitle}
                  </p>

                  <p className="font-sans text-xs xl:text-sm text-[#FAF7F0]/75 leading-relaxed font-light mb-8">
                    {col.description}
                  </p>

                  <blockquote className="border-l border-[#B49A70] pl-4 py-1 italic font-editorial text-base text-[#D8C7AE] mb-8">
                    “{col.quote}”
                  </blockquote>
                </div>

                <div>
                  {/* Palette and materials */}
                  <div className="flex items-center gap-6 mb-6 pt-4 border-t border-[#541326]/60">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#FAF7F0]/50 block mb-1">
                        Palette
                      </span>
                      <div className="flex gap-1.5">
                        {col.palette.map((c, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-white/20"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#FAF7F0]/50 block mb-1">
                        Materials
                      </span>
                      <span className="text-xs font-sans text-[#FAF7F0]/80">
                        {col.materials[0]}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/collections#${col.slug}`}
                    data-cursor="DISCOVER"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FAF7F0] bg-[#541326] hover:bg-[#762D42] px-6 py-3 font-medium font-sans transition-colors"
                  >
                    <span>Explore Édition Looks</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Large Campaign Visual */}
              <div className="w-1/2 h-full relative overflow-hidden bg-[#300914] shadow-2xl border border-[#541326]/50">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-sans text-[#FAF7F0]">
                  <span className="text-[10px] uppercase tracking-widest text-[#B49A70]">
                    {col.looksCount} Curated Looks
                  </span>
                  <span className="font-editorial italic">Atelier Parisien</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE TOUCH-FRIENDLY RUNWAY */}
      <div className="lg:hidden py-16 px-4 sm:px-6 space-y-12">
        <div className="border-b border-[#541326]/50 pb-4">
          <SectionLabel number="03" label="Les Collections" theme="dark" />
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#FAF7F0] mt-2">
            THE COLLECTION
          </h2>
          <p className="font-editorial italic text-lg text-[#D8C7AE] mt-1">
            A curated expression of style and individuality.
          </p>
        </div>

        <div className="space-y-12">
          {COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              className="space-y-4 border-b border-[#541326]/40 pb-10"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-xl bg-[#300914]">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F0]/90 text-[#21060D] text-[9px] uppercase tracking-widest px-2.5 py-1">
                  0{idx + 1} • {col.season}
                </div>
              </div>

              <h3 className="font-display text-3xl text-[#FAF7F0]">{col.title}</h3>
              <p className="font-editorial italic text-base text-[#D8C7AE]">
                “{col.quote}”
              </p>
              <p className="font-sans text-xs text-[#FAF7F0]/70 leading-relaxed font-light">
                {col.description}
              </p>

              <Link
                href={`/collections#${col.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B49A70] pt-2"
              >
                <span>View Looks ({col.looksCount})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
