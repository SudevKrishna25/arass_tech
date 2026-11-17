"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable for desktop non-touch devices
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) return;

    setEnabled(true);

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e: MouseEvent) => {
      // Direct positioning for tiny dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Smooth trailing for outer ring
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    // Global listener for interactive targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea"
      );

      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Center pinpoint */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FAF7F0] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] mix-blend-difference"
      />

      {/* Trailing follower */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-[width,height,background-color,border-color] duration-300 flex items-center justify-center text-center ${
          cursorText
            ? "w-20 h-20 bg-[#541326]/90 border border-[#B49A70] backdrop-blur-sm text-[#F3EBDD]"
            : isHovered
            ? "w-12 h-12 bg-[#FAF7F0]/20 border border-[#FAF7F0]/60 backdrop-blur-[2px]"
            : "w-8 h-8 border border-[#B49A70]/40"
        }`}
      >
        {cursorText && (
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-medium text-[#FAF7F0] px-1 select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
