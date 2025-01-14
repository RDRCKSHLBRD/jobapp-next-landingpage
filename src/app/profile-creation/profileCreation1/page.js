"use client";

import { useState } from "react";
import ProgressBar from "@/components/ProgressBar"; // Ensure the path to ProgressBar is correct

export default function ProfileCreationStep1() {
  const [jobType, setJobType] = useState({
    fullTime: false,
    partTime: false,
    hybrid: false,
    remote: false,
  });

  const toggleJobType = (type) => {
    setJobType((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Proceeding to the next page"); // Placeholder for advancing to the next page
    // Navigate to Step 2 (profileCreation2)
    router.push("/profile-creation/profileCreation2");
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
      {/* Progress Bar */}
      <ProgressBar progress={25} />

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md p-8 w-[631px] h-[894px] mt-8">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Contact Number */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="+91 Mobile number"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              placeholder="Current country"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              placeholder="Current location"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Job Type Toggles */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Job Type
            </label>
            <div className="flex space-x-4 mt-2">
              {Object.keys(jobType).map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                    jobType[type]
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  onClick={() => toggleJobType(type)}
                >
                  {type.replace(/([A-Z])/g, " $1").trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
