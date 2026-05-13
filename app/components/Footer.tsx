import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#teenused", label: "Teenused" },
  { href: "#kliendid", label: "Tule tööle" },
  { href: "#garantii", label: "SPS Grupp" },
  { href: "#kkk", label: "Kontakt" },
];

const megaMenuData = {
  title: "Koristusteenused",
  columns: [
    {
      title: "Regulaarne koristusteenus",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#85cbe9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
      items: [
        { label: "Kontori koristus", href: "/koristusteenus/kontori-koristus" },
        { label: "Kaubanduspindade koristus", href: "/kaubanduspindade-koristus" },
        { label: "Tootmishoonete koristus", href: "/tootmishoonete-koristus" },
      ],
    },
    {
      title: "Sisepuhastus",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#85cbe9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
      items: [
        { label: "Akende pesu", href: "#teenused" },
        { label: "Vaipade puhastus", href: "#teenused" },
        { label: "Põrandate hooldus", href: "#teenused" },
        { label: "Ehitusprahi äravedu", href: "#teenused" },
        { label: "Ehitusjärgne koristus", href: "#teenused" },
        { label: "Tulekahjustuste eemaldus", href: "#teenused" },
        { label: "Eskalaatorite süvapuhastus", href: "#teenused" },
        { label: "Desinfitseerimine", href: "#teenused" },
      ],
    },
    {
      title: "Välikoristus",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4 8 4v14" />
          <rect x="9" y="13" width="6" height="8" />
          <path d="M10 9h4" />
        </svg>
      ),
      items: [
        { label: "Tänavakivide pesu ja hooldus", href: "#teenused" },
        { label: "Graffiti eemaldamine", href: "#teenused" },
        { label: "Fassaadipesu", href: "#teenused" },
        { label: "Muru niitmine", href: "#teenused" },
        { label: "Lumekoristus", href: "#teenused" },
      ],
    },
    {
      title: "Remonditeenused",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      items: [
        { label: "Elektritööd", href: "#teenused" },
        { label: "Torutööd", href: "#teenused" },
        { label: "Siseviimistlus", href: "#teenused" },
        { label: "Sanitaarremont", href: "#teenused" },
        { label: "Ventilatsioonide ehitus", href: "#teenused" },
        { label: "Plaatimistööd", href: "#teenused" },
        { label: "Katuse remont", href: "#teenused" },
        { label: "Lammutustööd", href: "#teenused" },
      ],
      highlighted: true,
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1f33] py-12 border-t border-[rgba(133,203,233,0.08)]">
      <div className="max-w-[1440px] mx-auto px-[25px]">
        {/* Top section - menu system like navbar */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-9 border-b border-[rgba(133,203,233,0.06)]">
          {/* Column 1: Logo + Nav links + Kontakt */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-4">
              <Image
                src="/SPS_LOGO.svg"
                alt="SPS Grupp"
                width={38}
                height={38}
                style={{ width: "auto", height: "38px" }}
              />
            </Link>

            {/* Anti-bot protected contact info */}
            <div className="mt-4 space-y-1">
              <a
                href={"https://www.google.com/maps/place/Tetris+B%C3%BCroohoone,+Mustam%C3%A4e+tee+46,+10621+Tallinn/@59.4162971,24.6890432,17z/data=!3m1!4b1!4m6!3m5!1s0x469294f5fec8e2fd:0xc2b28e6f780f9897!8m2!3d59.4162944!4d24.6916181!16s%2Fg%2F1q6jyqwpb?entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D"}
                className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9] block"
                rel="nofollow"
              >
                {"MUSTAMÄE TEE 46, 10621 TALLINN"}
              </a>
              <a
                href={`tel:${["+", "3", "7", "2", " ", "5", "5", "6", "0", " ", "5", "1", "4", "7"].join("")}`}
                className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9] block"
                rel="nofollow"
              >
                {["+372", " ", "5560", " ", "5147"].join("")}
              </a>
              <a
                href={`tel:${["+", "3", "7", "2", " ", "6", "6", "2", " ", "3", "3", "2", "8"].join("")}`}
                className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9] block"
                rel="nofollow"
              >
                {["+372", " ", "662", " ", "3328"].join("")}
              </a>
              <a
                href={`mailto:${["i", "n", "f", "o", "@", "s", "p", "s", "g", "r", "u", "p", "p", ".", "e", "e"].join("")}`}
                className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9] block"
                rel="nofollow"
              >
                {["info", "@", "spsgrupp", ".ee"].join("")}
              </a>
            </div>

            <ul className="flex flex-col gap-1 list-none mt-4 mb-6">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Facebook link */}
            <a
              href="https://www.facebook.com/Puhastusteenused"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#85cbe9] transition-colors no-underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SPS Grupp Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#85cbe9]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Column 2: Teenused with mega menu */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[0].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[0].icon}
                </span>
              )}
              {megaMenuData.columns[0].title}
            </h2>
            <ul className="flex flex-col gap-1 list-none">
              {megaMenuData.columns[0].items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="https://taust.ee/app/report/sps-grupp-ou-11394806" className="block mt-4 no-underline" rel="nofollow">
              <Image
                src="/Hasti-juhitud-ettevote.webp"
                alt="Hästi juhitud ettevõte"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
              />
            </a>
          </div>

          {/* Column 3: Sisepuhastus */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[1].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[1].icon}
                </span>
              )}
              {megaMenuData.columns[1].title}
            </h2>
            <ul className="flex flex-col gap-1 list-none">
              {megaMenuData.columns[1].items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Välikoristus */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[2].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[2].icon}
                </span>
              )}
              {megaMenuData.columns[2].title}
            </h2>
            <ul className="flex flex-col gap-1 list-none">
              {megaMenuData.columns[2].items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Remonditeenused */}
          <div>
            <h2 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[3].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[3].icon}
                </span>
              )}
              {megaMenuData.columns[3].title}
            </h2>
            <ul className="flex flex-col gap-1 list-none">
              {megaMenuData.columns[3].items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-5 flex-wrap gap-2.5 text-[13px] text-white/50 font-light">
          <span>© {currentYear} SPS Grupp. Kõikõigused kaitstud.</span>
          <div className="flex gap-5">
            <span className="text-white/50">Privaatsus</span>
            <span className="text-white/50">Kasutustingimused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}