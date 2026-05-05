"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FooterCTA from "../components/FooterCTA";
import ContactForm from "../components/ContactForm";
import ScrollAnimation from "../components/ScrollAnimation";

export default function KontoriKoristus() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="hero-section min-h-[75vh] max-h-[800px] flex items-center px-[5%] pt-[100px] pb-[60px]"
          id="avaleht"
          style={{ background: "url('/kontorikoristus1.jpg') center/cover no-repeat" }}
        >
          {/* Floating chips */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-[20px] z-20 hidden md:flex">
            <div className="floating-chip animate-float" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="chip-icon chip-icon-blue w-11 h-11 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5ab5da" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div>
                <div className="text-[18px] font-bold text-[#17345a] leading-tight">50+</div>
                <div className="text-[11px] text-[#2f353f]">kontorit</div>
              </div>
            </div>
            <div className="floating-chip animate-float" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="chip-icon chip-icon-green w-11 h-11 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2d9e6b" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <div className="text-[18px] font-bold text-[#17345a] leading-tight">ISO 9001</div>
                <div className="text-[11px] text-[#2f353f]">sertifitseeritud</div>
              </div>
            </div>
            <div className="floating-chip animate-float" style={{ background: "rgba(255,255,255,0.95)" }}>
              <div className="chip-icon chip-icon-navy w-11 h-11 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="text-[18px] font-bold text-[#17345a] leading-tight">Kontrollitud</div>
                <div className="text-[11px] text-[#2f353f]">personal</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px] items-start max-w-[1280px] mx-auto w-full relative z-10">
            <div 
              className="animate-fade-up order-2 md:order-1"
              style={{ 
                background: "rgba(34, 65, 25, 0.45)", 
                backdropFilter: "blur(3px)",
                WebkitBackdropFilter: "blur(3px)",
                padding: "32px",
                borderRadius: "20px",
                border: "1px solid rgba(133, 203, 233, 0.2)"
              }}
            >
              <h1 className="text-[clamp(28px,4.2vw,56px)] font-bold text-white leading-[1.12] -tracking-[1px] mb-[18px]">
                Kontori koristus<br />
                <span className="text-[#85cbe9]">Tallinnas ja Harjumaal</span>
              </h1>
              <p className="text-[15px] text-white/90 leading-[1.75] mb-[30px] max-w-[500px] font-light">
                Regulaarne kontorikoristus alates <strong className="text-white font-medium">1.2€/m²</strong>. 
                Paindlik graafik, koolitatud personal ja kvaliteedikontroll iga käiguga.
              </p>
              <div className="flex gap-[10px] mb-[24px] animate-fade-up">
                <Link
                  href="#pakkumine"
                  className="btn-primary text-[13px] py-2.5 px-4"
                >
                  Küsi kontori koristuse pakkumist →
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="tel:6623328" className="btn-outline bg-white/10 border-white/30 text-white hover:bg-white/20 text-[13px] py-2.5 px-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  662 3328
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Block - H2 */}
        <ScrollAnimation animation="fade-up">
        <section className="py-[100px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[5%]">
            <h2 className="section-title mb-8">
              Kes koristab teie kontorit?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] text-[16px] text-[#2f353f] leading-[1.8] font-light">
              <div>
                Tallinnas tegutseb palju koristusteenuse pakkujaid, kuid ettevõtete jaoks ei ole valik ainult hinnas. Enamik firmasid, kes meie poole pöörduvad, on varasemalt juba teenusepakkujat vahetanud — põhjuseks ebastabiilne kvaliteet, kehv kommunikatsioon või puuduv vastutus.
              </div>
              <div>
                Hea teenus ei sõltu ainult koristajast. Oluline on süsteem: selge tööplaan, regulaarne kvaliteedikontroll ja kiire reageerimine olukordades, mis igapäevatöös paratamatult tekivad. SPS Grupp on aastaid keskendunud just äriklientidele. Meie töö põhineb standardiseeritud protsessidel, koolitatud meeskonnal ja digitaalsel tööde jälgimisel. See annab kindluse, et teenus toimib järjepidevalt — ka siis, kui inimesed või olukorrad muutuvad.
              </div>
            </div>
</div>
        </section>
        </ScrollAnimation>

        {/* Teenuse sisu - Mida sisaldab kontori koristusteenus */}
        <ScrollAnimation animation="fade-up">
        <section className="py-[100px] bg-[#eceef1]" id="teenused">
          <div className="max-w-[1280px] mx-auto px-[5%]">
            <div className="text-center mb-14">
              <div className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Teenuse sisu
              </div>
              <h2 className="section-title">Mida sisaldab kontori koristusteenus?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { text: "Põrandate igapäevane puhastus ja hooldus — kõik põrandatüübid" },
                { text: "Tööpindade ja mööbli tolmutamine ning desinfitseerimine" },
                { text: "Sanitaarruumide põhjalik puhastus ja tarvikute täiendamine" },
                { text: "Prügi kogumine, sorteerimine ja uute kilekottide paigaldus" },
                { text: "Kööginurga ja puhkeruumi hooldus (tasapinnad, mikrolaineahi, kohvimasin)" },
                { text: "Klaaspindade, peeglite ja klaasseinte puhastus" },
                { text: "IT-tehnika ümbruse antistaatiline puhastus" },
                { text: "Sissepääsu ja esinduspinna erihooldus" },
                { text: "Ukselinkide, lülitite ja sageli kasutatavate pindade desinfitseerimine" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#85cbe9" strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[#2f353f] text-[15px]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Miks meie - H2 */}
        <ScrollAnimation animation="fade-up">
        <section className="py-[100px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[5%]">
            <div className="text-center mb-14">
              <div className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Miks meie
              </div>
              <h2 className="section-title">Miks üle 50 kontori usaldab koristuse SPS Grupile?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              <div className="bg-[#f8fafc] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#85cbe9] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#17345a] mb-2">20+ aastat kontorihoolduse kogemust</h3>
                    <p className="text-[15px] text-[#5a6474] leading-[1.7]">
                      Oleme koristanud kõiki kontoritüüpe — väikestest IT-büroodest suurte peakontorite ja ministeeriumideni. Teame, mis töötab ja mis mitte.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#85cbe9] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#17345a] mb-2">Taustakontroll ja konfidentsiaalsus</h3>
                    <p className="text-[15px] text-[#5a6474] leading-[1.7]">
                      Iga töötaja läbib taustakontrolli ja allkirjastab konfidentsiaalsuslepingu. Teie dokumentatsioon ja tehnika on turvalistes kätes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#85cbe9] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#17345a] mb-2">ISO 9001 kvaliteedijuhtimine</h3>
                    <p className="text-[15px] text-[#5a6474] leading-[1.7]">
                      Iga koristuskäiku kontrollib objektijuht. Kui midagi ei vasta standardile, lahendame selle enne kui märkate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#85cbe9] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#17345a] mb-2">Öko puhastusvahendid</h3>
                    <p className="text-[15px] text-[#5a6474] leading-[1.7]">
                      Kasutame ökomärgisega sertifitseeritud tooteid, mis on ohutud inimestele ja elektroonikaseadmetele. Pakume allergiavabasid lahendusi tundlikele töötajatele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Hind - H2 */}
        <ScrollAnimation animation="fade-up">
        <section className="py-[100px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[5%]">
            <div className="text-center mb-14">
              <div className="section-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Hind
              </div>
              <h2 className="section-title">Millest sõltub kontori koristuse hind?</h2>
              <p className="section-intro mx-auto mt-0 max-w-[700px]">
                Kontori koristuse hind kujuneb nelja teguri põhjal: pindala, koristuse sagedus, töötajate arv ja eritööde vajadus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto mb-8">
              {[
                { size: "Väike kontor", area: "100–200m²", price: "250€", period: "kuu" },
                { size: "Keskmine kontor", area: "200–500m²", price: "450€", period: "kuu", highlight: true },
                { size: "Suur kontor", area: "500–1000m²", price: "800€", period: "kuu" },
                { size: "Suur kompleks", area: "1000m²+", price: "Individuaalne", period: "pakkumine" },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`p-8 rounded-2xl text-center transition-all duration-300 cursor-pointer ${
                    item.highlight 
                      ? "bg-[#17345a] text-white hover:bg-[#1e4a7a] hover:scale-105 hover:shadow-xl" 
                      : "bg-[#f8fafc] hover:bg-[#eef7fc] hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-[#85cbe9]"
                  }`}
                >
                  <div className={`text-[18px] font-bold mb-2 ${item.highlight ? "text-white" : "text-[#17345a]"}`}>{item.size}</div>
                  <div className={`text-[32px] font-bold mb-1 ${item.highlight ? "text-white" : "text-[#17345a]"}`}>
                    {item.price}
                  </div>
                  <div className={`text-[14px] mb-4 ${item.highlight ? "text-white/70" : "text-[#8896a6]"}`}>
                    {item.period}
                  </div>
                  <div className={`text-[14px] ${item.highlight ? "text-white/70" : "text-[#5a6474]"}`}>
                    {item.area}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[15px] text-[#5a6474] mb-6">
              Regulaarne hoolduskoristus algab hinnast <strong>1.2€/m²</strong>, suurpuhastus <strong>1.5€/m²</strong>
            </p>
            <p className="text-center text-[14px] text-[#8896a6] mb-8">
              Hinda mõjutavad: pindala, koristuse sagedus (2–5x nädalas), eritööde vajadus (aknad, vaibad, põrandad) ja töötajate arv.
            </p>
            <div className="text-center">
              <Link
                href="#pakkumine"
                className="btn-primary"
              >
                Küsige täpset pakkumist oma kontorile →
              </Link>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Sotsiaalne tõestus - Using Testimonials component */}
        <Testimonials />

        {/* Lõpu CTA - Tellige tasuta kontorikoristuse analüüs */}
        <ScrollAnimation animation="fade-up">
        <FooterCTA 
          title="Tellige tasuta kontorikoristuse analüüs" 
          description="Tuleme kohale, vaatame üle teie kontori vajadused ja koostame personaalse pakkumise. Saate vastuse 24 tunni jooksul. Tasuta ja kohustuseta."
        />
        </ScrollAnimation>

        {/* Contact Form */}
        <ScrollAnimation animation="fade-up">
        <ContactForm />
        </ScrollAnimation>

        {/* FAQ - KKK at the bottom */}
        <ScrollAnimation animation="fade-up">
        <FAQ />
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
}

