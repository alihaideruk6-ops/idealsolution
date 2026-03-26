import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        fixed bottom-26 right-6 z-50
        md:bottom-28 md:right-8
        lg:bottom-30 lg:right-10
        p-3 rounded-full
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        shadow-lg
        transition-all duration-300
        hover:scale-110 active:scale-95
        
      "
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6 text-[var(--text-main)]" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
}