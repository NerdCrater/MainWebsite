"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { defaultThemeColors, generateThemeCSS } from "@/lib/theme-config"

type ThemeColors = {
  primary: string
  secondary: string
  accent: string
}

type ThemeContextType = {
  themeColors: ThemeColors
  setThemeColors: React.Dispatch<React.SetStateAction<ThemeColors>>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeColors, setThemeColors] = useState<ThemeColors>(defaultThemeColors)
  const [styleElement, setStyleElement] = useState<HTMLStyleElement | null>(null)

  useEffect(() => {
    // Create or update the style element with the theme CSS
    if (!styleElement) {
      const element = document.createElement("style")
      element.setAttribute("id", "theme-colors")
      document.head.appendChild(element)
      setStyleElement(element)
    }

    if (styleElement) {
      styleElement.innerHTML = generateThemeCSS(themeColors)
    }

    return () => {
      // Cleanup
      if (styleElement) {
        document.head.removeChild(styleElement)
      }
    }
  }, [themeColors, styleElement])

  return <ThemeContext.Provider value={{ themeColors, setThemeColors }}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }
  return context
}
