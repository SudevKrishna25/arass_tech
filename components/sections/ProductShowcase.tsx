"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye } from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/products";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductModal from "@/components/ui/ProductModal";
import { formatPrice } from "@/lib/utils";

const CATEGORIES = [
  "All Pieces",
  "Ready-to-Wear",
  "Tailoring",
  "Occasionwear",
  "Accessories",
] as const;

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All Pieces");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeCategory === "All Pieces"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="showcase"
      className="relative bg-[#FAF7F0] text-[#211719] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-[#D8C7AE]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[#541326]/20">
          <div>
            <SectionLabel number="04" label="Archives & Garde-Robe" />
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#21060D] mt-3">
              THE PIECES
            </h2>
            <p className="font-editorial italic text-xl text-[#762D42] mt-1">
              Refined cuts, sculptural lines, and timeless craftsmanship.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-xs font-sans text-[#762D42]/80 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#541326]" />
            <span>Select Piece to Inspect Atelier Details</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-16 pb-4 border-b border-[#D8C7AE]/50">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-cursor="SELECT"
              className={`text-xs uppercase tracking-[0.25em] py-2 px-4 transition-all duration-300 font-sans cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#541326] text-[#FAF7F0] font-medium shadow-md"
                  : "bg-transparent text-[#211719]/60 hover:text-[#211719] hover:bg-[#D8C7AE]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              data-cursor="INSPECT"
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#21060D] shadow-md mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105 filter brightness-[0.96]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Second layer on hover */}
                <div className="absolute inset-0 bg-[#21060D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#FAF7F0] bg-[#21060D]/80 backdrop-blur-xs py-2 px-3 border border-[#B49A70]/60">
                    <Eye className="w-3.5 h-3.5 text-[#B49A70]" />
                    <span>Inspect Silhouette</span>
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#FAF7F0]/90 backdrop-blur-xs text-[#21060D] text-[8px] uppercase tracking-[0.25em] px-2 py-0.5">
                  {product.category}
                </div>
              </div>

              {/* Product Metadata */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#762D42] font-sans font-medium block mb-1">
                  {product.collection}
                </span>

                <h3 className="font-display text-lg text-[#21060D] group-hover:text-[#541326] transition-colors leading-snug">
                  {product.name}
                </h3>

                <p className="font-editorial italic text-xs text-[#762D42]/80 mt-0.5 mb-2">
                  {product.frenchTitle}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#D8C7AE]/60 text-xs font-sans">
                  <span className="font-medium text-[#541326]">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#211719]/50 group-hover:text-[#541326] transition-colors">
                    Atelier View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
