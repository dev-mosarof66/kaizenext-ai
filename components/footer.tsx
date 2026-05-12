import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from '@/app/logo.png'
import Image from "next/image";
import { FaFacebookF,FaLinkedinIn  } from "react-icons/fa";


export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-kx-dark-surface pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-50 bg-kx-orange-600/5 blur-[100px] pointer-events-none rounded-t-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="cursor-pointer"
                />
            </Link>
            <p className="text-kx-muted max-w-sm mb-8 leading-relaxed">
              We design, build and operate AI products end-to-end for forward-thinking enterprises globally.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://web.facebook.com/profile.php?id=61580389798280" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-kx-orange-400/30 transition-all group">
               <FaFacebookF />
              </Link>
              <Link href="https://www.linkedin.com/company/kaizenext" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-kx-orange-400/30 transition-all group">
                 <FaLinkedinIn />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/solutions/web-app-solutions" className="text-kx-muted hover:text-kx-orange-400 transition-colors inline-flex items-center group text-sm md:text-base">
                  Web & Mobile Apps
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-workflow-automation" className="text-kx-muted hover:text-kx-orange-400 transition-colors inline-flex items-center group text-sm md:text-base">
                  Workflow Automation
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/computer-vision" className="text-kx-muted hover:text-kx-orange-400 transition-colors inline-flex items-center group text-sm md:text-base">
                  Computer Vision
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-ad-automation" className="text-kx-muted hover:text-kx-orange-400 transition-colors inline-flex items-center group text-sm md:text-base">
                  Ad Automation
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/voice-ai" className="text-kx-muted hover:text-kx-orange-400 transition-colors inline-flex items-center group text-sm md:text-base">
                  Voice & Chat Assistants
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-kx-muted hover:text-white transition-colors text-sm md:text-base">About</Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-kx-muted hover:text-white transition-colors text-sm md:text-base">Case Studies</Link>
              </li>
              <li>
                <Link href="/contact" className="text-kx-muted hover:text-white transition-colors text-sm md:text-base">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-kx-muted hover:text-white transition-colors text-sm md:text-base">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Kaizenext. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
