"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  Database,
  Film,
  Rocket,
  ChevronRight,
  Check,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      number: "01",
      title: "Data & Advertising Strategy",
      subtitle: "Market Diagnostics & Campaign Architecture",
      icon: Database,
      tint: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
      description:
        "Great advertising begins with empirical numbers, not guesswork. We audit customer journeys, search demand, unit economics, and competitive whitespace to build data-informed advertising frameworks that eliminate wasted budget.",
      disciplines: [
        {
          name: "Market & Consumer Data Intelligence",
          desc: "Search demand diagnostics, competitive benchmarking, and psychographic profiling to uncover highest-ROI opportunities.",
          tags: ["Consumer Psychology", "Competitive Audits", "Intent Mapping"],
        },
        {
          name: "Defensive Brand Positioning",
          desc: "Crafting bulletproof brand moats and messaging hierarchies that protect customer trust and ward off copycats.",
          tags: ["Brand Moats", "Value Architecture", "Narrative Strategy"],
        },
        {
          name: "Full-Funnel Advertising Architecture",
          desc: "End-to-end campaign blueprints mapping awareness, consideration, and conversion across channel touchpoints.",
          tags: ["Funnel Modeling", "Channel Selection", "Budget Allocation"],
        },
        {
          name: "Conversion Rate Optimization (CRO)",
          desc: "Landing page heatmapping, friction audit, and multivariate A/B testing protocols to maximize conversion.",
          tags: ["A/B Testing", "Behavioral Heatmaps", "Checkout Optimization"],
        },
      ],
    },
    {
      id: 1,
      number: "02",
      title: "Creative Production & Visual Craft",
      subtitle: "Cinematic Film, 3D Motion & Design Systems",
      icon: Film,
      tint: "bg-[#F0EBFF] text-[#A78BFA] border-[#A78BFA]/20",
      description:
        "Arresting visual craft is the catalyst that makes strategy convert. We author bespoke visual identities, 3D CGI product visualizers, and high-impact commercial video designed to halt the scroll and inspire conviction.",
      disciplines: [
        {
          name: "AI Ad Creation & Generative Motion",
          desc: "Rapid generative video pipelines delivering high-converting ad variations for algorithmic testing.",
          tags: ["Generative Video", "Algorithmic Ads", "Motion Graphics"],
        },
        {
          name: "Cinematic Commercial Video & Film",
          desc: "Full-scale concept-to-post production for broadcast, OTT, and digital performance advertising.",
          tags: ["Direction & Script", "Commercial Shoots", "Color Grading"],
        },
        {
          name: "3D Product Visualization & CGI",
          desc: "Photorealistic 3D product modeling, fluid simulation, and packaging animation for modern commerce.",
          tags: ["Blender 3D", "Packaging Renders", "Fluid Dynamics"],
        },
        {
          name: "Comprehensive Visual Identity Systems",
          desc: "Distinctive brand logos, design tokens, typography, and cross-channel brand guidelines.",
          tags: ["Logo Systems", "Typography", "Packaging Design"],
        },
      ],
    },
    {
      id: 2,
      number: "03",
      title: "Scalable Platforms & Growth Media",
      subtitle: "Next.js Web Systems & Paid Media Execution",
      icon: Rocket,
      tint: "bg-[#EDF2FF] text-[#7699F8] border-[#7699F8]/20",
      description:
        "Execution is where strategy becomes revenue. We engineer ultra-fast Next.js digital platforms and execute disciplined paid media buying across Meta, Google, and TikTok to scale customer acquisition with verifiable ROAS.",
      disciplines: [
        {
          name: "Next.js Modern Web Engineering",
          desc: "Sub-second load times, headless architecture, and editorial-grade user interfaces built for scale.",
          tags: ["Next.js App Router", "Tailwind CSS", "TypeScript"],
        },
        {
          name: "Paid Media Buying & Algorithmic Scale",
          desc: "Precision paid media deployment across Meta Ads, Google Performance Max, and TikTok.",
          tags: ["Meta Ads", "Google PMax", "Target CPA/ROAS"],
        },
        {
          name: "E-Commerce Architecture & Scaling",
          desc: "High-volume Shopify Plus storefronts, custom checkout funnels, and retention engines.",
          tags: ["Shopify Plus", "Upsell Funnels", "Retention Systems"],
        },
        {
          name: "Social Media Community & Influence",
          desc: "Viral organic formats, high-retention shortform video, and brand community building.",
          tags: ["Shortform Content", "Trend Hijacking", "Community Cultivation"],
        },
      ],
    },
  ];

  const tools = [
    { name: "Figma", desc: "Design Systems" },
    { name: "Next.js", desc: "Web Platforms" },
    { name: "Blender", desc: "3D CGI & Motion" },
    { name: "After Effects", desc: "Commercial Post" },
    { name: "Midjourney", desc: "AI Concepting" },
    { name: "Meta Ads", desc: "Algorithmic Growth" },
    { name: "TypeScript", desc: "Reliable Code" },
    { name: "Shopify Plus", desc: "Modern Commerce" },
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
              <span>CAPABILITIES & DISCIPLINES</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171923] tracking-tight leading-[1.1]">
              Services Engineered for Category Dominance
            </h1>

            <p className="text-sm sm:text-base text-[#646778] font-normal leading-relaxed max-w-2xl">
              We eliminate disjointed marketing by delivering an integrated model: empirical data diagnostics, arresting cinematic visual systems, and high-performance digital platforms.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white/90 text-xs font-semibold text-[#171923] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>12 Core Disciplines</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white/90 text-xs font-semibold text-[#171923] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7699F8]" />
                <span>3 Strategic Pillars</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white/90 text-xs font-semibold text-[#171923] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                <span>100% Bespoke Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive Pillar Switcher & Disciplines Grid */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
                DISCIPLINE SELECTOR
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
                The 3 Integrated Pillars of Zywo
              </h2>
            </div>
          </div>

          {/* Clean Frosted Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-white/60 border border-white/80">
            {pillars.map((pillar) => {
              const active = selectedPillar === pillar.id;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 flex items-center gap-3.5 ${
                    active
                      ? "bg-white shadow-[0_4px_16px_rgba(65,65,100,0.06)] border border-[#E3E5EE]"
                      : "hover:bg-white/40 text-[#646778]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs shrink-0 ${pillar.tint}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#7699F8] block">
                      Pillar {pillar.number}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-[#171923] block leading-snug">
                      {pillar.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Lead Card */}
          <div className="glass-surface p-6 sm:p-8 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                {pillars[selectedPillar].title}
              </h3>
              <span className="text-xs font-semibold text-[#7699F8] px-3 py-1 rounded-full bg-[#EDF2FF] border border-[#7699F8]/20 w-fit">
                {pillars[selectedPillar].subtitle}
              </span>
            </div>
            <p className="text-sm text-[#646778] leading-relaxed max-w-3xl">
              {pillars[selectedPillar].description}
            </p>
          </div>

          {/* 4 Cards for Active Pillar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars[selectedPillar].disciplines.map((item, idx) => (
              <div
                key={idx}
                className="glass-card-sm p-6 flex flex-col justify-between group hover:border-[#7699F8]/40 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#7699F8]">
                      0{idx + 1} // CAPABILITY
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white border border-[#E3E5EE] flex items-center justify-center text-[#85899A] group-hover:text-[#171923] group-hover:scale-105 transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#171923] group-hover:text-[#7699F8] transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#646778] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-1.5 border-t border-[#E3E5EE]/60 mt-4">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white border border-[#E3E5EE] text-[10px] font-medium text-[#646778]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Modern Infrastructure & Tools */}
        <section className="glass-surface p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              TECHNOLOGY STACK
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#171923]">
              Infrastructure & Tools We Rely On
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/80 border border-white/95 shadow-xs flex flex-col items-center justify-center text-center gap-1.5 hover:bg-white hover:border-[#7699F8]/30 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#EDF2FF] border border-[#7699F8]/20 text-[#7699F8] flex items-center justify-center font-display font-black text-xs">
                  {tool.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="font-bold text-xs text-[#171923]">{tool.name}</div>
                <div className="text-[10px] text-[#85899A] line-clamp-1">{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Consultation CTA */}
        <section className="glass-card-lg p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                Not sure which service scope fits your goals?
              </h3>
              <p className="text-xs sm:text-sm text-[#646778] leading-relaxed">
                We run a complimentary data audit and market diagnostic before recommending any campaign or technical commitment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold shadow-sm transition-all"
              >
                Request Free Audit
              </Link>
              <Link
                href="/work"
                className="px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#171923] border border-[#E3E5EE] text-xs font-semibold shadow-xs transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
