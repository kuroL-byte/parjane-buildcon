import { brand } from "@/theme";
import { MapPin, Phone, Building2 } from "lucide-react";

export function OfficeCards({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-5 sm:gap-6 md:grid-cols-3 ${className}`}>
      {brand.offices.map((office) => (
        <div
          key={office.city}
          className="group rounded-2xl border border-white/20 bg-neutral-950/40 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-neutral-900/60 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-wider text-amber-300">
                <span className="size-1.5 rounded-full bg-amber-400" />
                {office.badge}
              </span>
              <Building2 className="size-4 text-amber-400/70" />
            </div>

            <h4 className="mt-3.5 font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              {office.city}
            </h4>

            <p className="mt-2.5 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-200">
              {office.address}
            </p>

            {office.landmark && (
              <p className="mt-2.5 text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin className="size-3 text-amber-400 shrink-0" />
                <span>{office.landmark}</span>
              </p>
            )}
          </div>

          <div className="mt-5 border-t border-white/10 pt-3.5 flex items-center justify-between">
            <a
              href={`tel:${office.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="size-3.5 text-amber-400" />
              <span>{office.phone}</span>
            </a>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              PIN {office.pincode}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
