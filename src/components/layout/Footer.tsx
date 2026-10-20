import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { brand, layout, navLinks } from "@/theme";
import { buyerGuideLinks } from "@/data/content";
import { Button } from "@/components/common/Button";
import { Hairline } from "@/components/common/Container";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LoanCalculatorModal } from "@/components/tools/LoanCalculatorModal";
import { OfficeCards } from "@/components/common/OfficeCards";
import { toast } from "sonner";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  const handleGuideClick = (linkName: string) => {
    if (linkName === "Loan calculator" || linkName === "Home loans") {
      setCalcOpen(true);
    }
  };

  return (
    <footer className="relative bg-black/45 backdrop-blur-2xl border-t border-amber-500/20 text-white">
      <div className={layout.container}>
        {/* ── 3-Column Office Locations ── */}
        <div className="pt-10 sm:pt-14 pb-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <p className="eyebrow text-amber-400 font-bold">Presence &amp; Locations</p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                Our Operating Offices Across Navi Mumbai &amp; Panvel
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              Monday – Saturday · 09:30 – 19:00
            </p>
          </div>
          <OfficeCards />
        </div>

        <div className="grid gap-10 py-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand Column */}
          <div className="max-w-sm">
            <BrandLogo variant="light" layout="horizontal" size="md" />

            <p className="mt-5 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
              A construction legacy across Navi Mumbai and Panvel spanning over 35 years. From turnkey government contracting to master-planned residential communities and upcoming redevelopments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold text-amber-400">
              <span className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-1">
                ISO 9001:2015
              </span>
              <span className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-1">
                MahaRERA Registered
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="eyebrow text-amber-400 mb-5 font-bold">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-xs sm:text-sm font-normal text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer's Tools */}
          <div>
            <p className="eyebrow text-amber-400 mb-5 font-bold">Buyer Tools</p>
            <ul className="space-y-2.5">
              {buyerGuideLinks.map((l) => (
                <li key={l}>
                  {l === "Loan calculator" || l === "Home loans" ? (
                    <button
                      type="button"
                      onClick={() => handleGuideClick(l)}
                      className="text-left text-xs sm:text-sm font-normal text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {l} <span className="text-[10px] font-bold text-amber-400">↗ EMI Tool</span>
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="text-xs sm:text-sm font-normal text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {l}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters & Newsletter */}
          <div>
            <p className="eyebrow text-amber-400 mb-5 font-bold">Headquarters</p>
            <address className="space-y-2 text-xs sm:text-sm font-normal not-italic text-slate-200">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2 font-bold text-white flex items-center gap-2">
                <Phone className="size-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-amber-400 hover:underline">
                  {brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 font-medium">
                <Mail className="size-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-slate-200 hover:text-amber-400">
                  {brand.email}
                </a>
              </p>
            </address>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setEmail("");
                toast.success("Subscribed to Parjane Buildcon updates.");
              }}
            >
              <label htmlFor="footer-email" className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                Stay Updated With Developments
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Corporate Email"
                  className="h-10 min-w-0 flex-1 rounded-xl border border-white/15 bg-[#0e1526] px-3.5 text-xs text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-10 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase shrink-0 shadow-md"
                >
                  Join
                </Button>
              </div>
              {done && (
                <p className="mt-2 text-xs font-medium text-amber-400">
                  Thank you — you have been added to our VIP release list.
                </p>
              )}
            </form>
          </div>
        </div>

        <Hairline />

        <div className="flex flex-col gap-3 py-6 text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. {brand.tagline}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-slate-400">
            <span>MahaRERA Compliance</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      <LoanCalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} />
    </footer>
  );
}
