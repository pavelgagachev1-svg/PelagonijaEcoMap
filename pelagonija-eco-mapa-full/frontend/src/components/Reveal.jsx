import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ overline, title, description, id }) => (
  <Reveal className="mb-12 md:mb-16">
    <p className="mb-4 font-mono2 text-xs uppercase tracking-[0.3em] text-[#10B981]">
      {overline}
    </p>
    <h2
      id={id}
      className="font-display text-2xl font-bold tracking-tight text-[#E6F4EE] sm:text-3xl lg:text-4xl"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9EB5A9] sm:text-lg">
        {description}
      </p>
    )}
  </Reveal>
);
