"use client";

import { FinalCTA } from "@/components/final-cta";
import { motion, AnimatePresence, Variants} from "motion/react";
import { ArrowRight, Check, ChevronDown, ChevronRight, Zap, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CountUp from "@/components/counter-up";

// ── Animation variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIAdAutomationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        <HeroSection />
        <BenefitsStrip />
        <BeforeAfterSection />
        <HowItWorksSection />
        <LeadMagnetSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kx-orange-400/10 border border-kx-orange-400/20 text-xs font-mono font-medium tracking-[0.12em] uppercase text-kx-orange-400">
                <Zap className="w-3 h-3" /> Solutions · Ad Automation
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Every wasted ad dollar, <br />
              <span className="text-kx-orange italic font-serif">flagged</span> on WhatsApp.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-kx-dark-muted max-w-xl leading-relaxed">
              Real-time alerts when campaigns stop converting. Auto-pause underperformers. Weekly insights. For SMBs spending $1K–$20K/month on Meta and Google ads.
            </motion.p>

            <motion.div variants={itemVariants} className="w-full flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <button className="w-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold py-4 px-8 rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95  gap-2 group flex items-center justify-center">
                  Book a demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="bg-kx-white/5 border border-white/10 hover:bg-kx-white/10 text-kx-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-md">
                Free ad audit
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center"
          >
            <IPhoneMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IPhoneMock() {
  return (
    <div className="relative mx-auto border-[6px] border-kx-surface-950/90 rounded-[3rem] h-150 w-full max-w-75 bg-kx-surface-950 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10 flex flex-col">

      {/* Hardware: dynamic island / camera pill */}
      <div className="absolute top-0 inset-x-0 h-7 bg-kx-surface-950/90 rounded-b-3xl w-35 mx-auto z-30 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-black/50 border border-white/5" />
      </div>

      {/* Hardware: side buttons */}
      <div className="absolute -right-1.5 top-32 w-1.5 h-12 bg-kx-surface-800 rounded-r-md" />
      <div className="absolute -left-1.5 top-24 w-1.5 h-10 bg-kx-surface-800 rounded-l-md" />
      <div className="absolute -left-1.5 top-40 w-1.5 h-10 bg-kx-surface-800 rounded-l-md" />

      {/* Screen wallpaper */}
      <div className="absolute inset-0 bg-linear-to-b from-kx-surface-900/90 to-kx-surface-950/95" />

      {/* WhatsApp UI */}
      <div className="relative z-20 flex flex-col h-full w-full">

        {/* WhatsApp header */}
        <div className="bg-[#128C7E]/90 backdrop-blur-xl pt-10 pb-3 px-4 flex items-center gap-3 shadow-lg">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
            <div className="w-full h-full bg-linear-to-br from-kx-orange-400 to-kx-orange-600 flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold leading-tight">Kaizen AI</div>
            <div className="text-white/80 text-[11px] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Online
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#0b141a] opacity-90" />

          {/* Message 1 — ROAS alert */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.45 }}
            className="relative z-10 bg-[#202C33] rounded-2xl rounded-tl-sm p-3 shadow-md w-[88%] border border-white/5"
          >
            <span className="flex items-center gap-1.5 text-red-400 font-bold text-[11px] mb-1.5">
              <ShieldAlert className="w-3 h-3" /> ROAS Warning
            </span>
            <p className="text-[12px] text-[#e9edef] leading-snug">
              <span className="font-semibold text-white">BF_Google_Search</span> ROAS dropped{" "}
              <span className="text-red-400 font-bold">4.2x → 1.8x</span> in 90 min.
              Burning <span className="text-red-400 font-bold">$34/hr</span> with no conversions.
            </p>
            <p className="text-[9px] text-[#8696a0] mt-1.5 text-right">09:14 AM</p>
          </motion.div>

          {/* Message 2 — auto-pause */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: "spring", bounce: 0.45 }}
            className="relative z-10 bg-[#202C33] rounded-2xl rounded-tl-sm p-3 shadow-md w-[88%] border border-white/5"
          >
            <span className="flex items-center gap-1.5 text-[#00A884] font-bold text-[11px] mb-1.5">
              <CheckCircle2 className="w-3 h-3" /> Auto-Paused
            </span>
            <p className="text-[12px] text-[#e9edef] leading-snug">
              3 ad sets paused. Saved{" "}
              <span className="font-bold text-[#00A884]">$892</span> today.
              Budget shifted → <span className="font-semibold text-white">Retargeting_Warm</span>{" "}
              <span className="text-[#00A884]">(ROAS 6.1x)</span>.
            </p>
            <p className="text-[9px] text-[#8696a0] mt-1.5 text-right">09:15 AM</p>
          </motion.div>

          {/* Message 3 — weekly snapshot */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.0, type: "spring", bounce: 0.45 }}
            className="relative z-10 bg-[#202C33] rounded-2xl rounded-tl-sm p-3 shadow-md w-[88%] border border-white/5"
          >
            <span className="flex items-center gap-1.5 text-kx-orange-400 font-bold text-[11px] mb-1.5">
              📊 Weekly Summary
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[11px]">
              <span className="text-[#8696a0]">Spend saved</span>
              <span className="text-[#00A884] font-bold">$4,210</span>
              <span className="text-[#8696a0]">Avg ROAS</span>
              <span className="text-white font-bold">3.9x → 5.4x</span>
              <span className="text-[#8696a0]">Alerts fired</span>
              <span className="text-white font-bold">17</span>
            </div>
            <p className="text-[9px] text-[#8696a0] mt-1.5 text-right">Mon 09:00</p>
          </motion.div>

        </div>

        {/* Input bar */}
        <div className="bg-[#202C33] p-3 flex items-center gap-2 border-t border-white/5 z-20 pb-8">
          <div className="flex-1 bg-[#2A3942] rounded-full h-10 flex items-center px-4">
            <span className="text-[#8696a0] text-[13px]">Message...</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shrink-0 shadow-md">
            <svg viewBox="0 0 24 24" width="20" height="20" className="text-[#111b21] fill-current">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── Benefits Strip ────────────────────────────────────────────────────────────

