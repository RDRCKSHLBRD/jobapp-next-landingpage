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
        className="bg-[#F0F6FF] p-8 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent click-through
        style={{ width: "564px", height: "650px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl font-bold"
        >
          X
        </button>

        <form>
          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100"
          >
            <img
              src="/images/icons/google-sm.svg"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm font-medium text-gray-600">
              Login up with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Email Field */}
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
              className="w-full h-[56px] px-4 border border-[#002F68] rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
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
                className="w-full h-[56px] px-4 border border-[#002F68] rounded-lg pr-12"
                placeholder="Must be at least 6 characters"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={
                    passwordVisible
                      ? "/images/icons/eye-slash.svg"
                      : "/images/icons/eye.svg"
                  }
                  alt={passwordVisible ? "Hide password" : "Show password"}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-4 text-right">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[56px] bg-[#3B82F6] text-white text-sm font-medium rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

          {/* Sign Up */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">New to The Job App? </span>
            <a href="/signup" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
