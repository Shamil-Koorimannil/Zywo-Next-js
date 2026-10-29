"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Target,
  Users,
  Award,
  Zap,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Compass,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "5+", label: "Years Experience", detail: "In Strategy & Creative Tech" },
    { number: "30+", label: "Projects Completed", detail: "Across India & GCC Markets" },
    { number: "15+", label: "Creative Specialists", detail: "Strategists, 3D Artists & Devs" },
    { number: "+140%", label: "Average Brand Lift", detail: "Documented Client ROAS & Reach" },
  ];

  const corePillars = [
    {
      title: "Data-Led Diagnostics",
      subtitle: "Eliminating Guesswork",
      desc: "Every creative concept, visual system, and ad narrative begins with empirical consumer search signals, audience psychographics, and competitor whitespace.",
      color: "amber",
      iconColor: "bg-amber-100/80 text-amber-600 border-amber-200/60",
    },
    {
      title: "Arresting Visual Craft",
      subtitle: "Unforgettable Impressions",
      desc: "From 3D motion and bespoke typography to cinematic ad film production, we craft design systems that demand attention and command category respect.",
      color: "violet",
      iconColor: "bg-violet-100/80 text-violet-600 border-violet-200/50",
    },
    {
      title: "High-Performance Systems",
      subtitle: "Scalable Infrastructure",
      desc: "Modern Next.js web applications, high-converting checkout funnels, and algorithmic media engines designed for rapid load times and peak conversion.",
      color: "blue",
      iconColor: "bg-blue-100/80 text-blue-600 border-blue-200/50",
    },
    {
      title: "Defensive Brand Positioning",
      subtitle: "Category Moats",
      desc: "We protect market share against copycats and commoditization by instilling authentic brand moats, trademarkable aesthetics, and customer loyalty.",
      color: "teal",
      iconColor: "bg-teal-100/80 text-teal-600 border-teal-200/50",
    },
  ];

  const tools = [
    { name: "Figma", category: "UI/UX & Design Systems" },
    { name: "Blender", category: "3D Animation & CGI" },
    { name: "After Effects", category: "Cinematic Motion" },
    { name: "Next.js", category: "High-Speed Platforms" },
    { name: "Midjourney", category: "Generative AI Concepting" },
    { name: "GSAP", category: "Micro-Interactions" },
    { name: "Meta Ads", category: "Algorithmic Growth" },
    { name: "TypeScript", category: "Reliable Web Engineering" },
  ];

  return (
    <main className="relative min-h-screen ethereal-bg text-zywo-navy selection:bg-indigo-100 overflow-x-hidden">
      {/* Decorative Ethereal 3D Glass Spheres matching reference aesthetic */}
      <div className="fixed top-28 right-12 w-64 h-64 glass-sphere pointer-events-none opacity-50 blur-xs -z-0" />
      <div className="fixed bottom-36 left-8 w-80 h-80 glass-sphere pointer-events-none opacity-40 blur-sm -z-0" />
      <div className="fixed top-1/2 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-200/25 to-blue-200/25 blur-3xl pointer-events-none -z-0" />

      {/* Signature Floating Frosted Pill Header */}
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24 space-y-8 sm:space-y-12">
        {/* 1. Hero Bento Box (Exact Style of Reference Image) */}
        <section className="glass-bento-hero p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle inner top glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100/70 border border-violet-200/60 text-violet-700 text-[11px] font-bold tracking-[0.2em] uppercase w-fit shadow-xs">
                <Sparkles className="w-3 h-3 text-violet-500" />
                <span>ABOUT ZYWO LABS</span>
              </div>

              <div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.08] mb-2">
                  Zywo Creative Lab
                </h1>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500">
                  Every Impression Matters.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed max-w-xl">
                We are a strategy-first creative & advertising laboratory operating out of Calicut and Malappuram, Kerala. We bridge data diagnostics, cinematic design systems, and modern web platforms to turn ambitious businesses into category leaders.
              </p>

              {/* Dual Action Buttons (from Reference Image) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f172a] text-white hover:bg-[#1e293b] font-sans font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all group"
                >
                  <span>View Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 hover:bg-white text-[#0f172a] border border-white/90 font-sans font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all"
                >
                  <span>Start a Project</span>
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
                </Link>
              </div>

              {/* Client Trust Row */}
              <div className="pt-6 border-t border-white/60">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748b] block mb-3">
                  Trusted by ambitious regional & national brands
                </span>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-display font-bold text-[#334155]/80">
                  <span className="px-3 py-1.5 rounded-xl bg-white/50 border border-white/80">Coolcane</span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/50 border border-white/80">Mouzy Avil Milk</span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/50 border border-white/80">Lamar Luxury</span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/50 border border-white/80">Shairan Cafe</span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/50 border border-white/80">Edhwi Brand</span>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Frame & Floating Glass Badges */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                {/* Frosted Curved Portrait Frame */}
                <div className="relative rounded-[28px] overflow-hidden p-2 bg-gradient-to-b from-white/90 via-white/40 to-white/70 border border-white/90 shadow-[0_20px_50px_rgba(142,166,214,0.18)]">
                  <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-gradient-to-tr from-slate-100 to-indigo-50">
                    <img
                      src="/images/team/rayan-hany.webp"
                      alt="Rayan Hany — Founder & Creative Director at Zywo"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="font-display font-bold text-lg">Rayan Hany</span>
                      <span className="text-xs text-indigo-200">Founder & Creative Director</span>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badge 1 (Top Right Experience) */}
                <div className="absolute -top-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_12px_30px_rgba(15,23,42,0.08)] flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    5+
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#0f172a]">Years of</div>
                    <div className="text-[10px] text-[#64748b]">Excellence</div>
                  </div>
                </div>

                {/* Floating Glass Badge 2 (Bottom Left Impact with Micro Sparkline) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_12px_30px_rgba(15,23,42,0.08)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/90 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wider">Brand Impact</div>
                    <div className="text-sm font-extrabold text-[#0f172a] flex items-center gap-1.5">
                      <span>+140%</span>
                      <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">Avg Lift</span>
                    </div>
                  </div>
                </div>

                {/* 3D Glass Spherical Accent */}
                <div className="absolute -bottom-8 -right-8 w-16 h-16 glass-sphere opacity-75 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Narrative & Stats Bento (Matching Image's "ABOUT ME" Section) */}
        <section className="glass-bento p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading & 3-Stat Grid */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block">
                OUR PHILOSOPHY
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a] leading-snug">
                Designing with Empathy, Building with Data
              </h3>

              {/* 3 Stat Boxes (Matching Reference Layout) */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {stats.slice(0, 3).map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-center"
                  >
                    <div className="font-display font-black text-xl sm:text-2xl text-[#0f172a] mb-0.5">
                      {s.number}
                    </div>
                    <div className="text-[10px] font-medium text-[#64748b] leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Origin Story & Details */}
            <div className="lg:col-span-7 space-y-4 text-sm text-[#475569] leading-relaxed">
              <p>
                In 2024, at an Indian business conference, our founder Rayan Hany engaged with dozens of ambitious startup and retail founders. Their products were exceptional, but their branding was essentially invisible—hidden behind cookie-cutter templates, disconnected social media, and ad campaigns built on guesswork.
              </p>
              <p>
                Zywo was established to deliver an empirical, integrated model: lead with data diagnostics, formulate decisive advertising strategy, and execute across high-converting creative, cinematic motion, and modern web systems.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#0f172a] border border-white/90 text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
                >
                  <span>Our 5-Stage Approach</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-600" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 hover:bg-white text-[#475569] text-xs font-medium transition-all"
                >
                  <span>Explore All Services</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Pillars / Services Bento (Matching Image's "Services I Offer" Cards) */}
        <section className="glass-bento p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              DISCIPLINES
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a]">
                Core Pillars We Build Upon
              </h3>
              <Link
                href="/services"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 w-fit"
              >
                <span>View Full Service Catalog</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4 Frosted Bento Sub-Cards (Exact Style of Screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-bento-sub p-6 flex flex-col justify-between group hover:border-indigo-200 transition-all"
              >
                <div className="space-y-4">
                  {/* Tinted Pastelled Frosted Icon Square */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs ${pillar.iconColor}`}
                  >
                    {idx === 0 && <Compass className="w-5 h-5" />}
                    {idx === 1 && <Sparkles className="w-5 h-5" />}
                    {idx === 2 && <Zap className="w-5 h-5" />}
                    {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base text-[#0f172a] group-hover:text-indigo-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-indigo-500 block mb-2">
                      {pillar.subtitle}
                    </span>
                    <p className="text-xs text-[#64748b] leading-relaxed line-clamp-4">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <div className="w-7 h-7 rounded-full bg-white/90 border border-white/80 flex items-center justify-center text-[#64748b] group-hover:text-[#0f172a] group-hover:bg-white shadow-2xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Technologies & Tools Squircle Row (From Reference Image) */}
        <section className="glass-bento p-6 sm:p-8 lg:p-10 space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              TOOLS & SKILLS
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#0f172a]">
              Technologies & Frameworks We Employ
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
                <div className="text-[9px] text-[#64748b] line-clamp-1">{tool.category}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Contact / Let's Connect Bento Box (From Reference Image) */}
        <section className="glass-bento p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block">
                LET'S COLLABORATE
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0f172a] leading-tight">
                Ready to turn every impression into a scalable growth engine?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-xl">
                Schedule a direct strategy conversation with Rayan Hany and our senior leadership team. We audit your brand presence and chart a clear path to category authority.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-sans font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/916282881159"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Direct WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
