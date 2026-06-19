"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Shield, Code, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function WebDesigners() {
  return (
    <HirePageLayout
      title="Hire Dedicated Web Designers"
      subtitle="Modern Web Layout Experts"
      heroIcon={Shield}
      heroDescription="Hire experienced web designers to build stunning, highly responsive layouts, corporate homepages, and engaging landing pages that convert."
      
      overviewTitle="Stunning Web Design That Converts"
      overviewDescription="At Devarya Solutions, we connect you with dedicated web designers who focus on typography, color harmonies, white space, and responsive grids. Your website is your primary digital storefront, and our designers structure layouts that load fast, look premium, and guide visitors toward business conversions."
      overviewHighlights={[
        "Expert web designers specializing in landing pages and corporate sites",
        "Consistent brand styling across all desktop, tablet, and mobile layouts",
        "Proficient in modern design tools: Figma, Adobe XD, and Photoshop",
        "Experienced in wireframing, UX heuristics, and conversion optimization",
        "Modern design aesthetics tailored to elevate your business presence"
      ]}
      
      whyHireTitle="Why Hire Web Designers from Devarya Solutions?"
      whyHireDescription="Leverage user-centered design methodologies to build outstanding web layouts."
      whyHireItems={[
        {
          title: "Vetted Design Talent",
          description: "Our designers pass rigorous tests covering web aesthetics, layout design, user flow mapping, and tool proficiency.",
          icon: Code
        },
        {
          title: "Engaging Landing Pages",
          description: "We focus on creating high-conversion layouts, allowing you to preview the application flow before coding.",
          icon: Zap
        },
        {
          title: "Direct Design Control",
          description: "Review progress daily through shared Figma files. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Web Design Skills"
      skillsDescription="Our designers possess comprehensive expertise across user research, wireframing, UI prototyping, and design systems."
      skills={[
        {
          title: "Landing Page Design",
          description: "Designing high-conversion homepages and standalone campaign landing pages.",
          icon: Code
        },
        {
          title: "Responsive Grid Layouts",
          description: "Drafting layouts optimized for diverse desktop, tablet, and mobile screens.",
          icon: Zap
        },
        {
          title: "UI Design Systems",
          description: "Developing consistent style guides, including color palettes, typography, and web component libraries.",
          icon: Settings
        },
        {
          title: "Visual Assets & Icons",
          description: "Creating custom icons, illustrations, and vector graphics for web integrations.",
          icon: Terminal
        },
        {
          title: "UX Heuristics & Audit",
          description: "Reviewing page layouts to ensure intuitive navigation and clear calls-to-action.",
          icon: Layers
        },
        {
          title: "Mockups & Prototypes",
          description: "Building clickable interactive web page prototypes to simulate user workflows.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your product design requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior web designer working 160 hours per month exclusively for your company. Best for custom system creation.",
          duration: "Monthly Engagement",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct interaction on Slack/Teams",
            "Daily updates on Figma files",
            "Full IP ownership"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "A web designer dedicated for 80 hours per month. Ideal for ongoing iterations, minor updates, and support.",
          duration: "Flexible Terms",
          icon: Clock,
          benefits: [
            "80 Hours/Month dedicated focus",
            "Slack/Teams communication",
            "Weekly review sessions",
            "Easily scale up to full-time"
          ]
        },
        {
          title: "Hourly Contract",
          description: "Hire a web designer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified web designer in four simple steps."
      processSteps={[
        {
          title: "Submit Design Scope",
          description: "Outline your product features, design requirements, and contract timeline."
        },
        {
          title: "Review Shortlisted Portfolios",
          description: "Evaluate designer portfolios handpicked to match your application requirements."
        },
        {
          title: "Conduct Interviews",
          description: "Engage with selected designers in design review and communication calls."
        },
        {
          title: "Designer Onboarding",
          description: "Grant Figma project access, sign NDAs, set up communication, and begin design."
        }
      ]}
      
      technologiesTitle="Design Tools & Software"
      technologies={[
        { name: "Figma" },
        { name: "Adobe XD" },
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "WordPress (Visual Builders)" },
        { name: "HTML & CSS (Inspect)" }
      ]}
      
      faqs={[
        {
          question: "Do your web designers collaborate directly with frontend developers?",
          answer: "Yes, absolutely. Our UI/UX web designers structure Figma files to include design system tokens, assets, and layout coordinates, making handoff to developers seamless."
        },
        {
          question: "Do you sign NDAs before onboarding designers?",
          answer: "Yes, 100%. We sign comprehensive NDAs before sharing any resource CVs or technical data, and all IP rights belong entirely to your company."
        },
        {
          question: "What communication tools do the designers use?",
          answer: "Designers integrate into your company's workflow, using Slack, Teams, Zoom, Jira, and Figma comments to communicate and gather feedback."
        }
      ]}
      
      ctaTitle="Hire Vetted Web Designers"
      ctaDescription="Create intuitive and visually stunning products. Contact Devarya Solutions today to hire experienced web designers."
    />
  );
}
