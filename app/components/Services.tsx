"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import TwoToneHeading from "./TwoToneHeading";

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
    title: "Puhastusteenused ja eritööd",
    text: "Põrandate süvapuhastus, vaipade keemiline pesu, ehitusjärgne koristus ja professionaalne desinfitseerimine.",
    image: "/puhastusteenused.jpg",
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
    text: "Fassaadipesu, akende professionaalne pesu, graffiti eemaldamine ja lumekoristus talvel.",
    image: "/valikoristus.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#17345a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <rect x="9" y="13" width="6" height="8" />
        <path d="M10 9h4" />
      </svg>
    ),
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(false);

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
        </div>

        {/* Introduction with expandable text */}
        <div className="mb-12 max-w-[800px] mx-auto">
          <TwoToneHeading text="Miks Eesti suurettevõtted valivad SPS Grupi koristusfirmaks?" />
          <div className="text-[16px] text-[#333a46] leading-[1.8]">
            <p className="mb-4">
              Koristusteenuse pakkuja valikul ei ole küsimus ainult hinnas. Enamik firmasid, kes meie poole pöörduvad, on varasemalt juba teenusepakkujat vahetanud
            </p>
            
            {expanded && (
              <>
                <p className="mb-4">
                  — põhjuseks ebastabiilne kvaliteet, kehv kommunikatsioon või puuduv vastutus.
                </p>
                <p className="mb-4">
                  Hea teenus ei sõltu ainult koristajast. Oluline on süsteem: selge tööplaan, regulaarne kvaliteedikontroll ja kiire reageerimine olukordades, mis igapäevatöös paratamatult tekivad.
                </p>
                <p className="mb-4">
                  SPS Grupp on aastaid keskendunud just äriklientidele. Meie töö põhineb standardiseeritud protsessidel, koolitatud meeskonnal ja digitaalsel tööde jälgimisel. See annab kindluse, et teenus toimib järjepidevalt — ka siis, kui inimesed või olukorrad muutuvad.
                </p>
                <p>
                  Kui otsite partnerit, kes võtab koristuse teie jaoks päriselt "laualt ära", tasub alustada vajaduste kaardistamisest ja läbipaistvast pakkumisest.
                </p>
              </>
            )}
          </div>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-2 text-[#5ab5da] text-[14px] font-medium no-underline hover:text-[#17345a] transition-colors"
          >
            {expanded ? (
              <>
                Näita vähem
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </>
            ) : (
              <>
                Loe lisaks
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Three columns with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Regulaarne koristusteenus */}
          <div className="service-column-card" style={{ transitionDelay: `${0 * 0.1}s` }}>
            <div className="w-full h-[180px] relative overflow-hidden rounded-xl mb-6">
              <Image 
                src={services[0].image}
                alt={services[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mb-4">
              <span className="w-[26px] h-[26px] inline-flex items-center justify-center">{services[0].icon}</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#17345a] mb-3">
              {services[0].title}
            </h3>
            <p className="text-[14px] text-[#333a46] leading-[1.7] mb-5 font-light">
              Igapäevane ja perioodiline hooldus, mis hoiab teie tööruumid pidevalt puhtad ja esinduslikud.
            </p>
            <ul className="text-[14px] text-[#2f353f] leading-[1.8] mb-5 space-y-1">
              <li>• kontorite, kaubanduspindade ja tootmishoonete hooldus</li>
              <li>• põrandate ja tööpindade puhastus</li>
              <li>• sanitaarruumide korrashoid</li>
              <li>• köögid, prügikäitlus ja tarvikute haldus</li>
              <li>• klaaspinnad ja IT-seadmete puhastus</li>
            </ul>
            <p className="text-[14px] text-[#2d7a4f] font-medium mb-4">
              Kõik vahendid ja tarvikud on hinna sees.
            </p>
            <Link href="#pakkumine" className="inline-flex items-center gap-1.5 text-[#5ab5da] text-[14px] font-medium no-underline">
              Vaata lähemalt →
            </Link>
          </div>

          {/* Column 2: Puhastusteenused ja eritööd */}
          <div className="service-column-card" style={{ transitionDelay: `${1 * 0.1}s` }}>
            <div className="w-full h-[180px] relative overflow-hidden rounded-xl mb-6">
              <Image 
                src={services[1].image}
                alt={services[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mb-4">
              <span className="w-[26px] h-[26px] inline-flex items-center justify-center">{services[1].icon}</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#17345a] mb-3">
              {services[1].title}
            </h3>
            <p className="text-[14px] text-[#333a46] leading-[1.7] mb-5 font-light">
              Perioodilised ja spetsiifilised tööd, mis taastavad pindade seisukorra ja pikendavad nende eluiga.
            </p>
            <ul className="text-[14px] text-[#2f353f] leading-[1.8] mb-5 space-y-1">
              <li>• akende pesu (seest ja väljast)</li>
              <li>• vaipade ja tekstiilide keemiline puhastus</li>
              <li>• põrandate süvahooldus ja vahatamine</li>
              <li>• ehitusjärgne koristus</li>
              <li>• desinfitseerimine ja eripuhastused</li>
            </ul>
            <p className="text-[14px] text-[#2d7a4f] font-medium mb-4">
              Kiirreageerimine 24/7 ootamatute olukordade jaoks.
            </p>
            <Link href="#pakkumine" className="inline-flex items-center gap-1.5 text-[#5ab5da] text-[14px] font-medium no-underline">
              Vaata lähemalt →
            </Link>
          </div>

          {/* Column 3: Välikoristus ja territooriumi hooldus */}
          <div className="service-column-card" style={{ transitionDelay: `${2 * 0.1}s` }}>
            <div className="w-full h-[180px] relative overflow-hidden rounded-xl mb-6">
              <Image 
                src={services[2].image}
                alt={services[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mb-4">
              <span className="w-[26px] h-[26px] inline-flex items-center justify-center">{services[2].icon}</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#17345a] mb-3">
              {services[2].title}
            </h3>
            <p className="text-[14px] text-[#333a46] leading-[1.7] mb-5 font-light">
              Hooldame teie hoone ümbrust aastaringselt, igal hooajal oma plaaniga.
            </p>
            <ul className="text-[14px] text-[#2f353f] leading-[1.8] mb-5 space-y-1">
              <li>• fassaadi- ja aknapesu (sh kõrghooned)</li>
              <li>• tänavakivide pesu ja hooldus</li>
              <li>• graffiti eemaldamine</li>
              <li>• lume- ja jäätõrje</li>
              <li>• lehekoristus ja hooajalised tööd</li>
            </ul>
            <p className="text-[14px] text-[#2d7a4f] font-medium mb-4">
              Üks leping, mis katab kõik hooajad ja vajadused.
            </p>
            <Link href="#pakkumine" className="inline-flex items-center gap-1.5 text-[#5ab5da] text-[14px] font-medium no-underline">
              Vaata lähemalt →
            </Link>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-[15px] text-[#333a46] leading-[1.8] max-w-[600px] mx-auto">
            Paljud meie kliendid kasutavad kõiki teenuseid koos, sest see tähendab selget vastutust ja vähem koordineerimist. Nii toimib kogu kinnisvarahooldus ühe süsteemina, mitte eraldiseisvate teenustena.
          </p>
        </div>
      </div>
    </section>
  );
}
