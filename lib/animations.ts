"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initGSAP() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

/**
 * Split text reveal: animates child elements upward from overflow-hidden masks
 */
export function revealLines(
  elements: gsap.DOMTarget,
  trigger?: gsap.DOMTarget,
  options: {
    stagger?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    start?: string;
  } = {}
) {
  const {
    stagger = 0.12,
    duration = 1.1,
    delay = 0,
    ease = "power4.out",
    start = "top 85%",
  } = options;

  gsap.set(elements, { yPercent: 105, opacity: 0 });

  const anim = gsap.to(elements, {
    yPercent: 0,
    opacity: 1,
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger: trigger
      ? {
          trigger,
          start,
          toggleActions: "play none none none",
        }
      : undefined,
  });

  return anim;
}

/**
 * Word by word staggered reveal
 */
export function revealWords(
  words: gsap.DOMTarget,
  trigger?: gsap.DOMTarget,
  options: {
    stagger?: number;
    duration?: number;
    ease?: string;
  } = {}
) {
  const { stagger = 0.05, duration = 0.8, ease = "power3.out" } = options;

  gsap.set(words, { y: 25, opacity: 0 });

  return gsap.to(words, {
    y: 0,
    opacity: 1,
    duration,
    stagger,
    ease,
    scrollTrigger: trigger
      ? {
          trigger,
          start: "top 80%",
        }
      : undefined,
  });
}

/**
 * Smooth scrubbed parallax for background imagery
 */
export function createParallax(
  target: gsap.DOMTarget,
  trigger: gsap.DOMTarget,
  yPercentDelta: number = 20
) {
  return gsap.fromTo(
    target,
    { yPercent: -yPercentDelta / 2 },
    {
      yPercent: yPercentDelta / 2,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
}

/**
 * Expanding clip-path mask reveal on scroll
 */
export function createExpandingMask(
  target: gsap.DOMTarget,
  trigger: gsap.DOMTarget
) {
  return gsap.fromTo(
    target,
    { clipPath: "inset(12% 15% 12% 15%)", scale: 1.1 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top 75%",
        end: "center center",
        scrub: 1,
      },
    }
  );
}
