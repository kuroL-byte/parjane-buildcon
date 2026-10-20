import { createFileRoute } from "@tanstack/react-router";
import { images, milestones, values, team, stats, companyStory } from "@/data/content";
import { brand } from "@/theme";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { StatCounter } from "@/components/StatCounter";
import { ButtonLink } from "@/components/Button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Parjane Buildcon LLP" },
      {
        name: "description",
        content:
          "A construction legacy across Navi Mumbai and Panvel spanning over 35 years. From turnkey government contracting to master-planned residential communities and upcoming redevelopments.",
      },
      { property: "og:title", content: "About Us — Parjane Buildcon LLP" },
      {
        property: "og:description",
        content:
          "35+ years of engineering leadership, 12+ delivered landmarks, and master-planned township execution across Navi Mumbai and Panvel.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Engineering Legacy"
        title="35+ Years of Construction Legacy Across Navi Mumbai & Panvel."
        lede="From turnkey government contracting to master-planned residential communities and upcoming redevelopments."
        image={images.project1}
      />

      {/* ── Founder Story & Heritage ──────────────────────────────── */}
      <SectionWrapper>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <AnimatedSection className="rounded-3xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
            <p className="eyebrow text-amber-400 font-bold mb-2.5">Founder's Philosophy &amp; Heritage</p>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
              From turnkey government contracting to master-planned communities.
            </h2>
            <blockquote className="mt-3.5 border-l-2 border-amber-400 pl-3.5 italic text-amber-200/90 text-xs sm:text-sm">
              "{companyStory.purpose}"
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-slate-100">
              {companyStory.heritage}
            </p>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-200">
              {companyStory.evolution}
            </p>
            <div className="mt-6 border-t border-white/12 pt-4">
              <p className="font-display text-lg sm:text-xl font-bold text-white">Eknath Apparao Parjane</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Managing Director &amp; Founder
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={140} variant="scale">
            <div className="overflow-hidden rounded-3xl border border-amber-500/30 bg-neutral-950/30 shadow-2xl">
              <LazyImage
                src={images.interior1}
                alt="Completed Parjane Buildcon residential interior"
                width={1280}
                height={960}
                wrapperClassName="aspect-4/3 sm:aspect-4/5"
                className="transition-transform duration-[1400ms] hover:scale-105"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── Core Values ───────────────────────────────────────────── */}
      <SectionWrapper>
        <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="Core Pillars"
            title="Four Pillars of Development Excellence"
            lede="Grounded in four foundational principles guiding every decision and construction site."
          />
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection
              key={v.title}
              delay={i * 80}
              className="group rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 hover:border-amber-400/50 hover:bg-neutral-900/60 hover:-translate-y-1"
            >
              <div className="h-0.5 w-8 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
              <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                {v.title}
              </h3>
              <p className="mt-2 text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-100">
                {v.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Milestones Timeline ───────────────────────────────────── */}
      <SectionWrapper className="border-y border-amber-500/20 bg-neutral-950/30 backdrop-blur-xl shadow-2xl">
        <div className="rounded-2xl border border-white/20 bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8">
          <SectionHeading
            eyebrow="Growth Trajectory"
            title="Over 35 Years of Engineering Milestones"
            lede="A chronological journey from turnkey government contracting to multi-phase township handovers and urban redevelopments."
          />
        </div>
        <ol className="border-l-2 border-amber-400/40 ml-3 sm:ml-5 space-y-6">
          {milestones.map((m, i) => (
            <AnimatedSection
              key={m.year}
              as="li"
              delay={i * 60}
              className="relative pl-6 sm:pl-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-3 size-3.5 -translate-x-[8px] rounded-full border-2 border-amber-400 bg-[#080c14] shadow-[0_0_10px_rgba(212,175,55,0.6)]"
              />
              <div className="rounded-2xl border border-white/20 bg-neutral-900/60 backdrop-blur-xl p-5 sm:p-6 shadow-xl">
                <span className="font-display text-lg sm:text-xl font-bold text-amber-300">{m.year}</span>
                <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-white drop-shadow-sm">{m.title}</h3>
                <p className="mt-1.5 text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-100">
                  {m.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ol>
      </SectionWrapper>

      {/* ── Company Stats Strip ────────────────────────────────────── */}
      <SectionWrapper tone="dark" tight className="border-b border-amber-500/20 bg-neutral-950/50 backdrop-blur-xl py-6 sm:py-8 shadow-2xl">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <StatCounter
                value={s.value}
                suffix={s.suffix}
                displayOverride={s.displayOverride}
                label={s.label}
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Executive Leadership ──────────────────────────────────── */}
      <SectionWrapper>
        <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="Executive Partners"
            title="Leadership &amp; Engineering Management"
            lede="Multigenerational leadership combining seasoned civil engineering wisdom with modern real estate strategies."
          />
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <AnimatedSection
              key={member.name}
              delay={i * 80}
              className="group rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 shadow-2xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900/60 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] font-display text-sm font-bold text-[#080c14] shadow-md">
                {member.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                {member.name}
              </h3>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                {member.role}
              </p>
              <p className="mt-2 text-xs font-normal leading-relaxed text-slate-100">{member.bio}</p>
            </AnimatedSection>
          ))}
        </div>

        <Container className="mt-12 px-0">
          <Hairline />
        </Container>

        <AnimatedSection className="mt-10 text-center rounded-3xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            Visit one of our completed landmarks in person.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-100 max-w-lg mx-auto">
            Book a guided site tour with our engineering team and experience structural excellence firsthand.
          </p>
          <ButtonLink
            to="/contact"
            size="sm"
            className="mt-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105"
          >
            Schedule a Private Viewing →
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
