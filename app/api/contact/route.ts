import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  message: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "web-app": "Web & Mobile Apps",
  workflow: "AI Workflow Automation",
  ads: "AI Ad Automation",
  voice: "Voice AI",
  vision: "Computer Vision",
  custom: "Custom AI",
};

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m] ?? m)
  );
}

function notificationHtml(data: ContactFormData): string {
  const service = data.projectType ? SERVICE_LABELS[data.projectType] ?? data.projectType : null;
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0E1A16;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E1A16;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#14302A;border-radius:16px;border:1px solid #234D3E;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#0E2620;padding:28px 32px;border-bottom:1px solid #234D3E;">
            <span style="font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">Kaizenext</span>
            <span style="display:inline-block;margin-left:12px;font-size:11px;font-weight:600;color:#E8593A;background:rgba(232,89,58,0.12);border:1px solid rgba(232,89,58,0.25);border-radius:20px;padding:3px 10px;vertical-align:middle;letter-spacing:0.05em;text-transform:uppercase;">New lead</span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;font-size:22px;font-weight:700;color:#ffffff;">New contact form submission</p>
            <!-- Fields -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #234D3E;">
                  <span style="font-size:11px;font-weight:600;color:#9BAFA6;text-transform:uppercase;letter-spacing:0.08em;">Name</span><br>
                  <span style="font-size:15px;color:#E8EFEB;margin-top:4px;display:block;">${escapeHtml(data.name)}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #234D3E;">
                  <span style="font-size:11px;font-weight:600;color:#9BAFA6;text-transform:uppercase;letter-spacing:0.08em;">Email</span><br>
                  <a href="mailto:${escapeHtml(data.email)}" style="font-size:15px;color:#E8593A;margin-top:4px;display:block;text-decoration:none;">${escapeHtml(data.email)}</a>
                </td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #234D3E;">
                  <span style="font-size:11px;font-weight:600;color:#9BAFA6;text-transform:uppercase;letter-spacing:0.08em;">Company</span><br>
                  <span style="font-size:15px;color:#E8EFEB;margin-top:4px;display:block;">${escapeHtml(data.company)}</span>
                </td>
              </tr>` : ""}
              ${service ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #234D3E;">
                  <span style="font-size:11px;font-weight:600;color:#9BAFA6;text-transform:uppercase;letter-spacing:0.08em;">Service</span><br>
                  <span style="font-size:15px;color:#E8EFEB;margin-top:4px;display:block;">${escapeHtml(service)}</span>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding:10px 0;">
                  <span style="font-size:11px;font-weight:600;color:#9BAFA6;text-transform:uppercase;letter-spacing:0.08em;">Message</span><br>
                  <span style="font-size:15px;color:#E8EFEB;margin-top:8px;display:block;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</span>
                </td>
              </tr>
            </table>
            <!-- Reply CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
              <tr>
                <td>
                  <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your enquiry at Kaizenext" style="display:inline-block;background:linear-gradient(to bottom,#F2694A,#DD4F30);color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:100px;text-decoration:none;">Reply to ${escapeHtml(data.name)}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #234D3E;">
            <p style="margin:0;font-size:12px;color:#9BAFA6;">Sent from kaizenext.ai contact form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationHtml(name: string, service: string | null): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0E1A16;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E1A16;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#14302A;border-radius:16px;border:1px solid #234D3E;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#0E2620;padding:28px 32px;border-bottom:1px solid #234D3E;">
            <span style="font-size:20px;font-weight:700;color:#ffffff;">Kaizenext</span>
          </td>
        </tr>
        <!-- Hero -->
        <tr>
          <td style="padding:40px 32px 28px;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(232,89,58,0.1);border:1px solid rgba(232,89,58,0.25);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:28px;">✓</div>
            <p style="margin:0 0 8px;font-size:26px;font-weight:700;color:#ffffff;">Message received!</p>
            <p style="margin:0;font-size:15px;color:#9BAFA6;line-height:1.6;">Hi ${escapeHtml(name)}, we&apos;ve got your message and will be in touch soon.</p>
          </td>
        </tr>
        <!-- What's next -->
        <tr>
          <td style="padding:0 32px 32px;">
            <p style="margin:0 0 16px;font-size:11px;font-weight:600;color:#E8593A;text-transform:uppercase;letter-spacing:0.1em;">What happens next</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E2620;border-radius:12px;border:1px solid #234D3E;">
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #234D3E;">
                  <span style="display:inline-block;width:24px;height:24px;background:rgba(232,89,58,0.15);border-radius:50%;font-size:11px;font-weight:700;color:#E8593A;text-align:center;line-height:24px;margin-right:12px;vertical-align:middle;">1</span>
                  <span style="font-size:14px;color:#E8EFEB;vertical-align:middle;">We review your message — <strong style="color:#ffffff;">same day</strong></span>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #234D3E;">
                  <span style="display:inline-block;width:24px;height:24px;background:rgba(232,89,58,0.15);border-radius:50%;font-size:11px;font-weight:700;color:#E8593A;text-align:center;line-height:24px;margin-right:12px;vertical-align:middle;">2</span>
                  <span style="font-size:14px;color:#E8EFEB;vertical-align:middle;">Discovery call scheduled — <strong style="color:#ffffff;">within 24h</strong></span>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;">
                  <span style="display:inline-block;width:24px;height:24px;background:rgba(232,89,58,0.15);border-radius:50%;font-size:11px;font-weight:700;color:#E8593A;text-align:center;line-height:24px;margin-right:12px;vertical-align:middle;">3</span>
                  <span style="font-size:14px;color:#E8EFEB;vertical-align:middle;">Custom proposal delivered — <strong style="color:#ffffff;">within 3 days</strong></span>
                </td>
              </tr>
            </table>
            ${service ? `<p style="margin:20px 0 0;font-size:13px;color:#9BAFA6;">Your interest in <strong style="color:#E8EFEB;">${escapeHtml(service)}</strong> has been noted.</p>` : ""}
          </td>
        </tr>
        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 32px;text-align:center;">
            <p style="margin:0 0 16px;font-size:14px;color:#9BAFA6;">Want to move faster? Book a free 30-minute call directly.</p>
            <a href="https://kaizenext.ai/contact#booking" style="display:inline-block;background:linear-gradient(to bottom,#F2694A,#DD4F30);color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:100px;text-decoration:none;">Book a discovery call</a>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #234D3E;text-align:center;">
            <p style="margin:0 0 4px;font-size:12px;color:#9BAFA6;">Kaizenext · hello@kaizenext.ai</p>
            <p style="margin:0;font-size:12px;color:#9BAFA6;">You&apos;re receiving this because you contacted us at kaizenext.ai</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const serviceLabel = projectType ? SERVICE_LABELS[projectType] ?? projectType : null;

    // Resend requires a verified domain. Until kaizenext.ai is verified use the
    // RESEND_FROM env var to override (e.g. set to "onboarding@resend.dev" for dev).
    const fromDomain = process.env.RESEND_FROM ?? "hello@kaizenext.ai";
    const fromNotify = `Kaizenext Contact <${fromDomain}>`;
    const fromConfirm = `Kaizenext <${fromDomain}>`;

    // 1. Internal notification to team
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromNotify,
        to: ["hello@kaizenext.ai"],
        reply_to: email,
        subject: `New enquiry from ${name}${serviceLabel ? ` — ${serviceLabel}` : ""}`,
        html: notificationHtml({ name, email, company, projectType, message }),
      }),
    });

    if (!notifyRes.ok) {
      const errBody = await notifyRes.text();
      console.error("Resend notification error:", notifyRes.status, errBody);
      return NextResponse.json(
        { error: `Email delivery failed (${notifyRes.status}): ${errBody}` },
        { status: 502 }
      );
    }

    // 2. Confirmation to the user (best-effort — don't fail the request if this fails)
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromConfirm,
        to: [email],
        subject: "We received your message — Kaizenext",
        html: confirmationHtml(name, serviceLabel),
      }),
    }).catch((err) => console.error("Confirmation email failed:", err));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
