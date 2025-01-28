"use client"; // For interactivity

import React from "react";
import Sidebar from "@/components/Sidebar";
import InstantJobFitChecker from "@/components/InstantJobFitChecker";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className="bg-gray-100 flex flex-col items-center py-6"
        style={{ minHeight: "1481px", width: "321px" }}
      >
        {/* Logo */}
        <Image
          src="/images/JobApp-Logo.svg"
          alt="Job App Logo"
          width={120}
          height={40}
          className="mb-6"
        />
        {/* Sidebar Navigation */}
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-white">
        {/* Top Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ width: "985px", height: "80px" }}
        >
          {/* Greeting and Search */}
          <div className="flex items-center">
            <h1 className="text-lg font-bold">Hi Sarai!</h1>
            <p className="ml-2 text-gray-600">Let’s land your dream job!</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-1 rounded-md w-[200px]"
            />
            {/* Alert Icon */}
            <button className="p-2 bg-gray-100 rounded-full">
              <Image
                src="/images/icons/eye.svg"
                alt="Alert Icon"
                width={20}
                height={20}
              />
            </button>
            {/* Settings Icon */}
            <button className="p-2 bg-gray-100 rounded-full">
              <Image
                src="/images/icons/gear.svg"
                alt="Settings Icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Upgrade Banner */}
        <div
          className="flex items-center justify-center bg-blue-50 text-blue-700 py-4 mt-4"
          style={{ width: "1019px", height: "80px" }}
        >
          <p className="text-center">
            Boost your job search with premium tools and land your dream job
            faster!{" "}
            <Link href="#" legacyBehavior>
              <a className="font-bold">Upgrade Now</a>
            </Link>
          </p>
        </div>

        {/* Instant Job Match Checker */}
        <div className="p-6 mt-4">
          <InstantJobFitChecker />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          &copy; 2025 The Job App. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
