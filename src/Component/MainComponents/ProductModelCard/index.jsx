import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CardSlice"; 

const ProductDetail = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [localProduct, setLocalProduct] = useState(product);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product && product.id) {
      const savedData = JSON.parse(localStorage.getItem("productData")) || [];
      const updated = savedData.find((p) => p.id === product.id);
      if (updated) {
        setLocalProduct(updated); // 🟢 use product from localStorage if available
      }
    }
  }, [product]);
  
  const handleAddToCart = () => {
    dispatch(addToCart({ ...localProduct, quantity }));
    onClose(); // ✅ Optional: close modal after adding
  };


  if (!localProduct) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white border rounded-lg w-full max-w-4xl p-6 overflow-y-auto relative max-h-[90vh]">
        <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img src={localProduct.image} alt={localProduct.name} className="w-full h-64 object-contain mb-4" />
            <div className="flex space-x-2">
              {[localProduct.image, localProduct.image, localProduct.image].map((img, idx) => (
                <img key={idx} src={img} alt="thumb" className="w-16 h-16 border p-1 object-contain" />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{localProduct.name}</h2>
            <p className="text-xl font-bold text-gray-800">{localProduct.price}</p>
            {localProduct.oldPrice && (
              <p className="text-gray-500 line-through">{localProduct.oldPrice}</p>
            )}

            {localProduct.sizes && localProduct.sizes.length > 0 && (
              <>
                <p className="text-sm text-gray-500">Available In:</p>
                <div className="flex space-x-2 mt-1">
                  {localProduct.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="px-2 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* 👇 Counter Section */}
            <div className="mt-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(0, q - 1))}
                  className="w-8 h-8 bg-gray-200 rounded-full text-lg hover:bg-gray-300"
                >
                  −
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 bg-gray-200 rounded-full text-lg hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <button onClick={handleAddToCart} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add to Cart</button>
              <button className="px-4 py-2 border rounded">Wishlist</button>
              <button className="px-4 py-2 border rounded">Share</button>
            </div>

            <div className="mt-4">
              <span className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2">Fresh food</span>
              <span className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2">Organic</span>
              <span className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2">Dry Food</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <strong>Product Details:</strong><br />
              Vegetables are parts of plants that are consumed by humans or other animals as food...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
