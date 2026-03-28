import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Background />
        <Services />
        <Approach />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
