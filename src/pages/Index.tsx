import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Screenshots } from "@/components/sections/Screenshots";
import { Analytics } from "@/components/sections/Analytics";
import { Security } from "@/components/sections/Security";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Screenshots />
      <Analytics />
      <Security />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </main>
  );
};

export default Index;
