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
        <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
      items: [
        { label: "Kontori koristus", href: "/kontorikoristus" },
        { label: "Kaubanduspindade koristus", href: "/kaubanduspindade-koristus" },
        { label: "Tootmishoonete koristus", href: "/tootmishoonete-koristus" },
      ],
    },
    {
      title: "Sisepuhastus",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <ul className="flex flex-col gap-1 list-none mt-4 mb-6">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <h4 className="text-[#85cbe9] text-[12px] font-medium uppercase tracking-[1px] mb-3">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-1 list-none">
              <li><Link href="tel:6623328" className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">662 3328</Link></li>
              <li><Link href="mailto:info@spsgrupp.ee" className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">info@spsgrupp.ee</Link></li>
              <li><Link href="#pakkumine" className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">Küsi pakkumist</Link></li>
            </ul>
          </div>

          {/* Column 2: Teenused with mega menu */}
          <div>
            <h4 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[0].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[0].icon}
                </span>
              )}
              {megaMenuData.columns[0].title}
            </h4>
            <ul className="flex flex-col gap-1 list-none">
              {megaMenuData.columns[0].items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-white/45 text-[13px] no-underline hover:text-[#85cbe9]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sisepuhastus */}
          <div>
            <h4 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[1].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[1].icon}
                </span>
              )}
              {megaMenuData.columns[1].title}
            </h4>
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
            <h4 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[2].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[2].icon}
                </span>
              )}
              {megaMenuData.columns[2].title}
            </h4>
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
            <h4 className="text-white text-[14px] font-bold mb-3 flex items-center gap-2">
              {megaMenuData.columns[3].icon && (
                <span className="w-5 h-5 text-[#85cbe9]">
                  {megaMenuData.columns[3].icon}
                </span>
              )}
              {megaMenuData.columns[3].title}
            </h4>
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
        <div className="flex justify-between items-center mt-5 flex-wrap gap-2.5 text-[13px] text-white/30 font-light">
          <span>© {currentYear} SPS Grupp. Kõikõigused kaitstud.</span>
          <div className="flex gap-5">
            <Link href="#" className="text-white/30 no-underline hover:text-white/50">Privaatsus</Link>
            <Link href="#" className="text-white/30 no-underline hover:text-white/50">Kasutustingimused</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}