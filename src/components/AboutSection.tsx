"use client";

import React from "react";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-white text-zywo-navy border-t border-zywo-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Direct Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-zywo-soft aspect-[4/5] border border-zywo-navy/[0.08] shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
              <img
                src="/images/team/rayan-hany.webp"
                alt="Rayan Hany — Founder & Creative Director at Zywo"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zywo-navy/90 via-zywo-navy/20 to-transparent flex flex-col justify-end p-8 text-white">
                <blockquote className="font-editorial-italic text-lg sm:text-xl font-normal leading-relaxed mb-4 text-white/95">
                  “Advertising without data is guesswork. Advertising without creative craft is invisible. We lead with strategy and execute with precision. Because Every Impression Matters.”
                </blockquote>
                <div className="text-xs font-sans font-medium uppercase tracking-wider text-zywo-powder">
                  Rayan Hany — Founder & Creative Director
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7">
            <div className="pill-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
              <span>Agency Philosophy</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zywo-navy leading-tight mb-6">
              We don’t just run ads. We engineer strategy-first advertising that scales.
            </h2>

            <p className="text-zywo-slate text-base sm:text-lg font-sans font-light leading-relaxed mb-6">
              Zywo is a strategy-first advertising agency. We believe the biggest failure in modern marketing is spending capital without an empirical strategy. We use data to build defensible strategies, and execute those strategies with arresting creative and disciplined media execution.
            </p>

            <p className="text-zywo-body text-sm sm:text-base font-sans font-light leading-relaxed mb-10">
              In 2024, our founder Rayan Hany observed ambitious brands wasting budgets on generic niche templates and disjointed tactics. Zywo was created to deliver an integrated model: lead with data diagnostics, formulate decisive advertising strategy, and execute across high-converting creative, paid media, and modern web platforms.
            </p>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-zywo-navy/[0.08]">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-zywo-navy/[0.06]">
                <h3 className="font-display font-bold text-lg text-zywo-navy mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zywo-periwinkle" />
                  Strategy-First & Data-Led
                </h3>
                <p className="text-zywo-body text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Every creative concept, ad script, and media dollar is guided by real consumer data, audience signals, and unit economics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-zywo-navy/[0.06]">
                <h3 className="font-display font-bold text-lg text-zywo-navy mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zywo-periwinkle" />
                  Hands-On Execution
                </h3>
                <p className="text-zywo-body text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Zero bureaucracy. Founders work directly with our strategy directors and creative leads from initial data audit to campaign scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
