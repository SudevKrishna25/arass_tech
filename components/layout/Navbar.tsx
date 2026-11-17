"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import SoundToggle from "@/components/ui/SoundToggle";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[400] transition-all duration-500",
          !isHome || isScrolled
            ? "bg-[#21060D]/95 backdrop-blur-md py-3.5 border-b border-[#541326]/50 shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-[#21060D]/85 via-[#21060D]/30 to-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {MAIN_NAV_ITEMS.slice(0, 3).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  data-cursor={item.label.toUpperCase()}
                  className={cn(
                    "relative text-xs uppercase tracking-[0.25em] transition-colors py-1 group font-sans font-medium",
                    isActive
                      ? "text-[#B49A70]"
                      : "text-[#FAF7F0]/85 hover:text-[#FAF7F0]"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[1px] bg-[#B49A70] transition-transform duration-300 origin-left",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Center Brand Identity Wordmark */}
          <Link
            href="/"
            data-cursor="ORRÉ"
            className="group flex flex-col items-center justify-center text-center px-4"
          >
            <span className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl tracking-[0.22em] text-[#FAF7F0] font-normal transition-transform duration-500 group-hover:scale-105">
              ORRÉ
            </span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#D8C7AE]/70 -mt-0.5 group-hover:text-[#B49A70] transition-colors">
              Maison de Mode
            </span>
          </Link>

          {/* Right Navigation & Audio Toggle */}
          <div className="flex items-center gap-6 lg:gap-8">
            <nav
              aria-label="Secondary"
              className="hidden md:flex items-center gap-8 lg:gap-10"
            >
              {MAIN_NAV_ITEMS.slice(3).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    data-cursor={item.label.toUpperCase()}
                    className={cn(
                      "relative text-xs uppercase tracking-[0.25em] transition-colors py-1 group font-sans font-medium",
                      isActive
                        ? "text-[#B49A70]"
                        : "text-[#FAF7F0]/85 hover:text-[#FAF7F0]"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[1px] bg-[#B49A70] transition-transform duration-300 origin-left",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <SoundToggle />

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="md:hidden flex items-center gap-2 p-2 text-[#FAF7F0] hover:text-[#B49A70] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans">
                Menu
              </span>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
