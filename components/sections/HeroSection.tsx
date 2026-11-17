"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/animation/MagneticButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Staggered Entrance Timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        imageRef.current,
        { scale: 1.12, opacity: 0.8 },
        { scale: 1.0, opacity: 1, duration: 1.8, ease: "power2.out" }
      )
        .fromTo(
          metadataRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=1.2"
        )
        .fromTo(
          headlineRef.current?.querySelectorAll(".line-span") || [],
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.18,
            ease: "power4.out",
          },
          "-=1.0"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        );

      // 2. Cinematic Scroll Choreography (Scrub-based)
      // Slow camera zoom from 1.0 to 1.25 as user scrolls
      gsap.to(imageRef.current, {
        scale: 1.25,
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Title moves upward and gradually dissolves
      gsap.to(headlineRef.current, {
        yPercent: -35,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });

      // Subtext fades into background
      gsap.to(subtextRef.current, {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top",
          end: "60% top",
          scrub: true,
        },
      });

      // Overlay darkens slightly to transition smoothly to next section
      gsap.to(overlayRef.current, {
        opacity: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#21060D] text-[#FAF7F0] select-none pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      aria-label="Hero Runway"
    >
      {/* Background Cinematic Image with Layered Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={imageRef}
          className="relative w-full h-[120%] -top-[10%] left-0 will-change-transform"
        >
          <Image
            src="/images/hero/hero-main.jpg"
            alt="ORRÉ Contemporary Luxury Haute Couture Campaign"
            fill
            priority
            className="object-cover object-top filter brightness-[0.72] contrast-[1.08] saturate-[0.95]"
            sizes="100vw"
          />
        </div>

        {/* Deep Burgundy & Oxblood Vignette */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-[#21060D] via-transparent to-[#21060D]/70 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#21060D]/90 via-[#21060D]/40 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#541326]/20 to-[#21060D]/75" />
      </div>

      {/* Top Editorial Metadata Bar */}
      <div
        ref={metadataRef}
        className="relative z-10 flex flex-wrap items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D8C7AE]/80 font-sans border-b border-white/10 pb-4 pt-2"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#B49A70] animate-pulse" />
          <span>Automne-Hiver Étude</span>
        </div>
        <div className="hidden sm:block text-[#FAF7F0]/60">
          Paris — Londres — New York
        </div>
        <div className="font-editorial italic tracking-wider text-sm text-[#B49A70]">
          Vol. IV
        </div>
      </div>

      {/* Center Cinematic Editorial Composition */}
      <div className="relative z-10 my-auto py-12 md:py-20 max-w-5xl">
        <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.38em] text-[#B49A70] font-sans font-medium mb-4">
          Maison de Mode • Étude 01
        </span>

        {/* Staggered Serif Headline with Line Wrappers */}
        <h1
          ref={headlineRef}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-[#FAF7F0] leading-[1.02] tracking-[-0.01em]"
        >
          <span className="block overflow-hidden">
            <span className="line-span inline-block">THE ART OF</span>
          </span>
          <span className="block overflow-hidden">
            <span className="line-span inline-block italic font-editorial text-[#F3EBDD]">
              BEING TIMELESS.
            </span>
          </span>
        </h1>

        {/* Secondary Editorial Narrative */}
        <div
          ref={subtextRef}
          className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg font-sans text-[#FAF7F0]/85 leading-relaxed font-light"
        >
          <p className="font-editorial italic text-xl sm:text-2xl text-[#D8C7AE] mb-1 font-normal">
            “An expression of individuality. A presence beyond seasons.”
          </p>
          <p className="text-xs sm:text-sm text-[#FAF7F0]/70 font-sans">
            Sculpted forms, architectural silhouettes, and the quiet dignity of
            uncompromising European tailoring.
          </p>
        </div>

        {/* Call to Actions */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
        >
          <MagneticButton>
            <Link
              href="/collections"
              data-cursor="EXPLORE"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FAF7F0] text-[#21060D] hover:bg-[#D8C7AE] font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl shadow-black/40 group"
            >
              <span>Explore the Collection</span>
              <ArrowUpRight className="w-4 h-4 text-[#541326] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/maison"
              data-cursor="MAISON"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#FAF7F0]/40 text-[#FAF7F0] hover:border-[#FAF7F0] hover:bg-white/5 font-sans text-xs uppercase tracking-[0.25em] transition-all duration-300"
            >
              <span>Discover the Maison</span>
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Runway Meta and Scroll Prompt */}
      <div className="relative z-10 flex items-end justify-between pt-4 border-t border-white/10 text-xs font-sans text-[#FAF7F0]/60">
        <div className="max-w-xs hidden md:block">
          <p className="font-editorial italic text-sm text-[#D8C7AE]">
            “Elegance, without excess.”
          </p>
          <p className="text-[10px] text-[#FAF7F0]/40 uppercase tracking-widest mt-0.5">
            Architectural Study 01
          </p>
        </div>

        <a
          href="#philosophy"
          data-cursor="SCROLL"
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#D8C7AE] hover:text-[#FAF7F0] transition-colors group cursor-pointer"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#B49A70] group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
