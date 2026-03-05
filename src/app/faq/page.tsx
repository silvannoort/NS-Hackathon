import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Veelgestelde vragen OV-kaart | DUO",
  description:
    "Antwoorden op de meest gestelde vragen over de studenten-OV-kaart.",
};

type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  // Aanvragen
  {
    id: "wanneer-aanvragen",
    category: "Aanvragen",
    question: "Wanneer kan ik de OV-kaart aanvragen?",
    answer:
      "Je kunt de OV-kaart aanvragen zodra je officieel ingeschreven staat bij een erkende opleiding. Dit kan al voor de start van je studie. We raden aan om minstens 2 weken voor de start aan te vragen, zodat de kaart op tijd klaar is.",
  },
  {
    id: "hoe-lang-duurt-aanvraag",
    category: "Aanvragen",
    question: "Hoe lang duurt het aanvragen?",
    answer:
      "Na aanvraag duurt het doorgaans 3 tot 5 werkdagen voordat je kaart aangemaakt is. Daarna moet je de kaart nog activeren bij een NS-incheckpaal op het station.",
  },
  {
    id: "doordeweeks-of-weekend",
    category: "Aanvragen",
    question: "Wat is het verschil tussen doordeweeks en weekend gratis?",
    answer:
      "Kies je doordeweeks gratis? Dan reis je gratis van maandag tot en met vrijdag en krijg je 40% korting in het weekend. Kies je weekend gratis? Dan reis je gratis op zaterdag en zondag en betaal je normaal doordeweeks. Je kunt dit eenmaal per maand aanpassen.",
  },
  // Pauzeren & Stopzetten
  {
    id: "pauzeren-tussenjaar",
    category: "Pauzeren & stopzetten",
    question: "Kan ik de OV-kaart pauzeren tijdens een tussenjaar?",
    answer:
      "Ja, als je een tussenjaar neemt kun je de OV-kaart tijdelijk stopzetten via Mijn DUO. Als je studie hervat, vraag je hem opnieuw aan. Je verliest het recht op de OV-kaart tijdens de pauzeperiode.",
  },
  {
    id: "doorstromen-mbo-hbo",
    category: "Pauzeren & stopzetten",
    question: "Ik stroom door van mbo naar hbo. Moet ik de kaart stopzetten?",
    answer:
      "Als er geen onderbreking is tussen je mbo en hbo (je begint direct), dan loopt je OV-kaart door. Er is geen actie nodig. Controleer dit wel even in Mijn DUO om zeker te zijn.",
  },
  {
    id: "wanneer-stopzetten",
    category: "Pauzeren & stopzetten",
    question: "Wanneer moet ik de OV-kaart stopzetten na het afstuderen?",
    answer:
      "Zet de kaart op de dag van je afstuderen stop, of zo snel mogelijk daarna. DUO vordert reiskosten terug als je de kaart na je officiële afstudeerdatum nog gebruikt.",
  },
  // Boetes & Terugvordering
  {
    id: "wat-als-ik-vergeet-stop-te-zetten",
    category: "Boetes & terugvordering",
    question: "Wat gebeurt er als ik de OV-kaart niet op tijd stopzet?",
    answer:
      "DUO kan de reiskosten terugvorderen over de periode dat je de kaart onterecht hebt gebruikt. Dit kan een flink bedrag zijn. DUO bekijkt dit per situatie — bij een korte vergissing is er soms begrip, maar dit is geen garantie.",
  },
  {
    id: "boete-berekening",
    category: "Boetes & terugvordering",
    question: "Hoe wordt de boete berekend?",
    answer:
      "De terugvordering is gebaseerd op de reiskosten die je zou hebben gemaakt (doordeweeks of weekend tarief), berekend over de periode dat je de OV-kaart onterecht had. De exacte berekening doet DUO op basis van je reishistorie.",
  },
  // Foutieve registratie
  {
    id: "fout-in-registratie",
    category: "Foutieve registratie",
    question: "Er staat een fout in mijn registratie. Wat doe ik?",
    answer:
      "Controleer eerst je gegevens in Mijn DUO. Klopt er iets niet? Neem dan contact op met de administratie van je school — zij passen de gegevens aan bij DUO. DUO zelf kan registratiefouten niet aanpassen zonder bevestiging van de school.",
  },
  {
    id: "kaart-onterecht-ontvangen",
    category: "Foutieve registratie",
    question: "Ik heb de OV-kaart onterecht ontvangen. Wat nu?",
    answer:
      "Gebruik de kaart niet en meld dit direct bij DUO via 050 – 599 77 55. Als je de kaart al wel hebt gebruikt, leg dan de situatie uit aan DUO. Hoe sneller je dit meldt, hoe kleiner het risico op een hoge terugvordering.",
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-duo-navy text-white py-10 px-4"
        aria-labelledby="faq-hero-heading"
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
                <span className="text-white font-semibold">
                  Veelgestelde vragen
                </span>
              </li>
            </ol>
          </nav>
          <h1
            id="faq-hero-heading"
            className="text-3xl md:text-4xl font-bold leading-tight mb-3"
          >
            Veelgestelde vragen
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Antwoorden op de meestgestelde vragen over de studenten-OV-kaart.
          </p>
        </div>
      </section>

      {/* FAQ per categorie */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12">
        {categories.map((category) => (
          <section
            key={category}
            aria-labelledby={`cat-${category.toLowerCase().replace(/\s/g, "-")}`}
          >
            <h2
              id={`cat-${category.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xl font-bold text-duo-navy mb-5 pb-2 border-b-2 border-duo-navy"
            >
              {category}
            </h2>
            <div className="flex flex-col gap-3">
              {faqs
                .filter((f) => f.category === category)
                .map((faq) => (
                  <details
                    key={faq.id}
                    id={faq.id}
                    className="border border-duo-gray-border rounded-lg group"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-duo-navy hover:bg-duo-blue-light list-none">
                      {faq.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="shrink-0 transition-transform group-open:rotate-180"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 pt-3 text-sm text-duo-gray leading-relaxed border-t border-duo-gray-border">
                      {faq.answer}
                    </div>
                  </details>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <section
        className="bg-duo-blue-light border-t border-duo-gray-border px-4 py-10"
        aria-labelledby="faq-contact-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="faq-contact-heading"
            className="text-xl font-bold text-duo-navy mb-2"
          >
            Staat je vraag er niet bij?
          </h2>
          <p className="text-duo-gray mb-6">
            Neem dan contact op met DUO. We helpen je graag verder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="card flex-1">
              <p className="font-bold text-duo-navy mb-1">Telefonisch</p>
              <p className="text-sm text-duo-gray">050 – 599 77 55</p>
              <p className="text-sm text-duo-gray">Maandag – vrijdag 8:00–17:00</p>
            </div>
            <div className="card flex-1">
              <p className="font-bold text-duo-navy mb-1">Online</p>
              <p className="text-sm text-duo-gray mb-2">
                Gebruik het contactformulier op duo.nl
              </p>
              <Link
                href="#contactformulier"
                className="text-sm font-semibold text-duo-blue"
              >
                Naar contactformulier →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
