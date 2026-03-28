"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal, RevealText, Stagger, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";
import Container from "@/components/Container";

export default function Results() {
  const { t } = useLanguage();

  return (
    <section id="resultater" className="relative bg-bg" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <Container>
        <Reveal>
          <p className="mb-20 text-[11px] tracking-[0.35em] text-text-secondary uppercase md:mb-28">
            {t.results.label}
          </p>
        </Reveal>

        <div style={{ maxWidth: 680 }}>
          <RevealText as="p" className="font-[family-name:var(--font-serif)] text-[22px] leading-[1.55] text-text md:text-[28px]">
            {t.results.narrative}
          </RevealText>

          <Stagger className="mt-16 space-y-5" staggerDelay={0.1} baseDelay={0.2}>
            {t.results.achievements.map((a, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-baseline gap-4 text-[16px] leading-[1.75] text-text-secondary" style={{ listStyle: "none" }}>
                <span className="mt-[10px] block h-[5px] w-[5px] shrink-0 rounded-full bg-accent/40" />
                {a}
              </motion.li>
            ))}
          </Stagger>
        </div>
      </Container>

      {/* 6. Less gradient fade on Dubai image */}
      <Reveal y={50}>
        <div className="relative" style={{ marginTop: 120 }}>
          <div className="relative aspect-[3/1] w-full overflow-hidden md:aspect-[3.5/1]">
            <Image src="/images/presentation.jpg" alt="Cato presenting to a team" fill className="object-cover object-[center_30%]" sizes="100vw" placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect fill='%23b0a090' width='8' height='8'/%3E%3C/svg%3E" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
