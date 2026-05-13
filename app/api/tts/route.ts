import { NextRequest, NextResponse } from "next/server";

const DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; // Rachel — ElevenLabs default voice
const DEFAULT_MODEL_ID = "eleven_turbo_v2_5";
const MAX_TEXT_LENGTH = 600;

export async function POST(request: NextRequest) {
  try {
    const { text } = (await request.json()) as { text?: unknown };

    if (typeof text !== "string" || !text.trim()) {
      return NextResponse.json({ error: "text is required" }, { status: 400 });
    }
    if (text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json({ error: "text too long" }, { status: 400 });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "TTS not configured" }, { status: 503 });
    }

    const voiceId = process.env.ELEVENLABS_VOICE_ID || DEFAULT_VOICE_ID;
    const modelId = process.env.ELEVENLABS_MODEL_ID || DEFAULT_MODEL_ID;

    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text,
          model_id: modelId,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.3,
            use_speaker_boost: true,
          },
        }),
      },
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("ElevenLabs TTS error:", res.status, err);
      return NextResponse.json(
        { error: "TTS service error", upstreamStatus: res.status, upstream: err },
        { status: 502 },
      );
    }

    const audio = await res.arrayBuffer();
    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("TTS route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
