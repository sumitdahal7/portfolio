"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    let initialTheme: Theme = "dark";

    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      initialTheme = "light";
    }

    requestAnimationFrame(() => {
      setTheme(initialTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(initialTheme);
      setMounted(true);
    });
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  // Always provide the context, even before mounted
  // This prevents the "useTheme must be used within a ThemeProvider" error
  const value = {
    theme: mounted ? theme : "dark",
    toggleTheme: mounted ? toggleTheme : () => {},
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
