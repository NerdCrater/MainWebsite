"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-gray-300 hover:text-white focus:text-white hover:bg-gray-800 focus:bg-gray-800"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </motion.div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-gray-300 hover:text-white focus:text-white hover:bg-gray-800 focus:bg-gray-800"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </motion.div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-gray-300 hover:text-white focus:text-white hover:bg-gray-800 focus:bg-gray-800"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <span className="mr-2">💻</span>
            <span>System</span>
          </motion.div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
