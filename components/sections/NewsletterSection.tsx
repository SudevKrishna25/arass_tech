"use client";

import { useState } from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid private correspondence address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section className="relative bg-[#21060D] text-[#FAF7F0] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#541326]/60 overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute inset-0 bg-radial from-[#541326]/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#B49A70] font-sans font-medium mb-4 block">
          Correspondance Privée
        </span>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#FAF7F0] tracking-tight leading-[1.08] mb-4">
          LET ELEGANCE
          <br />
          <span className="font-editorial italic text-[#D8C7AE]">
            FIND YOU.
          </span>
        </h2>

        <p className="font-sans text-xs sm:text-base text-[#FAF7F0]/75 font-light leading-relaxed max-w-xl mx-auto mb-10">
          Discover new collections, private salon invitations, editorial
          monographs, and the unfolding world of Maison ORRÉ.
        </p>

        {/* Subscription Form */}
        {status === "success" ? (
          <div className="max-w-md mx-auto p-6 bg-[#300914] border border-[#B49A70] text-center">
            <div className="w-10 h-10 rounded-full bg-[#541326] text-[#B49A70] flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl text-[#FAF7F0] mb-1">
              Bienvenue à la Maison
            </h3>
            <p className="text-xs font-sans text-[#FAF7F0]/70">
              Your correspondence address has been registered for upcoming
              curated editions and private salon dispatches.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address"
                aria-label="Email address for ORRÉ newsletter"
                className="w-full px-5 py-4 bg-[#300914] border border-[#541326] focus:border-[#B49A70] text-[#FAF7F0] placeholder-[#FAF7F0]/40 text-base sm:text-xs font-sans outline-none transition-colors"
              />
              {status === "error" && (
                <p className="absolute -bottom-6 left-0 text-[10px] text-red-400 font-sans tracking-wide">
                  {errorMessage}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              data-cursor="SUBSCRIBE"
              className="px-8 py-4 bg-[#541326] hover:bg-[#762D42] text-[#FAF7F0] font-sans text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
            >
              <span>{status === "loading" ? "Registering..." : "Subscribe"}</span>
              <ArrowRight className="w-4 h-4 text-[#B49A70]" />
            </button>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-[#FAF7F0]/40 font-sans">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B49A70]" />
          <span>Discreet communication • No algorithmic solicitation</span>
        </div>
      </div>
    </section>
  );
}
