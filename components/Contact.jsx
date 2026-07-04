"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

const PROJECT_TYPES = [
  "Residential Architecture",
  "Commercial Architecture",
  "Residential Interior",
  "Corporate Interior",
  "Turnkey Execution",
  "Renovation",
];

const BUDGET_RANGES = [
  "Under ₹10 Lakh",
  "₹10 – 25 Lakh",
  "₹25 – 50 Lakh",
  "₹50 Lakh – 1 Crore",
  "Above ₹1 Crore",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow gold-underline inline-block mb-7">Get In Touch</p>
          <h2 className="font-display text-navy text-3xl md:text-[2.6rem] leading-tight font-medium">
            Let's Talk About Your Space
          </h2>
          <p className="mt-5 text-ink/65 text-[15px] leading-relaxed max-w-md">
            Tell us about your project and we'll get back to you within one
            business day with next steps and an estimated cost range.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+918882854334" className="flex items-center gap-4 group">
              <span className="h-11 w-11 flex items-center justify-center border border-navy/15 text-navy group-hover:border-gold group-hover:text-gold transition-colors">
                <Phone size={17} />
              </span>
              <span className="text-ink/80 text-[15px]">+91 8882854334</span>
            </a>
            <a href="tel:+919084391849" className="flex items-center gap-4 group">
              <span className="h-11 w-11 flex items-center justify-center border border-navy/15 text-navy group-hover:border-gold group-hover:text-gold transition-colors">
                <Phone size={17} />
              </span>
              <span className="text-ink/80 text-[15px]">+91 9084391849</span>
            </a>
            <a href="mailto:hello@archvistastudio.com" className="flex items-center gap-4 group">
              <span className="h-11 w-11 flex items-center justify-center border border-navy/15 text-navy group-hover:border-gold group-hover:text-gold transition-colors">
                <Mail size={17} />
              </span>
              <span className="text-ink/80 text-[15px]">hello@archvistastudio.com</span>
            </a>
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 flex items-center justify-center border border-navy/15 text-navy shrink-0">
                <MapPin size={17} />
              </span>
              <span className="text-ink/80 text-[15px] leading-relaxed">
                Gurugram · Dwarka (Delhi) · Dehradun · Haridwar · Mumbai · Ahmedabad
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/918882854334"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-7 py-4 bg-navy text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-gold hover:text-navy transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-ivory p-7 md:p-10 border border-navy/5"
        >
          {submitted ? (
            <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center">
              <CheckCircle2 size={40} className="text-gold" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-navy text-xl">Inquiry Received</h3>
              <p className="mt-2 text-ink/60 text-[14px] max-w-xs">
                Thank you for reaching out. Our team will contact you within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" required />
                <Field label="City" name="city" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <SelectField label="Project Type" name="projectType" options={PROJECT_TYPES} />
                <SelectField label="Estimated Budget" name="budget" options={BUDGET_RANGES} />
              </div>
              <div>
                <label className="block text-[12px] font-medium tracking-wide uppercase text-navy/70 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your project..."
                  className="w-full bg-white border border-navy/15 px-4 py-3 text-[14px] text-ink focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center px-7 py-4 bg-navy text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-gold hover:text-navy transition-colors"
                >
                  Submit Inquiry
                </button>
                <a
                  href="https://wa.me/918882854334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 border border-navy/20 text-navy text-[13px] font-semibold uppercase tracking-wide hover:border-gold hover:text-gold transition-colors"
                >
                  <MessageCircle size={15} /> WhatsApp Now
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[12px] font-medium tracking-wide uppercase text-navy/70 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-white border border-navy/15 px-4 py-3 text-[14px] text-ink focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[12px] font-medium tracking-wide uppercase text-navy/70 mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full bg-white border border-navy/15 px-4 py-3 text-[14px] text-ink focus:outline-none focus:border-gold transition-colors"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
