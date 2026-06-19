"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Aperture, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function IonicDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Ionic Developers"
      subtitle="Ionic Framework Specialists"
      heroIcon={Aperture}
      heroDescription="Accelerate development using Ionic. Our developers build high-quality, web-first hybrid mobile applications utilizing HTML, CSS, and React/Angular."
      
      overviewTitle="Cost-Effective Hybrid Mobile Solutions"
      overviewDescription="At Devarya Solutions, we offer dedicated Ionic developers who utilize Capacitor and Cordova to build modern, feature-rich apps that deploy rapidly and leverage native device features with ease. Ionic is perfect for businesses seeking cross-platform mobile apps built on standard web technologies, reducing code redundancy and maximizing time-to-market efficiency."
      overviewHighlights={[
        "Expert hybrid developers specializing in the Ionic framework",
        "Consistent UI styling across diverse iOS, Android, and web screens",
        "Proficient in web technologies: HTML5, CSS3, JavaScript, and TypeScript",
        "Experienced in integrating custom Capacitor plugins and Cordova wrappers",
        "Minimal code maintenance overhead with a web-first approach"
      ]}
      
      whyHireTitle="Why Hire Ionic Developers from Devarya Solutions?"
      whyHireDescription="Leverage single-codebase efficiency to launch your mobile products faster and cheaper."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering UI rendering, database optimization, and cross-platform performance auditing.",
          icon: Code
        },
        {
          title: "Fast Feature Releases",
          description: "Utilize Ionic's rapid prototyping and web-based testing to deploy features quickly and reduce overall time-to-market.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Ionic Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across JS/TS, state models, and web-native bridges."
      skills={[
        {
          title: "Web Technologies",
          description: "Writing clean, semantic HTML5, CSS3, and JavaScript/TypeScript code for hybrid applications.",
          icon: Code
        },
        {
          title: "UI & Layout Setup",
          description: "Creating fluid, responsive interfaces using Ionic's pre-built UI components and utilities.",
          icon: Zap
        },
        {
          title: "State Management",
          description: "Enforcing clean architecture using Redux, Context API, or NgRx state containers.",
          icon: Settings
        },
        {
          title: "Native Integrations",
          description: "Writing custom Capacitor/Cordova wrappers to hook into native platform sensors, cameras, and SDKs.",
          icon: Terminal
        },
        {
          title: "Data & Offline Sync",
          description: "Connecting REST/GraphQL APIs and building offline local storage using Ionic Storage and SQLite.",
          icon: Layers
        },
        {
          title: "Play & App Store Delivery",
          description: "Managing build scripts, App Store Connect, and Google Play Store launches.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your cross-platform mobile requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior Ionic developer working 160 hours per month exclusively for your company. Best for custom app creation.",
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
          description: "An Ionic developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire an Ionic developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified Ionic developer in four simple steps."
      processSteps={[
        {
          title: "Submit App Scope",
          description: "Outline your application features, target platforms (iOS/Android), and contract timeline."
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
      
      technologiesTitle="Ionic Tech Stack & Tools"
      technologies={[
        { name: "Ionic Framework" },
        { name: "Capacitor & Cordova" },
        { name: "TypeScript / JavaScript" },
        { name: "React / Angular / Vue" },
        { name: "SQLite & Web SQL" },
        { name: "Android Studio & Xcode" }
      ]}
      
      faqs={[
        {
          question: "Does one Ionic developer build for both iOS and Android?",
          answer: "Yes. Ionic utilizes web-first rendering with Capacitor/Cordova wrappers, meaning a single developer can compile and maintain the application for both iOS and Android."
        },
        {
          question: "Can your developers integrate native SDKs into Ionic?",
          answer: "Yes. Our Ionic developers use Capacitor or Cordova plug-in layers to integrate any native libraries or device features."
        },
        {
          question: "How do you handle developer communication and timezone gaps?",
          answer: "We ensure our developers work with an overlap of at least 4 hours with your local working hours, and we communicate using Slack, Teams, and standard email."
        }
      ]}
      
      ctaTitle="Hire Vetted Ionic Developers"
      ctaDescription="Launch your mobile app on iOS and Android simultaneously. Contact Devarya Solutions today to hire experienced Ionic engineers."
    />
  );
}
