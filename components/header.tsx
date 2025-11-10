"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { toast } from "sonner"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Throttle scroll events for better performance
    let lastRun = 0
    const throttleDelay = 50 // milliseconds - reduced for smoother detection
    
    const handleScroll = () => {
      const now = Date.now()
      if (now - lastRun >= throttleDelay) {
        lastRun = now
        const scrollY = window.scrollY
        // Add hysteresis to prevent flickering
        if (scrollY > 80 && !isScrolled) {
          setIsScrolled(true)
        } else if (scrollY < 60 && isScrolled) {
          setIsScrolled(false)
        }
      }
    }
    
    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"))

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolled])

  const navItems = [
    { label: "Featured", href: "#featured" },
    { label: "Insights", href: "#insights" },
    { label: "Case Studies", href: "#case-studies" },
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
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      >
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled ? "pt-4 px-4" : "pt-0 px-0"
        }`}>
          <nav 
            className={`transition-all duration-500 ease-in-out mx-auto ${
              isScrolled 
                ? "bg-background/95 backdrop-blur-xl border border-border shadow-lg rounded-full px-8 py-3 max-w-fit"
                : "bg-background/60 backdrop-blur-md max-w-7xl px-4 sm:px-6 lg:px-8"
            }`}
            aria-label="Main navigation"
          >
            <div className={`flex items-center transition-all duration-500 ease-in-out ${
              isScrolled 
                ? "gap-6 justify-center h-12" 
                : "gap-8 justify-between h-16"
            }`}>
            {/* Logo */}
            <div
              className={`flex items-center gap-2.5 cursor-pointer group transition-all duration-500 ${
                isScrolled ? "shrink-0" : "flex-none"
              }`}
              onClick={() => handleNavClick("#hero")}
            >
             
              <span className={`font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent transition-all duration-500 ${
                isScrolled ? "text-base" : "text-xl"
              }`}>
                PROTOTYPE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center transition-all duration-500 ${
              isScrolled ? "gap-2" : "gap-1"
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-500 rounded-full hover:bg-muted/50 ${
                    isScrolled ? "px-4 py-2" : "px-4 py-2"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className={`hidden lg:flex items-center transition-all duration-500 ${
              isScrolled ? "gap-2 shrink-0" : "gap-3 flex-none"
            }`}>
              <button
                onClick={handleThemeToggle}
                className={`text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-full transition-all duration-500 ${
                  isScrolled ? "p-2" : "p-2"
                }`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className={`transition-all duration-500 overflow-hidden ${
                isScrolled ? "w-0" : "w-px h-6 bg-border"
              }`}></div>
              <button 
                onClick={() => toast.info("Contact form coming soon!", { description: "This feature is under development." })}
                className={`font-semibold text-primary-foreground bg-primary  hover:bg-primary/90 transition-all duration-500 whitespace-nowrap ${
                isScrolled ? "px-4 py-2 text-sm rounded-full" : "px-4 py-2 text-sm rounded-full"
              }`}>
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            {!isScrolled && (
              <button
                className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && !isScrolled && (
            <div className="lg:hidden border-t border-border animate-fade-in-down">
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border mt-4">
                  <button
                    onClick={handleThemeToggle}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                  >
                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  <button 
                    onClick={() => toast.info("Contact form coming soon!", { description: "This feature is under development." })}
                    className="w-full mt-2 px-4 py-3 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          )}
          </nav>
        </div>
      </header>
    </>
  )
}
