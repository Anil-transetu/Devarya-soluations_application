"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { 
  Briefcase, Check, ArrowRight, Heart, Users, Laptop, Award, Shield, 
  MapPin, Clock, Calendar, ChevronDown, ChevronUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function WeAreHiring() {
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

  const benefits = [
    {
      title: "100% Remote Flexibility",
      description: "Work from the comfort of your home, with supported flexible working hours alignment.",
      icon: Laptop
    },
    {
      title: "Comprehensive Health",
      description: "Premium health insurance coverages for you and your direct family members.",
      icon: Heart
    },
    {
      title: "Professional Growth",
      description: "Annual learning stipends and budget coverages for courses, certs, and webinars.",
      icon: Award
    },
    {
      title: "Modern Workstation Setup",
      description: "We provide state-of-the-art laptop setups and accessories allowances to all employees.",
      icon: Shield
    }
  ];

  const jobs = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "5+ Years",
      description: "Lead the frontend and backend architectures of custom SaaS applications using Next.js, Node.js, and SQL databases."
    },
    {
      title: "Flutter Mobile Developer",
      department: "Mobile Engineering",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "3+ Years",
      description: "Build clean, reusable components and publish high-performance Android & iOS mobile applications."
    },
    {
      title: "UI/UX & Product Designer",
      department: "Design Team",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2+ Years",
      description: "Draft clickable wireframes, user experience journeys, and beautiful responsive Material layouts for startups."
    }
  ];

  const processSteps = [
    {
      title: "Application Review",
      description: "Submit your resume through our form. Our recruiting team checks experience blueprints and tech stacks."
    },
    {
      title: "Technical Assessment",
      description: "Complete a short take-home coding check or live problem-solving test focusing on code clean-ups."
    },
    {
      title: "Technical Interview",
      description: "Discuss your code solution, architectural decisions, and experience alignment with our tech leads."
    },
    {
      title: "Culture & HR Alignment",
      description: "A final chat with our operations lead to discuss work methodologies, flexible terms, and package offers."
    }
  ];

  const faqs = [
    {
      question: "Are these roles completely remote?",
      answer: "Yes. All our current openings support 100% remote working conditions, letting you work from anywhere in India while keeping key team overlaps."
    },
    {
      question: "What hardware setup is provided?",
      answer: "We supply our engineers with a high-end development laptop (such as Apple MacBook Pro or equivalent Windows machine) alongside standard accessories."
    },
    {
      question: "How long does the hiring process take?",
      answer: "We value your time. The entire process from resume review to final offer typically takes between 7 to 14 days."
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
            <Briefcase className="w-4 h-4 shrink-0" />
            <span>We Are Hiring</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              Build the Future
            </span>
            <span className="block text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              With Devarya Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Join a collaborative team of software developers, designers, and tech consultants building high-impact platforms for global enterprises.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => {
                const element = document.getElementById("openings-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer"
            >
              View Openings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/20 bg-white/5 text-white/95 hover:text-white hover:border-white/60 hover:bg-white/10 font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer"
            >
              Drop Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Join Our Team & Company Culture */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Join a Culture of High Autonomy
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                At Devarya Solutions, we trust our developers and designers to own their schedules and work scopes. We avoid micro-management, replacing it with clear expectations, mutual support, and collaborative problem-solving.
              </p>
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                We organize weekly tech talks, share learning blueprints, and celebrate code clean-ups. Our engineers work closely with global startups, meaning your contributions are visible and directly impact final product outcomes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-zinc-100/50">
                  <h4 className="font-bold text-slate-900 text-lg">Collaborative</h4>
                  <p className="text-xs text-zinc-500 mt-1">Direct feedback channels and peer code check reviews.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-zinc-100/50">
                  <h4 className="font-bold text-slate-900 text-lg">Growth-Driven</h4>
                  <p className="text-xs text-zinc-500 mt-1">Supported learning frameworks and direct mentor alignment.</p>
                </div>
              </div>
            </div>

            {/* Visual Callout block */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-zinc-950 border border-slate-800 text-white shadow-xl overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3">Work That Matters</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Build applications using modern tech stacks like Next.js, Kotlin, and Flutter. We set strict security and high-speed benchmarks.
                </p>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                  Flexible Hours • 100% Remote
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Employee Benefits
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              We design our perks to support your physical, mental, and professional well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-zinc-100 p-8 text-left shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings-section" className="py-20 md:py-28 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Current Openings
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              Explore our current vacancies. Click apply and let's discuss your engineering goals.
            </p>
          </div>

          <div className="text-left space-y-6">
            {jobs.map((job, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/60 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-4 max-w-2xl">
                  {/* Job meta tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-600 uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 uppercase tracking-wider">
                      {job.experience}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-950">{job.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{job.description}</p>
                  
                  <div className="flex gap-4 text-xs font-medium text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                  </div>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full md:w-auto h-11 px-6 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shrink-0 cursor-pointer"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 md:py-28 bg-slate-950 text-white border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Our Hiring Process
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base">
              A transparent review timeline mapping from submission to onboarding.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 text-left max-w-3xl mx-auto space-y-12 pl-6 md:pl-10">
            {processSteps.map((step, idx) => (
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

      {/* Frequently Asked Questions */}
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
                    className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 font-bold text-[17px] text-slate-800 transition-colors cursor-pointer"
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

      {/* Apply Now CTA */}
      <section id="contact-section" className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Ready to Join Devarya Solutions?
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base">
              Submit your details, select requirement "Hire Dedicated Developers" (or list it in Message), and paste your resume link. We'll reach out within 24 hours.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
