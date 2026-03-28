"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal, RevealText } from "@/lib/motion";
import Container from "@/components/Container";

export default function Background() {
  const { t } = useLanguage();

  return (
    <section id="bakgrunn" className="relative bg-bg" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <Container>
        <Reveal>
          <p className="mb-20 text-[11px] tracking-[0.35em] text-text-secondary uppercase md:mb-28">
            {t.background.label}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_0.45fr] md:gap-24 lg:gap-32">
          <div>
            {t.background.paragraphs.map((p, i) => (
              <RevealText
                key={i}
                as="p"
                delay={i * 0.1}
                className={`mb-8 last:mb-0 ${
                  i === 0
                    ? "font-[family-name:var(--font-serif)] text-[22px] leading-[1.55] text-text md:text-[28px]"
                    : "text-[16px] leading-[1.85] text-text-secondary"
                }`}
              >
                {p}
              </RevealText>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-2 text-[13px] tracking-wide text-text-secondary">
                <span>{t.background.education}</span>
                <span>{t.background.languages}</span>
              </div>
            </Reveal>
          </div>

          {/* 7. Pull-quote more visible */}
          <div className="hidden items-start md:flex">
            <Reveal delay={0.3}>
              <blockquote className="sticky top-36 pl-8">
                <p className="font-[family-name:var(--font-serif)] text-[1.3rem] leading-[1.55] text-accent/70 italic">
                  &ldquo;Koble teknologiske muligheter med kommersiell virkelighet&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>

      <Reveal y={60}>
        <div className="relative z-10 mx-auto max-w-[1400px]" style={{ marginTop: 120, marginBottom: -120 }}>
          <div className="relative aspect-[2.4/1] overflow-hidden">
            <Image src="/images/gap-bridge.jpg" alt="" fill className="object-cover object-[center_30%]" sizes="100vw" placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect fill='%23b0a090' width='8' height='8'/%3E%3C/svg%3E" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-transparent" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
