import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/what-we-do";
import { FeaturedProduct } from "@/components/featured-product";
import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { VoiceDemo } from "@/components/voice-demo";
import { HowWeWork } from "@/components/how-we-work";
import { PartnersLogo } from "@/components/partners-logo";
import { Testimonial } from "@/components/testimonial";
// import { InsightsTeaser } from "@/components/insights-teaser";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background dark">
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <WhatWeDo />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <FeaturedProduct />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <FeaturedCaseStudy />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <VoiceDemo />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <HowWeWork />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <PartnersLogo />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        <Testimonial />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
        {/* <InsightsTeaser />
        <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" /> */}
        <FinalCTA />
      </main>
      <div className="w-full h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
    </div>
  );
}
