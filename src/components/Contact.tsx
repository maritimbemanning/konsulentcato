"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal, RevealText } from "@/lib/motion";
import Container from "@/components/Container";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="kontakt"
      className="relative bg-bg"
      style={{ paddingTop: 160, paddingBottom: 140 }}
    >
      <Container>
        <Reveal>
          <p className="mb-20 text-[11px] tracking-[0.35em] text-text-secondary uppercase md:mb-28">
            {t.contact.label}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_0.6fr] md:gap-20">
          <div>
            <RevealText
              as="h2"
              className="font-[family-name:var(--font-serif)] leading-[1.15] text-text"
              delay={0.1}
            >
              <span style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
                {t.contact.heading}
              </span>
            </RevealText>

            {/* Email as confident typographic element */}
            <Reveal delay={0.2}>
              <a
                href={`mailto:${t.contact.email}`}
                className="group mt-16 inline-flex items-center gap-4"
              >
                <span
                  className="font-[family-name:var(--font-serif)] text-text transition-colors duration-300 group-hover:text-accent"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
                >
                  {t.contact.email}
                </span>
                <span className="text-[20px] text-accent/50 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent">
                  &rarr;
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.25}>
              <a
                href="https://www.linkedin.com/in/catobandersen/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 text-[14px] text-text-secondary/60 transition-colors duration-300 hover:text-accent"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                {t.contact.linkedin}
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end">
            <Reveal delay={0.3}>
              <div className="space-y-3">
                <p className="text-[16px] leading-[1.8] text-text-secondary">
                  {t.contact.availability}
                </p>
                <p className="text-[16px] leading-[1.8] text-text-secondary">
                  {t.contact.location}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
