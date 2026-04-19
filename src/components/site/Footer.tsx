import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Scale, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white/80 overflow-hidden grain">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-burgundy/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-gold shadow-gold">
                <Scale className="h-5 w-5 text-navy-deep" />
              </div>
              <div>
                <div className="font-display text-xl text-white">Vargas <span className="text-gold">&</span> Asociados</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Bufete Jurídico · 2002</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Más de dos décadas defendiendo los derechos de personas y empresas salvadoreñas con ética, discreción y resultados comprobables.
            </p>
            <div className="flex gap-3 mt-7">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="h-10 w-10 flex items-center justify-center border border-white/15 hover:border-gold hover:bg-gold hover:text-navy-deep transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold transition link-underline">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-gold transition link-underline">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-gold transition link-underline">Nosotros</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <div>+503 2298-5000</div>
                  <div className="text-white/50 text-xs">WhatsApp: +503 7890-0000</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>contacto@vargasabogados.sv</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>World Trade Center, Torre II<br/>Calle El Mirador, Col. Escalón<br/>San Salvador, El Salvador</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Lun – Vie · 8:00 – 18:00<br/>Sáb · 9:00 – 13:00</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Ubicación</h4>
            <div className="aspect-[4/3] w-full overflow-hidden border border-gold/20 shadow-elegant">
              <iframe
                title="Ubicación oficina San Salvador"
                src="https://www.google.com/maps?q=World+Trade+Center+San+Salvador+Colonia+Escal%C3%B3n&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vargas & Asociados, S.A. de C.V. — Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.25em] text-gold/70">Discreción · Ética · Resultados</p>
        </div>
      </div>
    </footer>
  );
}
