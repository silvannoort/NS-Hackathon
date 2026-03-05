import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import Chatbot from "@/components/Chatbot";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Studenten-OV-kaart | DUO",
  description:
    "Alles over de studenten-OV-kaart: aanvragen, pauzeren, stopzetten en veelgestelde vragen.",
  metadataBase: new URL("https://duo-ov-kaart.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
        }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-duo-text dark:text-slate-100 transition-colors">
        <LanguageProvider>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
