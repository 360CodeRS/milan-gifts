"use client"

import { MessageCircle, Mail, Store } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fredoka" style={{ color: "#2F2F2F" }}>
            Get in Touch
          </h2>
          <p className="text-lg" style={{ color: "#6F6F6F" }}>
            Ready to find the perfect gift? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <div
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ border: "2px solid #A9C5A0" }}
          >
            <div
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "#A9C5A0" }}
            >
              <MessageCircle className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#2F2F2F" }}>
              WhatsApp
            </h3>
            <p className="text-sm mb-4" style={{ color: "#6F6F6F" }}>
              Quick responses & instant help
            </p>
            <a href="https://wa.me/6589688896" className="font-semibold hover:underline" style={{ color: "#A9C5A0" }}>
              +65 8968 8896
            </a>
          </div>

          {/* Email */}
          <div
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ border: "2px solid #F2D16D" }}
          >
            <div
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "#F2D16D" }}
            >
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#2F2F2F" }}>
              Email Us
            </h3>
            <p className="text-sm mb-4" style={{ color: "#6F6F6F" }}>
              Detailed inquiries welcome
            </p>
            <a href="mailto:hello@milangifts.sg" className="font-semibold hover:underline" style={{ color: "#F2D16D" }}>
              hello@milangifts.sg
            </a>
          </div>

          {/* Find Store */}
          <div
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ border: "2px solid #E06E5A" }}
          >
            <div
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E06E5A" }}
            >
              <Store className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#2F2F2F" }}>
              Find a Store
            </h3>
            <p className="text-sm mb-4" style={{ color: "#6F6F6F" }}>
              Visit us in person
            </p>
            <span className="font-semibold hover:underline" style={{ color: "#E06E5A" }}>
              3 Locations
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="px-12 py-4 rounded-full font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#E06E5A" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C85843"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E06E5A"
            }}
          >
            Chat with Us Now
          </button>
        </div>
      </div>
    </section>
  )
}
