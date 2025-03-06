"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-xl text-muted-foreground">Bridging the gap between data and actionable insights</p>
          </div>

          <div className="space-y-6">
            <motion.p variants={variants} className="text-lg text-muted-foreground">
              As an aspiring Data Analyst with a solid foundation in Electronic Systems Engineering Technology, I bring
              a unique blend of technical expertise and analytical skills to the table. My journey in the world of data
              has been driven by a passion for uncovering meaningful patterns and translating complex information into
              clear, actionable insights.
            </motion.p>
            <motion.p variants={variants} className="text-lg text-muted-foreground">
              With a keen eye for detail and a strong background in data validation and quality assurance, I've honed my
              skills in ensuring data integrity across various projects. My experience spans from rigorous financial
              reporting to enhancing system functionality, always with a focus on delivering accurate and reliable
              results.
            </motion.p>
            <motion.p variants={variants} className="text-lg text-muted-foreground">
              I'm excited about the potential of data to drive informed decision-making and solve complex business
              challenges. As I continue to grow in this field, I'm eager to apply my skills in data manipulation,
              visualization, and statistical analysis to contribute meaningfully to data-driven strategies and
              solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

