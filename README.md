# ArchVista Studio — Website

Premium architecture & interior design website built with Next.js 15 (App
Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## What's included

- Sticky transparent header that solidifies on scroll, full mobile nav
- Fixed mobile bottom CTA bar (Call Now / WhatsApp Us)
- Full-screen hero with an animated blueprint line-draw signature graphic
- About, Services (Architecture / Interior Design / Turnkey Execution),
  filterable Portfolio with lightbox, Why Choose Us, a connected Process
  timeline, animated stat counters, a testimonial slider, an FAQ accordion,
  a lead-generation Contact form, and a Footer with an embedded map
- SEO: metadata, Open Graph/Twitter tags, JSON-LD `ProfessionalService`
  (local business) schema, `sitemap.xml`, `robots.txt`

## Before you deploy — placeholders to replace

1. **Images** — every photo currently pulls from Unsplash by URL
   (`components/Hero.tsx`, `About.tsx`, `Portfolio.tsx`, `Testimonials.tsx`).
   Swap these for your own project photography. Add real files under
   `public/images/` and update the `backgroundImage` / `src` values.
2. **Contact details** — phone number (`+919000000000`), WhatsApp link, email,
   and address appear in `MobileCTABar.tsx`, `Contact.tsx`, and `Footer.tsx`.
3. **Domain & schema** — `SITE_URL` in `app/layout.tsx`, and the address/geo
   coordinates inside the `localBusinessSchema` object, plus `app/sitemap.ts`.
4. **OG image** — add a real `public/images/og-cover.jpg` (1200×630).
5. **Form submission** — the contact form in `Contact.tsx` currently only
   shows a success state on submit. Wire `handleSubmit` to your email
   service, CRM, or API route (e.g. Resend, Formspree, or a Next.js API
   route that emails/saves the lead).
6. **Google Fonts** — fonts load via a `<link>` tag in `app/layout.tsx`
   pointing at Google Fonts. If you'd rather self-host, download the
   Playfair Display / Inter font files and switch to `next/font/local`.
