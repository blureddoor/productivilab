export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-[#6B7280] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-[#3A4861] font-semibold">
          <span>ProductiviLab</span>
          <span className="text-[#9CA3AF]">|</span>
          <span>Herramientas para e‑commerce</span>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="/(site)/legal/aviso-legal" className="hover:text-[#3A4861]">Aviso legal</a>
          <a href="/(site)/legal/politica-privacidad" className="hover:text-[#3A4861]">Privacidad</a>
          <a href="/(site)/legal/politica-cookies" className="hover:text-[#3A4861]">Cookies</a>
          <a href="/(site)/legal/terminos-condiciones" className="hover:text-[#3A4861]">Términos</a>
          <a href="mailto:soporte@productivilab.com" className="hover:text-[#3A4861]">Soporte</a>
        </nav>
        <div>© ProductiviLab – Leonard Daniel Vintila – 2025</div>
      </div>
    </footer>
  );
}
