"use client";

import React, { useState } from "react";
import { ArrowUpRight, BarChart3, Compass, Rocket, Check, Sparkles, TrendingUp, Layers, Database } from "lucide-react";

interface ServiceItem {
  name: string;
  description: string;
  tags: string[];
}

interface ServicePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
}

const strategicEngineSteps = [
  {
    step: "01",
    label: "Data & Market Signals",
    title: "We Analyze The Data",
    description: "Deep audit of consumer behavior, search intent, competitive whitespace, and historical performance to eliminate guesswork.",
    icon: Database,
  },
  {
    step: "02",
    label: "Strategic Blueprint",
    title: "We Build The Strategy",
    description: "Formulating full-funnel campaign architecture, distinctive brand positioning, and channel-specific media roadmaps.",
    icon: Compass,
  },
  {
    step: "03",
    label: "Relentless Execution",
    title: "We Execute & Scale",
    description: "Deploying high-impact creative, AI ad pipelines, paid media buying, and conversion platforms with continuous ROAS tracking.",
    icon: Rocket,
  },
];

const servicePillars: ServicePillar[] = [
  {
    number: "01",
    title: "Data & Advertising Strategy",
    subtitle: "Intelligence, Market Diagnostics & Campaign Architecture",
    description:
      "Great advertising begins with the numbers, not subjective opinions. We audit customer journeys, market dynamics, and unit economics to build data-informed advertising strategies that eliminate wasted ad spend.",
    services: [
      {
        name: "Market & Consumer Data Intelligence",
        description:
          "In-depth customer research, search demand diagnostics, competitive benchmarking, and psychographic profiling to uncover your highest-ROI opportunities.",
        tags: ["Consumer Psychology", "Competitive Audits", "Intent Mapping"],
      },
      {
        name: "Full-Funnel Advertising Strategy",
        description:
          "Multi-stage campaign architecture, media mix modeling, budget distribution, and revenue projections mapped from awareness to conversion.",
        tags: ["Campaign Architecture", "Media Mix Modeling", "CAC & ROAS Targets"],
      },
      {
        name: "Brand Positioning & Messaging Strategy",
        description:
          "Category framing, defensible value propositions, verbal identity, and messaging hierarchy designed to out-position competitors and command premium pricing.",
        tags: ["Brand Positioning", "Verbal Identity", "Messaging Frameworks"],
      },
      {
        name: "Attribution & Growth Analytics",
        description:
          "Custom tracking pipelines, multi-touch attribution, real-time analytics dashboards, and unit economics modeling to measure true business impact.",
        tags: ["Conversion Attribution", "Real-Time Dashboards", "LTV / CAC Modeling"],
      },
    ],
  },
  {
    number: "02",
    title: "Strategic Creative & Ad Production",
    subtitle: "High-Impact Creative Assets Engineered Directly From Strategic Insights",
    description:
      "Creative is the vehicle through which strategy delivers results. Once the data tells us what the market responds to, our creative studio produces arresting commercial films, AI ad variations, and distinctive brand assets engineered to stop the scroll.",
    services: [
      {
        name: "Commercial Film & Video Production",
        description:
          "High-impact commercial cinematography, paced narrative editing, founder stories, and viral social reels built to capture immediate attention.",
        tags: ["Commercial Films", "4K Cinematography", "Social Video Reels"],
      },
      {
        name: "AI Ad Creation & Rapid Testing",
        description:
          "Next-generation generative motion pipelines, hyper-targeted ad variations, and rapid creative iteration for algorithmic testing and scaling.",
        tags: ["Generative Motion", "Rapid Iteration", "Creative Hook Testing"],
      },
      {
        name: "Brand Identity & Visual Systems",
        description:
          "Comprehensive design systems, logos, editorial typography hierarchy, tactile collateral, and packaging that make brands unforgettable.",
        tags: ["Design Systems", "Packaging Design", "Editorial Art Direction"],
      },
      {
        name: "Direct-Response Copywriting & Scripting",
        description:
          "Psychology-backed ad scripts, viral hooks, persuasive landing page copy, and campaign narratives crafted to spark immediate consumer action.",
        tags: ["Ad Scripting", "Direct-Response Copy", "Hook Ideation"],
      },
    ],
  },
  {
    number: "03",
    title: "Omnichannel Execution & Media Scale",
    subtitle: "Deploying, Managing & Scaling Campaigns Across Key Networks",
    description:
      "A world-class strategy requires disciplined execution. We deploy, manage, and continuously scale campaigns across paid advertising networks, bespoke high-speed web platforms, and organic distribution channels.",
    services: [
      {
        name: "Performance Advertising & Paid Media",
        description:
          "Targeted paid ad campaigns across Meta, Google, YouTube, and TikTok with ongoing algorithmic optimization, creative refreshes, and ROAS scaling.",
        tags: ["Meta Ads", "Google Search & Performance Max", "ROAS Scaling"],
      },
      {
        name: "High-Converting Web & Funnel Platforms",
        description:
          "Custom Next.js web applications, sub-second landing pages, and interactive UI/UX engineered for maximum conversion rates and smooth user journeys.",
        tags: ["Next.js & TypeScript", "Landing Page Funnels", "Conversion Rate (CRO)"],
      },
      {
        name: "Social Media Ecosystem & Distribution",
        description:
          "End-to-end social channel architecture, editorial calendars, creative production, and community engagement to drive organic authority.",
        tags: ["Content Calendars", "Organic Distribution", "Community Building"],
      },
      {
        name: "Lead Generation & Retention Engines",
        description:
          "High-intent lead capture funnels, automated qualification workflows, WhatsApp and email nurture sequences, and CRM pipeline integrations.",
        tags: ["Lead Funnels", "CRM Integration", "Automated Nurture"],
      },
    ],
  },
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-white text-zywo-navy border-t border-zywo-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b border-zywo-navy/[0.08]">
          <div className="max-w-2xl">
            <div className="pill-badge mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
              <span>Strategy-First Advertising Agency</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-zywo-navy uppercase">
              WHAT WE DO
            </h2>
            <p className="mt-4 text-zywo-navy font-display font-semibold text-xl sm:text-2xl leading-snug">
              We position our agency as strategy first. We use data to build strategies and execute those strategies.
            </p>
          </div>

          <p className="text-zywo-body font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            We don’t rely on guesswork or generic niche formulas. Every campaign, brand move, and digital touchpoint is anchored in hard market data, distilled into a clear advertising strategy, and executed across creative and media.
          </p>
        </div>

        {/* 3-Step Strategy-to-Execution Engine Banner */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategicEngineSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-zywo-navy/[0.06] hover:border-zywo-periwinkle/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-zywo-periwinkle">
                    {item.label}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-zywo-navy/[0.06] flex items-center justify-center text-zywo-navy group-hover:text-zywo-periwinkle transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-display font-extrabold text-2xl text-zywo-navy mb-2">
                  <span className="text-zywo-muted text-lg mr-2 font-mono font-normal">{item.step} /</span>
                  {item.title}
                </div>
                <p className="text-zywo-body text-xs sm:text-sm font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {servicePillars.map((pillar, idx) => (
            <button
              key={pillar.number}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === idx
                  ? "bg-zywo-navy text-white shadow-sm"
                  : "bg-zywo-soft text-zywo-slate hover:bg-zywo-periwinkleLight/60"
              }`}
            >
              <span className={activeTab === idx ? "text-zywo-powder" : "text-zywo-muted"}>
                {pillar.number}
              </span>
              <span>{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Card Display */}
        <div className="bg-[#f8fafc] rounded-3xl p-8 sm:p-12 border border-zywo-navy/[0.08]">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zywo-periwinkle block mb-2">
              {servicePillars[activeTab].subtitle}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-zywo-navy mb-4">
              {servicePillars[activeTab].title}
            </h3>
            <p className="text-zywo-body text-base font-sans font-light leading-relaxed">
              {servicePillars[activeTab].description}
            </p>
          </div>

          {/* 4 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicePillars[activeTab].services.map((srv) => (
              <div
                key={srv.name}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-zywo-navy/[0.06] hover:border-zywo-periwinkle/40 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-zywo-navy mb-2">
                    {srv.name}
                  </h4>
                  <p className="text-zywo-body text-sm font-sans font-light leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zywo-navy/[0.04]">
                  {srv.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-zywo-soft text-zywo-slate text-[11px] font-sans font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
