import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute discovery call or send us your project details. We reply within 1 business day.",
  openGraph: {
    title: "Contact Kaizenext",
    description:
      "Book a free 30-minute discovery call or send us your project details.",
    url: "https://kaizenext.ai/contact",
  },
  twitter: {
    title: "Contact Kaizenext",
    description:
      "Book a free 30-minute discovery call or send us your project details.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
