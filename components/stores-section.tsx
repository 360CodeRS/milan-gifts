"use client"

import { MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function StoresSection() {
  const stores = [
    {
      address: "96 Serangoon Road",
      landmark: "Near Tekka Place",
      image: "/placeholder.svg?height=300&width=400",
      mapUrl: "https://maps.google.com/?q=96+Serangoon+Road+Singapore",
    },
    {
      address: "244 Serangoon Road",
      landmark: "Near Mustafa",
      image: "/placeholder.svg?height=300&width=400",
      mapUrl: "https://maps.google.com/?q=244+Serangoon+Road+Singapore",
    },
    {
      address: "242 Serangoon Road",
      landmark: "Opposite Masjid Angullia",
      image: "/placeholder.svg?height=300&width=400",
      mapUrl: "https://maps.google.com/?q=242+Serangoon+Road+Singapore",
    },
  ]

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fredoka" style={{ color: "#2F2F2F" }}>
            Our Stores
          </h2>
          <p className="text-lg" style={{ color: "#6F6F6F" }}>
            Visit us at any of our convenient Serangoon Road locations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <a
              key={index}
              href={store.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ border: "1px solid #E0DED9" }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={store.image || "/placeholder.svg"}
                  alt={`Milan Gifts store at ${store.address}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Desktop Hover Overlay */}
                <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                  <div className="text-white text-center">
                    <ExternalLink size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">View on Map</p>
                  </div>
                </div>

                {/* Mobile Indicator */}
                <div className="md:hidden absolute top-4 right-4 bg-white/90 rounded-full p-2">
                  <ExternalLink size={16} style={{ color: "#E06E5A" }} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#A9C5A0" }}>
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#2F2F2F" }}>
                      {store.address}
                    </h3>
                    <p style={{ color: "#6F6F6F" }}>{store.landmark}</p>
                    <p className="md:hidden text-sm mt-2 font-medium" style={{ color: "#E06E5A" }}>
                      Tap to view on map
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
