import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Painting with Grace CT</h3>
            <p className="text-background/80 leading-relaxed">
              Connecticut's trusted painting professionals, dedicated to transforming your space with exceptional
              craftsmanship and attention to detail.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-background/80">(203) 000-4706</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-background/80">info@paintingwithgracect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-background/80">Serving all of Connecticut</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-1 text-background/80">
              <li>Residential Interior Painting</li>
              <li>Residential Exterior Painting</li>
              <li>Commercial Painting</li>
              <li>Color Consultation</li>
              <li>Surface Preparation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">© 2025 Painting with Grace CT. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  )
}
