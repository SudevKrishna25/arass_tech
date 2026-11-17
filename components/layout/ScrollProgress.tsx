"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CHAPTERS = [
  { id: "hero", number: "01", label: "THE RUNWAY" },
  { id: "philosophy", number: "02", label: "THE PHILOSOPHY" },
  { id: "collections", number: "03", label: "THE COLLECTION" },
  { id: "campaign", number: "04", label: "THE CAMPAIGN" },
  { id: "maison", number: "05", label: "THE MAISON" },
  { id: "journal", number: "06", label: "THE JOURNAL" },
];

export default function ScrollProgress() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const trackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on desktop screens
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    setIsVisible(true);
    gsap.registerPlugin(ScrollTrigger);

    // Track global scroll progress
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setProgressHeight(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Track active sections
    CHAPTERS.forEach((chapter, idx) => {
      const el = document.getElementById(chapter.id);
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveChapter(idx),
          onEnterBack: () => setActiveChapter(idx),
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!isVisible) return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={trackerRef}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[350] hidden lg:flex flex-col items-end gap-6 select-none pointer-events-auto"
      aria-label="Editorial Chapter Navigation"
    >
      {/* Background track line */}
      <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-[#FAF7F0]/15" />

      {/* Progress fill line */}
      <div
        className="absolute right-[5px] top-0 w-[1px] bg-gradient-to-b from-[#B49A70] to-[#FAF7F0] transition-all duration-150"
        style={{ height: `${progressHeight}%` }}
      />

      {/* Chapter Markers */}
      <div className="flex flex-col gap-6 py-2 relative z-10">
        {CHAPTERS.map((chap, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={chap.id}
              onClick={() => scrollToSection(chap.id)}
              data-cursor={chap.label}
              className="group flex items-center gap-3 text-right cursor-pointer py-1"
              aria-label={`Jump to ${chap.label}`}
            >
              {/* Expanding Label on Active / Hover */}
              <span
                className={`font-sans text-[9px] uppercase tracking-[0.25em] transition-all duration-300 font-medium ${
                  isActive
                    ? "opacity-100 translate-x-0 text-[#B49A70]"
                    : "opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-[#FAF7F0]/70"
                }`}
              >
                {chap.label}
              </span>

              {/* Number and Dot Indicator */}
              <div className="flex items-center gap-2">
                <span
                  className={`font-sans text-[10px] tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-[#B49A70] font-semibold"
                      : "text-[#FAF7F0]/30 group-hover:text-[#FAF7F0]/70"
                  }`}
                >
                  {chap.number}
                </span>

                <span
                  className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-[#B49A70] border-[#FAF7F0] scale-125 shadow-[0_0_8px_rgba(180,154,112,0.8)]"
                      : "bg-[#21060D] border-[#FAF7F0]/30 group-hover:border-[#B49A70]"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
