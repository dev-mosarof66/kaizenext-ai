import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Vision AI",
  description:
    "Add eyes to your operations with custom computer vision models. Quality inspection, object detection, OCR, and real-time visual analytics.",
  openGraph: {
    title: "Computer Vision AI | Kaizenext",
    description:
      "Add eyes to your operations with custom computer vision models. Quality inspection, object detection, and real-time visual analytics.",
    url: "https://kaizenext.ai/solutions/computer-vision",
  },
  twitter: {
    title: "Computer Vision AI | Kaizenext",
    description:
      "Add eyes to your operations with custom computer vision models.",
  },
  alternates: {
    canonical: "https://kaizenext.ai/solutions/computer-vision",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
