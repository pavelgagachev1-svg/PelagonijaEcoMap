import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, LocateFixed, MapPin } from "lucide-react";
import { toast } from "sonner";
import { MAP_EDIT_URL } from "@/constants";

export const LocationCard = () => {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState(null);
  const [locating, setLocating] = useState(false);
  const [geocoding, setGeocoding] = useState(false);

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Вашиот прелистувач не поддржува геолокација.");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude.toFixed(5), lng: longitude.toFixed(5) });
        setLocating(false);
        toast.success("Локацијата е пронајдена!");
      },
      () => {
        setLocating(false);
        toast.error("Не можевме да ја одредиме локацијата. Дозволете пристап или внесете адреса.");
      },
      { timeout: 10000 }
    );
  };

  const geocodeAddress = async (query) => {
  const attempts = [
    `${query}, Северна Македонија`,
    `${query}, Macedonia`,
    query, // last resort: exactly what the user typed
  ];

  for (const attempt of attempts) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=mk&q=${encodeURIComponent(
      attempt
    )}`;
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) continue;
      const results = await res.json();
      if (results.length) {
        return {
          lat: parseFloat(results[0].lat).toFixed(5),
          lng: parseFloat(results[0].lon).toFixed(5),
        };
      }
    } catch {
      // try next fallback
    }
  }
  return null;
};

  const openMap = async () => {
    // Priority 1: GPS location already found
    if (coords) {
      window.open(`${MAP_EDIT_URL}&ll=${coords.lat},${coords.lng}&z=17`, "_blank", "noopener,noreferrer");
      return;
    }

    // Priority 2: typed street address — geocode it
    if (address.trim()) {
      setGeocoding(true);
      try {
        const found = await geocodeAddress(address.trim());
        setGeocoding(false);
        if (found) {
          window.open(`${MAP_EDIT_URL}&ll=${found.lat},${found.lng}&z=17`, "_blank", "noopener,noreferrer");
          return;
        }
        toast.error("Не можевме да ја пронајдеме оваа адреса. Проверете го текстот или користете GPS.");
      } catch {
        setGeocoding(false);
        toast.error("Грешка при пребарување на адресата. Обидете се повторно.");
      }
      return;
    }

    // Priority 3: nothing entered — just open the base map
    window.open(MAP_EDIT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      data-testid="hero-card-location"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl border border-[#22332B] bg-[#121816]/90 p-7 backdrop-blur-xl transition-colors duration-500 hover:border-[#10B981]/50 sm:p-9"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <MapPin className="h-6 w-6" />
        </span>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#10B981]">Чекор 01</p>
          <h3 className="font-display text-lg font-bold text-[#E6F4EE]">Означи локација на мапа</h3>
        </div>
      </div>

      <label htmlFor="street-input" className="mb-2 block text-sm text-[#9EB5A9]">
        Внеси улица и број и означи го местото на мапата
      </label>
      <input
        id="street-input"
        data-testid="input-street-address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="пр. Рузвелтова 12, Битола"
        className="mb-4 w-full rounded-xl border border-[#22332B] bg-[#0A0D0C] px-4 py-3.5 text-sm text-[#E6F4EE] outline-none transition-colors duration-300 placeholder:text-[#9EB5A9]/50 focus:border-[#10B981]"
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          data-testid="btn-open-google-maps"
          onClick={openMap}
          disabled={geocoding}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#10B981] px-5 py-3.5 text-sm font-bold text-[#0A0D0C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#34D399] hover:shadow-[0_10px_35px_rgba(16,185,129,0.35)] disabled:opacity-60"
        >
          {geocoding ? "Се пребарува..." : "Отвори ја Еко Мапата"}
          {!geocoding && <ExternalLink className="h-4 w-4" />}
        </button>
        <button
          data-testid="btn-use-my-location"
          onClick={useMyLocation}
          disabled={locating}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#10B981]/40 px-5 py-3.5 text-sm font-bold text-[#10B981] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10B981]/10 disabled:opacity-60"
        >
          <LocateFixed className={`h-4 w-4 ${locating ? "animate-spin" : ""}`} />
          {locating ? "Се лоцира..." : "Моја моментална локација"}
        </button>
      </div>

      {coords && (
        <p data-testid="location-coords" className="mt-4 font-mono2 text-xs text-[#10B981]">
          GPS: {coords.lat}, {coords.lng} — локацијата ќе се отвори на мапата.
        </p>
      )}
    </motion.div>
  );
};
