/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaMicrophoneAlt } from "react-icons/fa"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"

const WELCOME_LINE = "Hi, I'm Kai — Kaizenext's AI assistant. Tap the mic and ask me anything."

type Status = "idle" | "listening" | "thinking" | "speaking" | "unsupported" | "denied"

// Browser SpeechRecognition is vendor-prefixed; declare a minimal shape we use.
type SpeechRecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike
    webkitSpeechRecognition?: new () => SpeechRecognitionLike
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

function fakeReply(prompt: string): string {
  const p = prompt.toLowerCase()
  if (p.includes("hello") || p.includes("hi")) return "Hi there — how can Kaizen help today?"
  if (p.includes("price") || p.includes("cost")) return "Pricing depends on scope. I can connect you with the team for an estimate."
  if (p.includes("contact")) return "You can reach us through the contact form, or I can pass along your details."
  return "Got it. Let me think about that — in production I'd hand this to your AI backend."
}

export function VoiceAssistant() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [transcript, setTranscript] = useState("")
  const [reply, setReply] = useState(WELCOME_LINE)
  const [ttsEnabled, setTtsEnabled] = useState(true)

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const finalTranscriptRef = useRef("")
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioUrlRef = useRef<string | null>(null)
  const ttsAbortRef = useRef<AbortController | null>(null)
  const hasGreetedRef = useRef(false)
  const ttsEnabledRef = useRef(ttsEnabled)
  // Once the /api/tts route signals it's unusable (no key, auth/abuse failure,
  // etc.) we skip it for the rest of the session and go straight to the
  // browser SpeechSynthesis fallback.
  const remoteTtsDisabledRef = useRef(false)

  useEffect(() => {
    ttsEnabledRef.current = ttsEnabled
  }, [ttsEnabled])

  const stopPlayback = useCallback(() => {
    ttsAbortRef.current?.abort()
    ttsAbortRef.current = null
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.removeAttribute("src")
      audioRef.current.load()
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current)
      audioUrlRef.current = null
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
    }
  }, [])

  console.log(transcript)

  const speakFallback = useCallback((text: string): Promise<void> => {
    return new Promise((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        resolve()
        return
      }
      const utter = new SpeechSynthesisUtterance(text)
      utter.onend = () => resolve()
      utter.onerror = () => resolve()
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utter)
    })
  }, [])

  const speak = useCallback(
    async (text: string) => {
      if (!ttsEnabledRef.current || !text.trim()) return

      stopPlayback()
      setStatus("speaking")

      // If the remote TTS route has already proven unusable this session
      // (missing key, ElevenLabs 401, etc.) skip the round-trip.
      if (remoteTtsDisabledRef.current) {
        try {
          await speakFallback(text)
        } finally {
          setStatus((s) => (s === "speaking" ? "idle" : s))
        }
        return
      }

      const controller = new AbortController()
      ttsAbortRef.current = controller

      try {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
          signal: controller.signal,
        })

        if (!res.ok) {
          const detail = (await res.json().catch(() => null)) as
            | { upstreamStatus?: number; upstream?: string }
            | null
          // Disable remote TTS for the rest of the session on terminal
          // failures: no API key (503) or upstream auth/abuse (401/403).
          const upstream = detail?.upstreamStatus
          if (res.status === 503 || upstream === 401 || upstream === 403) {
            remoteTtsDisabledRef.current = true
          }
          throw new Error(
            `TTS ${res.status}${detail ? ` — ${JSON.stringify(detail)}` : ""}`,
          )
        }

        const blob = await res.blob()
        if (controller.signal.aborted) return

        const url = URL.createObjectURL(blob)
        audioUrlRef.current = url

        const audio = audioRef.current ?? new Audio()
        audioRef.current = audio
        audio.src = url

        await new Promise<void>((resolve) => {
          const cleanup = () => {
            audio.onended = null
            audio.onerror = null
            resolve()
          }
          audio.onended = cleanup
          audio.onerror = cleanup
          audio.play().catch(cleanup)
        })
      } catch (err) {
        if ((err as { name?: string }).name === "AbortError") return
        // Suppress noise for known-terminal cases we just disabled above —
        // the fallback handles them transparently.
        if (!remoteTtsDisabledRef.current) {
          console.error("[voice-assistant] TTS error, falling back:", err)
        }
        await speakFallback(text)
      } finally {
        if (audioUrlRef.current) {
          URL.revokeObjectURL(audioUrlRef.current)
          audioUrlRef.current = null
        }
        if (ttsAbortRef.current === controller) ttsAbortRef.current = null
        setStatus((s) => (s === "speaking" ? "idle" : s))
      }
    },
    [speakFallback, stopPlayback],
  )

  // Initialise recognition once on mount.
  useEffect(() => {
    const Ctor = getRecognitionCtor()
    if (!Ctor) {
      setStatus("unsupported")
      setReply("Your browser doesn't support speech recognition. Try Chrome or Edge.")
      return
    }

    const recognition = new Ctor()
    recognition.lang = "en-US"
    recognition.continuous = false
    recognition.interimResults = true

    recognition.onresult = (event) => {
      let interim = ""
      let final = ""
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i]
        const text = result[0].transcript
        if (result.isFinal) final += text
        else interim += text
      }
      if (final) finalTranscriptRef.current = final
      setTranscript(final || interim)
    }

    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setStatus("denied")
        setReply("Microphone access was blocked. Enable it in your browser settings to continue.")
      } else if (event.error === "no-speech") {
        setStatus("idle")
        setReply("I didn't catch that — try again.")
      } else {
        setStatus("idle")
      }
    }

    recognition.onend = () => {
      const captured = finalTranscriptRef.current.trim()
      finalTranscriptRef.current = ""
      if (!captured) {
        setStatus((s) => (s === "listening" ? "idle" : s))
        return
      }
      setStatus("thinking")
      setTimeout(() => {
        const answer = fakeReply(captured)
        setReply(answer)
        void speak(answer)
      }, 400)
    }

    recognitionRef.current = recognition

    return () => {
      try {
        recognition.abort()
      } catch {
        // ignore
      }
      stopPlayback()
    }
  }, [speak, stopPlayback])

  // Dialog open/close lifecycle: play welcome once on first open, clean up on close.
  useEffect(() => {
    if (!open) {
      recognitionRef.current?.abort()
      stopPlayback()
      setStatus("idle")
      setTranscript("")
      return
    }

    if (hasGreetedRef.current) return
    hasGreetedRef.current = true
    setReply(WELCOME_LINE)
    void speak(WELCOME_LINE)
  }, [open, speak, stopPlayback])

  const startListening = useCallback(async () => {
    if (!recognitionRef.current) return
    stopPlayback()
    finalTranscriptRef.current = ""
    setTranscript("")
    try {
      // Force the mic permission prompt before kicking off SpeechRecognition.
      // SpeechRecognition.start() can fail silently when blocked by
      // Permissions-Policy or a prior site-level denial; getUserMedia surfaces
      // it as a catchable NotAllowedError/SecurityError.
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((t) => t.stop())

      recognitionRef.current.start()
      setStatus("listening")
    } catch (err) {
      const name = (err as { name?: string }).name
      if (name === "NotAllowedError" || name === "SecurityError") {
        setStatus("denied")
        setReply("Microphone access was blocked. Enable it in your browser settings to continue.")
      } else {
        setStatus("idle")
        try { recognitionRef.current?.stop() } catch { /* ignore */ }
      }
    }
  }, [stopPlayback])

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
  }, [])

  const toggleMic = useCallback(() => {
    if (status === "listening") {
      stopListening()
    } else if (status === "speaking" || status === "thinking") {
      stopPlayback()
      setStatus("idle")
    } else {
      void startListening()
    }
  }, [status, startListening, stopListening, stopPlayback])


  const statusLabel: Record<Status, string> = {
    idle: "Tap to speak",
    listening: "Listening…",
    thinking: "Thinking…",
    speaking: "Speaking…",
    unsupported: "Not supported",
    denied: "Microphone blocked",
  }

  const micDisabled = status === "unsupported" || status === "denied"
  const isLive = status === "listening"

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          aria-label="Open voice assistant"
          className="fixed size-14 bottom-14 right-14 z-40 rounded-full bg-linear-to-br from-kx-orange-400 to-kx-orange-600 text-white border border-white/10 shadow-[0_10px_40px_-10px_rgba(242,105,74,0.6)] hover:shadow-[0_10px_50px_-8px_rgba(242,105,74,0.8)] hover:from-kx-orange hover:to-kx-orange-600 transition-all"
        >
          <FaMicrophoneAlt className="text-lg" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-kx-surface text-kx-dark-ink border border-kx-dark-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
        <DialogHeader className="border-b border-kx-dark-border px-4 py-3 bg-kx-surface-raised/60">
          <DialogTitle className="flex items-center justify-between text-kx-dark-ink">
            <span className="flex items-center gap-2">
              <span
                className={`size-2 rounded-full transition-colors ${
                  isLive
                    ? "bg-kx-orange-400 shadow-[0_0_10px_rgba(242,105,74,0.9)] animate-pulse"
                    : "bg-kx-dark-muted/60"
                }`}
              />
              Voice Assistant
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 px-6 pt-8 pb-6">
          {/* Mic orb */}
          <div className="relative flex items-center justify-center">
            {isLive && (
              <>
                <motion.span
                  className="absolute inset-0 rounded-full bg-kx-orange-400/30"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full bg-kx-orange-400/20"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                />
              </>
            )}

            <motion.button
              type="button"
              onClick={toggleMic}
              disabled={micDisabled}
              aria-label={isLive ? "Stop listening" : "Start listening"}
              whileTap={{ scale: 0.94 }}
              animate={
                status === "speaking"
                  ? { scale: [1, 1.05, 1] }
                  : status === "thinking"
                  ? { scale: [1, 1.02, 1] }
                  : { scale: 1 }
              }
              transition={
                status === "speaking" || status === "thinking"
                  ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
              className={`relative size-24 rounded-full flex items-center justify-center text-white border transition-colors ${
                micDisabled
                  ? "bg-kx-surface-raised border-kx-dark-border text-kx-dark-muted cursor-not-allowed"
                  : isLive
                  ? "bg-linear-to-br from-kx-orange-400 to-kx-orange-600 border-white/10 shadow-[0_0_50px_-5px_rgba(242,105,74,0.7)]"
                  : "bg-linear-to-br from-kx-orange-400 to-kx-orange-600 border-white/10 shadow-[0_10px_40px_-12px_rgba(242,105,74,0.7)] hover:shadow-[0_10px_50px_-8px_rgba(242,105,74,0.9)]"
              }`}
            >
              {micDisabled ? <MicOff className="size-8" /> : isLive ? <Mic className="size-8" /> : <FaMicrophoneAlt className="size-7" />}
            </motion.button>
          </div>

          <div className="text-sm font-medium tracking-wide text-kx-orange-400 uppercase">
            {statusLabel[status]}
          </div>
          
          {/* Assistant reply */}
          <div className="w-full rounded-xl border border-kx-dark-border bg-linear-to-br from-kx-surface-raised to-kx-surface-700/60 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="text-xs uppercase tracking-wider text-kx-orange-400 mb-1">Assistant</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={reply}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="text-sm leading-relaxed text-kx-dark-ink"
              >
                {reply}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
