"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#teenused", label: "Teenused" },
  { href: "#kliendid", label: "Tule tööle" },
  { href: "#garantii", label: "SPS Grupp" },
  { href: "#blogi", label: "Blogi" },
  { href: "#kkk", label: "Kontakt" },
];

const megaMenuData = {
  title: "Koristusteenused",
  columns: [
    {
      title: "Sisekoristus",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
          <path d="M5 8h14" />
          <path d="M9 2v5" />
          <path d="M15 2v5" />
          <rect x="6" y="8" width="12" height="3" rx="1" />
        </svg>
      ),
      items: [
        { label: "Kontori koristus", href: "/koristusteenus/kontori-koristus" },
        { label: "Kaubanduspindade koristus", href: "/kaubanduspindade-koristus" },
        { label: "Tootmishoonete koristus", href: "/tootmishoonete-koristus" },
        { label: "Koolide koristus", href: "#teenused" },
      ],
    },
    {
      title: "Eripuhastustööd",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="6" height="10" rx="1" />
          <rect x="10" y="14" width="4" height="2" rx="0.5" />
          <path d="M14 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4" />
          <path d="M17 8V6a2 2 0 0 0-2-2h-1" />
          <line x1="6" y1="11" x2="8" y2="11" />
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
        { label: "Tänavakivide pesu ja hooldus", href: "#teenused" },
        { label: "Graffiti eemaldamine", href: "#teenused" },
        { label: "Fassaadipesu", href: "#teenused" },
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
          <circle cx="16" cy="4" r="1" fill="#17345a" stroke="none" />
          <path d="M16 7v1" />
        </svg>
      ),
      items: [
        { label: "Muru niitmine", href: "#teenused" },
        { label: "Lumekoristus", href: "#teenused" },
        { label: "Kojamehe teenus", href: "#teenused" },
        { label: "Lehekoristus", href: "#teenused" },
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
    },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setMegaMenuOpen(false), 200);
    setMenuTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      id="navbar"
    >
      <div className="navbar-container">
        <Link href="/" className="logo flex items-center gap-2.5 no-underline">
          <Image
            src="/SPS_LOGO.svg"
            alt="SPS Grupp"
            width={38}
            height={38}
            style={{ width: "auto", height: "38px", color: "#2d3748" }}
          />
</Link>

        <ul className="nav-links flex list-none items-center gap-7">
        {navLinks.map((link, index) => (
          <li key={link.href}>
            {index === 0 ? (
              <div 
                className="mega-menu-trigger relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className="text-[#17345a] text-[15px] font-medium transition-all hover:text-[#17345a] cursor-pointer bg-transparent border-none flex items-center h-full py-0 no-underline"
                >
                  {link.label}
                </Link>
                <div 
                  className={`mega-menu max-w-[1100px] w-[95vw] bg-white rounded-b-[16px] shadow-lg border border-[rgba(23,52,90,0.08)] p-6 grid grid-cols-4 gap-8 transition-opacity duration-200 ${megaMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                    {megaMenuData.columns.map((col, colIdx) => (
                      <div key={colIdx}>
                        <div className="text-[15px] font-bold text-[#17345a] mb-3 flex items-center gap-2">
                          {col.icon && <span className="w-5 h-5">{col.icon}</span>}
                          {col.title}
                        </div>
                        {col.items && (
<ul className="flex flex-col gap-1">
                            {col.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link href={item.href} className="text-[15px] text-[#2f353f] hover:text-[#17345a] no-underline">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
              </div>
            ) : (
              <Link
                href={link.href}
                className="text-[#17345a] no-underline text-[15px] font-medium transition-all hover:text-[#17345a] relative"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            href="tel:6623328"
            className="flex items-center gap-1.5 text-[#17345a] font-medium no-underline"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            662 3328
          </Link>
        </li>
        <li>
          <Link
            href="#pakkumine"
            className="bg-[#17345a] text-white no-underline py-2 px-5 rounded-lg text-[15px] font-medium transition-all hover:bg-[#1e4a7a] hover:-translate-y-0.5"
            style={{ boxShadow: "0 2px 12px rgba(23,52,90,0.07)" }}
          >
            Küsi pakkumist
          </Link>
        </li>
      </ul>
      </div>

      {/* Mobile menu toggle button */}
      <button
        className="mobile-menu-btn flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
        aria-label="Menüü"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="block w-[22px] h-0.5 bg-[#17345a] rounded"></span>
        <span className="block w-[22px] h-0.5 bg-[#17345a] rounded"></span>
        <span className="block w-[22px] h-0.5 bg-[#17345a] rounded"></span>
      </button>

      {/* Mobile mega menu (fullscreen on mobile) */}
        <div className={`fixed inset-0 bg-white z-[1001] overflow-y-auto transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          {/* Sticky header with close button */}
          <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/SPS_LOGO.svg"
                alt="SPS Grupp"
                width={32}
                height={32}
                style={{ width: "auto", height: "32px", color: "#2d3748" }}
              />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2" aria-label="Sulge menüü">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {/* Main nav links */}
            <div className="mb-8">
              {navLinks.map((link, index) => (
                <div key={link.href} className="mb-4">
                  {index === 0 ? (
                    <div>
                      <div className="text-lg font-bold text-[#17345a] mb-4">{link.label}</div>
                      <div className="grid grid-cols-1 gap-4">
                        {megaMenuData.columns.map((col, colIdx) => (
                          <div key={colIdx}>
                            <div className="text-base font-semibold text-[#17345a] mb-2 flex items-center gap-2">
                              {col.icon && <span className="w-4 h-4">{col.icon}</span>}
                              {col.title}
                            </div>
                            <ul className="flex flex-col gap-1">
                              {col.items && col.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    href={item.href} 
                                    className="block py-2 px-3 rounded-lg hover:bg-gray-100 text-[#2f353f]"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="block py-3 text-lg font-medium text-[#2f353f] border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA and contact */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link 
                href="#pakkumine"
                className="block w-full text-center bg-[#17345a] text-white py-3 px-5 rounded-lg font-medium mb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Küsi pakkumist
              </Link>
              <a href="tel:6623328" className="block text-center text-[#2f353f] py-2">
                662 3328
              </a>
            </div>
          </div>
        </div>
    </nav>
  );
}