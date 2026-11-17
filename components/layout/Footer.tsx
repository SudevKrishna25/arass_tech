"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER_SECTIONS } from "@/data/navigation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#21060D] text-[#FAF7F0] overflow-hidden border-t border-[#541326]/50 select-none">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-radial from-[#541326]/25 via-transparent to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#541326]/60">
          {/* Brand Column (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link href="/" className="inline-block group mb-6">
              <span className="font-display text-4xl sm:text-5xl tracking-[0.2em] text-[#F3EBDD] font-normal group-hover:text-[#B49A70] transition-colors">
                ORRÉ
              </span>
              <span className="block text-[9px] uppercase tracking-[0.38em] text-[#D8C7AE]/70 mt-1">
                Maison de Haute Élégance
              </span>
            </Link>

            <p className="font-editorial italic text-xl text-[#D8C7AE] mb-4 leading-relaxed max-w-md font-normal">
              “Elegance, without excess.”
            </p>

            <p className="font-sans text-xs text-[#FAF7F0]/65 leading-relaxed max-w-md mb-8 font-light">
              Created with intention. Designed to transcend seasons. Defined by
              detail. A contemporary digital flagship exploring the timeless
              sculpture of form.
            </p>

            {/* Atelier Salons */}
            <div className="space-y-2 text-xs font-sans text-[#D8C7AE]/70">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#B49A70] font-medium">
                Private Salons
              </p>
              {FOOTER_SECTIONS.locations.map((loc) => (
                <p key={loc.city} className="flex justify-between max-w-xs">
                  <span className="text-[#FAF7F0]/90">{loc.city}</span>
                  <span className="text-[#FAF7F0]/50">{loc.address}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-[#B49A70] font-sans font-medium mb-5">
              Collections
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[#FAF7F0]/75">
              {FOOTER_SECTIONS.explorations.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FAF7F0] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-[#B49A70] font-sans font-medium mb-5">
              The Maison
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[#FAF7F0]/75">
              {FOOTER_SECTIONS.maison.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FAF7F0] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Journal & Social */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-[#B49A70] font-sans font-medium mb-5">
              The Journal
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[#FAF7F0]/75 mb-8">
              {FOOTER_SECTIONS.journal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FAF7F0] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[11px] uppercase tracking-[0.28em] text-[#B49A70] font-sans font-medium mb-3">
              Follow ORRÉ
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans text-[#FAF7F0]/65">
              {FOOTER_SECTIONS.socials.map((soc) => (
                <Link
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F0] transition-colors"
                >
                  {soc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Monumental Closing Statement */}
        <div className="py-20 md:py-32 text-center border-b border-[#541326]/60 relative">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-[#B49A70]/80 font-sans mb-4">
            Épilogue
          </p>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.06em] md:tracking-[0.12em] text-[#F3EBDD]/95 font-light leading-none">
            UNTIL THE NEXT
            <br />
            <span className="font-editorial italic text-[#D8C7AE]">
              EXPRESSION.
            </span>
          </h2>

          {/* Refined Back-to-Top Interaction with Rising Vertical Hairline */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <div className="w-[1px] h-8 bg-gradient-to-t from-transparent via-[#B49A70] to-[#FAF7F0] animate-pulse" />
            <button
              onClick={scrollToTop}
              data-cursor="SUMMIT"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#D8C7AE]/70 hover:text-[#FAF7F0] transition-colors duration-300 py-2.5 px-6 border border-[#541326] hover:border-[#B49A70]"
            >
              <span>Return to Summit</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B49A70] group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans text-[#FAF7F0]/40">
          <p>© {new Date().getFullYear()} ORRÉ. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hover:text-[#FAF7F0]/70 transition-colors"
            >
              Private Inquiries
            </Link>
            <Link
              href="/maison"
              className="hover:text-[#FAF7F0]/70 transition-colors"
            >
              Atelier Charter
            </Link>
            <Link
              href="/collections"
              className="hover:text-[#FAF7F0]/70 transition-colors"
            >
              Lookbook Archives
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
