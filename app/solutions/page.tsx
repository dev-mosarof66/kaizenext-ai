"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Zap, MessageCircle, Eye, Code, Workflow } from "lucide-react";
import { FinalCTA } from "@/components/final-cta";

const solutions = [
    {
    id: "webapp",
    title: "Web App Development",
    description: "From idea to shipped in weeks. We build SaaS products, internal tools, AI-powered web apps, and e-commerce platforms. Fixed-price quotes, weekly demos, and 30 days of post-launch support.",
    icon: Code,
    href: "/solutions/web-app-solutions",
    color: "from-sky-400 to-sky-600",
    features: ["SaaS & internal tools", "AI-powered apps", "Fixed-price delivery"],
  },
  {
    id: "workflow",
    title: "AI Workflow Automation",
    description: "Automate repetitive operations across your entire business. From lead routing to invoice processing, we build self-operating systems that free up your team for what matters.",
    icon: Workflow,
    href: "/solutions/ai-workflow-automation",
    color: "from-kx-orange-400 to-kx-orange-600",
    features: ["Lead routing & CRM sync", "Document processing", "Multi-tool orchestration"],
  },
  {
    id: "ads",
    title: "AI Ad Automation",
    description: "Our flagship product: catch wasted ad spend on WhatsApp, auto-pause underperformers, and get weekly insights. Built for SMBs spending $1K–$20K/month on Meta and Google ads.",
    icon: Zap,
    href: "/solutions/ai-ad-automation",
    color: "from-orange-400 to-orange-600",
    features: ["Real-time alerts", "Budget reallocation", "Weekly reports"],
    badge: "Flagship Product",
  },
  {
    id: "voice",
    title: "Voice & Conversational AI",
    description: "Deploy AI agents that answer phones, handle support, sell over voice, or provide multilingual customer service. Powered by ElevenLabs and Vapi, with live widget on your site.",
    icon: MessageCircle,
    href: "/solutions/voice-ai",
    color: "from-blue-400 to-blue-600",
    features: ["Voice agents", "Multilingual support", "Real-time transcription"],
  },
  {
    id: "vision",
    title: "Computer Vision",
    description: "Real-world vision systems: player tracking, action detection, heatmaps, and analytics. We're the technical partner of a Saudi-based football analysis product; we also do retail, security, and industrial.",
    icon: Eye,
    href: "/solutions/computer-vision",
    color: "from-purple-400 to-purple-600",
    features: ["Player tracking", "Event detection", "Custom models"],
  },

];

export default function SolutionsHub() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-24 w-full">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-1/4 w-[70%] h-[70%] bg-kx-surface-700/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-kx-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="w-full  mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-kx-orange font-mono text-xs font-medium tracking-[0.12em] uppercase mb-6">
                Services
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                What we <span className="italic font-serif text-kx-orange">build.</span>
              </h1>
              <p className="text-lg md:text-xl text-kx-dark-muted max-w-2xl mx-auto leading-relaxed">
                Five pillars of AI engineering. Pick one, combine several, or let us build something entirely custom. Every solution is production-grade and paired with our hands-on team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative py-24 md:py-32">
          <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <Link href={solution.href}>
                      <div className="relative h-full rounded-3xl border border-kx-dark-border bg-kx-surface-raised/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-kx-orange/20 hover:shadow-[0_0_40px_rgba(232,89,58,0.12)] overflow-hidden flex flex-col">
                        {/* Badge */}
                        {solution.badge && (
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-kx-orange/10 border border-kx-orange/30 text-kx-orange">
                            {solution.badge}
                          </div>
                        )}

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mb-3 text-kx-white group-hover:text-kx-orange transition-colors">
                          {solution.title}
                        </h3>

                        <p className="text-kx-dark-muted mb-6 flex-1 leading-relaxed text-sm">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-kx-dark-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-kx-orange/50" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-kx-orange font-bold text-sm group-hover:translate-x-1 transition-transform">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </div>
  );
}
