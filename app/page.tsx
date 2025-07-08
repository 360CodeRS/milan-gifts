"use client";

import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import CategorySlider from "@/components/category-slider";
import StoresSection from "@/components/stores-section";
import CategoryGallery from "@/components/category-gallery";
import SocialWall from "@/components/social-wall";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-sky-50">

      <Navigation />
      {/* <CategorySlider />   */}
      <Hero />

      <StoresSection />
      <SocialWall />
      <CategoryGallery />
      <Footer />
    </div>
  );
}
