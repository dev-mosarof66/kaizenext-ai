"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { caseStudies as CASE_STUDIES } from "@/lib/case-studies";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const CATEGORIES = ["All", "Workflow Automation", "Voice AI", "Computer Vision", "Web & Mobile Apps", "Ad Automation"];

const HERO_STATS = [
  { value: "6", label: "Case studies" },
  { value: "4+", label: "Industries" },
  { value: "$94K+", label: "Annual savings per client (avg)" },
];

export default function WorkPage() {
  const router = useRouter();
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
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat
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

                  const handleClick = () => {
                    if (study.link) {
                      window.open(study.link, "_blank");
                    } else {
                      router.push(`/work/${study.slug}`);
                    }
                  }
                  return (
                    <motion.div
                      key={study.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      className={isFeatured ? "md:col-span-3" : ""}
                    >
                      <div
                        onClick={handleClick}
                        className={`group flex overflow-hidden rounded-2xl border border-kx-dark-border bg-kx-surface-raised/20 transition-all duration-300 hover:border-kx-orange/25 hover:shadow-[0_0_40px_rgba(232,89,58,0.07)] ${isFeatured ? "flex-col md:flex-row h-auto md:h-95" : "flex-col h-full"
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
                          <div onClick={handleClick} className={`flex items-center gap-2 text-kx-orange font-bold ${isFeatured ? "text-base mt-8" : "text-sm mt-6"}`}>
                            View
                            <ArrowRight className={`group-hover:translate-x-1.5 transition-transform ${isFeatured ? "w-4 h-4" : "w-3 h-3"}`} />
                          </div>
                        </div>
                      </div>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 md:size-150 bg-kx-orange/5 rounded-full blur-3xl" />
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
