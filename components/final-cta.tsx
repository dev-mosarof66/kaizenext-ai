"use client";

import { ArrowRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-kx-surface overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[48px_48px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-kx-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-5xl mx-auto bg-kx-surface-950/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden ring-1 ring-white/5"
        >
          {/* Inner Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-kx-orange-400/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-kx-orange-600/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kx-orange-400/10 border border-kx-orange-400/20 text-xs md:text-sm font-medium tracking-wide text-kx-orange-400 mb-8 shadow-[0_0_20px_rgba(242,105,74,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kx-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-kx-orange-400"></span>
              </span>
              GET STARTED
            </span>
            
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Let&apos;s build something that{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute -inset-1 bg-kx-orange-400/20 blur-xl rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 italic pr-2">
                  ships.
                </span>
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-kx-muted font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Let&apos;s talk about what&apos;s possible.
            </p>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-kx-surface-800 border border-kx-surface-600 px-8 py-3 transition-all hover:border-kx-orange-400/50 hover:shadow-[0_0_40px_-10px_rgba(242,105,74,0.4)] cursor-pointer">
                  <div className="absolute inset-0 w-0 bg-kx-orange transition-all duration-300 ease-out group-hover:w-full"></div>
                  <div className="relative flex items-center justify-center gap-3 text-white font-semibold md:text-lg">
                    <Calendar className="w-5 h-5" />
                    <span>Book a discovery call</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
              <Link href="mailto:hello@kaizenext.com" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 py-3 transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer backdrop-blur-md shadow-lg">
                  <div className="relative flex items-center justify-center gap-3 text-white font-semibold md:text-lg">
                    <Mail className="w-5 h-5 text-kx-muted group-hover:text-white transition-colors" />
                    <span className="flex items-center gap-1">Email us <span className="hidden sm:block"> ( hello@kaizenext.com )</span></span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
