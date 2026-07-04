"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What architecture services does ArchVista Studio provide?",
    a: "We handle residential and commercial architecture end-to-end — building planning, elevation design, and detailed working drawings — for new builds and renovations alike.",
  },
  {
    q: "Do you offer interior design alongside architecture?",
    a: "Yes. Our interior design team works on residential, corporate, office, and luxury projects, often alongside our architecture team for a single coordinated design.",
  },
  {
    q: "How much does a project with ArchVista Studio cost?",
    a: "Cost depends on scope, area, and finish level. We provide a detailed estimate after the initial consultation, once we understand your brief and budget range.",
  },
  {
    q: "How long does a typical project take from design to handover?",
    a: "Timelines vary by project type and size. A residential interior project typically runs 3–5 months; larger architecture and turnkey projects can take longer. We confirm a schedule during planning.",
  },
  {
    q: "What happens during the free consultation?",
    a: "We discuss your space, goals, and budget, walk through how we work, and outline next steps — concept development, visualization, and a cost estimate.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
        <div>
          <p className="section-eyebrow gold-underline inline-block mb-7">FAQ</p>
          <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
            Common Questions, Answered Plainly
          </h2>
          <p className="mt-5 text-ink/65 text-[15px] leading-relaxed max-w-sm">
            Can't find what you're looking for? Send us a message and we'll
            get back to you within one business day.
          </p>
        </div>

        <div className="divide-y divide-navy/10">
          {FAQS.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={faq.q} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-navy text-[16px] md:text-[17px] leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 h-7 w-7 flex items-center justify-center border border-navy/20 transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-gold text-gold" : "text-navy"
                    }`}
                  >
                    <Plus size={14} />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-ink/65 text-[14.5px] leading-relaxed max-w-lg">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}