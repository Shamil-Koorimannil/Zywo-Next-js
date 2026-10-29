"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

const TOTAL_FRAMES = 190; // 000 to 189

export default function UnifiedScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  // Store preloaded Image objects
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const activeFrameRef = useRef(0);
  const isScrolledRef = useRef(false);
  const hasPausedNearEndRef = useRef(false);

  // Monitor playback and pause 0.5s before video ends
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || hasPausedNearEndRef.current) return;
    const targetPauseTime = Math.max(0, video.duration - 0.5);
    if (video.currentTime >= targetPauseTime) {
      hasPausedNearEndRef.current = true;
      video.pause();
      video.currentTime = targetPauseTime;
      setVideoFinished(true);
    }
  }, []);

  // High-frequency animation frame loop for microsecond frame accuracy
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animId: number;
    const checkPauseLoop = () => {
      if (video && !video.paused && video.duration && !hasPausedNearEndRef.current) {
        const targetPauseTime = Math.max(0, video.duration - 0.5);
        if (video.currentTime >= targetPauseTime) {
          hasPausedNearEndRef.current = true;
          video.pause();
          video.currentTime = targetPauseTime;
          setVideoFinished(true);
          return;
        }
      }
      animId = requestAnimationFrame(checkPauseLoop);
    };

    animId = requestAnimationFrame(checkPauseLoop);
    return () => cancelAnimationFrame(animId);
  }, [videoLoaded]);

  const getFrameUrl = (index: number) => {
    const padded = String(index).padStart(3, "0");
    return `/Zywo animation/Zywo animations${padded}.png`;
  };

  // Render a specific frame on the canvas preserving exact aspect ratio with zero zooming
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[index];

    // Fallback to nearest loaded frame if current frame is still caching
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < 25; offset++) {
        const prev = imagesRef.current[Math.max(0, index - offset)];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[Math.min(TOTAL_FRAMES - 1, index + offset)];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Natural aspect ratio cover without any scale distortion or zooming
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = w / h;

    let drawWidth = w;
    let drawHeight = h;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = w / imgRatio;
      offsetY = (h - drawHeight) / 2;
    } else {
      drawWidth = h * imgRatio;
      offsetX = (w - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    activeFrameRef.current = index;
  }, []);

  // Responsive canvas resizing matching viewport & DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    renderFrame(activeFrameRef.current);
  }, [renderFrame]);

  // Progressive smart frame preloader
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediate preload of Frame 0
    const img0 = new Image();
    img0.src = getFrameUrl(0);
    img0.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = img0;
      renderFrame(0);
    };

    // 2. High-priority keyframes (every 4th + milestone frames)
    const priorityIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      if (i !== 0) priorityIndices.push(i);
    }
    [45, 90, 130, 160, 175, 180, 189].forEach((idx) => {
      if (!priorityIndices.includes(idx)) priorityIndices.push(idx);
    });

    const timeout = setTimeout(() => {
      const remainingIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!priorityIndices.includes(i) && i !== 0) {
          remainingIndices.push(i);
        }
      }

      const queue = [...priorityIndices, ...remainingIndices];
      let queueIdx = 0;
      const batchSize = 6;

      const loadNextBatch = () => {
        if (isCancelled || queueIdx >= queue.length) return;
        const batch = queue.slice(queueIdx, queueIdx + batchSize);
        queueIdx += batchSize;

        let loaded = 0;
        batch.forEach((idx) => {
          const img = new Image();
          img.src = getFrameUrl(idx);
          img.onload = () => {
            if (isCancelled) return;
            imagesRef.current[idx] = img;
            loaded++;
            if (loaded === batch.length) setTimeout(loadNextBatch, 16);
          };
          img.onerror = () => {
            loaded++;
            if (loaded === batch.length) setTimeout(loadNextBatch, 16);
          };
        });
      };

      loadNextBatch();
    }, 150);

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [renderFrame]);

  // Window resize listener
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Handle video ending: seamlessly transfer display to canvas at frame 0
  const handleVideoEnded = () => {
    setVideoFinished(true);
    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }
    if (videoRef.current) {
      videoRef.current.style.opacity = "0";
    }
    renderFrame(0);
  };

  // GSAP ScrollTrigger orchestration
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      renderFrame(189);
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
      if (videoRef.current) videoRef.current.style.display = "none";
      return;
    }

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=220%",
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress;

        // If user scrolls even slightly, ensure canvas takes over from video seamlessly
        if (p > 0.005 && !isScrolledRef.current) {
          isScrolledRef.current = true;
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.style.opacity = "0";
          }
          if (canvasRef.current) {
            canvasRef.current.style.opacity = "1";
          }
        } else if (p <= 0.005) {
          isScrolledRef.current = false;
          if (videoRef.current) {
            videoRef.current.style.opacity = "1";
            if (!hasPausedNearEndRef.current && !videoRef.current.ended) {
              videoRef.current.play().catch(() => {});
            }
          }
          if (canvasRef.current) {
            canvasRef.current.style.opacity = "0";
          }
        }

        // Scrub frames 000 to 189 strictly without zooming or scaling
        const frame = Math.min(TOTAL_FRAMES - 1, Math.floor(p * (TOTAL_FRAMES - 1)));
        renderFrame(frame);

        // Fade out subtle scroll prompt as soon as scrolling initiates
        if (scrollPromptRef.current) {
          if (p <= 0.02) {
            scrollPromptRef.current.style.opacity = String(1 - p * 50);
          } else {
            scrollPromptRef.current.style.opacity = "0";
          }
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [renderFrame, videoFinished]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#e8ecf8] overflow-hidden select-none"
    >
      <div ref={stageRef} className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Layer 1: Opening Video (Unscaled, edge-to-edge 1920x1080 cover) */}
        {!videoError ? (
          <video
            ref={videoRef}
            src="/Zywo animation/Zywo first video.mp4"
            poster="/Zywo animation/Zywo animations000.png"
            autoPlay
            playsInline
            muted
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        {/* Layer 2: Canvas Scrub Stage (Exact continuation of video final frame, zero zoom) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: videoFinished || videoError ? 1 : 0 }}
        />

        {/* Subtle, minimal initial scroll prompt (Fades immediately on scroll, zero intrusive text) */}
        <div
          ref={scrollPromptRef}
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center pointer-events-none z-20 transition-opacity duration-300"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm text-[11px] font-sans font-medium tracking-wider uppercase text-zywo-navy">
            <span>Scroll to explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-zywo-periwinkle animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
