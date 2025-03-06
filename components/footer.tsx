"use client"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 border-t bg-background">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold">Drew Dudney</div>
            <p className="text-sm text-muted-foreground">Aspiring Data Analyst</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/drewddudney"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/drewddudney/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:drewddudney@gmail.com"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Drew Dudney. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

