import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function SignInWithModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="flex items-center space-x-1 cursor-pointer"
      >
        <UserIcon className="w-6 h-6 text-gray-500" />
        <span className="hidden md:block text-gray-600">Sign In</span>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <button
              className="absolute top-2 right-4 text-gray-600"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
