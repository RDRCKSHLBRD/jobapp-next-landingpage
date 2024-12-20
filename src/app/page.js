import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyJobApp from "@/components/WhyJobApp";
import Testimonials from "@/components/Testimonials";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <WhyJobApp />
      <Testimonials />
      <PricingPlans />
      <Footer />
    </div>
  );
}
