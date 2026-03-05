import Link from "next/link";

// ---- Kleine hulpcomponenten ----

function IconCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-duo-success shrink-0 mt-0.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function IconWarning() {
  return (
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
  );
}

// ---- Hoofd paginacomponent ----

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-duo-navy text-white py-12 px-4"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-duo-yellow font-semibold text-sm uppercase tracking-wide mb-2">
            Studenten-OV-kaart
          </p>
          <h1
            id="hero-heading"
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          >
            Gratis reizen als student
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">
            Met de studenten-OV-kaart reis je gratis door heel Nederland. Je
            kiest zelf of je doordeweeks of in het weekend gratis reist. Leer
            hier alles over aanvragen, pauzeren en stopzetten.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#aanvragen" className="btn-primary no-underline">
              OV-kaart aanvragen
              <IconArrow />
            </Link>
            <Link href="/actiegids" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 no-underline">
              Actiegids bekijken
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section
        className="max-w-5xl mx-auto px-4 py-12"
        aria-labelledby="voordelen-heading"
      >
        <h2 id="voordelen-heading" className="text-2xl font-bold text-duo-navy mb-6">
          Wat zijn de voordelen?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Gratis reizen",
              desc: "Reis gratis met de trein, bus, metro en tram door heel Nederland.",
            },
            {
              title: "Zelf kiezen",
              desc: "Kies doordeweeks of weekend gratis reizen. Je kunt dit elke maand wisselen.",
            },
            {
              title: "Weekend­korting",
              desc: "Kies je doordeweeks? Dan krijg je 40% korting in het weekend.",
            },
          ].map((item) => (
            <div key={item.title} className="card flex flex-col gap-3">
              <IconCheck />
              <div>
                <h3 className="font-bold text-duo-navy">{item.title}</h3>
                <p className="text-sm text-duo-gray mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aanvragen stappenplan */}
      <section
        id="aanvragen"
        className="bg-duo-gray-light px-4 py-12"
        aria-labelledby="aanvragen-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="aanvragen-heading"
            className="text-2xl font-bold text-duo-navy mb-2"
          >
            OV-kaart aanvragen
          </h2>
          <p className="text-duo-gray mb-8">
            Volg deze stappen om je studenten-OV-kaart aan te vragen.
          </p>

          <ol className="flex flex-col gap-6 list-none m-0 p-0" aria-label="Stappen voor aanvragen">
            {[
              {
                step: 1,
                title: "Inloggen bij Mijn DUO",
                desc: "Log in met je DigiD op Mijn DUO. Heb je nog geen DigiD? Vraag dit eerst aan via digid.nl.",
                link: { label: "Naar Mijn DUO", href: "#mijn-duo" },
              },
              {
                step: 2,
                title: "OV-kaart aanvragen",
                desc: 'Ga naar "Mijn producten" en kies "OV-kaart aanvragen". Kies of je doordeweeks of in het weekend gratis wilt reizen.',
                link: null,
              },
              {
                step: 3,
                title: "OV-chipkaart bestellen",
                desc: "Heb je al een OV-chipkaart? Dan wordt je OV-kaart er automatisch op geladen. Heb je er nog geen? Bestel er dan een via ov-chipkaart.nl.",
                link: null,
              },
              {
                step: 4,
                title: "Activeren op een NS-poortje",
                desc: "Na ontvangst van je kaart activeer je deze bij een NS-incheckpaal of poortje op het station. Dit duurt een paar dagen na aanvraag.",
                link: null,
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-5 bg-white border border-duo-gray-border rounded-lg p-5 shadow-sm"
              >
                <div
                  className="step-badge"
                  aria-label={`Stap ${item.step}`}
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-duo-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-duo-gray leading-relaxed">
                    {item.desc}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-duo-blue"
                    >
                      {item.link.label}
                      <IconArrow />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Waarschuwing boetes */}
      <section className="max-w-5xl mx-auto px-4 py-10" aria-labelledby="boetes-heading">
        <div className="alert-warning flex gap-3 items-start">
          <IconWarning />
          <div>
            <h2 id="boetes-heading" className="font-bold text-amber-800 mb-1">
              Let op: boete bij vergeten stopzetten
            </h2>
            <p className="text-sm text-amber-900 leading-relaxed">
              Als je je OV-kaart niet op tijd stopzet na je studie, kan DUO de
              reiskosten terugvorderen. Zet de kaart direct stop als je{" "}
              <strong>afstudeert, stopt of een tussenjaar neemt</strong>.{" "}
              <Link href="/actiegids#stopzetten" className="font-semibold text-amber-800">
                Lees hoe je dit doet →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Levensgebeurtenissen blokken */}
      <section
        className="bg-duo-navy text-white px-4 py-12"
        aria-labelledby="situaties-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="situaties-heading"
            className="text-2xl font-bold mb-2"
          >
            Wat is jouw situatie?
          </h2>
          <p className="text-blue-200 mb-8">
            Kies de situatie die op jou van toepassing is voor een
            persoonlijk stappenplan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                emoji: "🎓",
                title: "Ik ga studeren",
                desc: "Vraag je OV-kaart aan voor de start van je studie.",
                href: "#aanvragen",
              },
              {
                emoji: "⏸️",
                title: "Ik neem een tussenjaar",
                desc: "Pauzeer tijdelijk en hervat als je verder studeert.",
                href: "/actiegids#pauzeren",
              },
              {
                emoji: "🏁",
                title: "Ik ga afstuderen",
                desc: "Zet je OV-kaart op tijd stop om boetes te vermijden.",
                href: "/actiegids#stopzetten",
              },
              {
                emoji: "⚠️",
                title: "Foutieve registratie",
                desc: "Zit er een fout in je registratie? Zo los je dat op.",
                href: "/actiegids#foutieve-registratie",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow group"
                aria-label={`${item.title}: ${item.desc}`}
              >
                <p className="text-3xl mb-3" aria-hidden="true">
                  {item.emoji}
                </p>
                <h3 className="font-bold text-white mb-1 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm text-blue-200 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
