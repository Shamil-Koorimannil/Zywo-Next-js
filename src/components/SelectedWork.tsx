"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  imageSrc: string;
  clientLogo?: string;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "coolcane",
    client: "Coolcane",
    title: "Coolcane — “Irumb Karimbaakum”",
    subtitle: "Brand Strategy, Bottle Packaging & 3D Motion",
    category: "Brand Strategy & Campaign Direction",
    description:
      "Elevating local street sugarcane juice into a hygienic, premium bottled lifestyle beverage. We crafted the viral 'Irumb Karimbaakum' narrative showing arch-enemies united by natural sweetness, paired with custom bottle aesthetics and 3D digital motion.",
    tags: ["Brand Positioning", "Packaging Direction", "Social Campaign", "3D Motion"],
    imageSrc: "/images/projects/coolcane-campaign.webp",
    clientLogo: "/images/clients/Coolcane logo.svg",
    featured: true,
  },
  {
    id: "mouzy",
    client: "Mouzy Avil Milk",
    title: "Mouzy — “Manjayellam Mouzy Alla”",
    subtitle: "Identity Preservation & Anti-Counterfeit Campaign",
    category: "Identity Preservation & Brand Protection",
    description:
      "Defending an iconic Kerala dessert brand operating across India and the GCC. When copycat shops threatened market share, Zywo developed a bold, humorous positioning campaign reinforcing the authentic yellow brand identity and protecting customer trust.",
    tags: ["Visual Identity", "Brand Protection", "Outdoor & Print", "Digital Rollout"],
    imageSrc: "/images/projects/mouzy-campaign.webp",
    clientLogo: "/images/clients/Mouzy logo Yellow.svg",
  },
  {
    id: "lamar",
    client: "Lamar Tiles & Sanitary",
    title: "Lamar — “Lamarkk Ponnoli”",
    subtitle: "Luxury Retail & Architectural Showcase",
    category: "Luxury Retail & Brand Positioning",
    description:
      "Positioning a premier tiles and sanitary showroom as the destination for modern home luxury. We built a sophisticated visual campaign centered on pristine architectural photography, product showcases, and high-trust storytelling.",
    tags: ["Retail Strategy", "Architectural Photography", "Social Advertising"],
    imageSrc: "/images/projects/lamar-bathtub.webp",
    clientLogo: "/images/clients/Lamar logo.svg",
  },
  {
    id: "shairan",
    client: "Shairan Cafe",
    title: "Shairan Cafe — Modern Bakery & Coffee House",
    subtitle: "F&B Visual Narrative & Content Creation",
    category: "F&B Brand Identity & Content Creation",
    description:
      "Crafting crave-worthy visual narratives for signature artisanal bakes, pistachio kunafa buns, and cafe culture. Paced video editing and social strategy that converted online engagement into queues at the counter.",
    tags: ["F&B Branding", "Video Production", "Social Strategy"],
    imageSrc: "/images/projects/shairan-kunafa.webp",
    clientLogo: "/images/clients/Shairan Cafe logo Orange.svg",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-28 md:py-36 bg-[#f8fafc] text-zywo-navy border-t border-zywo-navy/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zywo-navy/[0.08]">
          <div>
            <div className="pill-badge mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zywo-periwinkle" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-zywo-navy uppercase">
              SELECTED WORK
            </h2>
          </div>

          <p className="text-zywo-body font-sans text-sm md:text-base max-w-md leading-relaxed">
            Real brands, verified campaigns, and measurable business transformations crafted by Zywo across India and the GCC.
          </p>
        </div>

        {/* Asymmetrical Editorial Portfolio Layout */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 01: Hero Feature — Coolcane */}
          <article className="group bg-white rounded-3xl p-6 sm:p-10 border border-zywo-navy/[0.08] shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(142,166,214,0.12)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-zywo-soft aspect-[16/10]">
                <img
                  src={projects[0].imageSrc}
                  alt={projects[0].title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-sans font-semibold uppercase tracking-wider text-zywo-navy shadow-sm">
                  Featured Case Study
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {projects[0].clientLogo && (
                      <img
                        src={projects[0].clientLogo}
                        alt="Coolcane Logo"
                        className="h-6 w-auto object-contain opacity-85"
                      />
                    )}
                    <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zywo-periwinkle">
                      {projects[0].category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zywo-navy mb-4 leading-tight">
                    {projects[0].title}
                  </h3>

                  <p className="text-zywo-body text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
                    {projects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-zywo-soft text-zywo-slate text-xs font-sans font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zywo-navy/[0.06] flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-zywo-navy">
                  <span>Client: Coolcane Beverages</span>
                  <span className="text-zywo-muted">Kerala, India</span>
                </div>
              </div>
            </div>
          </article>

          {/* Projects 02 & 03: Asymmetrical Pair — Mouzy & Lamar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Mouzy (Tall Left Column) */}
            <article className="lg:col-span-6 group bg-white rounded-3xl p-6 sm:p-8 border border-zywo-navy/[0.08] shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(142,166,214,0.12)] transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden rounded-2xl bg-zywo-soft aspect-[4/3] mb-6">
                  <img
                    src={projects[1].imageSrc}
                    alt={projects[1].title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  {projects[1].clientLogo && (
                    <img
                      src={projects[1].clientLogo}
                      alt="Mouzy Logo"
                      className="h-6 w-auto object-contain"
                    />
                  )}
                  <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zywo-periwinkle">
                    {projects[1].category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-zywo-navy mb-3">
                  {projects[1].title}
                </h3>

                <p className="text-zywo-body text-sm font-sans font-light leading-relaxed mb-6">
                  {projects[1].description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zywo-soft text-zywo-slate text-xs font-sans font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-zywo-navy/[0.06] flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-zywo-navy">
                  <span>Pan-India & GCC</span>
                  <span className="text-zywo-muted">F&B Brand System</span>
                </div>
              </div>
            </article>

            {/* Lamar (Right Column with Architectural Elegance) */}
            <article className="lg:col-span-6 group bg-white rounded-3xl p-6 sm:p-8 border border-zywo-navy/[0.08] shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(142,166,214,0.12)] transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden rounded-2xl bg-zywo-soft aspect-[4/3] mb-6">
                  <img
                    src={projects[2].imageSrc}
                    alt={projects[2].title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  {projects[2].clientLogo && (
                    <img
                      src={projects[2].clientLogo}
                      alt="Lamar Logo"
                      className="h-6 w-auto object-contain"
                    />
                  )}
                  <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zywo-periwinkle">
                    {projects[2].category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-zywo-navy mb-3">
                  {projects[2].title}
                </h3>

                <p className="text-zywo-body text-sm font-sans font-light leading-relaxed mb-6">
                  {projects[2].description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zywo-soft text-zywo-slate text-xs font-sans font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-zywo-navy/[0.06] flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-zywo-navy">
                  <span>Luxury Architecture</span>
                  <span className="text-zywo-muted">Retail Positioning</span>
                </div>
              </div>
            </article>
          </div>

          {/* Project 04: Shairan Cafe — Horizontal Editorial Strip */}
          <article className="group bg-white rounded-3xl p-6 sm:p-10 border border-zywo-navy/[0.08] shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(142,166,214,0.12)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {projects[3].clientLogo && (
                      <img
                        src={projects[3].clientLogo}
                        alt="Shairan Cafe Logo"
                        className="h-6 w-auto object-contain"
                      />
                    )}
                    <span className="text-xs font-sans font-semibold uppercase tracking-widest text-zywo-periwinkle">
                      {projects[3].category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-zywo-navy mb-4 leading-tight">
                    {projects[3].title}
                  </h3>

                  <p className="text-zywo-body text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
                    {projects[3].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[3].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-zywo-soft text-zywo-slate text-xs font-sans font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zywo-navy/[0.06] flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-zywo-navy">
                  <span>Artisanal Cafe & Bakery</span>
                  <span className="text-zywo-muted">Viral Video Engine</span>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 relative overflow-hidden rounded-2xl bg-zywo-soft aspect-[16/10]">
                <img
                  src={projects[3].imageSrc}
                  alt={projects[3].title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
