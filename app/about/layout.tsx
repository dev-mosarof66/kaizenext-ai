import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a specialist AI engineering studio based in Dhaka with partners in Sydney, Dubai, and Riyadh. We turn AI ideas into production systems.",
  openGraph: {
    title: "About Kaizenext",
    description:
      "Specialist AI engineering studio turning ideas into production systems.",
    url: "https://kaizenext.ai/about",
  },
  twitter: {
    title: "About Kaizenext",
    description:
      "Specialist AI engineering studio turning ideas into production systems.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
