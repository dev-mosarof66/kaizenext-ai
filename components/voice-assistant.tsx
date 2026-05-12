"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mic, MicOff, Volume2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
}

type AssistantState = "idle" | "listening" | "thinking" | "speaking";

// ── Hook ───────────────────────────────────────────────────────────────────────

function useVoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<AssistantState>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(true);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SR = (window.SpeechRecognition ?? (window as Window & typeof globalThis & { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition);
    if (!SR) { setSupported(false); return; }

    const recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const interim = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join("");
      setTranscript(interim);
    };

    recognition.onend = () => {
      setTranscript((prev) => {
        if (prev.trim()) sendMessage(prev.trim());
        return "";
      });
    };

    recognition.onerror = () => setState("idle");
    recognitionRef.current = recognition;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Greet on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = "Hi! I'm Kai, Kaizenext's AI assistant. Ask me anything about our services, pricing, or process — or say \"book a call\" to get started.";
      addAssistantMessage(greeting);
      speak(greeting);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addAssistantMessage = (content: string) =>
    setMessages((prev) => [...prev, { role: "assistant", content }]);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 1.05;
    utt.pitch = 1;
    // Prefer a natural English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) =>
      /Samantha|Google US English|Microsoft|Zira|David/i.test(v.name)
    );
    if (preferred) utt.voice = preferred;
    utt.onstart = () => setState("speaking");
    utt.onend = () => setState("idle");
    utt.onerror = () => setState("idle");
    synthRef.current = utt;
    setState("speaking");
    window.speechSynthesis.speak(utt);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => {
      const updated = [...prev, userMessage];
      fetchReply(updated);
      return updated;
    });
    setState("thinking");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchReply = useCallback(async (history: Message[]) => {
    try {
      const res = await fetch("/api/voice-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      const reply: string = data.reply ?? "Sorry, something went wrong.";
      addAssistantMessage(reply);
      speak(reply);
    } catch {
      addAssistantMessage("Sorry, I'm having trouble connecting right now.");
      setState("idle");
    }
  }, [speak]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || state !== "idle") return;
    window.speechSynthesis?.cancel();
    setState("listening");
    setTranscript("");
    try { recognitionRef.current.start(); } catch { setState("idle"); }
  }, [state]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setState("idle");
  }, []);

  const toggle = useCallback(() => {
    if (state === "speaking") window.speechSynthesis?.cancel();
    if (state === "listening") recognitionRef.current?.stop();
    setIsOpen((o) => !o);
  }, [state]);

  const close = useCallback(() => {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();
    setIsOpen(false);
    setState("idle");
  }, []);

  const clearChat = useCallback(() => {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();
    setMessages([]);
    setState("idle");
  }, []);

  return {
    isOpen, toggle, close, clearChat,
    state, messages, transcript,
    supported, messagesEndRef,
    startListening, stopListening,
  };
}

// ── Visualizer ─────────────────────────────────────────────────────────────────

