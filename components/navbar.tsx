"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-blue-900 shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8653%20%281%29.PNG-Uhys4w84IAg3mE4ausKkhaUBTUaWhX.png"
                alt="Austin 360 PhotoBooth Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg hidden md:inline-block text-white">Austin 360 PhotoBooth</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-gray-300">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-gray-300">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-gray-300">
            Gallery
          </Link>
          <Link href="/packages" className="text-sm font-medium transition-colors hover:text-gray-300">
            Packages
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant={isScrolled || isMenuOpen ? "default" : "outline"}
            className={cn(
              "hidden md:flex shadow-md hover:shadow-lg transition-all",
              !(isScrolled || isMenuOpen) && "border-white text-white hover:bg-white hover:text-blue-900",
            )}
          >
            <Link href="/book-now">Book Now</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-blue-800"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[65px] z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "bg-blue-900 text-white",
        )}
      >
        <nav className="container flex flex-col gap-6 p-6">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium transition-colors hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-lg font-medium transition-colors hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/packages"
            className="text-lg font-medium transition-colors hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Packages
          </Link>
          <Button
            asChild
            className="w-full mt-4 shadow-md hover:shadow-lg transition-all bg-white text-blue-900 hover:bg-gray-200"
          >
            <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

