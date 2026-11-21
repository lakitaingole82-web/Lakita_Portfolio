"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/lakitaingole82-web", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lakita-ingole-a98858373/", Icon: Linkedin },
];

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative z-20 w-full overflow-hidden border-t border-white/[0.08] bg-[#06080e] px-6 pb-12 pt-24 md:px-12 lg:px-20"
    >
      <div className="ambient-glow left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-sky-500/20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.06] px-3.5 py-1.5 text-xs font-mono text-sky-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            OPEN TO LEARNING & COLLABORATION
          </div>
          <h2 className="text-4xl font-light leading-tight tracking-tight text-white sm:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-blue font-normal">Amazing Together.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base font-light text-slate-400 sm:text-lg">
            I&apos;m always excited to connect with people, explore new opportunities,
            exchange ideas, and collaborate on meaningful projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-4 border-y border-white/[0.08] py-8 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:lakitaingole82@gmail.com"
            className="glass-panel flex items-center gap-3 rounded-xl p-4 text-sm text-slate-200 transition-colors hover:border-sky-300/25 hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0 text-sky-300" />
            <span className="break-all">lakitaingole82@gmail.com</span>
          </a>
          <a
            href="tel:+918080768221"
            className="glass-panel flex items-center gap-3 rounded-xl p-4 text-sm text-slate-200 transition-colors hover:border-sky-300/25 hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 text-sky-300" />
            <span>+91 8080768221</span>
          </a>
          <div className="glass-panel flex items-center gap-3 rounded-xl p-4 text-sm text-slate-300">
            <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />
            <span>Pandharpur, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Lakita's ${label} profile`}
                className="glass-panel flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm text-slate-300 transition-colors hover:border-sky-300/25 hover:text-sky-100"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-xs font-mono text-slate-500 sm:flex-row">
          <span>© 2026 Lakita Rajendra Ingole</span>
          <span>B.Tech CSE Student · Aspiring AI/ML Engineer | Web Developer</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
