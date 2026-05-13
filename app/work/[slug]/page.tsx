"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Copy, Check, Clock, Tag, User } from "lucide-react";
import Link from "next/link";
import { useState, use } from "react";

import {
  getCaseStudy,
  hasDetailPage,
  type Metric,
  type ResultRow,
} from "@/lib/case-studies";

// ── Sub-components ─────────────────────────────────────────────────────────────

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex-1 min-w-0 p-5 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border text-center">
      <p className="text-3xl font-bold text-kx-white mb-1">{metric.value}</p>
      <p className="text-sm font-semibold text-kx-white/80">{metric.label}</p>
      {metric.sublabel && <p className="text-xs text-kx-dark-muted mt-0.5">{metric.sublabel}</p>}
    </div>
  );
}

function ResultsTable({ rows }: { rows: ResultRow[] }) {
  const isBefore = rows[0]?.before !== undefined;
  return (
    <div className="rounded-2xl border border-kx-dark-border overflow-hidden">
      <div className="grid grid-cols-3 text-xs font-semibold text-kx-dark-muted uppercase tracking-wider bg-kx-surface-950/60 px-5 py-3 border-b border-kx-dark-border">
        <span>Metric</span>
        <span className="text-center">{isBefore ? "Before" : "Target"}</span>
        <span className="text-center text-kx-orange">{isBefore ? "After" : "Achieved"}</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.metric}
          className={`grid grid-cols-3 items-center px-5 py-3.5 text-sm ${i < rows.length - 1 ? "border-b border-kx-dark-border/60" : ""}`}
        >
          <span className="text-kx-dark-muted">{row.metric}</span>
          <span className="text-center text-kx-white/60">{row.before ?? row.target}</span>
          <span className="text-center font-semibold text-kx-orange">{row.after ?? row.achieved}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const study = getCaseStudy(slug);
  const [copied, setCopied] = useState(false);

  if (!study || !hasDetailPage(study)) {
    return (
      <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark items-center justify-center px-6">
        <p className="text-kx-dark-muted mb-2">Page not found</p>
        <h1 className="text-4xl font-bold mb-6">Case study not found</h1>
        <Link href="/work" className="text-kx-orange hover:text-kx-orange-400 transition-colors font-semibold">
          ← Back to all work
        </Link>
      </div>
    );
  }

  // Narrowed by hasDetailPage above — these are guaranteed present.
  const metrics = study.metrics!;
  const challenge = study.challenge!;
  const solution = study.solution!;
  const results = study.results!;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">

        {/* ── Hero image ────────────────────────────────────────────────────── */}
        <section className="relative w-full h-[50vh] min-h-80 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.image} alt={study.detailTitle ?? study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-kx-surface via-kx-surface/50 to-kx-surface/10" />

          {/* Back button */}
          <div className="absolute top-8 left-0 right-0 px-6">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kx-surface/70 backdrop-blur-sm border border-kx-dark-border text-sm text-kx-dark-muted hover:text-kx-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All work
              </Link>
            </div>
          </div>

          {/* Category + title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="max-w-5xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-kx-orange/15 border border-kx-orange/30 text-xs font-bold text-kx-orange uppercase tracking-widest mb-3">
                {study.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                {study.detailTitle ?? study.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Meta bar ─────────────────────────────────────────────────────── */}
        <section className="border-b border-kx-dark-border bg-kx-surface-950/40 px-6 py-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-kx-dark-muted">
              <User className="w-3.5 h-3.5" />
              <span className="font-semibold text-kx-white">{study.client}</span>
            </div>
            {study.date && (
              <div className="flex items-center gap-2 text-sm text-kx-dark-muted">
                <Clock className="w-3.5 h-3.5" />
                {study.date}
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-kx-dark-muted">
              <Tag className="w-3.5 h-3.5" />
              {study.category}
            </div>
            <div className="ml-auto">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-kx-dark-border text-xs text-kx-dark-muted hover:text-kx-white hover:border-kx-orange/30 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          </div>
        </section>

        {/* ── Main content ──────────────────────────────────────────────────── */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto space-y-20">

            {/* Summary */}
            {study.summary && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-kx-dark-muted leading-relaxed max-w-3xl"
              >
                {study.summary}
              </motion.p>
            )}

            {/* Key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {metrics.map((m) => <MetricCard key={m.label} metric={m} />)}
            </motion.div>

            <div className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-kx-orange uppercase tracking-widest mb-2">01 · The Challenge</p>
              <h2 className="text-2xl font-bold text-kx-white mb-5">What needed solving</h2>
              <p className="text-kx-dark-muted leading-relaxed mb-6">{challenge.overview}</p>
              <div className="p-6 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border space-y-3">
                {challenge.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 w-5 h-5 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    <span className="text-sm text-kx-dark-muted">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-kx-orange uppercase tracking-widest mb-2">02 · The Solution</p>
              <h2 className="text-2xl font-bold text-kx-white mb-5">How we built it</h2>
              <p className="text-kx-dark-muted leading-relaxed mb-8">{solution.overview}</p>

              {/* Steps */}
              <div className="space-y-4 mb-8">
                {solution.steps.map((step) => (
                  <div key={step.num} className="flex gap-5 p-5 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/20 hover:border-kx-orange/20 transition-colors">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center text-xs font-bold text-kx-orange">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-semibold text-kx-white mb-1">{step.title}</p>
                      <p className="text-sm text-kx-dark-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full bg-kx-surface-700/50 border border-kx-dark-border text-sm text-kx-dark-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-kx-orange uppercase tracking-widest mb-2">03 · The Results</p>
              <h2 className="text-2xl font-bold text-kx-white mb-5">Measurable outcomes</h2>
              <p className="text-kx-dark-muted leading-relaxed mb-8">{results.overview}</p>

              <ResultsTable rows={results.rows} />

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.impact.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-kx-orange/5 border border-kx-orange/15">
                    <span className="mt-1.5 w-4 h-4 rounded-full bg-kx-orange/20 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-kx-orange" />
                    </span>
                    <span className="text-sm text-kx-dark-muted">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline + Next steps */}
            {(study.timeline || study.nextSteps) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {study.timeline && (
                  <div className="p-6 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border">
                    <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-2">Timeline</p>
                    <p className="text-kx-white font-semibold">{study.timeline}</p>
                  </div>
                )}
                {study.nextSteps && (
                  <div className="p-6 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border">
                    <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-2">What&apos;s next</p>
                    <p className="text-kx-white font-semibold">{study.nextSteps}</p>
                  </div>
                )}
              </motion.div>
            )}

            <div className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

            {/* Related projects */}
            {study.relatedProjects && study.relatedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-6">Related work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.relatedProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="group flex items-center justify-between p-5 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/20 hover:border-kx-orange/25 hover:shadow-[0_0_24px_rgba(232,89,58,0.06)] transition-all"
                    >
                      <div>
                        <span className="text-xs font-bold text-kx-orange uppercase tracking-wide">{p.category}</span>
                        <p className="font-semibold text-kx-white mt-1 group-hover:text-kx-orange transition-colors">{p.title}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-kx-dark-muted group-hover:text-kx-orange group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
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
                Book a free 30-minute discovery call and let&apos;s explore what&apos;s possible for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200"
                >
                  Book a call
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-3.5 border border-kx-dark-border text-kx-white font-bold rounded-xl hover:border-kx-orange/50 hover:text-kx-orange transition-all duration-200"
                >
                  View all work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
