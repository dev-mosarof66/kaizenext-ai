"use client";

import { FinalCTA } from "@/components/final-cta";
import { motion, AnimatePresence, Variants } from "motion/react";
import {
  ArrowRight, Check, ChevronDown, Monitor, Layers,
  BarChart3, ShoppingCart, Cpu,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import CountUp from "@/components/counter-up";


// ── Animation variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WebAppSolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        <HeroSection />
        <BenefitsStrip />
        <ServicesSection />
        <HowItWorksSection />
        <TechStackSection />
        <LeadMagnetSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  );
}

// ── Browser Mock ──────────────────────────────────────────────────────────────

function BrowserMock() {
  const bars = [42, 68, 51, 85, 63, 91, 74];
  const feed = [
    { user: "Sara K.", action: "Upgraded to Pro", time: "just now", dot: "bg-green-400" },
    { user: "Ahmed R.", action: "Created workspace", time: "2m ago", dot: "bg-blue-400" },
    { user: "Ming L.", action: "API key generated", time: "5m ago", dot: "bg-purple-400" },
  ];

  return (
    <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl ring-1 ring-white/5">
      {/* Browser chrome */}
      <div className="bg-[#1a1a2e] border-b border-white/5 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-[#0d0d18] rounded-md h-6 flex items-center px-3 border border-white/5">
          <span className="text-[10px] font-mono text-white/30">app.yoursaas.com/dashboard</span>
        </div>
      </div>

      {/* App top nav */}
      <div className="bg-[#12121f] border-b border-white/5 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-md bg-kx-orange flex items-center justify-center">
            <span className="text-white font-black text-[9px]">K</span>
          </div>
          <div className="flex gap-4">
            {["Overview", "Users", "Revenue", "Settings"].map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "text-[10px] font-mono pb-0.5",
                  i === 0
                    ? "text-kx-orange border-b border-kx-orange"
                    : "text-white/25"
                )}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-mono text-white/25">LIVE</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-4 bg-[#0d0d18]">
        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: "Daily Active Users", value: "1,247", change: "+12%", color: "text-green-400" },
            { label: "MRR", value: "$48,291", change: "+8.3%", color: "text-green-400" },
            { label: "Conversion", value: "3.8%", change: "+0.4%", color: "text-green-400" },
            { label: "Churn Rate", value: "1.2%", change: "−0.3%", color: "text-green-400" },
          ].map((m, i) => (
            <motion.div
              key={i}
              animate={{ borderColor: ["rgba(255,255,255,0.05)", "rgba(232,89,58,0.18)", "rgba(255,255,255,0.05)"] }}
              transition={{ duration: 3, delay: i * 0.75, repeat: Infinity }}
              className="bg-[#12121f] border rounded-xl p-2.5"
            >
              <p className="text-[8px] font-mono text-white/30 mb-1 uppercase tracking-wider">{m.label}</p>
              <p className="text-sm font-black text-white">{m.value}</p>
              <p className={cn("text-[9px] font-mono mt-0.5", m.color)}>{m.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div className="bg-[#12121f] border border-white/5 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">User Activity</span>
            <span className="text-[9px] font-mono text-kx-orange">Last 7 days</span>
          </div>
          <div className="flex items-end gap-1 h-10">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                className="flex-1 rounded-sm"
                style={{ background: i === 5 ? "#E8593A" : "rgba(232,89,58,0.25)" }}
              />
            ))}
          </div>
        </div>

        {/* Live feed */}
        <div className="bg-[#12121f] border border-white/5 rounded-xl p-3">
          <p className="text-[8px] font-mono text-white/25 mb-2 uppercase tracking-wider">Recent Activity</p>
          <div className="space-y-1.5">
            {feed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <div className={cn("w-1 h-1 rounded-full shrink-0", item.dot)} />
                  <span className="text-[9px] font-mono text-white/50">{item.user}</span>
                  <span className="text-[9px] font-mono text-white/25">{item.action}</span>
                </div>
                <span className="text-[9px] font-mono text-white/20">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
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
                <Monitor className="w-3 h-3" /> Solutions · Web App Development
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              From idea to <br />
              <span className="text-kx-orange italic font-serif">shipped</span> in weeks.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-kx-dark-muted max-w-xl leading-relaxed">
              Full-stack SaaS products, internal dashboards, AI-powered apps, and e-commerce platforms. Production-grade code, zero hand-holding needed from your team.
            </motion.p>

    

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-kx-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200"
              >
                Start a project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-kx-dark-border text-kx-white font-bold rounded-xl hover:border-kx-orange/50 hover:text-kx-orange transition-all duration-200 backdrop-blur-md"
              >
                See our work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <BrowserMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Benefits Strip ────────────────────────────────────────────────────────────

function BenefitsStrip() {
  const stats = [
    { label: "AVG DAYS TO MVP", render: () => <CountUp to={14} suffix="d" /> },
    { label: "CHEAPER THAN IN-HOUSE HIRE", render: () => <CountUp to={60} suffix="%" /> },
    { label: "FASTER THAN AGENCIES", render: () => <><CountUp to={3} suffix="x" /></> },
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
                {stat.render()}
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

// ── Services ──────────────────────────────────────────────────────────────────

function ServicesSection() {
  const services = [
    {
      num: "01",
      Icon: Layers,
      title: "SaaS Products",
      desc: "Multi-tenant apps with auth, billing, usage limits, and dashboards. We build the whole product — you focus on selling it.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      iconBg: "bg-kx-orange/10",
      iconColor: "#E8593A",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      Icon: BarChart3,
      title: "Internal Tools & Dashboards",
      desc: "Replace spreadsheets and Notion with a proper internal app. CRMs, ops dashboards, approval flows, and reporting tools.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      iconBg: "bg-blue-500/10",
      iconColor: "#3B82F6",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      Icon: Cpu,
      title: "AI-Powered Web Apps",
      desc: "LLM integrations, RAG systems, chat interfaces, and AI feature layers on top of existing products. Claude, GPT-4, and beyond.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      iconBg: "bg-green-500/10",
      iconColor: "#22C55E",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      num: "04",
      Icon: ShoppingCart,
      title: "E-commerce & Marketplaces",
      desc: "Custom storefronts, booking platforms, vendor portals, and subscription products. Built to convert, not just to look good.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      iconBg: "bg-purple-500/10",
      iconColor: "#A78BFA",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">What We Build</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Every type of <span className="italic font-serif text-kx-orange">web product.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-2xl mx-auto text-lg">One team. Four verticals. Shipped to production.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div
                  className="h-full p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-500 group-hover:border-kx-orange/20 flex flex-col gap-6"
                  style={{ boxShadow: `0 0 0 0 ${svc.glow}`, transition: "box-shadow 0.4s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${svc.glow}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${svc.glow}`)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: svc.iconBg, border: `1px solid ${svc.iconColor}40` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: svc.iconColor }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-kx-dark-muted leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Scope & Spec",
      desc: "1-hour discovery call. We document every screen, user role, and data flow. You get a fixed-price proposal with a timeline — no surprises.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "Design",
      desc: "High-fidelity Figma designs in 3–5 days. You approve every screen before we write a single line of code.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Build & Review",
      desc: "Weekly sprint demos on a live staging URL. You see real progress every Friday — not a status update email.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      num: "04",
      title: "Ship & Support",
      desc: "CI/CD pipeline, zero-downtime deploys, monitoring, and 30 days of post-launch bug fixes included. No extra charge.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-kx-surface-950/30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">HOW WE WORK</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Scope to <span className="italic font-serif text-kx-orange">production.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">4 steps from brief to live app. No endless back-and-forth.</p>
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
                style={{ boxShadow: `0 0 0 0 ${step.glow}`, transition: "box-shadow 0.4s ease" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${step.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${step.glow}`)}
              >
                <div className={cn("self-start size-8 flex items-center justify-center rounded-full text-xs font-mono font-bold border", step.accent)}>
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

// ── Tech Stack ────────────────────────────────────────────────────────────────

function TechStackSection() {
  const stack = [
    { name: "Next.js", color: "#FFFFFF" },
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#38BDF8" },
    { name: "Node.js", color: "#68A063" },
    { name: "Python", color: "#FFD43B" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "Prisma", color: "#5A67D8" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Clerk", color: "#6C47FF" },
    { name: "Vercel", color: "#FFFFFF" },
    { name: "AWS", color: "#FF9900" },
    { name: "OpenAI", color: "#10a37f" },
    { name: "Anthropic", color: "#D4A26A" },
    { name: "LangChain", color: "#1C7A3E" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-kx-surface-950/40 pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">TECH STACK</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Built with what <span className="italic font-serif text-kx-orange">scales.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">
            Modern, proven technologies. No exotic choices that become your maintenance problem later.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {stack.map((tool, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 18 } },
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="group px-5 py-2.5 rounded-full border border-kx-dark-border bg-kx-surface-raised/60 backdrop-blur-sm cursor-default transition-all duration-300 hover:border-kx-orange/40 hover:shadow-[0_0_20px_rgba(232,89,58,0.12)]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: tool.color }} />
                <span className="text-sm font-bold text-kx-dark-muted group-hover:text-kx-white transition-colors uppercase tracking-tight">
                  {tool.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Lead Magnet ───────────────────────────────────────────────────────────────

function LeadMagnetSection() {
  const [form, setForm] = useState({ email: "", type: "", budget: "" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Get a free <span className="italic font-serif text-kx-orange">project estimate.</span>
            </h2>
            <p className="text-lg text-kx-dark-muted mb-6 leading-relaxed">
              Tell us what you want to build. We&apos;ll scope it, give you a timeline, and send a fixed-price proposal within 24 hours.
            </p>
            <ul className="space-y-3">
              {[
                "Fixed-price quote — no hourly surprises",
                "Detailed scope doc before any payment",
                "Live staging URL from week one",
                "30-day post-launch support included",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-kx-orange shrink-0" />
                  <span className="text-kx-dark-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-kx-surface-raised/40 border border-kx-dark-border rounded-3xl p-8 backdrop-blur-sm"
            onSubmit={e => e.preventDefault()}
          >
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-mono font-medium text-kx-dark-muted uppercase tracking-wide mb-2 block">
                  Work Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@company.com"
                  className="w-full h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white placeholder-kx-dark-muted/50 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-mono font-medium text-kx-dark-muted uppercase tracking-wide mb-2 block">
                  Project Type
                </label>
                <select
                  value={form.type}
                  onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                  className="w-full h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                >
                  <option value="">Select...</option>
                  <option value="saas">SaaS Product</option>
                  <option value="internal">Internal Tool / Dashboard</option>
                  <option value="ai">AI-Powered Web App</option>
                  <option value="ecommerce">E-commerce / Marketplace</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-mono font-medium text-kx-dark-muted uppercase tracking-wide mb-2 block">
                  Budget Range
                </label>
                <select
                  value={form.budget}
                  onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                  className="w-full h-12 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-kx-white focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                >
                  <option value="">Select...</option>
                  <option value="5-15">$5K – $15K</option>
                  <option value="15-40">$15K – $40K</option>
                  <option value="40-100">$40K – $100K</option>
                  <option value="100+">$100K+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95 mt-4 flex items-center justify-center gap-2 group"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-kx-dark-muted/70 text-center">
                Proposal within 24 hours. No commitment required.
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
    q: "Do you build mobile apps too?",
    a: "We focus on web apps — React Native is available on request. Most of what clients think needs a native app can be solved with a high-quality PWA or responsive web app, which ships faster and costs less.",
  },
  {
    q: "How does fixed-price work?",
    a: "We scope the project into a detailed spec before any payment. You approve the spec. We quote a fixed price. If we underestimate, that's our problem — not yours. Scope changes are priced separately and require your approval before we proceed.",
  },
  {
    q: "Who owns the code?",
    a: "You do. 100%. We hand over a clean Git repo, full deployment access, and documentation. No vendor lock-in, ever.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "Usually yes. We can extend existing apps in React, Vue, Django, Rails, Laravel, and more. If it's something obscure, we'll tell you upfront in the scoping call.",
  },
  {
    q: "What if I need changes after launch?",
    a: "We offer 30 days of free bug fixes post-launch. Feature additions are scoped and billed separately. Many clients keep us on a monthly retainer for ongoing development.",
  },
  {
    q: "Do you handle design or do I need a designer?",
    a: "We do both. Our team includes product designers who deliver Figma files before we code. If you already have a brand system or Figma file, even better — we work from your assets.",
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

