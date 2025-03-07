"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"

const videos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3655-rFnWGsMToy4RIlerdGDEnfmJKwwlQa.mp4",
    title: "360 Photo Booth",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250301_224848841-aJ606io6zsLjylQ0h07udn2BqmlkOf.mp4",
    title: "Book Today!",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240413_220832147%20%281%29-6AzClnoJUhlSFs6Qq7MZFeWj1BFE0m.mp4",
    title: "360 Photo Booth",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/205E31E0-DD35-4B1A-816E-803EB2185945%20%281%29-wORi6apqAulwklOmsGo9Gz3NztQq4C.mp4",
    title: "Book Today!",
  },
]

export default function GalleryPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLVideoElement).play()
          } else {
            ;(entry.target as HTMLVideoElement).pause()
          }
        })
      },
      { threshold: 0.5 },
    )

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">Experience the magic of our photo booths</p>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="py-8 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <Link
            href="https://www.instagram.com/austin360photobooth/?utm_source=ig_embed&ig_rid=10f47c4c-25e6-40c1-9511-5e851910ed42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <Instagram className="w-6 h-6 mr-2" />
            Follow us on Instagram for more amazing moments
          </Link>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                loop
                muted
                playsInline
                className="w-full aspect-[9/16] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

