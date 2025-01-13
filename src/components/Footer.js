"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#002F68] text-white"
      style={{
        paddingTop: "4em", // Adds spacing at the top
        height: "473px", // Explicit height for the footer
      }}
    >
      <div className="container mx-auto px-8 grid grid-cols-12 gap-6">
        {/* The Job App Logo */}
        <div className="col-span-2 flex items-start">
          <Image
            src="/images/JobApp-Logo.svg"
            alt="The Job App Logo"
            width={80}
            height={80}
            className="mb-6"
            style={{ marginLeft: "-16px" }}
          />
        </div>

        {/* Quick Links */}
        <div className="col-span-2">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-sm hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm hover:underline">
                How It Works
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-sm hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-span-2">
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#faq" className="text-sm hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-sm hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us and Follow Us */}
        <div className="col-span-3">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">Have questions? We're here to help!</p>
            <p className="text-sm mt-2">
              📧 <a href="mailto:support@yourwebsite.com" className="hover:underline">
                support@yourwebsite.com
              </a>
            </p>
            <p className="text-sm">
              📞 <a href="tel:+11234567890" className="hover:underline">
                +1 (123) 456-7890
              </a>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-sm mb-2">Stay updated with the latest:</p>
            <div className="flex gap-4">
              <a href="#x" aria-label="X (formerly Twitter)">
                <Image src="/images/icons/X.svg" alt="X" width={24} height={24} />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <Image src="/images/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <Image src="/images/icons/youtube.svg" alt="YouTube" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Stay in the Loop */}
        <div className="col-span-3 flex flex-col items-end">
          <h3 className="font-semibold text-4xl mb-4 text-left w-full">Stay in the Loop</h3>
          <p className="text-sm mb-6 text-left w-full">
            Get exclusive job-matching tips, career advice, and updates straight to your inbox.
          </p>
          <form className="flex items-center gap-3 w-full">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm rounded bg-[#002F68] text-white focus:outline-none"
              style={{
                width: "242px",
                height: "48px",
                borderRadius: "4px",
                padding: "0 12px",
                border: "1px solid white",
              }}
            />
            {/* Sign-Up Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-sm font-bold text-white"
              style={{
                width: "121px",
                height: "48px",
                borderRadius: "4px",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8">
        <p className="text-xs text-left ml-8">
          &copy; 2024 The Job App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
