import HeroSection from "@/components/HeroSection";
import TransitionLayer from "@/components/TransitionLayer";
import GridSection from "@/components/GridSection";
import HorizontalSection from "@/components/HorizontalSection";
import FeatureDetailSection from "@/components/FeatureDetailSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection"; // New
import TestimonialSection from "@/components/TestimonialSection"; // New
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* 1. Global Background Layers */}
      <div className="fixed inset-0 z-0 bg-remin-clear" /> {/* Base Clear Sky */}
      <TransitionLayer /> {/* Animated Grid Lines */}

      {/* 2. Hero Section (Fixed initially, slides UP) */}
      <HeroSection />

      {/* 3. Scroll Spacer for Hero */}
      {/* Since Hero is fixed and animates based on scroll 0-500, we need empty space to "absorb" that scroll. */}
      <div className="h-[100vh]" />

      {/* 4. Main Content Flow */}
      <div className="relative z-10 pt-20 flex flex-col">
        <GridSection />
        <HorizontalSection />
        <FeatureDetailSection /> {/* Added Detailed Content */}
        <StatsSection /> {/* Added Stats */}
        <TestimonialSection /> {/* Added Voices */}
        <CTASection /> {/* Added Final CTA */}
      </div>
    </main>
  );
}
