const categories = [
  { id: 1, name: "Jewellery", image: "/assets/jewellery.jpg" },
  { id: 2, name: "Watches", image: "/assets/watch.jpg" },
  { id: 3, name: "Makeup", image: "/assets/makeup.jpg" },
  { id: 4, name: "Hair Clips", image: "/assets/hair-clip.jpg" },
  { id: 5, name: "Toys", image: "/assets/toy.jpg" },
  { id: 6, name: "Sunglasses", image: "/assets/sunglasses.jpg" },
  { id: 7, name: "Nails", image: "/assets/nail.jpg" },
  { id: 8, name: "Shoes", image: "/assets/shoes.jpg" },
];

export default function CategoryGallery() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Explore Our Categories</h2>
        <p className="text-gray-500 mt-2 text-lg">Discover a range of curated collections just for you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
              <h3 className="text-xl font-semibold">{category.name}</h3>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
