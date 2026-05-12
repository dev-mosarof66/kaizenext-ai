import { Metadata, Viewport } from "next";

const baseUrl = "https://kaizenext.ai";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kaizenext - AI Engineering & Automation",
    template: "%s | Kaizenext",
  },
  description:
    "Custom AI solutions, voice agents, computer vision, and workflow automation for SMBs. From prototype to production in 4-6 weeks.",
  keywords: [
    "AI consulting",
    "AI engineering",
    "workflow automation",
    "voice AI",
    "computer vision",
    "custom AI development",
    "AI automation",
    "LLM applications",
  ],
  authors: [{ name: "Kaizenext Team" }],
  creator: "Kaizenext",
  publisher: "Kaizenext",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Kaizenext",
    title: "Kaizenext - AI Engineering & Automation",
    description:
      "Custom AI solutions, voice agents, computer vision, and workflow automation for SMBs.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kaizenext - AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kaizenext",
    creator: "@kaizenext",
    title: "Kaizenext - AI Engineering & Automation",
    description:
      "Custom AI solutions, voice agents, computer vision, and workflow automation for SMBs.",
    images: [`${baseUrl}/og-image.png`],
  },
  alternates: {
    canonical: baseUrl,
    types: {
      "application/rss+xml": `${baseUrl}/feed.xml`,
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Kaizenext",
  },
};

export const defaultViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export function getSocialMeta(
  title: string,
  description: string,
  image: string,
  url: string
): Partial<Metadata> {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getArticleMeta(
  title: string,
  description: string,
  image: string,
  url: string,
  publishedDate: string,
  author: string
): Partial<Metadata> {
  return {
    ...getSocialMeta(title, description, image, url),
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: publishedDate,
      authors: [author],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}
