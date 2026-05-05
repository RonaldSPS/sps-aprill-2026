import Image from "next/image";
import TwoToneHeading from "./TwoToneHeading";

const trustBadges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "ISO 9001 + ISO 14001",
    subtitle: "Sertifitseeritud",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "20+ aastat",
    subtitle: "Kogemust",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "200+ töötajat",
    subtitle: "Koolitatud",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "500 000m²",
    subtitle: "Igakuist pinda",
  },
];

const certChips = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Kvaliteedi garantii",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Kindlustatud teenused",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "24/7 tugi",
  },
];

export default function Trust() {
  return (
    <section className="trust-section py-[100px] bg-white" id="garantii">
      <div className="max-w-[1280px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left - Text */}
          <div>
            <div className="section-tag">Kvaliteedi garantii</div>
            <TwoToneHeading text="Miks usaldavad meid 500+ ettevõtet?" />
            <p className="text-[16px] text-[#2f353f] leading-[1.8] mb-7 font-light">
              SPS Grupp on pakkunud puhastusteenuseid Eesti ettevõttetele üle 20 aasta. Meie 
              eesmärk on pakkuda koristusteenust, mis lähtub iga ettevõtte vajadustest personaalselt. 
              Igas kuus hooldame üle poole miljoni ruutmeetri äripindu. Meil töötab üle 200 töötaja 
              ning suudame leida optimaalse lahenduse nii suurtele, kui ka väga suurtele ettevõtetele.
            </p>
            
            <div className="grid grid-cols-2 gap-3.5">
              {trustBadges.map((badge, i) => (
                <div key={i} className="trust-badge-card hover:-translate-y-0.5">
                  <div className="w-[46px] h-[46px] bg-[#17345a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="w-[22px] h-[22px] text-white">{badge.icon}</span>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#17345a] mb-0.5">{badge.title}</div>
                    <div className="text-[11px] text-[#8896a6]">{badge.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div 
              className="rounded-[20px] overflow-hidden shadow-lg"
              style={{ height: "460px" }}
            >
              {/* Certification image */}
              <Image
                src="/9001-14001-ENG.webp"
                alt="ISO 9001 + ISO 14001 Sertifikaadid"
                width={640}
                height={460}
                className="w-full h-auto"
              />
            </div>

            {/* Overlay certifications */}
            <div 
              className="absolute -bottom-6 -left-6 right-6 bg-white rounded-4xl p-6 flex gap-4 shadow-md border border-[rgba(23,52,90,0.06)]"
              style={{ boxShadow: "0 8px 30px rgba(23,52,90,0.10)" }}
            >
              {certChips.map((cert, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-[#eef7fc] border border-[rgba(133,203,233,0.25)] rounded-[10px] px-3.5 py-2.5 flex-1 min-w-[140px]">
                  <div className="w-9 h-9 bg-[#17345a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-[18px] h-[18px] text-white">{cert.icon}</span>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#17345a]">{cert.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}