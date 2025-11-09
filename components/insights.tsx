export default function Insights() {
  const insights = [
    {
      title: "Future of AI in Business",
      category: "Technology",
      image: "/ai-ml-concept.png",
    },
    {
      title: "Sustainable Digital Economy",
      category: "Sustainability",
      image: "/green-technology-and-sustainability.jpg",
    },
    {
      title: "Global Supply Chain Evolution",
      category: "Economics",
      image: "/supply-chain-and-logistics.jpg",
    },
  ]

  return (
    <section id="insights" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Featured Insights</h2>
          <p className="text-lg text-foreground/70">Explore our latest research and analysis on global trends</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl overflow-hidden hover:shadow-lg transition group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  {insight.category}
                </span>
                <h3 className="text-xl font-bold line-clamp-2">{insight.title}</h3>
                <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
