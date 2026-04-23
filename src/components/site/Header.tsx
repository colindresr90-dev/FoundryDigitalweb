import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Scale, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className={`fixed inset-x-0 top-0 z-50 bg-navy-deep text-white/80 text-xs transition-all duration-500 ${scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between">
          <p className="hidden sm:block tracking-[0.2em] uppercase text-[10px] text-gold/80">Bufete jurídico · El Salvador</p>
          <div className="flex items-center gap-5 text-[11px]">
            <a href="tel:+50322985000" className="inline-flex items-center gap-2 hover:text-gold transition">
              <Phone className="h-3 w-3" /> +503 2298-5000
            </a>
            <span className="hidden md:inline text-white/40">Lun – Vie · 8:00 – 18:00</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-navy-deep/95 backdrop-blur-xl border-b border-gold/20 py-3 shadow-elegant"
            : "top-10 bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-gold border border-gold/40 shadow-gold"
            >
              <Scale className="h-5 w-5 text-navy-deep" />
            </motion.div>
            <div className="leading-tight">
              <div className="font-display text-xl text-white tracking-wide">Vargas <span className="text-gold">&</span> Asociados</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Bufete Jurídico · 2002</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs uppercase tracking-[0.22em] text-white/80 hover:text-gold transition-colors link-underline"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/50378900000?text=Hola%2C%20quisiera%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener"
              className="ml-2 inline-flex items-center justify-center btn-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              Agendar consulta
            </a>
          </nav>

          <button
            aria-label="Menu"
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-navy-deep border-t border-gold/15"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-[0.22em] text-white/80"
                    activeProps={{ className: "text-gold" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/50378900000"
                  className="inline-flex items-center justify-center btn-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em]"
                >
                  Agendar consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
