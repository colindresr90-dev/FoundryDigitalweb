import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Scale, Gavel, Briefcase, Building2, ShieldCheck, FileText, ArrowRight,
  Home as HomeIcon, Globe, TrendingUp, BookOpen, Check
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import servicesBg from "@/assets/services-bg.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios Legales — Vargas & Asociados | Abogados en El Salvador" },
      { name: "description", content: "Servicios legales en derecho civil, penal, laboral, mercantil, familiar y migratorio en El Salvador. Asesoría jurídica profesional para personas y empresas." },
      { name: "keywords", content: "servicios legales El Salvador, abogados San Salvador, derecho civil, derecho mercantil, derecho laboral, derecho penal" },
      { property: "og:title", content: "Servicios Legales — Vargas & Asociados" },
      { property: "og:description", content: "Asesoría jurídica integral en las principales áreas del derecho salvadoreño." },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    icon: Scale, title: "Derecho Civil",
    desc: "Asesoría y representación en toda la materia civil salvadoreña: desde un contrato hasta un litigio patrimonial complejo.",
    points: [
      "Redacción y revisión de contratos",
      "Compraventa de bienes inmuebles",
      "Sucesiones, herencias y testamentos",
      "Responsabilidad civil contractual y extracontractual",
      "Arrendamientos urbanos y rústicos",
      "Cobros y ejecuciones civiles",
    ],
    tone: "navy",
  },
  {
    icon: Gavel, title: "Derecho Penal",
    desc: "Defensa estratégica en todas las etapas del proceso penal salvadoreño, con discreción absoluta y respaldo técnico.",
    points: [
      "Defensa en audiencia inicial y juicio oral",
      "Recursos de apelación y casación",
      "Amparos y hábeas corpus",
      "Asesoría a víctimas y querellantes",
      "Delitos económicos y financieros",
      "Salidas alternas al proceso",
    ],
    tone: "burgundy",
  },
  {
    icon: Briefcase, title: "Derecho Laboral",
    desc: "Representación de empresas y trabajadores en conflictos individuales, colectivos y auditorías de cumplimiento.",
    points: [
      "Contratación y elaboración de reglamentos",
      "Despidos y liquidaciones laborales",
      "Conflictos colectivos y huelgas",
      "Auditorías laborales preventivas",
      "Procesos ante el Ministerio de Trabajo",
      "Outsourcing y tercerización",
    ],
    tone: "navy",
  },
  {
    icon: Building2, title: "Derecho Mercantil & Corporativo",
    desc: "Acompañamiento integral a empresas, desde su constitución hasta operaciones complejas como fusiones y adquisiciones.",
    points: [
      "Constitución de sociedades en El Salvador",
      "Gobierno corporativo y juntas directivas",
      "Fusiones, adquisiciones y reestructuras",
      "Contratos mercantiles y distribución",
      "Propiedad intelectual y marcas",
      "Compliance y prevención del lavado",
    ],
    tone: "burgundy",
  },
  {
    icon: HomeIcon, title: "Derecho de Familia",
    desc: "Procesos sensibles tratados con cercanía, discreción y máxima protección de los intereses de cada familia.",
    points: [
      "Divorcios por mutuo consentimiento",
      "Divorcios contenciosos",
      "Pensión alimenticia y cuidado personal",
      "Régimen de visitas y custodia",
      "Adopciones nacionales",
      "Violencia intrafamiliar",
    ],
    tone: "navy",
  },
  {
    icon: Globe, title: "Derecho Migratorio",
    desc: "Trámites migratorios, residencias y nacionalidad para personas y familias que llegan o salen de El Salvador.",
    points: [
      "Residencias temporales y permanentes",
      "Nacionalidad salvadoreña",
      "Visas para inversionistas",
      "Reunificación familiar",
      "Permisos de trabajo",
      "Asesoría a empresas extranjeras",
    ],
    tone: "burgundy",
  },
  {
    icon: TrendingUp, title: "Derecho Tributario",
    desc: "Defensa frente al Ministerio de Hacienda, planeación fiscal y cumplimiento normativo para personas y empresas.",
    points: [
      "Planeación fiscal estratégica",
      "Defensa ante el MH y Aduanas",
      "Recursos de apelación tributaria",
      "Devoluciones de impuestos",
      "Reorganizaciones empresariales",
      "Asesoría en IVA y renta",
    ],
    tone: "navy",
  },
  {
    icon: ShieldCheck, title: "Asesoría Legal Integral",
    desc: "Consultoría preventiva continua para evitar litigios y optimizar decisiones estratégicas del día a día.",
    points: [
      "Outsourcing jurídico mensual",
      "Auditorías legales 360°",
      "Compliance corporativo",
      "Política de protección de datos",
      "Capacitaciones y talleres",
      "Soporte legal 24/7",
    ],
    tone: "burgundy",
  },
  {
    icon: FileText, title: "Litigio Estratégico",
    desc: "Acompañamiento en procesos judiciales, arbitrales y mediaciones con foco absoluto en eficiencia y resultados.",
    points: [
      "Litigio mercantil y civil complejo",
      "Arbitraje nacional e internacional",
      "Mediación y conciliación",
      "Procesos contencioso-administrativos",
      "Ejecución de sentencias",
      "Medidas cautelares",
    ],
    tone: "navy",
  },
];

