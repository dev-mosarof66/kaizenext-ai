import { NextRequest, NextResponse } from "next/server";

const EVENT_TYPE_ID = 5657857;

export async function POST(request: NextRequest) {
  const { start, name, email, notes, timeZone } = await request.json();

  if (!start || !name || !email) {
    return NextResponse.json({ error: "start, name, and email are required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_CAL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Cal.com API key not configured" }, { status: 500 });
  }

  try {
    const body: Record<string, unknown> = {
      start,
      eventTypeId: EVENT_TYPE_ID,
      attendee: {
        name,
        email,
        timeZone: timeZone || "UTC",
        language: "en",
      },
    };

    if (notes) {
      body.metadata = { notes };
    }

    const res = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "cal-api-version": "2024-08-13",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      const msg = data?.error?.message || data?.message || "Booking failed";
      return NextResponse.json({ error: msg }, { status: res.status });
    }

    const bookingData = data.data ?? data;
    return NextResponse.json({
      bookingRef: bookingData.uid ?? "confirmed",
      start: bookingData.start ?? start,
    });
  } catch (err) {
    console.error("Cal.com booking error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