function BenefitsStrip() {
  const stats = [
    { prefix: "", to: 23, decimals: 0, suffix: "%", label: "AVERAGE WASTED SPEND CUT" },
    { prefix: "", to: 48, decimals: 0, suffix: "h", label: "FASTER DETECTION (vs agencies)" },
    { prefix: "$", to: 4.2, decimals: 1, suffix: "K", label: "AVERAGE MONTHLY SAVINGS" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-kx-surface-950/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-4xl md:text-5xl font-black mb-3 text-kx-white group-hover:text-kx-orange transition-colors">
                <CountUp to={stat.to} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-mono font-medium tracking-[0.12em] text-kx-dark-muted uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Before & After Simulator ──────────────────────────────────────────────────

function MetricBar({ label, value, maxValue, color }: { label: string; value: number; maxValue: number; color: string }) {
  const percentage = (value / maxValue) * 100;
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-kx-dark-muted uppercase tracking-wide">{label}</span>
        <span className="text-sm font-bold text-kx-white"><CountUp to={value} /></span>
      </div>
      <div className="w-full h-2 bg-kx-surface-950/50 rounded-full overflow-hidden border border-kx-dark-border/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
}

function BeforeAfterSection() {
  const [metrics, setMetrics] = useState({
    clicks: 250,
    impressions: 12500,
    budget: 5000,
  });

  const handleChange = (key: keyof typeof metrics, value: number) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  // AFTER metrics with improvements
  const afterMetrics = {
    clicks: Math.round(metrics.clicks * 1.1),
    impressions: Math.round(metrics.impressions * 1.08),
    budget: Math.round(metrics.budget * 0.9),
  };

  const clicksImprovement = Math.round(((afterMetrics.clicks - metrics.clicks) / metrics.clicks) * 100);
  const impressionsImprovement = Math.round(((afterMetrics.impressions - metrics.impressions) / metrics.impressions) * 100);
  const budgetReduction = Math.round(((metrics.budget - afterMetrics.budget) / metrics.budget) * 100);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">Metrics Simulator</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Your ads <span className="italic font-serif text-kx-orange">optimized</span>
          </h2>
          <p className="text-kx-dark-muted max-w-2xl mx-auto text-lg">Adjust your metrics and see how Kaizenext AI transforms your campaigns</p>
        </motion.div>

        {/* Input Sliders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-kx-surface-raised/40 backdrop-blur-sm border border-kx-dark-border rounded-2xl p-8 mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-bold mb-8 text-kx-orange text-center">Adjust your current metrics</h3>

          <div className="space-y-8">
            {[
              { key: "clicks", label: "Monthly Clicks", max: 1000, step: 10 },
              { key: "impressions", label: "Monthly Impressions", max: 100000, step: 1000 },
              { key: "budget", label: "Ad Budget ($)", max: 20000, step: 100 },
            ].map((field) => (
              <div key={field.key}>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-mono text-kx-dark-muted uppercase tracking-wide">
                    {field.label}
                  </label>
                  <span className="text-2xl font-bold text-kx-orange">
                    {field.key === "budget" ? "$" : ""}{metrics[field.key as keyof typeof metrics].toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={field.max}
                  step={field.step}
                  value={metrics[field.key as keyof typeof metrics]}
                  onChange={(e) => handleChange(field.key as keyof typeof metrics, Number(e.target.value))}
                  className="w-full h-3 bg-kx-surface-950 rounded-full appearance-none cursor-pointer accent-kx-orange"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flow: Before → Kaizenext AI → After */}
        <div className="w-full flex flex-col xl:flex-row items-center gap-0 mb-16">

          {/* ── BEFORE CARD ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative rounded-3xl border-2 border-red-500/40 bg-linear-to-br from-red-500/10 to-red-600/5 p-7 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-[80px] -z-10" />
            <div className="flex items-center gap-2 mb-7">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-base font-bold text-red-400 font-mono uppercase tracking-wider">Before</h3>
              <span className="ml-auto text-[11px] text-red-400/60 font-mono">Without Kaizenext</span>
            </div>
            <div className="space-y-5">
              <MetricBar label="Clicks" value={metrics.clicks} maxValue={1000} color="bg-red-500/50" />
              <MetricBar label="Impressions" value={metrics.impressions} maxValue={100000} color="bg-red-500/50" />
              <MetricBar label="Budget" value={metrics.budget} maxValue={20000} color="bg-red-500/50" />
            </div>
            <div className="mt-6 pt-5 border-t border-red-500/20 grid grid-cols-2 gap-3">
              <div className="bg-red-500/5 rounded-xl p-3">
                <p className="text-[11px] text-kx-dark-muted mb-1">Cost Per Click</p>
                <p className="font-bold text-red-400 text-lg">
                  <CountUp to={metrics.budget / metrics.clicks} decimals={2} prefix="$" />
                </p>
              </div>
              <div className="bg-red-500/5 rounded-xl p-3">
                <p className="text-[11px] text-kx-dark-muted mb-1">CTR</p>
                <p className="font-bold text-red-400 text-lg">
                  <CountUp to={(metrics.clicks / metrics.impressions) * 100} decimals={2} suffix="%" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── FLOW CONNECTOR 1 ─────────────────────────────────────────── */}
          <div className="flex flex-col xl:flex-row items-center shrink-0 py-4 xl:py-0 xl:px-3">
            <div className="relative h-12 w-px xl:h-px xl:w-20 bg-kx-dark-border/40 overflow-hidden rounded-full">
              <motion.div
                animate={{ y: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                className="xl:hidden absolute inset-x-0 h-1/2 bg-linear-to-b from-transparent via-kx-orange/80 to-transparent"
              />
              <motion.div
                animate={{ x: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                className="hidden xl:block absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-kx-orange/80 to-transparent"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-kx-orange xl:hidden shrink-0" />
            <ChevronRight className="w-4 h-4 text-kx-orange hidden xl:block shrink-0" />
          </div>

          {/* ── KAIZENEXT AI NODE ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.45 }}
            className="shrink-0 flex flex-col items-center gap-3 py-2 xl:py-0"
          >
            <div className="relative w-32 h-32 flex items-center justify-center">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-kx-orange/25"
                  style={{ inset: -(i + 1) * 12 }}
                  animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0, 0.45] }}
                  transition={{ duration: 2.4, delay: i * 0.9, repeat: Infinity }}
                />
              ))}
              <motion.div
                animate={{ boxShadow: ["0 0 18px rgba(232,89,58,0.25)", "0 0 48px rgba(232,89,58,0.55)", "0 0 18px rgba(232,89,58,0.25)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 w-20 h-20 rounded-full border-2 border-kx-orange bg-kx-surface-950 flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-kx-orange" />
              </motion.div>
            </div>
            <div className="text-center -mt-2">
              <p className="text-sm font-bold text-kx-white leading-tight">Kaizenext</p>
              <p className="text-[10px] font-mono text-kx-orange uppercase tracking-widest">AI Ad Automation</p>
            </div>
          </motion.div>

          {/* ── FLOW CONNECTOR 2 ─────────────────────────────────────────── */}
          <div className="flex flex-col xl:flex-row items-center shrink-0 py-4 xl:py-0 xl:px-3">
            <div className="relative h-12 w-px xl:h-px xl:w-20 bg-kx-dark-border/40 overflow-hidden rounded-full">
              <motion.div
                animate={{ y: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: 0.3 }}
                className="xl:hidden absolute inset-x-0 h-1/2 bg-linear-to-b from-transparent via-kx-orange/80 to-transparent"
              />
              <motion.div
                animate={{ x: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: 0.3 }}
                className="hidden xl:block absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-kx-orange/80 to-transparent"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-kx-orange xl:hidden shrink-0" />
            <ChevronRight className="w-4 h-4 text-kx-orange hidden xl:block shrink-0" />
          </div>

          {/* ── AFTER CARD ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 w-full relative rounded-3xl border-2 border-green-500/40 bg-linear-to-br from-green-500/10 to-green-600/5 p-7 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-[80px] -z-10" />
            <div className="flex items-center gap-2 mb-7">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-base font-bold text-green-400 font-mono uppercase tracking-wider">After</h3>
              <span className="ml-auto text-[11px] text-green-400/60 font-mono">With Kaizenext AI</span>
            </div>
            <div className="space-y-5">
              {[
                { label: "Clicks",      value: afterMetrics.clicks,      imp: clicksImprovement,      dir: "↑", sign: "+", prefix: "" },
                { label: "Impressions", value: afterMetrics.impressions,  imp: impressionsImprovement,  dir: "↑", sign: "+", prefix: "" },
                { label: "Budget",      value: afterMetrics.budget,       imp: budgetReduction,        dir: "↓", sign: "-", prefix: "$" },
              ].map((row, idx) => (
                <div key={row.label} className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono text-kx-dark-muted uppercase tracking-wide">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                        {row.dir} <CountUp to={row.imp} prefix={row.sign} suffix="%" />
                      </span>
                      <span className="text-sm font-bold text-kx-white">
                        <CountUp to={row.value} prefix={row.prefix} />
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-kx-surface-950/50 rounded-full overflow-hidden border border-green-500/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: row.label === "Budget" ? `${(afterMetrics.budget / metrics.budget) * 100}%` : "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                      className="h-full bg-green-500/50 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-green-500/20 grid grid-cols-2 gap-3">
              <div className="bg-green-500/5 rounded-xl p-3">
                <p className="text-[11px] text-kx-dark-muted mb-1">Cost Per Click</p>
                <p className="font-bold text-green-400 text-lg">
                  <CountUp to={afterMetrics.budget / afterMetrics.clicks} decimals={2} prefix="$" />
                </p>
              </div>
              <div className="bg-green-500/5 rounded-xl p-3">
                <p className="text-[11px] text-kx-dark-muted mb-1">CTR</p>
                <p className="font-bold text-green-400 text-lg">
                  <CountUp to={(afterMetrics.clicks / afterMetrics.impressions) * 100} decimals={2} suffix="%" />
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              sign: "+", to: clicksImprovement,
              label: "More Clicks",
              amount: `+${afterMetrics.clicks - metrics.clicks} clicks`,
            },
            {
              sign: "-", to: budgetReduction,
              label: "Budget Saved",
              amount: `Save $${(metrics.budget - afterMetrics.budget).toLocaleString()}`,
            },
            {
              sign: "+", to: impressionsImprovement,
              label: "More Impressions",
              amount: `+${(afterMetrics.impressions - metrics.impressions).toLocaleString()}`,
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="p-6 rounded-2xl bg-linear-to-br from-kx-orange-400/10 to-kx-orange-600/10 border border-kx-orange/30 text-center"
            >
              <div className="text-4xl font-black text-kx-orange mb-2">
                <CountUp to={benefit.to} prefix={benefit.sign} suffix="%" />
              </div>
              <div className="text-sm font-bold text-kx-white mb-1">{benefit.label}</div>
              <div className="text-xs text-kx-dark-muted">{benefit.amount}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95 cursor-pointer">
              See Your Results <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Connect Accounts",
      desc: "Link your Meta/Google ads via OAuth in 5 minutes. No credit cards, no complex integrations.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "Real-time Monitoring",
      desc: "We analyze your campaigns 24/7, spot performance drops in minutes, not days.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Smart Alerts",
      desc: "Get WhatsApp/Slack/email alerts when ROAS drops, conversions tank, or budgets bleed.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      num: "04",
      title: "Auto Actions",
      desc: "Automatically pause failing campaigns. No human in the loop. Pure speed.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-kx-surface-950/30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="w-full  mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Connect once. Get alerts <span className="italic font-serif text-kx-orange">forever.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">4 simple steps to stop bleeding money on bad ads.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+1px)] w-6 h-px bg-kx-dark-border z-10" />
              )}

              <div
                className="h-full p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-500 group-hover:border-kx-orange/20 flex flex-col gap-6"
                style={{
                  boxShadow: `0 0 0 0 ${step.glow}`,
                  transition: "box-shadow 0.4s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${step.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${step.glow}`)}
              >
                <div className={cn("self-start px-3 py-1 rounded-full text-xs font-mono font-bold border", step.accent)}>
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-kx-dark-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



// ── Lead Magnet ───────────────────────────────────────────────────────────────

function LeadMagnetSection() {
  const [auditEmail, setAuditEmail] = useState("");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Get a free ad audit</h2>
            <p className="text-lg text-kx-dark-muted mb-6 leading-relaxed">
              Drop your ad account below. We&apos;ll analyze your campaigns in 30 min and send a personalized PDF report + Loom video.
            </p>
            <ul className="space-y-3">
              {["ROAS breakdown by campaign", "Wasted spend analysis", "3 actionable improvements", "30-min follow-up option"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-kx-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-kx-surface-raised/40 border border-kx-dark-border rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-mono font-medium text-kx-dark-muted uppercase tracking-wide mb-2 block">Email</label>
                <input
                  type="email"
                  value={auditEmail}
                  onChange={(e) => setAuditEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white placeholder-kx-dark-muted/50 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-mono font-medium text-kx-dark-muted uppercase tracking-wide mb-2 block">Ad Platform</label>
                <select className="w-full h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all">
                  <option value="">Select...</option>
                  <option value="meta">Meta (Facebook/Instagram)</option>
                  <option value="google">Google Ads</option>
                  <option value="both">Both</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95 mt-4 flex items-center justify-center gap-2 group"
              >
                Get Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-kx-dark-muted/70 text-center">
                Report within 24 hours. No credit card required.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How does pricing work?",
    a: "We bill monthly based on your ad spend tier. Starter ($1K–$5K/mo) = $149/mo. Growth ($5K–$20K/mo) = $449/mo. Scale ($20K+/mo) = $1,290/mo. No setup fees. Cancel anytime.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. First 30 days = 100% refund if unsatisfied. After that, cancel monthly with no penalty.",
  },
  {
    q: "How long does onboarding take?",
    a: "Connect via OAuth (5 min). Live data arrives within 1 hour. WhatsApp alerts start immediately.",
  },
  {
    q: "Is my ad data secure?",
    a: "Yes. SOC 2 Type II certified. Data encrypted in transit and at rest. API tokens read-only. We never store credentials.",
  },
  {
    q: "Do you work with Shopify/WooCommerce?",
    a: "Not directly yet, but we integrate via Google Analytics or Meta Conversions API. Custom connectors available for enterprise.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,89,58,0.04),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-14">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Common <span className="italic font-serif text-kx-orange">questions.</span>
          </h2>
          <p className="text-kx-dark-muted">Everything you&apos;re wondering, answered honestly.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                open === i
                  ? "border-kx-orange/30 bg-kx-surface-raised shadow-[0_0_30px_rgba(232,89,58,0.08)]"
                  : "border-kx-dark-border bg-kx-surface-raised/30 hover:border-kx-dark-border/80"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <span className={cn(
                  "font-bold text-base transition-colors",
                  open === i ? "text-kx-white" : "text-kx-dark-ink group-hover:text-kx-white"
                )}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors",
                    open === i
                      ? "border-kx-orange bg-kx-orange text-white"
                      : "border-kx-dark-border text-kx-dark-muted group-hover:border-white/20"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-kx-dark-muted leading-relaxed border-t border-kx-dark-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
