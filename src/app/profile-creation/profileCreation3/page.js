"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

export default function ProfileCreationStep3() {
  const [portfolioLink, setPortfolioLink] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const handleFileUpload = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("portfolioLink", portfolioLink);
    formData.append("resume", resumeFile);

    try {
      const response = await fetch("/api/profile/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Profile details saved successfully");
        router.push("/dashboard"); // Navigate to Dashboard
      } else {
        const errorData = await response.json();
        console.error("Error saving profile details:", errorData.error);
        alert(`Error: ${errorData.error}`);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div
      className="relative flex flex-col items-center bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('/images/OVERLAYhires.svg')`,
        minHeight: "1024px",
      }}
    >
      {/* Progress Bar */}
      <div className="mt-8 mb-3">
        <ProgressBar progress={100} />
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
        <h2 className="text-[32px] font-semibold text-gray-900">
          Build Your Profile
        </h2>
        <p className="text-[18px] text-gray-700 mt-2 mb-7">
          Upload your resume and portfolio to complete your profile
        </p>
      </div>

      {/* Card Section */}
      <div
        className="bg-white rounded-lg shadow-md p-8"
        style={{
          width: "584px",
          height: "466px",
        }}
      >
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Portfolio Link */}
          <div>
            <label
              htmlFor="portfolioLink"
              className="block text-lg font-medium text-gray-700 mb-5"
            >
              Portfolio Link (Optional)
            </label>
            <input
              type="url"
              id="portfolioLink"
              value={portfolioLink}
              onChange={(e) => setPortfolioLink(e.target.value)}
              placeholder="Paste portfolio link"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Upload Resume
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative hover:border-blue-500 transition"
              style={{
                width: "504px",
                height: "226px",
              }}
            >
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Image
                src="/images/icons/uploads.svg"
                alt="Resume upload icon"
                width={40}
                height={40}
                className="mx-auto mb-3"
              />
              <p className="text-sm text-gray-500">
                Drag and drop your resume here, or{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline font-medium"
                >
                  browse
                </button>
              </p>
              {resumeFile && (
                <p className="text-sm text-gray-700 mt-2">
                  Selected File: {resumeFile.name}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
        style={{ width: "584px" }}
        onClick={handleFormSubmit}
      >
        Get Started
      </button>
    </div>
  );
}
