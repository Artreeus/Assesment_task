"use client"

import { useEffect, useRef } from "react"
import { MapPin, Users, Calendar, ArrowRight, Clock, ExternalLink } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Spotlight() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      )

      // Cards stagger animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 120,
            opacity: 0,
            rotateY: 15,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 0.6,
              from: "start",
            },
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              end: "bottom 20%",
            },
          }
        )
      }

      // Hover animations for cards
      gsap.utils.toArray(".event-card").forEach((card: any) => {
        const tl = gsap.timeline({ paused: true })
        
        tl.to(card, {
          y: -10,
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(card.querySelector(".event-image"), {
          scale: 1.1,
          duration: 0.3,
        }, 0)
        .to(card.querySelector(".event-overlay"), {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          duration: 0.3,
        }, 0)
        
        card.addEventListener("mouseenter", () => tl.play())
        card.addEventListener("mouseleave", () => tl.reverse())
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const events = [
    {
      title: "Global Innovation Summit",
      subtitle: "Shaping the Future",
      description: "Join industry leaders, entrepreneurs, and visionaries as we explore breakthrough technologies and transformative ideas.",
      image: "/global-conference-summit.jpg",
      date: "March 15-17, 2025",
      time: "3 Days",
      location: "San Francisco",
      attendees: "5,000+",
      price: "$1,299",
      category: "Technology",
    },
    {
      title: "Digital Leadership Forum",
      subtitle: "Leading the Change",
      description: "Master digital transformation strategies and learn from successful digital-first organizations.",
      image: "/leadership-technology-future.jpg",
      date: "April 22-23, 2025",
      time: "2 Days",
      location: "New York",
      attendees: "2,500+",
      price: "$899",
      category: "Leadership",
    },
    {
      title: "Sustainability Impact",
      subtitle: "Green Future",
      description: "Discover innovative solutions for climate change and sustainable business practices.",
      image: "/sustainability-environment.jpg",
      date: "May 10-12, 2025",
      time: "3 Days",
      location: "Seattle",
      attendees: "3,200+",
      price: "$1,099",
      category: "Environment",
    },
    {
      title: "Innovation Workshop",
      subtitle: "Hands-on Learning",
      description: "Interactive sessions with cutting-edge tools and methodologies for modern innovation.",
      image: "/innovation-workshop.jpg",
      date: "June 5-6, 2025",
      time: "2 Days",
      location: "Austin",
      attendees: "1,800+",
      price: "$699",
      category: "Workshop",
    },
    {
      title: "AI & Machine Learning Conference",
      subtitle: "Intelligence Unleashed",
      description: "Explore the latest advances in AI, machine learning, and how they're transforming industries.",
      image: "/ai-ml-concept.png",
      date: "July 18-20, 2025",
      time: "3 Days",
      location: "Boston",
      attendees: "4,500+",
      price: "$1,199",
      category: "AI & ML",
    },
    {
      title: "Future of Work Summit",
      subtitle: "Reimagining Workspaces",
      description: "Discover new paradigms in remote work, collaboration tools, and workplace culture evolution.",
      image: "/enterprise-business-digital.jpg",
      date: "August 12-13, 2025",
      time: "2 Days",
      location: "Chicago",
      attendees: "3,000+",
      price: "$799",
      category: "Business",
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="spotlight" 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Featured Events</span>
          <h2 className="text-5xl sm:text-6xl font-black mt-4 text-balance">
            Global <span className="text-primary">Spotlight</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 mt-6 max-w-2xl">
            Discover transformative events that shape the future of industries worldwide
          </p>
        </div>

        {/* GSAP Animated Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-card group cursor-pointer rounded-3xl overflow-hidden bg-card border border-border/50 backdrop-blur-sm"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-80 overflow-hidden">
                {/* Background Image */}
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={`${event.title} - ${event.subtitle}`}
                  loading="lazy"
                  className="event-image w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="event-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                    {event.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-bold rounded-full">
                    {event.price}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-3xl font-black text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/80 text-lg font-semibold mb-4">
                      {event.subtitle}
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Details Section */}
              <div className="p-8 bg-gradient-to-br from-card via-card to-card/80">
                {/* Event Meta Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs uppercase tracking-wide font-semibold">Date</p>
                      <p className="font-bold text-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs uppercase tracking-wide font-semibold">Duration</p>
                      <p className="font-bold text-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs uppercase tracking-wide font-semibold">Location</p>
                      <p className="font-bold text-foreground">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-xs uppercase tracking-wide font-semibold">Attendees</p>
                      <p className="font-bold text-foreground">{event.attendees}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 group/btn flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>Register Now</span>
                    <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                  </button>
                  <button className="px-4 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
