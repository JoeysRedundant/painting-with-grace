"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BookEstimate() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    preferredDate: "",
    preferredTime: "",
    projectDetails: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-0 bg-card/50 backdrop-blur-sm text-center animate-scale-in">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-serif font-light mb-4">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We've received your estimate request. Our team will contact you within 24 hours to schedule your free
                consultation.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>What's next?</strong>
                  <br />• We'll call you to confirm your appointment
                  <br />• Our expert will visit your property for assessment
                  <br />• You'll receive a detailed written estimate
                </p>
                <Link href="/">
                  <Button className="btn-interactive btn-float">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-balance">
            Book Your <span className="text-primary font-medium">Free Estimate</span>
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Schedule a convenient time for our painting experts to visit your property and provide a detailed,
            no-obligation estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover animate-fade-in-left">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-serif font-light">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Schedule Your Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
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

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background/50 focus:scale-[1.02] transition-transform"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 focus:scale-[1.02] transition-transform"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-foreground">
                        Project Type *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                        <SelectTrigger className="bg-background/50 focus:scale-[1.02] transition-transform">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interior">Interior Painting</SelectItem>
                          <SelectItem value="exterior">Exterior Painting</SelectItem>
                          <SelectItem value="both">Interior & Exterior</SelectItem>
                          <SelectItem value="commercial">Commercial Project</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-foreground">
                      Property Address *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street address, City, State, ZIP"
                      className="bg-background/50 focus:scale-[1.02] transition-transform"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="preferredDate" className="text-sm font-medium text-foreground">
                        Preferred Date
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="bg-background/50 focus:scale-[1.02] transition-transform"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="preferredTime" className="text-sm font-medium text-foreground">
                        Preferred Time
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                        <SelectTrigger className="bg-background/50 focus:scale-[1.02] transition-transform">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                          <SelectItem value="flexible">I'm Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectDetails" className="text-sm font-medium text-foreground">
                      Project Details
                    </label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project: rooms to paint, colors, timeline, special requirements..."
                      className="bg-background/50 focus:scale-[1.02] transition-transform"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-interactive btn-float">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule My Free Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in-right animate-delay-200">
            <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Need Help?</h3>
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                  </div>
                </div>
                <a
                  href="tel:(203) 000-4706"
                  className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  (203) 000-4706
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">What to Expect</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 30-45 minute property assessment</li>
                  <li>• Detailed written estimate within 24 hours</li>
                  <li>• Color consultation and recommendations</li>
                  <li>• Timeline and project planning</li>
                  <li>• No obligation or pressure</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link href="/">
                <Button variant="outline" className="btn-interactive bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
