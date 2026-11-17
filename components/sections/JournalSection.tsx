"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function JournalSection() {
  return (
    <section
      id="journal"
      className="relative bg-[#FAF7F0] text-[#211719] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-[#D8C7AE]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-[#541326]/20">
          <div>
            <SectionLabel number="07" label="Revue & Essais" />
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#21060D] mt-3">
              THE JOURNAL
            </h2>
            <p className="font-editorial italic text-xl text-[#762D42] mt-1">
              Essays in style, chromatic theory, and contemporary fashion thought.
            </p>
          </div>

          <Link
            href="/journal"
            data-cursor="JOURNAL"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#541326] hover:text-[#21060D] font-sans font-medium group"
          >
            <BookOpen className="w-4 h-4 text-[#541326]" />
            <span>View All Editorial Essays</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Magazine Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Magazine Cover Thumbnail */}
                <Link
                  href={`/journal#${article.slug}`}
                  data-cursor="READ"
                  className="relative aspect-[3/4] w-full overflow-hidden bg-[#21060D] shadow-md mb-6 block cursor-pointer"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#FAF7F0]/90 backdrop-blur-xs text-[#21060D] text-[8px] uppercase tracking-[0.25em] px-2.5 py-1">
                    {article.category}
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-3 right-3 text-[9px] uppercase tracking-widest text-[#FAF7F0]/90 font-sans">
                    {article.readTime}
                  </div>
                </Link>

                {/* Article Meta */}
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#762D42] mb-2 font-sans font-medium">
                  <span>{article.issue}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl text-[#21060D] group-hover:text-[#541326] transition-colors leading-snug mb-3">
                  <Link href={`/journal#${article.slug}`}>{article.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs sm:text-sm text-[#211719]/70 leading-relaxed font-light line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-[#D8C7AE]/60 flex items-center justify-between">
                <Link
                  href={`/journal#${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#541326] font-medium font-sans group/link"
                >
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
                <span className="font-editorial italic text-xs text-[#762D42]/60">
                  Vol. 0{idx + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
