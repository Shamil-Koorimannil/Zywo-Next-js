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
  Quote,
} from "lucide-react";

export default function ApproachPage() {
  const [activeStage, setActiveStage] = useState(0);

  const steps = [
    {
      number: "01",
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
      tint: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    },
    {
      number: "02",
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
      tint: "bg-[#F0EBFF] text-[#A78BFA] border-[#A78BFA]/20",
    },
    {
      number: "03",
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
      tint: "bg-[#EDF2FF] text-[#7699F8] border-[#7699F8]/20",
    },
    {
      number: "04",
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
      tint: "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]",
    },
    {
      number: "05",
      title: "Optimization & Scale",
      shortDesc: "Continuous attribution tracking, conversion testing, and aggressive scaling.",
      detail:
        "We double down on top-performing creative assets, refresh creative fatigue cycles every 10-14 days, and scale budgets with disciplined ROAS preservation to cement category leadership.",
      deliverables: [
        "Bi-Weekly Creative Refresh Cadence",
        "A/B Split Testing & Heatmap Friction Audits",
        "ROAS Scaling & Capital Reinvestment Modeling",
        "Monthly Executive Performance Reports",
      ],
      timeframe: "Ongoing Growth",
      icon: TrendingUp,
      tint: "bg-[#FEE2E2] text-[#DC2626] border-[#FECACA]",
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
    <main className="relative min-h-screen glass-page-bg text-[#171923] selection:bg-[#F0EBFF] selection:text-[#171923] overflow-x-hidden">
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12 sm:space-y-16">
        {/* 1. Header Container */}
        <section className="glass-card-lg p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2FF] border border-[#7699F8]/25 text-[#7699F8] text-[11px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#7699F8]" />
              <span>THE ZYWO METHODOLOGY</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171923] tracking-tight leading-[1.1]">
              A 5-Stage Framework Built on Empirical Data
            </h1>

            <p className="text-sm sm:text-base text-[#646778] font-normal leading-relaxed max-w-2xl">
              We never pitch creative ideas based on subjective guesswork. Every design decision, commercial ad script, and media dollar is anchored to our proven 5-stage lifecycle.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white font-sans font-semibold text-xs tracking-wide shadow-sm transition-all"
              >
                <span>Book a Process Diagnostic</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Process Stepper */}
        <section className="space-y-6">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              THE 5-STAGE PIPELINE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
              From Raw Market Signals to Category Scale
            </h2>
          </div>

          {/* 5 Stepper Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {steps.map((s, idx) => {
              const isActive = activeStage === idx;
              const Icon = s.icon;
              return (
                <button
                  key={s.number}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? "bg-white shadow-[0_8px_24px_rgba(118,153,248,0.14)] border-2 border-[#7699F8] -translate-y-1"
                      : "bg-white/80 hover:bg-white border border-[#E3E5EE]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center border shadow-xs ${s.tint}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono font-bold text-xs text-[#85899A]">
                        {s.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xs sm:text-sm text-[#171923]">
                        {s.title}
                      </h3>
                      <p className="text-[11px] text-[#646778] line-clamp-2 mt-1 leading-snug">
                        {s.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-2 border-t border-[#E3E5EE]/60 flex items-center justify-between text-[10px] text-[#7699F8] font-semibold">
                    <span>{s.timeframe}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7699F8]" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Card */}
          <div className="glass-surface p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E3E5EE]/60">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#171923] text-white">
                  STAGE {steps[activeStage].number}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                  {steps[activeStage].title}
                </h3>
              </div>
              <div className="text-xs font-semibold text-[#7699F8] px-3 py-1 rounded-full bg-[#EDF2FF] border border-[#7699F8]/20 w-fit">
                Typical Timeline: {steps[activeStage].timeframe}
              </div>
            </div>

            <p className="text-sm text-[#646778] leading-relaxed max-w-3xl">
              {steps[activeStage].detail}
            </p>

            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#171923] block mb-3">
                Key Stage Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps[activeStage].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E3E5EE]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#171923]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Verified Client Testimonials */}
        <section className="space-y-6">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card-sm p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-[#A78BFA]/50" />
                  <p className="text-xs text-[#646778] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3E5EE]/60 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7699F8] to-[#A78BFA] text-white font-bold text-xs flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#171923]">{t.client}</div>
                    <div className="text-[10px] text-[#85899A]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Consultation CTA */}
        <section className="glass-card-lg p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                Experience the clarity of data-led advertising.
              </h3>
              <p className="text-xs sm:text-sm text-[#646778] leading-relaxed">
                Ready to replace fragmented agency deliverables with a single, high-conviction creative pipeline? Connect with our team today.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold shadow-sm transition-all inline-flex items-center gap-2"
              >
                <span>Initiate Stage 01 Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
