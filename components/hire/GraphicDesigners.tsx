"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { PenTool, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function GraphicDesigners() {
  return (
    <HirePageLayout
      title="Hire Dedicated Graphic Designers"
      subtitle="Visual Identity Specialists"
      heroIcon={PenTool}
      heroDescription="Hire creative graphic designers to craft unique branding assets, marketing materials, social media graphics, and digital illustrations."
      
      overviewTitle="Creative Visual Assets & Brand Consistency"
      overviewDescription="At Devarya Solutions, we connect you with dedicated graphic designers who collaborate with your team to produce high-impact vector artwork, banners, logo systems, and visual layouts. A cohesive brand identity builds trust and establishes authority, and our designers ensure your visual representation remains consistent across all platforms."
      overviewHighlights={[
        "Expert graphic designers specializing in vector art and brand design",
        "Consistent brand styling across social media, print, and web layouts",
        "Proficient in Adobe Creative Suite: Photoshop, Illustrator, and InDesign",
        "Experienced in visual content strategy, typography, and color theory",
        "Modern design aesthetics tailored to elevate your business presence"
      ]}
      
      whyHireTitle="Why Hire Graphic Designers from Devarya Solutions?"
      whyHireDescription="Leverage creative design talent to build outstanding visual assets."
      whyHireItems={[
        {
          title: "Vetted Creative Talent",
          description: "Our designers pass rigorous tests covering composition, styling, typography, and creative tool proficiency.",
          icon: Code
        },
        {
          title: "Stunning Deliverables",
          description: "We focus on creating high-impact vector designs, marketing material, and visual layouts for print and digital media.",
          icon: Zap
        },
        {
          title: "Direct Design Control",
          description: "Review progress daily through shared files. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Graphic Design Skills"
      skillsDescription="Our designers possess comprehensive expertise across brand assets, vector graphics, marketing layouts, and illustration."
      skills={[
        {
          title: "Vector Art & Logo Design",
          description: "Creating rescalable logos, custom icons, and vector graphics using Adobe Illustrator.",
          icon: Code
        },
        {
          title: "Image Editing & Composition",
          description: "Retouching, resizing, and composition of digital images and visual assets using Adobe Photoshop.",
          icon: Zap
        },
        {
          title: "Branding & Style Guides",
          description: "Structuring cohesive visual identity books, including colors, fonts, and layout standards.",
          icon: Settings
        },
        {
          title: "Marketing & Ad Creatives",
          description: "Designing high-engagement banners, brochures, and digital ad graphics.",
          icon: Terminal
        },
        {
          title: "Social Media Graphics",
          description: "Structuring specific post templates and story elements for LinkedIn, Facebook, and Instagram.",
          icon: Layers
        },
        {
          title: "Print & Layout Setup",
          description: "Designing print-ready page layouts, packaging designs, and business cards using Adobe InDesign.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your creative requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior graphic designer working 160 hours per month exclusively for your company. Best for custom brand creation.",
          duration: "Monthly Engagement",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct interaction on Slack/Teams",
            "Daily updates on creative files",
            "Full IP ownership"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "A graphic designer dedicated for 80 hours per month. Ideal for ongoing iterations, minor updates, and support.",
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
          description: "Hire a graphic designer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified graphic designer in four simple steps."
      processSteps={[
        {
          title: "Submit Asset Scope",
          description: "Outline your branding guidelines, creative requirements, and contract timeline."
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
          description: "Grant project tool access, sign NDAs, set up communication, and begin design."
        }
      ]}
      
      technologiesTitle="Design Tools & Software"
      technologies={[
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "Adobe InDesign" },
        { name: "Figma" },
        { name: "Canva" },
        { name: "CorelDRAW" }
      ]}
      
      faqs={[
        {
          question: "Do your graphic designers collaborate directly with frontend developers?",
          answer: "Yes, our designers export assets in developer-friendly vector and image formats (SVG, PNG, WebP) and coordinate asset handoff."
        },
        {
          question: "Do you sign NDAs before onboarding designers?",
          answer: "Yes, 100%. We sign comprehensive NDAs before sharing any resource CVs or technical data, and all IP rights belong entirely to your company."
        },
        {
          question: "What communication tools do the designers use?",
          answer: "Designers integrate into your company's workflow, using Slack, Teams, Zoom, Jira, and shared files to communicate and gather feedback."
        }
      ]}
      
      ctaTitle="Hire Vetted Graphic Designers"
      ctaDescription="Create intuitive and visually stunning products. Contact Devarya Solutions today to hire experienced graphic designers."
    />
  );
}
