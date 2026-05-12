import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice & Conversational AI",
  description:
    "Build intelligent voice agents that handle calls, qualify leads, and answer questions 24/7 — indistinguishable from a human operator.",
  openGraph: {
    title: "Voice & Conversational AI | Kaizenext",
    description:
      "Build intelligent voice agents that handle calls, qualify leads, and answer questions 24/7.",
    url: "https://kaizenext.ai/solutions/voice-ai",
  },
  twitter: {
    title: "Voice & Conversational AI | Kaizenext",
    description:
      "Build intelligent voice agents that handle calls, qualify leads, and answer questions 24/7.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/solutions/voice-ai",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
