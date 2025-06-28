import React from 'react'
import EmptyCart from '../../../assets/Cart.jpg'
// import { XMarkIcon } from '@heroicons/react/24/outline' 

const  Cart = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={onClose}>
                {/* <XMarkIcon className="h-6 w-6 text-gray-700" /> */}
            </button>
        </div>
        <div className="p-15 text-center">
            <img
            src={EmptyCart}
            alt="Empty Cart"
            className="mx-auto w-40 h-40"/>
            <h3 className="text-lg font-semibold mt-4">Your Cart Is Empty</h3>
            <p className="text-gray-500 text-sm">Please add product to your cart list</p>
        </div>
        <div className="border-t p-4">
            <div className="flex justify-between mb-2">
                <span className="font-bold">Subtotal:</span>
                <span className="font-bold">$0.00</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Final price and discounts will be <br></br>determined at the time of payment<br></br> processing.</p>
            <button className="w-full py-2 bg-gray-200 text-gray-500 font-semibold rounded cursor-not-allowed">
                Proceed To Checkout
            </button>
        </div>
    </div>
  ); 
};

export default  Cart