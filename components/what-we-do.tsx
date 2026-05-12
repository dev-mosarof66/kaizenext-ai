"use client";
import { motion } from "motion/react";
import { ArrowRight, Code, Eye, Megaphone, Mic, Workflow } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useRouter } from "next/navigation";

const pillars = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web & App Development",
    description: "Connect your business with powerful digital solutions.",
    href: "/solutions/web-app-solutions",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Automation",
    description: "Connect your tools and automate repetitive operations.",
    href: "/solutions/ai-workflow-automation",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "AI Ad Automation",
    description: "WhatsApp-first monitoring and budget reallocation.",
    badge: "Flagship product",
    href: "/solutions/ai-ad-automation",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice & Conversational AI",
    description: "Voice agents and multilingual support systems.",
    href: "/solutions/voice-ai",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Computer Vision",
    description: "Player tracking, action detection, and analytics.",
    href: "/solutions/computer-vision",
  },
];

export function WhatWeDo() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div>
        <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold text-center text-white mb-6 tracking-tight leading-[1.1]">
          What we <span className="relative inline-block">
            <span className="absolute -inset-1 bg-kx-orange-400/20 blur-xl rounded-full"></span>
            <span className="relative text-transparent bg-clip-text bg-linear-to-r from-kx-orange-400 to-kx-orange-600 italic pr-2">
              do
            </span>
          </span>
        </h2>
        <p className="text-center text-sm md:text-base xl:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          We design, build and operate AI products end-to-end — for SMBs and enterprises across USA, UAE, KSA, Mena Region and beyond.
        </p>
      </div>
      <ul className="w-full grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
        {pillars.map((pillar) => (
          <GridItem
            key={pillar.title}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
            route={pillar.href}
          />
        ))}
      </ul>
    </motion.div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  route: string;
}

const GridItem = ({ icon, title, description, route }: GridItemProps) => {
  const router = useRouter();
  return (
    <li className={`min-h-56 list-none w-full`} onClick={() => router.push(route)}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] hover:cursor-pointer ">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="w-fit rounded-lg border text-foreground p-2">
                {icon}
              </div>
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
            </div>
            <div className="space-y-3">
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>

            {/* button */}
            <button
              className="w-max flex items-center gap-2 h-10 px-4 text-sm font-medium text-primary backdrop-blur-md self-start mt-4 cursor-pointer hover:text-primary/80 transition-all duration-300  active:scale-95"
              onClick={() => router.push(route)}
            >
              Follow <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
