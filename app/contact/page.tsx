"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, MapPin, Mail, Phone, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/animation/SmoothScroll";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salon: "Paris Atelier (14 Rue de la Paix)",
    service: "Private Collection Fitting",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
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

          <SectionLabel number="CONCIERGE" label="Client Services" />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#21060D] mt-3 mb-6">
            CLIENT SERVICES
            <br />
            <span className="font-editorial italic text-[#541326]">
              & SALON FITTINGS.
            </span>
          </h1>

          <p className="font-editorial text-xl sm:text-2xl text-[#762D42] max-w-2xl leading-relaxed mb-10 font-normal">
            “Personal consultations, bespoke alterations, and confidential
            acquisitions coordinated by our Paris concierge.”
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Salon Addresses & Hours (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#541326] font-sans font-medium block mb-2">
                  Global Salons
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-[#21060D]">
                  By Appointment Only
                </h2>
              </div>

              {/* Paris */}
              <div className="p-6 bg-[#F3EBDD] border border-[#D8C7AE]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#541326] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Paris • Atelier Principal</span>
                </div>
                <p className="font-display text-lg text-[#21060D]">
                  14 Rue de la Paix, 75001 Paris
                </p>
                <p className="text-xs font-sans text-[#211719]/70 flex items-center gap-2 pt-2">
                  <Clock className="w-3.5 h-3.5 text-[#762D42]" />
                  <span>Mardi – Samedi: 10h00 – 19h00 CET</span>
                </p>
              </div>

              {/* London */}
              <div className="p-6 bg-[#F3EBDD] border border-[#D8C7AE]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#541326] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>London • Mayfair Salon</span>
                </div>
                <p className="font-display text-lg text-[#21060D]">
                  28 Old Bond Street, Mayfair, London
                </p>
                <p className="text-xs font-sans text-[#211719]/70 flex items-center gap-2 pt-2">
                  <Clock className="w-3.5 h-3.5 text-[#762D42]" />
                  <span>Monday – Saturday: 10:00 – 18:30 GMT</span>
                </p>
              </div>

              {/* New York */}
              <div className="p-6 bg-[#F3EBDD] border border-[#D8C7AE]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#541326] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>New York • Madison Suite</span>
                </div>
                <p className="font-display text-lg text-[#21060D]">
                  720 Madison Avenue, New York, NY
                </p>
                <p className="text-xs font-sans text-[#211719]/70 flex items-center gap-2 pt-2">
                  <Clock className="w-3.5 h-3.5 text-[#762D42]" />
                  <span>Tuesday – Saturday: 11:00 – 19:00 EST</span>
                </p>
              </div>

              {/* Direct Channels */}
              <div className="pt-6 border-t border-[#D8C7AE]/60 space-y-3 text-xs font-sans text-[#211719]/80">
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#541326]" />
                  <span>concierge@orre-maison.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#541326]" />
                  <span>+33 (0)1 42 68 88 00 (Paris Direct)</span>
                </p>
              </div>
            </div>

            {/* Right Column: Appointment & Concierge Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F3EBDD]/50 p-5 sm:p-8 md:p-12 border border-[#D8C7AE] shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#541326] text-[#B49A70] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-3xl text-[#21060D]">
                    Demande Enregistrée
                  </h3>
                  <p className="font-editorial italic text-lg text-[#541326]">
                    Your appointment request has been dispatched to the Maison
                    concierge.
                  </p>
                  <p className="text-xs font-sans text-[#211719]/70 max-w-md mx-auto leading-relaxed pt-2">
                    A senior client liaison will contact you within 24 hours to
                    confirm fitting times and prepare bespoke garment selections
                    prior to your arrival.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs uppercase tracking-widest text-[#541326] underline font-sans"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl text-[#21060D] mb-1">
                      Request Private Appointment
                    </h3>
                    <p className="text-xs font-sans text-[#762D42]">
                      Please complete the details below to coordinate your salon
                      fitting.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. eleanor@vance.com"
                        className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                        Contact Telephone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+33 6 00 00 00 00"
                        className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                        Select Salon
                      </label>
                      <select
                        value={formData.salon}
                        onChange={(e) =>
                          setFormData({ ...formData, salon: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none"
                      >
                        <option>Paris Atelier (14 Rue de la Paix)</option>
                        <option>London Salon (28 Old Bond Street)</option>
                        <option>New York Suite (720 Madison Avenue)</option>
                        <option>Private Remote Bespoke Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none"
                      >
                        <option>Private Collection Fitting</option>
                        <option>Bespoke Tailoring & Suiting</option>
                        <option>Eveningwear & Gala Wardrobe</option>
                        <option>Press & Editorial Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#211719]/70 mb-1.5 font-sans font-medium">
                      Garment Preferences or Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please note any specific silhouettes, collections, or sizing requirements..."
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C7AE] focus:border-[#541326] text-xs font-sans text-[#211719] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    data-cursor="SUBMIT"
                    className="w-full py-4 bg-[#541326] hover:bg-[#300914] text-[#FAF7F0] text-xs uppercase tracking-[0.25em] font-medium font-sans flex items-center justify-center gap-3 transition-colors duration-300 disabled:opacity-60 cursor-pointer shadow-lg"
                  >
                    <Sparkles className="w-4 h-4 text-[#B49A70]" />
                    <span>
                      {loading ? "Registering..." : "Transmit Appointment Request"}
                    </span>
                  </button>

                  <p className="text-[10px] text-center text-[#211719]/50 font-sans tracking-wide">
                    Confidentiality is rigorously maintained. Your information is
                    never shared with external third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
