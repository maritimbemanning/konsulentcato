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

        {/* 5. Tighter rhythm, still alternating */}
        <div className="space-y-24 md:space-y-32">
          {t.services.items.map((item, i) => {
            const isOdd = i % 2 !== 0;
            return (
              <Reveal key={i} delay={0.05} y={40}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20">
                  <div className={isOdd ? "md:order-2" : ""}>
                    <span className="mb-3 block text-[12px] tabular-nums text-text-secondary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[family-name:var(--font-serif)] text-[1.5rem] leading-[1.3] text-text md:text-[1.75rem]">
                      {item.title}
                    </h3>
                  </div>
                  <div className={`flex items-end ${isOdd ? "md:order-1" : ""}`}>
                    {/* 3. Consistent 16px body text */}
                    <p className="text-[16px] leading-[1.8] text-text-secondary" style={{ maxWidth: 400 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
