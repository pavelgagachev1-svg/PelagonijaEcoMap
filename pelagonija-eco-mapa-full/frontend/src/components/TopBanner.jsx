import { Sprout } from "lucide-react";

export const TopBanner = () => (
  <div
    data-testid="top-funding-banner"
    className="border-b border-[#22332B] bg-[#0A0D0C] px-5 py-3 md:px-8"
  >
    <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        {/* Digital Democracy Initiative logo, top left next to the intro text */}
        <div
          data-testid="top-banner-ddi-logo"
          className="flex w-fit shrink-0 items-center rounded-md bg-white px-2.5 py-1.5"
        >
          <img
            src="/logos/ddi-logo.png"
            alt="Digital Democracy Initiative"
            className="h-7 w-auto"
          />
        </div>
        <p className="max-w-3xl text-xs leading-relaxed text-[#9EB5A9]">
          Оваа страница е наменета за пријавување на локални проблеми поврзани со
          загадување и деградација на средината, воздухот и водите во
          Пелагонискиот регион, а и пошироко во целата земја.
        </p>
      </div>
      <p className="flex shrink-0 items-center gap-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#10B981]">
        <Sprout className="h-3.5 w-3.5" />
        Digital Spark · Metamorphosis · CIVICUS · TechSoup · Global Voices
      </p>
    </div>
  </div>
);
