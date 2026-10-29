"use client";

import React from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function BrandIntro() {
  return (
    <section id="intro" className="relative py-28 md:py-40 bg-white text-zywo-navy overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-zywo-periwinkleLight/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-zywo-lavenderLight/80 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow / Tagline Pill */}
        <div className="flex items-center gap-3 mb-8">
          <div className="pill-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
            <span>Strategy-First Advertising Agency</span>
          </div>
          <span className="text-xs font-sans font-medium uppercase tracking-widest text-zywo-muted hidden sm:inline-block">
            Calicut & Malappuram, Kerala
          </span>
        </div>

        {/* Oversized Expressive Editorial Statement */}
        <div className="max-w-5xl">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-zywo-navy">
            Crafting <span className="font-editorial-italic font-normal text-zywo-periwinkle">distinctive</span> brands for the modern era.
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <span className="font-editorial-italic text-2xl sm:text-3xl md:text-4xl text-zywo-navy">
              “Every Impression Matters.”
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Narrative Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-12 border-t border-zywo-navy/[0.08]">
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl font-sans font-light text-zywo-slate leading-relaxed">
              Zywo is a strategy-first advertising agency. We use data to build defensible strategies
              and execute those strategies through high-impact creative, precision media buying,
              and modern web platforms.
            </p>

            <p className="mt-6 text-base font-sans text-zywo-body leading-relaxed max-w-2xl">
              Founded on the conviction that advertising succeeds only when grounded in empirical market insights,
              we eliminate the friction between data intelligence, arresting visual craft, and revenue-driven
              execution. Every touchpoint is scrutinized for strategic purpose and measurable commercial impact.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-zywo-periwinkleLight/40 border border-zywo-periwinkle/30">
              <div className="font-display font-bold text-3xl sm:text-4xl text-zywo-navy mb-1">
                20+
              </div>
              <div className="text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate">
                Client Partners
              </div>
              <p className="mt-2 text-xs text-zywo-muted leading-relaxed">
                Ambitious founders across India and the GCC.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zywo-powderLight/60 border border-zywo-powder/50">
              <div className="font-display font-bold text-3xl sm:text-4xl text-zywo-navy mb-1">
                100%
              </div>
              <div className="text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate">
                Data-Led Strategy
              </div>
              <p className="mt-2 text-xs text-zywo-muted leading-relaxed">
                Zero assumptions. Strategies built on market data.
              </p>
            </div>

            <div className="col-span-2 p-6 rounded-2xl bg-white border border-zywo-navy/[0.08] shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-zywo-muted block mb-1">
                  End-To-End Advertising Execution
                </span>
                <span className="font-display font-bold text-base text-zywo-navy">
                  Data Strategy · Media Buying · Creative · Tech
                </span>
              </div>
              <ArrowDownRight className="w-5 h-5 text-zywo-periwinkle shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
