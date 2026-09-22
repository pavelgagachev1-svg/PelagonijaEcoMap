import { MapPin } from "lucide-react";
import { MAP_EMBED_URL } from "@/constants";
import { Reveal, SectionHeading } from "@/components/Reveal";

const REGIONS = ["Битола", "Прилеп", "Ресен", "Могила", "Новаци", "Крушево", "Демир Хисар"];

export const MapSection = () => (
  <section id="map-section" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
    <SectionHeading
      overline="Јавна мапа"
      title="Сите пријави на едно место"
      description="Секоја поднесена пријава е јавно видлива на Пелагонија Еко Мапата — за транспарентност, без дупли пријави и побрза реакција од заедницата и надлежните."
    />
    <Reveal delay={0.1}>
      <div
        data-testid="map-container"
        className="overflow-hidden rounded-2xl border border-[#22332B] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
      >
        <iframe
          data-testid="map-iframe"
          title="Пелагонија Еко Мапа — Google My Maps"
          src={MAP_EMBED_URL}
          loading="lazy"
          className="h-[420px] w-full md:h-[560px]"
          allowFullScreen
        />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#9EB5A9]">
          Пелагониски региони:
        </span>
        {REGIONS.map((r) => (
          <span
            key={r}
            className="flex items-center gap-1.5 rounded-full border border-[#22332B] bg-[#121816] px-3.5 py-1.5 text-xs font-semibold text-[#9EB5A9]"
          >
            <MapPin className="h-3 w-3 text-[#10B981]" /> {r}
          </span>
        ))}
      </div>
    </Reveal>
  </section>
);
