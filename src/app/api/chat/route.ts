import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Je bent een vriendelijke en duidelijke assistent voor de DUO Studenten-OV-kaart. Je helpt studenten met vragen over:

- OV-kaart aanvragen (via Mijn DUO met DigiD)
- Doordeweeks vs weekend gratis reizen (en 40% weekendkorting bij doordeweeks)
- OV-kaart pauzeren bij een tussenjaar
- OV-kaart stopzetten bij afstuderen of stoppen (boetes vermijden)
- Foutieve registratie oplossen
- Doorstromen van mbo naar hbo (geen actie nodig als er geen onderbreking is)

Regels:
- Antwoord altijd in het Nederlands
- Wees bondig en praktisch — geef concrete stappen
- Als je iets niet weet, verwijs door naar duo.nl of het DUO-contactnummer 050-599 77 55
- Ga niet in op onderwerpen buiten de OV-kaart of DUO-diensten
- Gebruik geen jargon, schrijf op B1-taalniveau`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
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
