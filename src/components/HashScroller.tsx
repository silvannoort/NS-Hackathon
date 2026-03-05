"use client";

import { useEffect } from "react";

export default function HashScroller() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    // kleine delay zodat de pagina eerst rendert
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return null;
}
