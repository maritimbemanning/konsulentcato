"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const MotionTag = motion.create(Tag);

  return (
    <div ref={ref} className="overflow-hidden">
      <MotionTag
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </MotionTag>
    </div>
  );
}

export function Stagger({
  children,
  className = "",
  staggerDelay = 0.08,
  baseDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: baseDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export { motion, ease };
