"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { MonitorSmartphone, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function FrontendDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Front-End Developers"
      subtitle="Interactive UI/UX Engineers"
      heroIcon={MonitorSmartphone}
      heroDescription="Hire expert frontend developers to build stunning, responsive, and pixel-perfect user interfaces that engage customers across all devices."
      
      overviewTitle="Pixel-Perfect Frontend Implementation"
      overviewDescription="At Devarya Solutions, we offer dedicated frontend developers who are masters of HTML, CSS, JavaScript, and modern libraries like React, Next.js, and Vue. We specialize in converting UI/UX mockups into clean, semantic, and high-performance interactive code, ensuring a satisfying user experience that improves retention."
      overviewHighlights={[
        "Expert frontend developers specializing in React, Next.js, and Vue",
        "Consistent UI styling across diverse screens, tablets, and devices",
        "Proficient in modern CSS frameworks like Tailwind CSS and CSS modules",
        "Experienced in responsive web design, flexbox, grid, and fluid layouts",
        "Thorough testing setup for visual and logical frontend flows"
      ]}
      
      whyHireTitle="Why Hire Front-End Developers from Devarya Solutions?"
      whyHireDescription="Leverage interactive user interface architectures to build outstanding web applications."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering UI rendering, logic, responsive design, and frontend performance auditing.",
          icon: Code
        },
        {
          title: "Fast Page Loads",
          description: "We focus on optimizing Core Web Vitals, asset compression, and lazy loading, ensuring lightning-fast pages.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Front-End Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across modern markup, scripting, styling, and framework tools."
      skills={[
        {
          title: "HTML5 & Semantic Markup",
          description: "Writing clean, accessible, and SEO-friendly semantic HTML structures.",
          icon: Code
        },
        {
          title: "Modern CSS & Tailwind",
          description: "Creating responsive, fluid layouts using CSS grid, flexbox, and modern CSS preprocessors.",
          icon: Zap
        },
        {
          title: "React & Next.js Frameworks",
          description: "Building fast, dynamic single page apps and server-side rendered portals.",
          icon: Settings
        },
        {
          title: "JavaScript & TypeScript",
          description: "Writing solid, typed scripts for clean frontend business logic and state transitions.",
          icon: Terminal
        },
        {
          title: "State Management",
          description: "Implementing Redux, Zustand, Recoil, or Context API for reliable user state storage.",
          icon: Layers
        },
        {
          title: "Frontend Optimization",
          description: "Image optimization, code splitting, lazy loading, and audit reports via Lighthouse.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your frontend engineering requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior frontend developer working 160 hours per month exclusively for your company. Best for custom site creation.",
          duration: "Monthly Engagement",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct interaction on Slack/Teams",
            "Daily updates and git commits",
            "Full IP ownership"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "A frontend developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
          duration: "Flexible Terms",
          icon: Clock,
          benefits: [
            "80 Hours/Month dedicated focus",
            "Slack/Teams communication",
            "Weekly sprint planning",
            "Easily scale up to full-time"
          ]
        },
        {
          title: "Hourly Contract",
          description: "Hire a frontend developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
          duration: "Hourly Billing",
          icon: Clock,
          benefits: [
            "Billing based on hours worked",
            "Detailed timesheet tracking",
            "Perfect for minor enhancements",
            "No long-term commitments"
          ]
        }
      ]}
      
      processTitle="Getting Started"
      processDescription="Hire a qualified frontend developer in four simple steps."
      processSteps={[
        {
          title: "Submit UI Requirements",
          description: "Outline your frontend application features, design mockups, and contract timeline."
        },
        {
          title: "Review Shortlisted Resumes",
          description: "Evaluate developer profiles handpicked to match your application requirements."
        },
        {
          title: "Conduct Interviews",
          description: "Engage with selected developers in technical and communication evaluation calls."
        },
        {
          title: "Developer Onboarding",
          description: "Grant project tool access, sign NDAs, set up communication, and begin development."
        }
      ]}
      
      technologiesTitle="Frontend Tech Stack & Tools"
      technologies={[
        { name: "React.js & Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Vue.js & Nuxt" },
        { name: "HTML5 & CSS3" },
        { name: "Git & Webpack" }
      ]}
      
      faqs={[
        {
          question: "Can your frontend developers convert Figma designs into code?",
          answer: "Yes, absolutely. Our developers work closely with design assets (Figma, Adobe XD, Sketch) and convert them into pixel-perfect, responsive HTML/CSS/React code."
        },
        {
          question: "Do you sign NDAs before onboarding developers?",
          answer: "Yes, 100%. We sign comprehensive NDAs before sharing any resource CVs or technical data, and all IP rights belong entirely to your company."
        },
        {
          question: "What communication tools do the developers use?",
          answer: "Developers integrate into your company's workflow, using Slack, Teams, Zoom, Jira, and GitHub/GitLab to manage tasks and communicate daily."
        }
      ]}
      
      ctaTitle="Hire Vetted Front-End Developers"
      ctaDescription="Build high-performance, responsive web interfaces. Contact Devarya Solutions today to hire experienced frontend developers."
    />
  );
}
