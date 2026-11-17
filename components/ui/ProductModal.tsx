"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Sparkles, Check, ArrowRight } from "lucide-react";
import { ProductItem } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [appointmentRequested, setAppointmentRequested] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setAppointmentRequested(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-2 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#21060D]/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92svh] max-h-[92vh] bg-[#FAF7F0] text-[#211719] shadow-2xl overflow-y-auto border border-[#B49A70]/30 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2.5 sm:p-2 bg-[#21060D] text-[#FAF7F0] hover:bg-[#541326] transition-colors shadow-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Imagery Gallery */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-[#F3EBDD] flex flex-col gap-3 sm:gap-4">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[44vh] sm:max-h-none w-full overflow-hidden bg-[#21060D]">
            <Image
              src={selectedImage || product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-3 left-3 bg-[#21060D]/80 backdrop-blur-xs text-[#FAF7F0] text-[9px] uppercase tracking-[0.25em] px-2.5 py-1">
              {product.category}
            </div>
          </div>

          {/* Alternate views */}
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedImage(product.image)}
              className={`relative w-20 h-24 overflow-hidden border transition-all ${
                selectedImage === product.image
                  ? "border-[#541326] scale-100 ring-1 ring-[#541326]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={product.image}
                alt={`${product.name} front view`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
            <button
              onClick={() => setSelectedImage(product.secondaryImage)}
              className={`relative w-20 h-24 overflow-hidden border transition-all ${
                selectedImage === product.secondaryImage
                  ? "border-[#541326] scale-100 ring-1 ring-[#541326]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={product.secondaryImage}
                alt={`${product.name} atelier detail`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          </div>
        </div>

        {/* Right: Garment Editorial Specifications */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#762D42] mb-2 font-medium">
              <span>{product.collection}</span>
              <span>•</span>
              <span>{product.origin}</span>
            </div>

            <h2
              id="product-modal-title"
              className="font-display text-2xl md:text-3xl lg:text-4xl text-[#21060D] mb-1 font-normal tracking-tight"
            >
              {product.name}
            </h2>

            <p className="font-editorial italic text-base md:text-lg text-[#762D42] mb-4">
              {product.frenchTitle}
            </p>

            <div className="text-xl font-display text-[#541326] mb-6">
              {formatPrice(product.price)}
            </div>

            <div className="h-[1px] w-full bg-[#D8C7AE]/60 mb-6" />

            {/* Silhouette & Cut */}
            <div className="mb-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#211719]/60 font-sans mb-1.5 font-medium">
                Silhouette & Architecture
              </h3>
              <p className="text-sm font-sans text-[#211719]/80 leading-relaxed">
                {product.silhouette}
              </p>
            </div>

            {/* Materiality */}
            <div className="mb-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#211719]/60 font-sans mb-1.5 font-medium">
                Fabrication & Materiality
              </h3>
              <p className="text-sm font-sans text-[#211719]/80 leading-relaxed">
                {product.fabrication}
              </p>
            </div>

            {/* Tailoring Details */}
            <div className="mb-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#211719]/60 font-sans mb-2 font-medium">
                Atelier Details
              </h3>
              <ul className="space-y-1.5">
                {product.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-sans text-[#211719]/70 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B49A70]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-6 border-t border-[#D8C7AE]/60 mt-4">
            {appointmentRequested ? (
              <div className="p-4 bg-[#F3EBDD] border border-[#B49A70] flex items-start gap-3">
                <Check className="w-5 h-5 text-[#541326] shrink-0 mt-0.5" />
                <div>
                  <p className="font-editorial text-sm font-semibold text-[#541326]">
                    Private Inquiry Recorded
                  </p>
                  <p className="text-xs text-[#211719]/80 font-sans">
                    An ORRÉ client concierge will coordinate an appointment at
                    the salon of your choice.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => setAppointmentRequested(true)}
                  className="w-full py-4 bg-[#541326] hover:bg-[#300914] text-[#FAF7F0] font-sans text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-colors duration-300"
                >
                  <Sparkles className="w-4 h-4 text-[#B49A70]" />
                  <span>Request Atelier Fitting</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-[#211719]/50 tracking-wider uppercase font-sans">
                  Available for bespoke fitting in Paris, London, and New York
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
