"use client";

import React from "react";
import { Sparkles, Quote } from "lucide-react";

export default function AgencyManifesto() {
  return (
    <section className="relative py-24 md:py-32 bg-[#08090b] text-white border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#93b4ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Monogram Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#93b4ff] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-[0.2em] uppercase">THE ZYWO MANIFESTO</span>
        </div>

        {/* Large Editorial Quote */}
        <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.25] text-zinc-100 font-light max-w-4xl mb-10">
          "We do not build templates. We sculpt{" "}
          <span className="font-editorial-italic text-[#93b4ff]">impressions</span> that linger long
          after the browser is closed."
        </blockquote>

        {/* Supporting statement */}
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-16">
          The cover of a book is not merely protective paper. It is the threshold between curiosity and disregard.
          In digital business, your brand is evaluated before a single sentence is read. We make certain your story begins with undeniable presence.
        </p>

        {/* Craft Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              0.05s
            </span>
            <span className="mt-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              Cognitive Decision Window
            </span>
            <span className="mt-1 text-[11px] text-zinc-500 font-light">
              The instant an impression is forged
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#93b4ff]">
              100%
            </span>
            <span className="mt-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              Tailored Architecture
            </span>
            <span className="mt-1 text-[11px] text-zinc-500 font-light">
              No generic templates, ever
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              360°
            </span>
            <span className="mt-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              Multidisciplinary Synergy
            </span>
            <span className="mt-1 text-[11px] text-zinc-500 font-light">
              Brand, code, motion & growth united
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
