"use client";

import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "How to cut ad waste using WhatsApp and AI Agents",
    category: "AI AD AUTOMATION",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The hidden costs of ignoring voice AI in outbound sales",
    category: "VOICE AI",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Deploying computer vision models at broadcast speeds",
    category: "ENGINEERING",
    date: "Sep 15, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  }
];

export function InsightsTeaser() {
  return (
    <section className="w-full bg-background py-32 flex flex-col items-center border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-6">
              <span className="rounded-full bg-kx-surface-700/50 border border-border px-4 py-1.5 text-xs font-mono font-medium tracking-[0.12em] uppercase text-primary">
                INSIGHTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-kx-white leading-[1.1]">
              Latest from the team.
            </h2>
          </div>
          
          <Button variant="outline" className="group h-12 px-6 rounded-xl border-border bg-kx-surface-950 text-kx-white hover:bg-kx-surface-700 hover:text-kx-white transition-all font-semibold">
            Browse all insights <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, i) => (
            <div key={i} className="group flex flex-col bg-kx-surface-950 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-kx-surface-950/20 group-hover:bg-transparent z-10 transition-colors" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-mono font-bold tracking-widest text-primary mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-kx-white mb-6 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center gap-6 text-xs font-mono text-muted-foreground border-t border-border/50 pt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
