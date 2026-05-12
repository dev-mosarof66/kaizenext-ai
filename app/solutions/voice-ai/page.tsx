"use client";

import { FinalCTA } from "@/components/final-cta";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ArrowRight, ChevronDown, Mic, Phone, Headphones, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Video from "next-video";
import CountUp from "@/components/counter-up";

const DEMO_VIDEO_URL = "https://res.cloudinary.com/drw5jlvd5/video/upload/v1778491272/voice-demo_kwiaui.mp4";

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

export default function VoiceAIPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        <HeroSection />
        <BenefitsStrip />
        <UseCasesSection />
        <HowItWorksSection />
        <LanguagesSection />
        <IntegrationsSection />
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
                <Mic className="w-3 h-3" /> Solutions · Voice AI
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Voice agents your customers won&apos;t <span className="text-kx-orange italic font-serif">hate.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-kx-dark-muted max-w-xl leading-relaxed">
              Deploy AI agents that answer phones 24/7. Handle customer support, qualify leads, schedule appointments. Works in 15+ languages with natural conversation.
            </motion.p>

            <motion.div variants={itemVariants} className="w-full flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <button className="w-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold py-4 px-8 rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95  gap-2 group flex items-center justify-center">
                  Book a demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="bg-kx-white/5 border border-white/10 hover:bg-kx-white/10 text-kx-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-md">
                Try it live
              </button>
            </motion.div>
          </motion.div>

          {/* demo voice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-xl h-96 aspect-video rounded-3xl overflow-hidden border border-kx-dark-border shadow-2xl ring-1 ring-white/5">
              <Video src={DEMO_VIDEO_URL} autoPlay loop className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-kx-orange/20">
                <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                  <span className="text-green-400 animate-pulse">● LIVE</span>
                  <span className="text-kx-orange">&lt;2s RESP</span>
                  <span className="text-blue-400">15+ LANG</span>
                  <span className="text-purple-400">99.9% UP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




// ── Benefits Strip ────────────────────────────────────────────────────────────

function BenefitsStrip() {
  const stats = [
    { label: "CHEAPER THAN HUMANS", render: () => <CountUp to={8} suffix="x" /> },
    { label: "RESPONSE TIME", render: () => <>{"< "}<CountUp to={2} suffix="s" /></> },
    { label: "LANGUAGES SUPPORTED", render: () => <CountUp to={15} suffix="+" /> },
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

// ── Use Cases ─────────────────────────────────────────────────────────────────

function UseCasesSection() {
  const useCases = [
    {
      icon: Headphones,
      title: "Customer Support",
      desc: "Handle FAQs, troubleshooting, refunds, complaints. Escalate complex cases to humans.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      iconBg: "bg-kx-orange/10 border-kx-orange/30",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      icon: Phone,
      title: "Sales Qualification",
      desc: "Qualify inbound leads. Ask discovery questions. Book demos. Pass warm leads to sales.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/30",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      desc: "English, Spanish, French, Arabic, Hindi, Mandarin, and 9+ more. Switch mid-call seamlessly.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      iconBg: "bg-green-500/10 border-green-500/30",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      icon: Mic,
      title: "Outbound Campaigns",
      desc: "Call customers proactively. Conduct surveys. Schedule appointments. Get responses in seconds.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      iconBg: "bg-purple-500/10 border-purple-500/30",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-col items-center justify-center">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">USE CASES</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Replace repetition. <span className="italic font-serif text-kx-orange">Not people.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div
                  className="h-full p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-500 group-hover:border-kx-orange/20 flex flex-col gap-5"
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${uc.glow}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center shrink-0", uc.iconBg)}>
                    <Icon className={cn("w-6 h-6", uc.accent.split(" ").find(c => c.startsWith("text-")))} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">{uc.title}</h3>
                    <p className="text-kx-dark-muted leading-relaxed">{uc.desc}</p>
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
      title: "Connect Numbers",
      desc: "Bring your existing phone numbers or provision new ones via Twilio or Vonage. Full SIP trunk support — live in minutes.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "Design the Flow",
      desc: "Build conversation scripts with branching logic, intent detection, and escalation rules. No coding required.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Train on Your Data",
      desc: "Upload your docs, FAQs, and knowledge base. RAG-powered retrieval keeps every answer accurate and on-brand.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      num: "04",
      title: "Deploy & Monitor",
      desc: "Go live with one click. Track call volume, resolution rates, and sentiment in a real-time dashboard.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="absolute inset-0 bg-kx-surface-950/30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="w-full mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Live in days, <span className="italic font-serif text-kx-orange">not months.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">4 steps from signup to your first answered call.</p>
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

// ── Languages ─────────────────────────────────────────────────────────────────

function LanguagesSection() {
  const languages = [
    { lang: "English", region: "US / UK", accent: "Neutral" },
    { lang: "Spanish", region: "ES / MX", accent: "Castilian / Mexican" },
    { lang: "French", region: "FR / CA", accent: "Parisian / Quebec" },
    { lang: "German", region: "DE / AT", accent: "Standard / Austrian" },
    { lang: "Italian", region: "IT", accent: "Standard" },
    { lang: "Portuguese", region: "BR / PT", accent: "Brazilian / European" },
    { lang: "Arabic", region: "UAE / KSA", accent: "Gulf / Formal" },
    { lang: "Hindi", region: "IN", accent: "Standard" },
    { lang: "Mandarin", region: "CN", accent: "Simplified / Traditional" },
    { lang: "Japanese", region: "JP", accent: "Standard" },
    { lang: "Korean", region: "KR", accent: "Standard" },
    { lang: "Thai", region: "TH", accent: "Standard" },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-col items-center justify-center">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">LANGUAGES</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <CountUp to={12} suffix="+" /> languages. <span className="italic font-serif text-kx-orange">One agent.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {languages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              className="group p-4 rounded-xl border border-white/5 hover:border-kx-orange/20 bg-kx-surface-raised/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-kx-white group-hover:text-kx-orange transition-colors duration-300">{item.lang}</p>
                  <p className="text-xs text-kx-dark-muted mt-0.5">{item.region}</p>
                </div>
                <span className="text-[10px] font-mono text-kx-orange/60 bg-kx-orange/5 border border-kx-orange/10 px-2 py-0.5 rounded-md">
                  {item.accent}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Integrations ──────────────────────────────────────────────────────────────

function IntegrationsSection() {
  const integrations = [
    { name: "Twilio", color: "#F22F46" },
    { name: "Vonage", color: "#F4632B" },
    { name: "ElevenLabs", color: "#00A3FF" },
    { name: "Vapi", color: "#FFB900" },
    { name: "Retell", color: "#00D9FF" },
    { name: "OpenAI", color: "#10a37f" },
    { name: "Anthropic", color: "#D4A26A" },
    { name: "Google Cloud", color: "#4285F4" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex flex-col items-center justify-center">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">INTEGRATIONS</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Works with what you <span className="italic font-serif text-kx-orange">already use.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="flex flex-wrap gap-3"
        >
          {integrations.map((intg, i) => (
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
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: intg.color }} />
                <span className="text-sm font-bold text-kx-dark-muted group-hover:text-kx-white transition-colors uppercase tracking-tight">
                  {intg.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: "How much does a voice agent cost?", a: "Setup is $2K–$5K depending on customization. Then $0.01–0.05/minute of calls. For 10K calls/month at 4 min avg = $400/month. Way cheaper than hiring support staff." },
  { q: "How long until it's live?", a: "Typically 2–4 weeks. We design the conversation flow, train the agent, connect your telephony, then test. Live within a month." },
  { q: "Can it handle complex conversations?", a: "Yes. Claude and GPT-4 are strong on context. For tricky scenarios, we add escalation rules to route to humans. Hybrid is the sweet spot." },
  { q: "What about call recording and compliance?", a: "We handle GDPR, CCPA, HIPAA-ready architecture. Call recording, consent, retention all configurable. Enterprise compliance included." },
  { q: "Can you train it on our documentation?", a: "Yes. We ingest your docs, FAQs, knowledge bases into a RAG system. The agent cites sources. Transparency by default." },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,89,58,0.04),transparent_70%)] pointer-events-none" />
      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex flex-col items-center justify-center text-center">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Common <span className="italic font-serif text-kx-orange">questions.</span>
          </h2>
        </motion.div>

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
                <span className={cn("font-bold text-base transition-colors", open === i ? "text-kx-white" : "text-kx-dark-ink group-hover:text-kx-white")}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors",
                    open === i ? "border-kx-orange bg-kx-orange text-white" : "border-kx-dark-border text-kx-dark-muted group-hover:border-white/20"
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
