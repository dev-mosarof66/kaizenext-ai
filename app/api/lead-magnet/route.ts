import { NextRequest, NextResponse } from "next/server";

interface LeadMagnetData {
  email: string;
  platform?: string;
  accountLink?: string;
  type: "ad-audit" | "voice-trial" | "vision-demo";
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadMagnetData = await request.json();
    const { email, platform, accountLink, type } = body;

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

    const resendApiKey = process.env.RESEND_API_KEY;
    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.NEXT_PUBLIC_BREVO_LIST_ID;

    if (!resendApiKey || !brevoApiKey || !brevoListId) {
      console.error("Missing email service configuration");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Add to Brevo list
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(brevoListId)],
        attributes: {
          LEAD_MAGNET_TYPE: type,
          LEAD_PLATFORM: platform || "",
          DOUBLE_OPT_IN: 0,
        },
      }),
    });

    // Send lead magnet via email
    const leadMagnetContent = getLeadMagnetContent(type);

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "leads@kaizenext.ai",
        to: email,
        subject: leadMagnetContent.subject,
        html: leadMagnetContent.html,
      }),
    });

    // Send internal notification
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "hello@kaizenext.ai",
        to: "leads@kaizenext.ai",
        subject: `New Lead Magnet Signup: ${type}`,
        html: `
          <h2>New Lead Magnet Signup</h2>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${platform ? `<p><strong>Platform:</strong> ${escapeHtml(platform)}</p>` : ""}
          ${accountLink ? `<p><strong>Account Link:</strong> ${escapeHtml(accountLink)}</p>` : ""}
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      }),
    });

    return NextResponse.json(
      { message: "Lead magnet sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead magnet form error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}

function getLeadMagnetContent(type: string): { subject: string; html: string } {
  const baseUrl = "https://kaizenext.ai";

  switch (type) {
    case "ad-audit":
      return {
        subject: "Your Free Ad Spend Audit Report - Kaizenext",
        html: `
          <h2>Your Free Ad Spend Audit</h2>
          <p>Thanks for requesting your free ad spend audit!</p>
          <p>Here's what we'll analyze:</p>
          <ul>
            <li>Campaign performance across all platforms</li>
            <li>Cost per acquisition trends</li>
            <li>Wasted spend detection</li>
            <li>Quick wins for immediate savings</li>
          </ul>
          <p>Our team will review your account within 48 hours and send you a detailed report with specific recommendations.</p>
          <p><a href="${baseUrl}/contact">Schedule a follow-up call →</a></p>
        `,
      };

    case "voice-trial":
      return {
        subject: "Start Your Voice AI Free Trial - Kaizenext",
        html: `
          <h2>Welcome to Voice AI</h2>
          <p>Your free trial is ready!</p>
          <p>You now have access to:</p>
          <ul>
            <li>Live voice agent sandbox</li>
            <li>30 test calls at no cost</li>
            <li>Full feature access</li>
            <li>Dedicated onboarding support</li>
          </ul>
          <p>Get started: <a href="${baseUrl}/solutions/voice-ai">Voice AI Demo →</a></p>
        `,
      };

    case "vision-demo":
      return {
        subject: "Computer Vision Demo Access - Kaizenext",
        html: `
          <h2>Your Vision AI Demo is Ready</h2>
          <p>Access our interactive computer vision demo:</p>
          <ul>
            <li>Real-time player tracking simulation</li>
            <li>Heatmap generation</li>
            <li>Multi-camera coordination</li>
            <li>Performance metrics</li>
          </ul>
          <p>Explore the demo: <a href="${baseUrl}/solutions/computer-vision">Vision Demo →</a></p>
        `,
      };

    default:
      return {
        subject: "Welcome to Kaizenext",
        html: "<p>Thank you for your interest!</p>",
      };
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
