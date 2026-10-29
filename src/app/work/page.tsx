"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  ChevronRight,
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
    { key: "digital", label: "Digital & E-Com" },
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
        "Elevating regional street sugarcane juice into a hygienic, premium bottled lifestyle beverage. We engineered the viral 'Irumb Karimbaakum' narrative showing arch-rivals united by natural sweetness, paired with custom bottle aesthetics and 3D digital motion.",
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
        "Positioning a premier tiles and sanitary showroom as the destination for luxury home design. We directed an editorial visual campaign centered on pristine architectural spaces, high-end product showcases, and high-trust storytelling.",
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
      impactLabel: "Social ROAS",
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
    <main className="relative min-h-screen glass-page-bg text-[#171923] selection:bg-[#F0EBFF] selection:text-[#171923] overflow-x-hidden">
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12 sm:space-y-16">
        {/* 1. Header Container */}
        <section className="glass-card-lg p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EBFF] border border-[#A78BFA]/25 text-[#A78BFA] text-[11px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>PROVEN CLIENT OUTCOMES</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171923] tracking-tight leading-[1.1]">
              Selected Work & Case Studies
            </h1>

            <p className="text-sm sm:text-base text-[#646778] font-normal leading-relaxed max-w-2xl">
              Every project is an investment in market authority. We partner with ambitious leaders to engineer campaigns, brand identities, and digital platforms that deliver verifiable commercial impact.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {categories.map((c) => {
                const isActive = activeFilter === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActiveFilter(c.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-[#171923] text-white shadow-xs"
                        : "bg-white/80 hover:bg-white text-[#646778] border border-[#E3E5EE]"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. Projects Grid */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card-sm p-5 sm:p-6 flex flex-col justify-between group hover:border-[#7699F8]/40 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Image container */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-white/90 shadow-2xs">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    />
                    {/* Impact Badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-white/90 shadow-xs flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-[#16A34A]" />
                      <span className="text-[11px] font-extrabold text-[#171923]">{project.impactMetric}</span>
                      <span className="text-[10px] text-[#646778] hidden sm:inline">{project.impactLabel}</span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#171923]/80 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider uppercase">
                      {project.client}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#7699F8] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-[#171923] group-hover:text-[#7699F8] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#646778] leading-relaxed line-clamp-3 mt-1.5">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E3E5EE]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white border border-[#E3E5EE] text-[10px] font-medium text-[#646778]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-7 h-7 rounded-full bg-white border border-[#E3E5EE] flex items-center justify-center text-[#85899A] group-hover:text-[#171923] group-hover:scale-105 transition-all"
                    title="Enquire about similar work"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Partner Brands Strip */}
        <section className="glass-surface p-6 sm:p-8 space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              PROVEN PARTNERSHIPS
            </span>
            <h2 className="font-display font-extrabold text-xl text-[#171923]">
              Trusted Across Retail, FMCG, Tech & Luxury
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
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
                className="px-3.5 py-2 rounded-xl bg-white/80 border border-white/95 shadow-2xs text-xs font-semibold text-[#171923]"
              >
                {partner}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Consultation CTA */}
        <section className="glass-card-lg p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#171923]">
                Want to build the next benchmark case study in your category?
              </h3>
              <p className="text-xs sm:text-sm text-[#646778] leading-relaxed">
                Let's explore your current performance metrics, identify market whitespace, and engineer a customized creative strategy.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold shadow-sm transition-all inline-flex items-center gap-2"
              >
                <span>Start Your Project</span>
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
