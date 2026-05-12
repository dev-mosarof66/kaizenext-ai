"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};


const CASE_STUDIES = [
  {
    id: "saudi-football",
    title: "AI-Powered Player Tracking",
    client: "Saudi Football League",
    tagline: "22 players tracked per second · 97% detection accuracy · $2M broadcast revenue",
    outcome: "96% tracking accuracy across 500+ matches in 6 stadiums.",
    category: "Computer Vision",
    stat: { value: "97%", label: "Detection accuracy" },
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200&h=675",
    slug: "saudi-football-player-tracking",
    featured: true,
  },
  {
    id: "ecommerce-voice",
    title: "24/7 Customer Support Voice Agent",
    client: "E-commerce Retailer",
    tagline: "Handles 10K+ calls/month · 80% cost reduction",
    outcome: "Response time cut from 4.2 hours to 45 seconds. Saves $90K/year.",
    category: "Voice AI",
    stat: { value: "80%", label: "Cost reduction" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=675",
    slug: "ecommerce-voice-agent",
  },
  {
    id: "saas-automation",
    title: "Invoice Processing Automation",
    client: "B2B SaaS Platform",
    tagline: "500+ invoices/week · 160 hours saved · $30K/month freed",
    outcome: "Processing time cut from 3-5 days to 2 hours, error rate from 15% to 1.2%.",
    category: "Workflow Automation",
    stat: { value: "160h", label: "Saved per week" },
    image: "https://images.unsplash.com/photo-1578642387509-8ad9d849b04d?auto=format&fit=crop&q=80&w=1200&h=675",
    slug: "saas-invoice-automation",
  },
  {
    id: "startup-ai",
    title: "RAG-Based Knowledge Assistant",
    client: "EdTech Startup",
    tagline: "Built in 5 weeks · 10K+ daily users · 94% query accuracy",
    outcome: "Custom AI platform live in 5 weeks, now serving 10K+ students daily.",
    category: "Custom AI",
    stat: { value: "5 wks", label: "To production" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=675",
    slug: "edtech-knowledge-assistant",
  },
  {
    id: "retail-ads",
    title: "Ad Spend Optimization Engine",
    client: "Multi-Channel Retailer",
    tagline: "Real-time waste detection · $4.2K/month saved · zero manual work",
    outcome: "Detected wasted spend in real-time, $4.2K/month saved, zero manual intervention.",
    category: "Ad Automation",
    stat: { value: "$4.2K", label: "Saved per month" },
    image: "https://images.unsplash.com/photo-1460925895917-adf4e9a5a94f?auto=format&fit=crop&q=80&w=1200&h=675",
    slug: "retail-ad-optimization",
  },
  {
    id: "healthcare-voice",
    title: "Appointment Scheduling Voice Bot",
    client: "Healthcare Provider",
    tagline: "12 languages · 500+ bookings/week · 24/7 availability",
    outcome: "Scheduled 500+ appointments/week across 12 languages, 24/7.",
    category: "Voice AI",
    stat: { value: "12", label: "Languages" },
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?auto=format&fit=crop&q=80&w=1200&h=675",
    slug: "healthcare-voice-scheduler",
  },
];

const CATEGORIES = ["All", "Workflow Automation", "Voice AI", "Computer Vision", "Custom AI", "Ad Automation"];

const HERO_STATS = [
  { value: "6", label: "Case studies" },
  { value: "4+", label: "Industries" },
  { value: "$94K+", label: "Annual savings per client (avg)" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 md:pt-40 pb-20 px-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 w-150 h-150 rounded-full bg-kx-surface-700/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-150 h-150 rounded-full bg-kx-orange-600/8 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-size-[32px_32px]" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center gap-8"
            >
              <motion.div variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kx-surface-950/80 border border-kx-dark-border text-xs text-kx-dark-muted mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-kx-orange animate-pulse" />
                  Selected work
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
                  Work we&apos;ve <span className="italic font-serif text-kx-orange">shipped</span>
                </h1>
                <p className="text-lg text-kx-dark-muted max-w-2xl mx-auto leading-relaxed">
                  Real AI solutions solving real problems. From voice agents to computer vision, see how we turn ambitious ideas into measurable outcomes.
                </p>
              </motion.div>

              {/* Stats strip */}
              <motion.div variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 } },
              }} className="flex flex-wrap justify-center gap-px mt-4">
                {HERO_STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-8 py-4 ${i === 1 ? "border-x border-kx-dark-border" : ""}`}
                  >
                    <p className="text-3xl font-bold text-kx-white">{stat.value}</p>
                    <p className="text-xs text-kx-dark-muted mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Filter ───────────────────────────────────────────────────────── */}
        <div className="px-6 pb-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-kx-orange text-white shadow-[0_4px_16px_rgba(232,89,58,0.3)]"
                      : "border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/40 hover:text-kx-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Case Study Grid ───────────────────────────────────────────────── */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {filtered.map((study, i) => {
                  const isFeatured = study.featured && activeCategory === "All" && i === 0;
                  return (
                    <motion.div
                      key={study.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      className={isFeatured ? "md:col-span-3" : ""}
                    >
                      <Link
                        href={`/work/${study.slug}`}
                        className={`group flex overflow-hidden rounded-2xl border border-kx-dark-border bg-kx-surface-raised/20 transition-all duration-300 hover:border-kx-orange/25 hover:shadow-[0_0_40px_rgba(232,89,58,0.07)] ${
                          isFeatured ? "flex-col md:flex-row h-auto md:h-95" : "flex-col h-full"
                        }`}
                      >
                        {/* Image */}
                        <div className={`relative overflow-hidden bg-kx-surface-950/50 shrink-0 ${isFeatured ? "w-full md:w-[55%] h-56 md:h-full" : "h-48"}`}>
                          <Image
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            width={500}
                            height={300}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-kx-surface via-kx-surface/20 to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-kx-surface/60" />
                          {/* Stat badge */}
                          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-kx-surface/80 backdrop-blur-sm border border-kx-dark-border">
                            <p className="text-lg font-bold text-kx-white leading-none">{study.stat.value}</p>
                            <p className="text-xs text-kx-dark-muted">{study.stat.label}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`flex flex-col justify-between p-6 ${isFeatured ? "md:p-10" : ""}`}>
                          <div>
                            <span className="inline-block px-2.5 py-1 rounded-full bg-kx-orange/10 border border-kx-orange/25 text-xs font-bold text-kx-orange uppercase tracking-wide mb-4">
                              {study.category}
                            </span>
                            <h3 className={`font-bold leading-tight mb-2 group-hover:text-kx-orange transition-colors ${isFeatured ? "text-3xl" : "text-lg"}`}>
                              {study.title}
                            </h3>
                            <p className="text-sm font-mono text-kx-dark-muted mb-4">{study.client}</p>
                            {isFeatured && (
                              <p className="text-sm text-kx-dark-muted/70 mb-4 leading-relaxed">{study.tagline}</p>
                            )}
                            <p className={`text-kx-dark-muted leading-relaxed ${isFeatured ? "text-base" : "text-sm line-clamp-2"}`}>
                              {study.outcome}
                            </p>
                          </div>
                          <div className={`flex items-center gap-2 text-kx-orange font-bold ${isFeatured ? "text-base mt-8" : "text-sm mt-6"}`}>
                            View case study
                            <ArrowRight className={`group-hover:translate-x-1.5 transition-transform ${isFeatured ? "w-4 h-4" : "w-3 h-3"}`} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <p className="text-kx-dark-muted text-lg">No case studies in this category yet.</p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-kx-orange hover:text-kx-orange-400 transition-colors font-semibold"
                >
                  View all work →
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 border-t border-kx-dark-border bg-kx-surface-950/30">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-kx-orange/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold text-kx-orange uppercase tracking-widest mb-4">Ready to ship?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Your story could be <span className="italic font-serif text-kx-orange">next</span>
              </h2>
              <p className="text-kx-dark-muted text-lg mb-10 max-w-lg mx-auto">
                Let&apos;s build something extraordinary. Book a free 30-minute discovery call to explore what&apos;s possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-3.5 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Book a call
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-3.5 border border-kx-dark-border text-kx-white font-bold rounded-xl hover:border-kx-orange/50 hover:text-kx-orange transition-all duration-200"
                >
                  Explore solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
