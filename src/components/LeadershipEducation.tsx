"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, UsersRound } from "lucide-react";

const LEADERSHIP = [
  {
    position: "Event Coordinator",
    organization: "Association of Computer Science and Engineering Students (ACSES)",
    duration: "July 2026 – Present",
    description:
      "Serving as an Event Coordinator at ACSES, actively contributing to the planning, coordination, and execution of student-focused technical and extracurricular activities. Working collaboratively with teams, managing event responsibilities, and encouraging student participation and engagement.",
    highlights: ["Event Coordination", "Team Collaboration", "Leadership", "Management Skills", "Organizational Skills"],
  },
  {
    position: "Secretary",
    organization: "Student Council",
    duration: "August 2026 – Present",
    description:
      "Serving as Secretary of the Student Council for the 2026–27 academic year, contributing to student coordination, organizational activities, communication, and the smooth execution of student initiatives. Working with representatives and college clubs to support student engagement and address student-related concerns.",
    highlights: ["Student Leadership", "Communication", "Administration", "Team Management", "Responsibility"],
  },
  {
    position: "Secretary",
    organization: "IEI Student Chapter",
    duration: "July 2026 – Present",
    description:
      "Serving as Secretary of the IEI Student Chapter, contributing to the coordination of technical activities, student engagement, and chapter initiatives. Supporting event organization and collaborative learning while developing leadership and organizational abilities.",
    highlights: ["Technical Event Coordination", "Leadership", "Organizational Skills", "Teamwork", "Professional Development"],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "SKN Sinhgad College of Engineering, Pandharpur",
    detail: "Expected Graduation: 2029",
    result: "First-Year GPA: 10.00",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "New English School & Jr. College, Sangola",
  },
  {
    degree: "Secondary (10th)",
    institution: "Vidya Mandir High School, Ekhatpur",
  },
];

export function LeadershipEducation() {
  return (
    <section className="relative z-20 w-full border-t border-white/[0.06] bg-[#080b12] px-6 py-24 sm:py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div id="leadership" className="scroll-mt-28">
          <div className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300">
              <UsersRound className="h-4 w-4" />
              <span>Leadership & Community Involvement</span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Leadership & Community Involvement.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {LEADERSHIP.map((role, index) => (
              <motion.article
                key={`${role.organization}-${role.position}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel rounded-2xl border border-white/[0.08] p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-xl border border-sky-300/15 bg-sky-300/[0.08] p-3 text-sky-200">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="text-right text-[10px] font-mono uppercase tracking-wider text-slate-500">{role.duration}</span>
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-sky-300">{role.position}</p>
                <h3 className="mt-2 min-h-12 text-lg font-medium leading-snug text-white">{role.organization}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-slate-400">{role.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                  {role.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10px] font-mono text-slate-300">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div id="education" className="scroll-mt-28 pt-24 sm:pt-28">
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">Education Journey.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {EDUCATION.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="glass-panel grid gap-4 rounded-2xl border border-white/[0.08] p-6 md:grid-cols-[1fr_1.5fr_auto]"
              >
                <h3 className="text-lg font-medium text-white">{item.degree}</h3>
                <p className="text-sm text-slate-300">{item.institution}</p>
                <div className="text-sm text-slate-400 md:text-right">
                  <p>{item.detail}</p>
                  {item.result && <p className="mt-1 text-sky-300">{item.result}</p>}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
