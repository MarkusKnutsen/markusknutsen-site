import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://markusknutsen.no"),
  title: "Markus Knutsen | Installation Analysis Engineer & Python Developer",
  description:
    "Personal website for Markus Knutsen — offshore installation analysis engineer with a focus on Python, automation, hydrodynamics, and practical engineering workflows.",
  openGraph: {
    title: "Markus Knutsen",
    description:
      "Installation analysis engineer working at the intersection of offshore operations, Python development, and engineering automation.",
    url: "https://markusknutsen.no",
    siteName: "Markus Knutsen"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
