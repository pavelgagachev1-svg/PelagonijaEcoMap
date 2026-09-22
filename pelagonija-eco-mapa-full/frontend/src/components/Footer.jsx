import { MapPin, Mail } from "lucide-react";
import { CONTACT_EMAIL, GMAIL_COMPOSE_URL } from "@/constants";

export const Footer = () => (
  <footer
    data-testid="footer-grants-info"
    className="border-t border-[#22332B] bg-[#080B0A] px-5 py-14 md:px-8"
  >
    <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div className="max-w-md">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#10B981] text-[#0A0D0C]">
            <MapPin className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-wide text-[#E6F4EE]">
            Пелагонија <span className="text-[#10B981]">Еко Мапа</span>
          </span>
        </div>
        <p className="text-xs leading-relaxed text-[#9EB5A9]">
          Овој проект е поддржан преку грант шемата Digital Spark, имплементирана
          од Фондацијата Метаморфозис, со поддршка на CIVICUS: World Alliance for
          Citizen Participation, во партнерство со TechSoup и Global Voices.
        </p>
        <p className="mt-3 text-[11px] italic leading-relaxed text-[#9EB5A9]/70">
          This project is supported through the Digital Spark grant scheme,
          implemented by the Metamorphosis Foundation, with the support of
          CIVICUS, in partnership with TechSoup and Global Voices.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#10B981]">
          Контакт
        </p>
        
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-[#E6F4EE] transition-colors hover:text-[#10B981]"
        >
          <Mail className="h-4 w-4 text-[#10B981]" /> {CONTACT_EMAIL}
        </a>
        <p className="mt-4 text-xs text-[#9EB5A9]">
          Создадено од <span className="font-bold text-[#E6F4EE]">ЕКТЕР Битола</span>
        </p>
        <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#9EB5A9]/60">
          © 2026 Пелагонија Еко Мапа
        </p>
      </div>
    </div>
  </footer>
);
