"use client"
import Image from "next/image"

const categories = [
  { id: 1, name: "Jewellery", description: "Elegant & Timeless", image: "/assets/open-gifts-box.jpg" },
  { id: 2, name: "Watches for Men", description: "Classic & Sophisticated", image: "/assets/open-gifts-box.jpg" },
  { id: 3, name: "Makeup", description: "Beauty & Glamour", image: "/assets/open-gifts-box.jpg" },
  { id: 4, name: "Hair Clips", description: "Stylish & Chic", image: "/assets/open-gifts-box.jpg" },
  { id: 5, name: "Toys", description: "Fun & Delightful", image: "/assets/open-gifts-box.jpg" },
  { id: 6, name: "Sunglasses", description: "Trendy & Protective", image: "/assets/open-gifts-box.jpg" },
  { id: 7, name: "Nails", description: "Creative & Colorful", image: "/assets/open-gifts-box.jpg" },
  { id: 8, name: "Watches for Ladies", description: "Graceful & Refined", image: "/assets/open-gifts-box.jpg" },
  { id: 9, name: "Shoes", description: "Comfort & Style", image: "/assets/open-gifts-box.jpg" },
  { id: 10, name: "Belts", description: "Quality & Craftsmanship", image: "/assets/open-gifts-box.jpg" },
]

export default function CategoryGallery() {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 tracking-tight">
            Product Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore timeless, premium picks for every style.
          </p>
        </div>

        {/* Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                {/* Frost overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-2xl" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>

              {/* Soft glow ring on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/30 transition duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
