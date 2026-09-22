import { Sprout } from "lucide-react";

export const TopBanner = () => (
  <div
    data-testid="top-funding-banner"
    className="border-b border-[#22332B] bg-[#0A0D0C] px-5 py-3 md:px-8"
  >
    <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <p className="max-w-3xl text-xs leading-relaxed text-[#9EB5A9]">
        Оваа страница е наменета за пријавување на локални проблеми поврзани со
        загадување и деградација на средината, воздухот и водите во
        Пелагонискиот регион, а и пошироко во целата земја.
      </p>
      <p className="flex shrink-0 items-center gap-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#10B981]">
        <Sprout className="h-3.5 w-3.5" />
        Digital Spark · Метаморфозис · CIVICUS · TechSoup · Global Voices
      </p>
    </div>
  </div>
);
