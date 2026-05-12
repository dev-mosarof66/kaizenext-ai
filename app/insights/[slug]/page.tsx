"use client";

import { motion } from "motion/react";
import { ArrowRight, Share2, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock blog post data - will be replaced with Sanity CMS in Week 7
const BLOG_POSTS: Record<string, any> = {
  "ai-workflow-automation-roi": {
    title: "The ROI of AI Workflow Automation",
    excerpt: "How SMBs are saving 60% on operational time by automating repetitive workflows.",
    category: "Insights",
    author: "Tahmid",
    date: "2026-05-08",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442d019cecf8957bc3bae1ab2e71?auto=format&fit=crop&q=80&w=1600",
    body: `
## The Problem

Most SMBs are losing 15-20 hours per week to manual, repetitive work. Here's what that costs:

- A sales team manually updating CRM records: 10 hours/week
- Finance team reconciling invoices: 8 hours/week
- Support manually creating tickets: 12 hours/week
- Marketing scheduling social posts: 6 hours/week

That's 36 hours per week. At $50/hour (fully-loaded cost), that's $1,800/week or $93,600/year in pure waste.

## The AI Solution

With workflow automation, we can eliminate 60-80% of that work:

1. **Discovery** — audit every repetitive process
2. **Design** — architect fault-tolerant workflows
3. **Deploy** — ship in 5-10 days
4. **Operate** — monitor and optimize

## Real Numbers

Here's what we've seen:

| Process | Time Saved | Monthly Savings |
|---------|-----------|-----------------|
| Lead routing | 60% | $2,000 |
| Invoice processing | 80% | $1,500 |
| Support tickets | 70% | $1,800 |
| Social scheduling | 90% | $900 |
| **Total** | **~70%** | **~$6,200/mo** |

## Why This Works

1. **Off-the-shelf tools** — n8n, Zapier, Make are mature and reliable
2. **Custom logic** — we write Python/JS for the complex bits
3. **Integration** — hooks into your existing CRM, payment processor, Slack
4. **Monitoring** — alerts the moment something breaks

## The Cost

A 3-week engagement including discovery, design, build, and training runs $8,000–$15,000 depending on complexity.

At 70% time savings on $93,600/year waste, you break even in 2–3 months.

## Next Steps

Ready to audit your workflows? Book a discovery call. We'll walk through your current processes and identify the 3–5 highest-impact automations.
    `,
    relatedPosts: [
      { slug: "shipping-vs-perfection", title: "Shipping Beats Perfection" },
      { slug: "ai-safety-compliance", title: "AI Safety & Compliance: Non-Negotiable" },
    ],
  },
  "voice-ai-customer-service": {
    title: "Voice AI is Eating Customer Service",
    excerpt: "Real numbers on how voice agents are replacing human support teams — and what it means for hiring.",
    category: "AI Trends",
    author: "Kaizenext Team",
    date: "2026-05-01",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1676632636058-2d0a32e37b0b?auto=format&fit=crop&q=80&w=1600",
    body: `
## The Shift

Voice agents are no longer a novelty. They're becoming the default for customer service.

Here's what changed:

- **LLMs got better** — Claude, GPT-4, and Llama can now hold natural conversations
- **STT/TTS got fast** — real-time speech-to-text and voice synthesis are sub-100ms
- **Telephony got simple** — Twilio, Vonage, and Vapi make deployment trivial
- **Economics shifted** — voice agent cost = $0.01–0.05/minute vs. $5–10/minute for human support

## The Numbers

A typical support team:
- 3 support agents @ $35K/year = $105K/year
- Health insurance, software tools, training = +$40K/year
- **Total cost per agent:** $48K/year

A voice agent:
- API costs: $0.01/min × 10K calls/month × 4 min avg = $400/month = $4,800/year
- Fine-tuning, monitoring, improvements = $1,200/year
- **Total cost:** $6K/year

**That's 8x cheaper.**

## What Can It Do Today?

✓ Answer FAQs (product specs, returns, billing)
✓ Qualify leads for sales
✓ Schedule appointments
✓ Process simple transactions (refunds, cancellations)
✓ Escalate to human when needed
✓ Handle multiple languages
✓ Work 24/7

❌ Still shaky on:
- Complex emotional situations
- Policy exceptions
- Nuanced billing disputes

## What This Means for Hiring

- **2026:** Companies will shift non-exception support to voice agents
- **2027–2028:** Human support teams shrink 40–50%; focus shifts to escalations and strategy
- **2029+:** Most companies will have 1 human support person per 50–100 voice agents

The winners: companies that train support teams to manage AI agents rather than replace themselves with AI.

## How to Get Started

You need:

1. **Agent LLM** (Claude, GPT-4, Llama)
2. **STT provider** (OpenAI Whisper, Google Cloud Speech-to-Text)
3. **TTS provider** (ElevenLabs, Google Cloud TTS)
4. **Telephony gateway** (Twilio, Vonage)
5. **Orchestration** (Vapi, Retell, custom Node.js)

We handle 4 & 5. You pick the LLM.

Typical timeline: **4–6 weeks** from kickoff to live agents.
    `,
    relatedPosts: [
      { slug: "ai-workflow-automation-roi", title: "The ROI of AI Workflow Automation" },
      { slug: "shipping-vs-perfection", title: "Shipping Beats Perfection" },
    ],
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug];
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link href="/insights" className="text-kx-orange hover:text-kx-orange-400 transition-colors">
          ← Back to all insights
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        {/* Hero with Image */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kx-surface via-kx-surface/40 to-transparent" />
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-24">
          <div className="w-full max-w-4xl mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-kx-orange/10 border border-kx-orange/30 text-xs font-mono font-bold text-kx-orange uppercase tracking-wide mb-6">
                {post.category}
              </span>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-6 pb-8 border-b border-kx-dark-border">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold">{post.author}</p>
                    <p className="text-sm text-kx-dark-muted">{post.date}</p>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-4">
                  <span className="text-sm text-kx-dark-muted">{post.readTime}</span>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg border border-kx-dark-border hover:border-kx-orange/20 hover:text-kx-orange transition-all"
                    title="Copy link"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button className="p-2 rounded-lg border border-kx-dark-border hover:border-kx-orange/20 hover:text-kx-orange transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none mb-16 leading-relaxed"
            >
              <div className="text-lg text-kx-dark-muted leading-relaxed whitespace-pre-wrap">
                {post.body}
              </div>
            </motion.div>

            {/* Author Section */}
            <div className="bg-kx-surface-raised/40 border border-kx-dark-border rounded-2xl p-8 mb-16">
              <h3 className="text-xl font-bold mb-4">About the author</h3>
              <p className="text-kx-dark-muted">
                {post.author === "Tahmid"
                  ? "Founder and CEO of Kaizenext. Shipping AI products since 2020."
                  : "The Kaizenext engineering team. Building AI that solves real problems."}
              </p>
            </div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-8">Related stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((related: any, idx: number) => (
                    <Link
                      key={idx}
                      href={`/insights/${related.slug}`}
                      className="group p-6 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 hover:border-kx-orange/20 hover:bg-kx-surface-raised/60 transition-all"
                    >
                      <h4 className="text-lg font-bold mb-2 group-hover:text-kx-orange transition-colors">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 text-kx-orange text-sm font-bold">
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative py-24 bg-kx-surface-950/30 border-t border-kx-dark-border">
          <div className="w-full max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Get new insights in your inbox</h2>
            <p className="text-kx-dark-muted mb-8 max-w-xl mx-auto">
              Every other week, we share real stories from shipping AI. No spam. Just production knowledge.
            </p>

            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white placeholder-kx-dark-muted/50 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
              />
              <button
                type="submit"
                className="px-6 h-12 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
