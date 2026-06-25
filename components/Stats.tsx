"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 450, suffix: "+", label: "Projects" },
  { value: 300, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Corporate Projects" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-gold text-4xl md:text-5xl font-medium">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-white/55 text-[12px] md:text-[13px] tracking-widest2 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
