"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = stored === "dark" || (!stored && systemDark) ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle color theme">
      <span className="themeToggle__icon" aria-hidden="true">
        {mounted && theme === "dark" ? "◐" : "◑"}
      </span>
      <span>{mounted ? (theme === "dark" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}
