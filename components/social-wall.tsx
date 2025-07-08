"use client"

import { Facebook, Instagram, Music } from "lucide-react"

export default function SocialWall() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fredoka" style={{ color: "#2F2F2F" }}>
            Follow Our Journey
          </h2>
          <p className="text-lg" style={{ color: "#6F6F6F" }}>
            Stay connected for the latest products and behind-the-scenes moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { platform: "Facebook", color: "#1877F2", icon: Facebook },
            { platform: "Instagram", color: "#E4405F", icon: Instagram },
            { platform: "TikTok 1", color: "#000000", icon: Music },
            { platform: "TikTok 2", color: "#000000", icon: Music },
          ].map((social, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ border: "1px solid #E0DED9" }}
            >
              <div
                className="p-4 text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: social.color }}
              >
                <social.icon size={24} />
                <span className="font-semibold">{social.platform}</span>
              </div>
              <div className="p-6">
                <div
                  className="rounded-lg h-40 flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FAF7F2" }}
                >
                  <span style={{ color: "#6F6F6F" }}>Latest Content</span>
                </div>
                <p className="text-sm" style={{ color: "#6F6F6F" }}>
                  Discover our newest arrivals and gift inspiration!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
