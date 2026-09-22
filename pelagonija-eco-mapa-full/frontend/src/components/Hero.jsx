import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1623924099162-4838ca04314d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxNYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBmb3Jlc3QlMjByaXZlciUyMGVjb3xlbnwwfHx8fDE3ODg2NTI4MzF8MA&ixlib=rb-4.1.0&q=85";

const LINES = [
  <>ВИДИ, <span className="text-[#10B981]">ПРИЈАВИ</span></>,
  <>И <span className="text-outline">ДИСКУТИРАЈ</span></>,
  <>ЛОКАЛНО И <span className="text-[#10B981]">ГЛАСНО!</span></>,
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[95vh] items-center overflow-hidden pb-44 pt-16"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Пелагонија — планини и зелена долина"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/75 to-[#0A0D0C]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.18),transparent_55%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#10B981]/30 bg-[#0A0D0C]/60 px-4 py-2 font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#10B981] backdrop-blur-md sm:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10B981]" />
          Граѓанска еколошка иницијатива — Пелагонија
        </motion.p>

        <h1
          data-testid="hero-title"
          className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#E6F4EE] sm:text-5xl lg:text-6xl"
        >
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.25 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-[#9EB5A9] sm:text-lg"
        >
          Пријавете дива депонија, затната шахта, скршени плочки,
          зафатен или непостоечки тротоар на улица во градот или селото,
          локален проблем со хигиена... Без регистрација, без име и е-пошта.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#9EB5A9] md:flex"
      >
        Скролај <ChevronDown className="h-4 w-4 text-[#10B981]" />
      </motion.div>
    </section>
  );
};
