"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";

const PHILOSOPHY_STEPS = [
  {
    step: "01",
    word: "FORM.",
    subtitle: "The Dialogue Between Body & Architecture",
    description:
      "Every cut begins with sculptural intention. Shoulders shaped with subtle backward tilt, commanding authority without rigidity. Structure is the silent dialogue between the body and space.",
    quote: "“Structure is not constriction; it is liberation of posture.”",
    image: "/images/hero/philosophy-portrait.jpg",
    accent: "#541326",
  },
  {
    step: "02",
    word: "FEELING.",
    subtitle: "Tactility Preceding Sight",
    description:
      "True luxury is felt before it is seen. Mulberry silk radzimir and double-faced virgin wool cut on the bias to breathe with the wearer, moving like kinetic sculpture.",
    quote: "“The hand understands what the eye merely anticipates.”",
    image: "/images/collections/form-feeling.jpg",
    accent: "#762D42",
  },
  {
    step: "03",
    word: "FOREVER.",
    subtitle: "Designed to Transcend Seasons",
    description:
      "We reject the ephemeral frenzy of runway micro-trends. An ORRÉ garment is engineered with floating natural canvas and hand-finished seams to endure for generations.",
    quote: "“Elegance is the elimination of the accidental.”",
    image: "/images/collections/signature-edit.jpg",
    accent: "#300914",
  },
];

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTriggerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Pinned Storytelling Sequence on Desktop
      const pinTrigger = pinTriggerRef.current;
      if (!pinTrigger) return;

      const panels = gsap.utils.toArray<HTMLElement>(".philosophy-panel");
      const images = gsap.utils.toArray<HTMLElement>(".philosophy-image");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTrigger,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) setActiveStep(0);
            else if (p < 0.7) setActiveStep(1);
            else setActiveStep(2);
          },
        },
      });

      // Transition from Step 1 to Step 2
      tl.to(panels[0], { opacity: 0, y: -40, duration: 1 })
        .to(images[0], { opacity: 0, scale: 0.95, duration: 1 }, "<")
        .fromTo(
          panels[1],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          images[1],
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1 },
          "<"
        )

        // Hold Step 2
        .to({}, { duration: 0.8 })

        // Transition from Step 2 to Step 3
        .to(panels[1], { opacity: 0, y: -40, duration: 1 })
        .to(images[1], { opacity: 0, scale: 0.95, duration: 1 }, "<")
        .fromTo(
          panels[2],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          images[2],
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1 },
          "<"
        )

        // Hold Step 3
        .to({}, { duration: 0.6 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative bg-[#FAF7F0] text-[#211719] border-b border-[#D8C7AE]/60 overflow-hidden"
    >
      {/* DESKTOP PINNED STORYTELLING CONTAINER */}
      <div
        ref={pinTriggerRef}
        className="hidden lg:flex min-h-screen w-full flex-col justify-between p-8 sm:p-12 lg:p-16 relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#541326]/20">
          <SectionLabel number="02" label="Philosophie de la Maison" />
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-[#762D42] font-sans">
            <span className="font-editorial italic tracking-normal text-sm">
              Étude Narrative
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B49A70]" />
            <span>0{activeStep + 1} / 03</span>
          </div>
        </div>

        {/* Center Pinned Story Stage */}
        <div className="my-auto grid grid-cols-12 gap-16 items-center py-8">
          {/* Left Text Narrative (7 cols) */}
          <div className="col-span-7 relative min-h-[380px] flex items-center">
            {PHILOSOPHY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className={`philosophy-panel absolute inset-0 flex flex-col justify-center ${
                  idx === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#762D42] mb-3 font-sans font-medium">
                  <span>Chapitre {step.step}</span>
                  <span>•</span>
                  <span>{step.subtitle}</span>
                </div>

                <h2 className="font-display text-7xl xl:text-9xl font-light text-[#21060D] leading-none tracking-tight mb-6">
                  {step.word}
                </h2>

                <p className="font-editorial italic text-2xl xl:text-3xl text-[#541326] mb-4">
                  {step.quote}
                </p>

                <p className="font-sans text-base text-[#211719]/80 leading-relaxed font-light max-w-xl mb-8">
                  {step.description}
                </p>

                <Link
                  href="/maison"
                  data-cursor="MANIFIESTO"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#541326] hover:text-[#21060D] font-medium font-sans group border-b border-[#541326]/40 pb-1 w-fit transition-colors"
                >
                  <span>Explore The Full Monograph</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Right Image Stage (5 cols) */}
          <div className="col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl bg-[#300914] border border-[#541326]/20">
              {PHILOSOPHY_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className={`philosophy-image absolute inset-0 ${
                    idx === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.word}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-editorial italic text-[#FAF7F0]">
                    <span>{step.subtitle}</span>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-[#B49A70]">
                      Atelier Paris
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Geometric Accent Line */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#B49A70]/40 -z-0 pointer-events-none" />
          </div>
        </div>

        {/* Bottom Progress Indicator Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-[#541326]/20 text-xs font-sans text-[#762D42]">
          <span className="tracking-widest uppercase text-[10px]">
            Scroll to Progress Narrative
          </span>
          <div className="flex gap-2">
            {PHILOSOPHY_STEPS.map((s, idx) => (
              <span
                key={s.step}
                className={`h-1 transition-all duration-300 ${
                  activeStep === idx
                    ? "w-8 bg-[#541326]"
                    : "w-2 bg-[#D8C7AE]/60"
                }`}
              />
            ))}
          </div>
          <span className="font-editorial italic">
            “Elegance, without excess.”
          </span>
        </div>
      </div>

      {/* MOBILE / TABLET ADAPTATION (CLEAN STACKED VIEW) */}
      <div className="lg:hidden py-16 px-4 sm:px-6 space-y-16">
        <div className="border-b border-[#541326]/20 pb-4 mb-8">
          <SectionLabel number="02" label="Philosophie de la Maison" />
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#21060D] mt-2">
            FORM. FEELING. FOREVER.
          </h2>
        </div>

        {PHILOSOPHY_STEPS.map((step) => (
          <div key={step.step} className="space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl bg-[#21060D]">
              <Image
                src={step.image}
                alt={step.word}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute top-3 left-3 bg-[#21060D]/80 text-[#FAF7F0] text-[9px] uppercase tracking-widest px-2.5 py-1">
                {step.step} • {step.word}
              </div>
            </div>

            <h3 className="font-display text-3xl text-[#21060D]">{step.word}</h3>
            <p className="font-editorial italic text-lg text-[#541326]">
              {step.quote}
            </p>
            <p className="font-sans text-xs text-[#211719]/80 leading-relaxed font-light">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
