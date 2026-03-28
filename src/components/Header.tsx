"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { Mail } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const sectionIds = ["bakgrunn", "tjenester", "resultater", "kontakt"];

export default function Header() {
  const { lang, t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // 10. Active nav state
      const offset = 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { label: t.nav.about, href: "#bakgrunn", id: "bakgrunn" },
    { label: t.nav.services, href: "#tjenester", id: "tjenester" },
    { label: t.nav.results, href: "#resultater", id: "resultater" },
    { label: t.nav.contact, href: "#kontakt", id: "kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md shadow-[0_1px_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1200, paddingLeft: "clamp(1.5rem, 6vw, 5rem)", paddingRight: "clamp(1.5rem, 6vw, 5rem)", height: 72 }}
      >
        <a
          href="#"
          className="font-[family-name:var(--font-serif)] text-[15px] tracking-[0.08em] text-text transition-opacity hover:opacity-70"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Cato Braut Andersen
        </a>

        <div className="hidden items-center lg:flex">
          <nav aria-label="Hovednavigasjon" className="flex items-center" style={{ gap: 36 }}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-text font-medium"
                    : "text-text-secondary hover:text-text"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center" style={{ marginLeft: 48, gap: 20 }}>
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
          </div>

          <button
            onClick={toggle}
            className="text-[12px] tracking-[0.15em] text-text-secondary transition-colors duration-200 hover:text-text"
            style={{ marginLeft: 36 }}
          >
            <span className={lang === "no" ? "text-text font-medium" : ""}>NO</span>
            <span className="mx-1 text-border">/</span>
            <span className={lang === "en" ? "text-text font-medium" : ""}>EN</span>
          </button>
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          <a href="https://www.linkedin.com/in/catobandersen/" target="_blank" rel="noopener noreferrer" className="text-text-secondary" aria-label="LinkedIn"><LinkedInIcon /></a>
          <button onClick={toggle} className="text-[11px] tracking-[0.15em] text-text-secondary">
            <span className={lang === "no" ? "text-text font-medium" : ""}>NO</span>
            <span className="mx-1">/</span>
            <span className={lang === "en" ? "text-text font-medium" : ""}>EN</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center" aria-label="Menu">
            <div className="relative h-3.5 w-5">
              <span className={`absolute left-0 h-[1px] w-full bg-text transition-all duration-300 ${menuOpen ? "top-[6px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[6px] h-[1px] w-full bg-text transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-[1px] w-full bg-text transition-all duration-300 ${menuOpen ? "top-[6px] -rotate-45" : "top-[12px]"}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-bg transition-all duration-500 lg:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ zIndex: 40 }}>
        <nav aria-label="Mobilmeny" className="flex h-full flex-col items-start justify-center" style={{ paddingLeft: "clamp(1.5rem, 6vw, 3rem)" }}>
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-serif)] text-text transition-colors hover:text-accent"
              style={{ fontSize: "2.2rem", lineHeight: 1, marginBottom: 32, opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateX(0)" : "translateX(-20px)", transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08 + 0.15}s` }}
            >{item.label}</a>
          ))}
          <div className="flex items-center gap-6" style={{ marginTop: 16, opacity: menuOpen ? 1 : 0, transition: "opacity 0.4s ease 0.6s" }}>
            <a href="https://www.linkedin.com/in/catobandersen/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[14px] text-text-secondary transition-colors hover:text-accent" onClick={() => setMenuOpen(false)}><LinkedInIcon /> LinkedIn</a>
            <a href="mailto:catob.andersen@outlook.com" className="flex items-center gap-2.5 text-[14px] text-text-secondary transition-colors hover:text-accent" onClick={() => setMenuOpen(false)}><Mail size={18} strokeWidth={1.5} /> Email</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
