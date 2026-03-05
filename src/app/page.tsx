import Link from "next/link";

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
  return (
    <>
      {/* Hero */}
      <section className="bg-duo-navy dark:bg-slate-900 text-white py-12 px-4" aria-labelledby="hero-heading">
        <div className="max-w-5xl mx-auto">
          <p className="text-duo-yellow font-semibold text-sm uppercase tracking-wide mb-2">
            Student OV Card
          </p>
          <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Travel for free as a student
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">
            With the student OV card you travel for free throughout the Netherlands.
            Choose whether you travel free on weekdays or weekends. Learn everything
            about applying, pausing and cancelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#aanvragen" className="btn-primary no-underline">
              Apply for OV card
              <IconArrow />
            </Link>
            <Link href="/actiegids" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-duo-navy dark:hover:bg-white dark:hover:text-duo-navy no-underline">
              View action guide
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 py-12" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="text-2xl font-bold text-duo-navy dark:text-white mb-6">
          What are the benefits?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Travel for free",
              desc: "Travel for free by train, bus, metro and tram throughout the Netherlands.",
            },
            {
              title: "Your choice",
              desc: "Choose weekdays or weekends free. You can switch this once every month.",
            },
            {
              title: "Weekend discount",
              desc: "Choose weekdays free? Then you get a 40% discount on weekends.",
            },
          ].map((item) => (
            <div key={item.title} className="card flex flex-col gap-3">
              <IconCheck />
              <div>
                <h3 className="font-bold text-duo-navy dark:text-white">{item.title}</h3>
                <p className="text-sm text-duo-gray dark:text-slate-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application steps */}
      <section id="aanvragen" className="bg-duo-gray-light dark:bg-slate-800 px-4 py-12" aria-labelledby="apply-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="apply-heading" className="text-2xl font-bold text-duo-navy dark:text-white mb-2">
            Applying for the OV card
          </h2>
          <p className="text-duo-gray dark:text-slate-300 mb-8">
            Follow these steps to apply for your student OV card.
          </p>

          <ol className="flex flex-col gap-6 list-none m-0 p-0" aria-label="Steps for applying">
            {[
              {
                step: 1,
                title: "Log in to My DUO",
                desc: "Log in with your DigiD at My DUO. Don't have DigiD yet? Request it first at digid.nl.",
                link: { label: "Go to My DUO", href: "https://mijn.duo.nl" },
              },
              {
                step: 2,
                title: "Apply for the OV card",
                desc: 'Go to "My products" and choose "Apply for OV card". Select whether you want free weekday or weekend travel.',
                link: null,
              },
              {
                step: 3,
                title: "Order OV chip card",
                desc: "Already have an OV chip card? Your OV card will be loaded onto it automatically. If not, order one at ov-chipkaart.nl.",
                link: null,
              },
              {
                step: 4,
                title: "Activate at an NS gate",
                desc: "After receiving your card, activate it at an NS check-in post or gate at the station. This takes a few days after your application.",
                link: null,
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-5 bg-white dark:bg-slate-700 border border-duo-gray-border dark:border-slate-600 rounded-lg p-5 shadow-sm"
              >
                <div className="step-badge" aria-label={`Step ${item.step}`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-duo-navy dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-duo-gray dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-duo-blue dark:text-sky-400"
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

      {/* Warning */}
      <section className="max-w-5xl mx-auto px-4 py-10" aria-labelledby="warning-heading">
        <div className="alert-warning flex gap-3 items-start">
          <IconWarning />
          <div>
            <h2 id="warning-heading" className="font-bold text-amber-800 dark:text-amber-200 mb-1">
              Warning: fine for forgetting to cancel
            </h2>
            <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
              If you don't cancel your OV card on time after your studies, DUO can
              reclaim travel costs. Cancel immediately when you{" "}
              <strong>graduate, stop or take a gap year</strong>.{" "}
              <Link href="/actiegids#stopzetten" className="font-semibold text-amber-800 dark:text-amber-200">
                Read how to do this →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Situation blocks */}
      <section className="bg-duo-navy dark:bg-slate-900 text-white px-4 py-12" aria-labelledby="situations-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="situations-heading" className="text-2xl font-bold mb-2">
            What is your situation?
          </h2>
          <p className="text-blue-200 mb-8">
            Choose the situation that applies to you for a step-by-step guide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                emoji: "🎓",
                title: "I'm starting studies",
                desc: "Apply for your OV card before the start of your studies.",
                href: "#aanvragen",
              },
              {
                emoji: "⏸️",
                title: "I'm taking a gap year",
                desc: "Pause temporarily and resume when you continue studying.",
                href: "/actiegids#pauzeren",
              },
              {
                emoji: "🏁",
                title: "I'm graduating",
                desc: "Cancel your OV card on time to avoid fines.",
                href: "/actiegids#stopzetten",
              },
              {
                emoji: "⚠️",
                title: "Wrong registration",
                desc: "Is there an error in your registration? Here's how to fix it.",
                href: "/actiegids#foutieve-registratie",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duo-yellow group"
                aria-label={`${item.title}: ${item.desc}`}
              >
                <p className="text-3xl mb-3" aria-hidden="true">{item.emoji}</p>
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
