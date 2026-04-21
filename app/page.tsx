import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Industries from "./components/Industries";
import Trust from "./components/Trust";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Koristusfirma Tallinnas | SPS Grupp",
  description: "20+ aastase kogemusega koristusfirma Tallinnas. Hooldame 500 000m² äripindu kuus. ISO 9001 sertifikaat. Küsi tasuta pakkumist!",
  keywords: "koristusfirma, koristusfirmad, puhastusfirma, koristusfirma tallinnas, äripindade koristus, koristusteenus tallinn",
  openGraph: {
    title: "Koristusfirma Tallinnas | SPS Grupp",
    description: "20+ aastase kogemusega koristusfirma Tallinnas. Hooldame 500 000m² äripindu kuus.",
    type: "website",
    locale: "et_EE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kui sageli peaks äriruume koristama?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enamikule ettevõtetele soovitame koristust 3–5 korda nädalas."
      }
    },
    {
      "@type": "Question",
      "name": "Kuidas kujuneb koristuse hind?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hind sõltub ruumide suurusest, koristuse sagedusest ja eritööde vajadusest."
      }
    },
    {
      "@type": "Question",
      "name": "Miks valida SPS Grupp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meil on 20+ aastat kogemust, ISO 9001 sertifikaat ja 200+ koolitatud töötajat."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Testimonials />
        <Industries />
        <Trust />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}