import type { Metadata } from "next";
import Contact from "@/components/landing/Contact";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import GettingStarted from "@/components/landing/GettingStarted";
import { Hero } from "@/components/landing/Hero";
import { NavBar } from "@/components/landing/NavBar";
import Stats from "@/components/landing/Stats";
import TechnologyStack from "@/components/landing/TechnologyStack";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";

export const metadata: Metadata = {
  title: "Welcome to Apollodon",
  description: "The swiss army knife for water quality monitoring.",
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #10b981 0%, transparent 50%)`,
            backgroundSize: "400px 400px, 600px 600px, 800px 800px",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Features Section */}
        <section>
          <Features />
        </section>

        {/* Stats Section */}
        <section>
          <Stats />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Getting Started Section */}
        <section>
          <GettingStarted />
        </section>

        {/* Technology Stack Section */}
        <section>
          <TechnologyStack />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section>
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
