"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookingForm() {
  const searchParams = useSearchParams()
  const packageParam = searchParams.get("package")

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedPackage, setSelectedPackage] = useState<string>(packageParam || "")
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventType, setEventType] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [venue, setVenue] = useState("")
  const [addOns, setAddOns] = useState<string[]>([])
  const [referralSource, setReferralSource] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  const handleAddOnChange = (addon: string) => {
    setAddOns((current) => (current.includes(addon) ? current.filter((item) => item !== addon) : [...current, addon]))
  }

  if (formStatus === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Booking Request Received!</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your booking request. We'll review your details and get back to you within 24 hours to confirm
          availability and finalize your booking.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact Information</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Event Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event-date">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-time">Event Time</Label>
              <Input
                id="event-time"
                placeholder="e.g. 6:00 PM - 10:00 PM"
                required
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event-type">Event Type</Label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="graduation">Graduation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Estimated Guest Count</Label>
              <Input
                id="guests"
                type="number"
                required
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="venue">Venue Name & Address</Label>
            <Textarea
              id="venue"
              placeholder="Please provide the full venue address"
              required
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Package Selection</h2>
          <div className="space-y-2">
            <Label>Select a Package</Label>
            <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
              <div className="grid gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="digital-booth" id="digital-booth" />
                  <div>
                    <Label htmlFor="digital-booth" className="font-medium">
                      Digital Photo Booth - $100/hr
                    </Label>
                    <p className="text-sm text-muted-foreground">Digital Photo Booth with unlimited photos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="360-booth" id="360-booth" />
                  <div>
                    <Label htmlFor="360-booth" className="font-medium">
                      360 Photo Booth - $200/hr
                    </Label>
                    <p className="text-sm text-muted-foreground">360 Photo Booth with unlimited videos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="bundle" id="bundle" />
                  <div>
                    <Label htmlFor="bundle" className="font-medium">
                      Bundle Package - $280/hr
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Both Digital & 360 Photo Booths, unlimited photos and videos
                    </p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Add-ons</h2>
          <div className="space-y-2">
            <Label>Select Add-ons (Optional)</Label>
            <div className="grid gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="red-carpet"
                  checked={addOns.includes("red-carpet")}
                  onCheckedChange={() => handleAddOnChange("red-carpet")}
                />
                <div>
                  <Label htmlFor="red-carpet" className="font-medium">
                    Red Carpet & Stanchions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Add a touch of glamour with a red carpet and stanchions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="props"
                  checked={addOns.includes("props")}
                  onCheckedChange={() => handleAddOnChange("props")}
                />
                <div>
                  <Label htmlFor="props" className="font-medium">
                    Props
                  </Label>
                  <p className="text-sm text-muted-foreground">Enhance the fun with our collection of props</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="smoke-lighting"
                  checked={addOns.includes("smoke-lighting")}
                  onCheckedChange={() => handleAddOnChange("smoke-lighting")}
                />
                <div>
                  <Label htmlFor="smoke-lighting" className="font-medium">
                    Smoke & Lighting
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Create a dramatic atmosphere with smoke and special lighting
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="music"
                  checked={addOns.includes("music")}
                  onCheckedChange={() => handleAddOnChange("music")}
                />
                <div>
                  <Label htmlFor="music" className="font-medium">
                    Music
                  </Label>
                  <p className="text-sm text-muted-foreground">Add a soundtrack to your photo booth experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Additional Information</h2>
          <div className="space-y-2">
            <Label htmlFor="add-ons">Additional Requests or Add-ons</Label>
            <Textarea
              id="add-ons"
              placeholder="Let us know if you'd like any add-ons or have special requests"
              value={addOns.join(", ")}
              onChange={(e) =>
                setAddOns(
                  e.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item !== ""),
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referral">How did you hear about us?</Label>
            <Select value={referralSource} onValueChange={setReferralSource}>
              <SelectTrigger id="referral">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="friend">Friend or Family</SelectItem>
                <SelectItem value="event">Saw at an Event</SelectItem>
                <SelectItem value="vendor">Wedding/Event Vendor</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={formStatus === "submitting"}>
          {formStatus === "submitting" ? "Submitting..." : "Submit Booking Request"}
        </Button>
      </form>
    </div>
  )
}

