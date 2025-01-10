import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <PricingPlans />
      <Footer />
    </>
  );
}
