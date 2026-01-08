/**
 * Theme utilities for managing dark mode and theme preferences
 */

export type Theme = "light" | "dark" | "system"

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
  if (typeof window === "undefined") return "system"
  
  const stored = localStorage.getItem("theme") as Theme | null
  return stored || "system"
}

/**
 * Set the theme and apply it to the document
 */
export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return
  
  localStorage.setItem("theme", theme)
  applyTheme(theme)
}

/**
 * Apply the theme to the document
 */
export function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return
  
  const root = window.document.documentElement
  root.classList.remove("light", "dark")

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light"
    root.classList.add(systemTheme)
  } else {
    root.classList.add(theme)
  }
}

/**
 * Initialize theme on mount
 */
export function initTheme() {
  if (typeof window === "undefined") return
  
  const theme = getTheme()
  applyTheme(theme)

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (getTheme() === "system") {
        applyTheme("system")
      }
    })
}

/**
 * Toggle between light and dark theme
 */
export function toggleTheme() {
  const current = getTheme()
  const newTheme = current === "dark" ? "light" : "dark"
  setTheme(newTheme)
}

