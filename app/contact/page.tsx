"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { Mail, MapPin, Clock, ArrowRight, Zap, Globe, CheckCircle2, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookingWidget } from "@/components/booking-widget";

// ── Animation variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ── Constants ─────────────────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  { id: "web-app", label: "Web & Mobile Apps" },
  { id: "workflow", label: "AI Workflow" },
  { id: "ads", label: "AI Ads" },
  { id: "voice", label: "Voice AI" },
  { id: "vision", label: "Computer Vision" },
];

const MAX_CHARS = 500;

const NEXT_STEPS = [
  {
    num: "01",
    title: "We review your project",
    desc: "We read every submission same day and check if there's a fit.",
    time: "Same day",
  },
  {
    num: "02",
    title: "Discovery call",
    desc: "A focused 30-minute call to scope your project and timeline.",
    time: "Within 24h",
  },
  {
    num: "03",
    title: "Custom proposal",
    desc: "A detailed scope, timeline, and fixed-price quote tailored to you.",
    time: "Within 3 days",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (countdown <= 0) { setSubmitted(false); setCountdown(5); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [submitted, countdown]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, projectType: formData.service }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setCountdown(5);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const charPercent = (formData.message.length / MAX_CHARS) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-white selection:bg-kx-orange/30">
      <main className="flex-1 pt-24 w-full">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden py-24">
          {/* Background blobs */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />
          </div>

          <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left copy */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Availability badge */}
                <motion.div variants={itemVariants} className="mb-8">
                  <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-kx-surface-700/60 border border-kx-dark-border text-sm font-medium text-kx-dark-muted">
                    <span className="relative flex h-2.5 w-2.5">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                    </span>
                    Available for new projects
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
                >
                  Let&apos;s build{" "}
                  <span className="italic font-serif text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600">
                    something.
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-kx-dark-muted leading-relaxed mb-10 max-w-lg"
                >
                  Book a free 30-minute discovery call or drop us a message. We reply within 1 business day.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-white font-semibold text-sm shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all">
                    Book a call <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#form" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-kx-dark-border text-kx-dark-muted font-semibold text-sm hover:border-kx-orange/40 hover:text-kx-orange transition-all">
                    Send a message <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                <div className="bg-kx-surface-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 ring-1 ring-white/5 shadow-2xl">
                  <p className="text-xs font-mono text-kx-dark-muted uppercase tracking-widest mb-6">
                    What to expect
                  </p>
                  <div className="space-y-6">
                    {[
                      { value: "< 24h", label: "Avg. response time", icon: Clock },
                      { value: "30 min", label: "Free discovery call", icon: Zap },
                      { value: "6", label: "Global partner cities", icon: Globe },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center shrink-0">
                          <stat.icon className="w-4 h-4 text-kx-orange" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-xs text-kx-dark-muted">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs text-kx-dark-muted/60 text-center">No commitment required. Just a conversation.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Booking + Form ────────────────────────────────────────────────── */}
        <section className="relative py-24">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

              {/* Left: Booking widget */}
              <motion.div
                id="booking"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-kx-dark-border ring-1 ring-white/5 bg-kx-surface-950/50 backdrop-blur-xl overflow-hidden relative flex flex-col"
              >
                {/* Corner glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-kx-orange/10 rounded-full blur-[60px] pointer-events-none" />
                {/* Card header */}
                <div className="relative flex items-center gap-3 px-6 pt-6 pb-5 border-b border-kx-dark-border/50">
                  <div className="w-9 h-9 rounded-xl bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-kx-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">Book a discovery call</h3>
                    <p className="text-xs text-kx-dark-muted">30 min · Free · No commitment</p>
                  </div>
                </div>
                <BookingWidget />
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                id="form"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm p-8 ring-1 ring-white/5"
              >
                {/* Form intro */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight mb-3">
                    Send a Business
                    <span className="italic font-serif text-kx-orange"> Message</span>
                  </h2>
                  <p className="text-sm text-kx-dark-muted leading-relaxed mb-5">
                    Tell us about your project idea.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: 0.1, duration: 0.5, type: "spring", bounce: 0.6 }}
                        className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                      <p className="text-kx-dark-muted mb-6 max-w-xs leading-relaxed">
                        We&apos;ll be in touch within 1 business day.
                      </p>
                      <p className="text-xs font-mono text-kx-dark-muted/60">
                        Closing in {countdown}s
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-mono font-medium text-kx-dark-muted uppercase tracking-widest">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="h-11 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-mono font-medium text-kx-dark-muted uppercase tracking-widest">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@company.com"
                            required
                            className="h-11 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono font-medium text-kx-dark-muted uppercase tracking-widest">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company (optional)"
                          className="h-11 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                        />
                      </div>

                      {/* Service dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono font-medium text-kx-dark-muted uppercase tracking-widest">Service</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={cn(
                            "h-11 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-sm focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all appearance-none cursor-pointer",
                            formData.service ? "text-white" : "text-kx-dark-muted/40"
                          )}
                        >
                          <option value="" disabled className="text-kx-dark-muted bg-kx-surface-950">Select a service…</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt.id} value={opt.id} className="text-white bg-kx-surface-950">{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message + char counter */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono font-medium text-kx-dark-muted uppercase tracking-widest">Message</label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={(e) => {
                              if (e.target.value.length <= MAX_CHARS) handleChange(e);
                            }}
                            placeholder="Tell us about your project, timeline, and goals..."
                            required
                            rows={5}
                            className="w-full bg-kx-surface-950/50 border border-kx-dark-border rounded-xl p-4 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all resize-none"
                          />
                          <span
                            className={cn(
                              "absolute bottom-3 right-4 text-xs font-mono transition-colors",
                              charPercent >= 80 ? "text-kx-orange" : "text-kx-dark-muted/50"
                            )}
                          >
                            {formData.message.length}/{MAX_CHARS}
                          </span>
                        </div>
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm text-center font-mono"
                        >
                          {error}
                        </motion.p>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 disabled:from-kx-dark-muted disabled:to-kx-dark-muted text-white font-bold py-4 px-8 shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-2 text-sm"
                      >
                        {isLoading ? "Sending..." : "Send message"}
                        {!isLoading && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Contact info cards ────────────────────────────────────────────── */}
        <section className="relative py-20 border-t border-kx-dark-border">
          <div className="w-full max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Other ways to{" "}
              <span className="italic font-serif text-kx-orange">reach us</span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm hover:border-kx-orange/30 hover:shadow-[0_0_30px_rgba(232,89,58,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center mb-5">
                  <Mail className="w-5 h-5 text-kx-orange" />
                </div>
                <h3 className="font-bold mb-1">Email</h3>
                <a href="mailto:hello@kaizenext.com" className="text-kx-dark-muted hover:text-kx-orange transition-colors block mb-2 text-sm">
                  hello@kaizenext.com
                </a>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-kx-surface-700/60 border border-kx-dark-border text-xs text-kx-dark-muted/80">
                  <Clock className="w-3 h-3" /> 1 business day
                </span>
              </motion.div>

              {/* HQ */}
              <motion.div
                variants={itemVariants}
                className="p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm hover:border-kx-orange/30 hover:shadow-[0_0_30px_rgba(232,89,58,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5 text-kx-orange" />
                </div>
                <h3 className="font-bold mb-1">Dhaka HQ</h3>
                <p className="text-kx-dark-muted text-sm leading-relaxed mb-3">
                  Gulshan, Dhaka<br />Bangladesh
                </p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-kx-surface-700/60 border border-kx-dark-border text-xs text-kx-dark-muted/80">
                  UTC +6
                </span>
              </motion.div>

              {/* Global partners */}
              <motion.div
                variants={itemVariants}
                className="p-7 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm hover:border-kx-orange/30 hover:shadow-[0_0_30px_rgba(232,89,58,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center mb-5">
                  <Globe className="w-5 h-5 text-kx-orange" />
                </div>
                <h3 className="font-bold mb-3">Global partners</h3>
                <div className="flex flex-wrap gap-2">
                  {["Sydney, AU", "Dubai, UAE", "Riyadh, KSA"].map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-full bg-kx-surface-700/60 border border-kx-dark-border text-xs text-kx-dark-muted/80"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── What happens next? ────────────────────────────────────────────── */}
        <section className="relative py-24 border-t border-kx-dark-border">
          <div className="w-full max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-16"
            >
              What happens{" "}
              <span className="italic font-serif text-kx-orange">next?</span>
            </motion.h2>

            <div className="relative flex flex-col md:flex-row gap-0 md:gap-0">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-7 left-[calc(16.6%+20px)] right-[calc(16.6%+20px)] h-px bg-linear-to-r from-kx-orange/40 via-kx-orange/60 to-kx-orange/40" />

              {NEXT_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 flex flex-col items-center text-center px-6 mb-10 md:mb-0"
                >
                  <div className="w-14 h-14 rounded-full bg-kx-surface-950 border-2 border-kx-orange flex items-center justify-center mb-5 shrink-0 relative z-10 shadow-[0_0_24px_rgba(232,89,58,0.2)]">
                    <span className="text-kx-orange font-mono font-bold text-sm">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-kx-dark-muted text-sm leading-relaxed mb-3">{step.desc}</p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-kx-orange/10 border border-kx-orange/20 text-xs text-kx-orange font-mono">
                    {step.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────────── */}
        <section className="relative py-20 pb-32">
          <div className="w-full max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2.5rem] bg-kx-surface-950/60 backdrop-blur-xl border border-white/10 ring-1 ring-white/5 p-12 text-center overflow-hidden"
            >
              {/* Crosshatch grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] rounded-[2.5rem]" />
              {/* Orange corner glow */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-kx-orange-600/20 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <p className="text-xs font-mono text-kx-orange uppercase tracking-widest mb-4">Ready when you are</p>
                <h2 className="text-4xl font-bold mb-4">
                  Start the conversation
                </h2>
                <p className="text-kx-dark-muted mb-8 max-w-md mx-auto leading-relaxed">
                  No contracts, no commitments — just a call. Let&apos;s see if we&apos;re a fit.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="#booking">
                    <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-white font-bold shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all">
                      Book a free call <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <a
                    href="mailto:hello@kaizenext.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-kx-dark-border text-kx-dark-muted font-semibold hover:border-kx-orange/40 hover:text-kx-orange transition-all"
                  >
                    Email us directly <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
