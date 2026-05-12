import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://kaizenext.ai";

  // Sample blog posts - would be fetched from Sanity in production
  const posts = [
    {
      slug: "ai-workflow-automation-roi",
      title: "The ROI of AI Workflow Automation",
      excerpt: "How SMBs are saving 60% on operational time by automating repetitive workflows.",
      date: "2026-05-08",
      author: "Tahmid",
    },
    {
      slug: "voice-ai-customer-service",
      title: "Voice AI is Eating Customer Service",
      excerpt: "Real numbers on how voice agents are replacing human support teams — and what it means for hiring.",
      date: "2026-05-01",
      author: "Kaizenext Team",
    },
  ];

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kaizenext - AI Engineering Blog</title>
    <link>${baseUrl}</link>
    <description>Real stories from shipping AI. Production knowledge, not hype.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/insights/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/insights/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <author>${escapeXml(post.author)}</author>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
    `
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

function escapeXml(str: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (m) => map[m]);
}
