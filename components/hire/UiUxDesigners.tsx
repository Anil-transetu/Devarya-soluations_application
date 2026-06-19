"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Palette, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function UiUxDesigners() {
  return (
    <HirePageLayout
      title="Hire Dedicated UI/UX Designers"
      subtitle="User Journey Artists"
      heroIcon={Palette}
      heroDescription="Hire professional UI/UX designers to draft intuitive user journeys, wireframes, and high-fidelity interface layouts for web and mobile apps."
      
      overviewTitle="Human-Centered Interface Design"
      overviewDescription="At Devarya Solutions, we offer dedicated UI/UX designers who focus on mapping user personas, constructing interactive prototypes, and designing complete visual design systems. We design websites and mobile applications that are as easy to use as they are beautiful, ensuring a satisfying user experience that improves retention."
      overviewHighlights={[
        "Expert UI/UX designers specializing in interactive wireframing and prototyping",
        "Consistent brand styling across diverse mobile and web screens",
        "Proficient in design tools: Figma, Adobe XD, Sketch, and Photoshop",
        "Experienced in responsive web layout design, user journey mapping, and research",
        "Modern design principles prioritizing white space, typography, and contrast"
      ]}
      
      whyHireTitle="Why Hire UI/UX Designers from Devarya Solutions?"
      whyHireDescription="Leverage user-centered design methodologies to build outstanding web and mobile apps."
      whyHireItems={[
        {
          title: "Vetted Design Talent",
          description: "Our designers pass rigorous tests covering UI aesthetics, layout design, user flow mapping, and tool proficiency.",
          icon: Code
        },
        {
          title: "Engaging Mockups",
          description: "We focus on creating high-fidelity interactive mockups, allowing you to preview the application flow before coding.",
          icon: Zap
        },
        {
          title: "Direct Design Control",
          description: "Review progress daily through Figma files. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="UI/UX Design Skills"
      skillsDescription="Our designers possess comprehensive expertise across user research, wireframing, UI prototyping, and design systems."
      skills={[
        {
          title: "User Research & Persona",
          description: "Conducting user analysis and mapping detailed personas to guide structural product decisions.",
          icon: Code
        },
        {
          title: "Wireframing & Flowcharts",
          description: "Drafting structural page wireframes and user flowcharts to outline navigation layouts.",
          icon: Zap
        },
        {
          title: "Interactive Prototyping",
          description: "Creating clickable, dynamic mockups to simulate the actual application feel and UX.",
          icon: Settings
        },
        {
          title: "Visual Design Systems",
          description: "Developing consistent style guides, including color palettes, typography, and UI component libraries.",
          icon: Terminal
        },
        {
          title: "Mobile App Design",
          description: "Structuring specific mobile app screens adhering to Material Design (Android) and HIG (iOS) standards.",
          icon: Layers
        },
        {
          title: "Responsive Web Layouts",
          description: "Designing responsive grids and flexible layouts to ensure uniform desktop, tablet, and mobile presentation.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your product design requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior UI/UX designer working 160 hours per month exclusively for your company. Best for custom system creation.",
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
          description: "A UI/UX designer dedicated for 80 hours per month. Ideal for ongoing iterations, minor updates, and support.",
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
          description: "Hire a UI/UX designer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified UI/UX designer in four simple steps."
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
      
      technologiesTitle="Design Tools & Technologies"
      technologies={[
        { name: "Figma" },
        { name: "Adobe XD" },
        { name: "Sketch" },
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "InVision / Zeplin" }
      ]}
      
      faqs={[
        {
          question: "Do your designers collaborate directly with frontend developers?",
          answer: "Yes, absolutely. Our UI/UX designers structure Figma files to include design system tokens, assets, and layout coordinates, making handoff to developers seamless."
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
      
      ctaTitle="Hire Vetted UI/UX Designers"
      ctaDescription="Create intuitive and visually stunning products. Contact Devarya Solutions today to hire experienced UI/UX designers."
    />
  );
}
