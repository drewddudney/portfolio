"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeInUp, stagger } from "@/utils/animations"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const { theme } = useTheme()

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240413_190548757%20%281%29-rUSUAinwUQ8YvbWuqtQj3iqOCCTjJ6.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6" variants={fadeInUp}>
            Capture Magic
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
            Experience the next generation of photo booth entertainment
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild size="lg" className="text-lg bg-white text-black hover:bg-white/90">
              <Link href="/book-now">Book Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Sections */}
      <Section
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3917.JPG-8H9UJj0heub90d5GdN0gteei4ZgAZj.jpeg"
        title="360° Photo Experience"
        description="Create stunning slow-motion videos that capture every angle of your special moment"
        align="right"
      />

      <Section
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1653_Original.jpg-jTwatRX0TH2idKZSgCOphAEyFON71L.jpeg"
        title="Premium Setup and Customization"
        description="We do our best to cater to your event with various customization options, ensuring a perfect fit for your special occasion"
        align="left"
      />

      <Section
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1993_Original.jpg-1TalOpRStM7KijmWIaSNoN8fJPbxRC.jpeg"
        title="Efficient Experience"
        description="Our setup is optimized to get people through the lines quickly and deliver their videos instantly, ensuring maximum enjoyment for all guests"
        align="right"
      />

      {/* See Our Booths in Action Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Link href="/gallery" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-3xl font-bold mb-4">See Our Booths in Action</h2>
            </Link>
            <p className="text-lg max-w-2xl mx-auto">
              Check out some of our recent events and see the magic for yourself
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/export_1711233084202-wGffEIrTVwbtkPi3xwuedpUmKpOWkU.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3662-dFH7o6XJG8Amk6LllhAC4PkmgBRqIE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250207_202750771-4c7y7UWHYDpcTEcDoGvH4GrPl8BJU0.MP4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ opacity: 0.7 }}
          />
        </div>

        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Create Memories?</h2>
            <p className="text-xl mb-8">Book your event today and give your guests an unforgettable experience</p>
            <Button asChild size="lg" className="text-lg bg-white text-black hover:bg-white/90">
              <Link href="/book-now">Book Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function Section({
  image,
  title,
  description,
  align,
}: {
  image: string
  title: string
  description: string
  align: "left" | "right"
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${align === "right" ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            style={{
              transform: inView ? "none" : `translateX(${align === "left" ? "-200px" : "200px"})`,
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="relative h-[600px]"
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-3xl" />
          </motion.div>

          <motion.div
            style={{
              transform: inView ? "none" : `translateX(${align === "left" ? "200px" : "-200px"})`,
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={`text-center md:text-left ${align === "right" ? "md:order-first" : ""}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            {mounted && (
              <p className={`text-xl mb-8 ${currentTheme === "dark" ? "text-white" : "text-gray-600"}`}>
                {description}
              </p>
            )}
            <Button asChild size="lg">
              <Link href="/services">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

