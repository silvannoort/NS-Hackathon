"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true" className="text-duo-success shrink-0 mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
function IconWarning() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 mt-0.5 text-amber-600">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      <section className="bg-duo-navy dark:bg-slate-900 text-white py-12 px-4" aria-labelledby="hero-heading">
        <div className="max-w-5xl mx-auto">
          <p className="text-duo-yellow font-semibold text-sm uppercase tracking-wide mb-2">{h.heroTag}</p>
          <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold leading-tight mb-4">{h.heroTitle}</h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">{h.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#aanvragen" className="btn-primary no-underline">{h.heroApply}<IconArrow /></Link>
            <Link href="/actiegids" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-duo-navy dark:hover:bg-white dark:hover:text-duo-navy no-underline px-8 py-4 text-base">{h.heroGuide}<IconArrow /></Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="text-2xl font-bold text-duo-navy dark:text-white mb-6">{h.benefitsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {h.benefits.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3">
              <IconCheck />
              <div>
                <h3 className="font-bold text-duo-navy dark:text-white">{item.title}</h3>
                <p className="text-sm text-duo-gray dark:text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="aanvragen" className="bg-duo-gray-light dark:bg-slate-800 px-4 py-12" aria-labelledby="apply-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="apply-heading" className="text-2xl font-bold text-duo-navy dark:text-white mb-2">{h.applyTitle}</h2>
          <p className="text-duo-gray dark:text-slate-300 mb-8">{h.applyDesc}</p>
          <ol className="flex flex-col gap-6 list-none m-0 p-0" aria-label={h.applyStepsLabel}>
            {h.applySteps.map((item, i) => (
              <li key={i} className="flex gap-5 bg-white dark:bg-slate-700 border border-duo-gray-border dark:border-slate-600 rounded-lg p-5 shadow-sm">
                <div className="step-badge" aria-label={`Stap ${i + 1}`}>{i + 1}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-duo-navy dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-duo-gray dark:text-slate-300 leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-duo-blue dark:text-sky-400">
                      {item.link.label}<IconArrow />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10" aria-labelledby="warning-heading">
        <div className="alert-warning flex gap-3 items-start">
          <IconWarning />
          <div>
            <h2 id="warning-heading" className="font-bold text-amber-800 dark:text-amber-200 mb-1">{h.warningTitle}</h2>
            <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
              {h.warningDesc} <strong>{h.warningBold}</strong>.{" "}
              <Link href="/actiegids#stopzetten" className="font-semibold text-amber-800 dark:text-amber-200">{h.warningLink}</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-duo-navy dark:bg-slate-900 text-white px-4 py-12" aria-labelledby="situations-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="situations-heading" className="text-2xl font-bold mb-2">{h.situationsTitle}</h2>
          <p className="text-blue-200 mb-8">{h.situationsDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {h.situations.map((item) => (
              <Link key={item.title} href={item.href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow group"
                aria-label={`${item.title}: ${item.desc}`}>
                <h3 className="font-bold text-white mb-1 group-hover:underline">{item.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
