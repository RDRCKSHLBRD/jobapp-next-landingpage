"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory

export default function SignUpComponent({ onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    termsAgreed: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    console.log("Submitting form data:", formData); // Log form data
    try {
      const response = await fetch("/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log("API Response Status:", response.status); // Log API status
  
      if (response.ok) {
        router.push("/profile-creation");
      } else {
        const errorData = await response.json();
        console.log("API Error Response:", errorData); // Log API error response
        setError(errorData.error || "Failed to sign up. Please try again.");
      }
    } catch (err) {
      console.error("Sign-up error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col justify-center items-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/OVERLAYhires.svg')`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Section */}
        <div className="text-center mb-7">
          <h1 className="text-[45px] font-semibold text-gray-800">
            Sign Up and Kickstart Your Career
          </h1>
          <p className="text-[16px] text-black mt-2">
            Create your account and unlock tools to land your dream job.
          </p>
        </div>

        {/* Sign Up Card */}
        <div className="relative bg-white p-8 rounded-[4px] shadow-lg flex flex-col w-[632px] h-auto overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            aria-label="Close"
          >
            <span className="text-[30px] font-light">x</span>
          </button>

          {/* Form Section */}
          <form onSubmit={handleSignUpSubmit} className="flex flex-col space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[22px] font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-14 px-4 border border-gray-300 rounded-[4px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-[22px] font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full h-14 px-4 border border-gray-300 rounded-[4px] pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Must be at least 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <img
                    src={
                      passwordVisible ? "/images/icons/eye-slash.svg" : "/images/icons/eye.svg"
                    }
                    alt={passwordVisible ? "Hide password" : "Show password"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            {/* Name Fields */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-[22px] font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full h-14 px-4 border border-gray-300 rounded-[4px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-[22px] font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full h-14 px-4 border border-gray-300 rounded-[4px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="termsAgreed"
                name="termsAgreed"
                className="w-5 h-5 border-gray-300 rounded-[4px] focus:ring-blue-500"
                checked={formData.termsAgreed}
                onChange={handleChange}
                required
              />
              <label htmlFor="termsAgreed" className="ml-2 text-sm text-gray-600">
                By signing up, you agree to{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full h-12 bg-blue-500 text-white text-sm font-medium rounded-[4px] px-4 hover:bg-blue-600 transition-colors"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Login */}
            <div className="text-center text-sm">
              <span className="text-gray-600">Already registered? </span>
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
