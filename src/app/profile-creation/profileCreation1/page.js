"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import ProgressBar from "@/components/ProgressBar";

export default function ProfileCreationStep1() {
  const [jobType, setJobType] = useState({
    fullTime: false,
    partTime: false,
    hybrid: false,
    remote: false,
  });

  const router = useRouter(); // Initialize router

  const toggleJobType = (type) => {
    setJobType((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    router.push("/profile-creation/profileCreation2"); // Navigate to Step 2
  };

  return (
    <div
      className="relative flex flex-col items-center bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('/images/OVERLAYhires.svg')`, // Set the background image
        minHeight: "1338px", // Ensure the outer frame height matches the design
      }}
    >
      {/* Progress Bar */}
      <div className="mt-8 mb-3">
        <ProgressBar progress={25} />
      </div>

      {/* Advertisement Banner */}
      <div
        className="flex items-center justify-center bg-[#EFEEFF] border border-[#C6C6C6] rounded-[4px] w-[683px] h-[52px] mt-4"
      >
        <img
          src="/images/icons/AI-starVector.svg"
          alt="AI Star Vector"
          className="w-6 h-6 mr-2"
        />
        <span className="text-sm font-medium text-gray-700 text-center">
          Unlock a Free AI-Powered Resume Guide – Complete Your Profile Now!
        </span>
      </div>

      {/* Header Section */}
      <div className="text-center mt-6">
        <h1 className="text-[22px] font-medium text-gray-800">
          Hi there! 👋
        </h1>
        <h2 className="text-[32px] font-semibold text-gray-900 mt-1">
          Let’s get started
        </h2>
      </div>

      {/* Outer Frame */}
      <div className="relative flex flex-col items-center bg-transparent w-[1440px] h-[1338px] mt-4">
        {/* Card Section */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-[1440px] w-full md:w-[90%] lg:w-[631px] h-[894px] mt-4 flex flex-col justify-between">

          {/* Profile Picture */}
          <div className="flex items-start mb-1">
            <div className="w-[160px] h-[160px] rounded-full bg-[#F1F1F1] flex items-center justify-center relative ml-[-5px]">
              <img
                src="/images/icons/mage_edit.svg"
                alt="Edit Icon"
                className="absolute bottom-2 right-2 w-6 h-6 cursor-pointer"
              />
            </div>
          </div>



          {/* Form */}
          <form className="space-y-8">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-lg font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="profile-firstName"
                  placeholder="John"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="profile-lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="profile-email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="flex space-x-4">
              <div className="w-1/4">
                <label className="block text-lg font-medium text-gray-700">
                  Country Code
                </label>
                <input
                  type="tel"
                  name="countryCode"
                  placeholder="+1"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="123-456-7890"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Current country"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Current location"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Job Type Toggles */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Job Type
              </label>
              <div className="flex justify-between mt-4">
                {Object.keys(jobType).map((type) => (
                  <button
                    type="button"
                    key={type}
                    className={`px-6 py-3 border rounded-[62px] text-sm font-medium transition-colors ${jobType[type]
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 border-gray-300"
                      }`}
                    onClick={() => toggleJobType(type)}
                  >
                    {type.replace(/([A-Z])/g, " $1").trim()} +
                  </button>
                ))}
              </div>
            </div>

          </form>
        </div>

        {/* Next Button Outside Card */}
        <div className="mt-8">
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="w-[631px] py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
