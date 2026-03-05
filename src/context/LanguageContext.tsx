"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Lang, translations } from "@/translations";

type LanguageContextType = {
  lang: Lang;
  t: typeof translations.nl;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "nl",
  t: translations.nl,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "nl") {
      setLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  function toggle() {
    const next: Lang = lang === "nl" ? "en" : "nl";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
