import Header from "@/components/header"
import Hero from "@/components/hero"
import StatsBanner from "@/components/stats-banner"
import FeaturedShowcase from "@/components/featured-showcase"
import InsightsGrid from "@/components/insights-grid"
import CaseStudies from "@/components/case-studies"
import Spotlight from "@/components/spotlight"
import NewsSection from "@/components/news-section"
import Initiatives from "@/components/initiatives"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <StatsBanner />
      <FeaturedShowcase />
      <InsightsGrid />
      <CaseStudies />
      <Spotlight />
      <NewsSection />
      <Initiatives />
      <Newsletter />
      <Footer />
    </main>
  )
}
