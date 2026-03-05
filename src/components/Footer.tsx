import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-duo-navy text-white mt-12"
      role="contentinfo"
      aria-label="Voettekst"
    >
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1 */}
        <div>
          <p className="font-bold text-base mb-3">DUO</p>
          <p className="text-blue-200 text-sm leading-relaxed">
            Dienst Uitvoering Onderwijs voert onderwijswetgeving uit voor
            studenten, docenten en onderwijsinstellingen.
          </p>
        </div>

        {/* Kolom 2 */}
        <nav aria-label="Snelle links">
          <p className="font-bold text-base mb-3">Snelle links</p>
          <ul className="list-none m-0 p-0 flex flex-col gap-2 text-sm">
            {[
              { label: "OV-kaart aanvragen", href: "/" },
              { label: "OV-kaart pauzeren", href: "/actiegids#pauzeren" },
              { label: "OV-kaart stopzetten", href: "/actiegids#stopzetten" },
              { label: "Veelgestelde vragen", href: "/faq" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-blue-200 hover:text-white no-underline hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom 3 */}
        <div>
          <p className="font-bold text-base mb-3">Contact & hulp</p>
          <ul className="list-none m-0 p-0 flex flex-col gap-2 text-sm text-blue-200">
            <li>Telefoon: 050 – 599 77 55</li>
            <li>Bereikbaar ma–vr 8:00–17:00</li>
            <li>
              <Link
                href="#contact"
                className="text-blue-200 hover:text-white no-underline hover:underline"
              >
                Contactformulier
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200">
          <span>© {new Date().getFullYear()} Dienst Uitvoering Onderwijs</span>
          <nav aria-label="Juridische links">
            <ul className="list-none m-0 p-0 flex gap-4">
              {["Privacy", "Toegankelijkheid", "Cookies"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-blue-200 hover:text-white no-underline hover:underline"
                  >
                    {item}
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
