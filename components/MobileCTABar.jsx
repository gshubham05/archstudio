"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 md:hidden border-t border-line bg-surface shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      <a
        href="tel:+918882854334"
        className="flex items-center justify-center gap-2 py-4 bg-ink text-canvas font-accent font-medium text-[12.5px] tracking-widest2 uppercase"
      >
        <Phone size={15} strokeWidth={1.6} />
        Call Now
      </a>
      <a
        href="https://wa.me/918882854334"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-gold text-ink font-accent font-medium text-[12.5px] tracking-widest2 uppercase"
      >
        <MessageCircle size={15} strokeWidth={1.6} />
        WhatsApp Us
      </a>
    </div>
  );
}
