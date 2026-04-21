const logos = [
  "RIMI", "MAXIMA", "SOKOS HOTEL VIRU", "TALTECH", "ELERING", 
  "ERICSSON", "MYFITNESS", "TELEDYNE FLIR", "NORMA"
];

export default function Logos() {
  return (
    <section className="logos-section bg-white py-8 border-t border-b border-[rgba(23,52,90,0.05)]" id="kliendid">
      <div className="overflow-hidden relative">
        <div 
          className="flex items-center gap-0"
          style={{ width: "max-content", animation: "logoScroll 30s linear infinite" }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center py-2.5 px-10 opacity-40 transition-all hover:opacity-80 min-w-[160px]"
            >
              <span className="text-[14px] font-bold text-[#17345a] tracking-[1px] whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}