"use client";

import { FinalCTA } from "@/components/final-cta";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ArrowRight, ChevronDown, Code, Zap, Cpu, Smartphone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PrimaryButton, OutlineButton } from "@/components/button";

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

export default function CustomAIPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        <HeroSection />
        <BenefitsStrip />
        <WhatWeBuiltSection />
        <EngagementModelsSection />
        <TechStackSection />
        <ProcessSection />
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
                <Code className="w-3 h-3" /> Solutions · Custom AI
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Your AI engineering team. <br />
              <span className="text-kx-orange italic font-serif">Without</span> the headcount.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-kx-dark-muted max-w-xl leading-relaxed">
              We build AI products end-to-end. From concept to production. ML pipeline, API, web/mobile UI, deployment. Full engineering services.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton navigate="/contact" className="w-full sm:w-auto">
                Start a project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </PrimaryButton>
              <OutlineButton onClick={() => document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto">
                See our work
              </OutlineButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <ProductMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductMock() {
  return (
    <div className="w-80 space-y-6">
      {/* Web mockup */}
      <div className="rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm overflow-hidden shadow-xl">
        <div className="bg-kx-surface-600/50 h-8 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="p-6 space-y-4">
          <div className="h-6 bg-kx-orange/20 rounded w-2/3" />
          <div className="space-y-3">
            <div className="h-3 bg-kx-white/10 rounded" />
            <div className="h-3 bg-kx-white/10 rounded" />
            <div className="h-3 bg-kx-white/10 rounded w-4/5" />
          </div>
          <div className="pt-4 flex gap-2">
            <div className="h-10 bg-kx-orange/30 rounded flex-1" />
            <div className="h-10 bg-kx-white/10 rounded flex-1" />
          </div>
        </div>
      </div>

      {/* Mobile mockup */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-48 mx-auto rounded-3xl border-8 border-black bg-black p-2 shadow-xl"
      >
        <div className="rounded-3xl bg-kx-surface-raised/40 backdrop-blur-sm p-4 space-y-3 h-64 flex flex-col">
          <div className="h-4 bg-kx-orange/20 rounded w-1/2" />
          <div className="space-y-2">
            <div className="h-3 bg-kx-white/10 rounded" />
            <div className="h-3 bg-kx-white/10 rounded" />
          </div>
          <div className="mt-auto space-y-2">
            <div className="h-10 bg-kx-orange/30 rounded" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Benefits Strip ────────────────────────────────────────────────────────────

function BenefitsStrip() {
  const stats = [
    { value: "End-to-End", label: "FULL STACK DELIVERY" },
    { value: "4-6", label: "WEEKS TO MVP" },
    { value: "Zero", label: "HEADCOUNT NEEDED" },
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
                {stat.value}
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

// ── What We Build ─────────────────────────────────────────────────────────────

function WhatWeBuiltSection() {
  const products = [
    { icon: Smartphone, title: "AI SaaS Products", desc: "Full web + mobile apps with AI backends. Subscription-ready." },
    { icon: Cpu, title: "RAG & Knowledge Agents", desc: "Chat with your docs. Q&A systems trained on proprietary data." },
    { icon: Zap, title: "Internal Tools & Dashboards", desc: "AI-powered dashboards for your team. Reporting, analysis, automation." },
    { icon: Code, title: "Mobile AI Apps", desc: "iOS + Android apps with on-device or cloud ML. Real-time inference." },
  ];

  return (
    <section id="our-work" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">01 · WHAT WE BUILD</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Any AI product you <span className="italic font-serif text-kx-orange">imagine.</span>
          </h2>
          <p className="text-kx-dark-muted text-lg">Web apps, mobile, APIs, agents — we handle the full stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm hover:border-kx-orange/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-kx-orange/10 border border-kx-orange/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-kx-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-kx-orange transition-colors">{product.title}</h3>
                <p className="text-kx-dark-muted leading-relaxed">{product.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Engagement Models ─────────────────────────────────────────────────────────

function EngagementModelsSection() {
  const models = [
    {
      num: "01",
      title: "Fixed-Scope Project",
      desc: "Clearly defined MVP. Budget and timeline set upfront. No surprises.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "Dedicated Team",
      desc: "Reserved engineers for 3–6 months. Flexible scope. You direct priorities weekly.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Fractional CTO / AI Advisor",
      desc: "Part-time leadership. Architecture reviews, hiring, strategy. 10–20 hrs/week.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">02 · ENGAGEMENT MODELS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Pick the model that <span className="italic font-serif text-kx-orange">fits.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">Fixed project, ongoing team, or fractional leadership. Your choice.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div
                className="h-full p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-500 group-hover:border-kx-orange/20 flex flex-col gap-6"
                style={{
                  boxShadow: `0 0 0 0 ${model.glow}`,
                  transition: "box-shadow 0.4s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${model.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${model.glow}`)}
              >
                <div className={cn("self-start px-3 py-1 rounded-full text-xs font-mono font-bold border", model.accent)}>
                  {model.num}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">
                    {model.title}
                  </h4>
                  <p className="text-kx-dark-muted text-sm leading-relaxed">{model.desc}</p>
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
    { category: "LLMs", tools: "Claude, GPT-4, Llama" },
    { category: "Frameworks", tools: "FastAPI, Next.js, React Native" },
    { category: "Data", tools: "PostgreSQL, Pinecone, S3" },
    { category: "ML Ops", tools: "MLflow, Docker, Kubernetes" },
    { category: "Deployment", tools: "Vercel, AWS, GCP, Heroku" },
    { category: "Observability", tools: "Sentry, Datadog, Prometheus" },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">03 · TECH STACK</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Modern, proven, <span className="italic font-serif text-kx-orange">scalable.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stack.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm hover:border-kx-orange/20 transition-all"
            >
              <p className="font-bold text-kx-orange text-sm mb-3 uppercase tracking-wide">{item.category}</p>
              <p className="text-kx-dark-muted">{item.tools}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────────

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understand requirements, constraints, timeline. Whiteboard the MVP. Estimate.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "MVP",
      desc: "Build a working prototype. Core features only. Ship fast. Iterate on feedback.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Production",
      desc: "Scale the MVP. Add observability, security, performance tuning. Go live.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      num: "04",
      title: "Operate",
      desc: "Maintain, monitor, optimize. Bug fixes, feature requests, scaling as needed.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">04 · OUR PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            From idea to <span className="italic font-serif text-kx-orange">production.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">Proven 4-phase approach. Transparent communication every step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What's the typical project cost?",
    a: "Depends on scope. MVP projects: $30K–$80K. Full production products: $80K–$300K+. We scope precisely after discovery.",
  },
  {
    q: "How long does an MVP take?",
    a: "4–6 weeks typically. Depends on complexity and team size. We frontload scope cuts to ship fast.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes. APIs, webhooks, databases — we integrate with whatever you have. Legacy systems, modern stacks, both work.",
  },
  {
    q: "What if we need more features after launch?",
    a: "We can stick around. Maintenance contracts, feature requests, priority support. Your choice.",
  },
  {
    q: "Do you provide source code?",
    a: "Always. You own 100% of the code. No licensing fees, no vendor lock-in. Structured, documented, production-ready.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,89,58,0.04),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-14">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">05 · FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Common <span className="italic font-serif text-kx-orange">questions.</span>
          </h2>
          <p className="text-kx-dark-muted">Everything about custom AI product development.</p>
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
