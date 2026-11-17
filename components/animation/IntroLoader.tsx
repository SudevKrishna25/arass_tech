"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function IntroLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const soundChipRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user already saw the intro in this session or prefers reduced motion
    const hasSeenIntro = sessionStorage.getItem("orre_intro_seen");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasSeenIntro === "true" || prefersReducedMotion) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("orre_intro_seen", "true");
          setIsVisible(false);
          if (onComplete) onComplete();
        },
      });

      // Initial positions
      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });
      gsap.set(wordmarkRef.current, {
        opacity: 0,
        y: 35,
        letterSpacing: "0.4em",
      });
      gsap.set([subtitleRef.current, soundChipRef.current], {
        opacity: 0,
        y: 15,
      });

      // Sequence
      tl
        // 1. Line emerges from center
        .to(lineRef.current, {
          scaleX: 1,
          duration: 0.9,
          ease: "expo.out",
        })
        // 2. ORRÉ wordmark reveals with letter-spacing tightening
        .to(
          wordmarkRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.18em",
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.5"
        )
        // 3. Subtitle fades into view
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // 4. Subtle sound option chip fades in
        .to(
          soundChipRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // 5. Brief hold for luxury grandeur
        .to({}, { duration: 0.4 })
        // 6. Smoothly fade out center content
        .to(centerContentRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power3.in",
        })
        // 7. Split-screen curtain transition revealing hero campaign photograph
        .to(
          curtainTopRef.current,
          {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
          },
          "-=0.1"
        )
        .to(
          curtainBottomRef.current,
          {
            yPercent: 100,
            duration: 1.1,
            ease: "power4.inOut",
          },
          "<"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("orre_intro_seen", "true");
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-auto select-none"
      role="dialog"
      aria-label="ORRÉ Maison Entrance"
    >
      {/* Top half curtain in absolute oxblood */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#21060D] border-b border-[#541326]/50 shadow-2xl"
      />
      {/* Bottom half curtain in absolute oxblood */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#21060D] border-t border-[#541326]/50 shadow-2xl"
      />

      {/* Subtle radial ambient warmth */}
      <div className="absolute inset-0 bg-radial from-[#541326]/25 via-transparent to-transparent pointer-events-none" />

      {/* Center Branded Mark & Narrative */}
      <div
        ref={centerContentRef}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-[#D8C7AE]/70 font-sans mb-4">
          Maison de Haute Élégance
        </span>

        <h1
          ref={wordmarkRef}
          className="font-display text-4xl sm:text-7xl lg:text-9xl text-[#F3EBDD] font-light leading-none select-none"
        >
          ORRÉ
        </h1>

        {/* Champagne Center Line */}
        <div
          ref={lineRef}
          className="w-24 sm:w-36 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B49A70] to-transparent my-4 sm:my-5"
        />

        <p
          ref={subtitleRef}
          className="font-editorial italic text-xs sm:text-base md:text-2xl text-[#D8C7AE] tracking-[0.16em] sm:tracking-[0.25em]"
        >
          AN EXPRESSION OF ELEGANCE.
        </p>

        {/* Ambient audio invitation chip */}
        <div
          ref={soundChipRef}
          className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#FAF7F0]/50 font-sans py-1 px-3 rounded-full border border-[#D8C7AE]/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B49A70] animate-pulse" />
          <span>Atelier Audio Available in Menu</span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          data-cursor="SKIP"
          className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[#FAF7F0]/40 hover:text-[#FAF7F0] transition-colors duration-300 py-1.5 px-4 border border-white/10 hover:border-[#B49A70] rounded-none cursor-pointer"
        >
          Enter Maison [Skip]
        </button>
      </div>
    </div>
  );
}
