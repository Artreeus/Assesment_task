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
      color: "text-accent"
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
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background dark:from-background dark:via-primary/10 dark:to-background border-y border-border overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 sm:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Impact</span>
          <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
            Trusted by <span className="text-primary">Thousands</span> Worldwide
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
            Delivering excellence and impact across the globe
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`group relative bg-card dark:bg-card border border-border dark:border-border rounded-xl p-6 sm:p-8 hover:border-primary/40 dark:hover:border-primary/60 hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${stat.color.replace('text-', 'bg-')} rounded-t-xl opacity-90 dark:opacity-100`}></div>

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className={`p-3 rounded-lg ${stat.color === 'text-secondary' ? 'bg-secondary/10 dark:bg-secondary/20' : stat.color === 'text-accent' ? 'bg-accent/10 dark:bg-accent/20' : 'bg-primary/10 dark:bg-primary/20'} ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={28} strokeWidth={2} />
                  </div>
                </div>

                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold text-foreground dark:text-foreground mb-2 tabular-nums text-center group-hover:text-primary transition-colors duration-500">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground font-medium text-center">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default StatsBanner
