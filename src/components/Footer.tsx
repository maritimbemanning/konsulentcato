"use client";

import { useLanguage } from "@/lib/i18n";
import { Mail } from "lucide-react";
import Container from "@/components/Container";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container>
        {/* 8. Warmer footer with personality */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-8">
            <span className="font-[family-name:var(--font-serif)] text-[14px] text-text">
              Cato Braut Andersen
            </span>
            <span className="text-[12px] text-text-secondary">
              Stavanger, Norway
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/catobandersen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors duration-200 hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:catob.andersen@outlook.com"
              className="text-text-secondary transition-colors duration-200 hover:text-accent"
              aria-label="Email"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
            <span className="text-[12px] text-text-secondary/60">
              &copy; {new Date().getFullYear()} Cato Braut Andersen
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
