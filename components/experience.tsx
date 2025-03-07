"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const experiences = [
    {
      role: "Professional Services Support Specialist",
      company: "CSSI",
      period: "June 2022 – Present",
      highlights: [
        "Spearheaded data validation initiatives, ensuring accuracy across 750+ Jira tickets and bolstering financial reporting integrity.",
        "Conducted in-depth analysis of financial data throughout multiple Agile sprints, significantly enhancing data reliability.",
        "Collaborated with UI/UX teams to optimize user interfaces, resulting in improved client satisfaction and usability.",
        "Expanded the company's standard reporting portfolio by 92%, from 26 to 50 reports, through meticulous SSRS processes.",
        "Facilitated weekly data review meetings, fostering a culture of data-driven decision making across departments.",
      ],
      additionalRoles: [
        {
          title: "Jr. Cloud Support Specialist",
          period: "June 2022 – June 2023",
          description:
            "Provided rapid-response IT support, efficiently managing and resolving client issues through AutoTask.",
        },
        {
          title: "Back-Office Operations Support",
          period: "September 2024 – Present",
          description:
            "Oversaw critical financial reconciliations and streamlined morning data processes to ensure optimal accuracy.",
        },
      ],
    },
    {
      role: "Founder & Event Coordinator",
      company: "Austin 360 PhotoBooth",
      period: "August 2022 - Present",
      highlights: [
        "Launched and manage a successful photo booth rental LLC, overseeing all aspects of business operations.",
        "Developed and implemented efficient systems for client communication, invoicing, and event management.",
        "Consistently deliver high-quality experiences, resulting in positive client feedback and repeat business.",
      ],
    },
    {
      role: "Data Services Intern",
      company: "CSSI",
      period: "June 2021 – August 2021",
      highlights: [
        "Maintained and optimized CRM systems, supporting the sales cycle for key financial projects.",
        "Gained hands-on experience with industry-standard tools including SS&C/Advent APX and Axys.",
        "Contributed to data-driven sales strategies, enhancing the team's ability to target and engage potential clients.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-primary/5" ref={ref}>
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Journey</h2>
          <p className="text-xl text-muted-foreground">
            A track record of data-driven excellence and continuous growth
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-card rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {exp.additionalRoles && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-lg font-semibold mb-2">Additional Responsibilities</h4>
                  {exp.additionalRoles.map((role, idx) => (
                    <div key={idx} className="mb-3">
                      <p className="font-medium">
                        {role.title} <span className="text-muted-foreground">({role.period})</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

