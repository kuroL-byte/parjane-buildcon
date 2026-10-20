import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/content";
import { Star } from "lucide-react";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1 text-amber-400 text-sm"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("size-3.5 fill-amber-400 text-amber-400", i < rating ? "opacity-100" : "opacity-25")}
        />
      ))}
      <span className="ml-2 text-[10px] font-bold text-slate-300 uppercase tracking-wider">Verified Owner</span>
    </div>
  );
}

function Monogram({ name }: { name: string }) {
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] font-display font-bold text-[#080c14] text-xs shadow-md">
      {initials}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-neutral-950/30 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-neutral-900/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(212,175,55,0.15)]",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <Stars rating={testimonial.rating} />
          <span className="text-3xl text-amber-400/40 font-serif leading-none">“</span>
        </div>
        <blockquote className="mt-4 font-display text-sm sm:text-[15px] font-medium leading-relaxed text-slate-100">
          “{testimonial.quote}”
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/12 pt-4">
        <Monogram name={testimonial.name} />
        <div className="min-w-0">
          <p className="truncate text-xs sm:text-sm font-bold text-white">{testimonial.name}</p>
          <p className="mt-0.5 text-[9px] uppercase font-bold tracking-wider text-amber-400">
            {testimonial.project}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
