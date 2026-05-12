"use client";

import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Kaizen AI transformed our entire infrastructure. They didn't just build an AI product—they engineered a competitive advantage that scales perfectly. The speed and precision of their computer vision models exceeded all expectations.",
      name: "Jonathan Doe",
      designation: "CTO, Global Tech Partners",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Implementing Kaizen AI's predictive models reduced our operational costs by 40%. The team deeply understood our complex logistics requirements and delivered a solution that was surprisingly intuitive to use.",
      name: "Sarah Chen",
      designation: "VP of Operations, Nexus Logistics",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "The real-time analytics dashboard they built for our broadcast is nothing short of magical. It handles thousands of events per second with zero latency. Kaizen AI is the gold standard for high-performance AI.",
      name: "Marcus Reynolds",
      designation: "Director of Broadcasting, Premier Sports",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3000&auto=format&fit=crop",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-kx-surface overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-100 bg-kx-orange-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-medium tracking-wide text-primary mb-6">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Trusted by{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute -inset-1 bg-kx-orange-400/20 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 italic pr-2">
                visionaries.
              </span>
            </span>
          </h2>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </motion.section>
  );
}
