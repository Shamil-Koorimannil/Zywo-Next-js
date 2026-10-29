"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Zap,
  CheckCircle2,
  Send,
  Coffee,
  Laptop,
  ChevronRight,
} from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Graphic & Brand Designer",
    portfolio: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const positions = [
    {
      title: "Graphic & Brand Designer",
      department: "Brand Strategy & Visual Craft",
      location: "Calicut / Malappuram",
      type: "Full-time",
      desc: "Focusing on bespoke identity systems, packaging architecture, editorial typography, and retail collateral for ambitious regional and national brands.",
      skills: ["Brand Systems", "Packaging Design", "Editorial Typography", "Figma / Illustrator"],
    },
    {
      title: "UI/UX & Design Systems Lead",
      department: "Digital Platforms",
      location: "Calicut / Hybrid",
      type: "Full-time",
      desc: "Crafting editorial-grade web application interfaces, e-commerce checkout flows, design tokens, and interactive component libraries.",
      skills: ["Figma Systems", "Interaction Design", "User Research", "Responsive Architecture"],
    },
    {
      title: "Cinematic Video Editor & Motion Artist",
      department: "Production Lab",
      location: "Malappuram Studio",
      type: "Full-time",
      desc: "Directing high-retention commercial video edits, dynamic social ad variations, sound design, color grading, and generative AI video workflows.",
      skills: ["Premiere Pro", "After Effects", "Color Grading", "Sound Design"],
    },
    {
      title: "Next.js & Frontend Engineer",
      department: "Technology",
      location: "Calicut / Hybrid",
      type: "Full-time",
      desc: "Engineering high-speed Next.js platforms, headless Shopify Plus architectures, custom canvas animations, and interactive web experiences.",
      skills: ["Next.js App Router", "React / TypeScript", "Tailwind CSS", "GSAP Animations"],
    },
    {
      title: "Performance Media Buyer & Growth Strategist",
      department: "Growth Media",
      location: "Remote / Kerala",
      type: "Full-time",
      desc: "Managing high-budget Meta Ads and Google Performance Max campaigns with disciplined ROAS optimization and creative testing funnels.",
      skills: ["Meta Ads Manager", "Google PMax", "Attribution Modeling", "Conversion Strategy"],
    },
  ];

  const perks = [
    {
      icon: Zap,
      title: "Practitioner Culture",
      desc: "Zero corporate bureaucracy. Work directly alongside founders and creative directors who execute.",
      tint: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    },
    {
      icon: Laptop,
      title: "Modern Tools & Gear",
      desc: "High-spec workstations, creative software licenses, AI tooling, and professional studio equipment.",
      tint: "bg-[#F0EBFF] text-[#A78BFA] border-[#A78BFA]/20",
    },
    {
      icon: Briefcase,
      title: "High-Impact Brands",
      desc: "Build campaigns that shape consumer culture across India and the GCC rather than boring maintenance work.",
      tint: "bg-[#EDF2FF] text-[#7699F8] border-[#7699F8]/20",
    },
    {
      icon: Heart,
      title: "Competitive Growth",
      desc: "Above-market compensation, project performance bonuses, and direct career progression paths.",
      tint: "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]",
    },
  ];

  return (
    <main className="relative min-h-screen glass-page-bg text-[#171923] selection:bg-[#F0EBFF] selection:text-[#171923] overflow-x-hidden">
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12 sm:space-y-16">
        {/* 1. Header Container */}
        <section className="glass-card-lg p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EBFF] border border-[#A78BFA]/25 text-[#A78BFA] text-[11px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>JOIN THE COLLECTIVE</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171923] tracking-tight leading-[1.1]">
              Build Brands That Shape Culture
            </h1>

            <p className="text-sm sm:text-base text-[#646778] font-normal leading-relaxed max-w-2xl">
              We are constantly seeking obsessive designers, cinematographers, strategists, and engineers who care deeply about craft, speed, and tangible results.
            </p>

            <div className="pt-2">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white font-sans font-semibold text-xs tracking-wide shadow-sm transition-all"
              >
                <span>View Open Positions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. Perks / Culture Section */}
        <section className="space-y-6">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              LIFE AT ZYWO
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
              Why Ambitious Creators Join Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-sm p-6 space-y-3"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs ${p.tint}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#171923]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#646778] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Open Positions List */}
        <section id="open-roles" className="space-y-6">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              CAREER OPPORTUNITIES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
              Current Open Roles
            </h2>
          </div>

          <div className="space-y-4">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="glass-surface p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#7699F8]/40 transition-all"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#EDF2FF] border border-[#7699F8]/20 text-[10px] font-semibold text-[#7699F8]">
                      {pos.department}
                    </span>
                    <span className="text-xs text-[#85899A]">•</span>
                    <span className="flex items-center gap-1 text-[11px] text-[#646778]">
                      <MapPin className="w-3 h-3 text-[#A78BFA]" />
                      {pos.location}
                    </span>
                    <span className="text-xs text-[#85899A]">•</span>
                    <span className="flex items-center gap-1 text-[11px] text-[#646778]">
                      <Clock className="w-3 h-3 text-[#7699F8]" />
                      {pos.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#171923] group-hover:text-[#7699F8] transition-colors">
                    {pos.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#646778] leading-relaxed">
                    {pos.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pos.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white border border-[#E3E5EE] text-[10px] font-medium text-[#646778]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    href="#apply"
                    onClick={() => setFormData({ ...formData, role: pos.title })}
                    className="px-5 py-2.5 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold shadow-xs transition-all inline-flex items-center gap-2"
                  >
                    <span>Apply for Role</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Application Form Container */}
        <section id="apply" className="glass-card-lg p-6 sm:p-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block">
                DIRECT APPLICATION
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171923]">
                Submit Your Portfolio & Credentials
              </h2>
              <p className="text-xs sm:text-sm text-[#646778]">
                We review every application thoroughly. Show us your best live work and explain why you want to build with Zywo.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto border border-[#BBF7D0]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#171923]">
                  Application Dispatched
                </h3>
                <p className="text-xs text-[#646778] max-w-sm mx-auto">
                  Thank you for applying. If your background aligns with our current pipeline, we will reach out to coordinate a portfolio conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                      Target Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923]"
                    >
                      {positions.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                      Portfolio / GitHub URL
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://behance.net/you or github.com/you"
                      className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                    Tell Us About Your Work & Ambitions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly highlight your core strengths and notable projects..."
                    className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
