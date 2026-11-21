"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Sprout, UserRound } from "lucide-react";

const PROJECTS = [
  {
    title: "Krushi-Setu",
    tagline: "Connecting Farmers to Customers",
    category: "Agriculture · Digital Platform",
    description:
      "KrushiSetu is a digital agriculture platform designed to bridge the gap between farmers and customers. It aims to support direct farmer-to-buyer connections through transparent pricing, improved market access, and smart-farming solutions.",
    objective:
      "Improve market access for smallholder farmers through fair trade, precision agriculture, and digital trust.",
    tags: ["Agriculture", "Digital Trade", "Smart Farming"],
    Icon: Sprout,
    artwork: "from-emerald-950 via-sky-950 to-[#091522]",
    artworkLabel: "Farmer-to-customer connections",
  },
  {
    title: "Skill Verse",
    tagline: "All Skills in One Platform",
    category: "AI · Learning Platform",
    description:
      "Skill Verse is an AI-powered learning platform designed to make skill development more accessible and engaging. It brings together personalized course creation, aptitude practice, interview preparation, skill exchange, and progress tracking in one centralized platform.",
    objective:
      "Bring learning, career preparation, and peer-to-peer skill exchange into one experience.",
    tags: ["Artificial Intelligence", "Personalized Learning", "Career Skills"],
    Icon: Cpu,
    artwork: "from-indigo-950 via-cyan-950 to-[#091522]",
    artworkLabel: "Connected learning pathways",
  },
  {
    title: "Personal Portfolio Website",
    tagline: "My Professional Digital Journey",
    category: "Web Development",
    description:
      "A modern and responsive personal portfolio developed to showcase my technical skills, projects, academic journey, certifications, and professional achievements through an engaging digital experience.",
    objective:
      "Present my education, projects, and growing technical skills in one place.",
    tags: ["Next.js", "TypeScript", "Responsive Design"],
    Icon: UserRound,
    artwork: "from-blue-950 via-sky-950 to-[#091522]",
    artworkLabel: "Portfolio and project showcase",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.Icon;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={(event) => {
        const bounds = cardRef.current?.getBoundingClientRect();
        if (bounds) {
          setMousePos({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:shadow-2xl hover:shadow-sky-950/30 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.10), transparent 70%)`
            : "none",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div
          role="img"
          aria-label={`${project.title}: ${project.artworkLabel}`}
          className={`relative mb-6 flex h-44 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br ${project.artwork}`}
        >
          <div className="absolute -left-8 -top-12 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute inset-x-7 top-7 flex items-center justify-between opacity-60">
            <span className="h-px w-1/4 bg-sky-200/50" />
            <span className="h-px w-1/3 bg-cyan-100/30" />
            <span className="h-px w-1/5 bg-sky-100/40" />
          </div>
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.08] text-sky-100 shadow-[0_12px_45px_rgba(8,47,73,0.35)] backdrop-blur-sm">
            <Icon className="h-9 w-9" aria-hidden="true" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
            <span className="text-xs font-mono text-sky-100/90">{project.artworkLabel}</span>
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
          </div>
        </div>
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            {project.category}
          </span>
          <span className="rounded-xl border border-sky-300/15 bg-sky-300/[0.08] p-2.5 text-sky-200">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <h3 className="mb-4 text-2xl font-light leading-snug tracking-tight text-white transition-colors group-hover:text-sky-100 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mb-4 -mt-2 text-xs font-mono uppercase tracking-wider text-sky-300">
          {project.tagline}
        </p>
        <p className="mb-4 text-sm font-light leading-relaxed text-slate-300 sm:text-base">
          {project.description}
        </p>
        <p className="mb-7 text-sm leading-relaxed text-slate-400">
          <span className="text-sky-200">Objective: </span>{project.objective}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-20 w-full scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[#080b12] px-6 py-24 sm:py-32 md:px-12 lg:px-20"
    >
      <div className="ambient-glow left-10 top-20 h-[500px] w-[500px] bg-sky-500/20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span>Selected Projects</span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              Projects & Ideas.
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            A selection of projects focused on agriculture, learning, and sharing
            my technical journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
