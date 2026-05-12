import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.NEXT_PUBLIC_BREVO_LIST_ID;

    if (!brevoApiKey || !brevoListId) {
      console.error("Missing Brevo configuration");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Add contact to Brevo list
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(brevoListId)],
        attributes: {
          DOUBLE_OPT_IN: 0, // Set to 1 if you want double opt-in
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Brevo API error:", error);

      // If contact already exists, still consider it success
      if (response.status === 400) {
        return NextResponse.json(
          { message: "Email already subscribed" },
          { status: 200 }
        );
      }

      throw new Error(`Brevo API error: ${response.status}`);
    }

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
