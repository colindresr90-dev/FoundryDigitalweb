import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Scale, Building2, Gavel, ShieldCheck, Award, Lock, Users, CheckCircle2,
  Briefcase, Home as HomeIcon, Quote, Star, Phone, ArrowUpRight, FileText
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-premium.jpg";
import aboutImg from "@/assets/about-justice.jpg";
import portraitImg from "@/assets/lawyer-portrait.jpg";
import sansalvadorImg from "@/assets/sansalvador.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vargas & Asociados — Bufete de abogados en San Salvador, El Salvador" },
      { name: "description", content: "Bufete de abogados en San Salvador con más de 22 años de experiencia. Asesoría legal en derecho civil, penal, mercantil, laboral y corporativo en El Salvador." },
      { name: "keywords", content: "bufete de abogados El Salvador, abogados San Salvador, asesoría legal El Salvador, derecho civil, derecho penal, derecho mercantil" },
      { property: "og:title", content: "Vargas & Asociados — Bufete Jurídico en El Salvador" },
      { property: "og:description", content: "Defendiendo tus derechos con experiencia y compromiso. Asesoría legal profesional para personas y empresas en El Salvador." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Contratos, sucesiones, propiedad y responsabilidad civil con respaldo experto.", tone: "navy" },
  { icon: Gavel, title: "Derecho Penal", desc: "Defensa estratégica y representación en cada etapa del proceso penal.", tone: "burgundy" },
  { icon: Building2, title: "Derecho Mercantil", desc: "Constitución, gobierno corporativo y operaciones para empresas en crecimiento.", tone: "navy" },
  { icon: Briefcase, title: "Derecho Laboral", desc: "Representación de empresas y trabajadores con cumplimiento normativo.", tone: "burgundy" },
  { icon: HomeIcon, title: "Derecho de Familia", desc: "Divorcios, custodias, pensión alimenticia y procesos sucesorios.", tone: "navy" },
  { icon: ShieldCheck, title: "Asesoría Integral", desc: "Consultoría preventiva continua para personas y organizaciones.", tone: "burgundy" },
];

const benefits = [
  { icon: Users, title: "Atención personalizada", desc: "Cada caso recibe atención dedicada de un socio del despacho." },
  { icon: Award, title: "22 años de experiencia", desc: "Más de dos décadas de trayectoria con miles de casos resueltos." },
  { icon: Lock, title: "Confidencialidad total", desc: "Protocolos estrictos para proteger tu información en todo momento." },
  { icon: CheckCircle2, title: "Resultados comprobables", desc: "Estrategias claras orientadas a resolver, no a prolongar." },
];

const process = [
  { n: "01", title: "Consulta inicial", desc: "Evaluamos tu caso de forma confidencial sin compromiso." },
  { n: "02", title: "Estrategia jurídica", desc: "Diseñamos un plan de acción claro con plazos y objetivos." },
  { n: "03", title: "Ejecución", desc: "Llevamos tu representación con rigor técnico y comunicación constante." },
  { n: "04", title: "Resultados", desc: "Cerramos el caso protegiendo tus intereses y derechos." },
];

const testimonials = [
  { name: "María Elena Cáceres", role: "Empresaria · Antiguo Cuscatlán", text: "El Lic. Vargas y su equipo resolvieron un litigio mercantil que arrastraba dos años. Profesionalismo absoluto y resultados rápidos." },
  { name: "Carlos Roberto Menéndez", role: "Director General, Grupo Industrial", text: "Los recomiendo sin reservas. Su asesoría corporativa nos ha ahorrado tiempo, dinero y dolores de cabeza durante más de cinco años." },
  { name: "Ana Lucía Portillo", role: "Cliente particular · San Salvador", text: "En un momento muy difícil de mi vida, encontré en este bufete cercanía, claridad y una defensa contundente. Eternamente agradecida." },
];

