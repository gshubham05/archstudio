import { Instagram, Facebook, Linkedin } from "lucide-react";

const SERVICES = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Turnkey Execution",
];

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-12">
        <div>
          <p className="font-display text-white text-xl tracking-wide">
            ArchVista <span className="text-gold text-sm">Studio</span>
          </p>
          <p className="mt-4 text-[13.5px] leading-relaxed max-w-xs text-white/55">
            A premium architecture and interior design firm delivering
            residential, commercial, and corporate projects end-to-end, with
            12+ years of experience.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 flex items-center justify-center border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white text-[13px] font-semibold tracking-widest2 uppercase mb-5">Services</p>
          <ul className="space-y-3 text-[13.5px]">
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-gold transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-[13px] font-semibold tracking-widest2 uppercase mb-5">Quick Links</p>
          <ul className="space-y-3 text-[13.5px]">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-[13px] font-semibold tracking-widest2 uppercase mb-5">Find Us</p>
          <div className="aspect-[4/3] w-full overflow-hidden border border-white/10">
            <iframe
              title="ArchVista Studio location"
              src="https://www.google.com/maps?q=Dehradun,Uttarakhand,India&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
          <p>© {new Date().getFullYear()} ArchVista Studio. All rights reserved.</p>
          <p>Designed &amp; built with thoughtful design and flawless execution.</p>
        </div>
      </div>
    </footer>
  );
}
