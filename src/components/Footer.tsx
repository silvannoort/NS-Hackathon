"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-duo-navy dark:bg-slate-900 text-white mt-12 border-t border-white/10" role="contentinfo" aria-label="Voettekst">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-bold text-base mb-3">{f.col1Title}</p>
          <p className="text-blue-200 text-sm leading-relaxed">{f.col1Desc}</p>
        </div>

        <nav aria-label={f.col2Title}>
          <p className="font-bold text-base mb-3">{f.col2Title}</p>
          <ul className="list-none m-0 p-0 flex flex-col gap-2 text-sm" role="list">
            {f.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-blue-200 hover:text-white no-underline hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-bold text-base mb-3">{f.col3Title}</p>
          <ul className="list-none m-0 p-0 flex flex-col gap-2 text-sm text-blue-200" role="list">
            <li>{f.phone}</li>
            <li>{f.hours}</li>
            <li>
              <Link href="https://www.duo.nl/contact/contactformulier.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white no-underline hover:underline">
                {f.contactForm}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200">
          <span>© {new Date().getFullYear()} {f.copy}</span>
          <nav aria-label="Juridische links">
            <ul className="list-none m-0 p-0 flex gap-4" role="list">
              {[
                { label: f.privacy, href: "https://www.duo.nl/particulier/privacybeleid.jsp" },
                { label: f.accessibility, href: "https://www.duo.nl/toegankelijkheid/" },
                { label: f.cookies, href: "https://www.duo.nl/cookies/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white no-underline hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
