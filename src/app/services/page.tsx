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
  Rocket,
  Check,
  Zap,
  Globe,
  Film,
  TrendingUp,
  Share2,
  ShoppingCart,
  Layers,
  ChevronRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      number: "01",
      title: "Data & Advertising Strategy",
      subtitle: "Market Diagnostics & Full-Funnel Architecture",
      icon: Database,
      iconColor: "bg-amber-100/80 text-amber-600 border-amber-200/60",
      description:
        "Great advertising begins with empirical numbers, not guesswork. We audit customer journeys, search demand, unit economics, and competitive whitespace to build data-informed advertising frameworks that eliminate wasted budget.",
      disciplines: [
        {
          name: "Market & Consumer Data Intelligence",
          desc: "Search demand diagnostics, competitive benchmarking, and psychographic profiling.",
          tags: ["Consumer Psychology", "Competitive Audits", "Intent Mapping"],
        },
        {
          name: "Defensive Brand Strategy & Positioning",
          desc: "Crafting bulletproof brand moats that protect customer trust and ward off copycats.",
          tags: ["Brand Moats", "Value Architecture", "Narrative Framework"],
        },
        {
          name: "Full-Funnel Advertising Architecture",
          desc: "End-to-end campaign blueprints mapping awareness, consideration, and conversion.",
          tags: ["Funnel Modeling", "Channel Selection", "Budget Allocation"],
        },
        {
          name: "Conversion Rate Optimization (CRO)",
          desc: "Landing page heatmapping, friction audit, and multivariate A/B testing protocols.",
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
      iconColor: "bg-violet-100/80 text-violet-600 border-violet-200/60",
      description:
        "Arresting visual craft is the catalyst that makes data-driven strategy convert. We author bespoke brand identities, 3D CGI product visualizers, and high-impact commercial video designed to halt the scroll and inspire conviction.",
      disciplines: [
        {
          name: "AI Ad Creation & Generative Motion",
          desc: "Rapid generative video pipelines delivering high-converting ad variations for testing.",
          tags: ["Generative Video", "Algorithmic Ads", "Motion Graphics"],
        },
        {
          name: "Cinematic Commercial Video & Film",
          desc: "Full-scale concept-to-post production for broadcast, OTT, and digital performance.",
          tags: ["Direction & Script", "Commercial Shoots", "Color Grading"],
        },
        {
          name: "3D Product Visualization & CGI",
          desc: "Photorealistic 3D product modeling, fluid simulation, and packaging animation.",
          tags: ["Blender 3D", "Packaging Renders", "Fluid Dynamics"],
        },
        {
          name: "Comprehensive Visual Identity Systems",
          desc: "Distinctive brand logos, design tokens, typography, and cross-channel guidelines.",
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
      iconColor: "bg-blue-100/80 text-blue-600 border-blue-200/60",
      description:
        "Execution is where strategy becomes revenue. We engineer ultra-fast Next.js digital platforms and execute disciplined paid media buying across Meta, Google, and TikTok to scale customer acquisition with verifiable ROAS.",
      disciplines: [
        {
          name: "Next.js Modern Web Engineering",
          desc: "Sub-second load times, headless architecture, and editorial-grade user interfaces.",
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
    { name: "Next.js", desc: "React Platform" },
    { name: "Blender", desc: "3D Visuals" },
    { name: "After Effects", desc: "Motion Design" },
    { name: "Midjourney", desc: "AI Concepting" },
    { name: "Meta Ads", desc: "Performance Buying" },
    { name: "GSAP", desc: "Fluid Animation" },
    { name: "Shopify", desc: "E-Commerce" },
  ];

  return (
    <main className="relative min-h-screen ethereal-bg text-zywo-navy selection:bg-indigo-100 overflow-x-hidden">
      {/* Background Decorative Ethereal Glass Spheres */}
      <div className="fixed top-24 left-10 w-72 h-72 glass-sphere pointer-events-none opacity-45 blur-xs -z-0" />
      <div className="fixed bottom-28 right-8 w-80 h-80 glass-sphere pointer-events-none opacity-40 blur-sm -z-0" />

      {/* Floating Frosted Pill Header */}
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24 space-y-8 sm:space-y-12">
        {/* 1. Hero Bento Box (Exact Style of Reference Image) */}
        <section className="glass-bento-hero p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100/70 border border-indigo-200/60 text-indigo-700 text-[11px] font-bold tracking-[0.2em] uppercase w-fit shadow-xs">
              <Sparkles className="w-3 h-3 text-indigo-500" />
              <span>CAPABILITIES & DISCIPLINES</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.08]">
              Services Engineered for Category Dominance
            </h1>

            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
              We eliminate disjointed marketing by delivering an integrated trilogy: empirical data diagnostics, arresting cinematic visual systems, and high-performance digital platforms.
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-2xs text-xs font-semibold text-[#0f172a]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>12 Core Disciplines</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-2xs text-xs font-semibold text-[#0f172a]">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>3 Strategic Pillars</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-2xs text-xs font-semibold text-[#0f172a]">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span>100% Bespoke Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive Pillar Switcher & Bento Disciplines Grid */}
        <section className="glass-bento p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              DISCIPLINE SELECTOR
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a]">
              The 3 Integrated Engines of Zywo
            </h2>
          </div>

          {/* Frosted Pillar Tabs (Pill Switcher) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80">
            {pillars.map((pillar) => {
              const active = selectedPillar === pillar.id;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-3 ${
                    active
                      ? "bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)] border border-white/90"
                      : "hover:bg-white/40 text-[#64748b]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs ${pillar.iconColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-500 block">
                      Pillar {pillar.number}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-[#0f172a] block">
                      {pillar.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Overview Bento Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0f172a]">
                {pillars[selectedPillar].title}
              </h3>
              <span className="text-xs font-semibold text-indigo-600 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/60 w-fit">
                {pillars[selectedPillar].subtitle}
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed max-w-3xl">
              {pillars[selectedPillar].description}
            </p>
          </div>

          {/* 4 Frosted Bento Sub-Cards for the Active Pillar (Matching Reference Image Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars[selectedPillar].disciplines.map((item, idx) => (
              <div
                key={idx}
                className="glass-bento-sub p-6 flex flex-col justify-between group hover:border-indigo-200 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-indigo-500">
                      0{idx + 1} // CAPABILITY
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/80 border border-white/70 flex items-center justify-center text-[#64748b] group-hover:text-[#0f172a] group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-[#0f172a] group-hover:text-indigo-600 transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-1.5 border-t border-white/60 mt-4">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/70 border border-white/80 text-[10px] font-medium text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Technologies & Frameworks Bento Grid */}
        <section className="glass-bento p-6 sm:p-8 lg:p-10 space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              ENGINEERING STACK
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#0f172a]">
              Tools & Modern Infrastructure We Rely On
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-white/85 shadow-2xs hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-50 to-slate-100 border border-indigo-100/60 flex items-center justify-center font-display font-black text-xs text-[#0f172a] group-hover:scale-110 transition-transform">
                  {tool.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="font-bold text-xs text-[#0f172a]">{tool.name}</div>
                <div className="text-[9px] text-[#64748b]">{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Consultation CTA Bento Box */}
        <section className="glass-bento p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block">
                PROJECT SCOPING
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a] leading-tight">
                Not sure which service bundle fits your growth horizon?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-xl">
                We provide a comprehensive complimentary Brand Audit & Data Diagnostic before recommending a single campaign dollar.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-sans font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Request Free Brand Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/work"
                className="w-full py-3.5 px-6 rounded-full bg-white/80 hover:bg-white text-[#0f172a] border border-white/90 font-sans font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Inspect Client Case Studies</span>
                <ChevronRight className="w-4 h-4 text-indigo-500" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
