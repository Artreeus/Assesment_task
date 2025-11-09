"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)

    // Apply theme to document
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <div suppressHydrationWarning>
      {typeof window !== "undefined" && (window as any).__toggleTheme && !(window as any).__toggleTheme(toggleTheme)}
      {children}
    </div>
  )
}

export const getThemeToggler = () => {
  if (typeof window !== "undefined") {
    return (window as any).__toggleTheme
  }
  return () => {}
}
