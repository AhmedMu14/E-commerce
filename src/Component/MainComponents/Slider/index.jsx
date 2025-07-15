import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/90.jpg",
   "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/90.jpg",
];

const AvatarSlider = () => {
  const sliderRef = useRef(null);

 const scroll = (direction) => {
  const { current } = sliderRef;
  const scrollAmount = 200;

  if (!current) return;

  if (direction === "left") {
    if (current.scrollLeft > 0) {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  } else {
    const maxScrollLeft = current.scrollWidth - current.clientWidth;
    if (current.scrollLeft < maxScrollLeft) {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
};


  return (
    <div className="w-full px-4 py-8 bg-white rounded-md  ">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          What food do you love to order?
        </h2>
        <p className="text-gray-500 mt-2">
          Here, order your favorite foods from different categories.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full shadow "
        >
          <FaChevronLeft />
        </button>

        {/* Avatar Container with scroll snap */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth gap-4 px-10 scrollbar-hide snap-x snap-mandatory scrollbar-hide"
        >
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="w-40 h-40 min-w-[10rem] rounded-full overflow-hidden border-2  shadow-md flex-shrink-0 snap-start"
            >
              <img
                src={avatar}
                alt={`Avatar ${index}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div> 
          ))}   
        </div> 
 "   
 "
        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full shadow "
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AvatarSlider;
