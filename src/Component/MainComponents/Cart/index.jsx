import React from 'react';
import EmptyCart from '../../../assets/Cart.jpg';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/CardSlice';

const Cart = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // ✅ Subtotal calculation with cleaning
  const subtotal =  cartItems.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price?.toString().replace(/[^0-9.]/g, '')) || 0;
    return sum + quantity * price;
  }, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-90 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* 🛒 CART CONTENT */}
      {cartItems.length === 0 ? (
        <div className="p-6 text-center">
          <img
            src={EmptyCart}
            alt="Empty Cart"
            className="mx-auto w-40 h-40"
          />
          <h3 className="text-lg font-semibold mt-4">Your Cart Is Empty</h3>
          <p className="text-gray-500 text-sm">
            Please add product to your cart list
          </p>
        </div>
      ) : (
        <div className="p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="flex justify-between items-center">
                <span className="font-medium w-1/2">{item.name}</span>
                <span className="text-sm w-1/2 text-right">
                  {item.quantity} × {item.price} = Rs{' '}
                  {(Number(item.quantity) *
                    Number(
                      item.price?.toString().replace(/[^0-9.]/g, ''))).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="py-1 px-1 bg-green-600 text-white hover:bg-green-700 rounded"
                >
                  Cancle
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ SUBTOTAL & CHECKOUT */}
      <div className="border-t p-4 mt-auto">
        <div className="flex justify-between mb-2">
          <span className="font-bold">Subtotal:</span>
          <span className="font-bold">$ {subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Final price and discounts will be <br /> determined at the time of
          payment processing.
        </p>
        <button
          className={`w-full py-2 ${
            cartItems.length === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          } font-semibold rounded`}
          disabled={cartItems.length === 0}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;