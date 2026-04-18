"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
};

export default function CountUp({
  end,
  durationMs = 1400,
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasScrolledIntoPage, setHasScrolledIntoPage] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const markScrolled = () => {
      if (window.scrollY > 48) {
        setHasScrolledIntoPage(true);
      }
    };

    markScrolled();
    window.addEventListener("scroll", markScrolled, { passive: true });

    return () => window.removeEventListener("scroll", markScrolled);
  }, []);

  useEffect(() => {
    const node = ref.current;

    if (!node || hasStarted || !hasScrolledIntoPage) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasScrolledIntoPage, hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const tick = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const nextValue = Math.round(end * easeOutCubic(progress));

      setValue(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [durationMs, end, hasStarted]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}{suffix}
    </span>
  );
}
