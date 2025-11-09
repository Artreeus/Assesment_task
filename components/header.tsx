"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Throttle scroll events for better performance
    let lastRun = 0
    const throttleDelay = 100 // milliseconds
    
    const handleScroll = () => {
      const now = Date.now()
      if (now - lastRun >= throttleDelay) {
        lastRun = now
        setIsScrolled(window.scrollY > 50)
      }
    }
    
    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"))

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Featured", href: "#featured" },
    { label: "Insights", href: "#insights" },
    { label: "Cases", href: "#case-studies" },
    { label: "Events", href: "#spotlight" },
    { label: "News", href: "#news" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleThemeToggle = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")

    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-primary/20 shadow-2xl"
            : "bg-gradient-to-b from-background/70 to-background/20 backdrop-blur-lg"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-700 flex items-center gap-2"
            onClick={() => handleNavClick("#hero")}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full"></div>
            <span>PROTOTYPE</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="relative px-5 py-2.5 text-foreground/70 hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors duration-700 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />}
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-primary/40 transition-all duration-700">
              Get Access
            </button>
          </div>

          <button
            className="md:hidden text-primary text-2xl transition hover:bg-primary/10 p-2 rounded-lg duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-2 animate-fade-in-down pb-6 border-t border-primary/10 pt-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-5 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-700 font-semibold uppercase text-sm rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleThemeToggle}
              className="w-full flex items-center gap-3 px-5 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-700 font-semibold uppercase text-sm rounded-lg mt-4"
            >
              {isDark ? (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              )}
            </button>
            <button className="w-full px-5 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold uppercase text-sm mt-4 hover:shadow-lg hover:shadow-primary/50 transition-all duration-700">
              Get Access
            </button>
          </div>
        )}
        </nav>
      </header>
    </>
  )
}
