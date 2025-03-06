"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, X, Menu } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import ParticleBackground from "./ParticleBackground"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const navItems = ["About", "Experience", "Education", "Skills", "Projects", "Contact"]

  return (
    <>
      <ParticleBackground />
      <section className="relative min-h-screen w-full bg-gradient-to-b from-primary/10 to-background flex items-center justify-center overflow-hidden">
        <div className="container max-w-6xl px-4 md:px-6 relative z-10">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={["Drew Dudney", 2000, "Data Analyst", 2000, "Problem Solver", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Aspiring Data Analyst
            </motion.h2>
            <motion.div
              className="max-w-xl mx-auto mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground">
                Specialized in data validation, analysis, and visualization with expertise in Python, SQL, and data
                analytics.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors w-full sm:w-auto"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>

        {/* Navigation */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
          }`}
        >
          <div className="container max-w-6xl px-4 md:px-6 mx-auto">
            <div className="flex items-center justify-between">
              <a href="#" className="text-xl font-bold">
                Drew Dudney
              </a>
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <button
                className="md:hidden z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background z-40 flex items-center justify-center"
            >
              <nav className="flex flex-col items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-medium hover:text-primary transition-colors"
                    onClick={handleNavClick}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

