import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Сите пријави", href: "#map-section", testid: "nav-link-reports" },
  { label: "Како да пријавите", href: "#how-to-report", testid: "nav-link-how" },
  { label: "Помош & FAQ", href: "#faq-section", testid: "nav-link-faq" },
];

export const scrollToId = (href) => {
  if (window.__lenis) window.__lenis.scrollTo(href, { offset: -72 });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const go = (e, href) => {
    e.preventDefault();
    scrollToId(href);
    setOpen(false);
  };

  return (
    <header
      data-testid="nav-header"
      className="sticky top-0 z-50 border-b border-[#22332B] bg-[#0A0D0C]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          data-testid="nav-logo"
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#10B981] text-[#0A0D0C] transition-transform duration-300 group-hover:rotate-12">
            <MapPin className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-wide text-[#E6F4EE] sm:text-base">
            Пелагонија <span className="text-[#10B981]">Еко Мапа</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              data-testid={l.testid}
              onClick={(e) => go(e, l.href)}
              className="text-sm font-semibold text-[#9EB5A9] transition-colors duration-300 hover:text-[#10B981]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#report-cards"
            data-testid="nav-cta-report"
            onClick={(e) => go(e, "#report-cards")}
            className="rounded-full bg-[#10B981] px-5 py-2.5 text-sm font-bold text-[#0A0D0C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#34D399] hover:shadow-[0_8px_30px_rgba(16,185,129,0.35)]"
          >
            Пријави Проблем
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="text-[#E6F4EE] lg:hidden"
          aria-label="Мени"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#22332B] px-5 py-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              data-testid={`${l.testid}-mobile`}
              onClick={(e) => go(e, l.href)}
              className="block py-3 text-sm font-semibold text-[#9EB5A9] hover:text-[#10B981]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#report-cards"
            data-testid="nav-cta-report-mobile"
            onClick={(e) => go(e, "#report-cards")}
            className="mt-2 block rounded-full bg-[#10B981] px-5 py-3 text-center text-sm font-bold text-[#0A0D0C]"
          >
            Пријави Проблем
          </a>
        </nav>
      )}
    </header>
  );
};
