"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  variant?: "up" | "fade" | "left" | "right";
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.08,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    let revealTimer: number | null = null;

    const reveal = () => {
      if (revealTimer !== null) {
        return;
      }

      // Delay the class toggle slightly so the hidden state paints first.
      revealTimer = window.setTimeout(() => {
        setIsVisible(true);
      }, 70);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const frame = window.requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        reveal();
        return;
      }

      observer.observe(node);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (revealTimer !== null) {
        window.clearTimeout(revealTimer);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-enter ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      data-variant={variant}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
