"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { 
  Building2, Check, Target, Eye, ShieldCheck, Heart, Award, ArrowRight, 
  Cpu, Rocket, Briefcase, BarChart, Settings, Users, Code 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CompanyProfile() {
  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const coreValues = [
    {
      title: "Client-Centricity",
      description: "We align our engineering strategies with our clients' business goals to ensure mutual success.",
      icon: Users,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Technical Excellence",
      description: "We enforce high-performance native code and strict web security rules across all deliverables.",
      icon: Code,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Integrity & Transparency",
      description: "Open communication, regular sprint demo updates, and full intellectual property protection.",
      icon: ShieldCheck,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Continuous Innovation",
      description: "We embrace evolving technologies to ensure your business remains ahead of the competition.",
      icon: Rocket,
      color: "bg-rose-50 text-rose-600"
    }
  ];

  const industries = [
    "E-Commerce & Retail",
    "Healthcare & Telemedicine",
    "Logistics & Fleet Management",
    "Real Estate & Hospitality",
    "On-Demand Services",
    "E-Learning & EdTech",
    "FinTech",
    "SaaS Platforms"
  ];

  const developmentApproach = [
    {
      title: "Discovery & Blueprinting",
      description: "We map out user personas, refine requirements, and plan the architecture to design a robust roadmap."
    },
    {
      title: "Interactive Prototyping",
      description: "Our UI designers draft wireframes and high-fidelity clickable mockups so you experience the flow early."
    },
    {
      title: "Agile Engineering Sprints",
      description: "Our developers write clean, modular code in sprint cycles, keeping stakeholders updated with active builds."
    },
    {
      title: "Rigorous QA Testing",
      description: "A combination of automated unit checks and manual validation weeds out security vulnerabilities and speed lag."
    },
    {
      title: "Publishing & Launch",
      description: "We manage store submissions (Google Play / App Store) and cloud production setup, ensuring absolute compliance."
    }
  ];

  const technologies = [
    "Next.js", "React Native", "Flutter", "Kotlin & Jetpack Compose", "Swift & SwiftUI",
    "Node.js", "Python & Django", "PHP Laravel", "PostgreSQL", "MongoDB", "AWS", "Google Cloud"
  ];

  const achievements = [
    {
      metric: "50+",
      label: "Custom Projects Delivered"
    },
    {
      metric: "98%",
      label: "Client Retention Rate"
    },
    {
      metric: "15+",
      label: "Global Industries Served"
    },
    {
      metric: "24/7",
      label: "SLA Technical Support"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased text-zinc-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white flex items-center justify-center border-b border-slate-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-3xl animate-pulse duration-[10000ms]"></div>
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
            <Building2 className="w-4 h-4 shrink-0" />
            <span>Company Profile</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              Innovating Solutions
            </span>
            <span className="block text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              For a Digital World
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Devarya Solutions Private Limited is a full-service technology consultant and software development agency. We build future-ready web, mobile, and enterprise platforms.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("who-we-are");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/20 bg-white/5 text-white/95 hover:text-white hover:border-white/60 hover:bg-white/10 font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Company Intro & Who We Are */}
      <section id="who-we-are" className="py-20 md:py-28 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Engineering Digital Growth
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                Founded with a vision to redefine digital solutions, Devarya Solutions Private Limited partners with companies of all scales. We act as a dedicated tech backbone, helping transform creative ideas into functional, market-ready applications. 
              </p>
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                We believe that software shouldn't just run—it should solve real challenges. That's why our custom engineers focus heavily on robust architecture, modern UX standards, and performance tuning to secure long-term success.
              </p>

              <ul className="space-y-3.5 pt-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-zinc-700 font-medium text-[16px]">End-to-end SDLC ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-zinc-700 font-medium text-[16px]">Highly collaborative agile environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-zinc-700 font-medium text-[16px]">Flexible billing and support terms</span>
                </li>
              </ul>
            </div>

            {/* Mission & Vision Column Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mission Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-zinc-100 border border-zinc-200/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      To empower companies with custom technology that drives concrete business growth, simplifies complex operations, and improves digital scalability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-zinc-100 border border-zinc-200/50 shadow-sm relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl"></div>
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      To be recognized globally as a premium development partner, building long-term alliances through clean code, client trust, and relentless innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Our Core Values
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              The fundamental principles that guide our relationships, decisions, and development workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-zinc-100 p-8 text-left shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                  <div className={`h-12 w-12 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Achievements Section */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Why Choose Devarya Solutions?
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                Choosing a technology partner is about finding the right balance of expertise, agility, and integrity. We set ourselves apart by delivering transparent timelines and highly functional software.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-1">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Direct Communication</h4>
                    <p className="text-sm text-zinc-500 mt-0.5">Continuous Slack updates, weekly demo check-ins, and direct engineer access.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-1">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Future-Ready Architectures</h4>
                    <p className="text-sm text-zinc-500 mt-0.5">We avoid legacy traps, building systems on scalable next-gen tech models.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-1">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Full IP & Source Code Protection</h4>
                    <p className="text-sm text-zinc-500 mt-0.5">Comprehensive NDAs ensure your ideas and codes remain fully yours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-950 text-white text-center border border-slate-900 shadow-lg relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-blue-500/5 rounded-full blur-3xl"></div>
                  <span className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 block mb-2">
                    {item.metric}
                  </span>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Our Expertise & Industries We Serve */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Industries list */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Industries We Serve
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We bring specialized technical blueprints and domain knowledge to diverse global sectors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {industries.map((ind, idx) => (
                  <div key={idx} className="px-4 py-2.5 rounded-xl bg-white border border-zinc-100 shadow-sm text-xs font-semibold text-slate-800 text-center">
                    {ind}
                  </div>
                ))}
              </div>
            </div>

            {/* Our Technical Expertise details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Our Tech Expertise
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Cpu className="w-5 h-5" />
                    <span>Web App Development</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Custom responsive portals, internal dashboards, and enterprise SaaS solutions built with React/Next.js and secure APIs.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Cpu className="w-5 h-5" />
                    <span>Mobile Applications</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Premium native iOS & Android applications and performant cross-platform frameworks (Flutter & React Native).
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Cpu className="w-5 h-5" />
                    <span>Cloud Services & DevOps</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Secure hosting configurations, database scaling, Docker virtualization, and streamlined CI/CD deployments.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Cpu className="w-5 h-5" />
                    <span>Consultancy & Discovery</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Requirement blueprints, custom UX prototyping, and product planning mapping for early startups and enterprises.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Development Approach Timeline */}
      <section className="py-20 md:py-28 bg-slate-950 text-white border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Our Development Approach
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base">
              A transparent, highly structured process ensuring quality checkpoints at every development stage.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 text-left max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {developmentApproach.map((step, idx) => (
              <div key={idx} className="relative group">
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

      {/* Technologies We Work With */}
      <section className="py-20 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center px-6 py-3 rounded-xl bg-slate-50 border border-zinc-200/50 hover:bg-zinc-100 hover:border-zinc-300 transition-colors shadow-sm cursor-default">
                <span className="font-semibold text-slate-800 text-[15px]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action & Contact Section */}
      <section id="contact-section" className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Ready to Kickstart Your Project?
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              Get in touch with our experts today. We'll analyze your goals and deliver a comprehensive estimate and layout outline.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
