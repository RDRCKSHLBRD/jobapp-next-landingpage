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
import SignUpComponent from "@/components/SignUpComponent";

export default function Home() {
  const [isCheckerOpen, setIsCheckerOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openChecker = () => setIsCheckerOpen(true);
  const closeChecker = () => setIsCheckerOpen(false);

  const openSignUp = () => setIsSignUpOpen(true);
  const closeSignUp = () => setIsSignUpOpen(false);

  return (
    <>
      {/* Pass openSignUp to Header */}
      <Header openSignUp={openSignUp} />

      <section id="features">
        {/* Pass openSignUp to HeroSection */}
        <HeroSection onLaunchChecker={openChecker} openSignUp={openSignUp} />
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

      {/* SignUpComponent Modal */}
      {isSignUpOpen && <SignUpComponent onClose={closeSignUp} />}

      {/* InstantJobFitChecker Component */}
      {isCheckerOpen && <InstantJobFitChecker onClose={closeChecker} />}
    </>
  );
}
