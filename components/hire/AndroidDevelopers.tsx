"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Bot, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function AndroidDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Android Developers"
      subtitle="Android Platform Experts"
      heroIcon={Bot}
      heroDescription="Deploy vetted, senior Android app developers to build secure, robust, and highly engaging native applications optimized for all Android devices."
      
      overviewTitle="Expert Native Android App Developers"
      overviewDescription="At Devarya Solutions, we connect you with dedicated Android developers who are well-versed in native platform structures. Leveraging Kotlin, Jetpack Compose, and Java, our engineers write highly performant code, optimize UI layouts for diverse screen sizes, and implement clean architectures (MVVM/MVI). We manage onboarding and HR support, allowing you to focus on the product roadmap."
      overviewHighlights={[
        "Proficient in native development using Kotlin, Jetpack Compose, and Java",
        "Expert knowledge of Android SDK, Material Design guidelines, and native APIs",
        "Experience in custom UI/UX animations and clean layout flows",
        "Seamless integration with Google Services (Maps, Firebase, Play Console)",
        "Stellar record of deploying and launching apps on the Google Play Store"
      ]}
      
      whyHireTitle="Why Hire Android Developers from Devarya Solutions?"
      whyHireDescription="Get direct access to certified Android developers who align with your working hours and accelerate app releases."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers undergo rigorous coding audits and algorithmic reviews to ensure they write efficient, leak-free native code.",
          icon: Code
        },
        {
          title: "Security & Encryption Focus",
          description: "We build secure mobile apps. Our developers enforce strict data encryption, secure token storage, and OWASP mobile standards.",
          icon: Shield
        },
        {
          title: "Time-Zone Alignment",
          description: "Our developers work overlap hours with your internal team, facilitating real-time communication on Slack, Teams, and Jira.",
          icon: Clock
        }
      ]}
      
      skillsTitle="Android Development Skill Profile"
      skillsDescription="Our developers possess comprehensive expertise in modern Android software engineering."
      skills={[
        {
          title: "Kotlin & Jetpack Compose",
          description: "Building responsive, modern, and interactive user interfaces using Android's modern declarative UI toolkit.",
          icon: Code
        },
        {
          title: "API & Data Sync",
          description: "Integrating complex REST APIs, WebSocket connections, and offline data sync using Retrofit and Room DB.",
          icon: Terminal
        },
        {
          title: "State Management",
          description: "Applying robust architectural patterns like LiveData, Flow, and ViewModel to maintain stable application states.",
          icon: Settings
        },
        {
          title: "Google API Integrations",
          description: "Embedding Google Maps, location tracking, Google Auth, and In-App billing services.",
          icon: Globe
        },
        {
          title: "Performance Tuning",
          description: "Optimizing memory consumption, battery usage, startup speed, and keeping application bundle size to a minimum.",
          icon: Layers
        },
        {
          title: "CI/CD & App Store Launch",
          description: "Setting up automated mobile delivery channels (Fastlane, GitHub Actions) and publishing to Google Play Store.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Hiring Packages That Scale"
      hiringModelsDescription="Choose the best staffing solution based on your mobile app development complexity."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "Get a dedicated senior Android engineer working 160 hours per month on your product. Best for launching new products.",
          duration: "Monthly Engagement",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct daily interaction",
            "Jira/Trello alignment",
            "No recruitment overheads"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "An experienced Android developer working 80 hours per month. Perfect for feature additions and bug fixing sprints.",
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
          description: "Ad-hoc developer support charged on actual hours spent on specific tasks. Best for emergency troubleshooting.",
          duration: "Hourly Billing",
          icon: Clock,
          benefits: [
            "Pay for exact hours logged",
            "Detailed activity timesheets",
            "Perfect for minor upgrades",
            "Flexible monthly setup"
          ]
        }
      ]}
      
      processTitle="Engagement Timeline"
      processDescription="Hire and onboard an Android developer in four straightforward steps."
      processSteps={[
        {
          title: "Define Resource Needs",
          description: "Provide details about your mobile app stack, integrations, and expected contract duration."
        },
        {
          title: "Candidate Screening",
          description: "Review matching developer profiles and select the ones you'd like to interview."
        },
        {
          title: "Technical Interview",
          description: "Directly assess the developers' Kotlin knowledge, architecture preferences, and coding styles."
        },
        {
          title: "Onboard & Develop",
          description: "Complete contracts and NDAs, set up source control permissions, and begin coding."
        }
      ]}
      
      technologiesTitle="Android Tech Stack & Frameworks"
      technologies={[
        { name: "Kotlin" },
        { name: "Jetpack Compose" },
        { name: "Java (Legacy)" },
        { name: "Retrofit & OkHttp" },
        { name: "Room & SQLite" },
        { name: "Firebase & Play Console" }
      ]}
      
      faqs={[
        {
          question: "Do your developers handle the Play Store submission process?",
          answer: "Yes. Our Android developers prepare store assets, configure privacy policies, manage developer account setups, and handle the entire submission and review pipeline."
        },
        {
          question: "Can your developers upgrade my old Java application to Kotlin?",
          answer: "Absolutely. We specialize in code migration, refactoring legacy Java apps to modern Kotlin codebases, and upgrading layouts to Jetpack Compose."
        },
        {
          question: "How do we handle communication with the remote developers?",
          answer: "We set up dedicated Slack channels, WhatsApp groups, or join your Microsoft Teams workspace. Developers join your daily standups and work during your preferred hours."
        }
      ]}
      
      ctaTitle="Hire Senior Android Developers"
      ctaDescription="Accelerate your mobile app roadmap. Contact Devarya Solutions today to schedule interviews with vetted Android talent."
    />
  );
}
