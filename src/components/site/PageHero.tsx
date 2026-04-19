import { motion } from "framer-motion";

type Props = { eyebrow: string; title: string; subtitle?: string };

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-gradient-navy-radial text-white pt-44 pb-28 overflow-hidden grain">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 45%), radial-gradient(circle at 80% 80%, var(--gold) 0%, transparent 45%)",
      }} />
      <motion.div
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic text-[28rem] leading-none text-gold pointer-events-none select-none"
      >
        Lex
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="ornament mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl text-white leading-[1.02]"
        >
          {title}
        </motion.h1>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="gold-divider mt-10 block mx-auto origin-left"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 max-w-2xl mx-auto text-white/70 text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
