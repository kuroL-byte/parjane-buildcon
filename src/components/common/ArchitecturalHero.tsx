import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { AnimatedSection } from "./AnimatedSection";
import { ButtonLink } from "./Button";

export function ArchitecturalHero() {
  return (
    <section className="relative flex min-h-[85dvh] w-full flex-col justify-between overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-8 bg-transparent">
      {/* ── Hero Foreground Content ─────────────────────────────── */}
      <Container className="relative z-10 my-auto">
        <div className="max-w-3xl rounded-3xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <AnimatedSection>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 shadow-sm">
              <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
                Parjane Buildcon LLP · 35+ Years of Trust
              </span>
            </div>

            {/* Main Headline — Verified Tagline */}
            <h1 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-tight text-white drop-shadow-md">
              Building Happy Homes <br />
              <span className="text-gradient-gold">
                Everyday.
              </span>
            </h1>

            {/* Lede text — Primary Hero Subtitle */}
            <p className="mt-4 max-w-xl text-xs sm:text-sm font-normal leading-relaxed text-slate-100 drop-shadow">
              A construction legacy across Navi Mumbai and Panvel spanning over 35 years. From turnkey government contracting to master-planned residential communities and upcoming redevelopments.
            </p>

            {/* Action CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink
                to="/projects"
                variant="solid"
                size="md"
                className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-md transition-all hover:scale-[1.02]"
              >
                Explore Portfolio
              </ButtonLink>

              <ButtonLink
                to="/contact"
                variant="outline"
                size="md"
                className="rounded-xl border border-white/20 bg-neutral-900/60 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:border-amber-400 hover:bg-amber-400/10"
              >
                Schedule Site Visit
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* ── Hero Bottom Key Metrics Strip ───────────────────────── */}
      <Container className="relative z-10 mt-6 sm:mt-8">
        <div className="rounded-2xl border border-white/15 bg-black/20 backdrop-blur-md px-6 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-white">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-6 lg:gap-8">
            <div className="border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">35+ Years</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-200 font-medium drop-shadow">Construction Legacy</p>
            </div>
            <div className="border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">12+ Delivered</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-200 font-medium drop-shadow">Landmarks Handed Over</p>
            </div>
            <div className="hidden md:block border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">1,500+ Units</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-200 font-medium drop-shadow">Upcoming Pipeline</p>
            </div>
            <div className="hidden lg:block border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">Phases I–V</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-200 font-medium drop-shadow">Usarl Khurd Township</p>
            </div>
          </div>

          <a
            href="#about-section"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-200 transition-colors hover:text-amber-400 drop-shadow"
          >
            <span>Discover More</span>
            <span className="text-amber-400">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
