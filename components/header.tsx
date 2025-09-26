"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-serif font-semibold text-foreground">Painting with Grace CT</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:(203) 000-4706"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              (203) 000-4706
            </a>
            <Link href="/book-estimate">
              <Button className="btn-interactive btn-float">Free Estimate</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden hover:scale-110 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:(203) 000-4706"
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (203) 000-4706
                </a>
                <Link href="/book-estimate">
                  <Button className="w-full btn-interactive btn-float">Free Estimate</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
