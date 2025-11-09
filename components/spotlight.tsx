"use client"

import { useEffect, useState } from "react"
import { MapPin, Users } from "lucide-react"

export default function Spotlight() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.querySelector("#spotlight") as Element)
  }, [])

  const spotlights = [
    {
      title: "Global Summit 2025: Reimagining Tomorrow",
      description: "Annual conference bringing together world leaders, innovators, and changemakers.",
      image: "/global-conference-summit.jpg",
      date: "SEPT 15-18",
      location: "Location A",
      attendees: "5,000+",
    },
    {
      title: "The Future is Now: Digital Leadership",
      description: "Expert insights on leading in the digital age and beyond.",
      image: "/leadership-technology-future.jpg",
      date: "OCT 22-24",
      location: "Location B",
      attendees: "3,500+",
    },
    {
      title: "Innovation Lab: Building Tomorrow",
      description: "Hands-on workshops and networking with industry pioneers.",
      image: "/innovation-workshop.jpg",
      date: "NOV 10-12",
      location: "Location C",
      attendees: "2,000+",
    },
    {
      title: "Sustainability Forum 2025",
      description: "Leading the charge on climate action and green technology.",
      image: "/sustainability-environment.jpg",
      date: "DEC 5-7",
      location: "Location D",
      attendees: "4,000+",
    },
  ]

  return (
    <section id="spotlight" className="py-16 px-4 sm:px-6 lg:px-8 bg-card dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Featured Events</span>
            <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
              Spotlight <span className="text-primary">Events</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
              Join our most significant global gatherings and network with industry leaders worldwide
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {spotlights.map((item, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-card dark:bg-card shadow-md hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-primary/10 dark:border-primary/30 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden bg-gradient-to-br from-primary/10 dark:from-primary/20 to-secondary/10 dark:to-secondary/20">
              <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Event: ${item.title} - ${item.description}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold text-sm">
                  {item.date}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-700 text-balance">
                  {item.title}
                </h3>
                <p className="text-foreground/70 dark:text-foreground/60 mb-5 text-sm">{item.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-primary/10 dark:border-primary/30">
                  <div className="flex items-center gap-2 text-sm text-foreground/70 dark:text-foreground/60">
                    <MapPin size={16} className="text-primary" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70 dark:text-foreground/60">
                    <Users size={16} className="text-primary" />
                    <span>{item.attendees}</span>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-700">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
