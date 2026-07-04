"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS = [
  { id: 1, title: "The Ridgeline Residence", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop", span: "row-span-2", location: "Dehradun, IN", area: "4,200 sq ft" },
  { id: 2, title: "Meridian Corporate HQ", category: "Corporate", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", span: "", location: "Noida, IN", area: "18,000 sq ft" },
  { id: 3, title: "Aurelia Penthouse", category: "Luxury Interiors", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop", span: "", location: "Mumbai, IN", area: "3,100 sq ft" },
  { id: 4, title: "Greenfield Retail Plaza", category: "Commercial", image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200&auto=format&fit=crop", span: "row-span-2", location: "Dehradun, IN", area: "22,500 sq ft" },
  { id: 5, title: "Birchwood Family Home", category: "Residential", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop", span: "", location: "Rishikesh, IN", area: "3,600 sq ft" },
  { id: 6, title: "Solace Wellness Office", category: "Corporate", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop", span: "", location: "Gurugram, IN", area: "9,800 sq ft" },
  { id: 7, title: "Marbella Show Villa", category: "Luxury Interiors", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop", span: "row-span-2", location: "Dehradun, IN", area: "5,400 sq ft" },
  { id: 8, title: "Crestview Boutique Hotel", category: "Commercial", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop", span: "", location: "Mussoorie, IN", area: "31,000 sq ft" },
];

const CATEGORIES = ["All", "Residential", "Corporate", "Commercial", "Luxury Interiors"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  const openLightbox = (id) => {
    const idx = filtered.findIndex((p) => p.id === id);
    setLightboxIndex(idx);
  };

  const navigate = (dir) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + filtered.length) % filtered.length);
  };

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="portfolio" className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="section-eyebrow gold-underline inline-block mb-7">Our Work</p>
            <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
              A Portfolio Shaped by Every Sector We Build For
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[12px] font-medium tracking-wide uppercase border transition-colors ${
                  active === cat
                    ? "bg-navy text-white border-navy"
                    : "border-navy/15 text-ink/70 hover:border-navy/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 [grid-auto-rows:280px]">
          {filtered.map((p, idx) => (
            <motion.button
              key={p.id}
              onClick={() => openLightbox(p.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className={`relative group overflow-hidden text-left ${p.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${p.image}')` }}
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-gold text-[11px] tracking-widest2 uppercase">{p.category}</p>
                <p className="font-display text-white text-lg mt-1">{p.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center px-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-white/80 hover:text-gold"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 md:left-10 text-white/70 hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
            >
              <ArrowLeft size={28} />
            </button>
            <button
              aria-label="Next"
              className="absolute right-4 md:right-10 text-white/70 hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
            >
              <ArrowRight size={28} />
            </button>

            <div
              className="max-w-3xl w-full bg-charcoal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-gold text-[11px] tracking-widest2 uppercase">{current.category}</p>
                  <p className="font-display text-white text-xl mt-1">{current.title}</p>
                </div>
                <div className="flex gap-6 text-white/60 text-[13px]">
                  <span>{current.location}</span>
                  <span>{current.area}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}