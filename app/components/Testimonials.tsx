import Link from "next/link";

const testimonials = [
  {
    quote: "Kõige suurem muutus oli see, et ma ei pea ise koristuse pärast enam muretsema. Enne oli alati midagi valesti — nüüd toimib teenus märkamatult.",
    author: "Kinnisvarahaldur",
    location: "Tallinn",
    initials: "K",
  },
  {
    quote: "Võrreldes eelmiste teenusepakkujatega nagu öö ja päev! Viisakad ja positiivsed. WC-s on nüüd ka alati kõik tarvikud olemas.",
    author: "Maiki Nautras",
    location: "General Services Specialist, AS Norma",
    initials: "M",
  },
  {
    quote: "Meil on mitu asukohta ja SPS Grupp toimetab kõigis nendes ühtviisi hästi. See on haruldane. Täname järjepideva teenuse eest!",
    author: "Hooldusjuht",
    location: "Kinnisvarafirmade kett",
    initials: "H",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section py-[100px] bg-[#eceef1]" id="kliendid-arvustused">
      <div className="max-w-[1280px] mx-auto px-[5%]">
        <div className="text-center mb-14">
          <div className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Klientide tagasiside
          </div>
          <h2 className="section-title">Mida ütlevad meie kliendid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex gap-[3px] mb-4 text-[#f59e0b]">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[15px]">★</span>
                ))}
              </div>
              <p className="text-[15px] leading-[1.8] text-[#2d3748] mb-[22px] font-light italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10.5 h-10.5 rounded-full bg-[#eef7fc] flex items-center justify-center text-[15px] font-bold text-[#17345a]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#17345a]">{t.author}</div>
                  <div className="text-[12px] text-[#8896a6]">{t.location}</div>
                </div>
              </div>
              <Link href="#pakkumine" className="inline-flex items-center gap-1.5 text-[#5ab5da] text-[13px] font-medium no-underline mt-4 transition-all hover:text-[#17345a] hover:gap-2.5">
                Soovid sama tulemust? Küsi pakkumist →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}