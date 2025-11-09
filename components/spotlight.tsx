"use client"

import { useEffect, useState } from "react"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"

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
      description: "Annual conference bringing together world leaders & innovators.",
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
    {
      title: "Tech Transformation Summit",
      description: "Explore cutting-edge technologies reshaping industries.",
      image: "/innovation-technology-blue.jpg",
      date: "JAN 12-14",
      location: "Location E",
      attendees: "6,000+",
    },
    {
      title: "Future of Work Conference",
      description: "Redefining workplace culture and productivity.",
      image: "/enterprise-digital-transformation-office.jpg",
      date: "FEB 8-10",
      location: "Location F",
      attendees: "3,000+",
    },
  ]

  return (
    <section id="spotlight" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Featured Events</span>
            <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
              Global <span className="text-primary">Spotlight</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
              Join our most significant global gatherings and network with industry leaders worldwide
            </p>
          </div>
        </div>

        {/* Simple 2-column Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {spotlights.map((item, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-card dark:bg-card border border-border hover:border-primary/40 dark:hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Event: ${item.title} - ${item.description}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Date badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg font-bold text-sm">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground dark:text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Event details */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span className="font-medium">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={18} className="text-primary" />
                    <span className="font-medium">{item.attendees}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-500">
                  <span>Register Now</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
