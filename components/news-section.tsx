"use client"

import { useEffect, useRef } from "react"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const newsGridRef = useRef<HTMLDivElement>(null)

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

      // Featured article animation
      gsap.fromTo(
        featuredRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
          },
        }
      )

      // News cards stagger
      const cards = newsGridRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: newsGridRef.current,
              start: "top 85%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featuredNews = {
    title: "Revolutionary AI Framework Transforms Industries",
    excerpt: "Groundbreaking artificial intelligence breakthrough reshapes how businesses operate, setting new standards for innovation and efficiency across sectors.",
    image: "/ai-breakthrough-innovation.jpg",
    category: "Technology",
    date: "November 9, 2025",
    readTime: "5 min read",
  }

  const news = [
    { 
      title: "Global Markets Surge on Economic Recovery", 
      excerpt: "Stock markets worldwide reach new highs as economic indicators show strong recovery.",
      category: "Finance", 
      date: "Nov 8, 2025",
      readTime: "3 min"
    },
    { 
      title: "Sustainability Milestone: Net-Zero Progress", 
      excerpt: "Major corporations report significant progress toward carbon neutrality goals.",
      category: "Environment", 
      date: "Nov 7, 2025",
      readTime: "4 min"
    },
    { 
      title: "Tech Giants Form Strategic Alliance", 
      excerpt: "Leading technology companies announce collaboration on next-gen infrastructure.",
      category: "Business", 
      date: "Nov 6, 2025",
      readTime: "6 min"
    },
    { 
      title: "Emerging Markets Drive Global Growth", 
      excerpt: "Developing economies show robust expansion, reshaping global trade dynamics.",
      category: "Economics", 
      date: "Nov 5, 2025",
      readTime: "5 min"
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="news"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Latest Updates</span>
          <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
            Stay <span className="text-primary">Informed</span> & Updated
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
            Breaking news and insights on global trends shaping industries and economies
          </p>
        </div>

        {/* Featured Article */}
        <div ref={featuredRef} className="mb-12 group cursor-pointer">
          <div className="relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 shadow-md hover:shadow-2xl">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="flex items-center gap-2 px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full">
                    <TrendingUp size={14} />
                    FEATURED
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{featuredNews.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {featuredNews.title}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all duration-300 w-fit">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div ref={newsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">
                  {item.category}
                </span>
                <ArrowRight
                  className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  size={18}
                />
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                {item.title}
              </h4>
              
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                {item.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} />
                  <span>{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
