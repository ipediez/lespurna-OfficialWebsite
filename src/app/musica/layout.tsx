import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    en: "Releases - LESPURNA",
    es: "Lanzamientos - LESPURNA",
    default: "Llançaments - LESPURNA",
  },
  description: {
    en: "Discover the music, concerts, and latest updates from LESPURNA. Listen now and check upcoming tour dates.",
    es: "Descubre la música, los conciertos y las últimas novedades de LESPURNA. Escucha ahora y consulta las próximas fechas de la gira.",
    default: "Descobreix la música, els concerts i les últimes novetats de LESPURNA. Escolta ara i consulta les pròximes dates de la gira.",
  },
  openGraph: {
    title: {
      en: "Releases - LESPURNA",
      es: "Lanzamientos - LESPURNA",
      default: "Llançaments - LESPURNA",
    },
    description: {
      en: "Discover the music, concerts, and latest updates from LESPURNA. Listen now and check upcoming tour dates.",
      es: "Descubre la música, los conciertos y las últimas novedades de LESPURNA. Escucha ahora y consulta las próximas fechas de la gira.",
      default: "Descobreix la música, els concerts i les últimes novetats de LESPURNA. Escolta ara i consulta les pròximes dates de la gira.",
    },
    url: "https://lespurna.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: {
          en: "LESPURNA Band Promotional Image",
          es: "Imagen Promocional de LESPURNA",
          default: "Imatge Promocional de LESPURNA",
        },
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lespurna",
    title: {
      en: "Releases - LESPURNA",
      es: "Lanzamientos - LESPURNA",
      default: "Llançaments - LESPURNA",
    },
    description: {
      en: "Discover the music, concerts, and latest updates from LESPURNA.",
      es: "Descubre la música, los conciertos y las últimas novedades de LESPURNA.",
      default: "Descobreix la música, els concerts i les últimes novetats de LESPURNA.",
    },
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lespurna.com",
    languages: {
      "en": "https://lespurna.com",
      "es": "https://lespurna.com/es",
      "ca": "https://lespurna.com/ca",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
