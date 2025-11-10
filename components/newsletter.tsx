"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Mail, Check, Sparkles, TrendingUp, Users } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { toast } from "sonner"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Content fade and slide up
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      )

      // Form slide up
      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      )

      // Stats stagger
      const stats = statsRef.current?.children
      if (stats) {
        gsap.fromTo(
          stats,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    toast.success("Successfully subscribed!", { 
      description: "You'll receive weekly insights and updates." 
    })
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 2000)
  }

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-95"></div>
      
      {/* Animated circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Content */}
        <div ref={contentRef} className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <Mail size={32} className="text-white" />
          </div>
          
          <span className="text-white/90 font-bold uppercase tracking-widest text-sm mb-4 block">
            Subscribe & Connect
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            Stay Ahead of <span className="text-white/80">Global Trends</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of leaders receiving weekly insights, research, and strategic analysis delivered to your inbox.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12"
        >
          <div className="flex-1 relative group">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address for newsletter subscription
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-label="Email address"
              className="w-full px-6 py-5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white focus:shadow-xl transition-all duration-300 font-medium"
            />
          </div>
          <button
            type="submit"
            aria-label="Subscribe to newsletter"
            className="px-10 py-5 bg-white text-primary rounded-2xl font-bold hover:bg-white/90 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm flex items-center justify-center gap-2 whitespace-nowrap group"
          >
            {subscribed ? (
              <>
                <Check size={20} className="animate-bounce" /> Subscribed!
              </>
            ) : (
              <>
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Subscribe Now
              </>
            )}
          </button>
        </form>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Users size={24} className="text-white" />
            </div>
            <p className="text-3xl font-black text-white mb-1">50K+</p>
            <p className="text-sm text-white/80 font-semibold">Active Subscribers</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Mail size={24} className="text-white" />
            </div>
            <p className="text-3xl font-black text-white mb-1">Weekly</p>
            <p className="text-sm text-white/80 font-semibold">Expert Insights</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp size={24} className="text-white" />
            </div>
            <p className="text-3xl font-black text-white mb-1">98%</p>
            <p className="text-sm text-white/80 font-semibold">Satisfaction Rate</p>
          </div>
        </div>

        <p className="text-white/70 text-sm text-center">🔒 We respect your privacy. Unsubscribe anytime. No spam, ever.</p>
      </div>
    </section>
  )
}
