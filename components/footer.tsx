import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8653%20%281%29.PNG-Uhys4w84IAg3mE4ausKkhaUBTUaWhX.png"
                alt="Austin 360 PhotoBooth Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-bold text-lg">Austin 360 PhotoBooth</span>
            </div>
            <p className="mb-4">
              Providing premium photo booth experiences for weddings, corporate events, and parties in Austin, Texas.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/austin360photobooth/?utm_source=ig_embed&ig_rid=10f47c4c-25e6-40c1-9511-5e851910ed42"
                className="hover:text-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <Link href="mailto:austin360photobooth@gmail.com" className="hover:underline">
                  austin360photobooth@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
              <Link href="/packages" className="hover:underline">
                Packages
              </Link>
              <Link href="/book-now" className="hover:underline">
                Book Now
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Austin 360 PhotoBooth. All rights reserved.</p>
          <p className="mt-2 text-xs">
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

