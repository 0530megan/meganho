// Build-a-Brand generator: returns a structured brand system + a generated logo image (base64).
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";

interface BrandInput {
  mood: string; // bold | soft | retro
  category: string; // food | beauty | tech | beverage | wellness
  vibe: string; // free word
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

    const { mood, category, vibe } = (await req.json()) as BrandInput;

    // 1. Structured brand system via tool calling
    const systemPrompt = `You are Megan Ho, a senior brand designer. Invent a fresh, memorable concept brand based on the inputs. Names should be short (1-2 words), evocative, never generic. Palettes must be cohesive (2 base + 2 accent + 1 neutral) and feel editorial — avoid cliches (no purple gradients, no neon green). Tone of voice should match the mood word.`;

    const brandRes = await fetch(GATEWAY, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `Mood: ${mood}\nCategory: ${category}\nVibe word: ${vibe}\n\nDesign a brand for this.`,
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "design_brand",
              description: "Return a complete brand system",
              parameters: {
                type: "object",
                properties: {
                  name: { type: "string", description: "Brand name, 1-2 words" },
                  tagline: { type: "string", description: "Short tagline, max 6 words" },
                  description: { type: "string", description: "1 sentence positioning" },
                  category_label: { type: "string" },
                  palette: {
                    type: "array",
                    minItems: 5,
                    maxItems: 5,
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        hex: { type: "string", description: "#RRGGBB" },
                        role: {
                          type: "string",
                          enum: ["base", "base", "accent", "accent", "neutral"],
                        },
                      },
                      required: ["name", "hex", "role"],
                      additionalProperties: false,
                    },
                  },
                  type_pairing: {
                    type: "object",
                    properties: {
                      display: {
                        type: "string",
                        description: "Display font name + family hint (e.g. 'Fraunces, serif')",
                      },
                      body: { type: "string" },
                    },
                    required: ["display", "body"],
                    additionalProperties: false,
                  },
                  voice: {
                    type: "array",
                    minItems: 3,
                    maxItems: 3,
                    items: { type: "string", description: "Adjective" },
                  },
                  manifesto: {
                    type: "string",
                    description: "2-3 short sentence brand manifesto, editorial tone",
                  },
                  product_idea: {
                    type: "string",
                    description: "One imagined hero product",
                  },
                },
                required: [
                  "name",
                  "tagline",
                  "description",
                  "category_label",
                  "palette",
                  "type_pairing",
                  "voice",
                  "manifesto",
                  "product_idea",
                ],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "design_brand" } },
      }),
    });

    if (!brandRes.ok) {
      if (brandRes.status === 429)
        return new Response(
          JSON.stringify({ error: "Too many requests, give it a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      if (brandRes.status === 402)
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Add credits in Settings → Workspace → Usage." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      const t = await brandRes.text();
      console.error("brand error", brandRes.status, t);
      throw new Error("Brand generation failed");
    }

    const brandJson = await brandRes.json();
    const toolCall = brandJson.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No brand returned");
    const brand = JSON.parse(toolCall.function.arguments);

    // 2. Logo image
    const palette = (brand.palette ?? []).map((c: any) => `${c.name} ${c.hex}`).join(", ");
    const logoPrompt = `A clean, editorial logo mark and wordmark for a brand called "${brand.name}" in the ${brand.category_label} category. Mood: ${mood}, vibe: ${vibe}. Use the brand palette (${palette}). Modern, minimal, premium. Centered composition on a soft cream paper background. The wordmark should be clearly legible. No tagline, no extra text.`;

    const logoRes = await fetch(GATEWAY, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content: logoPrompt }],
        modalities: ["image", "text"],
      }),
    });

    let logoUrl: string | null = null;
    if (logoRes.ok) {
      const lj = await logoRes.json();
      logoUrl = lj.choices?.[0]?.message?.images?.[0]?.image_url?.url ?? null;
    } else {
      console.error("logo gen failed", logoRes.status, await logoRes.text());
    }

    return new Response(JSON.stringify({ brand, logoUrl }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-brand error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
