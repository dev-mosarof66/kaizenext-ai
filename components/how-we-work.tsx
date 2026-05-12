"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { useRef } from "react";

export function HowWeWork() {
  const steps = [
    { 
      step: "Discover", 
      description: "Understand your goals, constraints, and AI opportunities.",
      icon: Compass
    },
    { 
      step: "Design", 
      description: "Architect solutions that align with your product vision.",
      icon: PenTool
    },
    { 
      step: "Build", 
      description: "Ship production-ready AI systems with full transparency.",
      icon: Code2
    },
    { 
      step: "Operate", 
      description: "Monitor, optimize, and iterate continuously.",
      icon: Rocket
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animate the line drawing across the steps based on scroll
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <motion.section 
      ref={containerRef} 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full py-24 md:py-32 bg-kx-surface overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-100 bg-kx-orange-600/5 blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-medium tracking-wide text-primary mb-6">
            PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            How we <span className="relative inline-block">
              <span className="absolute -inset-1 bg-kx-orange-400/20 blur-xl rounded-full"></span>
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 italic pr-2">
                work
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-kx-muted font-medium max-w-2xl mx-auto">
            A proven 4-step process to ship AI products that actually work.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Animated horizontal connecting line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-white/5 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-linear-to-r from-kx-orange-600 to-kx-orange-400" 
              style={{ width: lineWidth }}
            />
          </div>

          {/* Animated vertical connecting line (Mobile) */}
          <div className="md:hidden absolute top-8 bottom-8 left-8 w-0.5 bg-white/5 overflow-hidden">
             <motion.div 
              className="absolute top-0 left-0 right-0 bg-linear-to-b from-kx-orange-600 to-kx-orange-400" 
              style={{ height: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8 group"
              >
                {/* Step number / icon circle */}
                <div className="relative shrink-0 flex items-center justify-center">
                  {/* Outer glowing halo on hover */}
                  <div className="absolute -inset-4 bg-kx-orange-400/0 rounded-full group-hover:bg-kx-orange-400/20 blur-xl transition-all duration-500" />
                  
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-kx-surface-950 border border-white/10 group-hover:border-kx-orange-400/50 flex items-center justify-center transition-all duration-500 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-kx-surface-800/80 to-transparent opacity-50" />
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-kx-muted group-hover:text-kx-orange-400 transition-colors duration-500 relative z-20" />
                    
                    {/* Step number watermark */}
                    <span className="absolute -bottom-2 -right-1 text-4xl font-black text-white/5 group-hover:text-kx-orange-400/10 transition-colors duration-500 pointer-events-none select-none">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:text-center mt-2 md:mt-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-kx-orange-400 transition-colors">
                    {item.step}
                  </h3>
                  <p className="text-kx-muted font-medium text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
