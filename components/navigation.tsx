"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const leftLinks = [
    { name: "HOME", href: "/" },
    { name: "OUR STORES", href: "/stores" }
  ]
  const rightLinks = [
    { name: "SOCIAL WALL", href: "/social" },
    { name: "CATEGORIES", href: "/categories" }
  ]

  return (
    <>
      {/* Desktop Navigation - Reduced height */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center py-1.5 px-4 lg:px-6">
          
          {/* Left Links */}
          <div className="absolute left-2 lg:left-4 flex gap-x-2 lg:gap-x-4 font-medium text-gray-800 text-xs lg:text-sm">
            {leftLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-1.5 lg:px-2 py-1 hover:text-gray-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center Logo - Compact */}
          <div className="flex flex-col items-center select-none cursor-default leading-none">
            <Link
              href="/"
              className="text-lg lg:text-xl font-script tracking-wide hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2C3643" }}
            >
              Milan
            </Link>
            <Link
              href="/"
              className="text-lg lg:text-xl font-script tracking-wide hover:opacity-80 transition-opacity -mt-0.5"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2C3643" }}
            >
              Gifts
            </Link>
          </div>

          {/* Right Links */}
          <div className="absolute right-2 lg:right-4 flex gap-x-2 lg:gap-x-4 font-medium text-gray-800 text-xs lg:text-sm">
            {rightLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-1.5 lg:px-2 py-1 hover:text-gray-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Compact */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="px-3 py-1.5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col select-none leading-none">
            <Link
              href="/"
              className="text-base font-script tracking-wide hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2C3643" }}
            >
              Milan
            </Link>
            <Link
              href="/"
              className="text-base font-script tracking-wide hover:opacity-80 transition-opacity -mt-0.5"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2C3643" }}
            >
              Gifts
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-1.5 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span className={cn("block h-0.5 w-full bg-current transition-all duration-300", isOpen && "rotate-45 translate-y-1")} />
              <span className={cn("block h-0.5 w-full bg-current transition-all duration-300", isOpen && "opacity-0")} />
              <span className={cn("block h-0.5 w-full bg-current transition-all duration-300", isOpen && "-rotate-45 -translate-y-1")} />
            </div>
          </button>
        </div>

        {/* Mobile Drawer - Compact */}
        <div className={cn(
          "bg-white/90 backdrop-blur-md border-t border-white/20 transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-3 py-2 space-y-0.5 font-medium text-gray-800 text-sm">
            {[...leftLinks, ...rightLinks].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2 rounded hover:bg-white/50 hover:text-gray-600 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Minimal Body Padding */}
      <div className="h-10 md:h-11" />
    </>
  )
}
