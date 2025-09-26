"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Paintbrush } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-balance leading-tight">
                Transform your space with <span className="text-primary font-medium">exceptional</span> painting
                craftsmanship
              </h1>
              <p
                className={`text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}
              >
                We bring your vision to life with meticulous attention to detail, premium materials, and a commitment to
                excellence that has made us Connecticut's trusted painting professionals.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${isVisible ? "animate-fade-in-left animate-delay-300" : "opacity-0"}`}
            >
              <Link href="/book-estimate">
                <Button size="lg" className="group btn-interactive btn-float">
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="btn-interactive bg-transparent"
                onClick={() => {
                  const element = document.getElementById("gallery")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Our Work
              </Button>
            </div>

            <div
              className={`flex items-center space-x-8 pt-4 ${isVisible ? "animate-fade-in-left animate-delay-400" : "opacity-0"}`}
            >
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-fade-in-right animate-delay-200" : "opacity-0"}`}>
            <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
              <img
                src="/professional-painter-working-on-interior-wall-with.jpg"
                alt="Professional painter working on interior wall"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Paintbrush className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Premium Quality</div>
                  <div className="text-sm text-muted-foreground">Guaranteed Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
