"use client";

import { useState, useEffect, useRef } from "react";
import { BarChart2, Database, Globe, Activity } from "lucide-react";

const useCountUp = (
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

const formatNumber = (num: number, originalText: string) => {
  if (originalText.includes("K+")) {
    return `${(num / 1000).toFixed(0)}K+`;
  }
  if (originalText.includes("M+")) {
    return `${(num / 1000000).toFixed(1)}M+`;
  }
  if (originalText.includes("%")) {
    return `${(num / 10).toFixed(1)}%`;
  }
  if (
    originalText.includes("+") &&
    !originalText.includes("K") &&
    !originalText.includes("M")
  ) {
    return `${num}+`;
  }
  return num.toString();
};

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stats = [
    {
      value: 10000,
      display: "10K+",
      label: "Monitoring Stations",
      color: "text-blue-400",
      icon: BarChart2,
      bgColor: "bg-blue-400/10",
      iconColor: "text-blue-400",
    },
    {
      value: 1000000,
      display: "1M+",
      label: "Data Points",
      color: "text-cyan-400",
      icon: Database,
      bgColor: "bg-cyan-400/10",
      iconColor: "text-cyan-400",
    },
    {
      value: 999,
      display: "99.9%",
      label: "Uptime",
      color: "text-green-400",
      icon: Activity,
      bgColor: "bg-green-400/10",
      iconColor: "text-green-400",
    },
    {
      value: 50,
      display: "50+",
      label: "Countries",
      color: "text-yellow-400",
      icon: Globe,
      bgColor: "bg-yellow-400/10",
      iconColor: "text-yellow-400",
    },
  ];

  const animatedValue1 = useCountUp(stats[0].value, 2000, isVisible);
  const animatedValue2 = useCountUp(stats[1].value, 2200, isVisible);
  const animatedValue3 = useCountUp(stats[2].value, 2400, isVisible);
  const animatedValue4 = useCountUp(stats[3].value, 2600, isVisible);
  const animatedValues = [
    animatedValue1,
    animatedValue2,
    animatedValue3,
    animatedValue4,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-cyan-900/30 border-y border-gray-800/50"
    >
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Global Impact
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg md:text-xl">
            Empowering water management decisions worldwide through accurate
            monitoring and intelligent analytics
          </p>
        </div>{" "}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 md:p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className={`${stat.bgColor} p-2 sm:p-3 rounded-lg`}>
                  <stat.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`}
                  />
                </div>
              </div>
              <div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-1 sm:mb-2`}
              >
                {formatNumber(animatedValues[index], stat.display)}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
