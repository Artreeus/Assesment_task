"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.querySelector("#case-studies")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const interval = setInterval(() => {
      // Only auto-rotate if page is visible
      if (document.visibilityState === "visible") {
        setCurrentSlide((prev) => (prev + 1) % cases.length)
      }
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const cases = [
    {
      title: "Enterprise Digital Transformation",
      client: "Enterprise Client A",
      image: "/enterprise-digital-transformation-office.jpg",
      result: "+250% Growth",
      description: "Complete digital overhaul resulting in exponential business growth",
    },
    {
      title: "Sustainability Initiative Launch",
      client: "Manufacturing Client B",
      image: "/green-sustainability-renewable-energy.jpg",
      result: "-45% Emissions",
      description: "Industry-leading environmental impact reduction program",
    },
    {
      title: "Cloud Migration Success",
      client: "Financial Services Client C",
      image: "/cloud-computing-data-center-servers.jpg",
      result: "99.99% Uptime",
      description: "Seamless migration to cloud infrastructure",
    },
    {
      title: "AI Integration Project",
      client: "Technology Client D",
      image: "/artificial-intelligence-machine-learning-technolog.jpg",
      result: "10x Efficiency",
      description: "Revolutionary AI implementation for workflow automation",
    },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % cases.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length)

  return (
    <section id="case-studies" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Case Studies</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mt-4 text-balance">
              Real-World <span className="text-primary">Impact</span> & Results
            </h2>
            <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
              Proven transformations that drive measurable business outcomes
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" role="region" aria-label="Case studies carousel" aria-live="polite">
            <div className="relative min-h-[400px] sm:min-h-[500px]">
              {cases.map((caseItem, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    idx === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 h-full items-center p-4 sm:p-8 md:p-12 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-secondary/5 dark:to-secondary/10 border border-primary/10 dark:border-primary/30 rounded-2xl">
                    <div className="min-w-0 flex flex-col justify-center">
                      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">CLIENT CASE</p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-balance text-foreground dark:text-foreground break-words overflow-hidden">
                        {caseItem.title}
                      </h3>
                      <p className="text-foreground/60 dark:text-foreground/70 mb-6 font-medium text-sm sm:text-base">
                        {caseItem.client}
                      </p>
                      <div className="mb-6">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">
                          {caseItem.result}
                        </p>
                      </div>
                      <p className="text-foreground/70 dark:text-foreground/60 mb-8 leading-relaxed text-sm sm:text-base">
                        {caseItem.description}
                      </p>
                      <button
                        aria-label={`View full case study: ${caseItem.title}`}
                        className="w-fit px-6 py-3 bg-primary text-white rounded-lg font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-primary/30 transition-all duration-700 hover:scale-105"
                      >
                        View Full Case
                      </button>
                    </div>
                    <div className="relative h-80 hidden md:block rounded-xl overflow-hidden">
                      <img
                        src={caseItem.image || "/placeholder.svg"}
                        alt={`Visual representation of ${caseItem.title} case study`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="flex gap-2">
              {cases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-700 ${
                    idx === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-foreground/20 dark:bg-foreground/30 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 bg-muted dark:bg-muted hover:bg-primary/10 border border-primary/20 dark:border-primary/40 rounded-lg text-primary transition hover:shadow-lg duration-700"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-muted dark:bg-muted hover:bg-primary/10 border border-primary/20 dark:border-primary/40 rounded-lg text-primary transition hover:shadow-lg duration-700"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
