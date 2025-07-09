"use client";

import Image from "next/image";
import { Gift } from "lucide-react";
import { CiShop } from "react-icons/ci";
import RibbonSlider from "./ribbon-slider";

export default function Hero() {
  return (
    <section
    id="home"
    className="relative z-0 min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#fdf7f4]"
  >
  
      {/* Background Image using next/image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full min-h-[90vh] md:min-h-screen">
          <Image
            src="/assets/hero.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Text and Button */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-3 sm:px-4">
        <div className="mb-3 sm:mb-4">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-xl backdrop-blur-sm"
            style={{ backgroundColor: "rgba(224, 110, 90, 0.9)" }}
          >
            <Gift className="text-white" size={28} />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 font-fredoka text-white drop-shadow-lg leading-tight">
          Welcome to Milan Gifts
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-medium text-white drop-shadow-md">
          Something for everyone
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-white/90 drop-shadow-sm">
          Discover the perfect gift for every occasion. From elegant jewellery to trendy accessories, we have everything
          you need to make someone smile.
        </p>

        <button
          className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm sm:text-base bg-[rgba(224,110,90,0.9)] hover:bg-[rgba(200,88,67,0.9)]"
          onClick={() => {
            const storesSection = document.getElementById("stores");
            if (storesSection) {
              const navHeight = 120;
              const targetPosition = storesSection.offsetTop - navHeight;
              window.scrollTo({ top: targetPosition, behavior: "smooth" });
            }
          }}
        >
          <CiShop size={20} className="mr-2 text-white" strokeWidth={2} />
          Explore Our Stores
        </button>
      </div>

      {/* Bottom Ribbon Slider */}
      <div className="absolute bottom-10 left-0 right-0">
        <RibbonSlider />
      </div>
    </section>
  );
}
