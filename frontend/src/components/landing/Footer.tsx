import { Calendar, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800 px-4 py-16 bg-gray-900/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.svg"
                alt="Apollodon Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold"></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm sm:text-base">
              Advanced water quality monitoring system integrating IoT sensors
              with predictive models for comprehensive environmental analysis.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#docs"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#api"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#support"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Apollodon. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
