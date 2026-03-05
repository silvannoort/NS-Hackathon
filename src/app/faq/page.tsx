import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ OV Card | DUO",
  description: "Answers to the most frequently asked questions about the student OV card.",
};

type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  // Applying
  {
    id: "when-to-apply",
    category: "Applying",
    question: "When can I apply for the OV card?",
    answer:
      "You can apply for the OV card as soon as you are officially enrolled at a recognised programme. This can be done before your studies start. We recommend applying at least 2 weeks before the start so the card is ready in time.",
  },
  {
    id: "how-long-does-it-take",
    category: "Applying",
    question: "How long does the application take?",
    answer:
      "After applying it usually takes 3 to 5 working days before your card is created. After that you still need to activate the card at an NS check-in post at the station.",
  },
  {
    id: "weekday-or-weekend",
    category: "Applying",
    question: "What is the difference between weekday and weekend free travel?",
    answer:
      "Choose weekday free? Then you travel for free Monday through Friday and get a 40% discount on weekends. Choose weekend free? Then you travel for free on Saturday and Sunday and pay normally during the week. You can change this once per month.",
  },
  // Pausing & cancelling
  {
    id: "pause-gap-year",
    category: "Pausing & cancelling",
    question: "Can I pause the OV card during a gap year?",
    answer:
      "Yes, if you take a gap year you can temporarily pause the OV card via My DUO. When your studies resume, simply apply again. You lose the right to the OV card during the pause period.",
  },
  {
    id: "transfer-mbo-hbo",
    category: "Pausing & cancelling",
    question: "I'm transferring from MBO to HBO. Do I need to cancel the card?",
    answer:
      "If there is no break between your MBO and HBO (you start immediately), your OV card continues. No action is needed. However, check this in My DUO to be sure.",
  },
  {
    id: "when-to-cancel",
    category: "Pausing & cancelling",
    question: "When do I need to cancel the OV card after graduating?",
    answer:
      "Cancel the card on your graduation day, or as soon as possible after. DUO reclaims travel costs if you use the card after your official graduation date.",
  },
  // Fines & recovery
  {
    id: "forgot-to-cancel",
    category: "Fines & recovery",
    question: "What happens if I don't cancel the OV card on time?",
    answer:
      "DUO can reclaim travel costs for the period you used the card incorrectly. This can be a significant amount. DUO reviews each situation — a short oversight may be understood, but this is not guaranteed.",
  },
  {
    id: "fine-calculation",
    category: "Fines & recovery",
    question: "How is the fine calculated?",
    answer:
      "The reclaim is based on the travel costs you would have made (weekday or weekend rate), calculated over the period you incorrectly held the OV card. DUO calculates the exact amount based on your travel history.",
  },
  // Incorrect registration
  {
    id: "registration-error",
    category: "Incorrect registration",
    question: "There is an error in my registration. What do I do?",
    answer:
      "First check your details in My DUO. Something incorrect? Contact your school's administration — they update the details at DUO. DUO itself cannot correct registration errors without confirmation from the school.",
  },
  {
    id: "received-incorrectly",
    category: "Incorrect registration",
    question: "I received the OV card incorrectly. What now?",
    answer:
      "Do not use the card and report it to DUO immediately at 050 – 599 77 55. If you have already used it, explain the situation to DUO. The sooner you report it, the lower the risk of a high reclaim.",
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-duo-navy dark:bg-slate-900 text-white py-10 px-4" aria-labelledby="faq-hero-heading">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 list-none m-0 p-0">
              <li><Link href="/" className="text-blue-200 hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-white font-semibold">FAQ</span></li>
            </ol>
          </nav>
          <h1 id="faq-hero-heading" className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Answers to the most common questions about the student OV card.
          </p>
        </div>
      </section>

      {/* FAQ per category */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12">
        {categories.map((category) => (
          <section key={category} aria-labelledby={`cat-${category.toLowerCase().replace(/\s/g, "-")}`}>
            <h2
              id={`cat-${category.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xl font-bold text-duo-navy dark:text-white mb-5 pb-2 border-b-2 border-duo-navy dark:border-slate-500"
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
                    className="border border-duo-gray-border dark:border-slate-600 rounded-lg group bg-white dark:bg-slate-800"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-duo-navy dark:text-white hover:bg-duo-blue-light dark:hover:bg-slate-700 list-none rounded-lg">
                      {faq.question}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 pt-3 text-sm text-duo-gray dark:text-slate-300 leading-relaxed border-t border-duo-gray-border dark:border-slate-600">
                      {faq.answer}
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
            Can't find your answer?
          </h2>
          <p className="text-duo-gray dark:text-slate-300 mb-6">
            Contact DUO directly. We're happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="card flex-1">
              <p className="font-bold text-duo-navy dark:text-white mb-1">By phone</p>
              <p className="text-sm text-duo-gray dark:text-slate-300">050 – 599 77 55</p>
              <p className="text-sm text-duo-gray dark:text-slate-300">Monday – Friday 8:00–17:00</p>
            </div>
            <div className="card flex-1">
              <p className="font-bold text-duo-navy dark:text-white mb-1">Online</p>
              <p className="text-sm text-duo-gray dark:text-slate-300 mb-2">
                Use the contact form on duo.nl
              </p>
              <Link
                href="https://www.duo.nl/contact/contactformulier.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-duo-blue dark:text-sky-400"
              >
                Go to contact form →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
