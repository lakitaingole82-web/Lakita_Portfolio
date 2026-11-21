"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, MonitorCog, Sparkles, UsersRound } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Programming",
    status: "Learning & practicing",
    icon: Code2,
    skills: ["Python", "C++", "C"],
  },
  {
    title: "Data Science Libraries",
    status: "Learning & practicing",
    icon: BrainCircuit,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Web Development",
    status: "Learning & practicing",
    icon: MonitorCog,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Technologies",
    status: "Tools I use",
    icon: Sparkles,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Professional Skills",
    status: "Strengths",
    icon: UsersRound,
    skills: [
      "Problem Solving",
      "Leadership",
      "Team Management",
      "Adaptability",
      "Quick Learning",
      "Communication",
    ],
  },
];

export function SkillsExperience() {
  return (
    <section
      id="skills"
      className="relative z-20 w-full scroll-mt-24 border-t border-white/[0.06] bg-[#0a0c14] px-6 py-24 sm:py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Building my toolkit.
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            Learning status is shown where I am still developing practical
            experience; tools I use are labeled separately.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-panel rounded-2xl border border-white/10 p-6 transition-colors hover:border-sky-300/20 sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl border border-sky-300/15 bg-sky-300/[0.08] p-3 text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-light text-white sm:text-xl">
                      {group.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-right text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {group.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
