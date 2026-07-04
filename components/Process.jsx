"use client";

import { motion } from "framer-motion";

const STEPS = [
  { num: "01", title: "Consultation", desc: "We learn your brief, budget, and how you intend to use the space." },
  { num: "02", title: "Concept Development", desc: "Initial design directions exploring layout, material, and mood." },
  { num: "03", title: "3D Visualization", desc: "Photoreal renders so you can see the space before it's built." },
  { num: "04", title: "Detailed Planning", desc: "Working drawings, structural detailing, and service coordination." },
  { num: "05", title: "Material Selection", desc: "Finishes, fixtures, and furnishings sourced to match the design intent." },
  { num: "06", title: "Execution", desc: "Site supervision and project management through construction." },
  { num: "07", title: "Project Handover", desc: "Final walkthrough, snagging, and handover of a move-in ready space." },
];

export default function Process() {
  return (
    <section id="process" className="bg-ivory py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow gold-underline inline-block mb-7">Our Process</p>
          <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
            Seven Stages From First Conversation to Handover
          </h2>
        </div>

        {/* Desktop: horizontal connected timeline */}
        <div className="mt-20 hidden lg:block relative">
          <div className="absolute top-[18px] left-0 right-0 h-px bg-navy/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute top-[18px] left-0 right-0 h-px bg-gold"
          />
          <div className="grid grid-cols-7 gap-6">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pt-12"
              >
                <span className="absolute top-0 left-0 h-[9px] w-[9px] rounded-full bg-gold ring-4 ring-ivory" />
                <p className="font-display text-gold/70 text-xs tracking-widest2">{step.num}</p>
                <h3 className="mt-2 font-display text-navy text-[15px] leading-snug">{step.title}</h3>
                <p className="mt-2 text-[12.5px] text-ink/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-14 lg:hidden relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy/15" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gold"
          />
          <div className="space-y-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 h-[9px] w-[9px] rounded-full bg-gold ring-4 ring-ivory" />
                <p className="font-display text-gold/70 text-xs tracking-widest2">{step.num}</p>
                <h3 className="mt-1 font-display text-navy text-lg leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-ink/60 leading-relaxed max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
