"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import CategorySlider from "@/components/category-slider"
import StoresSection from "@/components/stores-section"
import CategoryGallery from "@/components/category-gallery"
import SocialWall from "@/components/social-wall"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      <Navigation />
      <Hero />
      <CategorySlider />
      <StoresSection />
      <CategoryGallery />
      <SocialWall />
      <Footer />
    </div>
  )
}
