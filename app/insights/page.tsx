"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock blog data - will be replaced with Sanity CMS in Week 7
const BLOG_POSTS = [
  {
    id: 1,
    slug: "ai-workflow-automation-roi",
    title: "The ROI of AI Workflow Automation",
    excerpt: "How SMBs are saving 60% on operational time by automating repetitive workflows.",
    category: "Insights",
    author: "Tahmid",
    date: "2026-05-08",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442d019cecf8957bc3bae1ab2e71 ?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    slug: "voice-ai-customer-service",
    title: "Voice AI is Eating Customer Service",
    excerpt: "Real numbers on how voice agents are replacing human support teams — and what it means for hiring.",
    category: "AI Trends",
    author: "Kaizenext Team",
    date: "2026-05-01",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1676632636058-2d0a32e37b0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    slug: "shipping-vs-perfection",
    title: "Shipping Beats Perfection",
    excerpt: "Why we'd rather ship a 70% solution today than wait for the perfect one. A manifesto.",
    category: "Philosophy",
    author: "Tahmid",
    date: "2026-04-24",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    slug: "computer-vision-real-world",
    title: "Computer Vision in the Real World",
    excerpt: "Beyond benchmarks: what it actually takes to deploy vision systems in production.",
    category: "Technical",
    author: "Kaizenext Team",
    date: "2026-04-17",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442d019cecf8957bc3bae1ab2e71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    slug: "ads-waste-problem",
    title: "The $10B Ad Waste Problem Nobody Talks About",
    excerpt: "How SMBs are hemorrhaging money on Facebook and Google ads, and what to do about it.",
    category: "Insights",
    author: "Tahmid",
    date: "2026-04-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8c208?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    slug: "ai-safety-compliance",
    title: "AI Safety & Compliance: Non-Negotiable",
    excerpt: "How we bake security, GDPR, and data retention into every system from day one.",
    category: "Technical",
    author: "Kaizenext Team",
    date: "2026-04-03",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1633356713697-146c18b76ca7?auto=format&fit=crop&q=80&w=800",
  },
];

const FEATURED_POST = BLOG_POSTS[0];
const RECENT_POSTS = BLOG_POSTS.slice(1, 7);

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-24 w-full">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden py-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-kx-orange font-mono text-xs font-medium tracking-[0.12em] uppercase mb-6">
                The Knowledge Base
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Insights from the <span className="italic font-serif text-kx-orange">field.</span>
              </h1>
              <p className="text-lg md:text-xl text-kx-dark-muted max-w-2xl mx-auto leading-relaxed">
                Real stories from deploying AI in production. No theory. Just what works.
              </p>

              {/* Newsletter Form */}
              <div className="mt-12 max-w-md mx-auto">
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white placeholder-kx-dark-muted/50 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 h-12 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-kx-dark-muted/70 mt-3">New post every other week. No spam.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="relative py-24 md:py-32">
          <div className="w-full max-w-6xl mx-auto px-6">
            <span className="inline-block text-kx-orange font-mono text-xs font-medium tracking-[0.12em] uppercase mb-8">
              Featured
            </span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-kx-dark-border group">
                <img
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kx-surface via-transparent opacity-40" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-kx-orange/10 border border-kx-orange/30 text-xs font-mono font-bold text-kx-orange uppercase tracking-wide mb-4">
                    {FEATURED_POST.category}
                  </span>
                  <h2 className="text-4xl font-bold mb-4 leading-tight">
                    {FEATURED_POST.title}
                  </h2>
                  <p className="text-kx-dark-muted text-lg leading-relaxed mb-6">
                    {FEATURED_POST.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 pb-6 border-b border-kx-dark-border">
                  <div>
                    <p className="text-sm font-bold">{FEATURED_POST.author}</p>
                    <p className="text-xs text-kx-dark-muted">{FEATURED_POST.date}</p>
                  </div>
                  <span className="text-xs text-kx-dark-muted ml-auto">{FEATURED_POST.readTime}</span>
                </div>

                <Link
                  href={`/insights/${FEATURED_POST.slug}`}
                  className="inline-flex items-center gap-2 text-kx-orange font-bold hover:text-kx-orange-400 transition-colors group"
                >
                  Read the story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="relative py-24 md:py-32 bg-kx-surface-950/30">
          <div className="w-full max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Latest stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RECENT_POSTS.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Link href={`/insights/${post.slug}`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-kx-dark-border mb-6 group-hover:border-kx-orange/20 transition-all">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <span className="inline-block px-2 py-1 rounded-full bg-kx-orange/10 border border-kx-orange/30 text-xs font-mono font-bold text-kx-orange uppercase tracking-wide mb-3">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-kx-orange transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-kx-dark-muted text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-kx-dark-muted/70">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex items-center justify-center gap-4 mt-16 pt-12 border-t border-kx-dark-border/50">
              <button className="px-4 py-2 rounded-lg border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/20 hover:text-kx-white transition-all">
                ← Previous
              </button>
              <span className="text-sm text-kx-dark-muted">Page 1 of 4</span>
              <button className="px-4 py-2 rounded-lg border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/20 hover:text-kx-white transition-all">
                Next →
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
