"use client"

import { Gem, Watch, Palette, Gamepad2, GlassesIcon as Sunglasses, Gift, Star, Sparkles } from "lucide-react"

export default function CategorySlider() {
  return (
    <section className="py-12 overflow-hidden" style={{ backgroundColor: "white" }}>
      <div className="flex animate-scroll whitespace-nowrap">
        {[
          { name: "Jewelry", icon: Gem },
          { name: "Watches", icon: Watch },
          { name: "Makeup", icon: Palette },
          { name: "Toys", icon: Gamepad2 },
          { name: "Sunglasses", icon: Sunglasses },
          { name: "Gift Sets", icon: Gift },
          { name: "Belts", icon: Star },
          { name: "Shoes", icon: Sparkles },
          { name: "Jewelry", icon: Gem },
          { name: "Watches", icon: Watch },
          { name: "Makeup", icon: Palette },
          { name: "Toys", icon: Gamepad2 },
          { name: "Sunglasses", icon: Sunglasses },
          { name: "Gift Sets", icon: Gift },
          { name: "Belts", icon: Star },
          { name: "Shoes", icon: Sparkles },
        ].map((category, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <div
              className="flex items-center gap-3 px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: "#FAF7F2", border: "1px solid #E0DED9" }}
            >
              <category.icon size={24} style={{ color: "#E06E5A" }} />
              <span className="text-lg font-semibold font-fredoka" style={{ color: "#2F2F2F" }}>
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
