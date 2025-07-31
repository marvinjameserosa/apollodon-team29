import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing options for organizations of all sizes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 relative hover:bg-gray-900/70 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] hover:border-blue-500/30 md:mt-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">
                Starter
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-blue-400">
                  $99
                </span>
                <span className="text-gray-400 text-sm sm:text-base">
                  /month
                </span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Up to 5 monitoring stations
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Real-time data collection
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Basic analytics dashboard
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Email alerts
                </li>
              </ul>
              <Link href="mailto:sales@apollodon.tech">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base font-medium py-2.5">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Card>
          <Card className="bg-gray-900/50 border-blue-500 p-6 sm:p-8 relative hover:bg-gray-900/70 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(59,130,246,0.4)] hover:border-blue-400 hover:scale-105 z-10 md:-mt-4">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-0.5 px-3 text-xs sm:text-sm">
              Most Popular
            </Badge>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">
                Enterprise
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-blue-400">
                  Custom
                </span>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Tailored to your needs
                </p>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-400">
                      Unlimited
                    </span>{" "}
                    monitoring stations
                  </span>
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Dedicated support team
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Priority feature requests
                </li>
              </ul>
              <Link href="mailto:sales@apollodon.tech">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base font-medium py-2.5">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 relative hover:bg-gray-900/70 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] hover:border-blue-500/30 md:mt-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">
                Professional
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-blue-400">
                  $299
                </span>
                <span className="text-gray-400 text-sm sm:text-base">
                  /month
                </span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Up to 25 monitoring stations
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Advanced predictive analytics
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Custom reporting
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  API access
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <Link href="mailto:sales@apollodon.tech">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base font-medium py-2.5">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
