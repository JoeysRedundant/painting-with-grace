"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Hartford, CT",
    rating: 5,
    text: "Absolutely exceptional work! The team was professional, punctual, and the quality exceeded our expectations. Our home looks brand new.",
    project: "Whole House Interior",
  },
  {
    name: "Michael Chen",
    location: "New Haven, CT",
    rating: 5,
    text: "Outstanding attention to detail and customer service. They helped us choose the perfect colors and the finish is flawless.",
    project: "Kitchen & Living Room",
  },
  {
    name: "Lisa Rodriguez",
    location: "Stamford, CT",
    rating: 5,
    text: "Professional, reliable, and incredibly skilled. They transformed our office space and stayed within budget and timeline.",
    project: "Commercial Office",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-balance">
            What Our <span className="text-primary font-medium">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
