"use client"

import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-card/30 border-t border-accent/10 text-foreground py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Company Info Section */}
          <div>
            <div className="text-2xl font-black bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent mb-4">
              NEXUS
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Transforming businesses through innovation and strategic insights for global impact.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@nexus.com"
                className="flex items-center gap-3 text-foreground/60 hover:text-accent transition-colors duration-500 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-500" />
                <span className="text-sm">hello@nexus.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-foreground/60 hover:text-accent transition-colors duration-500 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform duration-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-foreground/60">
                <MapPin size={18} />
                <span className="text-sm">Global Operations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "News", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 text-sm hover:text-accent hover:translate-x-1 transition-all duration-500 flex items-center gap-1 group"
                  >
                    {item}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-base mb-6 text-foreground">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Case Studies", "Insights", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 text-sm hover:text-accent hover:translate-x-1 transition-all duration-500 flex items-center gap-1 group"
                  >
                    {item}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold text-base mb-6 text-foreground">Connect</h4>
            <div className="flex gap-3 mb-6">
              {[
                { name: "Twitter", icon: "𝕏" },
                { name: "LinkedIn", icon: "in" },
                { name: "GitHub", icon: "gh" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 bg-accent/5 hover:bg-accent/15 border border-accent/20 rounded-lg flex items-center justify-center text-accent font-bold transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-foreground/60 text-xs mb-3">Stay updated with latest insights</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-card border border-accent/20 rounded-lg text-sm focus:outline-none focus:border-accent/50 transition-colors duration-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-accent to-primary text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-500 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-foreground/60 text-xs">
              <p>&copy; 2025 NEXUS Global. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs justify-center sm:justify-end">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-foreground/60 hover:text-accent transition-colors duration-500">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
