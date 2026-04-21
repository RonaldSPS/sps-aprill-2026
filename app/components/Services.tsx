import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Regulaarne koristusteenus",
    text: "Kontori, kaubanduspinna ja tootmishoone igapäevane hooldus. Paindlik graafik, koolitatud personal ja kvaliteedikontroll igal käigul.",
    image: "/regulaarnekoristusteenus.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Puhastusteenused",
    text: "Põrandate süvapuhastus, vaipade keemiline pesu, ehitusjärgne koristus, suitsu- ja tulekahjustuste eemaldamine ning professionaalne desinfitseerimine.",
    image: "/puhastusteenused.jpg",
    linkText: "Vaata puhastusteenuseid",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 0-5 5c0 2.76 5 9 5 9s5-6.24 5-9a5 5 0 0 0-5-5z" />
        <circle cx="12" cy="7" r="1.5" />
        <path d="M5 21h14" />
        <path d="M7 21v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
  },
  {
    title: "Välikoristus ja territooriumi hooldus",
    text: "Fassaadipesu, akende professionaalne pesu, graffiti eemaldamine, tänavakivide hooldus ja 24/7 lumekoristus talveperioodil.",
    image: "/valikoristus.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <rect x="9" y="13" width="6" height="8" />
        <path d="M10 9h4" />
      </svg>
    ),
    linkText: "Vaata välikoristusteenuseid",
  },
];

export default function Services() {
  return (
    <section className="services-section py-[100px] bg-white" id="teenused">
      <div className="max-w-[1280px] mx-auto px-[5%]">
        <div className="text-center mb-14">
          <div className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            Meie teenused
          </div>
          <h2 className="section-title">
            Miks Eesti suurettevõtted<br />valivad SPS Grupi koristusfirmaks?
          </h2>
          <p className="section-intro mx-auto mt-0">
            Koristusfirma valik ei ole ainult puhtuse küsimus — see on investeering teie töökeskkonda, klientide muljetesse ja töötajate tervisesse. SPS Grupp on puhastusfirma, kes tagab, et koristus lihtsalt toimib.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Service image */}
              <div className="w-full h-[200px] relative overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 pt-6">
                <div 
                  className="service-icon-badge -mt-11 relative z-10 mb-4"
                  style={{ boxShadow: "0 2px 12px rgba(23,52,90,0.07)" }}
                >
                  <span className="w-[26px] h-[26px]">{service.icon}</span>
                </div>
                <h3 className="text-[19px] font-bold text-[#17345a] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#2f353f] leading-[1.7] mb-5 font-light">
                  {service.text}
                </p>
                <Link 
                  href="#pakkumine" 
                  className="inline-flex items-center gap-1.5 text-[#5ab5da] text-[14px] font-medium no-underline transition-all hover:text-[#17345a] hover:gap-2.5"
                >
                  {service.linkText || "Vaata koristusteenuseid"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}