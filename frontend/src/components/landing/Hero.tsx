"use client";

import Link from "next/link";
import { Droplet } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CoreBoard3D } from "@/components/landing/Coreboard";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 pt-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute top-60 -right-40 w-80 h-80 bg-cyan-500 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      <motion.div
        className="container mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Badge className="mb-4 sm:mb-6 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-500/10 text-blue-300 text-xs sm:text-sm backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] relative rounded-2xl sm:rounded-3xl inline-flex items-center space-x-1 sm:space-x-2">
          <Droplet className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
          <span className="relative">
            The Future of Water Quality Monitoring
          </span>
        </Badge>

        <div className="overflow-hidden">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Water
            <br />
            <span className="relative inline-block h-[1.2em] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Understood.
            </span>
          </motion.h1>
        </div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Powered by Apollodon CoreBoard, we help you detect issues early,
          respond quickly, and manage water with unmatched accuracy. Smart
          sensors and real-time insights for every water challenge.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 hover:scale-105 transition-transform"
            >
              View Demo
            </Button>
          </Link>

          <Link href="mailto:sales@apolldon.tech">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-white/10 hover:text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-transparent hover:scale-105 transition-transform"
            >
              Contact Sales
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative flex justify-center mb-8"
      >
        <div className="w-100 ">
          <CoreBoard3D modelPath="/coreboard.gltf" />
        </div>
      </motion.div>
    </section>
  );
}
