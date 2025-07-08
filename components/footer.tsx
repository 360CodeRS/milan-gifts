"use client"

import { Gift, Phone, MessageCircle, Facebook, Instagram, Music } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: "#2F2F2F" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E06E5A" }}
              >
                <Gift className="text-white" size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-fredoka">Milan Gifts</span>
                <p className="text-sm" style={{ color: "#A9C5A0" }}>
                  Something for everyone
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your trusted destination for the perfect gift. From jewelry to accessories, we help you celebrate every
              special moment.
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: "#A9C5A0" }} />
                <span className="text-gray-400">+65 8968 8896</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} style={{ color: "#A9C5A0" }} />
                <span className="text-gray-400">WhatsApp</span>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: Facebook, color: "#1877F2" },
                { icon: Instagram, color: "#E4405F" },
                { icon: Music, color: "#000000" },
                { icon: Music, color: "#000000" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: social.color }}
                >
                  <social.icon size={18} className="text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 text-center" style={{ borderColor: "#4F4F4F" }}>
          <p className="text-gray-500">© 2024 Milan Gifts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