const partners = ["Cámara de Comercio", "ANEP", "Corte Suprema", "ASI", "Fedecámaras", "Cámara de Comercio"];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={heroImg} alt="Oficina premium del bufete Vargas & Asociados" className="h-full w-full object-cover" width={1920} height={1080} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-navy-deep/30" />

        {/* decorative gold frame */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1.2 }}
          className="absolute inset-x-6 inset-y-24 md:inset-12 border border-gold/20 pointer-events-none"
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative mx-auto max-w-7xl px-6 py-32 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="ornament mb-7"
            >
              Vargas & Asociados · Est. 2002
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-white"
            >
              Defendiendo tus derechos con{" "}
              <em className="font-display italic text-gradient-gold not-italic-fix">experiencia</em>{" "}
              y compromiso.
            </motion.h1>
            <motion.span
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.85 }}
              className="gold-divider mt-10 block origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.95 }}
              className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              El bufete jurídico de referencia en El Salvador. Estrategia legal con discreción, ética y resultados, para personas y empresas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/50378900000?text=Hola%2C%20quisiera%20agendar%20una%20consulta"
                target="_blank" rel="noopener"
                className="group inline-flex items-center gap-3 btn-gold px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em]"
              >
                Agendar consulta <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/servicios"
                className="group inline-flex items-center gap-3 border border-white/30 backdrop-blur-sm bg-white/5 text-white px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-white/10 hover:border-gold transition-all"
              >
                Nuestros servicios <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>

            {/* hero stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-xl border-t border-white/15 pt-8"
            >
              {[
                { v: 22, s: "+", l: "Años" },
                { v: 1800, s: "+", l: "Casos" },
                { v: 98, s: "%", l: "Satisfacción" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-gold">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="scroll-indicator" />
          <span className="text-white/50 text-[9px] uppercase tracking-[0.45em]">Scroll</span>
        </motion.div>
      </section>

      {/* MARQUEE / TRUST BAR */}
      <section className="bg-navy-deep py-6 border-y border-gold/15 overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} className="flex items-center gap-4 text-white/40 text-xs uppercase tracking-[0.35em] shrink-0">
              <Star className="h-3 w-3 text-gold" />
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10 items-center">
          <Reveal direction="left">
            <p className="ornament">Bienvenidos</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-3 leading-tight">
              Estrategia jurídica al más alto nivel en El Salvador.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Somos un bufete salvadoreño con presencia en San Salvador y respaldo en toda la región centroamericana. Nuestro equipo combina <span className="text-navy font-medium">rigor técnico</span> con un trato cercano para entregar soluciones integrales a personas, familias, emprendedores y corporativos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Áreas de práctica</p>
            <h2 className="font-display text-4xl md:text-6xl text-navy">Servicios <em className="text-gold-deep">destacados</em></h2>
            <span className="gold-divider mt-7" />
            <p className="mt-7 text-muted-foreground text-lg">
              Soluciones jurídicas integrales en las principales áreas del derecho salvadoreño.
            </p>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white border border-border p-10 hover:border-gold transition-all duration-500 hover:shadow-elegant overflow-hidden h-full"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${s.tone === "burgundy" ? "bg-burgundy" : "bg-gradient-gold"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  <div className={`flex h-16 w-16 items-center justify-center mb-6 transition-all duration-500 ${s.tone === "burgundy" ? "bg-burgundy" : "bg-navy-deep"} group-hover:bg-gold`}>
                    <s.icon className={`h-7 w-7 transition-colors duration-500 ${s.tone === "burgundy" ? "text-white" : "text-gold"} group-hover:text-navy-deep`} />
                  </div>
                  <h3 className="font-display text-2xl text-navy mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/servicios" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-navy font-semibold link-underline">
                    Ver más <ArrowRight className="h-3 w-3" />
                  </Link>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ABOUT SUMMARY w/ portrait */}
      <section className="py-24 md:py-32 bg-gradient-cream relative overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-burgundy/8 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <Reveal direction="left" className="relative">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}>
              <img
                src={portraitImg}
                alt="Lic. Roberto Vargas, socio fundador"
                loading="lazy" width={1280} height={1600}
                className="w-full aspect-[4/5] object-cover shadow-elegant"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-10 -right-6 md:-right-10 bg-navy-deep text-white p-8 max-w-xs shadow-elegant border-l-4 border-gold"
            >
              <Quote className="h-8 w-8 text-gold mb-3" />
              <p className="text-sm italic leading-relaxed text-white/90">
                "El derecho está al servicio de las personas, nunca al revés."
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="font-display text-lg text-gold">Roberto Vargas</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Socio fundador</div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <p className="ornament mb-4">Sobre el bufete</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Un despacho construido sobre <em className="text-gold-deep">confianza</em> y resultados.
            </h2>
            <span className="gold-divider mt-6 block" />
            <p className="mt-7 text-muted-foreground leading-relaxed text-lg">
              Desde 2002, Vargas & Asociados acompaña a personas y empresas salvadoreñas en los momentos que más importan. Combinamos rigor técnico, sensibilidad humana y una trayectoria sólida para ofrecer asesoría jurídica del más alto nivel.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { v: 22, s: "+", l: "Años de trayectoria" },
                { v: 1800, s: "+", l: "Casos resueltos" },
                { v: 12, s: "", l: "Abogados especializados" },
                { v: 98, s: "%", l: "Clientes satisfechos" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-gold pl-5">
                  <div className="font-display text-4xl text-navy"><Counter to={s.v} suffix={s.s} /></div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <Link
              to="/nosotros"
              className="mt-10 inline-flex items-center gap-3 text-navy font-semibold uppercase tracking-[0.22em] text-xs border-b-2 border-gold pb-2 hover:gap-5 transition-all"
            >
              Conocer al equipo <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-navy-deep text-white relative overflow-hidden grain">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-burgundy/15 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Nuestro método</p>
            <h2 className="font-display text-4xl md:text-6xl">Un proceso <em className="text-gold">transparente</em></h2>
            <span className="gold-divider mt-7" />
            <p className="mt-7 text-white/70 text-lg">
              Cuatro etapas claras para que sepas exactamente cómo defendemos tu caso.
            </p>
          </Reveal>

          <StaggerGroup stagger={0.15} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            <div className="absolute hidden lg:block top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            {process.map((p) => (
              <StaggerItem key={p.n} className="relative">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative h-24 w-24 mx-auto mb-6 flex items-center justify-center bg-gradient-gold text-navy-deep font-display text-3xl shadow-gold"
                  >
                    {p.n}
                    <div className="absolute inset-0 border-2 border-gold/40 -rotate-3" />
                  </motion.div>
                </div>
                <h3 className="font-display text-2xl text-white text-center mb-3">{p.title}</h3>
                <p className="text-sm text-white/65 text-center leading-relaxed">{p.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Por qué elegirnos</p>
            <h2 className="font-display text-4xl md:text-6xl text-navy">Beneficios reales para nuestros clientes</h2>
            <span className="gold-divider mt-7" />
          </Reveal>

          <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <StaggerItem key={b.title} className="text-center">
                <motion.div
                  whileHover={{ y: -6, rotate: 3 }}
                  className="inline-flex h-20 w-20 items-center justify-center border-2 border-gold/40 bg-gradient-to-br from-gold/10 to-transparent mb-6 shadow-soft"
                >
                  <b.icon className="h-8 w-8 text-gold-deep" />
                </motion.div>
                <h3 className="font-display text-2xl text-navy mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-gradient-cream relative overflow-hidden">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Testimonios</p>
            <h2 className="font-display text-4xl md:text-6xl text-navy">La voz de nuestros <em className="text-gold-deep">clientes</em></h2>
            <span className="gold-divider mt-7" />
          </Reveal>

          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative bg-white p-10 shadow-soft hover:shadow-elegant transition-all duration-500 h-full border-t-4 border-gold"
                >
                  <Quote className="absolute -top-5 left-8 h-10 w-10 text-gold bg-cream p-2" />
                  <div className="flex gap-1 mb-5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-navy/80 leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-7 pt-5 border-t border-border">
                    <div className="font-display text-lg text-navy">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{t.role}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* LOCATION / SAN SALVADOR */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0"
        >
          <img src={sansalvadorImg} alt="Skyline de San Salvador" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="ornament mb-4">Presencia local</p>
            <h2 className="font-display text-4xl md:text-5xl">Defendiendo a El Salvador desde San Salvador.</h2>
            <span className="gold-divider mt-6 block" />
            <p className="mt-6 text-white/75 leading-relaxed">
              Nuestra oficina central se ubica en el corazón financiero de la capital, con cobertura en los 14 departamentos del país.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["San Salvador", "Santa Ana", "San Miguel", "La Libertad", "Sonsonate"].map((c) => (
                <span key={c} className="border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold/90">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 md:py-36 bg-gradient-navy text-white overflow-hidden grain">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, var(--gold), transparent 60%)" }}
        />
        <div className="absolute top-12 left-12 hidden md:block opacity-20">
          <FileText className="h-32 w-32 text-gold animate-float" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="ornament mb-6">Estamos para ayudarte</p>
            <h2 className="font-display text-4xl md:text-7xl text-white leading-tight">
              Contáctanos <em className="text-gradient-gold">hoy mismo</em>.
            </h2>
            <span className="gold-divider mt-8 block mx-auto" />
            <p className="mt-7 text-white/70 text-lg max-w-2xl mx-auto">
              Reserva una consulta confidencial con uno de nuestros abogados y descubre la mejor estrategia para tu caso.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/50378900000" target="_blank" rel="noopener"
                className="group inline-flex items-center gap-3 btn-gold px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em]"
              >
                Agendar consulta <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+50322985000"
                className="group inline-flex items-center gap-3 border border-white/30 backdrop-blur-sm bg-white/5 text-white px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-white/10 hover:border-gold transition-all"
              >
                <Phone className="h-4 w-4" /> +503 2298-5000
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
