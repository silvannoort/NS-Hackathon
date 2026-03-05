import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_NL = `Je bent een vriendelijke en duidelijke assistent voor de DUO Studenten-OV-kaart (de openbaar vervoerkaart voor studenten in Nederland). Je helpt studenten met vragen over:

- De OV-kaart aanvragen (via Mijn DUO met DigiD)
- Doordeweeks of in het weekend gratis reizen (en 40% weekendkorting bij de doordeweeks-optie)
- De OV-kaart pauzeren tijdens een tussenjaar
- De OV-kaart stopzetten bij afstuderen of stoppen (boetes vermijden)
- Foutieve registratie oplossen
- Doorstromen van mbo naar hbo (geen actie nodig als er geen onderbreking is)

Regels:
- Antwoord altijd in het Nederlands
- Wees beknopt en praktisch — geef concrete stappen
- Als je iets niet weet, verwijs dan naar duo.nl of het telefoonnummer van DUO: 050-599 77 55
- Ga niet in op onderwerpen buiten de OV-kaart of DUO-diensten
- Vermijd jargon, schrijf in begrijpelijk Nederlands`;

const SYSTEM_EN = `You are a friendly and clear assistant for the DUO Student OV Card (public transport card for students in the Netherlands). You help students with questions about:

- Applying for the OV card (via My DUO with DigiD)
- Weekday vs weekend free travel (and 40% weekend discount with weekday option)
- Pausing the OV card during a gap year
- Cancelling the OV card when graduating or stopping (avoiding fines)
- Resolving incorrect registration
- Transferring from MBO to HBO (no action needed if there is no interruption)

Rules:
- Always respond in English
- Be concise and practical — give concrete steps
- If you don't know something, refer to duo.nl or DUO's phone number 050-599 77 55
- Do not address topics outside the OV card or DUO services
- Avoid jargon, write in plain English`;

export async function POST(req: Request) {
  const { messages, lang } = await req.json();
  const systemPrompt = lang === "en" ? SYSTEM_EN : SYSTEM_NL;

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: systemPrompt,
    messages,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
