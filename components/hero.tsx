"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Star, Zap, Shield, TrendingUp } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [rotatingWord, setRotatingWord] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ["Future", "Vision", "Success", "Growth"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[rotatingWord]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRotatingWord((prev) => (prev + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, rotatingWord, words])

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 sm:pt-20 lg:pt-20 flex items-center px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 py-8 sm:py-12 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-8 sm:space-y-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/15 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
                  Next Generation Platform
                </span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance mb-6">
                  Transform Your{" "}
                  <span className="inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                  Unlock unprecedented insights and drive global impact with cutting-edge intelligence designed for
                  modern enterprises.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                aria-label="Explore our latest insights and research"
                className="group px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold text-sm uppercase tracking-wider hover:shadow-2xl hover:shadow-primary/50 transition-all duration-700 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Insights
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-700" size={18} aria-hidden="true" />
              </button>
              <button
                aria-label="Learn more about our platform"
                className="group px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-700 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                <Sparkles className="group-hover:rotate-12 transition-transform duration-700" size={18} aria-hidden="true" />
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div 
              className={`pt-6 sm:pt-8 border-t border-border/50 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-semibold">10K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative h-full rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-500">
              <img
                src="/futuristic-technology-innovation-digital.jpg"
                alt="Abstract visualization of next-generation digital technology and innovation"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
