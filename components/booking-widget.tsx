"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  Loader2,
  User,
  Mail,
  FileText,
} from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
  isBefore,
  startOfDay,
  addDays,
  parseISO,
  endOfDay,
} from "date-fns";
import { cn } from "@/lib/utils";

type Step = "date" | "time" | "form" | "confirmed";

interface Slots {
  [date: string]: string[];
}

const WEEK_DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export function BookingWidget() {
  const [step, setStep] = useState<Step>("date");
  const [currentMonth, setCurrentMonth] = useState(() => startOfMonth(new Date()));
  const [allSlots, setAllSlots] = useState<Slots>({});
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [details, setDetails] = useState({ name: "", email: "", notes: "" });
  const [isBooking, setIsBooking] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [error, setError] = useState("");
  const [timeZone] = useState(() => Intl.DateTimeFormat().resolvedOptions().timeZone);

  const fetchSlots = useCallback(
    async (month: Date) => {
      setLoadingSlots(true);
      const start = format(startOfMonth(month), "yyyy-MM-dd");
      const end = format(endOfMonth(addMonths(month, 1)), "yyyy-MM-dd");
      try {
        const res = await fetch(
          `/api/cal/slots?start=${start}&end=${end}&timeZone=${encodeURIComponent(timeZone)}`
        );
        const data = await res.json();

        console.log(data)
        if (data.slots) {
          setAllSlots((prev) => ({ ...prev, ...data.slots }));
        }
      } catch {
        // silently fail — calendar shows no dots
      } finally {
        setLoadingSlots(false);
      }
    },
    [timeZone]
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSlots(currentMonth);
  }, [currentMonth, fetchSlots]);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const days: Date[] = [];
    let d = gridStart;
    while (d <= gridEnd) {
      days.push(d);
      d = addDays(d, 1);
    }
    return days;
  }, [currentMonth]);

  const today = startOfDay(new Date());
  const isPastDay = (d: Date) => isBefore(endOfDay(d), today);
  const dateKey = (d: Date) => format(d, "yyyy-MM-dd");
  const isAvailable = (d: Date) =>
    !isPastDay(d) && (allSlots[dateKey(d)]?.length ?? 0) > 0;

  const slotsForDate = selectedDate ? allSlots[dateKey(selectedDate)] ?? [] : [];

  // Build a lookup set for O(1) availability checks
  const availableSet = useMemo(() => new Set(slotsForDate), [slotsForDate]);

  // Generate all 16 theoretical slots (09:00–16:30 Dhaka +06:00).
  // Slots missing from availableSet are already booked.
  const allDaySlots = useMemo(() => {
    if (!selectedDate) return [];
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    const slots: string[] = [];
    for (let h = 9; h <= 16; h++) {
      for (const m of [0, 30]) {
        slots.push(
          `${dateStr}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00.000+06:00`
        );
      }
    }
    return slots;
  }, [selectedDate]);

  const canGoBack = () => {
    const prevMonthEnd = endOfMonth(subMonths(currentMonth, 1));
    return !isBefore(prevMonthEnd, today);
  };

  const handleDateSelect = (d: Date) => {
    if (!isAvailable(d)) return;
    setSelectedDate(d);
    setSelectedSlot(null);
    setStep("time");
    // Refetch to evict slots booked by others since page load
    fetchSlots(currentMonth);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setStep("form");
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setIsBooking(true);
    setError("");
    try {
      const res = await fetch("/api/cal/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: selectedSlot,
          name: details.name,
          email: details.email,
          notes: details.notes,
          timeZone,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      setBookingRef(data.bookingRef);
      setBookingTime(format(parseISO(data.start || selectedSlot), "EEEE, MMMM d 'at' h:mm a"));
      setStep("confirmed");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Booking failed. Please try again.");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="w-full flex flex-col flex-1 overflow-hidden">
      <AnimatePresence mode="wait">
        {/* ── Step 1: Date ─────────────────────────────────────────────────── */}
        {step === "date" && (
          <motion.div
            key="date"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 p-6"
          >
            <div>
              <p className="text-[10px] font-mono text-kx-orange uppercase tracking-widest mb-0.5">
                Step 1 of 3
              </p>
              <h3 className="text-base font-semibold leading-tight">Select a date</h3>
              <p className="text-xs text-kx-dark-muted mt-0.5">{timeZone}</p>
            </div>

            {/* Month nav */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentMonth((m) => subMonths(m, 1))}
                disabled={!canGoBack()}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/40 hover:text-kx-orange disabled:opacity-25 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm font-semibold">{format(currentMonth, "MMMM yyyy")}</span>
              <button
                onClick={() => setCurrentMonth((m) => addMonths(m, 1))}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/40 hover:text-kx-orange transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7">
              {WEEK_DAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[10px] font-mono text-kx-dark-muted/50 uppercase py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="relative grid grid-cols-7 gap-y-0.5">
              {loadingSlots && (
                <div className="absolute inset-0 flex items-center justify-center bg-kx-surface-950/70 backdrop-blur-[2px] rounded-xl z-10">
                  <Loader2 className="w-5 h-5 text-kx-orange animate-spin" />
                </div>
              )}
              {calendarDays.map((d, i) => {
                const inMonth = isSameMonth(d, currentMonth);
                const past = isPastDay(d);
                const available = isAvailable(d);
                const selected = selectedDate ? isSameDay(d, selectedDate) : false;
                const isNow = isSameDay(d, new Date());

                if (!inMonth) {
                  return <div key={i} className="h-9" />;
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleDateSelect(d)}
                    disabled={!available}
                    className={cn(
                      "relative flex flex-col items-center justify-center h-9 w-full rounded-lg text-sm font-medium transition-all duration-150",
                      past && "text-kx-dark-muted/25 cursor-not-allowed",
                      available && !selected &&
                        "text-white hover:bg-kx-orange/10 hover:text-kx-orange cursor-pointer",
                      selected &&
                        "bg-kx-orange text-white shadow-[0_0_14px_rgba(232,89,58,0.4)] cursor-pointer",
                      isNow && !selected && !past && "ring-1 ring-inset ring-kx-dark-border",
                      !available && !past && "opacity-30 cursor-not-allowed"
                    )}
                  >
                    <span className="leading-none">{format(d, "d")}</span>
                    {available && !selected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-kx-orange" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-kx-dark-muted/50 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-kx-orange inline-block" />
              Available slots
            </div>
          </motion.div>
        )}

        {/* ── Step 2: Time slot ─────────────────────────────────────────────── */}
        {step === "time" && selectedDate && (
          <motion.div
            key="time"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 p-6"
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => setStep("date")}
                className="mt-0.5 p-1.5 rounded-lg border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/40 hover:text-kx-orange transition-all shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <div>
                <p className="text-[10px] font-mono text-kx-orange uppercase tracking-widest mb-0.5">
                  Step 2 of 3
                </p>
                <h3 className="text-base font-semibold leading-tight">Pick a time</h3>
                <p className="text-xs text-kx-dark-muted mt-0.5 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {format(selectedDate, "EEEE, MMMM d")}
                </p>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-2">
              {loadingSlots && (
                <div className="absolute inset-0 flex items-center justify-center bg-kx-surface-950/60 backdrop-blur-[2px] rounded-xl z-10">
                  <Loader2 className="w-5 h-5 text-kx-orange animate-spin" />
                </div>
              )}
              {!loadingSlots && slotsForDate.length === 0 ? (
                <p className="col-span-2 text-center text-kx-dark-muted/60 text-sm py-10">
                  No slots available for this date.
                </p>
              ) : (
                allDaySlots.map((slot) => {
                  const open = availableSet.has(slot);
                  return (
                    <motion.button
                      key={slot}
                      whileHover={open ? { scale: 1.02 } : undefined}
                      whileTap={open ? { scale: 0.95 } : undefined}
                      disabled={!open}
                      onClick={() => open && handleSlotSelect(slot)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all",
                        open
                          ? "border-kx-dark-border bg-kx-surface-950/30 text-white hover:border-kx-orange/50 hover:bg-kx-orange/10 hover:text-kx-orange cursor-pointer"
                          : "border-kx-dark-border/20 bg-kx-surface-950/10 text-kx-dark-muted/20 cursor-not-allowed"
                      )}
                    >
                      <Clock className="w-3.5 h-3.5 opacity-40" />
                      {format(parseISO(slot), "h:mm a")}
                    </motion.button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}

        {/* ── Step 3: Details form ──────────────────────────────────────────── */}
        {step === "form" && selectedDate && selectedSlot && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 p-6"
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => setStep("time")}
                className="mt-0.5 p-1.5 rounded-lg border border-kx-dark-border text-kx-dark-muted hover:border-kx-orange/40 hover:text-kx-orange transition-all shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <div>
                <p className="text-[10px] font-mono text-kx-orange uppercase tracking-widest mb-0.5">
                  Step 3 of 3
                </p>
                <h3 className="text-base font-semibold leading-tight">Your details</h3>
                <p className="text-xs text-kx-dark-muted mt-0.5 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {format(selectedDate, "MMM d")} at {format(parseISO(selectedSlot), "h:mm a")}
                </p>
              </div>
            </div>

            <form onSubmit={handleBook} className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-kx-dark-muted uppercase tracking-widest flex items-center gap-1.5">
                  <User className="w-3 h-3" /> Full name
                </label>
                <input
                  type="text"
                  required
                  value={details.name}
                  onChange={(e) => setDetails((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Jane Smith"
                  className="h-10 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-kx-dark-muted uppercase tracking-widest flex items-center gap-1.5">
                  <Mail className="w-3 h-3" /> Email
                </label>
                <input
                  type="email"
                  required
                  value={details.email}
                  onChange={(e) => setDetails((p) => ({ ...p, email: e.target.value }))}
                  placeholder="jane@company.com"
                  className="h-10 bg-kx-surface-950/50 border border-kx-dark-border rounded-xl px-4 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-kx-dark-muted uppercase tracking-widest flex items-center gap-1.5">
                  <FileText className="w-3 h-3" /> Notes{" "}
                  <span className="normal-case text-kx-dark-muted/40">optional</span>
                </label>
                <textarea
                  value={details.notes}
                  onChange={(e) => setDetails((p) => ({ ...p, notes: e.target.value }))}
                  placeholder="Anything you'd like us to know..."
                  rows={3}
                  className="bg-kx-surface-950/50 border border-kx-dark-border rounded-xl p-3.5 text-white text-sm placeholder-kx-dark-muted/40 focus:outline-none focus:border-kx-orange/50 focus:ring-1 focus:ring-kx-orange/30 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs font-mono text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isBooking}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-white font-bold py-3 px-6 shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm mt-1"
              >
                {isBooking ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Confirming…
                  </>
                ) : (
                  "Confirm booking"
                )}
              </button>
            </form>
          </motion.div>
        )}

        {/* ── Step 4: Confirmed ─────────────────────────────────────────────── */}
        {step === "confirmed" && (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 p-6"
          >
            {/* Icon + heading */}
            <div className="flex flex-col items-center text-center gap-4 pt-2">
              {/* Animated rings + check */}
              <div className="relative flex items-center justify-center w-20 h-20">
                <motion.span
                  className="absolute inset-0 rounded-full border border-green-500/20"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 1, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full border border-green-500/30"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  className="relative w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shadow-[0_0_32px_rgba(34,197,94,0.15)]"
                >
                  <CheckCircle2 className="w-9 h-9 text-green-400" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <p className="text-[10px] font-mono text-green-400 uppercase tracking-widest mb-1">Confirmed</p>
                <h3 className="text-2xl font-bold">You&apos;re booked!</h3>
              </motion.div>
            </div>

            {/* Booking detail card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-2xl border border-green-500/20 bg-green-500/5 divide-y divide-green-500/10 overflow-hidden"
            >
              {bookingTime && (
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-kx-dark-muted/60 font-mono uppercase tracking-widest">Date &amp; time</p>
                    <p className="text-sm font-medium text-white leading-tight">{bookingTime}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-kx-dark-muted/60 font-mono uppercase tracking-widest">Duration</p>
                  <p className="text-sm font-medium text-white leading-tight">30 minutes · Discovery call</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-kx-dark-muted/60 font-mono uppercase tracking-widest">Confirmation sent to</p>
                  <p className="text-sm font-medium text-white leading-tight truncate">{details.email}</p>
                </div>
              </div>
            </motion.div>

            {/* Ref + note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="flex flex-col items-center gap-1.5 pb-2"
            >
              <p className="text-xs text-kx-dark-muted text-center leading-relaxed">
                Check your inbox for a calendar invite. We look forward to speaking with you.
              </p>
              {bookingRef && (
                <p className="text-[10px] text-kx-dark-muted/40 font-mono">ref: {bookingRef}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
