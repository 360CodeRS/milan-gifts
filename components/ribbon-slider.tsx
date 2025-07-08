"use client";

import React from "react";
import {
  Gem,
  Watch,
  Palette,
  Gamepad2,
  Glasses,
  Gift,
  Star as LucideStar,
  Crown,
} from "lucide-react";

const categories = [
  { name: "Jewelry", icon: Gem, color: "#FFD700" },
  { name: "Watches", icon: Watch, color: "#FF6B6B" },
  { name: "Makeup", icon: Palette, color: "#4ECDC4" },
  { name: "Toys", icon: Gamepad2, color: "#45B7D1" },
  { name: "Sunglasses", icon: Glasses, color: "#96CEB4" },
  { name: "Gift Sets", icon: Gift, color: "#FFEAA7" },
  { name: "Accessories", icon: LucideStar, color: "#DDA0DD" },
  { name: "Boutique", icon: Crown, color: "#98D8C8" },
];

const tripleCategories = [...categories, ...categories, ...categories];

export default function RibbonSlider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50">
      <div className="relative w-full h-10 sm:h-12 md:h-14 lg:h-16 transition-all duration-300">
        {/* Ribbon */}
        <div
          className="relative w-full h-full shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(239, 68, 68, 0.92), rgba(244, 114, 114, 0.92) 50%, rgba(220, 38, 38, 0.92))",
            clipPath: "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 6% 50%)",
          }}
        >
          {/* Left Fold */}
          <div
            className="absolute left-0 top-0 h-full w-4"
            style={{
              clipPath: "polygon(0 0, 6% 50%, 0 100%)",
              background: "linear-gradient(to right, rgba(120, 20, 20, 0.3), transparent)",
            }}
          />

          {/* Right Fold */}
          <div
            className="absolute right-0 top-0 h-full w-4"
            style={{
              clipPath: "polygon(94% 0, 100% 50%, 94% 100%)",
              background: "linear-gradient(to left, rgba(120, 20, 20, 0.3), transparent)",
            }}
          />

          {/* Top Edge */}
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent, #fca5a5, transparent)",
            }}
          />

          {/* Bottom Edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 opacity-40"
            style={{
              background: "linear-gradient(90deg, transparent, #991b1b, transparent)",
            }}
          />

          {/* Category Items */}
          <div className="relative z-10 flex items-center justify-center h-full overflow-hidden">
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
                        className="group-hover:rotate-12 drop-shadow-lg flex-shrink-0"
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
                    <LucideStar
                      size={8}
                      className="text-yellow-300 animate-pulse drop-shadow-sm"
                      fill="currentColor"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Ribbon Shadow */}
          <div
            className="absolute inset-0 translate-y-1 -z-10"
            style={{
              background: "linear-gradient(135deg, rgba(120, 10, 10, 0.6), rgba(60, 5, 5, 0.5))",
              clipPath: "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 6% 50%)",
              filter: "blur(2px)",
              opacity: 0.5,
            }}
          />
        </div>
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
    </div>
  );
}
