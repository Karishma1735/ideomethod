import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import Discover from "@/components/Discover";

export default function Index() {
  return (
    <div className="min-h-screen  text-white font-manrope overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Discover />
      <TestimonialsSection />
      <StatsSection />
      <BenefitsSection />
      <FAQSection />

    </div>
  );
}
