"use client"

import { useEffect, useState } from "react"

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
      description: "Accelerating next-generation technologies",
      image: "/innovation-technology-blue.jpg",
      size: "large",
      tag: "FEATURED",
    },
    {
      title: "Sustainability Report",
      description: "Climate action initiatives",
      image: "/green-sustainability-environment.jpg",
      size: "medium",
      tag: "REPORT",
    },
    {
      title: "Digital Economy",
      description: "Future of commerce",
      image: "/digital-economy-commerce.jpg",
      size: "medium",
      tag: "ANALYSIS",
    },
  ]

  return (
    <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
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

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
          <div
            className={`md:col-span-2 md:row-span-2 group cursor-pointer rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-shadow duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0s" }}
          >
            <div className="relative h-full">
              <img
                src={featured[0].image || "/placeholder.svg"}
                alt={`Featured content: ${featured[0].title} - ${featured[0].description}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-bold mb-3">
                  {featured[0].tag}
                </span>
                <h3 className="text-3xl font-bold mb-2">{featured[0].title}</h3>
                <p className="text-white/90">{featured[0].description}</p>
              </div>
            </div>
          </div>

          {featured.slice(1).map((item, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <div className="relative h-full">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - ${item.description}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="inline-block px-2 py-1 bg-primary rounded text-xs font-bold mb-2">{item.tag}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
