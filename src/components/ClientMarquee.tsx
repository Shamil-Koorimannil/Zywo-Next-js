"use client";

import React from "react";

const clientLogos = [
  { name: "Indomie", src: "/images/clients/LOGO_INDOMIE.svg" },
  { name: "Mouzy", src: "/images/clients/Mouzy logo Yellow.svg" },
  { name: "Coolcane", src: "/images/clients/Coolcane logo.svg" },
  { name: "Lamar", src: "/images/clients/Lamar logo.svg" },
  { name: "Shairan Cafe", src: "/images/clients/Shairan Cafe logo Orange.svg" },
  { name: "Edhwi", src: "/images/clients/Edhwi logo.svg" },
  { name: "Trace", src: "/images/clients/Trace  logo.svg" },
  { name: "Y69", src: "/images/clients/Y69 logo.svg" },
  { name: "Criswings", src: "/images/clients/Criswings logo.svg" },
  { name: "Fillmore", src: "/images/clients/Fillmore logo.svg" },
  { name: "Mandi Manzil", src: "/images/clients/Mandi manzil.svg" },
  { name: "Polski Kebab", src: "/images/clients/Polski Kebab.svg" },
  { name: "Pisang", src: "/images/clients/Pisang logo.svg" },
  { name: "Potto Pomme", src: "/images/clients/Potto pomme.svg" },
  { name: "ARC", src: "/images/clients/ARC logo.svg" },
  { name: "Atom Jr", src: "/images/clients/Atom jr Logo.svg" },
  { name: "Fluxify", src: "/images/clients/fluxify logo.svg" },
  { name: "Fudge", src: "/images/clients/fudge logo.svg" },
  { name: "Thara Group", src: "/images/clients/thara group logo.svg" },
];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-[#f8fafc] border-t border-zywo-navy/[0.06] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zywo-muted block mb-2">
          Trust & Proven Collaboration
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-zywo-navy">
          Trusted by Industry Pioneers Across India & the GCC
        </h3>
      </div>

      {/* Infinite Client Logo Marquee Strip */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max items-center gap-14 py-4 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center h-12 w-32 shrink-0 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-8 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
