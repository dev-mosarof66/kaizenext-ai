import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflow Automation",
  description:
    "Eliminate repetitive tasks and connect your tools with intelligent AI workflows. Save dozens of hours per week across sales, ops, and support.",
  openGraph: {
    title: "AI Workflow Automation | Kaizenext",
    description:
      "Eliminate repetitive tasks and connect your tools with intelligent AI workflows.",
    url: "https://kaizenext.ai/solutions/ai-workflow-automation",
  },
  twitter: {
    title: "AI Workflow Automation | Kaizenext",
    description:
      "Eliminate repetitive tasks and connect your tools with intelligent AI workflows.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/solutions/ai-workflow-automation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
