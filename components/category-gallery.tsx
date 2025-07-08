"use client"

import { Gem, Watch, Palette, Scissors, Gamepad2, GlassesIcon as Sunglasses, Sparkles } from "lucide-react"

export default function CategoryGallery() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fredoka" style={{ color: "#2F2F2F" }}>
            Product Categories
          </h2>
          <p className="text-lg" style={{ color: "#6F6F6F" }}>
            Explore our carefully curated collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Jewellery", icon: Gem, color: "#E06E5A" },
            { name: "Watches for Men", icon: Watch, color: "#A9C5A0" },
            { name: "Makeup", icon: Palette, color: "#F2D16D" },
            { name: "Hair Clips", icon: Scissors, color: "#E06E5A" },
            { name: "Toys", icon: Gamepad2, color: "#A9C5A0" },
            { name: "Sunglasses", icon: Sunglasses, color: "#F2D16D" },
            { name: "Nails", icon: Sparkles, color: "#E06E5A" },
            { name: "Watches for Ladies", icon: Watch, color: "#A9C5A0" },
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ border: "1px solid #E0DED9" }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: category.color + "20" }}
                >
                  <category.icon size={32} style={{ color: category.color }} />
                </div>
                <h3 className="font-semibold text-sm" style={{ color: "#2F2F2F" }}>
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
