"use client"

import { MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function StoresSection() {
  const stores = [
    {
      address: "96 Serangoon Road",
      landmark: "Near Tekka Place",
      image: "/shop.png",
      mapUrl: "https://maps.google.com/?q=96+Serangoon+Road+Singapore",
    },
    {
      address: "244 Serangoon Road",
      landmark: "Near Mustafa",
      image: "/shop.png",
      mapUrl: "https://maps.google.com/?q=244+Serangoon+Road+Singapore",
    },
    {
      address: "242 Serangoon Road",
      landmark: "Opposite Masjid Angullia",
      image: "/shop.png",
      mapUrl: "https://maps.google.com/?q=242+Serangoon+Road+Singapore",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] font-fredoka">
            Our Stores
          </h2>
          <p className="text-lg mt-2 text-[#1D3557]/70">
            Visit us at any of our Serangoon Road locations
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E0DED9] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-56 md:h-60">
                <Image
                  src={store.image}
                  alt={`Store at ${store.address}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Desktop Hover Overlay */}
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center"
                >
                  <div className="text-white text-center">
                    <ExternalLink size={28} className="mx-auto mb-1" />
                    <p className="font-medium">View on Map</p>
                  </div>
                </a>

                {/* Mobile & Tablet Map Button */}
                <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#E63946] text-sm font-semibold px-3 py-1.5 rounded-full shadow-md hover:bg-white transition"
                  >
                    <ExternalLink size={14} />
                    View on Map
                  </a>
                </div>
              </div>

              {/* Store Info */}
              <div className="p-6 sm:p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-red-500 shadow-sm flex-shrink-0">
                    <MapPin size={20} className="text-white " />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-[#1D3557] mb-1">
                      {store.address}
                    </h3>
                    <p className="text-[#1D3557]/70 text-sm md:text-base">
                      {store.landmark}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
