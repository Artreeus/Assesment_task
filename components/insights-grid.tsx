"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Zap, Globe, Users, Leaf, Shield, Lightbulb, Rocket } from "lucide-react"

export default function InsightsGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.querySelector("#insights") as Element)
  }, [])

  const insights = [
    {
      title: "Future of AI in Business",
      category: "Technology",
      icon: Zap,
      color: "from-primary via-primary/90 to-secondary",
      description: "Exploring emerging AI applications",
    },
    {
      title: "Sustainable Digital Economy",
      category: "Sustainability",
      icon: Leaf,
      color: "from-accent via-accent/90 to-accent/80",
      description: "Building eco-friendly digital solutions",
    },
    {
      title: "Global Supply Chain",
      category: "Economics",
      icon: Globe,
      color: "from-secondary via-secondary/90 to-accent",
      description: "Optimizing international trade networks",
    },
    {
      title: "Remote Work Trends",
      category: "Workforce",
      icon: Users,
      color: "from-accent via-accent/90 to-primary",
      description: "The future of distributed work",
    },
    {
      title: "Market Insights 2025",
      category: "Analysis",
      icon: TrendingUp,
      color: "from-primary via-accent/80 to-accent",
      description: "Key economic forecasts",
    },
    {
      title: "Cybersecurity Evolution",
      category: "Security",
      icon: Shield,
      color: "from-secondary via-primary/90 to-primary",
      description: "Next-gen threat prevention",
    },
    {
      title: "Innovation Strategies",
      category: "Strategy",
      icon: Lightbulb,
      color: "from-accent via-secondary/90 to-secondary",
      description: "Driving organizational transformation",
    },
    {
      title: "Growth Acceleration",
      category: "Business",
      icon: Rocket,
      color: "from-primary via-secondary to-accent",
      description: "Scaling for exponential growth",
    }
    
  ]

  return (
    <section
      id="insights"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background dark:from-background dark:to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Latest Insights</span>
            <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
              Trending Topics <span className="text-primary">Across Industries</span>
            </h2>
            <p className="text-xl text-foreground/60 mt-6 max-w-2xl">
              Stay informed with our curated content on the most important topics shaping the future
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {insights.map((insight, idx) => {
            const Icon = insight.icon
            const isFeatured = idx === 0 || idx === 4

            return (
              <div
                key={idx}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-700 relative ${
                  isFeatured
                    ? "lg:col-span-2 bg-card border-2 border-primary/20 dark:bg-card dark:border-primary/40 p-8 hover:border-primary/60 hover:shadow-2xl hover:scale-102"
                    : "bg-card border border-primary/10 dark:bg-card dark:border-primary/30 p-6 hover:border-primary/40 hover:shadow-2xl hover:scale-105"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>

                <div
                  className={`${isFeatured ? "w-20 h-20" : "w-16 h-16"} bg-gradient-to-br ${insight.color} rounded-xl mb-6 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-700`}
                >
                  <Icon
                    size={isFeatured ? 40 : 32}
                    className="text-white group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3
                  className={`font-bold mb-3 group-hover:text-primary transition-colors duration-700 text-balance ${isFeatured ? "text-2xl" : "text-lg"}`}
                >
                  {insight.title}
                </h3>
                {isFeatured && <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{insight.description}</p>}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-xs font-semibold rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-700">
                  {insight.category}
                </span>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 dark:from-primary/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <div className="text-4xl group-hover:animate-pulse">→</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
