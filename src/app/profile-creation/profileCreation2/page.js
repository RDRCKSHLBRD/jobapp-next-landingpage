"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";

export default function ProfileCreationStep2() {
  const [desiredRoles, setDesiredRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const rolesList = [
    "Mechanical Engineer",
    "UX/UI Designer",
    "Data Scientist",
    "Financial Analyst",
    "Product Manager",
    "Accountant",
    "Sales Manager",
    "Graphic Designer",
    "Software Engineer",
    "Content Strategist",
    "Copy Writer",
    "Business Analyst",
    "Cybersecurity Analyst",
    "Public Relations Manager",
    "Architect",
    "Software Tester",
    "Logistics Manager",
    "Data Analyst",
    "Web Developer",
    "Human Resource Specialist",
    "Nurse",
    "Event Manager",
    "Video Game Designer",
    "Therapist",
  ];

  const handleRoleSelect = (role) => {
    setDesiredRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      desiredRoles,
    };

    try {
      const response = await fetch("/api/profile/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Desired roles saved successfully");
        router.push("/profile-creation/profileCreation3");
      } else {
        const errorData = await response.json();
        console.error("Error saving desired roles:", errorData.error);
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
        minHeight: "1272px",
      }}
    >
      {/* Progress Bar */}
      <div className="mt-8 mb-3">
        <ProgressBar progress={66} />
      </div>

      {/* Header Section */}
      <div className="text-center mt-6">
        <h2 className="text-[32px] font-semibold text-gray-900">
          Your Preferences
        </h2>
        <p className="text-[18px] text-gray-700 mt-2">
          Help us match you with the best career opportunities
        </p>
      </div>

      {/* Card Section */}
      <div
        className="bg-white rounded-lg shadow-md p-8"
        style={{
          width: "715px",
          height: "770px",
        }}
      >
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Search Roles */}
          <div>
            <label
              htmlFor="desired-roles"
              className="block text-lg font-medium text-gray-700"
            >
              Desired Roles
            </label>
            <input
              type="text"
              id="desired-roles"
              placeholder="Search areas you want to work in"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Role Toggles */}
          <div className="grid grid-cols-3 gap-4">
            {rolesList
              .filter((role) =>
                role.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((role) => (
                <button
                  type="button"
                  key={role}
                  className={`px-4 py-2 h-[44px] rounded-[62px] text-sm font-medium transition-colors ${
                    desiredRoles.includes(role)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                  onClick={() => handleRoleSelect(role)}
                >
                  {role}
                </button>
              ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
