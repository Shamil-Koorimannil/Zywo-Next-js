"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Data & Audit",
    detail:
      "Deep dive into consumer metrics, competitor positioning, search intent, and historical performance data to uncover your highest-leverage growth opportunities.",
  },
  {
    number: "02",
    title: "Strategy Formulation",
    detail:
      "Architecting full-funnel campaign frameworks, channel budget models, defensible market positioning, and messaging hierarchies that anchor all creative.",
  },
  {
    number: "03",
    title: "Creative Production",
    detail:
      "Translating the strategic blueprint into high-converting commercial video, generative AI ad variations, distinctive visual systems, and persuasive copywriting.",
  },
  {
    number: "04",
    title: "Omnichannel Execution",
    detail:
      "Deploying campaigns across Meta, Google, TikTok, YouTube, and custom Next.js platforms with algorithmic targeting and disciplined media spend.",
  },
  {
    number: "05",
    title: "Data Optimization & Scale",
    detail:
      "Continuous attribution tracking, conversion rate optimization, rapid creative refreshes, and aggressive ROAS scaling for sustained category leadership.",
  },
];

export default function ZywoApproach() {
  return (
    <section id="approach" className="relative py-28 md:py-36 bg-[#f8fafc] text-zywo-navy border-t border-zywo-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="pill-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
            <span>Data-Led Methodology</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-zywo-navy uppercase mb-4">
            THE ZYWO APPROACH
          </h2>
          <p className="text-zywo-body text-base sm:text-lg font-sans font-light leading-relaxed">
            A rigorous 5-stage framework: using data to engineer bulletproof strategies, translating them into arresting creative, and executing with relentless precision.
          </p>
        </div>

        {/* 5-Stage Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zywo-navy/[0.06] shadow-sm hover:border-zywo-periwinkle/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-extrabold text-2xl text-zywo-periwinkle block mb-6">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-xl text-zywo-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-zywo-body text-xs sm:text-sm font-sans font-light leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
