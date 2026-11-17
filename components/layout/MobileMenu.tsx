"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { MAIN_NAV_ITEMS } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    }, menuRef);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      ctx.revert();
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[600] bg-[#21060D] text-[#FAF7F0] flex flex-col justify-between p-6 sm:p-10 select-none overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#541326]/60 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-2xl tracking-[0.2em] text-[#F3EBDD]"
        >
          ORRÉ
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 border border-[#B49A70]/30 hover:border-[#B49A70] text-[#D8C7AE] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div ref={linksRef} className="py-12 flex flex-col gap-6 md:gap-8">
        {MAIN_NAV_ITEMS.map((item, idx) => (
          <div key={item.label} className="group">
            <Link
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between text-3xl sm:text-4xl font-display font-light text-[#F3EBDD] group-hover:text-[#B49A70] group-hover:translate-x-2 transition-all duration-300"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-sans text-[#762D42] group-hover:text-[#B49A70] transition-colors">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </div>
              <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            {item.description && (
              <p className="text-xs font-sans text-[#D8C7AE]/60 pl-8 pt-1">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="border-t border-[#541326]/60 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-xs text-[#D8C7AE]/70 font-sans">
        <div>
          <p className="font-editorial italic text-base text-[#F3EBDD] mb-1">
            “Elegance, without excess.”
          </p>
          <p className="text-[11px] text-[#A99686]">
            Atelier Parisien • 14 Rue de la Paix
          </p>
        </div>

        <div className="flex gap-6 uppercase text-[10px] tracking-[0.2em]">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FAF7F0] transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://vogue.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FAF7F0] transition-colors"
          >
            Vogue
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="hover:text-[#FAF7F0] transition-colors"
          >
            Appointments
          </Link>
        </div>
      </div>
    </div>
  );
}
