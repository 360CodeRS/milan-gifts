"use client"

import React from "react"
import {
  Gem, Watch, Palette, Gamepad2, Glasses, Gift,
  Star, Sparkles, Heart, Crown
} from "lucide-react"

export default function CategorySlider() {
  const categories = [
    { name: "Jewelry", icon: Gem, color: "#FFD700" },
    { name: "Watches", icon: Watch, color: "#FF6B6B" },
    { name: "Makeup", icon: Palette, color: "#4ECDC4" },
    { name: "Toys", icon: Gamepad2, color: "#45B7D1" },
    { name: "Sunglasses", icon: Glasses, color: "#96CEB4" },
    { name: "Gift Sets", icon: Gift, color: "#FFEAA7" },
    { name: "Accessories", icon: Star, color: "#DDA0DD" },
    { name: "Boutique", icon: Crown, color: "#98D8C8" },
  ]

  const tripleCategories = [...categories, ...categories, ...categories]

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden bg-gradient-to-br from-red-50 to-pink-50 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
      {/* Subtle background dots */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' ...")`,
        }}
      />

      {/* Main ribbon container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-10 sm:h-12 md:h-14 lg:h-16 transform -rotate-1 sm:-rotate-2 transition-all duration-300">
          {/* Ribbon shape */}
          <div
            className="relative w-full h-full shadow-lg"
            style={{
              background: "linear-gradient(135deg, #F87171, #EF4444 50%, #DC2626)",
              clipPath: "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 6% 50%)",
            }}
          >
            {/* Left fold */}
            <div
              className="absolute left-0 top-0 h-full w-3 sm:w-4 md:w-5 lg:w-6"
              style={{
                clipPath: "polygon(0 0, 6% 50%, 0 100%)",
                background: "linear-gradient(to right, rgba(0,0,0,0.3), transparent)",
                zIndex: 1,
              }}
            />

            {/* Right fold */}
            <div
              className="absolute right-0 top-0 h-full w-3 sm:w-4 md:w-5 lg:w-6"
              style={{
                clipPath: "polygon(94% 0, 100% 50%, 94% 100%)",
                background: "linear-gradient(to left, rgba(0,0,0,0.3), transparent)",
                zIndex: 1,
              }}
            />

            {/* Top light edge */}
            <div
              className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 md:h-2 opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent, #FCA5A5, transparent)",
              }}
            />

            {/* Bottom dark edge */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 md:h-2 opacity-50"
              style={{
                background: "linear-gradient(90deg, transparent, #7F1D1D, transparent)",
              }}
            />

            {/* Scrolling items */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div
                className="flex animate-scroll whitespace-nowrap items-center"
                style={{ width: "max-content", willChange: "transform" }}
              >
                {tripleCategories.map((category, index) => (
                  <React.Fragment key={`${category.name}-${index}`}>
                    <div className="inline-flex items-center mx-2 sm:mx-3 md:mx-4 group cursor-pointer">
                      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 hover:scale-105 transition-all duration-300">
                        <category.icon
                          size={14}
                          className="group-hover:rotate-12 drop-shadow-lg flex-shrink-0 sm:w-4 sm:h-4 md:w-5 md:h-5"
                          style={{ color: category.color }}
                        />
                        <span
                          className="text-xs sm:text-sm md:text-base font-bold text-white drop-shadow"
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                          }}
                        >
                          {category.name}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center mx-0.5 sm:mx-1 md:mx-2">
                      <Star 
                        size={8} 
                        className="text-yellow-300 animate-pulse drop-shadow-sm sm:w-3 sm:h-3 md:w-3 md:h-3" 
                        fill="currentColor" 
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Ribbon shadow */}
          <div
            className="absolute inset-0 translate-y-1 sm:translate-y-1.5 md:translate-y-2 -z-10"
            style={{
              background: "linear-gradient(135deg, #7F1D1D, #450A0A)",
              clipPath: "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 6% 50%)",
              filter: "blur(1px) sm:blur(1.5px) md:blur(2px)",
              opacity: 0.5,
            }}
          />
        </div>
      </div>

      {/* Decorative sparkles - Responsive positioning */}
      <div className="absolute top-3 sm:top-4 md:top-6 left-1/4 animate-bounce">
        <Sparkles size={16} className="text-pink-300 opacity-70 sm:w-5 sm:h-5 md:w-5 md:h-5" />
      </div>
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-1/4 animate-bounce delay-1000">
        <Sparkles size={14} className="text-yellow-300 opacity-70 sm:w-4 sm:h-4 md:w-4 md:h-4" />
      </div>
      <div className="absolute top-1/3 right-1/6 animate-pulse delay-500">
        <Heart size={12} className="text-red-300 opacity-50 sm:w-4 sm:h-4 md:w-4 md:h-4" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-1/6 animate-pulse delay-700">
        <Gift size={10} className="text-pink-300 opacity-40 sm:w-3 sm:h-3 md:w-3 md:h-3" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}
