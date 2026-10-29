"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause, ChevronRight, ChevronLeft, Eye, Layers } from "lucide-react";

const TOTAL_FRAMES = 190; // 000 to 189

export default function ScrollCanvasSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Text overlay refs for GSAP animation
  const act1Ref = useRef<HTMLDivElement>(null);
  const act2Ref = useRef<HTMLDivElement>(null);
  const act3Ref = useRef<HTMLDivElement>(null);
  const act4Ref = useRef<HTMLDivElement>(null);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Store preloaded Image objects in a ref
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const activeFrameRef = useRef(0);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getFrameUrl = (index: number) => {
    const padded = String(index).padStart(3, "0");
    return `/Zywo animation/Zywo animations${padded}.png`;
  };

  // Draw frame on canvas with aspect-ratio cover
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find requested frame or closest loaded frame
    let img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame
      for (let offset = 1; offset < 30; offset++) {
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

    // Calculate aspect ratio cover (cover the canvas)
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
    setCurrentFrameIndex(index);
  }, []);

  // Set canvas size matching viewport & device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    renderFrame(activeFrameRef.current);
  }, [renderFrame]);

  // Preload images smartly: Frame 0 first, then key steps, then all
  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;

    // 1. Preload frame 0 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      renderFrame(0);
      setIsLoaded(true);
    };

    // 2. Preload primary keyframes every 4th frame
    const priorityIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      if (i !== 0) priorityIndices.push(i);
    }
    // And add important story milestones (e.g. 45, 90, 130, 160, 180)
    [45, 90, 130, 160, 180].forEach((idx) => {
      if (!priorityIndices.includes(idx)) priorityIndices.push(idx);
    });

    const loadRemaining = () => {
      // 3. Preload all remaining frames in batches
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
        const currentBatch = queue.slice(queueIdx, queueIdx + batchSize);
        queueIdx += batchSize;

        let batchLoaded = 0;
        currentBatch.forEach((idx) => {
          const img = new Image();
          img.src = getFrameUrl(idx);
          img.onload = () => {
            if (isCancelled) return;
            imagesRef.current[idx] = img;
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            batchLoaded++;
            if (batchLoaded === currentBatch.length) {
              setTimeout(loadNextBatch, 16);
            }
          };
          img.onerror = () => {
            batchLoaded++;
            if (batchLoaded === currentBatch.length) {
              setTimeout(loadNextBatch, 16);
            }
          };
        });
      };

      loadNextBatch();
    };

    // Start priority load after first frame mounts
    const timeout = setTimeout(loadRemaining, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [renderFrame]);

  // Window resize handler
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // GSAP ScrollTrigger configuration
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Scroll scrub proxy
    const frameObj = { frame: 0 };

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: (self) => {
        const frame = Math.min(TOTAL_FRAMES - 1, Math.floor(self.progress * (TOTAL_FRAMES - 1)));
        renderFrame(frame);

        // Choreograph text scenes with precise scroll thresholds
        const p = self.progress;

        // Scene 1: 0.05 to 0.24 (Book on ground)
        if (act1Ref.current) {
          if (p >= 0.03 && p <= 0.24) {
            gsap.to(act1Ref.current, { autoAlpha: 1, y: 0, duration: 0.3, overwrite: "auto" });
          } else {
            gsap.to(act1Ref.current, { autoAlpha: 0, y: -20, duration: 0.3, overwrite: "auto" });
          }
        }

        // Scene 2: 0.28 to 0.55 (Book upright, question reveals)
        if (act2Ref.current) {
          if (p >= 0.28 && p <= 0.55) {
            gsap.to(act2Ref.current, { autoAlpha: 1, y: 0, duration: 0.3, overwrite: "auto" });
          } else {
            gsap.to(act2Ref.current, { autoAlpha: 0, y: -20, duration: 0.3, overwrite: "auto" });
          }
        }

        // Scene 3: 0.58 to 0.82 (Pages open & flutter)
        if (act3Ref.current) {
          if (p >= 0.58 && p <= 0.82) {
            gsap.to(act3Ref.current, { autoAlpha: 1, y: 0, duration: 0.3, overwrite: "auto" });
          } else {
            gsap.to(act3Ref.current, { autoAlpha: 0, y: -20, duration: 0.3, overwrite: "auto" });
          }
        }

        // Scene 4: 0.85 to 1.0 (Zoom into white page)
        if (act4Ref.current) {
          if (p >= 0.85) {
            gsap.to(act4Ref.current, { autoAlpha: 1, y: 0, duration: 0.3, overwrite: "auto" });
          } else {
            gsap.to(act4Ref.current, { autoAlpha: 0, y: -20, duration: 0.3, overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [renderFrame]);

  // Autoplay demonstration toggle (for users who want to watch without scrolling)
  const togglePlay = () => {
    if (isPlaying) {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playIntervalRef.current = setInterval(() => {
        activeFrameRef.current = (activeFrameRef.current + 1) % TOTAL_FRAMES;
        renderFrame(activeFrameRef.current);
      }, 40);
    }
  };

  useEffect(() => {
    return () => {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    };
  }, []);

  const stepFrame = (delta: number) => {
    const nextIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, activeFrameRef.current + delta));
    renderFrame(nextIdx);
  };

  return (
    <div
      id="experience"
      ref={containerRef}
      className="relative w-full h-screen bg-[#08090b] overflow-hidden select-none"
    >
      {/* Cinematic Canvas Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* Dynamic Vignette & Lighting Rim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-[#08090b]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      </div>

      {/* Top HUD: Sequence Progress & Status */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 right-6 md:right-12 z-20 flex items-center justify-between pointer-events-none">
        <div className="glass-pill px-4 py-1.5 rounded-full flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#93b4ff] animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-zinc-300 uppercase">
            FRAME {String(currentFrameIndex).padStart(3, "0")} / {TOTAL_FRAMES - 1}
          </span>
          <span className="text-zinc-600">|</span>
          <span className="font-mono text-[10px] tracking-wider text-zinc-400">
            SCROLL CONTROLLED
          </span>
        </div>

        {/* Loading Indicator Pill */}
        {loadingProgress < 100 && (
          <div className="glass-pill px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-400">
              CACHING {loadingProgress}%
            </span>
            <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#93b4ff] transition-all duration-200"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Synchronized Typography Narrative Scenes (Pinned Overlays) */}

      {/* SCENE 1: Frame 000-045 */}
      <div
        ref={act1Ref}
        className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 max-w-5xl pointer-events-none opacity-0"
      >
        <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#93b4ff] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#93b4ff]" />
            <span>01 // THE QUESTION UNVEILED</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-4 tracking-tight">
            DO PEOPLE JUDGE A BOOK BY ITS COVER?
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
            In human psychology and modern business, judgment is rendered in less than 50 milliseconds.
            Before your proposition is evaluated, your presence has already defined your authority.
          </p>
        </div>
      </div>

      {/* SCENE 2: Frame 045-090 (The Book Rises) */}
      <div
        ref={act2Ref}
        className="absolute inset-0 z-20 flex flex-col justify-center items-end px-8 md:px-20 lg:px-32 max-w-7xl mx-auto pointer-events-none opacity-0"
      >
        <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-xl border border-white/10 shadow-2xl backdrop-blur-xl text-right">
          <div className="flex items-center justify-end gap-3 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-4">
            <span>02 // THE REALITY</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <h2 className="font-editorial-italic text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            They always do.
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light mb-4">
            The cover is not a veneer; it is the manifestation of intent. Every nuance of typography,
            motion, and interaction silently communicates your standard of excellence.
          </p>
          <div className="font-mono text-xs tracking-wider text-[#93b4ff] uppercase">
            ZYWO AESTHETIC DIRECTIVE
          </div>
        </div>
      </div>

      {/* SCENE 3: Frame 090-140 (The Pages Open) */}
      <div
        ref={act3Ref}
        className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 max-w-5xl pointer-events-none opacity-0"
      >
        <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#93b4ff] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#93b4ff]" />
            <span>03 // THE CODEX OF CAPABILITIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-4">
            UNFOLDING THE ARCHITECTURE
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light mb-6">
            We merge high-fashion editorial art direction with relentless performance engineering:
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 p-2 rounded">
              <span className="text-[#93b4ff]">01</span> Brand Identity & Strategy
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 p-2 rounded">
              <span className="text-[#93b4ff]">02</span> UI/UX & Web Systems
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 p-2 rounded">
              <span className="text-[#93b4ff]">03</span> Cinematic AI Ad Creatives
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 p-2 rounded">
              <span className="text-[#93b4ff]">04</span> Full-Funnel Performance
            </div>
          </div>
        </div>
      </div>

      {/* SCENE 4: Frame 140-189 (Zooming into the White Page) */}
      <div
        ref={act4Ref}
        className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto pointer-events-none opacity-0"
      >
        <div className="p-8 md:p-12 rounded-2xl max-w-xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 block mb-4">
            04 // THE BLANK CANVAS BECOMES LEGACY
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-zinc-900 leading-tight tracking-tighter mb-4">
            EVERY IMPRESSION MATTERS.
          </h2>
          <p className="text-zinc-700 text-base md:text-lg font-light leading-relaxed mb-6">
            Welcome to Zywo. Explore our philosophy, our craft, and our client collaborations below.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-800 bg-black/5 px-4 py-2 rounded-full border border-black/10">
            <span>Scroll Down to Discover Zywo</span>
            <ChevronRight className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Interactive Frame Scrubbing Bar */}
      <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
        <div className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-4 text-xs font-mono text-zinc-400">
          <button
            onClick={() => stepFrame(-10)}
            title="Step back 10 frames"
            className="hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="text-[10px] uppercase tracking-wider">
              {isPlaying ? "Pause" : "Play Reel"}
            </span>
          </button>

          <button
            onClick={() => stepFrame(10)}
            title="Step forward 10 frames"
            className="hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-32 sm:w-48 h-1 bg-white/15 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#93b4ff] to-white transition-all duration-75"
              style={{ width: `${(currentFrameIndex / (TOTAL_FRAMES - 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-zinc-400">
          <span>ORIGINAL 1920×1080 ASSET SEQUENCE</span>
          <span>•</span>
          <span>DRIVEN BY GSAP SCROLLTRIGGER</span>
        </div>
      </div>
    </div>
  );
}
