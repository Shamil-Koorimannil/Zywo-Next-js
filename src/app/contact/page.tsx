"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Brand Strategy & Positioning",
    budget: "$2,000 - $5,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const projectTypes = [
    "Brand Strategy & Positioning",
    "UI/UX & Web Development",
    "AI Commercial Ads & Film",
    "Performance Media & ROAS",
    "E-Commerce Architecture",
    "Full Brand Scaling",
  ];

  const budgets = [
    "< $2,000",
    "$2,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000+",
  ];

  return (
    <main className="relative min-h-screen glass-page-bg text-[#171923] selection:bg-[#F0EBFF] selection:text-[#171923] overflow-x-hidden">
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12 sm:space-y-16">
        {/* 1. Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card-lg p-6 sm:p-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2FF] border border-[#7699F8]/25 text-[#7699F8] text-[11px] font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#7699F8]" />
                <span>LET'S CONNECT</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#171923] tracking-tight leading-[1.1]">
                Have a project in mind? Let's build something exceptional.
              </h1>

              <p className="text-sm text-[#646778] leading-relaxed">
                Every breakthrough begins with a conversation. Share your brand ambitions with Rayan Hany and our senior leadership team.
              </p>

              {/* Direct Channel Cards */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:hello@zywo.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 hover:bg-white border border-[#E3E5EE] shadow-2xs transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F0EBFF] border border-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#85899A] block">Email Direct</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923] group-hover:text-[#7699F8] transition-colors">hello@zywo.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/916282881159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 hover:bg-white border border-[#E3E5EE] shadow-2xs transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#DCFCE7] border border-[#BBF7D0] text-[#16A34A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#85899A] block">WhatsApp Business</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923] group-hover:text-[#16A34A] transition-colors">+91 6282881159</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/80 border border-[#E3E5EE] shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-[#EDF2FF] border border-[#7699F8]/20 text-[#7699F8] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#85899A] block">Dual Studios</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923]">Calicut & Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-[#E3E5EE] text-[11px] text-[#646778] w-fit">
                <Clock className="w-3.5 h-3.5 text-[#7699F8]" />
                <span>Mon — Sat: 9:30 AM — 6:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scoping Form */}
          <div className="lg:col-span-7">
            <div className="glass-surface p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto border border-[#BBF7D0]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#171923]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#646778] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Rayan Hany and our strategy leads will review your brand details and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-[#171923] text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rayan Hany"
                        className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 62828 81159"
                      className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1.5">
                      Core Discipline Focus
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((pt) => {
                        const isSelected = formData.projectType === pt;
                        return (
                          <button
                            type="button"
                            key={pt}
                            onClick={() => setFormData({ ...formData, projectType: pt })}
                            className={`p-2 rounded-lg text-left text-[11px] font-medium transition-all ${
                              isSelected
                                ? "bg-[#171923] text-white shadow-2xs"
                                : "bg-white/80 hover:bg-white text-[#646778] border border-[#E3E5EE]"
                            }`}
                          >
                            {pt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 px-3 rounded-lg text-center text-[11px] font-medium transition-all ${
                              isSelected
                                ? "bg-[#7699F8] text-white shadow-2xs"
                                : "bg-white/80 hover:bg-white text-[#646778] border border-[#E3E5EE]"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#171923] block mb-1">
                      Your Brand & Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your product, current marketing bottlenecks, and what you aim to achieve..."
                      className="w-full px-4 py-2.5 rounded-xl glass-input-field text-xs sm:text-sm text-[#171923] placeholder:text-[#85899A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-full bg-[#171923] hover:bg-[#2D3748] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2. Studio Coordinates Bento */}
        <section className="glass-surface p-6 sm:p-8 space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7699F8] block mb-1">
              PHYSICAL PRESENCE
            </span>
            <h2 className="font-display font-extrabold text-xl text-[#171923]">
              Kerala Creative & Production Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-white/80 border border-white/95 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#A78BFA] font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Calicut Studio</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#171923]">
                Strategy & Creative Direction
              </h3>
              <p className="text-xs text-[#646778] leading-relaxed">
                Brand narrative workshops, client strategy sessions, and commercial film creative suites.
              </p>
              <div className="text-[11px] text-[#85899A] font-medium pt-1">
                Calicut, Kerala, India
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/80 border border-white/95 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#7699F8] font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Malappuram Lab</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#171923]">
                Production & Technology Lab
              </h3>
              <p className="text-xs text-[#646778] leading-relaxed">
                3D CGI modeling, generative AI ad pipelines, sound design, and modern web engineering.
              </p>
              <div className="text-[11px] text-[#85899A] font-medium pt-1">
                Malappuram, Kerala, India
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
