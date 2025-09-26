"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Building, Palette, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description:
      "Transform your home with our expert interior and exterior painting services. From single rooms to whole house makeovers.",
    features: ["Interior & Exterior", "Color Consultation", "Surface Preparation", "Premium Paints"],
  },
  {
    icon: Building,
    title: "Commercial Painting",
    description:
      "Professional painting services for offices, retail spaces, and commercial properties with minimal disruption to your business.",
    features: ["Office Buildings", "Retail Spaces", "Warehouses", "Flexible Scheduling"],
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description:
      "Expert guidance in selecting the perfect colors and finishes to complement your space and personal style.",
    features: ["Color Matching", "Trend Analysis", "Lighting Considerations", "Sample Testing"],
  },
  {
    icon: Shield,
    title: "Surface Preparation",
    description:
      "Meticulous preparation ensures lasting results. We handle everything from cleaning to priming for optimal paint adhesion.",
    features: ["Power Washing", "Sanding & Scraping", "Crack Repair", "Primer Application"],
  },
]

export function Services() {
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

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-balance">
            Our <span className="text-primary font-medium">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            From residential homes to commercial spaces, we deliver exceptional painting services tailored to your
            specific needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group card-hover border-0 bg-card/50 backdrop-blur-sm ${
                isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
