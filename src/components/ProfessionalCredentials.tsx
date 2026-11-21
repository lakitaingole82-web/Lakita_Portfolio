"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Lightbulb, UsersRound } from "lucide-react";

const CERTIFICATIONS = [
  { title: "Operations Job Simulation", provider: "Goldman Sachs" },
  { title: "Basics of Python", provider: "Infosys Springboard" },
  { title: "Python for Data Science", provider: "Udemy" },
  { title: "Introduction to AI", provider: "Simplilearn" },
];

const ACTIVITIES = [
  {
    title: "SVERI National-Level Hackathon",
    context: "Participant",
    description:
      "Gained exposure to collaborative problem-solving and practical technology ideas in a national-level hackathon setting.",
  },
  {
    title: "SKNSCOE National-Level Hackathon",
    context: "Participant",
    description:
      "Joined a technical event focused on teamwork, learning, and exploring possible solutions to real problems.",
  },
  {
    title: "National-Level Hackathon, Fabtech College of Engineering, Sangola",
    context: "Participant",
    description:
      "Built practical exposure to collaboration and innovation through participation in a national-level event.",
  },
  {
    title: "SKNSCOE Soft Skills Training",
    context: "Participant",
    description:
      "Took part in training focused on communication, collaboration, and professional development.",
  },
];

export function ProfessionalCredentials() {
  return (
    <>
      <section
        id="certifications"
        className="relative z-20 w-full scroll-mt-24 border-t border-white/[0.06] bg-[#080b12] px-6 py-24 sm:py-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300">
              <Award className="h-4 w-4" />
              <span>Certifications</span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Learning through practice.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-panel flex items-center gap-4 rounded-xl border border-white/[0.08] p-5 transition-colors hover:border-cyan-300/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/[0.08] text-cyan-200">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-slate-400">
                    {item.provider}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="activities"
        className="relative z-20 w-full scroll-mt-24 border-t border-white/[0.06] bg-[#0a0c14] px-6 py-24 sm:py-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300">
                <UsersRound className="h-4 w-4" />
                <span>Activities & Technical Participation</span>
              </div>
              <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
                Learning together.
              </h2>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed text-slate-400 sm:text-base">
              Hackathons and training have given me opportunities to learn with
              others, explore ideas, and gain practical exposure.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {ACTIVITIES.map((activity, index) => (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-panel rounded-2xl border border-white/[0.08] p-5 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-xl border border-sky-300/15 bg-sky-300/[0.08] p-2.5 text-sky-200">
                    <Lightbulb className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300">
                    {activity.context}
                  </span>
                </div>
                <h3 className="text-lg font-medium leading-snug text-white">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {activity.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
