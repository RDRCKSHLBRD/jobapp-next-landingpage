"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";
import ForJobSeekersAndEmployers from "@/components/ForJobSeekersAndEmployers";
import WhyJobApp from "@/components/WhyJobApp";
import Testimonials from "@/components/Testimonials";
import InstantJobFitChecker from "@/components/InstantJobFitChecker";

export default function Home() {
  const [isCheckerOpen, setIsCheckerOpen] = useState(false);

  const openChecker = () => setIsCheckerOpen(true);
  const closeChecker = () => setIsCheckerOpen(false);

  return (
    <>
      <Header />
      <section id="features">
        <HeroSection onLaunchChecker={openChecker} />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="for-job-seekers-employers">
        <ForJobSeekersAndEmployers />
      </section>
      <section>
        <WhyJobApp />
      </section>
      <section>
        <Testimonials />
      </section>
      <section id="pricing">
        <PricingPlans />
      </section>
      <section id="contact">
        <Footer />
      </section>
      
      {/* Modal for InstantJobFitChecker */}
      {isCheckerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            style={{ width: "500px" }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeChecker}
            >
              X
            </button>
            <InstantJobFitChecker />
          </div>
        </div>
      )}
    </>
  );
}
