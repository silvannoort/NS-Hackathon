"use client";

import Link from "next/link";
import HashScroller from "@/components/HashScroller";
import { useLanguage } from "@/context/LanguageContext";

export default function ActiegidsPage() {
  const { t, lang } = useLanguage();
  const g = t.guide;
  const stepWord = lang === "nl" ? "Stap" : "Step";

  return (
    <>
      <HashScroller />

      {/* Hero */}
      <section className="bg-duo-navy dark:bg-slate-900 text-white py-10 px-4" aria-labelledby="actiegids-hero-heading">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 list-none m-0 p-0">
              <li><Link href="/" className="text-blue-200 hover:text-white">{g.breadcrumbHome}</Link></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-white font-semibold">{g.breadcrumbCurrent}</span></li>
            </ol>
          </nav>
          <h1 id="actiegids-hero-heading" className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            {g.heroTitle}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            {g.heroDesc}
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <nav className="bg-duo-blue-light dark:bg-slate-800 border-b border-duo-gray-border dark:border-slate-700 px-4 py-4" aria-label="Section navigation">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-duo-navy dark:text-white mb-2">{g.jumpTo}</p>
          <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
            {g.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-duo-blue dark:text-sky-400 border border-duo-blue dark:border-sky-400 px-3 py-1.5 rounded hover:bg-duo-blue dark:hover:bg-sky-600 hover:text-white transition-colors no-underline"
                >
                  {s.title.split(" ").slice(0, 2).join(" ")}…
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">
        {g.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <div className="flex items-center gap-3 mb-3">
              <h2 id={`${section.id}-heading`} className="text-2xl font-bold text-duo-navy dark:text-white">
                {section.title}
              </h2>
            </div>
            <p className="text-duo-gray dark:text-slate-300 leading-relaxed mb-6">{section.intro}</p>

            {section.warning && (
              <div className="alert-warning flex gap-3 items-start mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 mt-0.5 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <p className="text-sm text-amber-900 dark:text-amber-100">{section.warning}</p>
              </div>
            )}

            <ol className="flex flex-col gap-4 list-none m-0 p-0" aria-label={`${lang === "nl" ? "Stappen voor" : "Steps for"}: ${section.title}`}>
              {section.steps.map((step, i) => (
                <li key={i} className="flex gap-5 bg-white dark:bg-slate-800 border border-duo-gray-border dark:border-slate-600 rounded-lg p-5 shadow-sm">
                  <div className="step-badge" aria-label={`${stepWord} ${i + 1}`}>{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-duo-navy dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-duo-gray dark:text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="alert-info flex gap-3 items-start mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#01689B" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
              </svg>
              <p className="text-sm text-duo-blue-dark dark:text-sky-300">
                <strong>{g.confirmBold}</strong> {g.confirmNote}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-duo-gray-light dark:bg-slate-800 px-4 py-10" aria-labelledby="help-heading">
        <div className="max-w-5xl mx-auto text-center">
          <h2 id="help-heading" className="text-xl font-bold text-duo-navy dark:text-white mb-2">
            {g.ctaTitle}
          </h2>
          <p className="text-duo-gray dark:text-slate-300 mb-6">
            {g.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/faq" className="btn-primary no-underline">{g.ctaFaq}</Link>
            <Link href="https://www.duo.nl/contact/contactformulier.jsp" target="_blank" rel="noopener noreferrer" className="btn-secondary no-underline">
              {g.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
