"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    category: "Interior",
    image: "/modern-white-kitchen-with-painted-cabinets-and-wal.jpg",
    description: "Complete kitchen makeover with custom cabinet painting and accent walls.",
  },
  {
    id: 2,
    title: "Victorian Home Exterior",
    category: "Exterior",
    image: "/beautiful-victorian-house-exterior-with-fresh-pain.jpg",
    description: "Historic home restoration with period-appropriate color scheme.",
  },
  {
    id: 3,
    title: "Office Space Renovation",
    category: "Commercial",
    image: "/modern-office-space-with-painted-walls-and-profess.jpg",
    description: "Corporate office painting with modern, professional aesthetics.",
  },
  {
    id: 4,
    title: "Luxury Bedroom Suite",
    category: "Interior",
    image: "/elegant-bedroom-with-painted-accent-wall-and-premi.jpg",
    description: "Master bedroom with custom color consultation and premium finishes.",
  },
  {
    id: 5,
    title: "Colonial Home Refresh",
    category: "Exterior",
    image: "/colonial-style-house-with-fresh-exterior-paint-job.jpg",
    description: "Full exterior painting with weather-resistant premium paints.",
  },
  {
    id: 6,
    title: "Retail Store Design",
    category: "Commercial",
    image: "/modern-retail-store-interior-with-painted-walls-an.jpg",
    description: "Retail space transformation to enhance customer experience.",
  },
]

const categories = ["All", "Interior", "Exterior", "Commercial"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section ref={sectionRef} id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className={`text-center space-y-4 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-balance">
            Our <span className="text-primary font-medium">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explore our recent projects and see the quality craftsmanship that sets us apart.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full btn-interactive"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group card-hover overflow-hidden border-0 bg-card/50 backdrop-blur-sm ${
                isVisible ? `animate-scale-in animate-delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
