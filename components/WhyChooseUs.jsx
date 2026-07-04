"use client";

import { motion } from "framer-motion";
import {
  Award,
  Layers,
  Eye,
  ShieldCheck,
  Clock,
  Users,
  PackageCheck,
} from "lucide-react";

const POINTS = [
  { icon: Award, title: "12+ Years Industry Experience", desc: "A track record built across residential, commercial and corporate sectors." },
  { icon: Layers, title: "Tailor-Made Designs", desc: "No templates — every space is designed around the people who use it." },
  { icon: Eye, title: "Transparent Process", desc: "Clear costing, timelines, and updates at every stage of the project." },
  { icon: ShieldCheck, title: "Quality Materials", desc: "Sourced and specified with longevity and finish in mind." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined scheduling that respects your move-in or opening date." },
  { icon: Users, title: "Dedicated Project Management", desc: "A single point of contact accountable from day one to handover." },
  { icon: PackageCheck, title: "End-to-End Solutions", desc: "Design, procurement, and execution under one accountable studio." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="max-w-content mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow gold-underline inline-block mb-7">Why ArchVista</p>
          <h2 className="font-display text-white text-3xl md:text-[2.6rem] leading-tight font-medium">
            Reasons Clients Trust Us With Their Spaces
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-navy p-8"
              >
                <Icon size={24} strokeWidth={1.4} className="text-gold" />
                <h3 className="mt-5 font-display text-white text-base leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-[13px] text-white/55 leading-relaxed">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
