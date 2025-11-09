"use client"

import { useEffect, useRef } from "react"
import { Zap, Leaf, Globe, Cpu, ArrowRight, TrendingUp } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Initiatives() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      )

      // Cards stagger animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0, rotateY: 15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const initiatives = [
    {
      title: "Digital Revolution Hub",
      description: "Accelerating digital transformation across industries with cutting-edge solutions and next-generation platforms.",
      icon: Zap,
      stats: "500+ Companies",
      impact: "Transformed",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Sustainability Leaders",
      description: "Driving climate action through innovative green technology initiatives and carbon-neutral strategies.",
      icon: Leaf,
      stats: "1M+ Tons CO2",
      impact: "Reduced",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Global Connectivity",
      description: "Connecting communities and organizations worldwide for greater impact and collaborative growth.",
      icon: Globe,
      stats: "150+ Countries",
      impact: "Reached",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Innovation Hub",
      description: "Fostering breakthrough technologies and groundbreaking research through strategic funding.",
      icon: Cpu,
      stats: "1000+ Projects",
      impact: "Funded",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="initiatives"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Strategic Initiatives</span>
          <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
            Global <span className="text-primary">Initiatives</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
            Transforming industries and creating lasting impact through strategic initiatives worldwide
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {initiatives.map((init, idx) => {
            const IconComponent = init.icon
            return (
              <div
                key={idx}
                className="group cursor-pointer relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${init.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 lg:p-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${init.gradient} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <IconComponent size={28} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 group-hover:text-primary transition-colors duration-300">
                    {init.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-foreground/70 leading-relaxed mb-8">
                    {init.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${init.gradient} rounded-xl shadow-lg`}>
                      <TrendingUp size={16} className="text-white" />
                      <div className="text-white">
                        <p className="text-lg font-black leading-none">{init.stats}</p>
                        <p className="text-xs font-semibold opacity-90">{init.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-semibold text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
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
