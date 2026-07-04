"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Ruler,
  PencilRuler,
  LayoutTemplate,
  FileText,
  Briefcase,
  Home,
  Building,
  Gem,
  LayoutGrid,
  ClipboardList,
  HardHat,
  Boxes,
  Hammer,
  Wrench,
} from "lucide-react";

const GROUPS = [
  {
    title: "Architecture",
    items: [
      { icon: Home, name: "Residential Architecture", desc: "Custom homes designed around how you actually live." },
      { icon: Building2, name: "Commercial Architecture", desc: "Functional, code-compliant buildings that perform." },
      { icon: Ruler, name: "Building Planning", desc: "Site-responsive layouts grounded in structural logic." },
      { icon: PencilRuler, name: "Elevation Design", desc: "Facades that balance character with context." },
      { icon: FileText, name: "Working Drawings", desc: "Construction-ready documentation, detail by detail." },
    ],
  },
  {
    title: "Interior Design",
    items: [
      { icon: Briefcase, name: "Corporate Interior Design", desc: "Workplaces engineered for focus and brand identity." },
      { icon: Building, name: "Residential Interior Design", desc: "Interiors tailored to family, light, and material." },
      { icon: LayoutTemplate, name: "Office Interior Design", desc: "Layouts that scale with how teams actually work." },
      { icon: Gem, name: "Luxury Interiors", desc: "Bespoke finishes and detailing for elevated living." },
      { icon: LayoutGrid, name: "Space Planning", desc: "Every square foot accounted for, nothing wasted." },
    ],
  },
  {
    title: "Turnkey Execution",
    items: [
      { icon: ClipboardList, name: "Project Management", desc: "One point of accountability from start to handover." },
      { icon: HardHat, name: "Site Supervision", desc: "Daily oversight to keep quality and timelines on track." },
      { icon: Boxes, name: "Material Selection", desc: "Sourced and specified to match the design intent exactly." },
      { icon: Hammer, name: "Renovation", desc: "Structural and cosmetic upgrades without the guesswork." },
      { icon: Wrench, name: "Complete Execution", desc: "Design and build under a single accountable team." },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow gold-underline inline-block mb-7">What We Do</p>
          <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
            Services Built Around the Full Lifecycle of a Space
          </h2>
        </div>

        <div className="mt-16 space-y-16">
          {GROUPS.map((group, gi) => (
            <div key={group.title}>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-gold text-sm tracking-widest2 uppercase">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-navy text-2xl">{group.title}</h3>
                <span className="flex-1 h-px bg-navy/10" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="group bg-white p-7 border border-navy/5 hover:border-gold/40 transition-colors"
                    >
                      <Icon size={26} strokeWidth={1.4} className="text-gold" />
                      <h4 className="mt-5 font-display text-navy text-lg leading-snug">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-[14px] text-ink/65 leading-relaxed">{item.desc}</p>
                      <a
                        href="#contact"
                        className="mt-5 inline-flex items-center text-[12px] font-semibold uppercase tracking-wide text-navy group-hover:text-gold transition-colors"
                      >
                        Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
