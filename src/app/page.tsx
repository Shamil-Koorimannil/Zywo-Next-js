"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import UnifiedScrollExperience from "@/components/UnifiedScrollExperience";
import BrandIntro from "@/components/BrandIntro";
import SelectedWork from "@/components/SelectedWork";
import ServicesOverview from "@/components/ServicesOverview";
import ZywoApproach from "@/components/ZywoApproach";
import AboutSection from "@/components/AboutSection";
import ClientMarquee from "@/components/ClientMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleStartProject = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-zywo-navy">
      {/* 1. Refined Editorial Navigation */}
      <Navbar onStartProject={handleStartProject} />

      {/* 2. Uninterrupted Opening Video & Scroll-Driven Sequence (Frames 000-189, Zero Zoom, No Text) */}
      <UnifiedScrollExperience />

      {/* 3. Brand Introduction (Revealed seamlessly on cloud-white following animation) */}
      <BrandIntro />

      {/* 4. Selected Work (Art-directed editorial layout with verified projects) */}
      <SelectedWork />

      {/* 5. Services Overview (12 Core disciplines across 3 pillars) */}
      <ServicesOverview />

      {/* 6. The Zywo Approach (5-Stage Methodology) */}
      <ZywoApproach />

      {/* 7. About Zywo & Leadership (Rayan Hany, philosophy, values) */}
      <AboutSection />

      {/* 8. Client Trust Marquee (20 Partner Logos) */}
      <ClientMarquee />

      {/* 9. Verified Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Contact & Project Enquiry */}
      <ContactSection />

      {/* 11. Refined Editorial Footer */}
      <Footer />
    </main>
  );
}
