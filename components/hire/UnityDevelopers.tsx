"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Box, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function UnityDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Unity Developers"
      subtitle="Unity 3D & AR/VR Experts"
      heroIcon={Box}
      heroDescription="Hire expert Unity game developers and AR/VR programmers to build interactive 2D/3D games, immersive training simulations, and virtual walkthroughs."
      
      overviewTitle="Interactive 3D Environments & Playable Experiences"
      overviewDescription="At Devarya Solutions, we connect you with dedicated Unity engineers who write optimized C# code, manage assets, and build high-performance, cross-platform experiences for mobile devices, PCs, gaming consoles, and VR headsets. Bring your creative ideas to life with Unity, while we handle administration and developer onboarding."
      overviewHighlights={[
        "Expert C# programmers specializing in the Unity engine",
        "Consistent UI and asset styling across diverse platforms (Mobile, PC, VR)",
        "Proficient in physics optimization, lighting systems, and render pipelines",
        "Experienced in integrating third-party SDKs for ads, analytics, and multiplayer systems",
        "Strong understanding of asset management, texture compression, and bundle size reduction"
      ]}
      
      whyHireTitle="Why Hire Unity Developers from Devarya Solutions?"
      whyHireDescription="Leverage powerful interactive architectures to build outstanding 3D experiences."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering C# script optimization, render pipeline checks, and code structure audits.",
          icon: Code
        },
        {
          title: "Multi-Platform Releases",
          description: "We compile updates and deploy features rapidly across iOS, Android, Web, PC, and consoles.",
          icon: Zap
        },
        {
          title: "Direct Asset Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Unity Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across C# scripting, render pipelines, and asset optimizations."
      skills={[
        {
          title: "C# Programming",
          description: "Writing clean, asynchronous, and optimized C# code for robust game loop and simulation logic.",
          icon: Code
        },
        {
          title: "UI & Canvas Setup",
          description: "Creating responsive user interfaces and interactive menus using Unity UI / UI Toolkit.",
          icon: Zap
        },
        {
          title: "State & Gameplay Systems",
          description: "Enforcing clean architecture using ScriptableObjects, event systems, and state machines.",
          icon: Settings
        },
        {
          title: "Asset Optimization",
          description: "Managing meshes, textures, materials, and optimizing assets using Unity Addressables.",
          icon: Terminal
        },
        {
          title: "AR/VR Development",
          description: "Building immersive augmented reality and virtual reality experiences using AR Foundation, OpenXR, and Oculus SDKs.",
          icon: Layers
        },
        {
          title: "Build & Submission",
          description: "Configuring build settings, publishing to Steam, App Store, Google Play Store, or Oculus Store.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your interactive 3D requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior Unity developer working 160 hours per month exclusively for your company. Best for custom game creation.",
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
          description: "A Unity developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire a Unity developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified Unity developer in four simple steps."
      processSteps={[
        {
          title: "Submit Project Scope",
          description: "Outline your interactive 2D/3D features, target platforms, and contract timeline."
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
      
      technologiesTitle="Unity Tech Stack & Tools"
      technologies={[
        { name: "Unity 3D Engine" },
        { name: "C# Programming" },
        { name: "AR Foundation / OpenXR" },
        { name: "Universal Render Pipeline (URP)" },
        { name: "Unity UI / UI Toolkit" },
        { name: "Git & Unity Version Control" }
      ]}
      
      faqs={[
        {
          question: "Can your Unity developers build cross-platform games?",
          answer: "Yes. Unity allows for compilation to multiple platforms. A single developer can write core code that runs on iOS, Android, PC, WebGL, and VR headsets with platform-specific adjustments."
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
      
      ctaTitle="Hire Vetted Unity Developers"
      ctaDescription="Build high-performance interactive games and AR/VR apps. Contact Devarya Solutions today to hire experienced Unity programmers."
    />
  );
}
