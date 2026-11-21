"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Terminal,
  Award,
  Zap,
} from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll (Hero / Intro - Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.18], [0, -90]);
  const scale1 = useTransform(scrollYProgress, [0, 0.18], [1, 0.92]);

  // Section 2: ~30% scroll (Left Aligned - Digital Experiences)
  const opacity2 = useTransform(
    scrollYProgress,
    [0.22, 0.30, 0.42, 0.49],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.22, 0.49], [80, -80]);
  const x2 = useTransform(scrollYProgress, [0.22, 0.30], [-20, 0]);

  // Section 3: ~60% scroll (Right Aligned - Design & Engineering)
  const opacity3 = useTransform(
    scrollYProgress,
    [0.52, 0.60, 0.72, 0.79],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.52, 0.79], [80, -80]);
  const x3 = useTransform(scrollYProgress, [0.52, 0.60], [20, 0]);

  // Section 4: ~85% - 98% scroll (Transition to Projects)
  const opacity4 = useTransform(
    scrollYProgress,
    [0.82, 0.90, 0.98],
    [0, 1, 1]
  );
  const y4 = useTransform(scrollYProgress, [0.82, 0.98], [50, 0]);

  // Scroll Prompter (only visible at the very top)
  const scrollPromptOpacity = useTransform(
    scrollYProgress,
    [0, 0.04],
    [1, 0]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-16">
      {/* SECTION 1: CENTERED HERO (0% SCROLL) */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 m-auto flex flex-col items-center justify-center text-center px-4 max-w-4xl h-fit"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel-subtle mb-6 border border-sky-500/20 shadow-lg shadow-sky-500/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          <span className="text-[11px] font-mono tracking-widest text-sky-200/90 uppercase">
            Second-Year B.Tech CSE · AI/ML Aspirant
          </span>
        </div>

        {/* Main Monolithic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
          Hi, I&apos;m Lakita Ingole.
          <span className="block font-light text-slate-300">
            Aspiring AI/ML Engineer | Web Developer
          </span>
        </h1>

        <p className="mb-4 text-xs font-mono uppercase tracking-[0.16em] text-cyan-200/90 sm:text-sm">
          B.Tech Computer Science & Engineering Student
        </p>

        {/* Cinematic Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-8">
          I&apos;m a passionate Computer Science and Engineering student driven by
          curiosity, creativity, and a strong desire to explore emerging technologies.
        </p>

        <div className="pointer-events-auto mb-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-mono font-medium text-black transition-colors hover:bg-sky-200"
          >
            Explore My Work
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
          <a
            href="/Lakita_Rajendra_Ingole_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-xs font-mono text-white transition-colors hover:border-sky-300/30 hover:bg-sky-300/[0.08]"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/[0.08] px-5 py-3 text-xs font-mono text-sky-100 transition-colors hover:bg-sky-400/[0.14]"
          >
            <Mail className="h-3.5 w-3.5" />
            Let&apos;s Connect
          </a>
        </div>

        {/* Tech tags preview */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            Python
          </span>
          <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            Exploring AI/ML
          </span>
          <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            C++
          </span>
          <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
            C
          </span>
        </div>
      </motion.div>

      {/* SECTION 2: LEFT ALIGNED (30% SCROLL) */}
      <motion.div
        style={{ opacity: opacity2, y: y2, x: x2 }}
        className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 max-w-xl text-left"
      >
        <div className="flex items-center gap-2 text-sky-300 text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-4 h-4" />
          <span>01 / The Mission</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
          I explore intelligent{" "}
          <span className="font-normal text-gradient-blue">solutions.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300/90 font-light leading-relaxed mb-8">
          I’m learning how data, algorithms, and code can solve practical
          problems. I enjoy turning classroom concepts into small projects and
          steadily growing my skills in AI and machine learning.
        </p>

        {/* Interactive Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="glass-panel p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-light text-white font-mono">Python</div>
            <div className="text-[11px] text-slate-400 tracking-wider font-mono uppercase mt-0.5">
              Programming
            </div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-light text-sky-300 font-mono">AI / ML</div>
            <div className="text-[11px] text-slate-400 tracking-wider font-mono uppercase mt-0.5">
              Career Goal
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 glass-panel p-3.5 rounded-xl border border-white/10">
            <div className="text-2xl font-light text-sky-400 font-mono">CSE</div>
            <div className="text-[11px] text-slate-400 tracking-wider font-mono uppercase mt-0.5">
              Foundations
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: RIGHT ALIGNED (60% SCROLL) */}
      <motion.div
        style={{ opacity: opacity3, y: y3, x: x3 }}
        className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 max-w-xl text-right flex flex-col items-end"
      >
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Layers className="w-4 h-4" />
          <span>02 / The Philosophy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
          Building foundations in{" "}
          <span className="font-normal text-gradient-cyan">computer science.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300/90 font-light leading-relaxed mb-8 max-w-md">
          Developing core skills in programming, data structures, mathematics,
          and computational thinking as I work toward a career in AI/ML.
        </p>

        {/* Skill Badges */}
        <div className="flex flex-wrap justify-end gap-2 max-w-md">
          <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Python</span>
          </div>
          <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>Data Structures</span>
          </div>
          <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-sky-300" />
            <span>Machine Learning</span>
          </div>
          <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-slate-300">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Continuous Learning</span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: TRANSITION CALLOUT (90% SCROLL) */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-x-0 bottom-16 mx-auto flex flex-col items-center text-center max-w-md px-4"
      >
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 mb-2">
          03 / Projects
        </span>
        <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
          Explore My Projects
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-light mb-4">
          Scroll down to explore projects and experience
        </p>
        <div className="w-8 h-8 rounded-full glass-panel flex items-center justify-center animate-bounce text-slate-300">
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>

      {/* BOTTOM SCROLL PROMPT (Visible only on initial frame) */}
      <motion.div
        style={{ opacity: scrollPromptOpacity }}
        className="absolute bottom-10 inset-x-0 mx-auto flex flex-col items-center gap-3 text-slate-400 pointer-events-none"
      >
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
          Scroll To Scrub Sequence
        </div>
        <div className="w-5 h-9 rounded-full border border-slate-600/60 p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-2.5 rounded-full bg-sky-400"
          />
        </div>
      </motion.div>
    </div>
  );
}
