import Link from "next/link"

export default function Sitemap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-blue-600 hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-blue-600 hover:underline">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/packages" className="text-blue-600 hover:underline">
            Packages
          </Link>
        </li>
        <li>
          <Link href="/book-now" className="text-blue-600 hover:underline">
            Book Now
          </Link>
        </li>
      </ul>
    </div>
  )
}

