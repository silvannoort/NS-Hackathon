import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actiegids OV-kaart | DUO",
  description:
    "Stap-voor-stap gids voor pauzeren, stopzetten en foutieve registratie van de studenten-OV-kaart.",
};

type Step = {
  title: string;
  desc: string;
};

type Section = {
  id: string;
  emoji: string;
  title: string;
  intro: string;
  warning?: string;
  steps: Step[];
};

const sections: Section[] = [
  {
    id: "pauzeren",
    emoji: "⏸️",
    title: "OV-kaart pauzeren (tussenjaar)",
    intro:
      "Neem je een tussenjaar of stop je tijdelijk met studeren? Dan kun je je OV-kaart pauzeren. Je hoeft hem dan niet volledig stop te zetten.",
    warning:
      "Vergeet je de kaart te pauzeren, dan word je aangemerkt als actief student en kan DUO de reiskosten terugvorderen.",
    steps: [
      {
        title: "Log in op Mijn DUO",
        desc: 'Ga naar duo.nl en log in met je DigiD. Navigeer naar "Mijn producten".',
      },
      {
        title: 'Kies "OV-kaart tijdelijk stopzetten"',
        desc: 'Selecteer de optie "Tijdelijk stopzetten" en kies de startdatum van je tussenjaar.',
      },
      {
        title: "Bevestig de wijziging",
        desc: "Je ontvangt een bevestigingsmail. Bewaar deze goed als bewijs.",
      },
      {
        title: "Hervatten als je terugkomt",
        desc: "Als je tussenjaar voorbij is, vraag je de OV-kaart gewoon opnieuw aan via Mijn DUO.",
      },
    ],
  },
  {
    id: "stopzetten",
    emoji: "🏁",
    title: "OV-kaart stopzetten (afstuderen of stoppen)",
    intro:
      "Studeer je af of stop je met je opleiding? Zet dan je OV-kaart zo snel mogelijk stop. Dit voorkomt een boete.",
    warning:
      "DUO vordert reiskosten terug als je de kaart na je afstudeerdatum nog gebruikt. Zet de kaart op tijd stop, ook als je doorstroomt van mbo naar hbo.",
    steps: [
      {
        title: "Log in op Mijn DUO",
        desc: 'Ga naar duo.nl en log in met je DigiD. Ga naar "Mijn producten".',
      },
      {
        title: 'Klik op "OV-kaart stopzetten"',
        desc: "Kies de datum waarop je wilt stoppen. Dit is bij voorkeur je officiële afstudeerdatum.",
      },
      {
        title: "Bevestig de stopzetting",
        desc: "Je krijgt een bevestiging per e-mail. Na de einddatum is je OV-kaart niet meer geldig.",
      },
      {
        title: "Lever je OV-chipkaart in (optioneel)",
        desc: "Je hoeft de OV-chipkaart zelf niet in te leveren. Je kunt de kaart blijven gebruiken voor betaald reizen.",
      },
    ],
  },
  {
    id: "foutieve-registratie",
    emoji: "⚠️",
    title: "Foutieve registratie oplossen",
    intro:
      "Staat er een fout in je registratie waardoor je de OV-kaart onterecht hebt ontvangen of juist niet kunt aanvragen? Zo los je dat op.",
    steps: [
      {
        title: "Controleer je inschrijvingsstatus",
        desc: "Log in op Mijn DUO en controleer of je opleidingsgegevens kloppen. Foutieve gegevens komen vaak van je onderwijsinstelling.",
      },
      {
        title: "Neem contact op met je school",
        desc: "Kloppen je gegevens niet? Meld dit bij de administratie van je school. Zij passen de registratie aan bij DUO.",
      },
      {
        title: "Neem contact op met DUO",
        desc: "Duurt het lang of kom je er niet uit? Bel DUO op 050 – 599 77 55 (ma–vr 8:00–17:00). Houd je studentnummer bij de hand.",
      },
      {
        title: "Bewaar bevestigingen",
        desc: "Bewaar alle e-mails en bevestigingen. Dit kan van belang zijn als DUO toch reiskosten terugvordert.",
      },
    ],
  },
];

export default function ActiegidsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-duo-navy text-white py-10 px-4"
        aria-labelledby="actiegids-hero-heading"
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-blue-200 mb-4" aria-label="Kruimelpad">
            <ol className="flex items-center gap-2 list-none m-0 p-0">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-white font-semibold">Actiegids</span>
              </li>
            </ol>
          </nav>
          <h1
            id="actiegids-hero-heading"
            className="text-3xl md:text-4xl font-bold leading-tight mb-3"
          >
            Actiegids OV-kaart
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Stap-voor-stap uitleg voor elke situatie: pauzeren, stopzetten of
            een fout in je registratie oplossen.
          </p>
        </div>
      </section>

      {/* Snelnavigatie */}
      <nav
        className="bg-duo-blue-light border-b border-duo-gray-border px-4 py-4"
        aria-label="Sectie-navigatie"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-duo-navy mb-2">
            Ga direct naar:
          </p>
          <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-duo-blue border border-duo-blue px-3 py-1.5 rounded hover:bg-duo-blue hover:text-white transition-colors no-underline"
                >
                  <span aria-hidden="true">{s.emoji}</span> {s.title.split(" ").slice(0, 3).join(" ")}…
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Secties */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl" aria-hidden="true">
                {section.emoji}
              </span>
              <h2
                id={`${section.id}-heading`}
                className="text-2xl font-bold text-duo-navy"
              >
                {section.title}
              </h2>
            </div>
            <p className="text-duo-gray leading-relaxed mb-6">{section.intro}</p>

            {section.warning && (
              <div className="alert-warning flex gap-3 items-start mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 text-amber-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                </svg>
                <p className="text-sm text-amber-900">{section.warning}</p>
              </div>
            )}

            <ol
              className="flex flex-col gap-4 list-none m-0 p-0"
              aria-label={`Stappen voor: ${section.title}`}
            >
              {section.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-5 bg-white border border-duo-gray-border rounded-lg p-5 shadow-sm"
                >
                  <div
                    className="step-badge"
                    aria-label={`Stap ${i + 1}`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-duo-navy mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-duo-gray leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Afronden bevestiging */}
            <div className="alert-info flex gap-3 items-start mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="#01689B"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="shrink-0 mt-0.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-4m0-4h.01"
                />
              </svg>
              <p className="text-sm text-duo-blue-dark">
                <strong>Controleer altijd:</strong> Je ontvangt na elke wijziging
                een bevestiging van DUO. Krijg je geen bevestiging? Neem dan
                contact op met DUO.
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* CTA blok */}
      <section
        className="bg-duo-gray-light px-4 py-10"
        aria-labelledby="hulp-heading"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 id="hulp-heading" className="text-xl font-bold text-duo-navy mb-2">
            Nog vragen?
          </h2>
          <p className="text-duo-gray mb-6">
            Staat je vraag er niet bij? Bekijk de veelgestelde vragen of neem
            contact op met DUO.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/faq" className="btn-primary no-underline">
              Veelgestelde vragen
            </Link>
            <Link href="https://www.duo.nl/contact/contactformulier.jsp" target="_blank" rel="noopener noreferrer" className="btn-secondary no-underline">
              Contact DUO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
