import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const logoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8653%20%281%29.PNG-Uhys4w84IAg3mE4ausKkhaUBTUaWhX.png"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.austin360photobooth.com"),
  title: "Austin 360 PhotoBooth | Premium Photo & Video Booth Rentals in Austin, TX",
  description:
    "Experience the ultimate photo and video booth rentals in Austin, TX. Our 360 photo booths, digital photo booths, and video booths create unforgettable memories for weddings, corporate events, and parties.",
  keywords: [
    "360 photo booth",
    "photo booth rental",
    "video booth",
    "Austin photo booth",
    "wedding photo booth",
    "corporate event photo booth",
    "party photo booth",
    "360 video booth",
    "digital photo booth",
    "Austin event rentals",
    "Round Rock photo booth",
    "Georgetown photo booth",
    "San Marcos photo booth",
    "Cedar Park photo booth",
    "Pflugerville photo booth",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.austin360photobooth.com",
    siteName: "Austin 360 PhotoBooth",
    title: "Austin 360 PhotoBooth | Capture Magic at Your Event",
    description:
      "Experience unforgettable moments with our 360 photo booths and video booths in Austin, TX and surrounding areas.",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "Austin 360 PhotoBooth Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin 360 PhotoBooth | Capture Magic at Your Event",
    description:
      "Create lasting memories with our 360 photo booths and video booths in Austin, TX and surrounding areas.",
    images: [logoUrl],
  },
  icons: {
    icon: [{ url: logoUrl, sizes: "any", type: "image/png" }],
    apple: [{ url: logoUrl, sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="canonical" href="https://www.austin360photobooth.com" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta property="og:image" content={logoUrl} />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Austin 360 PhotoBooth",
              image: logoUrl,
              "@id": "https://www.austin360photobooth.com",
              url: "https://www.austin360photobooth.com",
              telephone: "+15125551234", // Replace with your actual phone number
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St", // Replace with your actual address
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "78701", // Replace with your actual zip code
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.2672, // Replace with your actual latitude
                longitude: -97.7431, // Replace with your actual longitude
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/austin360photobooth", // Replace with your actual Facebook URL
                "https://www.instagram.com/austin360photobooth", // Replace with your actual Instagram URL
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'