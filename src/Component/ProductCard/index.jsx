import React, { useState } from "react";
import productDataRaw from "../../Data/data.js"; // Your original product data
import ProductDetailModal from "../ProductModelCard/index.jsx";

const ProductCard = ({ product, onImageUpload, onViewDetails }) => {
  return (
    <div className="border rounded-md p-3 relative flex flex-col items-start space-y-2 hover:shadow-lg transition-shadow duration-300 bg-white">
      {product.onSale && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
          ON SALE
        </div>
      )}
      <div className="w-full flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-30 h-30 object-contain"
        />
      </div>

      {/* 👇 Upload Image Button */}
      {!product.image && (
        <button
          onClick={onImageUpload}
          className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
        >
          Upload Image
        </button>
      )}

      <div className="flex items-center space-x-2">
        <span className="font-semibold text-lg text-gray-900">
          {product.price}
        </span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            {product.oldPrice}
          </span>
        )}
      </div>
      <div className="text-sm font-semibold text-gray-900">{product.name}</div>
      <div className="text-xs text-gray-400">{product.unit}</div>

      <button
        onClick={onViewDetails}
        className="absolute bottom-34 right-2 bg-green-600 hover:bg-green-700 text-white rounded-full p-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

const GroceryGrid = () => {
  // 🔁 Load saved data from localStorage or use original data
  const savedData = JSON.parse(localStorage.getItem("productData"));
  const [productData, setProductData] = useState(savedData || productDataRaw);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const openWidget = (productId) => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dp4elhlpi", // ✅ Your cloud name
        uploadPreset: "First_Time_Using", // ✅ Your unsigned preset
        multiple: false,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          const url = result.info.secure_url;

          // ✅ Update state AND localStorage
          setProductData((prev) => {
            const updated = prev.map((p) =>
              p.id === productId ? { ...p, image: url } : p
            );
            localStorage.setItem("productData", JSON.stringify(updated));
            return updated;
          });
        } else if (error) {
          console.error("Upload Error:", error);
        }
      }
    );
    widget.open();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center font-medium text-xl mb-1">
        Best seller grocery near you
      </h2>
      <p className="text-center text-sm mb-8 text-gray-500">
        We provide best quality & fresh grocery items near your location
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onImageUpload={() => openWidget(product.id)} // pass image upload logic
            onViewDetails={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      {/* 🔍 Show modal if product is selected */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default GroceryGrid;