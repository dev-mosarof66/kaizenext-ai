"use client";
import { FinalCTA } from "@/components/final-cta";
import { motion, AnimatePresence, Variants } from "motion/react";
import {
  Workflow,
  ArrowRight,
  Zap,
  TrendingUp,
  Boxes,
  ChevronDown,
  Cpu,
  Code,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { WorkflowCanvas } from "@/components/workflow-canvas";
import CountUp from "@/components/counter-up";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

export default function AIWorkflowAutomation() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        <HeroSection />
        <OutcomesStrip />
        <UseCasesSection />
        <StackSection />
        <DeliveryProcess />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  const router = useRouter();
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
                <Workflow className="w-3 h-3" /> Solutions · Workflow Automation
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              AI workflows. <br />
              Built to <span className="text-kx-orange italic font-serif">ship.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-kx-dark-muted max-w-xl leading-relaxed">
              Automate repetitive operations and connect your tools with intelligent, self-operating systems. We build production-ready agents that handle the boring stuff at scale.
            </motion.p>

            <motion.div variants={itemVariants} className="w-full flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={()=> router.push('/contact')} className="flex-1 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold py-4 px-8 rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2 group">
                Book a discovery call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => router.push('/work')} className="flex-1 bg-kx-white/5 border border-white/10 hover:bg-kx-white/10 text-kx-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-md">
                See our work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <WorkflowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkflowDiagram() {
  return (
    <div className="relative w-full max-w-md aspect-square bg-kx-surface-raised/40 rounded-3xl border border-white/5 p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-kx-orange-400/5 to-transparent" />
      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
        <circle cx="200" cy="80" r="30" className="fill-kx-surface-600 stroke-white/20 stroke-2" />
        <circle cx="80" cy="200" r="30" className="fill-kx-surface-600 stroke-white/20 stroke-2" />
        <circle cx="320" cy="200" r="30" className="fill-kx-surface-600 stroke-white/20 stroke-2" />
        <circle cx="200" cy="320" r="30" className="fill-kx-orange stroke-white/20 stroke-2" />

        <path d="M200,80 L80,200" className="stroke-white/5 stroke-2" fill="none" />
        <path d="M200,80 L320,200" className="stroke-white/5 stroke-2" fill="none" />
        <path d="M80,200 L200,320" className="stroke-white/5 stroke-2" fill="none" />
        <path d="M320,200 L200,320" className="stroke-white/5 stroke-2" fill="none" />

        <motion.circle r="4" fill="#E8593A"
          initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: "path('M200,80 L80,200')" } as React.CSSProperties}
        />
        <motion.circle r="4" fill="#E8593A"
          initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          style={{ offsetPath: "path('M200,80 L320,200')" } as React.CSSProperties}
        />
        <motion.circle r="4" fill="#E8593A"
          initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
          style={{ offsetPath: "path('M80,200 L200,320')" } as React.CSSProperties}
        />
      </svg>

      <div className="absolute top-10 right-10 p-3 rounded-lg bg-kx-surface-950/80 border border-white/10 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-2 text-[10px] font-mono text-kx-orange">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          ACTIVE_THREAD
        </div>
      </div>
    </div>
  );
}

// ── Outcomes ──────────────────────────────────────────────────────────────────

