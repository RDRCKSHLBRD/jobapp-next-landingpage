import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";
import ForJobSeekersAndEmployers from "@/components/ForJobSeekersAndEmployers"; // Import the new component

export default function Home() {
  return (
    <>
      <Header />
      <section id="features">
        <HeroSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="for-job-seekers-employers"> {/* Added an ID for navigation */}
        <ForJobSeekersAndEmployers />
      </section>
      <section id="pricing">
        <PricingPlans />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
