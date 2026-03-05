"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqPage() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <>
      {/* Hero */}
      <section className="bg-duo-navy dark:bg-slate-900 text-white py-10 px-4" aria-labelledby="faq-hero-heading">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 list-none m-0 p-0">
              <li><Link href="/" className="text-blue-200 hover:text-white">{f.breadcrumbHome}</Link></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-white font-semibold">{f.breadcrumbCurrent}</span></li>
            </ol>
          </nav>
          <h1 id="faq-hero-heading" className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            {f.heroTitle}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            {f.heroDesc}
          </p>
        </div>
      </section>

      {/* FAQ per category */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12">
        {f.categories.map((category) => (
          <section key={category.name} aria-labelledby={`cat-${category.name.toLowerCase().replace(/\s/g, "-")}`}>
            <h2
              id={`cat-${category.name.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xl font-bold text-duo-navy dark:text-white mb-5 pb-2 border-b-2 border-duo-navy dark:border-slate-500"
            >
              {category.name}
            </h2>
            <div className="flex flex-col gap-3">
              {category.items.map((faq) => (
                <details
                  key={faq.id}
                  id={faq.id}
                  className="border border-duo-gray-border dark:border-slate-600 rounded-lg group bg-white dark:bg-slate-800"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-duo-navy dark:text-white hover:bg-duo-blue-light dark:hover:bg-slate-700 list-none rounded-lg">
                    {faq.q}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 pt-3 text-sm text-duo-gray dark:text-slate-300 leading-relaxed border-t border-duo-gray-border dark:border-slate-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <section className="bg-duo-blue-light dark:bg-slate-800 border-t border-duo-gray-border dark:border-slate-700 px-4 py-10" aria-labelledby="faq-contact-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="faq-contact-heading" className="text-xl font-bold text-duo-navy dark:text-white mb-2">
            {f.cantFind}
          </h2>
          <p className="text-duo-gray dark:text-slate-300 mb-6">
            {f.cantFindDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="card flex-1">
              <p className="font-bold text-duo-navy dark:text-white mb-1">{f.byPhone}</p>
              <p className="text-sm text-duo-gray dark:text-slate-300">{f.phoneNumber}</p>
              <p className="text-sm text-duo-gray dark:text-slate-300">{f.phoneHours}</p>
            </div>
            <div className="card flex-1">
              <p className="font-bold text-duo-navy dark:text-white mb-1">{f.online}</p>
              <p className="text-sm text-duo-gray dark:text-slate-300 mb-2">{f.onlineDesc}</p>
              <Link
                href="https://www.duo.nl/contact/contactformulier.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-duo-blue dark:text-sky-400"
              >
                {f.contactFormLink}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
