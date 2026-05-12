"use client";

import { useState } from "react";
import { Mic, Loader2 } from "lucide-react";

export function VoiceDemo() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  
  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTranscript(["System: Microphone connected.", "Agent: Hi there! I'm the Kaizenext voice agent. How can I help you today?"]);
      setTimeout(() => {
        setIsRecording(false);
        setTranscript(prev => [...prev, "System: Call ended by user timeout."]);
      }, 5000); // fake timeout for demo
    } else {
      setIsRecording(false);
      setTranscript((prev) => [...prev, "System: Call ended."]);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-background py-32 flex flex-col items-center justify-center">
      <div className="container px-6 mx-auto flex flex-col items-center text-center max-w-5xl">
        <div className="mb-6">
          <span className="rounded-full bg-kx-surface-700/50 border border-border px-4 py-1.5 text-xs font-mono font-medium tracking-[0.12em] uppercase text-primary">
             TRY IT LIVE
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-kx-white mb-16 leading-[1.1]">
          Talk to a Kaizenext voice agent. <span className="italic text-primary font-serif">Right now.</span>
        </h2>
        
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 justify-center bg-kx-surface-raised/40 p-8 md:p-12 rounded-[2rem] border border-border shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Left: Button */}
          <div className="flex flex-col items-center justify-center z-10 lg:w-1/2">
            <div className="relative group flex items-center justify-center">
              {/* Outer pulsing rings */}
              {isRecording && (
                <>
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute -inset-5 rounded-full border border-primary/20 animate-pulse" style={{ animationDuration: '1.5s' }} />
                  <div className="absolute -inset-10 rounded-full border border-primary/10 animate-pulse" style={{ animationDuration: '2.5s' }} />
                </>
              )}
              
              <button 
                onClick={toggleRecording}
                className={`relative w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 shadow-(--kx-glow-orange) hover:scale-105 active:scale-95 ${
                  isRecording 
                    ? "bg-kx-surface-950 border-2 border-primary text-primary" 
                    : "bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-kx-white border-0"
                }`}
              >
                {isRecording ? <Loader2 className="w-12 h-12 animate-spin" /> : <Mic className="w-12 h-12" />}
              </button>
            </div>
            <p className="mt-8 font-mono text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              {isRecording ? "Listening..." : "Tap to talk"}
            </p>
          </div>

          {/* Right: Transcript */}
          <div className="w-full lg:w-1/2 bg-kx-surface-950/80 border border-border rounded-2xl p-6 h-75 flex flex-col z-10 shadow-inner backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">AGENT_TERMINAL_01</span>
            </div>
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto text-left">
              {transcript.length === 0 ? (
                <div className="my-auto text-center opacity-50">
                  <Mic className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-mono">
                    Waiting for connection...
                  </p>
                </div>
              ) : (
                transcript.map((msg, i) => (
                  <div key={i} className={`text-sm font-mono leading-relaxed ${msg.startsWith('System') ? 'text-primary/70 text-xs' : 'text-kx-white'}`}>
                    {msg}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Prompts */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <span className="px-5 py-2.5 rounded-full bg-kx-surface-700/50 border border-border text-sm text-muted-foreground hover:text-kx-white hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
            Book me an appointment
          </span>
          <span className="px-5 py-2.5 rounded-full bg-kx-surface-700/50 border border-border text-sm text-muted-foreground hover:text-kx-white hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
            Quote me for car insurance
          </span>
          <span className="px-5 py-2.5 rounded-full bg-kx-surface-700/50 border border-border text-sm text-muted-foreground hover:text-kx-white hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
            Ask me a customer-service question
          </span>
        </div>
      </div>
    </section>
  );
}
