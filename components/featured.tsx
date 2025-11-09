export default function Featured() {
  const featured = [
    {
      title: "Quarterly Report: Digital Transformation in 2025",
      description:
        "An in-depth analysis of how organizations are accelerating their digital initiatives and navigating emerging technologies.",
      tag: "REPORT",
    },
    {
      title: "Expert Roundtable: The Future of Work",
      description:
        "Industry leaders discuss remote work, hybrid models, and workforce strategies for the next generation of organizations.",
      tag: "ROUNDTABLE",
    },
    {
      title: "Case Study: Building Resilient Supply Chains",
      description:
        "Learn how leading companies are restructuring their supply chains to be more agile and sustainable.",
      tag: "CASE STUDY",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Discover More</h2>
          <p className="text-lg text-foreground/70">Explore curated content across industries and topics</p>
        </div>

        <div className="space-y-4">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
                <div className="flex-shrink-0 text-primary group-hover:translate-x-1 transition">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
