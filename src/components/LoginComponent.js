// LoginComponent.js
import { useState } from "react";

export default function LoginComponent({ onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close overlay on backdrop click
    >
      <div
        className="bg-[#F0F6FF] p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent click-through
        style={{ width: "400px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-lg font-bold"
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-[#002F68] rounded-[4px]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="w-full p-2 border border-[#002F68] rounded-[4px] pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={passwordVisible ? "/images/icons/eye-slash.svg" : "/images/icons/eye.svg"}
                  alt={passwordVisible ? "Hide password" : "Show password"}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#002F68] text-white py-2 rounded-[4px] hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
