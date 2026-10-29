"use client";

import React, { useState } from "react";
import { ArrowUpRight, Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(["Advertising Strategy & Data"]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleDiscipline = (disc: string) => {
    if (selectedDisciplines.includes(disc)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== disc));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, disc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#f8fafc] text-zywo-navy border-t border-zywo-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="pill-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-zywo-navy uppercase mb-4">
            LET’S MAKE AN IMPRESSION
          </h2>
          <p className="text-zywo-body text-base sm:text-lg font-sans font-light leading-relaxed">
            Whether you need a data-backed advertising strategy, high-impact commercial creative, or full-funnel media execution, our leadership team is ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Communication Channels & Facts */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-white border border-zywo-navy/[0.06] shadow-sm">
              <div className="flex items-center gap-3 text-xs font-sans font-semibold uppercase tracking-wider text-emerald-600 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Fastest Response</span>
              </div>
              <h3 className="font-display font-bold text-xl text-zywo-navy mb-2">
                WhatsApp Us
              </h3>
              <p className="text-zywo-body text-xs sm:text-sm font-sans font-light leading-relaxed mb-6">
                Connect directly with our creative and technical heads for instant project scoping or fast queries.
              </p>
              <a
                href="https://wa.me/916282881159?text=Hi%20Zywo%2C%20let's%20talk%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone & Email Card */}
            <div className="p-8 rounded-3xl bg-white border border-zywo-navy/[0.06] shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-zywo-soft text-zywo-navy shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-zywo-muted block mb-1">
                    Direct Phone Call
                  </span>
                  <a
                    href="tel:+916282881159"
                    className="font-display font-bold text-base text-zywo-navy hover:text-zywo-periwinkle transition-colors"
                  >
                    +91 6282881159
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-zywo-navy/[0.06]">
                <div className="p-3 rounded-2xl bg-zywo-soft text-zywo-navy shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-zywo-muted block mb-1">
                    Official Email
                  </span>
                  <a
                    href="mailto:hello@zywo.com"
                    className="font-display font-bold text-base text-zywo-navy hover:text-zywo-periwinkle transition-colors"
                  >
                    hello@zywo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-zywo-navy/[0.06]">
                <div className="p-3 rounded-2xl bg-zywo-soft text-zywo-navy shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-zywo-muted block mb-1">
                    Hub Locations
                  </span>
                  <div className="font-sans font-medium text-sm text-zywo-slate">
                    Calicut & Malappuram, Kerala, India
                  </div>
                  <div className="text-xs text-zywo-muted mt-0.5">
                    Serving Kerala, pan-India, and internationally in the GCC.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zywo-navy/[0.08] shadow-[0_4px_24px_rgba(15,23,42,0.03)]">
              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-zywo-navy mb-3">
                    Enquiry Received
                  </h3>
                  <p className="text-zywo-body text-sm sm:text-base max-w-md mx-auto mb-8 font-light leading-relaxed">
                    Thank you for reaching out to Zywo. Our creative directors will review your brand details and connect within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-zywo-navy text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-zywo-navy/90 transition-all shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Discipline selection */}
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate mb-3">
                      Select required capabilities:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Advertising Strategy & Data",
                        "Paid Media (Meta & Google)",
                        "Commercial Video & AI Ads",
                        "Brand Identity & Positioning",
                        "High-Conversion Web Platforms",
                        "Lead Generation & Funnels",
                        "Social Media Ecosystems",
                        "Attribution & Analytics",
                      ].map((item) => {
                        const active = selectedDisciplines.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleDiscipline(item)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                              active
                                ? "bg-zywo-navy text-white shadow-xs"
                                : "bg-zywo-soft text-zywo-slate hover:bg-zywo-periwinkleLight/60"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Input fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zywo-soft/50 border border-zywo-navy/[0.08] focus:border-zywo-periwinkle focus:bg-white text-zywo-navy text-sm font-sans outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zywo-soft/50 border border-zywo-navy/[0.08] focus:border-zywo-periwinkle focus:bg-white text-zywo-navy text-sm font-sans outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="founder@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zywo-soft/50 border border-zywo-navy/[0.08] focus:border-zywo-periwinkle focus:bg-white text-zywo-navy text-sm font-sans outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate mb-2">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your brand goals, scope, and estimated timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zywo-soft/50 border border-zywo-navy/[0.08] focus:border-zywo-periwinkle focus:bg-white text-zywo-navy text-sm font-sans outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-zywo-navy text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-zywo-navy/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Sending Brief..." : "Submit Project Brief"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
