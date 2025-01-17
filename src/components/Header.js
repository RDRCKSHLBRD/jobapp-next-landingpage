"use client";

import { useState } from "react";
import NavLink from "@/components/NavLink"; // Updated import path
import LoginComponent from "@/components/LoginComponent"; // Import Login Component
import axios from "axios"; // Import Axios for the ping functionality

export default function Header({ openSignUp }) {
  const [activeLink, setActiveLink] = useState("Features");
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [pingResult, setPingResult] = useState(null); // State for the ping result

  const navItems = [
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Pricing", href: "#pricing" },
    { text: "Contact Us", href: "#contact" },
  ];

  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);

  // Ping Database Function
  const pingDatabase = async () => {
    try {
      const response = await axios.post('/api/test-db'); // Ensure POST method
      setPingResult(response.data.message || 'No response message');
      console.log('Ping successful:', response.data);
    } catch (error) {
      setPingResult(`Error: ${error.message}`);
      console.error('Ping failed:', error);
    }
  };
  

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4">
        {/* Logo and Ping Button */}
        <div className="flex items-center gap-4">
          <img
            src="/images/JobApp-Logo.svg"
            alt="The Job App Logo"
            className="h-20"
          />
          {/* Ping Database Button */}
          {/* Comment: Placed next to the logo for easy developer access */}
          <button
            onClick={pingDatabase}
            className="bg-gray-200 text-sm px-3 py-1 rounded hover:bg-gray-300"
          >
            Ping DB
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-5">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              text={item.text}
              href={item.href}
              isActive={activeLink === item.text}
              onClick={() => setActiveLink(item.text)}
            />
          ))}
        </nav>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLogin} // Open login modal
            className="text-[#3B82F6] hover:text-[#1D3557]"
          >
            Sign In
          </button>
          <button
            onClick={openSignUp} // Use openSignUp passed from the parent
            className="bg-[#3B82F6] text-white px-4 py-2 rounded-[4px] hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Conditionally render LoginComponent */}
      {isLoginOpen && <LoginComponent onClose={toggleLogin} />}

      {/* Display Ping Result */}
      {/* Comment: Ping result displayed for developer feedback */}
      {pingResult && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-md">
          {pingResult}
        </div>
      )}
    </>
  );
}
