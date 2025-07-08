"use client"

import { useState, useRef } from "react"
import { Play, Pause, Heart, MessageCircle, Share2 } from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import Image from "next/image"

const socialContent = [
  {
    id: 1,
    platform: "instagram",
    videoUrl: "/assets/Slow_Mo_Presents.mp4",
    thumbnail: "/assets/Slow_Mo_Presents_frame.jpg",
    username: "milan_gifts",
    caption: "Our new jewelry collection has arrived! ✨",
    likes: "2.4k",
    comments: "156",
    date: "2 days ago",
  },
  {
    id: 2,
    platform: "tiktok1",
    videoUrl: "/assets/Slow_Mo_Presents.mp4",
    thumbnail: "/assets/Slow_Mo_Presents_frame.jpg",
    username: "milangifts",
    caption: "Watch our premium gift wraps in action! 🎁",
    likes: "15.7k",
    comments: "342",
    date: "5 days ago",
  },
  {
    id: 3,
    platform: "facebook",
    videoUrl: "/assets/Slow_Mo_Presents.mp4",
    thumbnail: "/assets/Slow_Mo_Presents_frame.jpg",
    username: "Milan Gifts",
    caption: "Unboxing our deluxe gift box! 😍",
    likes: "876",
    comments: "54",
    date: "1 week ago",
  },
  {
    id: 4,
    platform: "tiktok2",
    videoUrl: "/assets/Slow_Mo_Presents.mp4",
    thumbnail: "/assets/Slow_Mo_Presents_frame.jpg",
    username: "giftsbymilan",
    caption: "Satisfying packaging moments 🎬",
    likes: "22.9k",
    comments: "517",
    date: "1 day ago",
  },
]

const platformBadgeColor: Record<string, string> = {
  facebook: "bg-[#1877F2]",
  instagram: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  tiktok1: "bg-black",
  tiktok2: "bg-black",
}

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "facebook":
      return <FaFacebookF className="h-4 w-4" />
    case "instagram":
      return <FaInstagram className="h-4 w-4" />
    case "tiktok1":
    case "tiktok2":
      return <FaTiktok className="h-4 w-4" />
    default:
      return null
  }
}

export default function SocialWall() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [playingId, setPlayingId] = useState<number | null>(null)
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})

  const filteredContent =
    activeFilter === "all"
      ? socialContent
      : socialContent.filter((item) => item.platform === activeFilter)

  const handleVideoClick = (id: number) => {
    const video = videoRefs.current[id]
    if (!video) return

    if (video.paused) {
      // Pause other videos
      Object.entries(videoRefs.current).forEach(([key, v]) => {
        if (parseInt(key) !== id && v) v.pause()
      })
      video.play()
      setPlayingId(id)
    } else {
      video.pause()
      setPlayingId(null)
    }
  }

  const handleVideoEnd = (id: number) => {
    if (playingId === id) {
      setPlayingId(null)
    }
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-rose-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[rgba(224,110,90,0.9)] blur-3xl" />
        <div className="absolute -bottom-32 left-12 w-96 h-96 rounded-full bg-[rgba(224,110,90,0.9)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 ">
            Social Gallery
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            See how our community celebrates gifting in style
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/30 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/40">
            {["all", "facebook", "instagram", "tiktok1", "tiktok2"].map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveFilter(platform)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-300 ${activeFilter === platform
                  ? "bg-[rgba(224,110,90,0.9)] text-white shadow"
                  : "text-gray-700 hover:bg-white/50"
                  }`}
              >
                {platform === "tiktok1"
                  ? "TikTok 1"
                  : platform === "tiktok2"
                    ? "TikTok 2"
                    : platform}
              </button>
            ))}
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="relative aspect-[4/5] bg-black group cursor-pointer"
                onClick={() => handleVideoClick(item.id)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el
                  }}
                  src={item.videoUrl}
                  poster={item.thumbnail}
                  muted
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                  onEnded={() => handleVideoEnd(item.id)}
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {playingId === item.id ? (
                      <Pause className="h-7 w-7 text-white fill-white" />
                    ) : (
                      <Play className="h-7 w-7 text-white fill-white" />
                    )}
                  </div>
                </div>

                <div
                  className={`absolute top-4 left-4 px-3 py-1.5 rounded-full flex items-center gap-1 text-white text-xs font-semibold ${platformBadgeColor[item.platform]
                    }`}
                >
                  <PlatformIcon platform={item.platform} />
                  {item.platform.replace(/\d/, "").charAt(0).toUpperCase() +
                    item.platform.replace(/\d/, "").slice(1)}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[rgba(224,110,90,0.9)] flex items-center justify-center text-white font-bold text-xs">
                    {item.username[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.username}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{item.caption}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{item.comments}</span>
                  </div>
                  <div className="ml-auto">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[rgba(224,110,90,0.9)] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all">
            Load More
          </button>
        </div> */}
      </div>
    </section>
  )
}
