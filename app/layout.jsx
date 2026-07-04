import "./globals.css";
import MobileCTABar from "@/components/MobileCTABar";

const SITE_URL = "https://www.archvistastudio.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ArchVista Studio | Architecture & Interior Design Firm",
    template: "%s | ArchVista Studio",
  },

  description:
    "ArchVista Studio is a premium architecture and interior design firm with 12+ years of experience delivering residential, commercial, and corporate projects end-to-end — from concept to turnkey execution.",

  keywords: [
    "Architect",
    "Architecture Firm",
    "Interior Designer",
    "Luxury Interior Designer",
    "Residential Architect",
    "Commercial Architect",
    "Corporate Interior Designer",
    "Turnkey Interior Contractor",
    "Architecture Company India",
    "Interior Design Studio",
  ],

  authors: [
    {
      name: "ArchVista Studio",
    },
  ],

  creator: "ArchVista Studio",
  publisher: "ArchVista Studio",

  openGraph: {
    title: "ArchVista Studio | Thoughtful Design. Flawless Execution.",
    description:
      "12+ years designing residential, commercial & corporate spaces. Explore our portfolio and schedule a free consultation.",
    url: SITE_URL,
    siteName: "ArchVista Studio",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "ArchVista Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ArchVista Studio | Thoughtful Design. Flawless Execution.",
    description:
      "Premium architecture, interior design & turnkey execution. 12+ years, 450+ projects.",
    images: ["/images/og-cover.jpg"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "ArchVista Studio",

  image: `${SITE_URL}/images/og-cover.jpg`,

  "@id": SITE_URL,

  url: SITE_URL,

  telephone: "+91-88828-54334",

  priceRange: "$$$",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gurugram, Dwarka (Delhi), Dehradun, Haridwar, Mumbai, Ahmedabad",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3165,
    longitude: 78.0322,
  },

  areaServed: "India",

  sameAs: [
    "https://www.instagram.com/archvistastudio",
    "https://www.facebook.com/archvistastudio",
    "https://www.linkedin.com/company/archvistastudio",
  ],

  founder: {
    "@type": "Organization",
    name: "ArchVista Studio",
  },

  description:
    "Architecture, interior design and turnkey execution firm with 12+ years of experience across residential, commercial and corporate projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body className="font-body antialiased">
        {children}
        <MobileCTABar />
      </body>
    </html>
  );
}