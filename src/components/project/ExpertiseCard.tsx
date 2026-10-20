import { AnimatedSection } from "../common/AnimatedSection";

export interface ExpertiseItem {
  id: string;
  title: string;
  icon: string;
  body: string;
}

export function ExpertiseCard({ item, index }: { item: ExpertiseItem; index: number }) {
  return (
    <AnimatedSection
      delay={index * 80}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 shadow-2xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(212,175,55,0.15)]"
    >
      <div>
        <h3 className="font-display text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-amber-300 drop-shadow-sm">
          {item.title}
        </h3>

        <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-100">
          {item.body}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-400 transition-all group-hover:text-amber-300">
        <span>Explore Solutions</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </AnimatedSection>
  );
}
