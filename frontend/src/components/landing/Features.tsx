"use client";

import { Card } from "@/components/ui/card";
import {
  CloudLightning,
  Database,
  ChartBar,
  Settings,
  Share2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [featuresPerView, setFeaturesPerView] = useState(1);
  const totalFeatures = features.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFeaturesPerView(1);
      } else if (window.innerWidth < 1024) {
        setFeaturesPerView(2);
      } else {
        setFeaturesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlideIndex = Math.ceil(totalFeatures / featuresPerView) - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxSlideIndex ? prevIndex + 1 : 0
    );
  }, [maxSlideIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxSlideIndex
    );
  }, [maxSlideIndex]);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const visibleFeatures = () => {
    const start = currentIndex * featuresPerView;
    return features.slice(start, start + featuresPerView);
  };

  const dots = Array.from(
    { length: Math.ceil(features.length / featuresPerView) },
    (_, i) => i
  );
  return (
    <section id="features" className="pb-32 px-3 sm:px-4 md:px-6">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              The Swiss Army Knife
            </span>{" "}
            <br />
            <span>of Water Quality</span>
          </h2>
        </div>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {" "}
          <div className="flex justify-between items-center absolute inset-y-0 left-0 sm:-left-1 md:-left-3 right-0 sm:-right-1 md:-right-3 z-10 pointer-events-none px-1">
            <button
              onClick={prevSlide}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 sm:p-1.5 md:p-3 rounded-full shadow-lg pointer-events-auto transition-all duration-300 transform hover:scale-105"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 sm:p-1.5 md:p-3 rounded-full shadow-lg pointer-events-auto transition-all duration-300 transform hover:scale-105"
              aria-label="Next slide"
            >
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            </button>
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 sm:mt-6 md:mt-8 mx-1 sm:mx-0">
            {visibleFeatures().map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 p-4 sm:p-5 md:p-6 lg:p-8 hover:bg-gray-900/70 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)]"
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4`}
                >
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">
                  {feature.description}
                </p>
                <div className="text-sm sm:text-base text-gray-400">
                  <div className="mb-1 sm:mb-2">
                    <span className="text-blue-400 font-medium">
                      Current capabilities:
                    </span>
                  </div>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 md:space-y-2">
                    {feature.currentCapabilities.map((capability, i) => (
                      <li key={i}>{capability}</li>
                    ))}
                  </ul>

                  <div className="mt-2 sm:mt-3 md:mt-4 mb-1 sm:mb-2">
                    <span className="text-amber-400 font-medium">
                      On our roadmap:
                    </span>
                  </div>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 md:space-y-2">
                    {feature.roadmap.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
            {dots.map((dot, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${
                  currentIndex === i
                    ? "bg-blue-500 w-5 sm:w-6 md:w-8"
                    : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Smart Dashboard",
    description:
      "Situational awareness at a glance with a dynamic station map and intelligent monitoring system that provides real-time insights into your water quality network.",
    icon: ChartBar,
    gradient: "from-blue-500 to-blue-600",
    currentCapabilities: [
      "Dynamic station map with color-coded status indicators",
      "System summary with real-time health, uptime, and data freshness",
      "AI-powered analytics for pattern recognition and early warnings",
      "Cumulative Water Quality Index (WQI) for long-term trend tracking",
      "Smart alerts that identify deviations, trends, and anomalies",
    ],
    roadmap: [
      "Enhanced AI detection of emerging risks through behavioral baselining",
      "Customizable dashboard layouts for different user roles",
      "Predictive maintenance scheduling based on equipment performance",
      "Integration with weather and environmental data sources",
      "Advanced visualization tools for complex water quality relationships",
    ],
  },
  {
    title: "Station Manager",
    description:
      "Remotely configure and control your water quality monitoring stations with an intuitive interface designed for efficient management of your entire network.",
    icon: Settings,
    gradient: "from-cyan-500 to-cyan-600",
    currentCapabilities: [
      "Easy addition and configuration of field or plant units",
      "Parameter assignment to individual stations",
      "Power status, network connectivity, and data streaming health tracking",
      "Station grouping by watershed, district, or facility",
      "Bulk operations for efficient management of multiple stations",
    ],
    roadmap: [
      "Advanced diagnostic tools for remote troubleshooting",
      "Automated configuration recommendations based on location and use case",
      "Virtual station testing and simulation before physical deployment",
      "Integration with third-party maintenance management systems",
      "Mobile field companion app for on-site station maintenance",
    ],
  },
  {
    title: "Team Collaboration",
    description:
      "Built for multi-user workflows, our platform enables seamless collaboration across your organization with role-based access and comprehensive activity tracking.",
    icon: Share2,
    gradient: "from-green-500 to-green-600",
    currentCapabilities: [
      "User management with defined roles (Admin, Technician)",
      "Comprehensive activity logs and audit trails",
      "Support for agency, NGO, and corporate team structures",
      "Secure sharing of reports and insights",
      "Collaborative incident response workflows",
    ],
    roadmap: [
      "Advanced permission systems with custom role definitions",
      "In-platform communication and notification tools",
      "Integration with popular team collaboration platforms",
      "Shift management and handover documentation",
      "Knowledge base creation and management for institutional memory",
    ],
  },
  {
    title: "Reports",
    description:
      "Generate clear, exportable reports with a single click that meet environmental and regulatory standards, perfect for compliance submissions or public disclosures.",
    icon: Database,
    gradient: "from-purple-500 to-purple-600",
    currentCapabilities: [
      "Auto-generated daily and weekly summaries",
      "Export options in PDF, Excel, or via API",
      "Compliance-ready formatting for regulatory submissions",
      "Customizable templates for different reporting needs",
      "Scheduled report generation and distribution",
    ],
    roadmap: [
      "AI-assisted report commentary and insights",
      "Interactive report building with drag-and-drop components",
      "Automated regulatory compliance checking before submission",
      "Integration with government reporting systems",
      "Public-facing report portals for transparency initiatives",
    ],
  },
  {
    title: "Firmware & Drivers",
    description:
      "Our extensible platform ensures your devices stay current with a dedicated firmware and driver library that supports a wide range of third-party sensors.",
    icon: CloudLightning,
    gradient: "from-amber-500 to-amber-600",
    currentCapabilities: [
      "Library of sensor drivers for third-party compatibility",
      "Secure over-the-air firmware updates",
      "Version management for all deployed hardware",
      "Compatibility checking before updates",
      "Rollback capability for system stability",
    ],
    roadmap: [
      "Self-service driver development tools for custom sensors",
      "Automated testing and validation of firmware updates",
      "Integration with IoT device management platforms",
      "Advanced diagnostic tools for driver compatibility issues",
      "Driver marketplace for community and partner contributions",
    ],
  },
];
