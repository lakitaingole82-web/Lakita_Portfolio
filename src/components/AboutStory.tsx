"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, MapPin, Sparkles, Trophy, UserRound } from "lucide-react";

const STATS = [
  { value: "10.00", label: "First-Year GPA" },
  { value: "3", label: "Leadership Positions" },
  { value: "3", label: "Featured Projects" },
];

export function AboutStory() {
  return (
    <section
      id="about"
      className="relative z-20 w-full scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[#0a0c14] px-6 py-24 sm:py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-sky-300/15 bg-[radial-gradient(ellipse_at_50%_30%,rgba(34,211,238,0.18),transparent_45%),linear-gradient(145deg,#101f37,#091321_60%,#101e30)] p-7 sm:p-9">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div className="relative mb-8 flex h-48 w-48 items-center justify-center rounded-full border border-sky-200/25 bg-white/[0.03] shadow-[0_0_80px_rgba(56,189,248,0.12)] sm:h-56 sm:w-56">
                  <div className="absolute inset-4 rounded-full border border-cyan-200/15" />
                  <div className="absolute inset-8 rounded-full border border-sky-200/10" />
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-sky-200/20 bg-sky-300/[0.09] text-3xl font-semibold tracking-wide text-sky-100 sm:h-28 sm:w-28 sm:text-4xl">
                    LI
                  </div>
                  <span className="absolute bottom-2 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-[#0b172a] text-cyan-200">
                    <UserRound className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.24em] text-sky-200">
                  Profile photo placeholder
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
                  Add a professional portrait here when one is available.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                  Pandharpur, Maharashtra, India
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8 lg:col-span-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300">
                <Compass className="h-4 w-4" />
                <span>Beyond the Code</span>
              </div>
              <h2 className="text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
                Curious by nature. Committed to meaningful technology.
              </h2>
            </div>

            <div className="space-y-4 text-base font-light leading-relaxed text-slate-300 sm:text-lg">
              <p>
                I&apos;m Lakita Rajendra Ingole, a second-year B.Tech Computer
                Science and Engineering student at SKN Sinhgad College of
                Engineering, Pandharpur.
              </p>
              <p>
                I&apos;m enthusiastic about technology, problem-solving, and
                building digital solutions. My learning journey currently focuses
                on Python programming, Artificial Intelligence, Machine Learning,
                and Web Development.
              </p>
              <p>
                I believe that learning becomes meaningful when knowledge is
                converted into practical experience. Through academic projects,
                hackathons, certifications, and leadership responsibilities, I
                continuously challenge myself to learn, collaborate, and grow.
              </p>
              <p className="text-slate-400">
                Apart from technology, I enjoy organizing activities,
                coordinating teams, taking responsibilities, and improving my
                communication and leadership skills. My vision is to become a
                skilled technology professional who combines technical
                knowledge, creativity, and problem-solving to build impactful
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-xl border border-white/[0.08] p-3 text-center sm:p-4"
                >
                  <div className="text-xl font-light text-sky-200 sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-wider text-slate-500 sm:text-[10px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-300/15 bg-sky-400/[0.05] p-5 sm:p-6">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-sky-200">
                <Trophy className="h-4 w-4" />
                Professional Objective
              </div>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                To become a skilled AI/ML Engineer and Software Engineer,
                develop innovative technology solutions, and build a successful
                career in a reputed multinational technology company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
