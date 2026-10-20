import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/theme";
import { ButtonLink } from "@/components/common/Button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LoanCalculatorModal } from "@/components/tools/LoanCalculatorModal";
import { X } from "lucide-react";

/**
 * Primary navigation items for the glass pill bar
 */
const centerNavItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/amenities" },
  { label: "Contact Us", to: "/contact" },
];

/**
 * Floating Rounded Glass Navbar:
 * - Rounded pill container enclosing all elements in frosted glass
 * - Parjane Buildcon brand logo (original size) on the left
 * - Navigation links positioned to the left
 * - Circular hamburger menu button on the right
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for glass background intensity
      setScrolled(currentScrollY > 20);

      // Disappear when scrolled down, re-appear when scrolled up
      if (currentScrollY <= 60) {
        // Always visible near top
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 6) {
        // Scrolling DOWN -> hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 6) {
        // Scrolling UP -> reveal navbar
        setVisible(true);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Header Wrapper ── */}
      <header
        className={cn(
          "fixed top-3 sm:top-5 inset-x-0 z-40 mx-auto w-full pointer-events-none px-3 sm:px-6 transition-all duration-300 ease-out",
          visible || menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-28 opacity-0 pointer-events-none",
        )}
      >
        {/* ── Rounded Glass Container of all items ── */}
        <div
          className={cn(
            "pointer-events-auto mx-auto w-full max-w-[1360px] rounded-full transition-all duration-300",
            "px-4 sm:px-6 py-2 sm:py-2.5",
            "flex items-center justify-between gap-4 sm:gap-6",
            "navbar-pill-glass",
            scrolled && "navbar-pill-glass-scrolled shadow-2xl scale-[0.995]",
          )}
        >
          {/* ── Left: Parjane Buildcon Brand Logo + Navigation Links ── */}
          <div className="flex items-center gap-5 sm:gap-7 lg:gap-10 min-w-0">
            {/* Parjane Buildcon Logo with original size */}
            <BrandLogo
              variant="light"
              layout="horizontal"
              size="lg"
              onClick={() => setMenuOpen(false)}
            />

            {/* Navigation links positioned to the left */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-center gap-1 lg:gap-1.5 select-none"
            >
              {centerNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative px-3.5 sm:px-4 py-1.5 text-xs lg:text-[13px] font-medium text-slate-300 transition-all duration-200 hover:text-white hover:bg-white/5 rounded-full select-none"
                  activeProps={{
                    className:
                      "bg-white/12 text-white font-semibold shadow-sm border border-white/15 backdrop-blur-sm hover:bg-white/15",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Right: Menu Button ── */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="relative size-10 sm:size-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/12 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-inner cursor-pointer group hover:border-amber-400/60"
            >
              <span className="flex flex-col justify-center items-center gap-[3.5px]">
                <span className="block h-[1.5px] w-4.5 bg-white transition-all duration-200 group-hover:bg-amber-300" />
                <span className="block h-[1.5px] w-3.5 bg-white transition-all duration-200 group-hover:w-4.5 group-hover:bg-amber-300" />
                <span className="block h-[1.5px] w-4.5 bg-white transition-all duration-200 group-hover:bg-amber-300" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Sidebar Overlay Backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-md transition-opacity duration-300 ease-out",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      />

      {/* ── Sidebar Navigation Drawer (Floating Frosted Glass) ── */}
      <aside
        aria-label="Navigation drawer"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed top-2.5 right-2.5 bottom-2.5 sm:top-4 sm:right-4 sm:bottom-4 z-50 flex h-[calc(100dvh-1.25rem)] sm:h-[calc(100dvh-2rem)] w-[calc(100vw-1.25rem)] max-w-[410px] flex-col justify-between rounded-3xl drawer-menu-glass p-5 sm:p-7 text-white transition-all duration-300 ease-out overflow-y-auto",
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto scale-100"
            : "translate-x-8 opacity-0 pointer-events-none scale-95",
        )}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <BrandLogo
              variant="light"
              layout="horizontal"
              size="sm"
              onClick={() => setMenuOpen(false)}
            />

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation sidebar"
              className="size-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-slate-200 hover:border-amber-400 hover:bg-amber-400 hover:text-[#080c14] transition-all shadow-sm cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 mt-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/10 text-slate-200 shadow-sm"
                activeProps={{
                  className:
                    "border-amber-400/60 bg-gradient-to-r from-amber-500/20 to-amber-500/10 text-amber-300 font-bold shadow-[0_4px_20px_rgba(212,175,55,0.18),inset_0_1px_0_rgba(255,255,255,0.25)]",
                }}
                activeOptions={{ exact: link.to === "/" }}
              >
                <span className="font-sans text-base sm:text-lg font-medium group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                  {link.label}
                </span>
                <span className="text-xs text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            ))}

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setCalcOpen(true);
              }}
              className="group flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-200 border border-amber-400/30 bg-amber-500/10 backdrop-blur-sm hover:border-amber-400 hover:bg-amber-400/20 cursor-pointer text-amber-300 mt-1 shadow-sm"
            >
              <span className="font-sans text-base sm:text-lg font-semibold group-hover:translate-x-1 transition-all">
                Loan EMI Calculator
              </span>
              <span className="text-xs text-amber-400 font-bold group-hover:scale-110 transition-transform">↗</span>
            </button>
          </nav>
        </div>

        {/* Drawer Footer / Booking */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <ButtonLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            variant="solid"
            className="w-full justify-center rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] py-3 text-center text-xs uppercase tracking-wider font-extrabold text-[#080c14] shadow-lg transition-all hover:scale-[1.02]"
          >
            Schedule Site Tour
          </ButtonLink>
        </div>
      </aside>

      <LoanCalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} />
    </>
  );
}
