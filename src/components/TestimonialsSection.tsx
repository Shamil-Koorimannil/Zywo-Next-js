"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The designs and concepts are consistently impressive. Zywo brings fresh ideas that align perfectly with our brand vision across all outlets.",
    name: "Ashar Mouzy",
    role: "Founder, Mouzy Avil Milk",
    avatar: "/images/testimonials/Ashar mouzy.webp",
  },
  {
    quote:
      "They handle every task with seriousness and professionalism. Working with this digital agency is smooth, efficient, and truly hassle-free.",
    name: "Shayban",
    role: "Co-Founder, Coolcane",
    avatar: "/images/testimonials/Shayban.webp",
  },
  {
    quote:
      "Our social media finally has direction and consistency. Zywo made our content intentional, resulting in steady and visible business growth.",
    name: "Ubais",
    role: "Director, Lamar Tiles",
    avatar: "/images/testimonials/Ubais.webp",
  },
  {
    quote:
      "A very cooperative and supportive team throughout the process. Thanks to Zywo, our brand page has become significantly more active and engaging.",
    name: "Saima Nadeem",
    role: "Founder, Edhwi",
    avatar: "/images/testimonials/Saima Nadeem.webp",
  },
  {
    quote:
      "A team of highly visionary individuals with strong creative potential. Their approach reflects both innovation and long-term strategic thinking.",
    name: "Nadeem Safran",
    role: "Creative Lead, Karikku",
    avatar: "/images/testimonials/Nadeem Safran.webp",
  },
  {
    quote:
      "They understood our vision and translated it into a complete brand system. Structured, memorable, and scalable design from start to finish.",
    name: "Yasin Salim",
    role: "Founder, Y69",
    avatar: "/images/testimonials/Yasin.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 md:py-36 bg-white text-zywo-navy border-t border-zywo-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <div className="pill-badge mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
            <span>Endorsements</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-zywo-navy uppercase mb-4">
            CLIENT PERSPECTIVES
          </h2>
          <p className="text-zywo-body text-base sm:text-lg font-sans font-light leading-relaxed">
            Direct feedback from founders, enterprise directors, and creative leads who partner with Zywo.
          </p>
        </div>

        {/* 6-Card Editorial Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#f8fafc] border border-zywo-navy/[0.06] shadow-sm hover:shadow-[0_8px_30px_rgba(142,166,214,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-zywo-periwinkle/60 mb-4" />
                <p className="text-zywo-slate text-sm sm:text-base font-sans font-light leading-relaxed mb-8">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-zywo-navy/[0.06]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-zywo-navy/[0.08]"
                  loading="lazy"
                />
                <div>
                  <div className="font-display font-bold text-sm text-zywo-navy">
                    {t.name}
                  </div>
                  <div className="text-xs font-sans text-zywo-muted">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
