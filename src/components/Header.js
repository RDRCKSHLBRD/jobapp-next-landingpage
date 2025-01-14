"use client";

import { useState } from "react";
import NavLink from "@/components/NavLink"; // Updated import path
import LoginComponent from "@/components/LoginComponent"; // Import Login Component
import SignUpComponent from "@/components/SignUpComponent"; // Import Sign Up Component

export default function Header() {
  const [activeLink, setActiveLink] = useState("Features");
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State for sign-up modal

  const navItems = [
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Pricing", href: "#pricing" },
    { text: "Contact Us", href: "#contact" },
  ];

  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignUp = () => setIsSignUpOpen(!isSignUpOpen);

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/JobApp-Logo.svg"
            alt="The Job App Logo"
            className="h-20"
          />
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
            onClick={toggleSignUp} // Open sign-up modal
            className="bg-[#3B82F6] text-white px-4 py-2 rounded-[4px] hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Conditionally render LoginComponent */}
      {isLoginOpen && <LoginComponent onClose={toggleLogin} />}

      {/* Conditionally render SignUpComponent */}
      {isSignUpOpen && <SignUpComponent onClose={toggleSignUp} />}
    </>
  );
}
