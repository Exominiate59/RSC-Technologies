import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import Galaxy from "@/Galaxy";
import { useMode } from "../context/ModeContext";
import { mockData } from "../mock";

const Hero = () => {
  const { mode } = useMode();
  const data = mode === "rsc" ? mockData.modes.rsc.hero : mockData.modes.portfolio.hero;

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Galaxy
        className="absolute inset-0 w-full h-full"
        hueShift={140}
        saturation={0.9}
        density={0.8}
        twinkleIntensity={0.45}
      />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {data.title}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-light">{data.subtitle}</h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection(mode === "rsc" ? "#services" : "#projects")}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                {data.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                {data.cta2}
              </Button>
            </div>

            <Button variant="transparent" size="lg" onClick={() => scrollToSection("#about")}>
              <ArrowDown className="h-6 w-6 text-cyan-400 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;