"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 flex items-center justify-center px-6">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-kx-orange/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-kx-orange/3 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="w-full max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* 404 Code */}
            <div>
              <div className="text-9xl md:text-[150px] font-black text-transparent bg-gradient-to-r from-kx-orange to-kx-orange-400 bg-clip-text leading-none">
                404
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Page not found
              </h1>
              <p className="text-lg text-kx-dark-muted max-w-lg mx-auto">
                The page you're looking for doesn't exist or has moved. Let's get you back on track.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/"
                className="px-8 py-3 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] transition-all hover:-translate-y-1 active:scale-95"
              >
                Go home
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-3 border border-kx-dark-border text-kx-white font-bold rounded-xl hover:border-kx-orange/50 hover:text-kx-orange transition-all flex items-center justify-center gap-2"
              >
                Explore solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-kx-dark-border/50 space-y-4">
              <p className="text-sm text-kx-dark-muted">Quick links:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/about" className="text-sm text-kx-orange hover:text-kx-orange-400 transition-colors">
                  About us
                </Link>
                <span className="text-kx-dark-border/30">•</span>
                <Link href="/work" className="text-sm text-kx-orange hover:text-kx-orange-400 transition-colors">
                  Our work
                </Link>
                <span className="text-kx-dark-border/30">•</span>
                <Link href="/contact" className="text-sm text-kx-orange hover:text-kx-orange-400 transition-colors">
                  Contact
                </Link>
                <span className="text-kx-dark-border/30">•</span>
                <Link href="/insights" className="text-sm text-kx-orange hover:text-kx-orange-400 transition-colors">
                  Insights
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