const sectors = [
  "Banca y finanzas", "Construcción e inmobiliario", "Industria manufacturera",
  "Comercio y retail", "Telecomunicaciones", "Salud y farmacéutica",
  "Energía y recursos", "Tecnología y startups",
];

function ServiciosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Áreas de práctica"
        title="Servicios jurídicos integrales"
        subtitle="Soluciones legales especializadas para personas, familias y empresas en cada etapa de su vida o negocio en El Salvador."
      />

      {/* SERVICES GRID */}
      <section className="py-24 md:py-32 bg-gradient-cream relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-burgundy/8 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative bg-white p-10 hover:shadow-elegant transition-all duration-500 h-full overflow-hidden border border-border hover:border-gold/40"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${s.tone === "burgundy" ? "bg-burgundy" : "bg-gradient-gold"}`} />
                  <div className={`absolute inset-x-0 bottom-0 h-0 ${s.tone === "burgundy" ? "bg-burgundy/5" : "bg-gold/5"} group-hover:h-full transition-all duration-500 -z-0`} />

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      className={`flex h-16 w-16 items-center justify-center mb-6 transition-colors duration-500 ${s.tone === "burgundy" ? "bg-burgundy text-white" : "bg-navy-deep text-gold"} group-hover:bg-gold group-hover:text-navy-deep`}
                    >
                      <s.icon className="h-7 w-7" />
                    </motion.div>
                    <h2 className="font-display text-3xl text-navy mb-3">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-navy/85">
                          <Check className="h-4 w-4 text-gold-deep mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="ornament mb-4">Sectores que atendemos</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Industrias con las que <em className="text-gold-deep">trabajamos</em></h2>
            <span className="gold-divider mt-6" />
          </Reveal>

          <StaggerGroup stagger={0.06} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <StaggerItem key={s}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "var(--gold)" }}
                  className="border border-border bg-white p-6 text-center transition-all hover:shadow-soft cursor-default"
                >
                  <BookOpen className="h-6 w-6 text-gold mx-auto mb-3" />
                  <p className="text-sm font-medium text-navy">{s}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 text-white overflow-hidden grain">
        <motion.img
          initial={{ scale: 1.15 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.6 }}
          src={servicesBg} alt="" loading="lazy" width={1600} height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/95" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="ornament mb-6">¿No encuentras lo que buscas?</p>
            <h2 className="font-display text-4xl md:text-6xl">Cada caso es único. <em className="text-gradient-gold">Hablemos del tuyo.</em></h2>
            <span className="gold-divider mt-8 block mx-auto" />
            <p className="mt-7 text-white/75 max-w-2xl mx-auto text-lg">
              Nuestro equipo evalúa tu situación sin compromiso y te orientamos hacia la mejor estrategia posible.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/50378900000" target="_blank" rel="noopener"
                className="group inline-flex items-center gap-3 btn-gold px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em]"
              >
                Solicitar consulta <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-3 border border-white/30 backdrop-blur bg-white/5 text-white px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-white/10 hover:border-gold transition-all"
              >
                Conocer al equipo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