function Visualizer({ state }: { state: AssistantState }) {
  const isActive = state !== "idle";
  const color = state === "listening" ? "#22c55e" : state === "speaking" ? "#E8593A" : "#E8593A";

  return (
    <div className="relative flex items-center justify-center w-20 h-20 mx-auto my-4">
      {/* Outer rings */}
      {isActive && [1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ borderColor: `${color}${i === 1 ? "50" : i === 2 ? "30" : "15"}` }}
          animate={{ scale: [1, 1 + i * 0.35], opacity: [0.6 / i, 0] }}
          transition={{ duration: 1.6, delay: i * 0.25, repeat: Infinity, ease: "easeOut" }}
          initial={{ width: "100%", height: "100%" }}
        />
      ))}

      {/* Core orb */}
      <motion.div
        className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}30, ${color}15)`, border: `1px solid ${color}40` }}
        animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={{ duration: 0.8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: `radial-gradient(circle, ${color}20, transparent 70%)` }}
          animate={isActive ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.3 }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        {state === "thinking" ? (
          <Loader2 className="w-6 h-6 text-kx-orange animate-spin" />
        ) : state === "speaking" ? (
          <Volume2 className="w-6 h-6 text-kx-orange" />
        ) : state === "listening" ? (
          <Mic className="w-6 h-6 text-green-400" />
        ) : (
          <span className="text-lg font-bold text-kx-orange">K</span>
        )}
      </motion.div>
    </div>
  );
}

// ── Status label ───────────────────────────────────────────────────────────────

const STATUS: Record<AssistantState, { label: string; color: string }> = {
  idle: { label: "Tap the mic to speak", color: "text-kx-dark-muted" },
  listening: { label: "Listening…", color: "text-green-400" },
  thinking: { label: "Thinking…", color: "text-kx-orange" },
  speaking: { label: "Speaking…", color: "text-kx-orange" },
};

// ── Main component ─────────────────────────────────────────────────────────────

export function VoiceAssistant() {
  const {
    isOpen, toggle, close, clearChat,
    state, messages, transcript,
    supported, messagesEndRef,
    startListening, stopListening,
  } = useVoiceAssistant();

  const { label, color } = STATUS[state];

  return (
    <>
      {/* ── Panel ──────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[340px] md:w-[380px] rounded-3xl overflow-hidden border border-kx-dark-border shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.03)] bg-kx-surface-950/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-kx-dark-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-kx-orange/15 border border-kx-orange/25 flex items-center justify-center">
                  <span className="text-sm font-bold text-kx-orange">K</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-kx-white leading-none">Kai</p>
                  <p className="text-[10px] text-kx-dark-muted mt-0.5">Kaizenext AI Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="text-[10px] text-kx-dark-muted hover:text-kx-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={close}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-kx-dark-muted hover:text-kx-white hover:bg-white/8 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visualizer */}
            <Visualizer state={state} />

            {/* Status */}
            <p className={cn("text-xs text-center mb-3 transition-colors font-medium", color)}>
              {transcript || label}
            </p>

            {/* Messages */}
            {messages.length > 0 && (
              <div className="mx-3 mb-3 max-h-52 overflow-y-auto space-y-2 scrollbar-hide px-1">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed",
                        msg.role === "user"
                          ? "bg-kx-orange/20 border border-kx-orange/25 text-kx-white rounded-br-sm"
                          : "bg-kx-surface-700/60 border border-kx-dark-border text-kx-dark-muted rounded-bl-sm"
                      )}
                    >
                      {msg.content}
                    </motion.div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Controls */}
            <div className="px-5 pb-5 pt-1">
              {!supported ? (
                <p className="text-xs text-center text-kx-dark-muted">
                  Voice not supported in this browser. Try Chrome or Edge.
                </p>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={state === "listening" ? stopListening : startListening}
                    disabled={state === "thinking" || state === "speaking"}
                    whileTap={{ scale: 0.92 }}
                    className={cn(
                      "relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed",
                      state === "listening"
                        ? "bg-green-500/20 border-2 border-green-500 text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.3)]"
                        : "bg-kx-orange/15 border-2 border-kx-orange/50 text-kx-orange hover:bg-kx-orange/25 hover:border-kx-orange shadow-[0_0_24px_rgba(232,89,58,0.2)]"
                    )}
                  >
                    {state === "listening" ? (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-green-500"
                          animate={{ scale: [1, 1.4], opacity: [1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <MicOff className="w-6 h-6" />
                      </>
                    ) : (
                      <Mic className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>
              )}

              <p className="text-[10px] text-kx-dark-muted/50 text-center mt-3">
                Powered by Claude · Kaizenext AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger ──────────────────────────────────────────────── */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-linear-to-b from-kx-orange-400 to-kx-orange-600 shadow-[0_8px_32px_rgba(232,89,58,0.5)] flex items-center justify-center"
        aria-label={isOpen ? "Close Kai assistant" : "Open Kai assistant"}
      >
        {/* Idle pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-kx-orange/60"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div key="mic" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Mic className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
