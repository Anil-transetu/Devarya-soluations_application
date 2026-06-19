"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Apple, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function IosDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated iOS Developers"
      subtitle="iOS Platform Experts"
      heroIcon={Apple}
      heroDescription="Hire vetted iOS engineers to design and code premium native mobile applications for iPhone, iPad, and Apple Watch utilizing Swift and SwiftUI."
      
      overviewTitle="Premium iOS Application Engineers"
      overviewDescription="At Devarya Solutions, we offer dedicated iOS developers who understand the importance of fluid user interfaces and native performance. Proficient in Swift, SwiftUI, and UIKit, our developers strictly adhere to Apple's Human Interface Guidelines to build elegant, high-performance apps. We manage recruitment, payroll, and infrastructure, giving you instant access to senior iOS talent."
      overviewHighlights={[
        "Expert Swift and SwiftUI developers specializing in Apple platforms",
        "Strict adherence to Apple's Human Interface Guidelines (HIG)",
        "Proficient in local data management using CoreData, SwiftData, and Realm",
        "Expert knowledge of Cocoapods, Swift Package Manager (SPM), and CocoaTouch",
        "Experienced in App Store Connect submission and Guideline compliance"
      ]}
      
      whyHireTitle="Why Hire iOS Developers from Devarya Solutions?"
      whyHireDescription="Boost your app's performance and rating with senior Apple development talent."
      whyHireItems={[
        {
          title: "Vetted iOS Specialists",
          description: "Our developers are vetted on clean Swift coding, memory lifecycle management (ARC), and native performance optimization.",
          icon: Code
        },
        {
          title: "Premium UI Focus",
          description: "We focus on creating smooth UI transitions, layout configurations, and responsive elements for all Apple viewports.",
          icon: Zap
        },
        {
          title: "Secure Code Policies",
          description: "Developers apply modern iOS security protocols, Keychain access control, SSL pinning, and sandboxing.",
          icon: Shield
        }
      ]}
      
      skillsTitle="iOS Development Expertise"
      skillsDescription="Our developers bring years of professional experience across diverse Apple products and APIs."
      skills={[
        {
          title: "SwiftUI & UIKit",
          description: "Mastery of Apple's modern declarative UI framework alongside deep understanding of UIKit legacy components.",
          icon: Code
        },
        {
          title: "Local Database Storage",
          description: "Designing fast, responsive offline capabilities using CoreData, SwiftData, and SQLite.",
          icon: Terminal
        },
        {
          title: "Apple Ecosystem APIs",
          description: "Integrating Apple Pay, Sign in with Apple, HealthKit, MapKit, and CoreLocation APIs.",
          icon: Globe
        },
        {
          title: "State Management",
          description: "Utilizing modern state wrappers (Observable, StateObject, Combine) to ensure responsive rendering.",
          icon: Settings
        },
        {
          title: "Performance Audits",
          description: "Debugging with Instruments, optimizing CPU usage, fixing layout bottlenecks, and minimizing battery drain.",
          icon: Layers
        },
        {
          title: "App Store Submission",
          description: "Configuring provisioning profiles, certificates, TestFlight builds, and handling Apple review clearances.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Flexible Resourcing Models"
      hiringModelsDescription="Choose the staffing model that best suits your iOS app release schedule."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior iOS developer working 160 hours per month solely for your business. Best for long-term native mobile products.",
          duration: "Monthly Engagement",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct communication via Slack/Teams",
            "Daily standups and code reviews",
            "Full IP ownership"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "A dedicated developer working 80 hours per month. Perfect for incremental updates, maintenance, and small features.",
          duration: "Flexible Contracts",
          icon: Clock,
          benefits: [
            "80 Hours/Month dedicated focus",
            "Communication aligned to schedule",
            "Weekly updates and deployments",
            "Scale resource scope easily"
          ]
        },
        {
          title: "Hourly Contract",
          description: "Hire an iOS developer on an hourly basis for ad-hoc troubleshooting, bug fixing, or feature additions.",
          duration: "Hourly Billing",
          icon: Clock,
          benefits: [
            "Billing based on hours logged",
            "Detailed timesheet breakdown",
            "Perfect for minor maintenance",
            "No long-term commitments"
          ]
        }
      ]}
      
      processTitle="Our Hiring Process"
      processDescription="Onboard a qualified iOS developer in four straightforward steps."
      processSteps={[
        {
          title: "Submit Requirements",
          description: "Provide details about your current codebase, features to build, and required experience level."
        },
        {
          title: "Review Resumes",
          description: "Browse curated portfolios and choose candidates who fit your technical requirements."
        },
        {
          title: "Technical Interview",
          description: "Schedule video calls to evaluate candidate code quality, logic, and communications skills."
        },
        {
          title: "Onboarding & Kickoff",
          description: "Sign the NDA, grant source control access, set up Slack, and start your first sprint."
        }
      ]}
      
      technologiesTitle="iOS Technologies & Frameworks"
      technologies={[
        { name: "Swift & SwiftUI" },
        { name: "UIKit & CocoaTouch" },
        { name: "Combine Framework" },
        { name: "CoreData & SwiftData" },
        { name: "App Store Connect" },
        { name: "TestFlight & SPM" }
      ]}
      
      faqs={[
        {
          question: "Can your iOS developers work with Swift and Objective-C?",
          answer: "Yes. Our iOS developers are experts in modern Swift, but they also have deep experience handling and migrating legacy Objective-C projects."
        },
        {
          question: "How do you protect our application's intellectual property?",
          answer: "We sign strict Non-Disclosure Agreements (NDAs) before sharing candidate details or project scopes, and all intellectual property belongs completely to you."
        },
        {
          question: "Do developers work in my local time zone?",
          answer: "Yes. We coordinate developer working schedules to match your local timezone, ensuring overlap hours for standups and planning sessions."
        }
      ]}
      
      ctaTitle="Hire Senior iOS Engineers Today"
      ctaDescription="Build premium iOS applications that stand out on the App Store. Contact Devarya Solutions to connect with senior Swift developers."
    />
  );
}
