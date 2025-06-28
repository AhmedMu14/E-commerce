import React, { useState } from "react";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/90.jpg",
];

const AvatarSlider = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverDirection, setHoverDirection] = useState(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x < rect.width / 2) {
      setHoverDirection("left");
    } else {
      setHoverDirection("right");
    }
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setHoverDirection(null);
  };

  const getTransformStyle = (index) => {
    if (hoverIndex !== index) return "scale(1)";
    const directionShift = hoverDirection === "left" ? "translateX(10px)" : "translateX(-10px)";
    return `scale(1.1) ${directionShift}`;
  };

  return (
    <div className="w-full px-4 py-8 bg-white rounded-md shadow-sm">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          What food do you love to order?
        </h2>
        <p className="text-gray-500 mt-2">
          Here, order your favorite foods from different categories.
        </p>
      </div>

      {/* Avatars */}
      <div className="w-full flex flex-wrap justify-center gap-6 px-2 md:px-6">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={avatar}
              alt={`Avatar ${index}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransformStyle(index),
                willChange: "transform",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSlider;
