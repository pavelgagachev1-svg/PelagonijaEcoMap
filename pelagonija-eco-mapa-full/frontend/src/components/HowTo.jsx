import { Reveal, SectionHeading } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Најди и означи локација",
    desc: "Најдете го (со улица и број) или означете го местото на мапата. Или едноставно, употребете го копчето за локацијата на која се наоѓате во моментот.",
  },
  {
    n: "02",
    title: "Прикачи слика од проблемот",
    desc: "Прикачете слика од проблемот. Сликајте колку што е можно појасно во смисла на локацијата и сериозноста на проблемот.",
  },
  {
    n: "03",
    title: "Внеси краток опис",
    desc: "Внесете краток опис на проблемот — прецизно и јасно, за да им помогнете на заедницата и надлежните служби да реагираат побрзо.",
  },
];

export const HowTo = () => (
  <section
    id="how-to-report"
    className="border-y border-[#22332B] bg-[#0D1210] py-28"
  >
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <SectionHeading
        overline="Едноставно како 1 · 2 · 3"
        title="Како да пријавите проблем?"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 0.12}
            data-testid={`how-to-step-${i + 1}`}
            className="group relative overflow-hidden rounded-2xl border border-[#22332B] bg-[#121816]/90 p-8 transition-colors duration-500 hover:border-[#10B981]/50"
          >
            <span className="pointer-events-none absolute -right-4 -top-8 font-display text-[7rem] font-extrabold leading-none text-[#10B981]/10 transition-colors duration-500 group-hover:text-[#10B981]/20">
              {s.n}
            </span>
            <p className="mb-6 inline-block rounded-full bg-[#10B981]/15 px-4 py-1.5 font-mono2 text-xs font-semibold tracking-[0.2em] text-[#10B981]">
              ЧЕКОР {s.n}
            </p>
            <h3 className="relative mb-4 font-display text-lg font-bold text-[#E6F4EE]">
              {s.title}
            </h3>
            <p className="relative text-sm leading-relaxed text-[#9EB5A9]">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
