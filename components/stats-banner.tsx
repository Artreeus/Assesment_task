"use client"

import { useEffect, useState, memo } from "react"

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
    { number: `${counts[0]}+`, label: "Expert Contributors" },
    { number: `${counts[1]}`, label: "Countries Covered" },
    { number: `${counts[2]}+`, label: "Research Reports" },
    { number: `${counts[3]}M+`, label: "Monthly Readers" },
  ]

  return (
    <section
      id="stats"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-700 tabular-nums">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-foreground/70 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default StatsBanner
