"use client"

import { useEffect, useRef } from "react"
import "./styles.css"

export default function BookNowPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const setIframeHeight = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${window.innerHeight}px`
      }
    }

    // Set initial height
    setIframeHeight()

    // Update height on window resize
    window.addEventListener("resize", setIframeHeight)

    return () => {
      window.removeEventListener("resize", setIframeHeight)
    }
  }, [])

  return (
    <div className="book-now-page">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Book Your Photo Booth</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below to check availability and book your photo booth experience
          </p>
        </div>
      </section>

      {/* Dubsado Form */}
      <section className="form-section">
        <div className="form-container">
          <iframe
            ref={iframeRef}
            src="https://hello.dubsado.com/public/form/view/661f089c9610f7003ae97577"
            style={{
              width: "100%",
              border: "none",
              overflow: "hidden",
            }}
          />
        </div>
      </section>
    </div>
  )
}

