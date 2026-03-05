"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "OV-kaart informatie", href: "/" },
  { label: "Actiegids", href: "/actiegids" },
  { label: "Veelgestelde vragen", href: "/faq" },
  { label: "Mijn DUO", href: "#mijn-duo", external: false },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-duo-navy text-white" role="banner">
      {/* Rijksoverheid-stijl topbar */}
      <div className="bg-duo-blue-dark">
        <div className="max-w-5xl mx-auto px-4 py-1 flex items-center gap-2 text-sm">
          {/* DUO logo simulatie */}
          <span className="font-bold tracking-wide text-white text-base">
            DUO
          </span>
          <span className="text-blue-200 hidden sm:inline">
            Dienst Uitvoering Onderwijs
          </span>
        </div>
      </div>

      {/* Hoofdnavigatie */}
      <nav
        className="max-w-5xl mx-auto px-4"
        aria-label="Hoofdnavigatie"
      >
        <div className="flex items-center justify-between h-14">
          {/* Site naam */}
          <Link
            href="/"
            className="text-white font-bold text-lg no-underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
            aria-label="DUO Studenten-OV-kaart – naar homepage"
          >
            Studenten-OV-kaart
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white no-underline px-3 py-2 rounded text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobiel menu knop */}
          <button
            className="md:hidden p-2 rounded hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
            aria-label={menuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobiel dropdown */}
        {menuOpen && (
          <ul
            id="mobile-nav"
            className="md:hidden list-none m-0 p-0 pb-3 flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white no-underline px-3 py-2 rounded text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow"
                  onClick={() => setMenuOpen(false)}
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
