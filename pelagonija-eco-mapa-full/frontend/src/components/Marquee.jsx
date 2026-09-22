import { Construction, Droplets, Leaf, Trash2, Trees, Wind, Recycle, AlertTriangle } from "lucide-react";

const ISSUES = [
  { icon: Trash2, label: "Дива депонија" },
  { icon: Droplets, label: "Затната шахта" },
  { icon: Construction, label: "Скршени плочки" },
  { icon: AlertTriangle, label: "Зафатен тротоар" },
  { icon: Leaf, label: "Проблем со хигиена" },
  { icon: Wind, label: "Загаден воздух" },
  { icon: Recycle, label: "Отпад во речно корито" },
  { icon: Trees, label: "Оштетена урбана опрема" },
];

export const Marquee = () => {
  const row = [...ISSUES, ...ISSUES];
  return (
    <section
      id="issues-marquee"
      data-testid="issues-marquee"
      className="mt-28 overflow-hidden border-y border-[#22332B] bg-[#0D1210] py-7"
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-semibold uppercase tracking-wide text-[#E6F4EE]/80 sm:text-xl">
              <item.icon className="h-5 w-5 text-[#10B981]" />
              {item.label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/50" />
          </span>
        ))}
      </div>
    </section>
  );
};
