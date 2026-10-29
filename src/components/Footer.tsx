"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white text-zywo-navy border-t border-zywo-navy/[0.08] overflow-hidden pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zywo-navy/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <span className="font-display font-extrabold text-3xl tracking-tight text-zywo-navy uppercase block mb-3">
              ZYWO
            </span>
            <div className="font-editorial-italic text-lg sm:text-xl text-zywo-periwinkle mb-6">
              “Every Impression Matters.”
            </div>
            <p className="text-zywo-body text-sm font-sans font-light leading-relaxed max-w-sm mb-6">
              A strategy-first advertising agency. We use data to build defensible strategies and execute them across high-impact creative, performance media, and scalable technology.
            </p>
            <div className="text-xs font-sans text-zywo-muted">
              Calicut & Malappuram, Kerala, India
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate block mb-4">
              Navigation
            </span>
            <ul className="space-y-3 text-xs font-sans text-zywo-body">
              <li>
                <a
                  href="/work"
                  className="hover:text-zywo-navy transition-colors block"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-zywo-navy transition-colors block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/approach"
                  className="hover:text-zywo-navy transition-colors block"
                >
                  The Zywo Approach
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-zywo-navy transition-colors block"
                >
                  About Zywo
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-zywo-navy transition-colors block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate block mb-4">
              Disciplines
            </span>
            <ul className="space-y-3 text-xs font-sans text-zywo-body">
              <li>Brand Strategy & Identity</li>
              <li>Website Development & UI/UX</li>
              <li>AI Ad Creation & Motion</li>
              <li>Performance Marketing</li>
              <li>Social Media Management</li>
              <li>E-Commerce Management</li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="lg:col-span-2">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-zywo-slate block mb-4">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs font-sans">
              <a
                href="mailto:hello@zywo.com"
                className="text-zywo-navy font-medium hover:text-zywo-periwinkle transition-colors block"
              >
                hello@zywo.com
              </a>
              <a
                href="https://wa.me/916282881159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zywo-navy font-medium hover:text-zywo-periwinkle transition-colors block"
              >
                +91 6282881159
              </a>
              <div className="text-zywo-muted pt-2 text-[11px] leading-relaxed">
                Mon — Sat: 9:30 AM — 6:30 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zywo-muted">
          <div>
            © {new Date().getFullYear()} Zywo. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-wider text-zywo-slate">
              Every Impression Matters
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zywo-soft hover:bg-zywo-periwinkleLight text-zywo-navy transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