function OutcomesStrip() {
  const stats = [
    { value: () => <CountUp to={60} suffix="%" />, label: "TIME SAVED ON LEAD ROUTING" },
    { value: () => <CountUp to={5} suffix="-DAY" />, label: "AVERAGE IMPLEMENTATION" },
    { value: () => <CountUp to={0} suffix="%" />, label: "ENGINEER HOURS FROM YOU" },
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
                {stat.value()}
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

// ── Use Cases (Workflow Canvas) ───────────────────────────────────────────────

const INDUSTRY_TABS = [
  { id: "sales", label: "Sales & CRM" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "finance", label: "Finance & Fintech" },
];

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = INDUSTRY_TABS[activeTab];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="w-full mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">LIVE SIMULATIONS</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            See automation <span className="italic font-serif text-kx-orange">in action.</span>
          </h2>
          <p className="text-kx-dark-muted text-lg">Pick an industry. Hit Run. Watch real data move through a real workflow.</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {INDUSTRY_TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold transition-all border",
                activeTab === i
                  ? "bg-kx-orange border-kx-orange text-white shadow-[0_0_20px_rgba(232,89,58,0.4)]"
                  : "bg-transparent border-white/10 text-kx-dark-muted hover:text-kx-white hover:border-white/20"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl" style={{ height: 560 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <WorkflowCanvas workflowId={active.id} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


// ── Stack ─────────────────────────────────────────────────────────────────────

function StackSection() {
  const tools = [
    { name: "n8n", color: "#EA4335" },
    { name: "Zapier", color: "#FF4A00" },
    { name: "Make", color: "#6D00CC" },
    { name: "Airtable", color: "#FFBF00" },
    { name: "Notion", color: "#FFFFFF" },
    { name: "Slack", color: "#4A154B" },
    { name: "HubSpot", color: "#FF7A59" },
    { name: "Salesforce", color: "#00A1E0" },
    { name: "Stripe", color: "#635BFF" },
    { name: "OpenAI", color: "#10a37f" },
    { name: "Anthropic", color: "#D4A26A" },
    { name: "LangChain", color: "#1C7A3E" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-kx-surface-950/40 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">TECH STACK</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Tools we <span className="italic font-serif text-kx-orange">speak fluently.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">We integrate with whatever you already use — no rip-and-replace required.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 18 } }
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="group relative px-5 py-2.5 rounded-full border border-kx-dark-border bg-kx-surface-raised/60 backdrop-blur-sm cursor-default transition-all duration-300 hover:border-kx-orange/40 hover:shadow-[0_0_20px_rgba(232,89,58,0.12)]"
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

// ── Delivery Process ──────────────────────────────────────────────────────────

function DeliveryProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We audit your existing ops, map every manual touchpoint, and pinpoint the highest-ROI automations.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "Architect",
      desc: "We design a fault-tolerant, observable agent flow with proper error-handling and alerting built-in.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Ship to production in as little as 5 days. Live monitoring, rollback plans, and zero downtime deploys.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
    {
      num: "04",
      title: "Optimize",
      desc: "We iterate post-launch — tracking run times, error rates, and business impact every two weeks.",
      accent: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      glow: "rgba(168,85,247,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-kx-surface-950/30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">HOW WE WORK</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            From chaos to <span className="italic font-serif text-kx-orange">clarity.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">Our 4-phase process takes you from bottleneck to production in days, not months.</p>
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
              {/* Connector line (desktop) */}
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
                {/* Number badge */}
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

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does a typical implementation take?",
      a: "Most focused automations ship in 5-10 business days. Complex end-to-end systems with custom AI agents take 4-6 weeks. We'll give you a precise estimate after a 30-min discovery call.",
    },
    {
      q: "Do you use low-code or custom code?",
      a: "Both. We use tools like n8n, Zapier, and Make for speed and maintainability, but write custom Python/JS/TypeScript nodes for heavy logic, proprietary AI functions, and anything that requires real engineering muscle.",
    },
    {
      q: "What happens if a workflow breaks in production?",
      a: "Every workflow we build has error-handling nodes, retry logic, and instant WhatsApp/Slack alerts. If anything fails, we know before you do — and we're contractually on the hook to fix it.",
    },
    {
      q: "Do you need access to our internal systems?",
      a: "Only what's required. We work via read-only API keys where possible, and all credentials are stored in encrypted vaults. We can sign your NDA and work within your security policy.",
    },
    {
      q: "Can you automate workflows that aren't listed here?",
      a: "Absolutely. If it can be broken into steps and has an API (or even just a browser), we can automate it. Book a call and we'll scope it on the spot.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,89,58,0.04),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-14">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Common <span className="italic font-serif text-kx-orange">Questions.</span>
          </h2>
          <p className="text-kx-dark-muted">Everything you&apos;re wondering, answered honestly.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
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

const _icons = [Cpu, Code, CheckCircle2, Zap, TrendingUp, Boxes];
void _icons;




