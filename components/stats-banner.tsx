"use client"

import { useEffect, useState, memo } from "react"
import { Users, Globe, FileText, Eye } from "lucide-react"

const StatsBanner = memo(function StatsBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldCount, setShouldCount] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])

  useEffect(() => {
    const element = document.querySelector("#stats")
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        setShouldCount(true)
      }
    })
    
    observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldCount) return

    const targets = [150, 50, 1000, 10]
    const duration = 2000
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounts(
        targets.map((target) => {
          return Math.floor(target * progress)
        }),
      )

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [shouldCount])

  const stats = [
    { 
      number: `${counts[0]}+`, 
      label: "Expert Contributors",
      icon: Users,
      color: "text-primary"
    },
    { 
      number: `${counts[1]}`, 
      label: "Countries Covered",
      icon: Globe,
      color: "text-secondary"
    },
    { 
      number: `${counts[2]}+`, 
      label: "Research Reports",
      icon: FileText,
      color: "text-accent"
    },
    { 
      number: `${counts[3]}M+`, 
      label: "Monthly Readers",
      icon: Eye,
      color: "text-primary"
    },
  ]

  return (
    <section
      id="stats"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-y border-primary/10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Trusted by <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Thousands</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`group relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-xl bg-primary/10 ${stat.color} group-hover:scale-110 transition-transform duration-700`}>
                    <Icon size={24} className="sm:w-7 sm:h-7" />
                  </div>
                </div>

                {/* Number */}
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-black ${stat.color} mb-3 group-hover:scale-105 transition-transform duration-700 tabular-nums text-center`}>
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-foreground/70 font-semibold text-center leading-tight">
                  {stat.label}
                </p>

                {/* Decorative accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default StatsBanner
