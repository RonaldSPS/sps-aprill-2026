"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  animation = "fade-up",
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = ref.current;
            if (el) {
              setTimeout(() => {
                el.classList.add("animate-" + animation);
                // Remove animation class after it completes to allow re-trigger
                setTimeout(() => {
                  el.style.opacity = "1";
                }, 700);
              }, delay);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animation, delay]);

  return (
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className="scroll-animate"
    >
      {children}
    </div>
  );
}