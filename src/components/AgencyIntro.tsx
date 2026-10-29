"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AgencyIntro() {
  return (
    <section id="intro" className="relative py-28 md:py-36 bg-[#0a0e17] text-white border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Minimal Section Label */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#93b4ff] font-body block mb-3">
            Philosophy
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
            ABOUT ZYWO
          </h2>
        </div>

        {/* Large Editorial Statement in Changa Bold & Roboto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-8">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-zinc-100">
              We operate at the intersection of sculptural art direction and precision digital engineering.
            </h3>
            <p className="mt-8 text-zinc-400 text-base sm:text-lg font-body font-light leading-relaxed max-w-3xl">
              Zywo is a minimalist creative and digital studio. We reject generic templates and disposable visual noise.
              Instead, we approach every identity, platform, and campaign as an architectural canvas crafted with deliberate
              intent, enduring beauty, and measurable business impact.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-body block mb-2">
                Brand Standard
              </span>
              <div className="text-xl font-heading font-bold text-white mb-2">
                Pure Intentionality
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-body leading-relaxed">
                Every line of typography, surface texture, and interactive state exists for a distinct strategic purpose.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-body block mb-2">
                Discipline
              </span>
              <div className="text-xl font-heading font-bold text-white mb-2">
                Integrated Craft
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-body leading-relaxed">
                Brand identity, custom Next.js engineering, cinematic video, and full-funnel performance united.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars in Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Deliberate Aesthetics",
              desc: "Form informed by narrative. We build visual systems that command attention and evoke visceral distinction.",
            },
            {
              num: "02",
              title: "Technical Rigor",
              desc: "Built on modern web foundations: Next.js, WebGL, GSAP, and sub-second performance across all devices.",
            },
            {
              num: "03",
              title: "Strategic Cohesion",
              desc: "From initial logo mark to paid acquisition funnels, every brand element works as a unified force.",
            },
            {
              num: "04",
              title: "Enduring Standard",
              desc: "We design for longevity and lasting equity, not short-lived novelty that expires in one fiscal quarter.",
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-sm text-[#93b4ff] mb-4 block">{pillar.num}</span>
                <h4 className="font-heading font-bold text-lg text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm font-body leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
