"use client";

import { ArrowRight, CheckCircle2, TrendingDown, Clock, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function FeaturedProduct() {
  const outcomes = [
    { text: "Cut wasted spend 23% in 8 weeks", icon: TrendingDown },
    { text: "Auto-pause underperforming ads in 60s", icon: Clock },
    { text: "Weekly PDF report your CMO actually reads", icon: ShieldAlert },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-kx-surface overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kx-orange-400/10 border border-kx-orange-400/20 text-xs md:text-sm font-medium tracking-wide text-kx-orange-400 mb-6 shadow-[0_0_20px_rgba(242,105,74,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kx-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-kx-orange-400"></span>
            </span>
            FLAGSHIP PRODUCT
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-7xl font-bold text-white mb-8 max-w-5xl tracking-tight leading-[1.1]">
            Every wasted ad dollar,{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 bg-kx-orange-400/20 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 italic pr-2">
                flagged
              </span>
            </span>{" "}
            on WhatsApp.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <p className="text-xl  text-kx-muted font-medium leading-relaxed max-w-lg">
              Stop losing money on underperforming ads. Our AI monitors your ad spend in real-time and alerts you <span className="text-primary italic">instantly on WhatsApp</span> — before they become budget-draining disasters.
            </p>
            
            <div className="space-y-6">
              {outcomes.map((outcome, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-kx-surface-700 to-kx-surface-800 border border-kx-surface-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-kx-orange-400/50 transition-all duration-300">
                    <outcome.icon className="w-5 h-5 text-kx-orange-400" />
                  </div>
                  <p className="text-lg text-white font-medium">{outcome.text}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-6">
              <Link href="/solutions/ai-ad-automation">
                <button className="relative group overflow-hidden rounded-full bg-kx-surface-800 border border-kx-surface-600 px-8 py-4 transition-all hover:border-kx-orange-400/50 hover:shadow-[0_0_40px_-10px_rgba(242,105,74,0.3)] cursor-pointer">
                  <div className="absolute inset-0 w-0 bg-kx-orange transition-all duration-250 ease-out group-hover:w-full"></div>
                  <div className="relative flex items-center gap-3 text-white font-semibold">
                    <span>See the product in action</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto flex justify-end items-end"
          >
            {/* Glowing background behind phone */}
            <div className="absolute inset-0 bg-linear-to-tr from-kx-orange-600/30 to-kx-orange-400/10 blur-[80px] rounded-full scale-90" />
            
            {/* Phone Mockup Container */}
            <div className="relative mx-auto border-[6px] border-kx-surface-950/90 rounded-[3rem] h-[600px] w-full max-w-[300px] bg-kx-surface-950 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/10 flex flex-col">
              
              {/* Hardware elements */}
              <div className="absolute top-0 inset-x-0 h-7 bg-kx-surface-950/90 rounded-b-3xl w-[140px] mx-auto z-30 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-black/50 border border-white/5"></div>
              </div>
              <div className="absolute right-[-6px] top-32 w-[6px] h-12 bg-kx-surface-800 rounded-r-md"></div>
              <div className="absolute left-[-6px] top-24 w-[6px] h-10 bg-kx-surface-800 rounded-l-md"></div>
              <div className="absolute left-[-6px] top-40 w-[6px] h-10 bg-kx-surface-800 rounded-l-md"></div>

              {/* Wallpaper/Screen */}
              <div className="absolute inset-0 bg-linear-to-b from-kx-surface-900/90 to-kx-surface-950/95" />
              
              {/* WhatsApp UI */}
              <div className="relative z-20 flex flex-col h-full w-full">
                {/* Header */}
                <div className="bg-[#128C7E]/90 backdrop-blur-xl pt-10 pb-3 px-4 flex items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                    <div className="w-full h-full bg-linear-to-br from-kx-orange-400 to-kx-orange-600 flex items-center justify-center text-white font-bold text-lg">
                      K
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold leading-tight">Kaizen AI</div>
                    <div className="text-white/80 text-[11px] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                      Online
                    </div>
                  </div>
                </div>

                {/* Chat Container */}
                <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0b141a] opacity-90" />
                  <div className="absolute inset-0 bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/gi_DckOUM5a.png')] opacity-10 mix-blend-overlay" />
                  
                  {/* Messages */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                    className="relative z-10 bg-[#202C33] rounded-2xl rounded-tl-sm p-3.5 shadow-md w-[85%] border border-white/5"
                  >
                    <p className="text-[13px] text-[#e9edef] leading-relaxed font-sans">
                      <span className="flex items-center gap-1.5 text-kx-orange-400 font-bold mb-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" /> Alert: Ad Spend
                      </span>
                      Campaign <span className="font-semibold text-white">Summer_Sale_24</span> CPA increased by 45% in the last 2 hours.
                    </p>
                    <p className="text-[10px] text-[#8696a0] mt-2 text-right">10:42 AM</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, type: "spring", bounce: 0.5 }}
                    className="relative z-10 bg-[#202C33] rounded-2xl rounded-tl-sm p-3.5 shadow-md w-[85%] border border-white/5"
                  >
                    <p className="text-[13px] text-[#e9edef] leading-relaxed font-sans">
                      <span className="flex items-center gap-1.5 text-[#00A884] font-bold mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Action Taken
                      </span>
                      Auto-paused underperforming ad sets to prevent further loss. Saved <span className="font-semibold text-[#00A884]">~$340</span>.
                    </p>
                    <p className="text-[10px] text-[#8696a0] mt-2 text-right">10:43 AM</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3, type: "spring", bounce: 0.5 }}
                    className="relative z-10 mx-auto mt-2 bg-[#182229]/80 rounded-full px-3 py-1 border border-white/5"
                  >
                    <p className="text-[10px] text-[#8696a0] font-medium">1 new message</p>
                  </motion.div>
                </div>

                {/* Input Area */}
                <div className="bg-[#202C33] p-3 flex items-center gap-2 border-t border-white/5 z-20 pb-8">
                  <div className="flex-1 bg-[#2A3942] rounded-full h-10 flex items-center px-4">
                    <span className="text-[#8696a0] text-[13px]">Message...</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shrink-0 shadow-md">
                    <svg viewBox="0 0 24 24" width="20" height="20" className="text-[#111b21] fill-current"><path d="M12 19a1 1 0 0 1-1-1v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 0 1-1 1z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
