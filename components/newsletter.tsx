"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Check } from "lucide-react"

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.querySelector("#newsletter") as Element)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 2000)
  }

  return (
    <section
      id="newsletter"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-primary text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6 p-3 bg-white/10 rounded-full backdrop-blur">
            <Mail size={24} />
          </div>
          {/* Added short label for consistency with other sections */}
          <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
            Subscribe & Connect
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-balance leading-tight">
            Stay Ahead of Global Trends
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Subscribe to get weekly insights, research, and strategic analysis from industry leaders delivered to your
            inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className={`flex flex-col sm:flex-row gap-3 max-w-xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/25 transition backdrop-blur"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:shadow-lg hover:shadow-white/20 transition transform hover:scale-105 uppercase tracking-wider text-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {subscribed ? (
                <>
                  <Check size={20} /> Subscribed!
                </>
              ) : (
                <>Subscribe</>
              )}
            </button>
          </form>

          <p className="text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
