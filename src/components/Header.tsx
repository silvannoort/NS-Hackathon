"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggle: toggleLang } = useLanguage();

  const navItems = [
    { label: t.nav.ovCard, href: "/" },
    { label: t.nav.guide, href: "/actiegids" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.myDuo, href: "https://mijn.duo.nl" },
  ];

  return (
    <header className="bg-duo-navy dark:bg-slate-900 text-white" role="banner">
      {/* Logo + controls topbar */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="https://www.duo.nl" target="_blank" rel="noopener noreferrer" aria-label={t.nav.logoAlt}>
            <span className="inline-block bg-white px-1 rounded">
              <Image src="/duo-logo.png" alt="Dienst Uitvoering Onderwijs" width={220} height={52} className="h-9 w-auto" priority />
            </span>
          </Link>
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label={t.switchLangLabel}
              title={t.switchLangLabel}
              className="px-2.5 py-1.5 rounded text-sm font-bold text-duo-gray dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow transition-colors border border-duo-gray-border dark:border-slate-600"
            >
              {t.switchLang}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-5xl mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-white font-bold text-lg no-underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
          >
            {t.nav.siteTitle}
          </Link>

          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white no-underline px-3 py-2 rounded text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 rounded hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
            aria-label={menuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <ul id="mobile-nav" className="md:hidden list-none m-0 p-0 pb-3 flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white no-underline px-3 py-2 rounded text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
                  onClick={() => setMenuOpen(false)}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
