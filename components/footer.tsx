"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles, Globe } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { toast } from "sonner"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const columnsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Footer columns stagger animation
      const columns = columnsRef.current?.children
      if (columns) {
        gsap.fromTo(
          columns,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
            },
          }
        )
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])
  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-background via-muted/30 to-card border-t border-border text-foreground py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={columnsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Globe size={20} className="text-white" />
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PROTOTYPE
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Transforming industries through innovation, strategic insights, and cutting-edge solutions.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors duration-300 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium">contact@example.com</span>
              </a>
              <a
                href="tel:+15550000000"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors duration-300 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium">+1 (555) 000-0000</span>
              </a>
              <div className="flex items-center gap-3 text-foreground/60">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium">Global Headquarters</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-base mb-6 text-foreground uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "News", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); toast.info(`${item} page coming soon!`) }}
                    className="text-foreground/70 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-base mb-6 text-foreground uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Case Studies", "Insights", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); toast.info(`${item} page coming soon!`) }}
                    className="text-foreground/70 text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-black text-base mb-6 text-foreground uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3 mb-6">
              {[
                { name: "Twitter", icon: "𝕏" },
                { name: "LinkedIn", icon: "in" },
                { name: "GitHub", icon: "gh" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  onClick={(e) => { e.preventDefault(); toast.info(`${social.name} link coming soon!`) }}
                  className="w-10 h-10 bg-primary/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent border border-primary/20 hover:border-transparent rounded-xl flex items-center justify-center text-primary hover:text-white font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-foreground/70 text-sm mb-4 font-medium flex items-center gap-2">
              <Sparkles size={16} className="text-primary" />
              Stay updated with insights
            </p>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed!", { description: "Thanks for subscribing to updates." }) }} className="flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address for updates
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                aria-label="Email address for updates"
                className="w-full px-4 py-2.5 bg-card border-2 border-border rounded-xl text-sm focus:outline-none focus:border-primary transition-all duration-300 font-medium"
              />
              <button
                type="submit"
                aria-label="Subscribe to updates"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-foreground/60 text-sm font-medium">
              <p>&copy; 2025 Prototype Platform. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm justify-center sm:justify-end">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" onClick={(e) => { e.preventDefault(); toast.info(`${item} page coming soon!`) }} className="text-foreground/60 hover:text-primary transition-colors duration-300 font-medium relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
