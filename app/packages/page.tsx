import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Music, Camera, Sparkles, Ticket } from "lucide-react"

export default function PackagesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Photo Booth Packages</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Choose the perfect package for your event</p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Digital Photo Booth Package */}
            <div className="bg-card border rounded-lg overflow-hidden shadow-md flex flex-col">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1653_Original.jpg-jTwatRX0TH2idKZSgCOphAEyFON71L.jpeg"
                  alt="Digital Photo Booth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Digital Photo Booth</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$100</span>
                  <span className="text-muted-foreground ml-2">/ hr</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unlimited Photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Digital Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>White Backdrop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Setup & Breakdown</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full">
                  <Link href="/book-now?package=digital-booth">Book Now</Link>
                </Button>
              </div>
            </div>

            {/* 360 Photo Booth - Most Popular */}
            <div className="bg-card border-2 border-secondary rounded-lg overflow-hidden shadow-lg flex flex-col relative transform md:scale-105 md:-translate-y-2">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium z-10">
                Most Popular
              </div>
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1993_Original-OdTtgeT1V2ncqiKlOJfGoKgC5JTz5Z.jpeg"
                  alt="360 Photo Booth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">360 Photo Booth</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$200</span>
                  <span className="text-muted-foreground ml-2">/ hr</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>360 PhotoBooth that fits up to 5 People</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>iPad Sharing Station</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom Overlay and Background Song of your Choice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>1-2 Attendants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Digital Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Setup & Breakdown</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full" variant="secondary">
                  <Link href="/book-now?package=360-booth">Book Now</Link>
                </Button>
              </div>
            </div>

            {/* Bundle Package */}
            <div className="bg-card border rounded-lg overflow-hidden shadow-md flex flex-col">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1221_Original.jpg-fF2lYv2F03NwhMWCrwLLAts8dtl3AX.jpeg"
                  alt="Bundle Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Bundle Package</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$280</span>
                  <span className="text-muted-foreground ml-2">/ hr</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Both Digital & 360 Booths</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unlimited Photos & Videos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Digital Gallery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 Attendants</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full">
                  <Link href="/book-now?package=bundle">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-ons & Enhancements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your photo booth experience with these popular add-ons
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Red Carpet & Stanchions */}
            <div className="bg-card rounded-lg p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Ticket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Red Carpet & Stanchions</h3>
                <p className="text-muted-foreground mb-4">
                  Want a fancier look for the 360 photobooth area? Include this package for a red carpet with stanchions
                  around it leading to the 360 PhotoBooth. This works best if the booth has it's own dedicated area.
                </p>
              </div>
            </div>

            {/* Props */}
            <div className="bg-card rounded-lg p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Props!</h3>
                <p className="text-muted-foreground mb-4">
                  Our most popular add-on. This includes all of our props and a prop table. Our prop collection contains
                  fake money to throw, various signs, glasses, bubble guns, and more!
                </p>
              </div>
            </div>

            {/* Smoke & Lighting */}
            <div className="bg-card rounded-lg p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Smoke & Lighting!</h3>
                <p className="text-muted-foreground mb-4">
                  Planning on being in the dark? This add-on includes a smoke machine to create a slight foggy area for
                  laser lighting to show through the backgrounds of your videos. Some extra lighting such as LED poles
                  are included in this as well.
                </p>
              </div>
            </div>

            {/* Music */}
            <div className="bg-card rounded-lg p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Music!</h3>
                <p className="text-muted-foreground mb-4">
                  We have found that people move a little better with music. This add-on includes 2 Big Speakers to play
                  music around the booth area. It does get a little awkward when you're trying to dance on the booth
                  with no background music. This add-on requires for you, the customer, to send a list of songs for a
                  playlist, we are a photobooth company and not DJs! :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Our Booths in Action Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Link href="/gallery" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-3xl font-bold mb-4">See Our Booths in Action</h2>
            </Link>
            <p className="text-lg max-w-2xl mx-auto">
              Check out some of our recent events and see the magic for yourself
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/export_1711233084202-wGffEIrTVwbtkPi3xwuedpUmKpOWkU.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3662-dFH7o6XJG8Amk6LllhAC4PkmgBRqIE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book now to secure your date and create amazing memories</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

