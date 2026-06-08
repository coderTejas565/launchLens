import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrendingProjects } from "@/components/landing/TrendingProjects";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { RecentFeedback } from "@/components/landing/RecentFeedback";
import { Categories } from "@/components/landing/Categories";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingProjects />
      <HowItWorks />
      <RecentFeedback />
      <Categories />
      <AudienceSection />
      <CTASection />
      <Footer />
    </>
  );
}