import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award, ScrollText, Handshake, Heart, Eye, ArrowRight,
  GraduationCap, Trophy, Globe2, Sparkles
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import teamImg from "@/assets/team.jpg";
import aboutImg from "@/assets/about-justice.jpg";
import portraitImg from "@/assets/lawyer-portrait.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Vargas & Asociados | Bufete en El Salvador" },
      { name: "description", content: "Más de 22 años defendiendo a personas y empresas en El Salvador. Conoce nuestra historia, valores y al equipo de abogados de Vargas & Asociados." },
      { property: "og:title", content: "Nosotros — Vargas & Asociados" },
      { property: "og:description", content: "Historia, valores y equipo de un bufete salvadoreño construido sobre confianza y resultados." },
    ],
  }),
  component: NosotrosPage,
});

const values = [
  { icon: Handshake, title: "Confianza", desc: "Construimos relaciones de largo plazo basadas en la transparencia y el cumplimiento." },
  { icon: ScrollText, title: "Ética", desc: "Cada decisión se rige por principios deontológicos rigurosos e inquebrantables." },
  { icon: Award, title: "Profesionalismo", desc: "Excelencia técnica respaldada por más de dos décadas de experiencia continua." },
  { icon: Heart, title: "Compromiso", desc: "Defendemos tus intereses como si fueran propios, sin atajos ni concesiones." },
  { icon: Eye, title: "Discreción", desc: "Tratamos cada asunto con la confidencialidad que merece tu vida y tu negocio." },
  { icon: Sparkles, title: "Innovación", desc: "Usamos tecnología y procesos modernos para entregar resultados más rápidos." },
];

const stats = [
  { v: 22, s: "+", l: "Años de trayectoria" },
  { v: 1800, s: "+", l: "Casos resueltos" },
  { v: 12, s: "", l: "Abogados especializados" },
  { v: 98, s: "%", l: "Clientes satisfechos" },
];

const milestones = [
  { year: "2002", title: "Fundación", desc: "El Lic. Roberto Vargas funda el despacho en San Salvador con tres abogados." },
  { year: "2008", title: "Expansión corporativa", desc: "Apertura del área mercantil y asesoría a primeras corporaciones del país." },
  { year: "2014", title: "Reconocimiento gremial", desc: "Distinción otorgada por la Cámara de Comercio de El Salvador." },
  { year: "2019", title: "Equipo multidisciplinario", desc: "Llegamos a 12 abogados con especializaciones en 9 áreas del derecho." },
  { year: "2024", title: "Liderazgo regional", desc: "Posicionamiento como referencia jurídica en Centroamérica." },
];

const team = [
  { name: "Roberto Vargas", role: "Socio fundador · Civil & Mercantil", img: portraitImg, edu: "Universidad de El Salvador · LL.M. Harvard" },
  { name: "Andrea Menéndez", role: "Socia · Penal & Familia", img: teamImg, edu: "UCA · Especialización Madrid" },
  { name: "Carlos Hernández", role: "Asociado senior · Laboral", img: portraitImg, edu: "Universidad Dr. José Matías Delgado" },
];

function NosotrosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Un bufete construido sobre principios"
        subtitle="Conoce la historia, los valores y al equipo que ha defendido a miles de clientes salvadoreños durante más de dos décadas."
      />

      {/* HISTORY */}
      <section className="py-24 md:py-32 bg-gradient-cream">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
          <Reveal direction="left">
            <p className="ornament mb-4">Nuestra historia</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Dos décadas defendiendo lo que <em className="text-gold-deep">más importa</em>.
            </h2>
            <span className="gold-divider mt-6 block" />
            <div className="mt-7 space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Vargas & Asociados nació en 2002 con una convicción simple: <span className="text-navy font-medium">el derecho debe estar al servicio de las personas</span>. Lo que comenzó como un pequeño despacho con tres abogados se ha convertido en una firma de referencia en El Salvador, con más de doce profesionales especializados.
              </p>
              <p>
                A lo largo de los años hemos representado a familias, emprendedores, empresas medianas y grandes corporaciones. Cada cliente es un caso, una historia, una responsabilidad que asumimos con la seriedad que merece.
              </p>
              <p>
                Hoy seguimos creciendo, pero conservamos el espíritu fundacional: trato cercano, estrategias claras y resultados que respalden nuestra reputación a nivel regional.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" className="relative">
            <motion.img
              whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}
              src={aboutImg}
              alt="Símbolo de la justicia, valores del bufete"
              loading="lazy" width={1024} height={1024}
              className="w-full aspect-[4/5] object-cover shadow-elegant"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 hidden md:block bg-gold text-navy-deep p-7 max-w-xs shadow-elegant"
            >
              <Trophy className="h-7 w-7 mb-3" />
              <p className="font-display text-2xl leading-tight">Bufete distinguido por la Cámara de Comercio de El Salvador</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-28 bg-navy-deep text-white relative overflow-hidden grain">
        <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-burgundy/15 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StaggerItem key={s.l} className="text-center">
                <div className="font-display text-5xl md:text-7xl text-gradient-gold">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <span className="gold-divider mt-4 mx-auto block" />
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/70">{s.l}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Nuestra trayectoria</p>
            <h2 className="font-display text-4xl md:text-6xl text-navy">22 años de <em className="text-gold-deep">historia</em></h2>
            <span className="gold-divider mt-7" />
          </Reveal>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent md:-translate-x-1/2" />

            {milestones.map((m, i) => (
              <Reveal key={m.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
                <div className={`relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-14 items-center ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                  <motion.div
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    viewport={{ once: true }} transition={{ type: "spring", delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 h-5 w-5 bg-gold rounded-full ring-4 ring-background shadow-gold"
                  />
                  <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}>
                    <div className="font-display text-5xl text-gold mb-2">{m.year}</div>
                    <h3 className="font-display text-2xl text-navy mb-2">{m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                  <div />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-gradient-cream">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Nuestros valores</p>
            <h2 className="font-display text-4xl md:text-6xl text-navy">Los principios que nos <em className="text-gold-deep">definen</em></h2>
            <span className="gold-divider mt-7" />
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-border p-10 hover:border-gold transition-all hover:shadow-elegant duration-500 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex h-14 w-14 items-center justify-center bg-gradient-gold mb-6 shadow-gold group-hover:shadow-elegant"
                  >
                    <v.icon className="h-6 w-6 text-navy-deep" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-navy mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="ornament mb-4">Nuestro equipo</p>
            <h2 className="font-display text-4xl md:text-6xl text-navy">Profesionales a tu <em className="text-gold-deep">servicio</em></h2>
            <span className="gold-divider mt-7" />
            <p className="mt-7 text-muted-foreground text-lg">
              Un equipo multidisciplinario unido por la misma vocación: defender con excelencia.
            </p>
          </Reveal>

          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {team.map((p) => (
              <StaggerItem key={p.name}>
                <motion.div whileHover={{ y: -8 }} className="group">
                  <div className="relative overflow-hidden aspect-[3/4] shadow-soft">
                    <motion.img
                      whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }}
                      src={p.img} alt={`${p.name}, ${p.role}`} loading="lazy" width={800} height={1067}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <p className="text-xs uppercase tracking-[0.22em] text-gold mt-1">{p.role}</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <GraduationCap className="h-3.5 w-3.5 text-gold" />
                        {p.edu}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2} className="mt-16">
            <div className="bg-navy-deep text-white p-12 md:p-16 grid md:grid-cols-3 gap-10 items-center shadow-elegant">
              <div className="md:col-span-2">
                <Globe2 className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-display text-3xl md:text-4xl">Equipo respaldado por <em className="text-gold">alianzas internacionales</em></h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Mantenemos convenios con bufetes en Centroamérica, México, Estados Unidos y España, lo que nos permite acompañar a nuestros clientes más allá de las fronteras de El Salvador.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["GT", "MX", "US", "ES", "PA", "CR"].map((c) => (
                  <div key={c} className="border border-gold/30 p-5 text-center font-display text-2xl text-gold hover:bg-gold hover:text-navy-deep transition-all cursor-default">{c}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-navy text-white relative overflow-hidden grain">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.12 }}
          viewport={{ once: true }} transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--gold), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="ornament mb-5">Da el primer paso</p>
            <h2 className="font-display text-4xl md:text-6xl">¿Listo para hablar con un <em className="text-gradient-gold">abogado</em>?</h2>
            <span className="gold-divider mt-7 block mx-auto" />
            <p className="mt-7 text-white/70 text-lg">Agenda una consulta confidencial con nuestro equipo en San Salvador.</p>
            <a
              href="https://wa.me/50378900000" target="_blank" rel="noopener"
              className="group mt-10 inline-flex items-center gap-3 btn-gold px-9 py-5 text-xs font-semibold uppercase tracking-[0.22em]"
            >
              Agendar consulta <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
