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
  MessageSquare,
  Building,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Brand Strategy & Identity",
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
    }, 1000);
  };

  const projectTypes = [
    "Brand Strategy & Identity",
    "UI/UX & Web Development",
    "AI Commercial Ads & Video",
    "Performance Marketing & ROAS",
    "E-Commerce Architecture",
    "Full-Service Brand Scaling",
  ];

  const budgets = [
    "< $2,000",
    "$2,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000+",
  ];

  return (
    <main className="relative min-h-screen ethereal-bg text-zywo-navy selection:bg-indigo-100 overflow-x-hidden">
      {/* Background Decorative Ethereal Glass Spheres */}
      <div className="fixed top-24 left-10 w-72 h-72 glass-sphere pointer-events-none opacity-45 blur-xs -z-0" />
      <div className="fixed bottom-36 right-10 w-80 h-80 glass-sphere pointer-events-none opacity-40 blur-sm -z-0" />

      {/* Floating Frosted Pill Header */}
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24 space-y-8 sm:space-y-12">
        {/* 1. Main Contact Bento Box (Exact Layout of Reference Image "LET'S CONNECT") */}
        <section className="glass-bento-hero p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Coordinates & Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100/70 border border-violet-200/60 text-violet-700 text-[11px] font-bold tracking-[0.2em] uppercase w-fit shadow-xs">
                <Sparkles className="w-3 h-3 text-violet-500" />
                <span>LET'S CONNECT</span>
              </div>

              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                  Have a project in mind? Let's build something exceptional.
                </h1>
                <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
                  Every breakthrough begins with a conversation. Share your brand ambitions with Rayan Hany and our senior leadership team.
                </p>
              </div>

              {/* Direct Channel Pills (Matching Reference Image) */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:hello@zywo.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/70 hover:bg-white backdrop-blur-md border border-white/90 shadow-2xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-100/80 border border-violet-200/50 text-violet-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748b] block">Email Inquiries</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0f172a] group-hover:text-indigo-600 transition-colors">hello@zywo.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/916282881159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/70 hover:bg-white backdrop-blur-md border border-white/90 shadow-2xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200/50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748b] block">Direct WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0f172a] group-hover:text-emerald-600 transition-colors">+91 6282881159</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/80 border border-blue-200/50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748b] block">Studio Presence</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0f172a]">Calicut & Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>

              {/* Office hours badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-white/70 text-[11px] text-[#64748b] w-fit">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Mon — Sat: 9:30 AM — 6:30 PM IST</span>
              </div>
            </div>

            {/* Right Column: Sleek Frosted Glass Form (Matching Reference Image) */}
            <div className="lg:col-span-7">
              <div className="glass-bento p-6 sm:p-8 relative">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-[#0f172a]">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Rayan Hany and our strategy leads will review your brand details and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-[#0f172a] text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a] block mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aarav Singh"
                          className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#0f172a] placeholder:text-[#94a3b8]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a] block mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#0f172a] placeholder:text-[#94a3b8]"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a] block mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#0f172a] placeholder:text-[#94a3b8]"
                      />
                    </div>

                    {/* Project Type Select */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a] block mb-1.5">
                        Project Focus Area
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {projectTypes.map((pt) => {
                          const isSelected = formData.projectType === pt;
                          return (
                            <button
                              type="button"
                              key={pt}
                              onClick={() => setFormData({ ...formData, projectType: pt })}
                              className={`p-2.5 rounded-xl text-left text-[11px] font-medium transition-all ${
                                isSelected
                                  ? "bg-[#0f172a] text-white shadow-xs"
                                  : "bg-white/70 hover:bg-white text-[#475569] border border-white/80"
                              }`}
                            >
                              {pt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Range Pills */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a] block mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgets.map((b) => {
                          const isSelected = formData.budget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`py-2 px-3 rounded-xl text-center text-[11px] font-medium transition-all ${
                                isSelected
                                  ? "bg-indigo-600 text-white shadow-xs"
                                  : "bg-white/70 hover:bg-white text-[#475569] border border-white/80"
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a] block mb-1.5">
                        Your Message / Ambitions
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand, current challenges, and goals..."
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#0f172a] placeholder:text-[#94a3b8] resize-none"
                      />
                    </div>

                    {/* Submit Button (Matching Reference Image) */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Subtle 3D Glass Accent Sphere in Corner */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 glass-sphere opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Studio Locations Bento */}
        <section className="glass-bento p-6 sm:p-8 space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 block mb-1">
              STUDIO LOCATIONS
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0f172a]">
              Where We Create
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/85 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Calicut Studio</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#0f172a]">
                Strategy & Creative Direction
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Creative concepting, editorial film direction, and brand strategy suites.
              </p>
              <div className="text-[11px] text-[#475569] font-medium pt-1">
                Calicut, Kerala, India
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/85 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Malappuram Studio</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#0f172a]">
                Production & Technology Lab
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                3D CGI visualizers, generative AI ad pipelines, and high-performance engineering.
              </p>
              <div className="text-[11px] text-[#475569] font-medium pt-1">
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
