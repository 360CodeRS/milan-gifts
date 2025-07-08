"use client"

import { Gift } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #E06E5A 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #A9C5A0 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg"
            style={{ backgroundColor: "#E06E5A" }}
          >
            <Gift className="text-white" size={28} />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-fredoka" style={{ color: "#2F2F2F" }}>
          Welcome to Milan Gifts
        </h1>

        <p className="text-2xl md:text-3xl mb-8 font-medium" style={{ color: "#E06E5A" }}>
          Something for everyone
        </p>

        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: "#6F6F6F" }}>
          Discover the perfect gift for every occasion. From elegant jewelry to trendy accessories, we have everything
          you need to make someone smile.
        </p>

        <button
          className="px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#E06E5A" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#C85843"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#E06E5A"
          }}
        >
          Explore Our Stores
        </button>
      </div>
    </section>
  )
}
