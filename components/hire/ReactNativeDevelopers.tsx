"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { RefreshCw, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function ReactNativeDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated React Native Developers"
      subtitle="React Native Platform Experts"
      heroIcon={RefreshCw}
      heroDescription="Deploy senior React Native developers to build native mobile apps for iOS and Android using React and JavaScript, reducing development time."
      
      overviewTitle="Hybrid App Development, Native Speeds"
      overviewDescription="At Devarya Solutions, we offer dedicated React Native developers who combine web speed with mobile performance. Experienced in JavaScript, TypeScript, React components, and native bridges, our developers construct cross-platform apps with near-native performance. We manage recruitment, payroll, and administration, giving you instant access to senior mobile talent."
      overviewHighlights={[
        "Expert JavaScript and TypeScript programmers specializing in React Native",
        "Consistent UI styling across diverse iOS and Android screens",
        "Proficient in state management solutions like Redux, MobX, and Zustand",
        "Experienced in integrating custom native modules and third-party libraries",
        "Reduced codebase size, leading to lower maintenance costs"
      ]}
      
      whyHireTitle="Why Hire React Native Developers from Devarya Solutions?"
      whyHireDescription="Leverage single-codebase efficiency to launch your mobile products faster and cheaper."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering UI rendering, database optimization, and cross-platform performance auditing.",
          icon: Code
        },
        {
          title: "Fast Feature Releases",
          description: "Utilize hot reloading to compile updates, deploy features rapidly, and reduce overall time-to-market.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="React Native Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across JS/TS, state models, and third-party integrations."
      skills={[
        {
          title: "JS/TS Programming",
          description: "Writing clean, asynchronous, and typed JavaScript/TypeScript code for robust and stable application logic.",
          icon: Code
        },
        {
          title: "UI & Layout Setup",
          description: "Creating fluid, pixel-perfect interfaces and custom animations using React Native's core components.",
          icon: Zap
        },
        {
          title: "State Management",
          description: "Enforcing clean architecture using Redux, Context API, MobX, or Zustand state containers.",
          icon: Settings
        },
        {
          title: "Native Integrations",
          description: "Writing native bridge modules in Java/Swift to hook into native platform sensors, cameras, and SDKs.",
          icon: Terminal
        },
        {
          title: "Data & Offline Sync",
          description: "Connecting REST/GraphQL APIs and building offline local storage using AsyncStorage and SQLite.",
          icon: Layers
        },
        {
          title: "Play & App Store Delivery",
          description: "Managing deployment scripts, App Store Connect, and Google Play Store launches.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your cross-platform mobile requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior React Native developer working 160 hours per month exclusively for your company. Best for custom app creation.",
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
          description: "A React Native developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire a React Native developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified React Native developer in four simple steps."
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
      
      technologiesTitle="React Native Tech Stack & Tools"
      technologies={[
        { name: "React Native" },
        { name: "TypeScript" },
        { name: "Redux & Zustand" },
        { name: "Expo & Bare Workflow" },
        { name: "iOS Swift / Android Kotlin" },
        { name: "Git & Fastlane" }
      ]}
      
      faqs={[
        {
          question: "Does one React Native developer build for both iOS and Android?",
          answer: "Yes. React Native utilizes a single codebase, meaning a single developer can compile and maintain the application for both iOS and Android, drastically reducing your costs."
        },
        {
          question: "Can your developers integrate native SDKs into React Native?",
          answer: "Yes. Our React Native developers write custom Native Bridges in Swift/Kotlin to integrate any native libraries or device features."
        },
        {
          question: "How do you handle developer communication and timezone gaps?",
          answer: "We ensure our developers work with an overlap of at least 4 hours with your local working hours, and we communicate using Slack, Teams, and standard email."
        }
      ]}
      
      ctaTitle="Hire Vetted React Native Developers"
      ctaDescription="Launch your mobile app on iOS and Android simultaneously. Contact Devarya Solutions today to hire experienced React Native engineers."
    />
  );
}
