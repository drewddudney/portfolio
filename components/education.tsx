"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            My educational background has prepared me for a career in technology and data analysis.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">BS in Electronic Systems Engineering Technology</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Minor in Cyber Security</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">Texas A&M University</span>
                  <span className="text-muted-foreground">Graduated May 2022</span>
                </div>
                <p className="text-muted-foreground">
                  Focus: Embedded Systems Design, Programming, Testing & Communication, Network Analysis,
                  Instrumentation & Control Systems
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

