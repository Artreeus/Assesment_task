export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-96 bg-muted rounded-xl overflow-hidden order-2 md:order-1">
            <img src="/global-team-working-together.jpg" alt="About section image" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Bridging Global Perspectives</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We bring together thought leaders, innovators, and decision-makers from across industries to explore the
              most pressing challenges and opportunities of our time.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary flex-shrink-0">01</div>
                <div>
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-foreground/70">Connect with experts and leaders from over 150 countries.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary flex-shrink-0">02</div>
                <div>
                  <h3 className="font-semibold mb-2">Data-Driven Analysis</h3>
                  <p className="text-foreground/70">Access actionable insights backed by rigorous research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
