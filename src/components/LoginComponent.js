import { useState } from "react";
import VerifyEmail from "./VerifyEmail"; // Import VerifyEmail component

export default function LoginComponent({ onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Placeholder for your login logic
    setShowVerifyEmail(true); // Show VerifyEmail component
  };

  return (
    <>
      {!showVerifyEmail ? (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={onClose} // Close on backdrop click
        >
          {/* Fullscreen Overlay */}
          <div
            className="relative flex flex-col justify-center items-center w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/OVERLAYhires.svg')`,
            }}
            onClick={(e) => e.stopPropagation()} // Prevent click-through
          >
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-[45px] font-semibold text-gray-800">
                Login and Continue Your Journey
              </h1>
              <p className="text-[16px] text-black mt-4">
                Continue where you left off—your next step is just a click away.
              </p>
            </div>

            {/* Login Card */}
            <div className="relative bg-white p-8 rounded-[4px] shadow-lg flex flex-col w-[564px] h-[650px] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                aria-label="Close"
              >
                <span className="text-[30px] font-light">x</span>
              </button>

              {/* Form Section */}
              <form
                onSubmit={handleLoginSubmit} // Use handleLoginSubmit
                className="flex flex-col space-y-4"
              >
                {/* Google Login */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-[4px] py-3 hover:bg-gray-50 transition-colors mt-8 mb-3"
                >
                  <img
                    src="/images/icons/google-sm.svg"
                    alt="Google Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Login with Google
                  </span>
                </button>

                {/* Divider */}
                <div className="flex items-center">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="px-4 text-sm text-gray-500 mt-3 mb-6">
                    OR
                  </span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[22px] font-medium text-gray-700 mt-10 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-14 px-4 border border-gray-300 rounded-[4px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[22px] font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      className="w-full h-14 px-4 border border-gray-300 rounded-[4px] pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Must be at least 6 characters"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={togglePasswordVisibility}
                      aria-label={
                        passwordVisible ? "Hide password" : "Show password"
                      }
                    >
                      <img
                        src={
                          passwordVisible
                            ? "/images/icons/eye-slash.svg"
                            : "/images/icons/eye.svg"
                        }
                        alt={
                          passwordVisible ? "Hide password" : "Show password"
                        }
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
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
                  className="w-full h-12 bg-blue-500 text-white text-sm font-medium rounded-md px-4 hover:bg-blue-600 transition-colors"
                >
                  Login
                </button>

                {/* Sign Up */}
                <div className="text-center text-sm">
                  <span className="text-gray-600">New to The Job App? </span>
                  <a
                    href="/signup"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <VerifyEmail
          email="SaraiThompson@gmail.com" // Example email
          onClose={() => setShowVerifyEmail(false)} // Close VerifyEmail and return to login
        />
      )}
    </>
  );
}
