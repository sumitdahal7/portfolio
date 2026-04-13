import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sumit Dahal — Frontend Engineer",
  description:
    "Frontend Engineer specializing in scalable geospatial systems and data-driven applications. Expert in React, TypeScript, MapLibre GL, and modern web technologies.",
  keywords: [
    "Frontend Engineer",
    "React",
    "TypeScript",
    "GIS",
    "MapLibre",
    "Geospatial",
    "Nepal",
  ],
  authors: [{ name: "Sumit Dahal" }],
  openGraph: {
    title: "Sumit Dahal — Frontend Engineer",
    description:
      "Frontend Engineer specializing in scalable geospatial systems and data-driven applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jetbrains.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
