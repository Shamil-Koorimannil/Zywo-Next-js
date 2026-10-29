"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Tag,
  Eye,
  CheckCircle2,
  ChevronRight,
  Filter,
} from "lucide-react";

interface ProjectItem {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  categoryKey: string;
  impactMetric: string;
  impactLabel: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { key: "all", label: "All Work" },
    { key: "branding", label: "Brand Strategy" },
    { key: "campaign", label: "Campaign Direction" },
    { key: "digital", label: "Web Systems & E-Com" },
    { key: "retail", label: "Luxury & Retail" },
  ];

  const projects: ProjectItem[] = [
    {
      id: "coolcane",
      client: "Coolcane",
      title: "Coolcane — “Irumb Karimbaakum”",
      subtitle: "Brand Strategy, Bottle Packaging & 3D Motion",
      category: "Campaign Direction & Packaging",
      categoryKey: "campaign",
      impactMetric: "+180%",
      impactLabel: "Retail Velocity",
      description:
        "Elevating regional street sugarcane juice into a hygienic, premium bottled lifestyle beverage. We engineered the viral 'Irumb Karimbaakum' narrative showing fierce rivals united by natural sweetness, paired with custom bottle aesthetics and 3D digital motion.",
      tags: ["Packaging Direction", "Social Campaign", "3D Motion", "Brand Story"],
      imageSrc: "/images/projects/coolcane-campaign.webp",
    },
    {
      id: "mouzy",
      client: "Mouzy Avil Milk",
      title: "Mouzy — “Manjayellam Mouzy Alla”",
      subtitle: "Identity Preservation & Anti-Counterfeit Defense",
      category: "Brand Strategy & Defensive Moat",
      categoryKey: "branding",
      impactMetric: "100%",
      impactLabel: "Market Moat Secured",
      description:
        "Defending an iconic Kerala dessert brand operating across India and the GCC. When copycat storefronts threatened market share, Zywo engineered a bold, humorous positioning campaign reinforcing the authentic yellow brand identity and protecting customer trust.",
      tags: ["Visual Identity", "Brand Protection", "Outdoor & Print", "Video Direction"],
      imageSrc: "/images/projects/mouzy-campaign.webp",
    },
    {
      id: "lamar",
      client: "Lamar Tiles & Sanitary",
      title: "Lamar — “Lamarkk Ponnoli”",
      subtitle: "Luxury Retail & Architectural Showcase",
      category: "Luxury Retail & Architectural",
      categoryKey: "retail",
      impactMetric: "+140%",
      impactLabel: "Showroom Footfall",
      description:
        "Positioning a premier tiles and sanitary showroom as the ultimate destination for luxury home design. We directed an editorial visual campaign centered on pristine architectural spaces, high-end product showcases, and high-trust storytelling.",
      tags: ["Retail Strategy", "Architectural Film", "Social Advertising"],
      imageSrc: "/images/projects/lamar-bathtub.webp",
    },
    {
      id: "shairan",
      client: "Shairan Cafe",
      title: "Shairan Cafe — Modern Bakery & Coffee House",
      subtitle: "Culinary Identity, Packaging & Social Engagement",
      category: "Hospitality & Packaging",
      categoryKey: "branding",
      impactMetric: "4.8x",
      impactLabel: "Social Engagement ROAS",
      description:
        "Crafting a contemporary culinary identity for an artisanal coffee house and dessert bakery. From tactile packaging design and dessert photography to high-retention social media reels.",
      tags: ["Hospitality Branding", "Packaging Design", "Food Photography"],
      imageSrc: "/images/projects/shairan-kunafa.webp",
    },
    {
      id: "edhwi",
      client: "Edhwi",
      title: "Edhwi — Modern Lifestyle Apparel",
      subtitle: "E-Commerce Strategy & Visual Identity",
      category: "E-Commerce & Digital",
      categoryKey: "digital",
      impactMetric: "+210%",
      impactLabel: "DTC Checkout Lift",
      description:
        "Building a unified e-commerce identity for a modern fashion brand. We built high-converting product pages, editorial lookbooks, and targeted Meta ad funnels that drove sustainable repeat order volume.",
      tags: ["Shopify Plus", "Fashion Lookbooks", "Meta Ads"],
      imageSrc: "/images/projects/edhwi-brand.webp",
    },
    {
      id: "y69",
      client: "Y69 Streetwear",
      title: "Y69 — Urban Youth Culture & Streetwear",
      subtitle: "Brand Identity, Merchandise & Drop Campaigns",
      category: "Streetwear & Culture",
      categoryKey: "digital",
      impactMetric: "12 min",
      impactLabel: "Sold Out Drop",
      description:
        "Directing the visual universe for an edgy streetwear label. We created high-energy drop campaign teasers, distinct typography, and influencer seeding campaigns that sold out seasonal drops in minutes.",
      tags: ["Urban Identity", "Drop Strategy", "Merch Design"],
      imageSrc: "/images/projects/y69-brand.webp",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeFilter);

  return (
    <main className="relative min-h-screen ethereal-bg text-zywo-navy selection:bg-indigo-100 overflow-x-hidden">
      {/* Background Decorative Ethereal Glass Spheres */}
      <div className="fixed top-28 right-10 w-72 h-72 glass-sphere pointer-events-none opacity-45 blur-xs -z-0" />
      <div className="fixed bottom-36 left-12 w-80 h-80 glass-sphere pointer-events-none opacity-40 blur-sm -z-0" />

      {/* Floating Frosted Pill Header */}
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24 space-y-8 sm:space-y-12">
        {/* 1. Hero Bento Box (Exact Style of Reference Image) */}
        <section className="glass-bento-hero p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100/70 border border-violet-200/60 text-violet-700 text-[11px] font-bold tracking-[0.2em] uppercase w-fit shadow-xs">
              <Sparkles className="w-3 h-3 text-violet-500" />
              <span>PROVEN CLIENT OUTCOMES</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] tracking-tight leading-[1.08]">
              Selected Work & Case Studies
            </h1>

            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
              Every project is an investment in market authority. We partner with ambitious leaders to engineer campaigns, brand identities, and digital platforms that deliver measurable commercial impact.
            </p>

            {/* Category Pill Filters (Matching Reference Filter Aesthetics) */}
            <div className="flex flex-wrap items-center gap-2 pt-3">
              {categories.map((c) => {
                const isActive = activeFilter === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActiveFilter(c.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-[#0f172a] text-white shadow-sm"
                        : "bg-white/70 hover:bg-white text-[#475569] border border-white/80"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. Bento Projects Showcase Grid (Matching Reference Project Cards) */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-bento p-5 sm:p-6 flex flex-col justify-between group hover:border-indigo-300 hover:shadow-[0_16px_36px_rgba(142,166,214,0.18)] transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Rounded Glass Image Container */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-white/80 shadow-2xs">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Impact Metric Floating Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/90 shadow-sm flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-xs font-extrabold text-[#0f172a]">{project.impactMetric}</span>
                      <span className="text-[10px] text-[#64748b] hidden sm:inline">{project.impactLabel}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#0f172a]/75 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider uppercase">
                      {project.client}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-500 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#0f172a] group-hover:text-indigo-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#64748b] leading-relaxed line-clamp-3 mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/70 border border-white/80 text-[10px] font-medium text-[#475569]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-8 h-8 rounded-full bg-white/90 border border-white/90 flex items-center justify-center text-[#64748b] group-hover:text-[#0f172a] group-hover:bg-white shadow-2xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    title="Enquire about similar work"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Client Marquee / Trust Strip in Frosted Bento */}
        <section className="glass-bento p-6 sm:p-8 space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              PROVEN PARTNERSHIPS
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0f172a]">
              Trusted Across Retail, FMCG, Tech & Luxury
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {[
              "Coolcane Bottled Beverages",
              "Mouzy Avil Milk National",
              "Lamar Luxury Tiles",
              "Shairan Cafe & Bakery",
              "Edhwi Lifestyle Apparel",
              "Y69 Streetwear",
              "Vibe Lifestyle",
              "De Oasis Real Estate",
            ].map((partner, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/85 shadow-2xs text-xs font-semibold text-[#334155]"
              >
                {partner}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact CTA Bento Box */}
        <section className="glass-bento p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block">
                YOUR BRAND HERE
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0f172a] leading-tight">
                Want to build the next benchmark case study in your category?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-xl">
                Let's explore your current metrics, identify market whitespace, and engineer a customized creative strategy.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-sans font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Start Your Project</span>
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
