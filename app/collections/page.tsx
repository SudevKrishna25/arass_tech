"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, Eye, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/animation/SmoothScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductModal from "@/components/ui/ProductModal";
import { COLLECTIONS } from "@/data/collections";
import { PRODUCTS, ProductItem } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function CollectionsPage() {
  const [selectedCol, setSelectedCol] = useState<string>("all");
  const [inspectProduct, setInspectProduct] = useState<ProductItem | null>(null);

  const displayedCollections =
    selectedCol === "all"
      ? COLLECTIONS
      : COLLECTIONS.filter((c) => c.slug === selectedCol);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#FAF7F0] text-[#211719] pt-32 pb-24">
        {/* Editorial Page Header */}
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

          <SectionLabel number="ÉDITIONS" label="The Collections" />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#21060D] mt-3 mb-6">
            COLLECTIONS
            <br />
            <span className="font-editorial italic text-[#541326]">
              ARCHIVE.
            </span>
          </h1>

          <p className="font-editorial text-xl sm:text-2xl text-[#762D42] max-w-2xl leading-relaxed mb-10 font-normal">
            “A considered continuum of tailored architecture, kinetic silk
            études, and nocturnal velvet studies.”
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-[#D8C7AE]/60 pb-6">
            <button
              onClick={() => setSelectedCol("all")}
              className={`text-xs uppercase tracking-[0.25em] py-2 px-4 transition-all duration-300 font-sans cursor-pointer ${
                selectedCol === "all"
                  ? "bg-[#541326] text-[#FAF7F0] font-medium"
                  : "bg-transparent text-[#211719]/60 hover:text-[#211719] hover:bg-[#D8C7AE]/30"
              }`}
            >
              All Éditions ({COLLECTIONS.length})
            </button>
            {COLLECTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCol(c.slug)}
                className={`text-xs uppercase tracking-[0.25em] py-2 px-4 transition-all duration-300 font-sans cursor-pointer ${
                  selectedCol === c.slug
                    ? "bg-[#541326] text-[#FAF7F0] font-medium"
                    : "bg-transparent text-[#211719]/60 hover:text-[#211719] hover:bg-[#D8C7AE]/30"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Detailed Breakdown */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {displayedCollections.map((col, idx) => {
            const colProducts = PRODUCTS.filter(
              (p) => p.collection === col.title
            );

            return (
              <section
                key={col.id}
                id={col.slug}
                className="pt-12 border-t border-[#541326]/20 scroll-mt-28"
              >
                {/* Collection Headline & Meta */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
                  <div className="lg:col-span-5">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#762D42] font-sans font-medium block mb-2">
                      Étude N° 0{idx + 1} • {col.season}
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl text-[#21060D] font-light leading-tight mb-3">
                      {col.title}
                    </h2>
                    <p className="font-editorial italic text-lg text-[#541326] mb-4">
                      {col.subtitle}
                    </p>
                    <p className="font-sans text-sm text-[#211719]/80 leading-relaxed font-light mb-6">
                      {col.description}
                    </p>

                    {/* Palette and features */}
                    <div className="space-y-4 pt-4 border-t border-[#D8C7AE]/60">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#762D42] block mb-1">
                          Chromatic Code
                        </span>
                        <div className="flex gap-2">
                          {col.palette.map((hex, i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                              style={{ backgroundColor: hex }}
                              title={hex}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#762D42] block mb-1">
                          Key Materials
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {col.materials.map((m) => (
                            <span
                              key={m}
                              className="text-[10px] uppercase tracking-wider text-[#300914] bg-[#D8C7AE]/40 px-2 py-0.5 border border-[#D8C7AE]"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary Campaign Visual */}
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl bg-[#21060D] border border-[#541326]/30">
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        className="object-cover filter brightness-[0.95] contrast-[1.05]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#21060D]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-editorial italic text-[#FAF7F0]">
                        <span>“{col.quote}”</span>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-[#B49A70]">
                          {col.looksCount} Curated Looks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Associated Pieces from This Collection */}
                {colProducts.length > 0 && (
                  <div className="pt-8 border-t border-[#D8C7AE]/50">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles className="w-3.5 h-3.5 text-[#541326]" />
                      <h3 className="text-xs uppercase tracking-[0.25em] text-[#541326] font-sans font-medium">
                        Featured Pieces from {col.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {colProducts.map((piece) => (
                        <div
                          key={piece.id}
                          onClick={() => setInspectProduct(piece)}
                          className="group cursor-pointer bg-[#F3EBDD]/60 p-4 border border-[#D8C7AE]/60 hover:border-[#541326] transition-all"
                        >
                          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#21060D] mb-4">
                            <Image
                              src={piece.image}
                              alt={piece.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-[#21060D]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-[10px] uppercase tracking-widest text-[#FAF7F0] bg-[#21060D]/80 px-3 py-1.5 flex items-center gap-1.5 border border-[#B49A70]/60">
                                <Eye className="w-3.5 h-3.5 text-[#B49A70]" />
                                <span>Inspect</span>
                              </span>
                            </div>
                          </div>

                          <h4 className="font-display text-lg text-[#21060D] group-hover:text-[#541326] transition-colors leading-snug">
                            {piece.name}
                          </h4>
                          <p className="font-editorial italic text-xs text-[#762D42] mb-2">
                            {piece.frenchTitle}
                          </p>

                          <div className="flex justify-between items-center text-xs font-sans pt-2 border-t border-[#D8C7AE]/60">
                            <span className="font-medium text-[#541326]">
                              {formatPrice(piece.price)}
                            </span>
                            <span className="text-[10px] uppercase text-[#762D42]/80 group-hover:text-[#541326] flex items-center gap-1">
                              <span>Specs</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>

      <ProductModal
        product={inspectProduct}
        onClose={() => setInspectProduct(null)}
      />

      <Footer />
    </SmoothScroll>
  );
}
