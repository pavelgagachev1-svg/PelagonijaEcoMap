import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ImagePlus, X } from "lucide-react";
import { toast } from "sonner";
import { MAP_EDIT_URL } from "@/constants";

export const PhotoCard = () => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [drag, setDrag] = useState(false);

  const accept = (f) => {
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      toast.error("Ве молиме изберете слика (JPG, PNG...).");
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
    toast.success("Сликата е прикачена — демо преглед.");
  };

  const clear = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <motion.div
      data-testid="hero-card-photo"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl border border-[#22332B] bg-[#121816]/90 p-7 backdrop-blur-xl transition-colors duration-500 hover:border-[#10B981]/50 sm:p-9"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
          <ImagePlus className="h-6 w-6" />
        </span>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#10B981]">Чекор 02</p>
          <h3 className="font-display text-lg font-bold text-[#E6F4EE]">Прикачи слика или извештај</h3>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        data-testid="photo-file-input"
        onChange={(e) => accept(e.target.files?.[0])}
      />

      {!preview ? (
        <button
          data-testid="photo-dropzone"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); accept(e.dataTransfer.files?.[0]); }}
          className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 text-center transition-all duration-300 ${
            drag ? "border-[#10B981] bg-[#10B981]/10" : "border-[#22332B] hover:border-[#10B981]/60 hover:bg-[#10B981]/5"
          }`}
        >
          <ImagePlus className="h-8 w-8 text-[#10B981]" />
          <span className="text-sm font-semibold text-[#E6F4EE]">
            Повлечи и испушти слика тука или кликни за избор
          </span>
          <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#9EB5A9]">
            Демо преглед — сликата не се зачувува на сервер
          </span>
        </button>
      ) : (
        <div data-testid="photo-live-preview" className="overflow-hidden rounded-xl border border-[#22332B]">
          <div className="relative">
            <img src={preview} alt="Преглед на прикачената слика" className="h-44 w-full object-cover" />
            <button
              data-testid="photo-remove-btn"
              onClick={clear}
              aria-label="Отстрани слика"
              className="absolute right-3 top-3 rounded-full bg-[#0A0D0C]/80 p-2 text-[#E6F4EE] backdrop-blur transition-colors hover:bg-[#EF4444]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 bg-[#0A0D0C] px-4 py-3">
            <span className="truncate font-mono2 text-xs text-[#9EB5A9]">
              {file?.name} · {(file?.size / 1024).toFixed(0)} KB
            </span>
            <span className="shrink-0 rounded-full bg-[#F59E0B]/15 px-2.5 py-1 font-mono2 text-[10px] uppercase tracking-widest text-[#F59E0B]">
              Демо
            </span>
          </div>
        </div>
      )}

      <button
        data-testid="btn-continue-to-map"
        onClick={() => window.open(MAP_EDIT_URL, "_blank", "noopener,noreferrer")}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#10B981]/40 px-5 py-3.5 text-sm font-bold text-[#10B981] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10B981]/10"
      >
        Продолжи кон мапата за пријава <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
};
