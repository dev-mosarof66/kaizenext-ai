"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ArrowRight, Brain, Database, Workflow } from "lucide-react";
import { OutlineButton, PrimaryButton } from "./button";

// ── Floating icon definitions ─────────────────────────────────────────────────
const FLOAT_ICONS = [
  { Icon: Brain, top: "18%", left: "5%", delay: 0, dur: 5.2, size: 30 },
  { Icon: Workflow, top: "58%", left: "94%", delay: 1.2, dur: 4.8, size: 30 },
  { Icon: Database, top: "80%", left: "18%", delay: 0.6, dur: 6.0, size: 30 },
];

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full min-h-screen overflow-hidden bg-background flex flex-col items-center px-4 pb-16"
    >
      <div className="absolute inset-0 bg-background/90 z-20" />

      {/* Floating engineering icons */}
      {FLOAT_ICONS.map(({ Icon, top, left, delay, dur, size }, i) => (
        <motion.div
          key={i}
          className="absolute z-21 pointer-events-none"
          style={{ top, left }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-9 h-9 rounded-xl bg-kx-surface-700/30 border border-kx-dark-border/40 backdrop-blur-sm flex items-center justify-center opacity-[0.35] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <Icon style={{ width: size, height: size }} className="text-kx-orange-400" />
          </div>
        </motion.div>
      ))}

      <Spotlight />

      <div className="relative z-30 px-4 pt-40 sm:pt-36 text-center flex flex-col items-center">
        <div className="mb-6 flex items-center justify-center">
          <span className="rounded-full bg-kx-surface-700/50 border border-border px-3 py-1 text-xs font-mono font-medium tracking-[0.12em] uppercase text-primary">
            KAIZENEXT · AI ENGINEERING STUDIO
          </span>
        </div>

        <h1 className="w-[90%] max-w-5xl text-4xl md:text-5xl xl:text-7xl font-bold tracking-tight text-kx-white mb-4 leading-tight">
          Build and Transform Businesses that <span className="text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 ">ships</span>
        </h1>

        <p className="w-[80%] max-w-2xl text-sm md:text-base xl:text-lg text-muted-foreground mb-7 leading-relaxed">
          We design, build and operate AI products end-to-end — for SMBs and enterprises across USA, UAE, KSA, Mena Region and beyond.
        </p>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 px-16">
          <PrimaryButton navigate="/contact" className='w-full sm:w-auto'>
            <div className="relative flex items-center gap-3 text-white font-semibold">
              Book a call <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </PrimaryButton>
          <OutlineButton navigate="/work" className='w-full sm:w-auto'>
            <div className="relative flex items-center gap-3 text-white font-semibold">
              See our work
            </div>
          </OutlineButton>
        </div>


        <div className="mt-10 pt-12 w-[80%] max-w-5xl">
          <p className="text-xs md:text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Trusted by leading companies
          </p>
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 items-center justify-start md:justify-items-center snap-x snap-mandatory">
            <div className="text-muted-foreground hover:text-kx-white transition-colors shrink-0 snap-center">
              <p className="font-semibold text-sm md:text-base whitespace-nowrap">Takteeki AI</p>
            </div>
            <div className="text-muted-foreground hover:text-kx-white transition-colors shrink-0 snap-center">
              <p className="font-semibold text-sm md:text-base whitespace-nowrap">TechCorp</p>
            </div>
            <div className="text-muted-foreground hover:text-kx-white transition-colors shrink-0 snap-center">
              <p className="font-semibold text-sm md:text-base whitespace-nowrap">InnovateLabs</p>
            </div>
            <div className="text-muted-foreground hover:text-kx-white transition-colors shrink-0 snap-center">
              <p className="font-semibold text-sm md:text-base whitespace-nowrap">CloudVenture</p>
            </div>
            <div className="text-muted-foreground hover:text-kx-white transition-colors shrink-0 snap-center">
              <p className="font-semibold text-sm md:text-base whitespace-nowrap">DataSync</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
