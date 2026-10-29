"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  Film,
  Rocket,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "5+", label: "Years Experience", detail: "In Data Strategy & Brand Systems" },
    { number: "30+", label: "Projects Delivered", detail: "Across India & GCC Markets" },
    { number: "15+", label: "Creative Specialists", detail: "Strategists, 3D Artists & Engineers" },
    { number: "+140%", label: "Average Brand Lift", detail: "Documented Client ROAS & Reach" },
  ];

  const principles = [
    {
      title: "Data-Led Diagnostics",
      subtitle: "Eliminating Guesswork",
      desc: "Every creative concept, ad script, and design system begins with empirical consumer search signals, audience psychographics, and competitor whitespace.",
      icon: Compass,
      tint: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    },
    {
      title: "Arresting Visual Craft",
      subtitle: "Unforgettable Impressions",
      desc: "From 3D motion and bespoke typography to cinematic commercial film production, we craft design systems that demand attention and command category respect.",
      icon: Film,
      tint: "bg-[#F0EBFF] text-[#A78BFA] border-[#A78BFA]/20",
    },
    {
      title: "Scalable Infrastructure",
      subtitle: "Engineering for Conversion",
      desc: "Modern Next.js web applications, high-converting checkout funnels, and algorithmic media engines designed for rapid load times and peak conversion.",
      icon: Rocket,
      tint: "bg-[#EDF2FF] text-[#7699F8] border-[#7699F8]/20",
    },
    {
      title: "Defensive Brand Moats",
      subtitle: "Protecting Market Authority",
      desc: "We protect market share against copycats and commoditization by instilling authentic brand moats, trademarkable aesthetics, and customer loyalty.",
      icon: ShieldCheck,
      tint: "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]",
    },
  ];

  return (
    <main className="relative min-h-screen glass-page-bg text-[#171923] selection:bg-[#F0EBFF] selection:text-[#171923] overflow-x-hidden">
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12 sm:space-y-16">
        {/* 1. Page Header Container */}
        <section className="glass-card-lg p-6 sm:p-10 lg:p-12 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EBFF] border border-[#A78BFA]/25 text-[#A78BFA] text-[11px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>ABOUT ZYWO</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171923] tracking-tight leading-[1.1]">
              Built by practitioners. Driven by purpose.
            </h1>

            <p className="font-editorial-italic text-xl sm:text-2xl text-[#7699F8]">
              “Every Impression Matters.”
            </p>

            <p className="text-sm sm:text-base text-[#646778] font-normal leading-relaxed max-w-2xl">
              Zywo was established as an antidote to cookie-cutter marketing. Operating out of Calicut and Malappuram, our multidisciplinary team of designers, cinematographers, engineers, and growth marketers partners with ambitious regional and national brands to build lasting category authority.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white font-sans font-semibold text-xs tracking-wide shadow-sm transition-all"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#171923] border border-white/90 font-sans font-semibold text-xs tracking-wide shadow-xs transition-all"
              >
                <span>Start a Project</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#7699F8]" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Founder & Narrative Split */}
        <section className="glass-surface p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-white/70 border border-white/90 shadow-[0_8px_24px_rgba(65,65,100,0.06)] aspect-[4/5]">
                <img
                  src="/images/team/rayan-hany.webp"
                  alt="Rayan Hany — Founder & Creative Director at Zywo"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171923]/90 via-[#171923]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <blockquote className="font-editorial-italic text-sm sm:text-base leading-relaxed text-white/95 mb-3">
                    “Advertising without data is guesswork. Advertising without creative craft is invisible. We lead with strategy and execute with precision.”
                  </blockquote>
                  <div className="font-display font-bold text-base">Rayan Hany</div>
                  <div className="text-[11px] text-[#A78BFA] font-medium">
                    Founder & Creative Director
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Origin & Statistics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-2">
                  OUR ORIGIN & PHILOSOPHY
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923] leading-snug">
                  From observation to execution.
                </h2>
              </div>

              <p className="text-sm text-[#646778] leading-relaxed">
                In 2024, at an Indian business conference, our founder Rayan Hany observed numerous ambitious founders struggling with the same fundamental problem: their products were brilliant, but their market presence was invisible—hidden behind generic templates and disconnected ad campaigns.
              </p>

              <p className="text-sm text-[#646778] leading-relaxed">
                Zywo was created to deliver an integrated model: lead with data diagnostics, formulate decisive advertising strategy, and execute across high-converting creative, cinematic motion, and modern web platforms.
              </p>

              {/* 4 Compact Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/80 border border-white/95 shadow-xs text-center"
                  >
                    <div className="font-display font-black text-xl text-[#171923]">
                      {s.number}
                    </div>
                    <div className="text-[11px] font-semibold text-[#646778] mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Principles Grid */}
        <section className="space-y-6">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              DISCIPLINES & VALUES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
              The Principles That Guide Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-sm p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs ${p.tint}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-base text-[#171923]">
                        {p.title}
                      </h3>
                      <div className="text-[11px] font-semibold text-[#7699F8] mb-2">
                        {p.subtitle}
                      </div>
                      <p className="text-xs text-[#646778] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E3E5EE]/60 flex justify-end">
                    <span className="text-[11px] font-mono text-[#85899A]">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Kerala Studio Presence */}
        <section className="glass-surface p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block">
                LOCATIONS
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                Operating from Kerala's Creative Centers
              </h3>
              <p className="text-xs sm:text-sm text-[#646778] leading-relaxed">
                Operating dual creative and production labs in Calicut and Malappuram, partnering with brands across Kerala, India, and the GCC.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/80 border border-white/90 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#171923]">
                  <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Calicut Studio</span>
                </div>
                <p className="text-[11px] text-[#646778]">
                  Strategy, Direction & Client Suites
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-white/90 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#171923]">
                  <MapPin className="w-3.5 h-3.5 text-[#7699F8]" />
                  <span>Malappuram Lab</span>
                </div>
                <p className="text-[11px] text-[#646778]">
                  3D Motion, CGI & Web Engineering
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Consultation CTA Container */}
        <section className="glass-card-lg p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                Ready to engineer your brand's next growth milestone?
              </h3>
              <p className="text-xs sm:text-sm text-[#646778] leading-relaxed">
                Book a direct strategy consultation with our leadership team. We analyze your market position and provide actionable recommendations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold shadow-sm transition-all"
              >
                Get in Touch
              </Link>
              <a
                href="https://wa.me/916282881159"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#171923] border border-[#E3E5EE] text-xs font-semibold shadow-xs transition-all"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
