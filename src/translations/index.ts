export type Lang = "nl" | "en";

export const translations = {
  nl: {
    skipLink: "Ga naar hoofdinhoud",
    switchLang: "EN",
    switchLangLabel: "Switch to English",
    themeDark: "Schakel naar donkere modus",
    themeLight: "Schakel naar lichte modus",

    nav: {
      ovCard: "OV-kaart informatie",
      guide: "Actiegids",
      faq: "Veelgestelde vragen",
      myDuo: "Mijn DUO",
      siteTitle: "Studenten-OV-kaart",
      logoAlt: "Naar duo.nl (opent in nieuw tabblad)",
    },

    footer: {
      col1Title: "DUO",
      col1Desc:
        "Dienst Uitvoering Onderwijs voert onderwijswetgeving uit voor studenten, docenten en onderwijsinstellingen.",
      col2Title: "Snelle links",
      links: [
        { label: "OV-kaart aanvragen", href: "/" },
        { label: "OV-kaart pauzeren", href: "/actiegids#pauzeren" },
        { label: "OV-kaart stopzetten", href: "/actiegids#stopzetten" },
        { label: "Veelgestelde vragen", href: "/faq" },
      ],
      col3Title: "Contact & hulp",
      phone: "Telefoon: 050 – 599 77 55",
      hours: "Bereikbaar ma–vr 8:00–17:00",
      contactForm: "Contactformulier",
      copy: "Dienst Uitvoering Onderwijs",
      privacy: "Privacy",
      accessibility: "Toegankelijkheid",
      cookies: "Cookies",
    },

    chatbot: {
      openLabel: "Open chatassistent",
      closeLabel: "Sluit chatassistent",
      open: "Hulp nodig?",
      close: "Sluiten",
      dialogLabel: "DUO Chatassistent",
      title: "DUO Assistent",
      subtitle: "OV-kaart hulp",
      placeholder: "Stel een vraag…",
      sendLabel: "Verstuur bericht",
      inputLabel: "Typ je vraag",
      logLabel: "Chatberichten",
      typingLabel: "Assistent is aan het typen",
      greeting:
        "Hallo! Ik help je met vragen over de studenten-OV-kaart. Wat wil je weten?",
      errorMsg:
        "Sorry, er ging iets mis. Probeer het opnieuw of bel DUO op 050 – 599 77 55.",
      suggestions: [
        "Hoe vraag ik de OV-kaart aan?",
        "Wat doe ik bij een tussenjaar?",
        "Hoe zet ik de kaart stop na afstuderen?",
      ],
    },

    home: {
      heroTag: "Studenten-OV-kaart",
      heroTitle: "Gratis reizen als student",
      heroDesc:
        "Met de studenten-OV-kaart reis je gratis door heel Nederland. Je kiest zelf of je doordeweeks of in het weekend gratis reist. Leer hier alles over aanvragen, pauzeren en stopzetten.",
      heroApply: "OV-kaart aanvragen",
      heroGuide: "Actiegids bekijken",
      benefitsTitle: "Wat zijn de voordelen?",
      benefits: [
        {
          title: "Gratis reizen",
          desc: "Reis gratis met de trein, bus, metro en tram door heel Nederland.",
        },
        {
          title: "Zelf kiezen",
          desc: "Kies doordeweeks of weekend gratis reizen. Je kunt dit elke maand wisselen.",
        },
        {
          title: "Weekendkorting",
          desc: "Kies je doordeweeks? Dan krijg je 40% korting in het weekend.",
        },
      ],
      applyTitle: "OV-kaart aanvragen",
      applyDesc: "Volg deze stappen om je studenten-OV-kaart aan te vragen.",
      applyStepsLabel: "Stappen voor aanvragen",
      applySteps: [
        {
          title: "Inloggen bij Mijn DUO",
          desc: "Log in met je DigiD op Mijn DUO. Heb je nog geen DigiD? Vraag dit eerst aan via digid.nl.",
          link: { label: "Naar Mijn DUO", href: "https://mijn.duo.nl" },
        },
        {
          title: "OV-kaart aanvragen",
          desc: 'Ga naar "Mijn producten" en kies "OV-kaart aanvragen". Kies of je doordeweeks of in het weekend gratis wilt reizen.',
          link: null,
        },
        {
          title: "OV-chipkaart bestellen",
          desc: "Heb je al een OV-chipkaart? Dan wordt je OV-kaart er automatisch op geladen. Heb je er nog geen? Bestel er dan een via ov-chipkaart.nl.",
          link: null,
        },
        {
          title: "Activeren op een NS-poortje",
          desc: "Na ontvangst van je kaart activeer je deze bij een NS-incheckpaal of poortje op het station. Dit duurt een paar dagen na aanvraag.",
          link: null,
        },
      ],
      warningTitle: "Let op: boete bij vergeten stopzetten",
      warningDesc:
        "Als je je OV-kaart niet op tijd stopzet na je studie, kan DUO de reiskosten terugvorderen. Zet de kaart direct stop als je",
      warningBold: "afstudeert, stopt of een tussenjaar neemt",
      warningLink: "Lees hoe je dit doet →",
      situationsTitle: "Wat is jouw situatie?",
      situationsDesc:
        "Kies de situatie die op jou van toepassing is voor een persoonlijk stappenplan.",
      situations: [
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
      ],
    },

    guide: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Actiegids",
      heroTitle: "Actiegids OV-kaart",
      heroDesc:
        "Stap-voor-stap uitleg voor elke situatie: pauzeren, stopzetten of een fout in je registratie oplossen.",
      jumpTo: "Ga direct naar:",
      confirmNote:
        "Je ontvangt na elke wijziging een bevestiging van DUO. Krijg je geen bevestiging? Neem dan contact op met DUO.",
      confirmBold: "Controleer altijd:",
      ctaTitle: "Nog vragen?",
      ctaDesc:
        "Staat je vraag er niet bij? Bekijk de veelgestelde vragen of neem contact op met DUO.",
      ctaFaq: "Veelgestelde vragen",
      ctaContact: "Contact DUO",
      sections: [
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
          warning: undefined,
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
      ],
    },

    faq: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Veelgestelde vragen",
      heroTitle: "Veelgestelde vragen",
      heroDesc:
        "Antwoorden op de meestgestelde vragen over de studenten-OV-kaart.",
      cantFind: "Staat je vraag er niet bij?",
      cantFindDesc: "Neem dan contact op met DUO. We helpen je graag verder.",
      byPhone: "Telefonisch",
      phoneNumber: "050 – 599 77 55",
      phoneHours: "Maandag – vrijdag 8:00–17:00",
      online: "Online",
      onlineDesc: "Gebruik het contactformulier op duo.nl",
      contactFormLink: "Naar contactformulier →",
      categories: [
        {
          name: "Aanvragen",
          items: [
            {
              id: "wanneer-aanvragen",
              q: "Wanneer kan ik de OV-kaart aanvragen?",
              a: "Je kunt de OV-kaart aanvragen zodra je officieel ingeschreven staat bij een erkende opleiding. Dit kan al voor de start van je studie. We raden aan om minstens 2 weken voor de start aan te vragen, zodat de kaart op tijd klaar is.",
            },
            {
              id: "hoe-lang-duurt-aanvraag",
              q: "Hoe lang duurt het aanvragen?",
              a: "Na aanvraag duurt het doorgaans 3 tot 5 werkdagen voordat je kaart aangemaakt is. Daarna moet je de kaart nog activeren bij een NS-incheckpaal op het station.",
            },
            {
              id: "doordeweeks-of-weekend",
              q: "Wat is het verschil tussen doordeweeks en weekend gratis?",
              a: "Kies je doordeweeks gratis? Dan reis je gratis van maandag tot en met vrijdag en krijg je 40% korting in het weekend. Kies je weekend gratis? Dan reis je gratis op zaterdag en zondag en betaal je normaal doordeweeks. Je kunt dit eenmaal per maand aanpassen.",
            },
          ],
        },
        {
          name: "Pauzeren & stopzetten",
          items: [
            {
              id: "pauzeren-tussenjaar",
              q: "Kan ik de OV-kaart pauzeren tijdens een tussenjaar?",
              a: "Ja, als je een tussenjaar neemt kun je de OV-kaart tijdelijk stopzetten via Mijn DUO. Als je studie hervat, vraag je hem opnieuw aan. Je verliest het recht op de OV-kaart tijdens de pauzeperiode.",
            },
            {
              id: "doorstromen-mbo-hbo",
              q: "Ik stroom door van mbo naar hbo. Moet ik de kaart stopzetten?",
              a: "Als er geen onderbreking is tussen je mbo en hbo (je begint direct), dan loopt je OV-kaart door. Er is geen actie nodig. Controleer dit wel even in Mijn DUO om zeker te zijn.",
            },
            {
              id: "wanneer-stopzetten",
              q: "Wanneer moet ik de OV-kaart stopzetten na het afstuderen?",
              a: "Zet de kaart op de dag van je afstuderen stop, of zo snel mogelijk daarna. DUO vordert reiskosten terug als je de kaart na je officiële afstudeerdatum nog gebruikt.",
            },
          ],
        },
        {
          name: "Boetes & terugvordering",
          items: [
            {
              id: "wat-als-ik-vergeet-stop-te-zetten",
              q: "Wat gebeurt er als ik de OV-kaart niet op tijd stopzet?",
              a: "DUO kan de reiskosten terugvorderen over de periode dat je de kaart onterecht hebt gebruikt. Dit kan een flink bedrag zijn. DUO bekijkt dit per situatie.",
            },
            {
              id: "boete-berekening",
              q: "Hoe wordt de boete berekend?",
              a: "De terugvordering is gebaseerd op de reiskosten die je zou hebben gemaakt (doordeweeks of weekend tarief), berekend over de periode dat je de OV-kaart onterecht had.",
            },
          ],
        },
        {
          name: "Foutieve registratie",
          items: [
            {
              id: "fout-in-registratie",
              q: "Er staat een fout in mijn registratie. Wat doe ik?",
              a: "Controleer eerst je gegevens in Mijn DUO. Klopt er iets niet? Neem dan contact op met de administratie van je school — zij passen de gegevens aan bij DUO.",
            },
            {
              id: "kaart-onterecht-ontvangen",
              q: "Ik heb de OV-kaart onterecht ontvangen. Wat nu?",
              a: "Gebruik de kaart niet en meld dit direct bij DUO via 050 – 599 77 55. Hoe sneller je dit meldt, hoe kleiner het risico op een hoge terugvordering.",
            },
          ],
        },
      ],
    },
  },

  en: {
    skipLink: "Skip to main content",
    switchLang: "NL",
    switchLangLabel: "Schakel naar Nederlands",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",

    nav: {
      ovCard: "OV Card Info",
      guide: "Action Guide",
      faq: "FAQ",
      myDuo: "My DUO",
      siteTitle: "Student OV Card",
      logoAlt: "Go to duo.nl (opens in new tab)",
    },

    footer: {
      col1Title: "DUO",
      col1Desc:
        "The Education Executive Agency (DUO) implements education legislation for students, teachers and educational institutions.",
      col2Title: "Quick links",
      links: [
        { label: "Apply for OV card", href: "/" },
        { label: "Pause OV card", href: "/actiegids#pauzeren" },
        { label: "Cancel OV card", href: "/actiegids#stopzetten" },
        { label: "FAQ", href: "/faq" },
      ],
      col3Title: "Contact & help",
      phone: "Phone: 050 – 599 77 55",
      hours: "Available Mon–Fri 8:00–17:00",
      contactForm: "Contact form",
      copy: "Education Executive Agency (DUO)",
      privacy: "Privacy",
      accessibility: "Accessibility",
      cookies: "Cookies",
    },

    chatbot: {
      openLabel: "Open chat assistant",
      closeLabel: "Close chat assistant",
      open: "Need help?",
      close: "Close",
      dialogLabel: "DUO Chat Assistant",
      title: "DUO Assistant",
      subtitle: "OV card support",
      placeholder: "Ask a question…",
      sendLabel: "Send message",
      inputLabel: "Type your message",
      logLabel: "Chat messages",
      typingLabel: "Assistant is typing",
      greeting:
        "Hello! I can help you with questions about the student OV card. What would you like to know?",
      errorMsg:
        "Sorry, something went wrong. Please try again or call DUO at 050 – 599 77 55.",
      suggestions: [
        "How do I apply for the OV card?",
        "What do I do during a gap year?",
        "How do I cancel after graduating?",
      ],
    },

    home: {
      heroTag: "Student OV Card",
      heroTitle: "Travel for free as a student",
      heroDesc:
        "With the student OV card you travel for free throughout the Netherlands. Choose whether you travel free on weekdays or weekends. Learn everything about applying, pausing and cancelling.",
      heroApply: "Apply for OV card",
      heroGuide: "View action guide",
      benefitsTitle: "What are the benefits?",
      benefits: [
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
      ],
      applyTitle: "Applying for the OV card",
      applyDesc: "Follow these steps to apply for your student OV card.",
      applyStepsLabel: "Steps for applying",
      applySteps: [
        {
          title: "Log in to My DUO",
          desc: "Log in with your DigiD at My DUO. Don't have DigiD yet? Request it first at digid.nl.",
          link: { label: "Go to My DUO", href: "https://mijn.duo.nl" },
        },
        {
          title: "Apply for the OV card",
          desc: 'Go to "My products" and choose "Apply for OV card". Select whether you want free weekday or weekend travel.',
          link: null,
        },
        {
          title: "Order OV chip card",
          desc: "Already have an OV chip card? Your OV card will be loaded onto it automatically. If not, order one at ov-chipkaart.nl.",
          link: null,
        },
        {
          title: "Activate at an NS gate",
          desc: "After receiving your card, activate it at an NS check-in post or gate at the station. This takes a few days after your application.",
          link: null,
        },
      ],
      warningTitle: "Warning: fine for forgetting to cancel",
      warningDesc:
        "If you don't cancel your OV card on time after your studies, DUO can reclaim travel costs. Cancel immediately when you",
      warningBold: "graduate, stop or take a gap year",
      warningLink: "Read how to do this →",
      situationsTitle: "What is your situation?",
      situationsDesc:
        "Choose the situation that applies to you for a step-by-step guide.",
      situations: [
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
      ],
    },

    guide: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Action Guide",
      heroTitle: "OV Card Action Guide",
      heroDesc:
        "Step-by-step instructions for every situation: pausing, cancelling or resolving a registration error.",
      jumpTo: "Jump to:",
      confirmNote:
        "You will receive a confirmation from DUO after every change. If you don't receive one, contact DUO.",
      confirmBold: "Always check:",
      ctaTitle: "Still have questions?",
      ctaDesc: "Can't find your answer here? Check the FAQ or contact DUO directly.",
      ctaFaq: "FAQ",
      ctaContact: "Contact DUO",
      sections: [
        {
          id: "pauzeren",
          emoji: "⏸️",
          title: "Pause OV card (gap year)",
          intro:
            "Taking a gap year or temporarily stopping? You can pause your OV card without cancelling it completely.",
          warning:
            "If you forget to pause the card, DUO will consider you an active student and may reclaim travel costs.",
          steps: [
            { title: "Log in to My DUO", desc: 'Go to duo.nl and log in with your DigiD. Navigate to "My products".' },
            { title: 'Choose "Temporarily pause OV card"', desc: 'Select "Temporarily pause" and choose the start date of your gap year.' },
            { title: "Confirm the change", desc: "You will receive a confirmation email. Keep this as proof." },
            { title: "Resume when you return", desc: "When your gap year is over, simply apply for the OV card again via My DUO." },
          ],
        },
        {
          id: "stopzetten",
          emoji: "🏁",
          title: "Cancel OV card (graduating or stopping)",
          intro: "Graduating or stopping your studies? Cancel your OV card as soon as possible to avoid a fine.",
          warning: "DUO reclaims travel costs if you use the card after your graduation date. Cancel on time, even when transferring from MBO to HBO.",
          steps: [
            { title: "Log in to My DUO", desc: 'Go to duo.nl and log in with your DigiD. Go to "My products".' },
            { title: 'Click "Cancel OV card"', desc: "Choose the date you want to stop. Ideally this is your official graduation date." },
            { title: "Confirm the cancellation", desc: "You will receive a confirmation by email. After the end date your OV card is no longer valid." },
            { title: "Keep your OV chip card (optional)", desc: "You don't need to hand in the OV chip card. You can keep it for paid travel." },
          ],
        },
        {
          id: "foutieve-registratie",
          emoji: "⚠️",
          title: "Resolve incorrect registration",
          intro: "Is there an error in your registration? Here's how to fix it.",
          warning: undefined,
          steps: [
            { title: "Check your enrolment status", desc: "Log in to My DUO and verify your programme details. Incorrect data usually comes from your institution." },
            { title: "Contact your school", desc: "Details incorrect? Report this to your school's administration. They will update the registration at DUO." },
            { title: "Contact DUO", desc: "Taking long or stuck? Call DUO at 050 – 599 77 55 (Mon–Fri 8:00–17:00). Have your student number ready." },
            { title: "Keep confirmations", desc: "Save all emails and confirmations. These may be important if DUO reclaims travel costs." },
          ],
        },
      ],
    },

    faq: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "FAQ",
      heroTitle: "Frequently Asked Questions",
      heroDesc: "Answers to the most common questions about the student OV card.",
      cantFind: "Can't find your answer?",
      cantFindDesc: "Contact DUO directly. We're happy to help.",
      byPhone: "By phone",
      phoneNumber: "050 – 599 77 55",
      phoneHours: "Monday – Friday 8:00–17:00",
      online: "Online",
      onlineDesc: "Use the contact form on duo.nl",
      contactFormLink: "Go to contact form →",
      categories: [
        {
          name: "Applying",
          items: [
            { id: "when-to-apply", q: "When can I apply for the OV card?", a: "You can apply for the OV card as soon as you are officially enrolled at a recognised programme. We recommend applying at least 2 weeks before the start." },
            { id: "how-long", q: "How long does the application take?", a: "After applying it usually takes 3 to 5 working days before your card is created. After that you still need to activate it at an NS check-in post." },
            { id: "weekday-weekend", q: "What is the difference between weekday and weekend free travel?", a: "Choose weekday free? Then you travel free Monday–Friday and get 40% off on weekends. Choose weekend free? Then you travel free on Saturday and Sunday and pay normally during the week. You can change this once per month." },
          ],
        },
        {
          name: "Pausing & cancelling",
          items: [
            { id: "pause-gap-year", q: "Can I pause the OV card during a gap year?", a: "Yes, if you take a gap year you can temporarily pause the OV card via My DUO. When your studies resume, simply apply again. You lose the right to the OV card during the pause period." },
            { id: "transfer-mbo-hbo", q: "I'm transferring from MBO to HBO. Do I need to cancel the card?", a: "If there is no break between your MBO and HBO (you start immediately), your OV card continues. No action needed. Check this in My DUO to be sure." },
            { id: "when-to-cancel", q: "When do I need to cancel the OV card after graduating?", a: "Cancel the card on your graduation day, or as soon as possible after. DUO reclaims travel costs if you use the card after your official graduation date." },
          ],
        },
        {
          name: "Fines & recovery",
          items: [
            { id: "forgot-cancel", q: "What happens if I don't cancel the OV card on time?", a: "DUO can reclaim travel costs for the period you used the card incorrectly. DUO reviews each situation — a short oversight may be understood, but this is not guaranteed." },
            { id: "fine-calc", q: "How is the fine calculated?", a: "The reclaim is based on the travel costs you would have made (weekday or weekend rate), calculated over the period you incorrectly held the OV card." },
          ],
        },
        {
          name: "Incorrect registration",
          items: [
            { id: "reg-error", q: "There is an error in my registration. What do I do?", a: "First check your details in My DUO. Something incorrect? Contact your school's administration — they update the details at DUO." },
            { id: "received-incorrectly", q: "I received the OV card incorrectly. What now?", a: "Do not use the card and report it to DUO immediately at 050 – 599 77 55. The sooner you report it, the lower the risk of a high reclaim." },
          ],
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.nl;
