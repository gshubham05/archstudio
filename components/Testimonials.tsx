"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Aditi Sharma",
    project: "Residential — Ridgeline House",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    review:
      "ArchVista understood exactly how our family lives before drawing a single line. The execution matched the renders almost exactly — rare for a project this size.",
  },
  {
    name: "Rohit Malhotra",
    project: "Corporate — Meridian HQ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    review:
      "We needed an office that reflected the brand without feeling cold. The team delivered that, on schedule, with a project manager who answered every call.",
  },
  {
    name: "Neha Kapoor",
    project: "Luxury Interiors — Aurelia Penthouse",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    review:
      "The level of material detailing was beyond what we expected at this budget. Every finish was sourced and signed off before installation — zero surprises.",
  },
  {
    name: "Vikram Bhatt",
    project: "Commercial — Greenfield Plaza",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    review:
      "Site supervision was constant and visible in the quality of the finish. ArchVista managed contractors so we didn't have to chase a single one ourselves.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % REVIEWS.length);
  const prev = () => setIndex((index - 1 + REVIEWS.length) % REVIEWS.length);
  const current = REVIEWS[index];

  return (
    <section id="testimonials" className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-eyebrow inline-block mb-7">Client Stories</p>
          <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
            What It's Like to Build With Us
          </h2>
        </div>

        <div className="mt-14 max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="bg-ivory p-8 md:p-12 text-center border border-navy/5"
            >
              <Quote size={28} className="text-gold mx-auto" strokeWidth={1.3} />

              <div className="flex justify-center gap-1 mt-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="mt-5 text-ink/75 text-[15px] md:text-base leading-relaxed">
                “{current.review}”
              </p>

              <div className="mt-7 flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-display text-navy text-[15px]">{current.name}</p>
                  <p className="text-[12px] text-ink/55 tracking-wide">{current.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center border border-navy/15 text-navy hover:border-gold hover:text-gold transition-colors bg-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center border border-navy/15 text-navy hover:border-gold hover:text-gold transition-colors bg-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-8 bg-gold" : "w-3 bg-navy/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
