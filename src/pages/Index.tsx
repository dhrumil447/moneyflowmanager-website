import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { FeaturesSection } from "@/components/sections/Features";
import { ScreenshotsSection } from "@/components/sections/Screenshots";
import { AnalyticsSection } from "@/components/sections/Analytics";
import { SecuritySection } from "@/components/sections/Security";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQ";
import { DownloadCTASection } from "@/components/sections/DownloadCTA";
import { FooterSection } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <AnalyticsSection />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
