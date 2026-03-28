"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal, RevealText } from "@/lib/motion";
import Container from "@/components/Container";

export default function Approach() {
  const { t } = useLanguage();

  return (
    <section id="tilnærming" className="relative overflow-hidden bg-bg-dark" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="absolute inset-0">
        <Image src="/images/gap-bridge.jpg" alt="" fill className="object-cover opacity-[0.04] grayscale" sizes="100vw" aria-hidden="true" placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect fill='%231a2332' width='8' height='8'/%3E%3C/svg%3E" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-transparent to-bg-dark/70" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_0.7fr] md:gap-24">
          <div>
            <Reveal>
              <p className="mb-12 text-[11px] tracking-[0.35em] text-text-light/70 uppercase">
                {t.approach.label}
              </p>
            </Reveal>

            <RevealText as="h2" className="font-[family-name:var(--font-serif)] text-text-light leading-[1.3]" delay={0.1}>
              <span style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)" }}>
                {t.approach.statement[0]}
              </span>
            </RevealText>

            <Reveal delay={0.2}>
              {/* 9. Better contrast on dark bg */}
              <p className="mt-8 text-[16px] leading-[1.85] text-text-light/80" style={{ maxWidth: 480 }}>
                {t.approach.statement[1]}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end">
            {t.approach.principles.map((p, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <div style={{ marginBottom: i < t.approach.principles.length - 1 ? 32 : 0 }}>
                  <h4 className="mb-1.5 text-[12px] font-medium tracking-[0.2em] text-accent uppercase">
                    {p.title}
                  </h4>
                  {/* 9. Bumped from /50 to /70 */}
                  <p className="text-[14px] leading-[1.7] text-text-light/70">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
