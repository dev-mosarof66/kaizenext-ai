import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ad Automation",
  description:
    "Stop wasting ad spend. Our AI monitors campaigns in real-time, auto-pauses underperforming ads, and alerts you on WhatsApp — before budget disasters happen.",
  openGraph: {
    title: "AI Ad Automation | Kaizenext",
    description:
      "Stop wasting ad spend. Our AI monitors campaigns in real-time, auto-pauses underperforming ads, and alerts you on WhatsApp.",
    url: "https://kaizenext.ai/solutions/ai-ad-automation",
  },
  twitter: {
    title: "AI Ad Automation | Kaizenext",
    description:
      "Stop wasting ad spend. Our AI monitors campaigns in real-time, auto-pauses underperforming ads, and alerts you on WhatsApp.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/solutions/ai-ad-automation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
