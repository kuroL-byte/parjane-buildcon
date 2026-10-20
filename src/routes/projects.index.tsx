import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { images, projects, type ProjectStatus, type ProjectType } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Parjane Buildcon LLP" },
      {
        name: "description",
        content:
          "Explore upcoming developments and delivered residential landmarks by Parjane Buildcon LLP across Agroli, Belapur, Usarl Khurd, and Karanjade.",
      },
      { property: "og:title", content: "Portfolio — Parjane Buildcon LLP" },
      {
        property: "og:description",
        content: "Over 35 years of engineering excellence across Navi Mumbai and Panvel.",
      },
    ],
  }),
  component: ProjectsIndex,
});

const filterTags = [
  "All",
  "Upcoming",
  "Agroli & Belapur",
  "Panvel / Usarl Khurd",
  "Karanjade",
] as const;

function ProjectsIndex() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.filterCategories?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <PageHero
        eyebrow="Verified Portfolio"
        title="16 Landmarks Across Navi Mumbai &amp; Panvel."
        lede="Explore master-planned township phases, delivered residential apartment communities, and upcoming high-potential redevelopments."
        image={images.project2}
      />

      <SectionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-4 sm:p-6 shadow-xl">
          <span className="eyebrow text-amber-400 font-bold shrink-0">Filter Portfolio</span>
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={cn(
                  "rounded-xl border px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer",
                  activeFilter === tag
                    ? "border-amber-400 bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-extrabold shadow-md"
                    : "border-white/15 bg-white/5 text-slate-300 hover:border-amber-400/50 hover:text-white",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 sm:mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
          Showing {filtered.length} {filtered.length === 1 ? "landmark" : "landmarks"}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-10 text-center rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-8 shadow-xl">
            <p className="font-display text-lg sm:text-xl font-semibold text-slate-200">
              No landmarks match that filter criteria.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-3 text-xs uppercase font-bold text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.slug} delay={(i % 2) * 80} variant="scale">
                <ProjectCard project={p} index={i} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
