"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Volume2, VolumeX, RotateCcw, Sparkles } from "lucide-react";
import gsap from "gsap";

interface OpeningExperienceProps {
  onExploreClick?: () => void;
}

export default function OpeningExperience({ onExploreClick }: OpeningExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  // Play opening GSAP timeline
  const runSequence = () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial resets
    gsap.set([title1Ref.current, title2Ref.current, title3Ref.current], {
      autoAlpha: 0,
    });
    gsap.set(subtitleRef.current, { autoAlpha: 0, y: 30 });
    gsap.set(ctaRef.current, { autoAlpha: 0, y: 20 });
    gsap.set(badgeRef.current, { autoAlpha: 0, scale: 0.9 });

    // Choreographed entrance
    tl.to(badgeRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      delay: 0.3,
    })
      .fromTo(
        title1Ref.current,
        { autoAlpha: 0, x: -120, skewX: 12 },
        { autoAlpha: 1, x: 0, skewX: 0, duration: 1.2 },
        "-=0.6"
      )
      .fromTo(
        title2Ref.current,
        { autoAlpha: 0, y: 100, scale: 0.92 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.out" },
        "-=0.9"
      )
      .fromTo(
        title3Ref.current,
        { autoAlpha: 0, x: 120, skewX: -12 },
        { autoAlpha: 1, x: 0, skewX: 0, duration: 1.2 },
        "-=1.0"
      )
      .to(
        subtitleRef.current,
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .to(
        ctaRef.current,
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  };

  useEffect(() => {
    runSequence();
  }, []);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pauseTime = Math.max(0, videoRef.current.duration - 0.5);
      if (videoRef.current.currentTime >= pauseTime && !videoRef.current.paused) {
        videoRef.current.pause();
        videoRef.current.currentTime = pauseTime;
      }
      setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    runSequence();
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleScrollToExperience = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const target = document.getElementById("experience");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen h-[100svh] flex flex-col justify-between overflow-hidden bg-[#08090b] select-none"
    >
      {/* Background Cinematic Video Layer with Graceful Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/Zywo animation/Zywo first video.mp4"
            poster="/Zywo animation/Zywo animations000.png"
            autoPlay
            playsInline
            muted={isMuted}
            loop
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            onTimeUpdate={handleVideoTimeUpdate}
            className={`w-full h-full object-cover object-center scale-[1.03] transition-opacity duration-1000 ${
              videoLoaded ? "opacity-80" : "opacity-40"
            }`}
          />
        ) : (
          <img
            src="/Zywo animation/Zywo animations000.png"
            alt="Zywo Frozen Landscape"
            className="w-full h-full object-cover object-center opacity-80"
          />
        )}

        {/* Cinematic Vignette & Editorial Tint */}
        <div
          ref={videoOverlayRef}
          className="absolute inset-0 bg-gradient-to-b from-[#08090b]/80 via-[#08090b]/30 to-[#08090b] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#08090b_95%)] pointer-events-none" />

        {/* Ambient Subtle Grid Lines */}
        <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
      </div>

      {/* Top Editorial Coordinates */}
      <div className="relative z-10 pt-28 md:pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between text-zinc-400 text-xs font-mono">
        <div ref={badgeRef} className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#93b4ff] shadow-[0_0_8px_#93b4ff]" />
          <span className="tracking-[0.25em] uppercase text-zinc-300">
            01 // PROLOGUE : THE OPENING
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px] uppercase tracking-widest text-zinc-400">
          <span>LAT 25°12' // LON 55°17'</span>
          <span>•</span>
          <span>ORIGINAL 3D SEQUENCE</span>
        </div>
      </div>

      {/* Centerpiece: Expressive, Multidirectional Animated Typography */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full my-auto flex flex-col justify-center items-center text-center">
        {/* Row 1: Left Entering Word */}
        <div className="overflow-hidden w-full flex justify-center">
          <h1
            ref={title1Ref}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter uppercase text-white/90 drop-shadow-2xl"
          >
            EVERY
          </h1>
        </div>

        {/* Row 2: Zooming Luxury Editorial Accent */}
        <div className="overflow-hidden w-full flex items-center justify-center -my-2 sm:-my-4 md:-my-6">
          <h2
            ref={title2Ref}
            className="font-editorial-italic text-5xl sm:text-7xl md:text-9xl lg:text-[11.5rem] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d8e3ff] to-[#8faeff] italic drop-shadow-[0_10px_35px_rgba(147,180,255,0.25)]"
          >
            Impression
          </h2>
        </div>

        {/* Row 3: Right Entering Word */}
        <div className="overflow-hidden w-full flex justify-center">
          <h3
            ref={title3Ref}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter uppercase text-white/90 drop-shadow-2xl flex items-center gap-3"
          >
            MATTERS
            <span className="text-[#93b4ff] inline-block scale-125">.</span>
          </h3>
        </div>

        {/* Subtitle Statement */}
        <div
          ref={subtitleRef}
          className="mt-6 md:mt-10 max-w-2xl mx-auto flex flex-col items-center gap-4"
        >
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed">
            A boutique creative & digital laboratory. We orchestrate brand identities,
            cinematic visuals, and high-conversion platforms that leave an indelible mark.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono tracking-widest uppercase text-zinc-400">
            <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Branding
            </span>
            <span className="text-zinc-600">/</span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              AI Ads
            </span>
            <span className="text-zinc-600">/</span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Web Systems
            </span>
            <span className="text-zinc-600">/</span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Growth Strategy
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Controls & Scroll Prompt */}
      <div
        ref={ctaRef}
        className="relative z-10 pb-8 md:pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left Video Scrub & Replay Bar */}
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <button
            onClick={handleReplay}
            title="Replay sequence"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="text-[10px] tracking-wider uppercase">Replay</span>
          </button>

          <button
            onClick={toggleSound}
            title={isMuted ? "Audio muted" : "Audio active"}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all"
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-[#93b4ff]" />}
            <span className="text-[10px] tracking-wider uppercase">
              {isMuted ? "Sound Off" : "Sound On"}
            </span>
          </button>

          {/* Micro Progress Bar */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[10px]">CINEMATIC 00:06</span>
            <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#93b4ff] transition-all duration-150"
                style={{ width: `${videoProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Center/Right: Interactive Scroll Prompt */}
        <button
          onClick={handleScrollToExperience}
          className="group flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors"
        >
          <span className="group-hover:tracking-[0.25em] transition-all">
            Begin Scroll Sequence
          </span>
          <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#93b4ff] flex items-center justify-center transition-all group-hover:bg-[#93b4ff]/10">
            <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
