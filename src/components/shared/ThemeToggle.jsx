"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-16 right-2 cursor-pointer z-50 p-3 rounded-full bg-gray-100 dark:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700 shadow-md"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] top-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}