import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-white px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Technology Background"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center -mt-16">
        <h1 className="max-w-4xl font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.1] mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 block mb-2">
            Devarya Solutions
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 block">
            Private Limited
          </span>
        </h1>

        <p className="max-w-[700px] text-zinc-600 text-lg md:text-xl font-medium leading-relaxed mb-10 mx-auto">
          We deliver scalable, secure, and innovative technology solutions that streamline operations, vehicle identification, payment processing, and transportation infrastructure management.
        </p>

        <Button 
          size="lg" 
          className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-7 text-lg group shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105"
        >
          Get a Quote
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
