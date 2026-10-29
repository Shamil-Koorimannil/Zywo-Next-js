"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onStartProject?: () => void;
}

export default function Navbar({ onStartProject }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLandingPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", href: "/", id: "top" },
    { label: "About", href: "/about", id: "about" },
    { label: "Services", href: "/services", id: "services" },
    { label: "Work", href: "/work", id: "work" },
    { label: "Approach", href: "/approach", id: "approach" },
    { label: "Careers", href: "/careers", id: "careers" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  // If on other pages (or when floating aesthetic is requested), render the signature floating frosted pill header matching the reference image!
  if (!isLandingPage) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-85"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0f172a] to-[#334155] text-white flex items-center justify-center font-display font-black text-lg shadow-sm">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base tracking-tight text-[#0f172a] leading-tight uppercase">
                  ZYWO
                </span>
                <span className="text-[10px] font-sans text-[#64748b] tracking-wider uppercase">
                  Creative & Digital Lab
                </span>
              </div>
            </Link>

            {/* Center: Signature Floating Frosted Glass Pill Navigation (from Reference Image) */}
            <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(15,23,42,0.06)] text-xs font-sans">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-white text-[#0f172a] font-semibold shadow-sm"
                        : "text-[#64748b] hover:text-[#0f172a] hover:bg-white/40 font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: "Let's Talk ↗" Pill Button (as seen in Reference Image) */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wide px-5 py-2 rounded-full bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/80 backdrop-blur-md border border-white/80 text-[#0f172a] shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col justify-between p-8 transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="pt-24 flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-widest font-sans font-semibold text-[#64748b]">
              Navigation
            </span>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display font-bold py-1 flex items-center justify-between ${
                    isActive ? "text-[#0f172a]" : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-indigo-500" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#0f172a]/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-[#0f172a] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Exact Landing Page Navbar (Preserving landing page 100% untouched)
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-white/90 backdrop-blur-md border-b border-[#0f172a]/[0.08] shadow-[0_2px_16px_rgba(15,23,42,0.04)]"
            : "py-4 bg-white/75 backdrop-blur-sm border-b border-[#0f172a]/[0.05]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <span className="font-display font-extrabold text-2xl tracking-tight text-[#0f172a] uppercase">
              ZYWO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-sans font-semibold tracking-wide text-[#334155]">
            <button
              onClick={() => scrollTo("work")}
              className="hover:text-[#0f172a] transition-colors"
            >
              Selected Work
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="hover:text-[#0f172a] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("approach")}
              className="hover:text-[#0f172a] transition-colors"
            >
              Approach
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-[#0f172a] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-[#0f172a] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Start a Project */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                if (onStartProject) onStartProject();
                else scrollTo("contact");
              }}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase px-5 py-2.5 rounded-full bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-sm transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0f172a] hover:opacity-75 transition-opacity"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-between p-8 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-24 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#64748b]">
            Menu
          </span>
          {[
            { id: "work", label: "Selected Work" },
            { id: "services", label: "Services" },
            { id: "approach", label: "The Zywo Approach" },
            { id: "about", label: "About Zywo" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-2xl font-display font-bold text-[#0f172a] text-left hover:text-[#8ea6d6] transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-[#0f172a]/[0.08]">
          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-4 bg-[#0f172a] text-white font-sans font-bold text-xs tracking-wider uppercase rounded-full shadow-md"
          >
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
}
