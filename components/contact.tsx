"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-balance">
            Ready to <span className="text-primary font-medium">Transform</span> Your Space?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Get in touch for a free consultation and estimate. We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left animate-delay-200" : "opacity-0"}`}>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">(203) 000-4706</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@paintingwithgracect.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">Connecticut</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card
            className={`border-0 bg-card/50 backdrop-blur-sm card-hover ${isVisible ? "animate-fade-in-right animate-delay-300" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 focus:scale-[1.02] transition-transform"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 focus:scale-[1.02] transition-transform"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 focus:scale-[1.02] transition-transform"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your painting project..."
                    className="bg-background/50 focus:scale-[1.02] transition-transform"
                  />
                </div>

                <Link href="/book-estimate">
                  <Button type="button" className="w-full btn-interactive btn-float">
                    Get Free Estimate
                  </Button>
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
