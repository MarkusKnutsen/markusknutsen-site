import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://markusknutsen.no"),
  title: "Markus Knutsen | Analysis Engineer & Developer at Entail",
  description:
    "Markus Knutsen, Analysis Engineer & Developer at Entail in Oslo. Client-facing analysis, hydrodynamics, dynamic simulation, and practical engineering software.",
  openGraph: {
    title: "Markus Knutsen",
    description:
      "Analysis Engineer & Developer at Entail, combining client-facing engineering analysis with software development for offshore operations.",
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
