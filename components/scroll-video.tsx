"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll } from "framer-motion"

interface ScrollVideoProps {
  src: string
  className?: string
}

export function ScrollVideo({ src, className }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const { scrollY } = useScroll()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.addEventListener("loadedmetadata", () => {
      setVideoDuration(video.duration)
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible || !videoRef.current || !containerRef.current) return

      setIsScrolling(true)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 50)

      const container = containerRef.current
      const video = videoRef.current

      const rect = container.getBoundingClientRect()
      const scrollProgress = 1 - (rect.bottom - window.innerHeight) / (rect.height + window.innerHeight)
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      const isScrollingDown = currentScrollTop > lastScrollTop
      setLastScrollTop(currentScrollTop)

      const targetTime = clampedProgress * videoDuration
      if (isScrollingDown) {
        video.currentTime = targetTime
      } else {
        video.currentTime = videoDuration - targetTime
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible, videoDuration, lastScrollTop])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isScrolling) {
      video.playbackRate = 0.5 // Slow down playback for smoother appearance
    } else {
      video.pause()
    }
  }, [isScrolling])

  return (
    <div ref={containerRef} className={className}>
      <video ref={videoRef} src={src} playsInline muted className="w-full h-full object-cover" />
    </div>
  )
}

