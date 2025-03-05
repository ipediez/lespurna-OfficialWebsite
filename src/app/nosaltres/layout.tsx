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

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Sobre la banda - LESPURNA",
  description: "Coneix més sobre LESPURNA, la seva música i els membres darrere del seu so.",
  openGraph: {
    title: "Sobre la banda - LESPURNA",
    description: "Descobreix la música, els concerts i les últimes novetats de LESPURNA. Escolta ara i consulta les pròximes dates de la gira.",
    url: "https://lespurna.com/nosaltres",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:"Imatge Promocional de LESPURNA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lespurna",
    title: "Llançaments - LESPURNA",
    description: "Descobreix la música, els concerts i les últimes novetats de LESPURNA.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <head>
        <meta name="next-size-adjust" content="100%" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
