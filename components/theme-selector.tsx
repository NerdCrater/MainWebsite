"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Paintbrush } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { themeOptions } from "@/lib/theme-config"

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)

  const handleThemeChange = (theme) => {
    // Apply theme colors to CSS variables
    document.documentElement.style.setProperty("--color-primary", theme.colors.primary)
    document.documentElement.style.setProperty("--color-secondary", theme.colors.secondary)
    document.documentElement.style.setProperty("--color-accent", theme.colors.accent)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-10 w-10 bg-gray-900 border-gray-700 hover:bg-gray-800 hover:border-primary shadow-lg"
      >
        <Paintbrush className="h-5 w-5 text-primary" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-12 right-0 p-4 bg-gray-900 border border-gray-800 rounded-lg shadow-xl w-64"
          >
            <h4 className="text-sm font-medium text-gray-300 mb-3">Select Theme</h4>
            <div className="space-y-2">
              {themeOptions.map((theme) => (
                <motion.button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-2 rounded flex items-center gap-3 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                  </div>
                  <span className="text-sm text-gray-300">{theme.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
