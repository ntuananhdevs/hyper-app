"use client"

import * as React from "react"
import { initTheme } from "@/lib/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    initTheme()
  }, [])

  return <>{children}</>
}

