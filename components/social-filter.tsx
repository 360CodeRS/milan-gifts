import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type SocialFilterProps = {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
};

const platforms = ["facebook", "instagram", "tiktok1", "tiktok2"];

export default function SocialFilter({
  activeFilter,
  setActiveFilter,
}: SocialFilterProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.7;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-12 px-4">
      {/* Mobile View: Scrollable pills with chevrons */}
      <div className="md:hidden relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 p-2 bg-white/60 backdrop-blur rounded-full shadow"
        >
          <FaChevronLeft size={16} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto px-8 no-scrollbar scroll-smooth"
        >
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveFilter(platform)}
              className={`
                flex-shrink-0 whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold capitalize
                transition-all duration-300
                ${
                  activeFilter === platform
                    ? "bg-[rgba(224,110,90,0.9)] text-white shadow"
                    : "text-gray-700 hover:bg-white/50"
                }
              `}
            >
              {platform === "tiktok1"
                ? "TikTok 1"
                : platform === "tiktok2"
                ? "TikTok 2"
                : platform}
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 p-2 bg-white/60 backdrop-blur rounded-full shadow"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* Desktop View: Inline pills */}
      <div className="hidden md:flex justify-center">
        <div className="inline-flex flex-wrap gap-2 bg-white/30 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/40 max-w-full">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveFilter(platform)}
              className={`
                rounded-full font-semibold capitalize transition-all duration-300
                text-sm px-6 py-2
                ${
                  activeFilter === platform
                    ? "bg-[rgba(224,110,90,0.9)] text-white shadow"
                    : "text-gray-700 hover:bg-white/50"
                }
              `}
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
    </div>
  );
}
