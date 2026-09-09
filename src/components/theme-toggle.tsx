import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-300 hover:bg-card hover:border-accent/40 active:scale-95",
        showLabel ? "gap-2 px-3 py-1.5 text-xs font-medium" : "size-9",
        className,
      )}
    >
      <div className="relative size-4">
        {/* Sun icon for light mode */}
        <Sun
          className={cn(
            "absolute inset-0 size-4 transition-transform duration-500",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500",
          )}
          aria-hidden="true"
        />
        {/* Moon icon for dark mode */}
        <Moon
          className={cn(
            "absolute inset-0 size-4 transition-transform duration-500",
            isDark
              ? "rotate-0 scale-100 opacity-100 text-foreground"
              : "-rotate-90 scale-0 opacity-0",
          )}
          aria-hidden="true"
        />
      </div>
      {showLabel && (
        <span className="font-mono uppercase tracking-[0.14em]">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
