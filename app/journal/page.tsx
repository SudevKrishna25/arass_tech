"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/animation/SmoothScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { JOURNAL_ARTICLES, JournalArticle } from "@/data/journal";

export default function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle>(
    JOURNAL_ARTICLES[0]
  );
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#FAF7F0] text-[#211719] pt-32 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#762D42] hover:text-[#541326] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Flagship</span>
            </Link>
          </div>

          <SectionLabel number="REVUE" label="The Journal" />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#21060D] mt-3 mb-6">
            THE JOURNAL
            <br />
            <span className="font-editorial italic text-[#541326]">
              OF STYLE.
            </span>
          </h1>

          <p className="font-editorial text-xl sm:text-2xl text-[#762D42] max-w-2xl leading-relaxed mb-10 font-normal">
            “Essays in chromatic weight, modern tailoring architecture, and the
            unapologetic philosophy of reduction.”
          </p>

          {/* Quick Issue Picker */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-[#D8C7AE]/60 pb-6">
            {JOURNAL_ARTICLES.map((art) => (
              <button
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className={`text-xs uppercase tracking-[0.2em] py-2 px-3 sm:px-4 transition-all duration-300 font-sans cursor-pointer ${
                  activeArticle.id === art.id
                    ? "bg-[#541326] text-[#FAF7F0] font-medium"
                    : "bg-transparent text-[#211719]/60 hover:text-[#211719] hover:bg-[#D8C7AE]/30"
                }`}
              >
                {art.issue} • {art.category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured / Active Essay Reader */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#762D42] mb-4">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.3em] font-medium">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#211719]/60">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#211719]/60">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle.date}
                </span>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#541326] hover:text-[#21060D]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Monograph</span>
                  </>
                )}
              </button>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#21060D] font-light leading-tight mb-4">
              {activeArticle.title}
            </h2>

            <p className="font-editorial italic text-lg sm:text-xl text-[#541326] leading-relaxed">
              {activeArticle.subtitle}
            </p>
          </div>

          {/* Hero Feature Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl bg-[#21060D] border border-[#541326]/30 mb-12">
            <Image
              src={activeArticle.image}
              alt={activeArticle.title}
              fill
              className="object-cover filter brightness-[0.96] contrast-[1.05]"
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute bottom-4 right-4 bg-[#21060D]/80 backdrop-blur-xs text-[#FAF7F0] text-[9px] uppercase tracking-widest px-2.5 py-1">
              ORRÉ Editorial Archive
            </div>
          </div>

          {/* Lead Paragraph */}
          <div className="border-b border-[#D8C7AE]/60 pb-8 mb-10">
            <p className="font-editorial text-xl sm:text-2xl text-[#300914] leading-relaxed font-normal">
              {activeArticle.content.lead}
            </p>
          </div>

          {/* Section Body Texts and Pull Quotes */}
          <div className="space-y-12">
            {activeArticle.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="font-display text-2xl sm:text-3xl text-[#21060D] font-light">
                  {sec.heading}
                </h3>

                {sec.body.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-sm sm:text-base text-[#211719]/80 leading-relaxed font-light"
                  >
                    {p}
                  </p>
                ))}

                {sec.pullQuote && (
                  <blockquote className="my-8 py-6 px-8 border-l-2 border-[#541326] bg-[#F3EBDD]/60 italic font-editorial text-2xl sm:text-3xl text-[#541326] leading-snug">
                    “{sec.pullQuote}”
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Article Endmark */}
          <div className="mt-16 pt-8 border-t border-[#D8C7AE]/60 flex items-center justify-between text-xs font-sans text-[#762D42]">
            <span>ORRÉ Revue de Mode • Paris</span>
            <span className="font-display tracking-[0.2em] text-sm text-[#21060D]">
              ORRÉ
            </span>
          </div>
        </article>

        {/* Other Monographs List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-[#541326]/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl sm:text-3xl text-[#21060D]">
              Additional Essays & Critiques
            </h3>
            <span className="text-xs uppercase tracking-widest text-[#762D42]">
              Archive 2025–2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.filter((a) => a.id !== activeArticle.id).map(
              (art) => (
                <div
                  key={art.id}
                  onClick={() => {
                    setActiveArticle(art);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="group cursor-pointer bg-[#F3EBDD]/40 p-5 border border-[#D8C7AE]/60 hover:border-[#541326] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#21060D] mb-4">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-[#762D42] font-medium block mb-1">
                      {art.issue} • {art.category}
                    </span>
                    <h4 className="font-display text-lg text-[#21060D] group-hover:text-[#541326] transition-colors leading-snug mb-2">
                      {art.title}
                    </h4>
                    <p className="text-xs font-sans text-[#211719]/70 line-clamp-2 font-light">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D8C7AE]/60 mt-4 flex items-center justify-between text-xs font-sans text-[#541326]">
                    <span>Read Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
