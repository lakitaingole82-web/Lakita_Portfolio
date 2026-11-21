"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Web Audio subtle click synthesizer
  const playClick = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // AudioContext not allowed or not supported
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Leadership", href: "#leadership" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Credentials", href: "#certifications" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 py-4 px-6 md:px-12 flex justify-center ${
          isScrolled ? "bg-[#0a0c14]/70 backdrop-blur-xl border-b border-white/[0.06]" : ""
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero-scroll"
            onClick={playClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-semibold text-white group-hover:bg-sky-500/20 group-hover:border-sky-500/40 group-hover:text-sky-300 transition-all duration-300">
              LI
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium tracking-tight text-white group-hover:text-sky-200 transition-colors">
                Lakita Rajendra Ingole
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                CSE · AI/ML Aspirant
              </span>
            </div>
          </a>

          {/* Desktop Nav Links Pill */}
          <nav className="hidden xl:flex items-center gap-0.5 glass-panel px-2 py-1.5 rounded-full border border-white/10 shadow-lg shadow-black/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={playClick}
                className="px-2.5 py-1.5 rounded-full text-[11px] font-mono text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3">
            {/* Audio Feedback Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClick();
              }}
              title={soundEnabled ? "Mute interactive audio" : "Enable tactile sound feedback"}
              className={`p-2 rounded-full border transition-all ${
                soundEnabled
                  ? "bg-sky-500/10 border-sky-500/30 text-sky-300"
                  : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Direct Contact CTA */}
            <a
              href="#contact"
              onClick={playClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-xs font-mono font-medium hover:bg-sky-200 transition-all duration-300 shadow-md shadow-white/10"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl glass-panel p-6 border border-white/10 xl:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  playClick();
                }}
                className="text-sm font-mono text-slate-300 hover:text-sky-300 py-2 border-b border-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 rounded-xl bg-white text-black text-center text-xs font-mono font-medium"
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
