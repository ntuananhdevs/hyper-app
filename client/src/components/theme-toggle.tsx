"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setTheme, getTheme, type Theme } from "@/lib/theme"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const theme = getTheme()
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    const currentIsDark = theme === "dark" || (theme === "system" && systemTheme)
    setIsDark(currentIsDark)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (getTheme() === "system") {
        setIsDark(mediaQuery.matches)
      }
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const handleToggle = () => {
    const current = getTheme()
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    const currentIsDark = current === "dark" || (current === "system" && systemTheme)
    
    const newTheme = currentIsDark ? "light" : "dark"
    setTheme(newTheme)
    setIsDark(!currentIsDark)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${isDark ? "-rotate-90 scale-0" : ""}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${isDark ? "rotate-0 scale-100" : ""}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

