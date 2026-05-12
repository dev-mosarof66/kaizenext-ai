import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Development",
  description:
    "Need something unique? We design and build bespoke AI systems — from fine-tuned LLMs to end-to-end data pipelines — tailored to your exact requirements.",
  openGraph: {
    title: "Custom AI Development | Kaizenext",
    description:
      "Bespoke AI systems — from fine-tuned LLMs to end-to-end data pipelines — tailored to your exact requirements.",
    url: "https://kaizenext.ai/solutions/custom-ai",
  },
  twitter: {
    title: "Custom AI Development | Kaizenext",
    description:
      "Bespoke AI systems — from fine-tuned LLMs to end-to-end data pipelines.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/solutions/custom-ai",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
