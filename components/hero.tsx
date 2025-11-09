"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div
          className="absolute bottom-10 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/15 transition-colors duration-500">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Next Generation Insights
                </span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-balance mb-4">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-blue-500 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                  Unlock unprecedented insights and drive global impact with cutting-edge intelligence designed for
                  modern enterprises.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                aria-label="Explore our latest insights and research"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-primary/40 transition-all duration-700 flex items-center gap-2"
              >
                Explore Insights
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-700" size={20} aria-hidden="true" />
              </button>
              <button
                aria-label="Learn more about our platform"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors duration-700 flex items-center gap-2"
              >
                <Sparkles size={20} aria-hidden="true" />
                Learn More
              </button>
            </div>
          </div>

          <div className={`relative h-80 sm:h-96 md:h-full group ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden border border-primary/30 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-700">
              <img
                src="/futuristic-technology-innovation-digital.jpg"
                alt="Abstract visualization of next-generation digital technology and innovation"
                loading="eager"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
