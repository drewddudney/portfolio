"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, PenToolIcon as Tool, Monitor } from "lucide-react"
import StaggeredReveal from "./StaggeredReveal"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python (NumPy, Pandas, Matplotlib, Seaborn, Plotly, BeautifulSoup)", "SQL", "C++"],
    },
    {
      name: "Tools & Frameworks",
      icon: <Tool className="h-6 w-6" />,
      skills: ["Power BI", "GitHub", "Jira", "Autotask", "Code Composer Studio", "SolidWorks"],
    },
    {
      name: "Software",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["SS&C/Advent APX", "Axys", "MATLAB", "LabVIEW", "Revit", "Slack", "Teams"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-primary/5" ref={ref}>
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            My technical toolkit includes programming languages, data analysis tools, and specialized software.
          </p>
        </div>

        <StaggeredReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className="p-3 rounded-lg border bg-card hover:bg-card/80 transition-colors"
                    >
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </StaggeredReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-6 rounded-xl bg-card border shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Data Analytics Proficiency
          </h3>
          <p className="text-muted-foreground">
            I specialize in data validation, analysis, and visualization using Python's data science stack and SQL. My
            experience spans from financial data analysis to predictive modeling, with a strong focus on ensuring data
            integrity and generating actionable insights.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

