"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from '@/app/logo.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { Workflow, Megaphone, Mic, Eye, Code, Menu, X } from "lucide-react";
import { Button as ShadcnButton } from '@/components/ui/button'
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4",
      scrolled ? "pt-4" : "pt-0"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto transition-all duration-500 ease-in-out relative overflow-visible",
        scrolled 
          ? "bg-kx-surface/80 backdrop-blur-xl border border-kx-dark-border rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "bg-transparent border-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <Image src={Logo} alt="Logo" width={150} height={40} className="w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-kx-dark-ink">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-kx-card! hover:bg-transparent! hover:text-kx-orange-400! focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-kx-orange-400! text-sm font-medium transition-all">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0! border-none">
                    <div className="w-4xl p-4 grid grid-cols-3 gap-6 shadow-2xl bg-kx-surface-950/95 backdrop-blur-2xl border border-kx-dark-border">
                      {/* 2-Column Links */}
                      <ul className="col-span-2 grid grid-cols-2 gap-2">
                        <ListItem href="/solutions/web-app-solutions" title="Web & App Development" icon={<Workflow className="w-4 h-4 text-kx-orange-400" />}>
                          Build custom web and mobile applications tailored to your needs.
                        </ListItem>
                        <ListItem href="/solutions/ai-workflow-automation" title="Workflow Automation" icon={<Workflow className="w-4 h-4 text-kx-orange-400" />}>
                          Automate repetitive operations and connect your tools.
                        </ListItem>
                        <ListItem href="/solutions/ai-ad-automation" title="AI Ad Automation" icon={<Megaphone className="w-4 h-4 text-kx-orange-400" />}>
                          WhatsApp-first ad monitoring and budget reallocation.
                        </ListItem>
                        <ListItem href="/solutions/voice-ai" title="Voice & Conversational AI" icon={<Mic className="w-4 h-4 text-kx-orange-400" />}>
                          Voice agents and multilingual support systems.
                        </ListItem>
                        <ListItem href="/solutions/computer-vision" title="Computer Vision" icon={<Eye className="w-4 h-4 text-kx-orange-400" />}>
                          Player tracking, action detection, and vision analytics.
                        </ListItem>
                      </ul>

                      {/* Featured Card */}
                      <div className="col-span-1 flex flex-col bg-kx-surface-raised/60 rounded-xl p-5 border border-kx-dark-border justify-between">
                        <div>
                          <span className="inline-block rounded-full bg-kx-orange-400/20 border border-kx-orange-400/30 px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase text-kx-orange-400 mb-4">
                            NEW
                          </span>
                          <h4 className="text-lg font-bold text-kx-white mb-2">AI Ad Automation</h4>
                          <p className="text-xs text-kx-dark-muted leading-relaxed">
                            Every wasted ad dollar, flagged on WhatsApp. Stop burning budget.
                          </p>
                        </div>
                        <Link href="/solutions/ai-ad-automation" className="mt-6">
                          <button className="w-full py-2 px-4 rounded-lg bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-kx-white text-xs font-bold hover:scale-105 transition-transform">
                            See product &rarr;
                          </button>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {[
                  { name: "Work", href: "/work" },
                  { name: "About", href: "/about" },
                  // { name: "Insights", href: "/insights" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      active={pathname === item.href}
                      className="hover:bg-transparent! data-active:bg-transparent! data-active:hover:bg-transparent! data-active:focus:bg-transparent! text-kx-card! hover:text-kx-orange-400!"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                          pathname === item.href ? "text-primary" : ""
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block relative group">
              <div className="glowing-bg absolute -inset-0.5 bg-linear-to-r from-green-600 via-yellow-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"> </div>
              <button type="button" className="relative bg-background group-hover:cursor-pointer active:scale-95 duration-150 py-2.5 px-6 text-sm font-semibold bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white border-0 shadow-(--kx-glow-orange) rounded-md transition-transform whitespace-nowrap">
                Book a Call
              </button>
            </div>

            <ShadcnButton
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 p-0 text-kx-dark-ink rounded-full border-kx-dark-border bg-kx-surface-raised/60 backdrop-blur-md focus:ring-0"
              variant='outline'
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </ShadcnButton>
          </div>

        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full md:hidden fixed inset-0 top-0 left-0 backdrop-blur-lg z-[-1]"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3, ease: "circOut" }}
                className="w-full md:hidden absolute top-full left-0 right-0 mt-2 bg-kx-surface-950 border border-kx-dark-border rounded-2xl shadow-2xl overflow-hidden z-50 "
              >
                <div className="p-6 space-y-2">
                  <div>
                    <button
                      onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                      className="w-full text-left p-3 hover:bg-white/5 rounded-xl transition-colors text-kx-white font-bold flex items-center justify-between"
                    >
                      Solutions
                      <motion.span
                        animate={{ rotate: solutionsExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence mode="wait">
                      {solutionsExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-2 p-2 bg-kx-surface-raised/40 rounded-xl mt-2">
                            {[
                              { name: "Web & Mobile Apps", icon: Code, href: "/solutions/web-app-solutions" },
                              { name: "Workflow Automation", icon: Workflow, href: "/solutions/ai-workflow-automation" },
                              { name: "AI Ad Automation", icon: Megaphone, href: "/solutions/ai-ad-automation" },
                              { name: "Voice & Conversational AI", icon: Mic, href: "/solutions/voice-ai" },
                              { name: "Computer Vision", icon: Eye, href: "/solutions/computer-vision" },
                            ].map((sol) => (
                              <Link
                                key={sol.name}
                                href={sol.href}
                                className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors group"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <sol.icon className="w-4 h-4 text-kx-orange-400" />
                                <span className="text-sm font-medium text-kx-muted group-hover:text-kx-white">{sol.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1">
                    {[
                      { name: "Work", href: "/work" },
                      { name: "About", href: "/about" },
                      // { name: "Insights", href: "/insights" },
                      { name: "Contact", href: "/contact" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "block p-3 hover:bg-white/5 rounded-xl transition-colors font-bold",
                          pathname === item.href ? "text-primary" : "text-kx-white"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button type="button" className="w-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 hover:from-kx-orange-600 hover:to-kx-orange-600 text-kx-white border-0 shadow-(--kx-glow-orange) rounded-md py-3 px-6 text-sm font-semibold transition-transform active:scale-95 duration-150">
                      Book a Call
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode; title: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/5 hover:translate-x-1",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 flex items-center justify-center rounded-lg bg-kx-surface-600  group-hover:border-kx-orange-400/50 group-hover:bg-kx-orange-400/10 transition-colors">
              {icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold leading-none text-kx-white group-hover:text-kx-orange-400 transition-colors mb-1">{title}</div>
              <p className="line-clamp-2 text-[11px] leading-relaxed text-kx-muted group-hover:text-kx-white/70 transition-colors">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
