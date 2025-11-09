"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function FeaturedShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.querySelector("#featured") as Element)
  }, [])

  const featured = [
    {
      title: "Strategic Innovation Hub",
      description: "Accelerating next-generation technologies and driving digital transformation across industries",
      image: "/innovation-technology-blue.jpg",
      size: "large",
      tag: "FEATURED",
      date: "Nov 8, 2025",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "Sustainability Report 2025",
      description: "Climate action initiatives and environmental impact",
      image: "/green-sustainability-environment.jpg",
      size: "medium",
      tag: "REPORT",
      date: "Nov 5, 2025",
      readTime: "8 min read",
      category: "Sustainability"
    },
    {
      title: "Digital Economy Insights",
      description: "Future of commerce and global markets",
      image: "/digital-economy-commerce.jpg",
      size: "medium",
      tag: "ANALYSIS",
      date: "Nov 3, 2025",
      readTime: "6 min read",
      category: "Economics"
    },
  ]

  return (
    <section id="featured" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Featured Content</span>
            <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
              Explore Our Most <span className="text-primary">Impactful</span> Research
            </h2>
            <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
              Discover our curated collection of groundbreaking initiatives and research shaping the future of
              innovation
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Main Featured Card */}
          <div
            className={`md:col-span-2 md:row-span-2 group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0s" }}
          >
            <div className="relative h-full">
              <img
                src={featured[0].image || "/placeholder.svg"}
                alt={`Featured content: ${featured[0].title} - ${featured[0].description}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                {/* Category badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-bold uppercase tracking-wider">
                    {featured[0].tag}
                  </span>
                </div>
                
                {/* Title & Description */}
                <h3 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  {featured[0].title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg mb-6 leading-relaxed">
                  {featured[0].description}
                </p>
                
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{featured[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{featured[0].readTime}</span>
                  </div>
                </div>
                
                {/* Read more button */}
                <button className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-500">
                  Read Full Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Cards */}
          {featured.slice(1).map((item, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 shadow-md hover:shadow-xl transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <div className="relative h-full">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - ${item.description}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="inline-block px-2.5 py-1 bg-accent text-white rounded-md text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
