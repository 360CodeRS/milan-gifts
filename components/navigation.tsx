"use client"

import { useState } from "react"
import { Menu, X, Gift } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E06E5A" }}
              >
                <Gift className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold font-fredoka" style={{ color: "#2F2F2F" }}>
                Milan Gifts
              </span>
            </div>
            <div className="flex items-center gap-8">
              {["Home", "Our Stores", "Social Wall", "Categories"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-medium transition-colors hover:underline"
                  style={{ color: "#2F2F2F" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E06E5A" }}
              >
                <Gift className="text-white" size={16} />
              </div>
              <span className="text-lg font-bold font-fredoka" style={{ color: "#2F2F2F" }}>
                Milan Gifts
              </span>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" style={{ color: "#2F2F2F" }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {["Home", "Our Stores", "Social Wall", "Categories"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block font-medium py-2 transition-colors"
                  style={{ color: "#2F2F2F" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
