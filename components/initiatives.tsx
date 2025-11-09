"use client"

import { useEffect, useState } from "react"
import { Zap, Leaf, Globe, Cpu } from "lucide-react"

export default function Initiatives() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    observer.observe(document.querySelector("#initiatives") as Element)
  }, [])

  const initiatives = [
    {
      title: "Digital Revolution Hub",
      description: "Accelerating digital transformation across industries with cutting-edge solutions.",
      icon: Zap,
      stats: "500+ Companies Transformed",
      color: "bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-blue-800",
      textColor: "text-blue-600 dark:text-blue-400",
      accentColor: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200",
    },
    {
      title: "Sustainability Leaders",
      description: "Driving climate action through innovative green technology initiatives.",
      icon: Leaf,
      stats: "1M+ Tons CO2 Reduced",
      color: "bg-green-50 dark:bg-slate-800 border-green-200 dark:border-green-800",
      textColor: "text-green-600 dark:text-green-400",
      accentColor: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200",
    },
    {
      title: "Global Connectivity",
      description: "Connecting communities and organizations worldwide for greater impact.",
      icon: Globe,
      stats: "150+ Countries Reached",
      color: "bg-cyan-50 dark:bg-slate-800 border-cyan-200 dark:border-cyan-800",
      textColor: "text-cyan-600 dark:text-cyan-400",
      accentColor: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200",
    },
    {
      title: "Innovation Hub",
      description: "Fostering breakthrough technologies and groundbreaking research.",
      icon: Cpu,
      stats: "1000+ Projects Funded",
      color: "bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-purple-800",
      textColor: "text-purple-600 dark:text-purple-400",
      accentColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200",
    },
  ]

  return (
    <section
      id="initiatives"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Strategic Initiatives</span>
            <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance text-foreground dark:text-white">
              Global <span className="text-primary">Programs</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/60 dark:text-foreground/50 mt-6 max-w-2xl">
              Transforming industries and creating lasting impact through strategic initiatives worldwide
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {initiatives.map((init, idx) => {
            const IconComponent = init.icon
            return (
              <div
                key={idx}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 border ${init.color} hover:shadow-lg dark:hover:shadow-blue-500/20 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative p-8 md:p-10">
                  <div className="mb-6 inline-block p-4 bg-white dark:bg-slate-700 rounded-xl border-2 border-current group-hover:shadow-lg transition">
                    <IconComponent size={32} className={init.textColor} />
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-black mb-4 ${init.textColor}`}>{init.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8">
                    {init.description}
                  </p>

                  <div className={`p-4 rounded-lg ${init.accentColor} mb-6 inline-block`}>
                    <p className="text-sm font-bold">{init.stats}</p>
                  </div>

                  <button
                    className={`block px-6 py-3 ${init.accentColor} font-bold rounded-lg transition transform group-hover:scale-105 uppercase tracking-wider text-sm`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
