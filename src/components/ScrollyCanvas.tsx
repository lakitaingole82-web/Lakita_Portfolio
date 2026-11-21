"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";
import { Sparkles } from "lucide-react";

interface ScrollyCanvasProps {
  totalFrames?: number;
  sequencePathPrefix?: string;
}

export function ScrollyCanvas({
  totalFrames = 90,
  sequencePathPrefix = "/sequence/frame_",
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [activeFrame, setActiveFrame] = useState<number>(0);
  const [hasFrames, setHasFrames] = useState<boolean>(true);

  // Scroll tracking across the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Draw frame with object-fit: cover logic
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Update canvas buffer size for high-DPI crispness
    const targetW = Math.round(cw * dpr);
    const targetH = Math.round(ch * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Clear with matching dark tone to prevent any background flash
    ctx.fillStyle = "#0a0c14";
    ctx.fillRect(0, 0, cw, ch);

    // Precise object-fit: cover algorithm
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawW = cw;
      drawH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawH) / 2;
    } else {
      // Canvas is taller than image
      drawH = ch;
      drawW = ch * imgRatio;
      offsetX = (cw - drawW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();

    currentFrameRef.current = frameIndex;
    setActiveFrame(frameIndex);
  }, []);

  // Preload all sequence frames
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let successfulCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const pad = i.toString().padStart(2, "0");
      img.src = `${sequencePathPrefix}${pad}_delay-0.067s.webp`;

      img.onload = () => {
        if (isCancelled) return;
        successfulCount++;
        setHasFrames(true);
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        setLoadProgress(pct);

        // Render the first available frame, even if an earlier image failed.
        if (successfulCount === 1 && !currentFrameRef.current) {
          drawFrame(i);
        }

        if (loadedCount >= totalFrames) {
          setIsLoading(false);
          if (successfulCount === 0) setHasFrames(false);
          drawFrame(currentFrameRef.current);
        }
      };

      img.onerror = () => {
        // Fallback gracefully if an individual frame fails
        if (isCancelled) return;
        loadedCount++;
        if (loadedCount >= totalFrames) {
          setIsLoading(false);
          if (successfulCount === 0) setHasFrames(false);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, sequencePathPrefix, drawFrame]);

  // Handle window resize with Debounced RAF
  useEffect(() => {
    const handleResize = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        drawFrame(currentFrameRef.current);
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  // Scrub through frames based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map latest (0 to 1) to frame index [0, totalFrames - 1]
    const clampedProgress = Math.max(0, Math.min(1, latest));
    const targetIndex = Math.min(
      totalFrames - 1,
      Math.floor(clampedProgress * totalFrames)
    );

    if (targetIndex !== currentFrameRef.current) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        drawFrame(targetIndex);
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#0a0c14]"
      id="hero-scroll"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!isLoading && !hasFrames && (
          <div
            role="status"
            className="absolute inset-0 z-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_50%_40%,rgba(14,116,144,0.24),transparent_55%),linear-gradient(135deg,#071321,#0a0c14_55%,#071321)] px-6 text-center"
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.28em] text-sky-300">
                Lakita Rajendra Ingole · Second-Year B.Tech CSE
              </p>
              <p className="text-3xl font-light tracking-tight text-white sm:text-5xl">
                Aspiring AI/ML Engineer
              </p>
            </div>
          </div>
        )}

        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block touch-none z-0"
        />

        {/* Ambient Dark Blend Gradients & Edge Vignette */}
        <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-t from-[#0a0c14] via-transparent to-[#0a0c14]/70" />
        <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-r from-[#0a0c14]/40 via-transparent to-[#0a0c14]/40" />
        <div className="absolute inset-0 pointer-events-none z-[1] vignette" />

        {/* Cinematic Preloader HUD */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0c14]/90 backdrop-blur-xl transition-opacity duration-700">
            <div className="flex flex-col items-center gap-6 max-w-sm px-6 text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border border-sky-500/20 border-t-sky-400 animate-spin" />
                <Sparkles className="w-5 h-5 text-sky-300 absolute inset-0 m-auto animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-mono">
                  Loading Frame Sequence
                </div>
                <div className="text-3xl font-light tracking-tight text-white font-mono">
                  {loadProgress}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-300 transition-all duration-200"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>

              <p className="text-[11px] text-slate-500 font-mono tracking-wide">
                Preparing the portfolio scroll sequence
              </p>
            </div>
          </div>
        )}

        {/* Frame HUD & Diagnostic Badge (Subtle top-left pill) */}
        <div className="absolute top-24 left-6 md:left-12 z-20 pointer-events-none flex items-center gap-3">
          <div className="glass-panel-subtle px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
              FRAME {activeFrame.toString().padStart(2, "0")} / {totalFrames}
            </span>
          </div>
          <div className="hidden sm:flex glass-panel-subtle px-3 py-1.5 rounded-full items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400">
              SCROLL-LINKED FRAME SEQUENCE
            </span>
          </div>
        </div>

        {/* Parallax Overlay Component */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
