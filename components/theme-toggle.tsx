"use client";

import { useEffect, useSyncExternalStore } from "react";

function preferredTheme() {
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  const syncStorage = (event: StorageEvent) => {
    if (event.key === "theme" || event.key === null) {
      document.documentElement.dataset.theme = preferredTheme();
    }
  };
  window.addEventListener("storage", syncStorage);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", syncStorage);
  };
}

function getTheme() {
  return document.documentElement.dataset.theme;
}

function getServerTheme() {
  return undefined;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = preferredTheme();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // Keep the selected theme for this page even without persistence.
    }
  };

  return (
    <button type="button" className="themeToggle" onClick={toggleTheme} aria-label="Toggle dark theme" aria-pressed={theme === "dark"}>
      <span className="themeToggle__icon" aria-hidden="true">
        {theme === "dark" ? "◐" : "◑"}
      </span>
      <span>{theme ? (theme === "dark" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}
