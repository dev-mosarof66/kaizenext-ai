import { NextRequest, NextResponse } from "next/server";

const EVENT_TYPE_ID = 5657857;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const timeZone = searchParams.get("timeZone") || "UTC";

  if (!start || !end) {
    return NextResponse.json({ error: "Missing start or end" }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_CAL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Cal.com API key not configured" }, { status: 500 });
  }

  const url = new URL("https://api.cal.com/v2/slots");
  url.searchParams.set("eventTypeId", String(EVENT_TYPE_ID));
  url.searchParams.set("start", start);
  url.searchParams.set("end", end);
  url.searchParams.set("timeZone", timeZone);

  try {
    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-09-04",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Cal.com slots error:", res.status, text);
      return NextResponse.json({ error: "Failed to fetch slots" }, { status: res.status });
    }

    const data = await res.json();

    // Transform: {"data": {"2026-05-12": [{"start": "ISO"}]}} → {"slots": {"2026-05-12": ["ISO"]}}
    const slots: Record<string, string[]> = {};
    if (data.data) {
      for (const [date, slotList] of Object.entries(
        data.data as Record<string, Array<{ start: string }>>
      )) {
        slots[date] = slotList.map((s) => s.start);
      }
    }

    return NextResponse.json({ slots });
  } catch (err) {
    console.error("Cal.com slots fetch error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
