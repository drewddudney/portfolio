"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MessageSquare, Linkedin } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactItems = [
    { icon: Mail, title: "Email", content: "drewddudney@gmail.com", href: "mailto:drewddudney@gmail.com" },
    { icon: Phone, title: "Phone", content: "(512) 797-4529", href: "tel:+15127974529" },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me on LinkedIn!",
      href: "https://www.linkedin.com/in/drewddudney/",
    },
    { icon: MessageSquare, title: "Let's Connect", content: "Open to new opportunities and collaborations" },
  ]

  return (
    <section id="contact" className="py-20 bg-primary/5" ref={ref}>
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have a question or want to connect? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="flex flex-col md:flex-row items-center text-center md:text-left gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.title === "LinkedIn" ? "_blank" : undefined}
                      rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-lg text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

