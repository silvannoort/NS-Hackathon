import type { Metadata } from "next";
import Link from "next/link";
import HashScroller from "@/components/HashScroller";

export const metadata: Metadata = {
  title: "Action Guide OV Card | DUO",
  description:
    "Step-by-step guide for pausing, cancelling and resolving registration errors for the student OV card.",
};

type Step = { title: string; desc: string };

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
    title: "Pause OV card (gap year)",
    intro:
      "Taking a gap year or temporarily stopping your studies? You can pause your OV card. You don't need to cancel it completely.",
    warning:
      "If you forget to pause the card, DUO will consider you an active student and may reclaim travel costs.",
    steps: [
      {
        title: "Log in to My DUO",
        desc: 'Go to duo.nl and log in with your DigiD. Navigate to "My products".',
      },
      {
        title: 'Choose "Temporarily pause OV card"',
        desc: 'Select the option "Temporarily pause" and choose the start date of your gap year.',
      },
      {
        title: "Confirm the change",
        desc: "You will receive a confirmation email. Keep this as proof.",
      },
      {
        title: "Resume when you return",
        desc: "When your gap year is over, simply apply for the OV card again via My DUO.",
      },
    ],
  },
  {
    id: "stopzetten",
    emoji: "🏁",
    title: "Cancel OV card (graduating or stopping)",
    intro:
      "Graduating or stopping your studies? Cancel your OV card as soon as possible to avoid a fine.",
    warning:
      "DUO reclaims travel costs if you use the card after your graduation date. Cancel on time, even when transferring from MBO to HBO.",
    steps: [
      {
        title: "Log in to My DUO",
        desc: 'Go to duo.nl and log in with your DigiD. Go to "My products".',
      },
      {
        title: 'Click "Cancel OV card"',
        desc: "Choose the date you want to stop. Ideally this is your official graduation date.",
      },
      {
        title: "Confirm the cancellation",
        desc: "You will receive a confirmation by email. After the end date your OV card is no longer valid.",
      },
      {
        title: "Keep your OV chip card (optional)",
        desc: "You don't need to hand in the OV chip card. You can keep it for paid travel.",
      },
    ],
  },
  {
    id: "foutieve-registratie",
    emoji: "⚠️",
    title: "Resolve incorrect registration",
    intro:
      "Is there an error in your registration that caused you to incorrectly receive the OV card, or can't apply? Here's how to fix it.",
    steps: [
      {
        title: "Check your enrolment status",
        desc: "Log in to My DUO and verify your programme details are correct. Incorrect data usually originates from your educational institution.",
      },
      {
        title: "Contact your school",
        desc: "Details incorrect? Report this to your school's administration. They will update the registration at DUO.",
      },
      {
        title: "Contact DUO",
        desc: "Taking long or stuck? Call DUO at 050 – 599 77 55 (Mon–Fri 8:00–17:00). Have your student number ready.",
      },
      {
        title: "Keep confirmations",
        desc: "Save all emails and confirmations. These may be important if DUO reclaims travel costs.",
      },
    ],
  },
];

export default function ActiegidsPage() {
  return (
    <>
      <HashScroller />

      {/* Hero */}
      <section className="bg-duo-navy dark:bg-slate-900 text-white py-10 px-4" aria-labelledby="actiegids-hero-heading">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 list-none m-0 p-0">
              <li><Link href="/" className="text-blue-200 hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-white font-semibold">Action Guide</span></li>
            </ol>
          </nav>
          <h1 id="actiegids-hero-heading" className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            OV Card Action Guide
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Step-by-step instructions for every situation: pausing, cancelling or resolving a registration error.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <nav className="bg-duo-blue-light dark:bg-slate-800 border-b border-duo-gray-border dark:border-slate-700 px-4 py-4" aria-label="Section navigation">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-duo-navy dark:text-white mb-2">Jump to:</p>
          <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-duo-blue dark:text-sky-400 border border-duo-blue dark:border-sky-400 px-3 py-1.5 rounded hover:bg-duo-blue dark:hover:bg-sky-600 hover:text-white transition-colors no-underline"
                >
                  <span aria-hidden="true">{s.emoji}</span>{" "}
                  {s.title.split(" ").slice(0, 2).join(" ")}…
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl" aria-hidden="true">{section.emoji}</span>
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

            <ol className="flex flex-col gap-4 list-none m-0 p-0" aria-label={`Steps for: ${section.title}`}>
              {section.steps.map((step, i) => (
                <li key={i} className="flex gap-5 bg-white dark:bg-slate-800 border border-duo-gray-border dark:border-slate-600 rounded-lg p-5 shadow-sm">
                  <div className="step-badge" aria-label={`Step ${i + 1}`}>{i + 1}</div>
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
                <strong>Always check:</strong> You will receive a confirmation from DUO after every change.
                If you don't receive one, contact DUO.
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-duo-gray-light dark:bg-slate-800 px-4 py-10" aria-labelledby="help-heading">
        <div className="max-w-5xl mx-auto text-center">
          <h2 id="help-heading" className="text-xl font-bold text-duo-navy dark:text-white mb-2">
            Still have questions?
          </h2>
          <p className="text-duo-gray dark:text-slate-300 mb-6">
            Can't find your answer here? Check the FAQ or contact DUO directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/faq" className="btn-primary no-underline">FAQ</Link>
            <Link href="https://www.duo.nl/contact/contactformulier.jsp" target="_blank" rel="noopener noreferrer" className="btn-secondary no-underline">
              Contact DUO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
