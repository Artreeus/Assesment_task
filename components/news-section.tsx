"use client"

import { useEffect, useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    observer.observe(document.querySelector("#news") as Element)
  }, [])

  const featuredNews = {
    title: "Revolutionary AI Framework Changes Everything",
    excerpt: "New breakthrough in artificial intelligence reshapes industry standards...",
    image: "/ai-breakthrough-innovation.jpg",
    author: "Sarah Chen",
    date: "2 hours ago",
  }

  const news = [
    { title: "Global Markets React to Economic Shifts", source: "Finance Today", date: "5 hours ago", icon: "📈" },
    { title: "Sustainability Goals: Q4 Progress Report", source: "Green Future", date: "1 day ago", icon: "🌍" },
    { title: "Tech Leaders Announce Major Partnership", source: "Tech Insider", date: "2 days ago", icon: "🤝" },
    { title: "Emerging Markets Show Strong Growth", source: "Business Weekly", date: "3 days ago", icon: "📊" },
  ]

  return (
    <section
      id="news"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Latest News</span>
            <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
              Stay <span className="text-primary">Informed</span> & Updated
            </h2>
            <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
              Breaking news and insights on global trends shaping industries and economies
            </p>
          </div>
        </div>

        <div
          className={`mb-8 sm:mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="group cursor-pointer">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-primary/30 dark:border-primary/50 hover:border-primary/80 transition-colors duration-700">
              <img
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 dark:from-background/95 dark:via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full mb-3">
                  Featured
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Trending Now</p>
              <h3 className="text-4xl sm:text-5xl font-black leading-tight text-balance mb-4">{featuredNews.title}</h3>
              <p className="text-lg text-foreground/70 dark:text-foreground/60">{featuredNews.excerpt}</p>
            </div>

            <div className="flex items-center gap-4 text-foreground/60 dark:text-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{featuredNews.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{featuredNews.date}</span>
              </div>
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-primary/50 transition-all duration-700 hover:scale-105">
              Read Full Story
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {news.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-card dark:bg-card border border-primary/15 dark:border-primary/30 rounded-2xl hover:border-primary/50 dark:hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <ArrowRight
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  size={20}
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.source}</span>
                <span className="text-xs text-foreground/40 dark:text-foreground/50">{item.date}</span>
              </div>
              <h4 className="text-lg font-bold group-hover:text-primary transition-colors duration-700 text-balance">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
