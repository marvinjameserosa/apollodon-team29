import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-950/10 to-transparent relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/60 p-6 sm:p-10 md:p-14 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-sm transform hover:shadow-[0_20px_60px_-15px_rgba(0,118,255,0.25)] hover:border-gray-700 transition-all duration-500">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of water quality monitoring. Contact us to learn
              more about implementing AquaSen in your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm sm:text-base px-6 py-2.5 font-medium hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] w-full sm:w-auto"
                >
                  View Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="mailto:sales@apollodon.tech">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800/80 text-sm sm:text-base px-6 py-2.5 bg-gray-800/40 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(156,163,175,0.3)] hover:border-blue-500/30 w-full sm:w-auto flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
