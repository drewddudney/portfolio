import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Music, Camera, Sparkles, Ticket } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our range of premium photo booth experiences for your next event
          </p>
        </div>
      </section>

      {/* 360 Photo Booth */}
      <section id="360-booth" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240413_222149746-ltAHwM9zRq7qK5Z069zX7nFHDyOp9n.MP4"
                title="360 Photo Booth Experience"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">360 Photo Booth</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our signature 360° video booth creates stunning slow-motion videos that capture your guests from every
                angle. Perfect for creating viral-worthy content that your guests will love to share.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Slow-Motion Video Capture</h3>
                    <p className="text-muted-foreground">Cinematic slow-motion videos that make every moment magical</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Instant Social Media Sharing</h3>
                    <p className="text-muted-foreground">
                      Videos delivered instantly to guests' phones for easy sharing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Custom Overlays and Song</h3>
                    <p className="text-muted-foreground">
                      We add custom overlays and a background song of your choice to all videos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Separate iPad Sharing Station</h3>
                    <p className="text-muted-foreground">
                      Helps more clients use the booth as it makes the line move faster
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/book-now">Book This Booth</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Photo Booth */}
      <section id="digital-booth" className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Digital Photo Booth</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our modern digital photo booth creates high-quality photos with fun props and backdrops. Perfect for
                weddings, corporate events, and parties of all sizes.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Unlimited Photos</h3>
                    <p className="text-muted-foreground">Take as many photos as you want throughout your event</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Digital Gallery</h3>
                    <p className="text-muted-foreground">Access all photos from your event in an online gallery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Backdrop</h3>
                    <p className="text-muted-foreground">
                      Different backdrop options available to suit your event theme
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">GIF Option</h3>
                    <p className="text-muted-foreground">Create animated GIFs for more fun options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Setup & Breakdown</h3>
                    <p className="text-muted-foreground">We handle all the setup and breakdown for your convenience</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/book-now">Book This Booth</Link>
              </Button>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden order-1 md:order-2">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3661-T30LYCWwCS3pBSDrlLXPelvlGJ375E.mp4"
                title="Digital Photo Booth Experience"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Add-ons & Enhancements</h2>
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
                  around it leading to the 360 PhotoBooth. This works best if the booth has its own dedicated area.
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

