import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      onClick={(e) => toggle({ x: e.clientX, y: e.clientY })}
      className="relative flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-[transform,background-color] duration-150 hover:bg-foreground/10 active:scale-[0.96]"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
