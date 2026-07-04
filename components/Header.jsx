"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        dark ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        <a href="#home" className="flex items-baseline gap-2">
          <span
            className={`font-display text-xl md:text-2xl tracking-wide transition-colors ${
              dark ? "text-navy" : "text-white"
            }`}
          >
            ArchVista
          </span>
          <span
            className={`text-[10px] tracking-widest2 uppercase font-body transition-colors ${
              dark ? "text-gold-dark" : "text-gold"
            }`}
          >
            Studio
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-wide font-medium transition-colors hover:text-gold ${
                dark ? "text-ink" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden lg:inline-flex items-center px-6 py-3 text-[12px] font-semibold tracking-wide uppercase transition-all ${
            dark
              ? "bg-navy text-white hover:bg-gold hover:text-navy"
              : "bg-gold text-navy hover:bg-white"
          }`}
        >
          Get Free Consultation
        </a>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden ${dark ? "text-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-6 py-3 bg-navy text-white text-[12px] font-semibold tracking-wide uppercase"
          >
            Get Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
