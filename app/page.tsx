import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollAnimation from "./components/ScrollAnimation";
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
        {/* Miks valida SPS Grupp */}
        <ScrollAnimation animation="fade-up">
        <section className="py-[80px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[5%]">
            <h2 className="section-title mb-8">
              Miks Eesti suurettevõtted valivad SPS Grupi koristusfirmaks?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] text-[16px] text-[#2f353f] leading-[1.8] font-light">
              <div>
                <strong>Koristusteenuse pakkuja valikul ei ole küsimus ainult hinnas.</strong> Enamik firmasid, kes meie poole pöörduvad, on varasemalt juba teenusepakkujat vahetanud — põhjuseks ebastabiilne kvaliteet, kehv kommunikatsioon või puuduv vastutus.
              </div>
              <div>
                <strong>SPS Grupp on aastaid keskendunud just äriklientidele. </strong> Meie töö põhineb standardiseeritud protsessidel, koolitatud meeskonnal ja digitaalsel tööde jälgimisel. See annab kindluse, et teenus toimib järjepidevalt — ka siis, kui inimesed või olukorrad muutuvad.
              </div>
              <div>
                <strong> Hea teenus ei sõltu ainult koristajast. </strong> Oluline on süsteem: selge tööplaan, regulaarne kvaliteedikontroll ja kiire reageerimine olukordades, mis igapäevatöös paratamatult tekivad.
              </div>
              <div>
                <strong>Kui otsite partnerit, kes võtab koristuse teie jaoks päriselt "laualt ära", tasub alustada vajaduste kaardistamisest ja läbipaistvast pakkumisest.</strong>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>
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