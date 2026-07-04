"use client";

import { motion } from "framer-motion";

const TRUST_ITEMS = [
  "12+ Years Experience",
  "450+ Projects Completed",
  "Residential & Commercial Experts",
  "End-to-End Execution",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end md:items-center overflow-hidden bg-navy"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-navy/30" />

      {/* Signature: hand-drawn architectural plan line tracing the hero on load */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.35] mix-blend-screen hidden md:block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 80 700 L 80 120 L 420 120 L 420 320 L 700 320 L 700 120 L 1120 120 L 1120 700 L 80 700 Z M 420 320 L 420 700 M 700 320 L 700 700 M 80 480 L 1120 480"
          fill="none"
          stroke="#C9A86A"
          strokeWidth="1.5"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-drawline"
        />
      </svg>

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pb-28 md:pb-0 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-eyebrow text-gold mb-6"
          >
            Architecture &middot; Interior Design &middot; Turnkey Execution
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-white text-[2.6rem] leading-[1.1] md:text-6xl md:leading-[1.08] font-medium"
          >
            Designing Spaces That Inspire Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-xl"
          >
            For over 12 years, ArchVista Studio has been transforming
            residential, commercial, and corporate spaces through thoughtful
            design and flawless execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy text-[13px] font-semibold uppercase tracking-wide hover:bg-white transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 border border-white/40 text-white text-[13px] font-semibold uppercase tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 border-t border-white/15 pt-8"
        >
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
              <span className="text-white/85 text-[13px] md:text-sm leading-snug">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
