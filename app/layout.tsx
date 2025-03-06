import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Drew Dudney | Aspiring Data Analyst",
  description:
    "Professional portfolio of Drew Dudney, an aspiring Data Analyst with expertise in data validation, analysis, and visualization using Python, SQL, and advanced analytics tools.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans relative z-10`}>{children}</body>
    </html>
  )
}



import './globals.css'