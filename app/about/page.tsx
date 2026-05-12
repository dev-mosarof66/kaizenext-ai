"use client";
import { Navbar } from "@/components/navbar";
import { FinalCTA } from "@/components/final-cta";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="w-full max-w-6xl flex items-center justify-center mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl flex flex-col items-center justify-center gap-6"
            >
              <span className="inline-block text-kx-orange font-mono text-xs font-medium tracking-[0.12em] uppercase mb-6">
                About Kaizenext
              </span>
              <h1 className="text-5xl md:text-7xl text-center font-bold tracking-tight leading-tight mb-6">
                We&apos;re an AI engineering studio. <span className="italic font-serif text-kx-orange">Built to ship.</span>
              </h1>
              <p className="text-lg md:text-xl text-kx-dark-muted max-w-2xl leading-relaxed">
                Too many AI projects die in Jupyter notebooks. We exist to bridge that gap — shipping production AI that solves real business problems, fast.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values / Principles Section */}
        <section className="relative py-24 md:py-32">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="inline-block text-kx-orange font-mono text-xs font-medium tracking-[0.12em] uppercase mb-4">
                Our Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                How we <span className="italic font-serif text-kx-orange">work.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Ship in weeks, not quarters",
                  desc: "We use the best off-the-shelf primitives (LLMs, STT, vision models) to build functional MVPs faster than an enterprise could schedule a kickoff meeting.",
                },
                {
                  title: "Real product UI, not slideware",
                  desc: "An AI model is only as good as the interface that exposes it. We are obsessed with creating beautiful, premium, interactive user experiences.",
                },
                {
                  title: "Bundle the human",
                  desc: "We don't just throw software over the wall. We bundle technical consulting and human-in-the-loop oversight to ensure the AI actually solves the business problem.",
                },
                {
                  title: "Safe by default",
                  desc: "We implement strict guardrails, PII masking, and data retention policies. Enterprise-grade compliance is built into the foundation.",
                },
              ].map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-8 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm transition-all duration-300 hover:border-kx-orange/20 hover:shadow-[0_0_40px_rgba(232,89,58,0.12)]"
                >
                  <h3 className="text-xl font-bold text-kx-white mb-4 group-hover:text-kx-orange transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-kx-dark-muted leading-relaxed text-sm">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-24 md:py-32">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-kx-orange font-mono text-xs font-medium tracking-[0.12em] uppercase mb-4">
                The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Tight. <span className="italic font-serif text-kx-orange">Focused.</span>
              </h2>
              <p className="text-lg text-kx-dark-muted max-w-2xl mx-auto">
                We&apos;re a tight team of full-stack AI engineers distributed across AU, UAE, KSA, and Bangladesh. Every person here ships production code.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-kx-surface-raised/40 border border-kx-dark-border rounded-3xl p-12 text-center backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="text-6xl font-black text-kx-orange mb-3">8</div>
                <p className="text-kx-dark-muted text-lg">Full-stack engineers + AI specialists across 4 countries</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-kx-dark-border/50">
                {[
                  { role: "AI/ML" },
                  { role: "Full-Stack" },
                  { role: "Backend" },
                  { role: "DevOps" },
                ].map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center mb-3">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <p className="text-sm font-mono text-kx-dark-muted uppercase tracking-wide">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Careers Teaser */}
        {/* <section className="relative py-24 md:py-32">
          <div className="w-full max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-kx-surface-raised/40 border border-kx-dark-border rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm"
            >
              <h3 className="text-4xl font-bold mb-4">We're hiring.</h3>
              <p className="text-kx-dark-muted text-lg mb-8 max-w-xl mx-auto">
                If you obsess over shipping AI products and want to work across the full stack, let's talk.
              </p>
              <Link
                href="https://www.linkedin.com/company/kaizenext"
                target="_blank"
                className="inline-flex items-center gap-2 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold py-4 px-8 rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95"
              >
                View Open Roles <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section> */}

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}
