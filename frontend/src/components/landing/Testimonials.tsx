"use client";

import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "Apollodon has revolutionized how we monitor water quality across our research sites. The real-time data and predictive analytics have been game-changing for our environmental studies.",
      name: "Dr. Sarah Chen",
      title: "Environmental Research Institute",
      company: "Research Institute",
      project: "Environmental Monitoring",
      savings: "60% time saved",
      initials: "DR",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      quote:
        "The IoT sensor integration is seamless, and the dashboard provides exactly the insights we need for water management decisions. Highly recommended for any environmental monitoring project.",
      name: "Michael Johnson",
      title: "Water Authority Director",
      company: "City Water Authority",
      project: "Municipal Water System",
      savings: "40% efficiency boost",
      initials: "MJ",
      gradient: "from-cyan-500 to-green-500",
    },
    {
      id: 3,
      quote:
        "As a thesis researcher, Apollodon provided the perfect platform for my water quality studies. The data accuracy and analysis tools exceeded my expectations.",
      name: "Anna Lopez",
      title: "Graduate Researcher",
      company: "University Lab",
      project: "Thesis Research",
      savings: "Research completed 3x faster",
      initials: "AL",
      gradient: "from-green-500 to-purple-500",
    },
    {
      id: 4,
      quote:
        "Best investment we've made. The budget tracking caught potential overruns early, saving us $2M. The AI insights help us make data-driven decisions every day.",
      name: "Emily Watson",
      title: "Construction Director",
      company: "Skyline Builders",
      project: "Mixed-Use Development",
      savings: "$2M saved in overruns",
      initials: "EW",
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000); // Change every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="px-4 py-16 sm:py-18 md:py-20 bg-gray-900/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by environmental organizations and researchers worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial card */}
          <Card className="bg-gradient-to-b from-gray-900/70 to-gray-800/50 border border-gray-700 p-6 sm:p-8 md:p-10 lg:p-12 text-center transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_50px_rgba(59,130,246,0.35)] rounded-xl">
            {/* Quote */}
            <div className="mb-6 sm:mb-8 relative">
              <div className="absolute -top-4 sm:-top-6 -left-2 text-5xl sm:text-7xl text-blue-500/20 font-serif">
                &ldquo;
              </div>
              <p className="text-white sm:text-lg md:text-xl relative z-10 italic">
                {currentTestimonial.quote.replace(/"/g, '\\"')}
              </p>
              <div className="absolute -bottom-6 sm:-bottom-10 -right-2 text-5xl sm:text-7xl text-blue-500/20 font-serif">
                &rdquo;
              </div>
            </div>

            {/* Star rating */}
            <div className="flex justify-center text-yellow-400 mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current mx-0.5"
                />
              ))}
            </div>

            <div className="flex items-center justify-between">
              {/* Navigation button */}
              <button
                onClick={goToPrevious}
                aria-label="Previous testimonial"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
              </button>

              {/* User details */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {currentTestimonial.initials}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg sm:text-xl text-white">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400">
                    {currentTestimonial.title}
                  </div>
                  <div className="text-sm sm:text-base text-blue-400 font-medium">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Navigation button */}
              <button
                onClick={goToNext}
                aria-label="Next testimonial"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
              </button>
            </div>

            {/* Project & Savings info */}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <div className="text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                Project:{" "}
                <span className="text-white">{currentTestimonial.project}</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
                {currentTestimonial.savings}
              </div>
            </div>
          </Card>

          {/* Dot indicators & controls */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-2">
            <button
              onClick={toggleAutoPlay}
              className="mr-3 sm:mr-4 bg-gray-800 hover:bg-gray-700 p-1.5 sm:p-2 rounded-full transition-colors"
              aria-label={
                isAutoPlaying ? "Pause auto-scroll" : "Play auto-scroll"
              }
            >
              {isAutoPlaying ? (
                <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              ) : (
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              )}
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 w-4 sm:w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
