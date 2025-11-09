import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"

// Lazy load below-the-fold components for better performance
const StatsBanner = dynamic(() => import("@/components/stats-banner"), {
  loading: () => <div className="h-32 animate-pulse bg-primary/5" />,
})
const FeaturedShowcase = dynamic(() => import("@/components/featured-showcase"), {
  loading: () => <div className="h-96 animate-pulse bg-card" />,
})
const InsightsGrid = dynamic(() => import("@/components/insights-grid"))
const CaseStudies = dynamic(() => import("@/components/case-studies"))
const Spotlight = dynamic(() => import("@/components/spotlight"))
const NewsSection = dynamic(() => import("@/components/news-section"))
const Initiatives = dynamic(() => import("@/components/initiatives"))
const Newsletter = dynamic(() => import("@/components/newsletter"))
const Footer = dynamic(() => import("@/components/footer"))

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen overflow-hidden">
        <Hero />
        <StatsBanner />
        <FeaturedShowcase />
        <InsightsGrid />
        <CaseStudies />
        <Spotlight />
        <NewsSection />
        <Initiatives />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
