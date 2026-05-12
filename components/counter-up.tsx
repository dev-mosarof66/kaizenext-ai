import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({ to, decimals = 0, prefix = "", suffix = "", duration = 1.8 }: {
  to: number; decimals?: number; prefix?: string; suffix?: string; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const fromRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const firstRef = useRef(true);

  useEffect(() => {
    if (!inView) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = fromRef.current;
    const dur = firstRef.current ? duration : 0.45;
    firstRef.current = false;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (dur * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + eased * (to - from);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      fromRef.current = to;
    };
  }, [inView, to, duration]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export default CountUp;