import React from "react";
import productData from "../../Data/data";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-3 relative flex flex-col items-start space-y-2 hover:shadow-lg transition-shadow duration-300 bg-white">
      {product.onSale && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
          ON SALE
        </div>
      )}
       <div className="w-full flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-contain"
      />
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-lg text-gray-900">{product.price}</span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
        )}
      </div>
      <div className="text-sm font-semibold text-gray-900">{product.name}</div>
      <div className="text-xs text-gray-400">{product.unit}</div>
      <button className="absolute bottom-34 right-2 bg-green-600 hover:bg-green-700 text-white rounded-full p-1.5">
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
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center font-semibold text-lg mb-1">Best seller grocery near you</h2>
      <p className="text-center text-sm mb-8 text-gray-500">
        We provide best quality & fresh grocery items near your location
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GroceryGrid;
