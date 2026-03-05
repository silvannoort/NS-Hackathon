import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  title: "Studenten-OV-kaart | DUO",
  description:
    "Alles over de studenten-OV-kaart: aanvragen, pauzeren, stopzetten en veelgestelde vragen.",
  metadataBase: new URL("https://duo-ov-kaart.vercel.app"),
  openGraph: {
    title: "Studenten-OV-kaart | DUO",
    description:
      "Alles over de studenten-OV-kaart: aanvragen, pauzeren, stopzetten en veelgestelde vragen.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col bg-white text-duo-text">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
