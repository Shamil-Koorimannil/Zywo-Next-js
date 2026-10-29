"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  Database,
  Compass,
  Film,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Quote,
  ShieldAlert,
  Target,
  Layers,
} from "lucide-react";

export default function ApproachPage() {
  const [activeStage, setActiveStage] = useState(0);

  const steps = [
    {
      number: "01",
      stepTag: "STAGE 01",
      title: "Discover & Audit",
      shortDesc: "Auditing consumer metrics, competitor positioning, and search signals.",
      detail:
        "We eliminate subjective guesswork by running a rigorous diagnostic audit across your entire digital presence: historical ad spend efficiency, search intent mapping, conversion funnels, and competitive white space.",
      deliverables: [
        "Search Demand & Keyword Intent Audit",
        "Competitor Market Positioning Matrix",
        "Historical ROAS & Ad Creative Efficiency Analysis",
        "Audience Psychographics & Buying Signals",
      ],
      timeframe: "Week 1",
      icon: Database,
      iconColor: "bg-amber-100/80 text-amber-600 border-amber-200/60",
    },
    {
      number: "02",
      stepTag: "STAGE 02",
      title: "Strategy Formulation",
      shortDesc: "Architecting full-funnel campaign frameworks and defensible brand moats.",
      detail:
        "Using insights from the data audit, we formulate an empirical brand and advertising strategy: defining target customer segments, channel budget allocations, brand narrative hooks, and unit-economic benchmarks.",
      deliverables: [
        "Defensive Brand Positioning & Narrative Hooks",
        "Full-Funnel Campaign Architecture (TOFU, MOFU, BOFU)",
        "Omnichannel Paid Media Budget Model",
        "Creative Briefs with Messaging Hierarchies",
      ],
      timeframe: "Week 2",
      icon: Compass,
      iconColor: "bg-violet-100/80 text-violet-600 border-violet-200/60",
    },
    {
      number: "03",
      stepTag: "STAGE 03",
      title: "Creative Production",
      shortDesc: "Translating strategic blueprints into high-converting commercial assets.",
      detail:
        "Our in-house cinematographers, 3D motion designers, and copywriters produce scroll-stopping creative: 3D CGI product renders, commercial video films, high-velocity generative AI variations, and tactile packaging.",
      deliverables: [
        "High-Retention Commercial Video & Ad Films",
        "3D CGI Product Renders & Motion Graphics",
        "Bespoke Brand Typography & Visual Tokens",
        "Multivariate Ad Hook & Script Variations",
      ],
      timeframe: "Weeks 3-4",
      icon: Film,
      iconColor: "bg-blue-100/80 text-blue-600 border-blue-200/60",
    },
    {
      number: "04",
      stepTag: "STAGE 04",
      title: "Omnichannel Execution",
      shortDesc: "Deploying across algorithmic paid media and ultra-fast Next.js platforms.",
      detail:
        "Campaigns launch across Meta Ads, Google Performance Max, YouTube, and custom Next.js web applications. We monitor initial conversion signals in real-time, validating audience resonance and checkout velocity.",
      deliverables: [
        "Algorithmic Media Buying on Meta & Google",
        "Next.js High-Conversion Web Infrastructure",
        "Custom UTM Taxonomy & Multi-Touch Attribution",
        "Shopify Plus Funnel Integration",
      ],
      timeframe: "Week 5",
      icon: Rocket,
      iconColor: "bg-teal-100/80 text-teal-600 border-teal-200/60",
    },
    {
      number: "05",
      stepTag: "STAGE 05",
      title: "Optimization & Scale",
      shortDesc: "Continuous attribution tracking, conversion testing, and aggressive scaling.",
      detail:
        "We double down on top-performing creative assets, refresh fatigue fatigue cycles every 10-14 days, and scale budgets with disciplined ROAS preservation to cement your category leadership.",
      deliverables: [
        "Bi-Weekly Creative Refresh Cadence",
        "A/B Split Testing & Heatmap Friction Audits",
        "ROAS Scaling & Capital Reinvestment Modeling",
        "Monthly Executive Performance Reports",
      ],
      timeframe: "Ongoing Growth",
      icon: TrendingUp,
      iconColor: "bg-rose-100/80 text-rose-600 border-rose-200/60",
    },
  ];

  const testimonials = [
    {
      quote:
        "Zywo transformed our local street product into a national beverage brand with the Irumb Karimbaakum campaign. Our retail velocity exceeded forecasts by 180%.",
      client: "Coolcane Beverages",
      role: "Managing Director",
      avatar: "C",
    },
    {
      quote:
        "When copycat stores tried diluting our brand across Kerala, Zywo built an anti-counterfeit campaign that defended our yellow identity and expanded customer loyalty.",
      client: "Mouzy Avil Milk",
      role: "Brand Director",
      avatar: "M",
    },
    {
      quote:
        "Their blend of architectural visual luxury and modern digital platforms brought high-net-worth homeowners directly into our showroom.",
      client: "Lamar Tiles & Sanitary",
      role: "Head of Marketing",
      avatar: "L",
    },
  ];

  return (
    <main className="relative min-h-screen ethereal-bg text-zywo-navy selection:bg-indigo-100 overflow-x-hidden">
      {/* Background Decorative Ethereal Glass Spheres */}
      <div className="fixed top-24 right-10 w-72 h-72 glass-sphere pointer-events-none opacity-45 blur-xs -z-0" />
      <div className="fixed bottom-32 left-10 w-80 h-80 glass-sphere pointer-events-none opacity-40 blur-sm -z-0" />

      {/* Floating Frosted Pill Header */}
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24 space-y-8 sm:space-y-12">
        {/* 1. Hero Bento Box (Exact Style of Reference Image) */}
        <section className="glass-bento-hero p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100/70 border border-violet-200/60 text-violet-700 text-[11px] font-bold tracking-[0.2em] uppercase w-fit shadow-xs">
              <Sparkles className="w-3 h-3 text-violet-500" />
              <span>THE ZYWO METHODOLOGY</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.08]">
              A 5-Stage Framework Built on Empirical Data
            </h1>

            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
              We never pitch creative ideas based on subjective guesswork. Every design decision, commercial ad script, and media dollar is anchored to our proven 5-stage lifecycle.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#process-stepper"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f172a] text-white hover:bg-[#1e293b] font-sans font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all"
              >
                <span>Inspect Process Stepper</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 hover:bg-white text-[#0f172a] border border-white/90 font-sans font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all"
              >
                <span>Book a Process Diagnostic</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-500" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Process Stepper Bento (Matching "Design Process I Follow" from Reference Image) */}
        <section id="process-stepper" className="glass-bento p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              MY PROCESS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a]">
              Design & Growth Process We Follow
            </h2>
          </div>

          {/* 5 Stepper Cards in a Row (Exact match to Reference Screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative">
            {steps.map((s, idx) => {
              const isActive = activeStage === idx;
              const Icon = s.icon;
              return (
                <button
                  key={s.number}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between group relative ${
                    isActive
                      ? "bg-white shadow-[0_10px_30px_rgba(142,166,214,0.2)] border-2 border-indigo-400 -translate-y-1"
                      : "bg-white/70 hover:bg-white border border-white/85 shadow-2xs"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-2xs ${s.iconColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono font-black text-sm text-[#0f172a]/60">
                        {s.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-sm text-[#0f172a] group-hover:text-indigo-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-[11px] text-[#64748b] line-clamp-2 mt-1 leading-snug">
                        {s.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-indigo-600 font-semibold">
                    <span>{s.timeframe}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/70">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold px-3 py-1 rounded-full bg-[#0f172a] text-white">
                  STAGE {steps[activeStage].number}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0f172a]">
                  {steps[activeStage].title}
                </h3>
              </div>
              <div className="text-xs font-semibold text-indigo-600 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/60 w-fit">
                Typical Timeline: {steps[activeStage].timeframe}
              </div>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed max-w-3xl">
              {steps[activeStage].detail}
            </p>

            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0f172a] block mb-3">
                Key Stage Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps[activeStage].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 border border-white/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Testimonials Bento (Matching "What Clients Say" from Reference Image) */}
        <section className="glass-bento p-6 sm:p-8 lg:p-10 space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a]">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-bento-sub p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-indigo-300" />
                  <p className="text-xs text-[#475569] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white font-bold text-xs flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f172a]">{t.client}</div>
                    <div className="text-[10px] text-[#64748b]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Consultation CTA Bento Box */}
        <section className="glass-bento p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block">
                PARTNER WITH US
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a] leading-tight">
                Experience the clarity of data-led advertising.
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-xl">
                Ready to replace fragmented agency deliverables with a single, high-conviction creative pipeline? Connect with our team today.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-sans font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Initiate Stage 01 Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
