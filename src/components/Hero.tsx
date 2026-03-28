"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(44,95,124,0.03),transparent)]" />

      <motion.div
        className="absolute right-0 top-0 hidden h-full w-[45%] md:block lg:w-[42%]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.3 }}
      >
        <Image src="/images/portrait.jpg" alt="Cato Braut Andersen" fill preload className="object-cover object-[center_15%]" sizes="(max-width: 768px) 0px, 45vw" placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect fill='%23c8b8a8' width='8' height='8'/%3E%3C/svg%3E" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100dvh] flex-col justify-center" style={{ maxWidth: 1200, paddingLeft: "clamp(1.5rem, 6vw, 5rem)", paddingRight: "clamp(1.5rem, 6vw, 5rem)" }}>
        <div className="relative mb-10 mt-20 aspect-[4/3] overflow-hidden md:hidden" style={{ marginLeft: "calc(-1 * clamp(1.5rem, 6vw, 5rem))", marginRight: "calc(-1 * clamp(1.5rem, 6vw, 5rem))" }}>
          <Image src="/images/portrait.jpg" alt="Cato Braut Andersen" fill preload className="object-cover object-top" sizes="100vw" placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect fill='%23c8b8a8' width='8' height='8'/%3E%3C/svg%3E" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        </div>

        <div style={{ maxWidth: 560 }}>
          <motion.p
            className="mb-8 text-[11px] tracking-[0.4em] text-text-secondary uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.name}
          </motion.p>

          <h1 className="mb-12 font-[family-name:var(--font-serif)] text-text">
            {t.hero.heading.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="inline-block leading-[1.08] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease, delay: 0.4 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mb-12 text-[16px] leading-[1.8] text-text-secondary"
            style={{ maxWidth: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* 2. Proper CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.1 }}
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 rounded-full bg-bg-dark px-7 py-3.5 text-[14px] font-medium text-text-light transition-all duration-300 hover:bg-accent"
            >
              {t.hero.cta}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex h-9 w-[22px] items-start justify-center rounded-full border border-text-secondary/20 pt-2">
            <div className="h-2 w-[1px] rounded-full bg-text-secondary/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
