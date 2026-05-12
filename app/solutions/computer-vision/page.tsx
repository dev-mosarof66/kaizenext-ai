"use client";

import { FinalCTA } from "@/components/final-cta";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ArrowRight, ChevronDown, Eye } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Video from "next-video";
import CountUp from "@/components/counter-up";

const DEMO_VIDEO_URL = "https://res.cloudinary.com/drw5jlvd5/video/upload/vision-demo-1_di87th.mp4";
const HERO_VIDEO_URL = 'https://res.cloudinary.com/drw5jlvd5/video/upload/v1778491274/vision-demo-2_x0jcdi.mp4';

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

export default function ComputerVisionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        <HeroSection />
        <BenefitsStrip />
        <CapabilitiesSection />
        <FeaturedCaseStudySection />
        <DomainsSection />
        <TechStackSection />
        <EngagementModelsSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

const HERO_BG_IMAGE = "https://res.cloudinary.com/drw5jlvd5/image/upload/v1778493193/cv1_mjqrt5.avif";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 md:py-32">
      {/* Image background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_BG_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-kx-surface/60 via-kx-surface/40 to-kx-surface/95" />
      <div className="absolute inset-0 z-10 bg-linear-to-r from-kx-surface/80 via-kx-surface/30 to-transparent" />

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kx-orange-400/10 border border-kx-orange-400/20 text-xs font-mono font-medium tracking-[0.12em] uppercase text-kx-orange-400">
                <Eye className="w-3 h-3" /> Solutions · Computer Vision
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Vision systems that work in the <span className="text-kx-orange italic font-serif">real world.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Player tracking, action detection, heatmaps. We&apos;re the technical partner of a Saudi-based football analysis platform. We also ship computer vision for retail, security, and industrial.
            </motion.p>

            <motion.div variants={itemVariants} className="w-full flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <button className="w-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold py-4 px-8 rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95  gap-2 group flex items-center justify-center">
                  Book a demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="bg-kx-white/5 border border-white/10 hover:bg-kx-white/10 text-kx-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-md">
                View case study
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <VisionMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VisionMock() {
  return (
    <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden border border-kx-dark-border shadow-2xl ring-1 ring-white/5">
      <Video
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ── Benefits Strip ────────────────────────────────────────────────────────────

function BenefitsStrip() {
  const stats = [
    { value: () => <CountUp to={22} />, label: "PLAYERS TRACKED/SEC" },
    { value: () => <CountUp to={96} decimals={0} suffix="%" />, label: "DETECTION ACCURACY" },
    { value: () => <CountUp to={2} decimals={1} suffix="s" />, label: "END-TO-END LATENCY" },
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

// ── Capabilities ──────────────────────────────────────────────────────────────

function CapabilitiesSection() {
  const capabilities = [
    { num: "01", title: "Player Tracking", desc: "Real-time tracking of athletes. Trajectory, velocity, acceleration.", accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange", glow: "rgba(232,89,58,0.15)" },
    { num: "02", title: "Action Detection", desc: "Identify passes, shots, tackles, fouls automatically.", accent: "bg-blue-500/10 border-blue-500/30 text-blue-400", glow: "rgba(59,130,246,0.15)" },
    { num: "03", title: "Heatmaps & Analytics", desc: "Visualize ball possession, player movement patterns.", accent: "bg-green-500/10 border-green-500/30 text-green-400", glow: "rgba(34,197,94,0.15)" },
    { num: "04", title: "Jersey OCR", desc: "Read player numbers and recognize individual athletes.", accent: "bg-purple-500/10 border-purple-500/30 text-purple-400", glow: "rgba(168,85,247,0.15)" },
    { num: "05", title: "Highlight Reels", desc: "Auto-generate key moments for broadcast or social.", accent: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400", glow: "rgba(234,179,8,0.15)" },
    { num: "06", title: "Multi-Camera Fusion", desc: "Combine multiple camera angles for robust tracking.", accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange", glow: "rgba(232,89,58,0.15)" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-kx-orange/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Production-ready <span className="italic font-serif text-kx-orange">models.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">Six core capabilities. Mix and match for your domain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, i) => (
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
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${cap.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className={cn("self-start px-3 py-1 rounded-full text-xs font-mono font-bold border", cap.accent)}>
                  {cap.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">{cap.title}</h3>
                  <p className="text-kx-dark-muted text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Case Study ───────────────────────────────────────────────────────

function FeaturedCaseStudySection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">FEATURED</span>
            <h2 className="text-4xl font-bold mb-6">Saudi Football Analytics</h2>
            <p className="text-lg text-kx-dark-muted mb-6 leading-relaxed">
              Technical partner of a Saudi-based football intelligence platform. We ship player tracking, action detection, and post-match analytics to 50+ professional teams.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "22 players tracked per frame",
                "96% detection accuracy on actions",
                "< 2 seconds end-to-end latency",
                "Live data available during broadcast",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-kx-orange" />
                  <span className="text-kx-dark-muted">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/work">
              <button className="bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold py-4 px-8 rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2 group">
                Read full case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-kx-dark-border shadow-2xl w-full max-w-4xl"
          >

            <Video
              src={DEMO_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Beyond Football ───────────────────────────────────────────────────────────

function DomainsSection() {
  const domains = [
    {
      num: "01",
      domain: "Retail Analytics",
      examples: "People counting, heatmaps, queue detection. Optimize store layout and staffing.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      domain: "Security & Anomaly Detection",
      examples: "Crowd detection, perimeter breach, loitering. Real-time alerts.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      domain: "Industrial Inspection",
      examples: "Defect detection on assembly lines, worker safety compliance. Zero downtime.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">BEYOND FOOTBALL</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Every industry has <span className="italic font-serif text-kx-orange">vision problems.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">Computer vision isn&apos;t just for sports. Here&apos;s where else we deploy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domains.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div
                className="h-full p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-500 group-hover:border-kx-orange/20 flex flex-col gap-6"
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${item.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className={cn("self-start px-3 py-1 rounded-full text-xs font-mono font-bold border", item.accent)}>
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">{item.domain}</h3>
                  <p className="text-kx-dark-muted leading-relaxed">{item.examples}</p>
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
  const tools = [
    { name: "PyTorch", color: "#EE4C2C" },
    { name: "YOLO", color: "#13B0F5" },
    { name: "OpenCV", color: "#5C3EE8" },
    { name: "NVIDIA", color: "#76B900" },
    { name: "AWS", color: "#FF9900" },
    { name: "GCP", color: "#4285F4" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-kx-surface-950/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">TECH STACK</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Built on proven <span className="italic font-serif text-kx-orange">foundations.</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
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

// ── Engagement Models ─────────────────────────────────────────────────────────

function EngagementModelsSection() {
  const models = [
    {
      num: "01",
      title: "Technical Partner",
      desc: "Co-develop a custom vision system for your product. Revenue share or fixed fee.",
      accent: "bg-kx-orange/10 border-kx-orange/30 text-kx-orange",
      glow: "rgba(232,89,58,0.15)",
    },
    {
      num: "02",
      title: "Build-for-You",
      desc: "We own the implementation. You own the product. Fixed scope + timeline.",
      accent: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      glow: "rgba(59,130,246,0.15)",
    },
    {
      num: "03",
      title: "Consultant",
      desc: "We advise your team on vision architecture, model selection, deployment.",
      accent: "bg-green-500/10 border-green-500/30 text-green-400",
      glow: "rgba(34,197,94,0.15)",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-kx-surface-950/30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-kx-orange/3 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kx-orange font-mono text-xs font-medium tracking-widest uppercase mb-4 block">HOW WE ENGAGE</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Pick your <span className="italic font-serif text-kx-orange">model.</span>
          </h2>
          <p className="text-kx-dark-muted max-w-xl mx-auto">Three ways to work with us — from deep technical co-development to advisory.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div
                className="h-full p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-500 group-hover:border-kx-orange/20 flex flex-col gap-6"
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${model.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className={cn("self-start px-3 py-1 rounded-full text-xs font-mono font-bold border", model.accent)}>
                  {model.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kx-white mb-3 group-hover:text-kx-orange transition-colors duration-300">{model.title}</h3>
                  <p className="text-kx-dark-muted leading-relaxed">{model.desc}</p>
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
    q: "How accurate are your models?",
    a: "Depends on the task. Player tracking: 96%+. Action detection: 90%+. We benchmark against industry standards and continuously improve via retraining.",
  },
  {
    q: "How much data do you need?",
    a: "For a custom model, 500–1,000 labeled frames is a good start. For fine-tuning existing models, 100–200 is often enough.",
  },
  {
    q: "Can you work with low-res or bad-quality footage?",
    a: "Yes. We've deployed on 480p streams and low-light conditions. Tradeoffs exist, but we engineer solutions.",
  },
  {
    q: "How long does a typical project take?",
    a: "MVP: 4–8 weeks. Production-ready: 3–6 months. Depends on complexity, data availability, and iteration cycles.",
  },
  {
    q: "Do you handle data privacy and security?",
    a: "Yes. We can run inference on-premises. No footage leaves your infrastructure. GDPR, HIPAA, PCI ready.",
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
          <p className="text-kx-dark-muted">Everything about computer vision systems.</p>
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
