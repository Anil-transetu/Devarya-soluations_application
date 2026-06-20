"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  heroIcon: React.ComponentType<any>;
  overviewTitle: string;
  overviewDescription: string;
  overviewHighlights: string[];
  featuresTitle: string;
  featuresDescription: string;
  features: FeatureItem[];
  whyChooseTitle: string;
  whyChooseDescription: string;
  whyChooseItems: WhyChooseItem[];
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];
  technologiesTitle: string;
  technologies: { name: string; icon?: React.ComponentType<any> }[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
}

export function ServicePageLayout({
  title,
  subtitle,
  heroDescription,
  heroIcon: HeroIcon,
  overviewTitle,
  overviewDescription,
  overviewHighlights,
  featuresTitle,
  featuresDescription,
  features,
  whyChooseTitle,
  whyChooseDescription,
  whyChooseItems,
  processTitle,
  processDescription,
  processSteps,
  technologiesTitle,
  technologies,
  faqs,
  ctaTitle,
  ctaDescription,
}: ServicePageLayoutProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased text-zinc-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white flex items-center justify-center border-b border-slate-900">
        {/* Animated Background Gradients & Glow Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-3xl animate-pulse duration-[10000ms]"></div>
          {/* Subtle Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px"
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-md">
            {HeroIcon && <HeroIcon className="w-4 h-4 shrink-0" />}
            <span>{subtitle}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              {title}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
            {heroDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("features-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/20 bg-white/5 text-white/95 hover:text-white hover:border-white/60 hover:bg-white/10 font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section id="overview-section" className="py-20 md:py-28 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {overviewTitle}
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                {overviewDescription}
              </p>
              
              {/* Bullets/Highlights */}
              <ul className="space-y-3.5 pt-4">
                {overviewHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-zinc-700 font-medium text-[16px]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Decorative card/visual */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-zinc-100 border border-zinc-200/50 shadow-md overflow-hidden">
                {/* Background design accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">Service Advantages</h3>
                <div className="space-y-5 relative z-10">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100">
                    <h4 className="font-semibold text-slate-900 mb-1">Guaranteed Performance</h4>
                    <p className="text-xs text-zinc-500">Fully optimized logic resulting in lightning-fast response times.</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100">
                    <h4 className="font-semibold text-slate-900 mb-1">Scalability & Flexibility</h4>
                    <p className="text-xs text-zinc-500">Built to handle business growth and adapt to changing market requirements.</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100">
                    <h4 className="font-semibold text-slate-900 mb-1">Advanced Security</h4>
                    <p className="text-xs text-zinc-500">Adherence to modern web security guidelines to safeguard critical data.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {whyChooseTitle}
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              {whyChooseDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-zinc-100 p-8 text-left shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features-section" className="py-20 md:py-28 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {featuresTitle}
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              {featuresDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative p-8 rounded-2xl bg-white border border-zinc-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process Timeline Section */}
      <section className="py-20 md:py-28 bg-slate-950 text-white border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {processTitle}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base">
              {processDescription}
            </p>
          </div>

          <div className="relative border-l border-zinc-800 text-left max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1 flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-full bg-slate-950 border-2 border-blue-500 text-blue-400 text-sm font-bold shadow-md shadow-blue-500/20 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section (If applicable) */}
      {technologies && technologies.length > 0 && (
        <section className="py-20 bg-white border-b border-zinc-100">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              {technologiesTitle}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {technologies.map((tech, idx) => {
                const TechIcon = tech.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-50 border border-zinc-200/50 hover:bg-zinc-100 hover:border-zinc-300 transition-colors shadow-sm cursor-default"
                  >
                    {TechIcon && <TechIcon className="w-5 h-5 text-blue-600" />}
                    <span className="font-semibold text-slate-800 text-[15px]">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="text-left space-y-4 pt-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-zinc-200 rounded-xl overflow-hidden shadow-sm transition-colors duration-200"
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 font-bold text-[17px] text-slate-800 transition-colors"
                    >
                      <span className="pr-4">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-zinc-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-6 bg-white border-t border-zinc-100 text-zinc-600 text-sm leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Call To Action & Contact Section */}
      <section id="contact-section" className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {ctaTitle}
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              {ctaDescription}
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
