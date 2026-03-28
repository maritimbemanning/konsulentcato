"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/lib/motion";
import Container from "@/components/Container";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="tjenester" className="relative bg-bg" style={{ paddingTop: 200, paddingBottom: 160 }}>
      <Container>
        <Reveal>
          <p className="mb-20 text-[11px] tracking-[0.35em] text-text-secondary uppercase md:mb-28">
            {t.services.label}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-20 md:gap-y-20">
          {t.services.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} y={30}>
              <div>
                <span className="mb-4 block text-[12px] tabular-nums text-text-secondary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 font-[family-name:var(--font-serif)] text-[1.35rem] leading-[1.35] text-text md:text-[1.5rem]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-text-secondary">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
