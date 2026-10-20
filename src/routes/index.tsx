import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  stats,
  projects,
  testimonials,
  expertiseServices,
  whyChooseUsPillars,
  values,
  companyStory,
} from "@/data/content";
import { brand, layout, type as typeScale } from "@/theme";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container, Hairline, SectionWrapper } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink, Button } from "@/components/Button";
import { StatCounter } from "@/components/StatCounter";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Carousel } from "@/components/Carousel";
import { ArchitecturalHero } from "@/components/common/ArchitecturalHero";
import { ExpertiseCard } from "@/components/project/ExpertiseCard";
import { toast } from "sonner";
import {
  Building2,
  Landmark,
  ShieldCheck,
  Clock,
  Users,
  Gem,
  BarChart3,
  Compass,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

const pillarIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Clock,
  Users,
  Gem,
  BarChart3,
  Compass,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parjane Buildcon LLP — Building Happy Homes Everyday" },
      {
        name: "description",
        content:
          "A construction legacy across Navi Mumbai and Panvel spanning over 35 years. From turnkey government contracting to master-planned residential communities and upcoming redevelopments.",
      },
      { property: "og:title", content: "Parjane Buildcon LLP — Building Happy Homes Everyday" },
      {
        property: "og:description",
        content:
          "Over 35 years of engineering trust, 12+ delivered landmarks, and 1,500+ pipeline homes across Navi Mumbai and Panvel.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [projectCategory, setProjectCategory] = useState<string>("All");
  const [vipName, setVipName] = useState("");
  const [vipPhone, setVipPhone] = useState("");
  const [vipProject, setVipProject] = useState(projects[0]?.name ?? "");

  const projectFilterTabs = ["All", "Upcoming", "Agroli & Belapur", "Panvel / Usarl Khurd", "Karanjade"];

  const filteredProjects = useMemo(() => {
    if (projectCategory === "All") return projects.slice(0, 4);
    return projects.filter((p) => p.filterCategories?.includes(projectCategory)).slice(0, 4);
  }, [projectCategory]);

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Private Tour Confirmed! Our team will contact you within 60 minutes.");
    setVipName("");
    setVipPhone("");
  };

  return (
    <>
      {/* ── 1. CINEMATIC HERO SECTION ─────────────────────────────── */}
      <ArchitecturalHero />

      {/* ── 2. ABOUT PARJANE BUILDCON ─────────────────────────────── */}
      <SectionWrapper id="about-section">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <AnimatedSection className="rounded-3xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
            <p className="eyebrow text-amber-400 mb-2.5 font-bold">Heritage &amp; Engineering Trust</p>
            <h2 className="font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-bold leading-tight text-white">
              Over 35 Years of Engineering Legacy.
            </h2>
            <blockquote className="mt-3.5 border-l-2 border-amber-400 pl-3.5 italic text-amber-200/90 text-xs sm:text-sm">
              "{companyStory.purpose}"
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-slate-100">
              {companyStory.heritage}
            </p>
            <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-slate-200">
              {companyStory.evolution}
            </p>

            {/* Quick Metrics Callout */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/12 py-4">
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-amber-300">35+ Years</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-200 font-semibold">Navi Mumbai &amp; Panvel</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-amber-300">1,500+ Homes</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-200 font-semibold">Upcoming Pipeline</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                to="/about"
                variant="solid"
                size="sm"
                className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Read Our Story
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="outline"
                size="sm"
                className="rounded-xl border border-white/20 text-white hover:border-amber-400 text-xs uppercase tracking-wider bg-neutral-900/60"
              >
                Connect With Us
              </ButtonLink>
            </div>
          </AnimatedSection>

          {/* Mission, Vision & Values Cards */}
          <AnimatedSection delay={140} className="space-y-4">
            <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 hover:border-amber-400/50">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-amber-400 font-bold text-[10px]">Our Mission</span>
                <Building2 className="size-5 text-amber-400" />
              </div>
              <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-white drop-shadow-sm">
                Building Happy Homes Everyday
              </h3>
              <p className="mt-1.5 text-xs sm:text-[13px] font-normal text-slate-100 leading-relaxed">
                {companyStory.mission}
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 hover:border-amber-400/50">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-amber-400 font-bold text-[10px]">Our Vision</span>
                <Landmark className="size-5 text-amber-400" />
              </div>
              <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-white drop-shadow-sm">
                Benchmark of Trust &amp; Durability
              </h3>
              <p className="mt-1.5 text-xs sm:text-[13px] font-normal text-slate-100 leading-relaxed">
                {companyStory.vision}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-neutral-950/30 backdrop-blur-xl p-6 text-white shadow-2xl">
              <span className="eyebrow text-amber-400 font-bold text-[10px]">Foundational Pillars</span>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                {values.map((v) => (
                  <div key={v.title} className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-amber-400 shrink-0" />
                    <span className="text-slate-100">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 3. OUR EXPERTISE ───────────────────────────────────────── */}
      <SectionWrapper>
        <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="Development Verticals"
            title="Core Expertise & Capabilities"
            lede="From master-planned townships to high-quality standalone residential apartments and upcoming urban redevelopments."
          />
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseServices.map((service, i) => (
            <ExpertiseCard key={service.id} item={service} index={i} />
          ))}
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 4. FEATURED PROJECTS ──────────────────────────────────── */}
      <SectionWrapper>
        <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Verified Portfolio"
              title="Delivered &amp; Upcoming Landmarks"
              lede="Master-planned communities and completed residences across Navi Mumbai and Panvel."
            />

            {/* Interactive Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {projectFilterTabs.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectCategory(cat)}
                  className={`rounded-xl border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    projectCategory === cat
                      ? "border-amber-400 bg-amber-400 text-[#080c14] shadow-sm"
                      : "border-white/15 bg-neutral-900/80 backdrop-blur-md text-slate-200 hover:border-amber-400/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 2) * 100} variant="scale">
              <ProjectCard project={p} index={i} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink
            to="/projects"
            variant="solid"
            size="sm"
            className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105"
          >
            Explore Complete Portfolio →
          </ButtonLink>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 5. WHY CHOOSE US ───────────────────────────────────────── */}
      <SectionWrapper>
        <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="The Parjane Promise"
            title="Four Pillars of Development Excellence"
            lede="Our guiding principles honed over 35+ years of building communities across Navi Mumbai and Panvel."
          />
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsPillars.map((pillar, i) => {
            const PillarIcon = pillarIconMap[pillar.icon] || Briefcase;
            return (
              <AnimatedSection
                key={pillar.title}
                delay={i * 80}
                className="group rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 shadow-2xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-neutral-900/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(212,175,55,0.15)]"
              >
                <span className="grid size-12 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-[#080c14] shadow-md">
                  <PillarIcon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-200">
                  {pillar.body}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── 6. COMPANY NUMBERS (ANIMATED STATS COUNTER) ──────────── */}
      <SectionWrapper tone="dark" tight className="relative overflow-hidden border-y border-amber-500/20 bg-black/35 backdrop-blur-md py-6 sm:py-8">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

        <div className="relative z-10 grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
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

      {/* ── 7. TESTIMONIALS ───────────────────────────────────────── */}
      <SectionWrapper>
        <div className="rounded-2xl border border-white/20 bg-neutral-950/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="Resident Voices"
            title="What Our Clients & Owners Say"
            lede="Feedback from our valued residential and commercial owners."
          />
        </div>
        <div>
          <Carousel
            perView={2}
            controlsTone="light"
            slides={testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="h-full" />
            ))}
          />
        </div>
      </SectionWrapper>

      {/* ── 10. VIP PRIVATE SITE VISIT CTA BANNER ──────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950/50 backdrop-blur-xl py-12 sm:py-16 text-white border-t border-amber-500/20 shadow-2xl">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <span className="eyebrow text-amber-400 font-bold">Private Concierge</span>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-tight text-white">
                Experience Quality In Person. <br />
                <span className="text-gradient-gold">Schedule a Private Site Tour.</span>
              </h2>
              <p className="mt-4 text-xs sm:text-sm font-normal text-slate-100 leading-relaxed">
                Inspect structural quality firsthand, view completed developments, and explore upcoming residential opportunities.
              </p>

              <div className="mt-6 flex flex-col gap-3 text-xs text-slate-100 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-amber-400 shrink-0" />
                  <span>Site visits available across Navi Mumbai and Panvel</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-amber-400 shrink-0" />
                  <span>Full architectural specifications &amp; MahaRERA dossiers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-amber-400 shrink-0" />
                  <span>Direct interaction with senior project partners and engineers</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick VIP Form */}
            <AnimatedSection delay={120}>
              <div className="rounded-2xl border border-white/15 bg-neutral-900/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                  Book a Priority Private Appointment
                </h3>
                <p className="mt-1 text-xs text-slate-200">
                  Fill in your details below for expedited concierge scheduling.
                </p>

                <form onSubmit={handleVipSubmit} className="mt-4 space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={vipName}
                      onChange={(e) => setVipName(e.target.value)}
                      placeholder="e.g. Rahul Deshmukh"
                      className="w-full rounded-xl border border-white/15 bg-neutral-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none focus:border-amber-400 focus:bg-black/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Phone Number (WhatsApp Active)
                    </label>
                    <input
                      required
                      type="tel"
                      value={vipPhone}
                      onChange={(e) => setVipPhone(e.target.value)}
                      placeholder="+91 98000 00000"
                      className="w-full rounded-xl border border-white/15 bg-neutral-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none focus:border-amber-400 focus:bg-black/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Preferred Landmark
                    </label>
                    <select
                      value={vipProject}
                      onChange={(e) => setVipProject(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-neutral-950 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400 focus:bg-black/60 cursor-pointer"
                    >
                      {projects.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    variant="solid"
                    size="sm"
                    className="w-full rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] py-3 text-xs font-bold uppercase tracking-widest text-[#080c14] shadow-md hover:scale-[1.01] transition-all"
                  >
                    Confirm Private Site Tour
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
