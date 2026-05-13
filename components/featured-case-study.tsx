"use client";

import { ArrowRight, Activity, Zap, Target, Focus } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { OutlineButton } from "./button";

export function FeaturedCaseStudy() {
  const kpis = [
    { value: "22", label: "Events tracked/sec", icon: Activity },
    { value: "96%", label: "Detection accuracy", icon: Target },
    { value: "<2s", label: "End-to-end latency", icon: Zap },
  ];

  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-kx-surface overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-10%", "10%", "-10%"],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#00ff88]/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["10%", "-10%", "10%"],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-kx-orange-600/10 blur-[120px]"
        />
      </div>

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kx-orange-400/10 border border-kx-orange-400/20 text-xs md:text-sm font-medium tracking-wide text-kx-orange-400 mb-6 shadow-[0_0_20px_rgba(242,105,74,0.15)]">
            <Focus className="w-3.5 h-3.5" />
            CASE STUDY · COMPUTER VISION
          </span>
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Player analysis at{" "}
            <span className="relative whitespace-nowrap inline-block">
              <span className="absolute -inset-1 bg-kx-orange-400/20 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 italic pr-2">
                broadcast
              </span>
            </span>{" "}
            speed.
          </h2>
          <p className="text-lg md:text-xl text-kx-muted font-medium max-w-2xl">
            Technical partner powering real-time player tracking and analytics for professional football broadcast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="lg:col-span-8 relative w-full order-2 lg:order-1"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-kx-orange-600/30 to-kx-orange-400/10 blur-2xl rounded-[2rem] opacity-50" />

            <div className="relative border border-white/10 rounded-[1.5rem] bg-kx-surface-950 shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/5 flex flex-col h-100 md:h-125">
              {/* Header */}
              <div className="bg-kx-surface-900 border-b border-white/5 px-4 py-3 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-white/60 text-xs font-mono bg-black/20 px-2 py-0.5 rounded border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    LIVE FEED: CAM_04
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                  <span>60 FPS</span>
                  <span>•</span>
                  <span>1080p</span>
                </div>
              </div>

              {/* Vision Area */}
              <div className="flex-1 relative bg-[#0b1210] overflow-hidden flex items-center justify-center">
                {/* Field Background Overlay */}
                <div className="absolute inset-x-8 inset-y-12 border-2 border-white/10 rounded-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                  {/* Penalty Box Top */}
                  <div className="absolute top-0 left-1/2 w-64 h-24 border-2 border-t-0 border-white/10 -translate-x-1/2"></div>
                  {/* Penalty Box Bottom */}
                  <div className="absolute bottom-0 left-1/2 w-64 h-24 border-2 border-b-0 border-white/10 -translate-x-1/2"></div>
                </div>

                {/* Computer Vision Overlay Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8808_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-size-[32px_32px] mix-blend-overlay"></div>

                {/* Animated Scanner Line */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-32 bg-linear-to-b from-transparent via-[#00ff88]/10 to-transparent pointer-events-none border-b border-[#00ff88]/30"
                />

                {/* Players / Nodes */}
                <div className="absolute inset-0 z-10">
                  {/* Team A */}
                  {[
                    { id: "P04", x: ["20%", "20%", "35%", "40%", "45%", "45%", "20%"], y: ["40%", "40%", "50%", "52%", "55%", "55%", "40%"], speed: "22.4" },
                    { id: "P09", x: ["60%", "60%", "70%", "85%", "88%", "88%", "60%"], y: ["20%", "20%", "15%", "25%", "40%", "40%", "20%"], speed: "28.5" },
                    { id: "P10", x: ["40%", "40%", "55%", "70%", "85%", "85%", "40%"], y: ["65%", "65%", "70%", "55%", "45%", "45%", "65%"], speed: "25.1" },
                  ].map((player, i) => (
                    <motion.div
                      key={`team-a-${i}`}
                      animate={{
                        left: player.x,
                        top: player.y,
                        opacity: [0, 1, 1, 1, 1, 0, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.1, 0.4, 0.7, 0.9, 0.95, 1]
                      }}
                      className="absolute w-4 h-4 rounded-full bg-kx-orange-400 border border-white shadow-[0_0_15px_rgba(242,105,74,0.6)]"
                    >
                      {/* Bounding Box */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-3 border-2 border-kx-orange-400/50 rounded-sm bg-kx-orange-400/5"
                      />
                      {/* Label */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-kx-surface-900/80 border border-kx-orange-400/30 text-[9px] font-mono text-white px-1.5 py-0.5 rounded whitespace-nowrap backdrop-blur-sm">
                        {player.id} <span className="text-kx-orange-400">{player.speed}km/h</span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Team B */}
                  {[
                    { id: "P07", x: ["35%", "35%", "45%", "60%", "75%", "75%", "35%"], y: ["55%", "55%", "60%", "65%", "55%", "55%", "55%"], speed: "24.2" },
                    { id: "P11", x: ["55%", "55%", "60%", "75%", "80%", "80%", "55%"], y: ["35%", "35%", "30%", "40%", "45%", "45%", "35%"], speed: "21.8" },
                    { id: "P05", x: ["75%", "75%", "78%", "82%", "85%", "85%", "75%"], y: ["50%", "50%", "45%", "45%", "45%", "45%", "50%"], speed: "18.5" }
                  ].map((player, i) => (
                    <motion.div
                      key={`team-b-${i}`}
                      animate={{
                        left: player.x,
                        top: player.y,
                        opacity: [0, 1, 1, 1, 1, 0, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.1, 0.4, 0.7, 0.9, 0.95, 1]
                      }}
                      className="absolute w-4 h-4 rounded-full bg-[#00D4FF] border border-white shadow-[0_0_15px_rgba(0,212,255,0.6)]"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute -inset-3 border-2 border-[#00D4FF]/50 rounded-sm bg-[#00D4FF]/5"
                      />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-kx-surface-900/80 border border-[#00D4FF]/30 text-[9px] font-mono text-white px-1.5 py-0.5 rounded whitespace-nowrap backdrop-blur-sm">
                        {player.id} <span className="text-[#00D4FF]">{player.speed}km/h</span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Ball */}
                  <motion.div
                    animate={{
                      left: ["20%", "20%", "35%", "70%", "88%", "88%", "20%"],
                      top: ["40%", "40%", "50%", "55%", "40%", "40%", "40%"],
                      opacity: [0, 1, 1, 1, 1, 0, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.1, 0.4, 0.7, 0.9, 0.95, 1]
                    }}
                    className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
                  >
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 border border-white rounded-full"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="h-10 bg-[#060a09] border-t border-white/5 flex items-center px-4 overflow-hidden">
                <motion.div
                  animate={{ x: [0, -400] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap font-mono text-[10px] text-[#00ff88]/60 flex gap-8"
                >
                  <span>LOG: [EVENT] Player_04 sprint detected (28.4 km/h)</span>
                  <span>LOG: [EVENT] Pass accuracy computed (92%)</span>
                  <span>LOG: [ALERT] Formation shift 4-4-2</span>
                  <span>LOG: [TRACKING] 22 entities locked</span>
                  <span>LOG: [EVENT] Player_04 sprint detected (28.4 km/h)</span>
                  <span>LOG: [EVENT] Pass accuracy computed (92%)</span>
                  <span>LOG: [ALERT] Formation shift 4-4-2</span>
                  <span>LOG: [TRACKING] 22 entities locked</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* KPIs Section */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-1 lg:order-2">
            {kpis.map((kpi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="p-6 rounded-[1.25rem] bg-kx-surface-800/40 border border-white/5 hover:border-kx-orange-400/30 hover:bg-kx-surface-800/80 transition-all group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-kx-surface-950 flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-kx-orange-400/30 transition-all duration-300">
                    <kpi.icon className="w-4 h-4 text-kx-orange-400" />
                  </div>
                  <p className="text-kx-muted font-medium text-sm uppercase tracking-wider">{kpi.label}</p>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-kx-orange-400 transition-colors">
                  {kpi.value}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4"
            >
              <OutlineButton navigate="" className="w-full">
                <div className="relative flex items-center gap-3 text-white font-semibold">
                  See full case study <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </OutlineButton>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
