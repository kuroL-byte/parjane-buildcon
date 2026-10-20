import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { brand } from "@/theme";

interface BrandLogoProps {
  variant?: "light" | "dark" | "auto";
  layout?: "horizontal" | "stacked";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  onClick?: () => void;
  className?: string;
}

export function BrandLogo({
  variant = "light",
  layout = "horizontal",
  size = "lg",
  showTagline = true,
  onClick,
  className,
}: BrandLogoProps) {
  const isStacked = layout === "stacked";
  const isDarkVariant = variant === "dark";

  // Size configurations for badge, title, and tagline
  const logoBadgeSizes = {
    sm: isStacked ? "h-14 w-14 sm:h-16 sm:w-16 p-1.5" : "h-9 sm:h-10 w-auto px-2.5 py-1 rounded-xl min-w-[36px]",
    md: isStacked ? "h-16 w-16 sm:h-20 sm:w-20 p-2" : "h-11 sm:h-12 w-auto px-3 py-1.5 rounded-xl min-w-[44px]",
    lg: isStacked ? "h-20 w-20 sm:h-24 sm:w-24 p-2.5" : "h-13 sm:h-14 lg:h-15 w-auto px-3 sm:px-3.5 py-1.5 rounded-2xl min-w-[50px]",
    xl: isStacked ? "h-24 w-24 sm:h-28 sm:w-28 p-3" : "h-15 sm:h-16 lg:h-18 w-auto px-3.5 sm:px-4 py-2 rounded-2xl min-w-[56px]",
  };

  const titleSizes = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base lg:text-lg",
    lg: "text-base sm:text-lg lg:text-xl",
    xl: "text-xl sm:text-2xl lg:text-3xl",
  };

  const taglineSizes = {
    sm: "text-[7.5px] sm:text-[8.5px] tracking-[0.14em] mt-0.5",
    md: "text-[8.5px] sm:text-[9.5px] tracking-[0.16em] mt-0.5",
    lg: "text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.18em] mt-1",
    xl: "text-[9.5px] sm:text-[11px] lg:text-[12px] tracking-[0.22em] mt-1",
  };

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn(
        "group flex items-center transition-all duration-300 select-none max-w-full shrink-0",
        isStacked ? "flex-col text-center gap-3" : "flex-row gap-2.5 sm:gap-3.5 lg:gap-4",
        className,
      )}
      aria-label={`${brand.name} — home`}
    >
      {/* Logo Emblem Container */}
      <div
        className={cn(
          "bg-white shadow-xl ring-1 sm:ring-2 ring-amber-400/50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105",
          logoBadgeSizes[size],
        )}
      >
        <img
          src="/Parjane-logo.svg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/parjane-logo.png";
          }}
          alt="Parjane Buildcon Logo"
          className="h-full w-auto object-contain"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>

      {/* Typography Lockup */}
      <div
        className={cn(
          "flex flex-col leading-none min-w-0 justify-center overflow-hidden shrink",
          isStacked ? "items-center" : "items-start",
        )}
      >
        <div className="flex items-center flex-wrap gap-x-1.5 sm:gap-x-2">
          <span
            className={cn(
              "font-display font-extrabold uppercase tracking-wider transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] whitespace-nowrap",
              titleSizes[size],
              isDarkVariant ? "text-slate-900 group-hover:text-amber-600" : "text-white group-hover:text-amber-300",
            )}
          >
            PARJANE
          </span>
          <span
            className={cn(
              "font-display font-light uppercase tracking-wider text-gradient-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] whitespace-nowrap",
              titleSizes[size],
            )}
          >
            BUILDCON
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "uppercase font-bold truncate max-w-full drop-shadow",
              taglineSizes[size],
              isDarkVariant ? "text-slate-600" : "text-amber-300/90",
            )}
          >
            {brand.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
