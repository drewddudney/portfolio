"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/placeholder.svg")', // Replace with your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

