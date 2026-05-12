import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kaizenext - AI Engineering & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E1A16",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(27,58,45,0.4)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(221,79,48,0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Logo pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(242,105,74,0.1)",
            border: "1px solid rgba(242,105,74,0.25)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#F2694A",
            }}
          />
          <span
            style={{
              color: "#F2694A",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Kaizenext AI
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#E8EFEB",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 28,
          }}
        >
          AI Engineering &{" "}
          <span style={{ color: "#F2694A", fontStyle: "italic" }}>
            Automation
          </span>
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: 22,
            color: "#9BAFA6",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 56,
          }}
        >
          Custom AI solutions, voice agents, computer vision, and workflow
          automation. From prototype to production in 4–6 weeks.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { value: "4–6 wks", label: "To production" },
            { value: "100%", label: "Custom-built" },
            { value: "24h", label: "Response time" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{ fontSize: 32, fontWeight: 800, color: "#F2694A" }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: 14, color: "#9BAFA6" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain badge bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 16,
            color: "rgba(155,175,166,0.6)",
            fontWeight: 500,
          }}
        >
          kaizenext.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
