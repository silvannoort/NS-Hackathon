import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a friendly and clear assistant for the DUO Student OV Card (public transport card for students in the Netherlands). You help students with questions about:

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
