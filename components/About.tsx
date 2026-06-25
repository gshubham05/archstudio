"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  "12+ years of cross-sector experience",
  "In-house architecture & interior design expertise",
  "Turnkey, end-to-end project execution",
  "A client-first approach at every stage",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/mohini.jpeg')",
              }}
            />
          </div>
          <div className="absolute -bottom-8 -right-6 md:-right-10 bg-navy text-white px-8 py-6 max-w-[230px] hidden sm:block">
            <p className="font-display text-3xl text-gold">12+</p>
            <p className="text-[12px] tracking-wide text-white/75 mt-1">
              Years of design &amp; build experience
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow gold-underline inline-block mb-7">About Us</p>
          <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
            Building Better Spaces Since Day One
          </h2>
          <p className="mt-6 text-ink/80 leading-relaxed">
            ArchVista Studio brings together architectural rigor and interior
            craftsmanship under one roof. What began as a small design
            practice has grown into a full-service studio trusted for
            residential, commercial, and corporate work — delivering not just
            drawings, but completed, lived-in spaces.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-px w-5 bg-gold shrink-0" />
                <span className="text-ink/85 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full overflow-hidden bg-navy/10 shrink-0">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/mohini.jpeg')",
                }}
              />
            </div>
            <div>
              <p className="font-display text-navy text-lg">Founder &amp; Principal Architect</p>
              <p className="text-[13px] text-ink/60 tracking-wide">ArchVista Studio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
