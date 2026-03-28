import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import { no } from "@/content/no";
import { en } from "@/content/en";
import "../globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const locales = ["no", "en"] as const;
type Lang = (typeof locales)[number];

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isNo = lang === "no";
  const t = isNo ? no : en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords:
      "strategisk rådgiver, subsea consulting, technology business strategy, Stavanger, offshore advisory, business case, technology investment",
    metadataBase: new URL("https://catoandersen.no"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        no: "/no",
        en: "/en",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: isNo ? "nb_NO" : "en_US",
      alternateLocale: isNo ? "en_US" : "nb_NO",
      url: `https://catoandersen.no/${lang}`,
      siteName: "Cato Braut Andersen",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Cato Braut Andersen — Strategic Advisor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Lang = lang === "en" ? "en" : "no";

  return (
    <html lang={validLang} className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Cato Braut Andersen",
              jobTitle: "Strategic Advisor",
              url: "https://catoandersen.no",
              email: "catob.andersen@outlook.com",
              description:
                "Independent strategic advisor in technology, business development and finance. 12+ years in global subsea leadership.",
              sameAs: ["https://www.linkedin.com/in/catobandersen/"],
              knowsAbout: [
                "subsea operations",
                "technology strategy",
                "business development",
                "robotics",
                "offshore energy",
                "international sales strategy",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "NMBU",
              },
              workLocation: {
                "@type": "Place",
                name: "Stavanger, Norway",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Stavanger",
                  addressCountry: "NO",
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-sans)] antialiased">
        <I18nProvider lang={validLang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
