"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { RefreshCw, Code, Smartphone, Zap, Settings, Layers, Star, ZapIcon, Smile } from "lucide-react";

export function CrossPlatformApps() {
  return (
    <ServicePageLayout
      title="Cross-Platform App Development"
      subtitle="Hybrid & Multi-Platform Apps"
      heroIcon={RefreshCw}
      heroDescription="Deploy highly efficient, native-grade applications on both Android and iOS from a single, unified codebase. Cut development costs and time-to-market in half."
      overviewTitle="Unite Platforms with Seamless Hybrid Applications"
      overviewDescription="Building separate applications for Android and iOS can double your development costs and maintenance efforts. At Devarya Solutions, we construct high-performance cross-platform applications using frameworks like Flutter and React Native. By sharing up to 90% of the codebase, we accelerate your launch schedule while maintaining native-level transitions, response rates, and hardware integrations."
      overviewHighlights={[
        "Single codebase architecture for Android, iOS, and Web deployment",
        "Consistent UI styling and interactive flows across all screen sizes",
        "Fast feature deployment with hot-reload development tools",
        "Reduced development budget and long-term codebase maintenance costs",
        "Full support for native modules and custom device integrations"
      ]}
      whyChooseTitle="Why Select Cross-Platform Apps from Devarya Solutions?"
      whyChooseDescription="We build hybrid apps that don't compromise on speed, quality, or user engagement."
      whyChooseItems={[
        {
          title: "Double the Reach, Half the Time",
          description: "Launch your application to the Google Play Store and Apple App Store simultaneously.",
          icon: Zap
        },
        {
          title: "Stellar Performance",
          description: "Our engineered solutions utilize GPU-accelerated rendering and optimized JS bridges.",
          icon: Settings
        },
        {
          title: "Unified Maintenance",
          description: "Bug fixes, feature rollouts, and style updates are written once and pushed to both platforms.",
          icon: Code
        }
      ]}
      featuresTitle="Comprehensive Hybrid App Features"
      featuresDescription="Our cross-platform apps deliver excellent UX, seamless synchronization, and robust capability."
      features={[
        {
          title: "Native-Like Fluidity",
          description: "60 FPS scroll performance, responsive animations, and platform-specific styling adaptations.",
          icon: Smartphone
        },
        {
          title: "Universal State Management",
          description: "Robust data flow setups (Redux, Bloc, Riverpod) that maintain UI state across screen rotations.",
          icon: Layers
        },
        {
          title: "Offline-First Sync",
          description: "Store transaction records locally and sync securely with the cloud once connection returns.",
          icon: RefreshCw
        },
        {
          title: "Hardware Access",
          description: "Utilize cameras, GPS tracking, microphones, and storage using unified plugin bridges.",
          icon: Settings
        },
        {
          title: "Social Authentications",
          description: "Let users log in quickly using Google, Apple, Facebook, or custom secure email logins.",
          icon: Smile
        },
        {
          title: "Universal Deep Linking",
          description: "Direct users from emails, messages, or websites straight to specific locations inside the app.",
          icon: Star
        }
      ]}
      processTitle="Our Cross-Platform Project Roadmap"
      processDescription="We prioritize code sharing and strict testing to guarantee performance on both operating systems."
      processSteps={[
        {
          title: "System Architecture Design",
          description: "We map out database models, state handlers, and custom native bridge requirements."
        },
        {
          title: "Cross-Platform Coding",
          description: "Our engineers write structured code in Flutter (Dart) or React Native (TypeScript)."
        },
        {
          title: "Native Bridge Implementation",
          description: "Writing specific native modules in Swift or Kotlin for low-level device components."
        },
        {
          title: "Dual-Platform Verification",
          description: "Rigorous testing on physical Android devices and iOS simulators to verify UI consistency."
        },
        {
          title: "Simultaneous Store Launch",
          description: "Submitting both builds to Apple App Store Connect and Google Play Console on schedule."
        }
      ]}
      technologiesTitle="Technologies We Use for Cross-Platform Development"
      technologies={[
        { name: "Flutter" },
        { name: "React Native" },
        { name: "Dart" },
        { name: "TypeScript" },
        { name: "Node.js (Backend)" },
        { name: "GraphQL & REST APIs" }
      ]}
      faqs={[
        {
          question: "What is the difference between Flutter and React Native?",
          answer: "Flutter is compiled directly to native machine code, providing exceptional graphics speed and custom UI consistency. React Native uses native components bridged with JavaScript, making it excellent for apps that rely on existing web-based logic and native UI widgets. We help you choose the best framework for your project."
        },
        {
          question: "Can cross-platform apps access device hardware like GPS or camera?",
          answer: "Yes. Both Flutter and React Native have highly mature libraries and native bridges that permit full access to GPS, bluetooth, cameras, accelerometer, biometrics, and secure keychain storage."
        },
        {
          question: "Will the app look identical on Android and iOS?",
          answer: "By default, we design the app to be brand-consistent across both platforms. However, we can also customize specific components (like dialogs, alerts, and navigation bars) to respect the native style guidelines of each operating system."
        }
      ]}
      ctaTitle="Optimize Your Project Budget & Timeline"
      ctaDescription="Build a universal application that expands your reach to all mobile users. Contact us today for a free project scoping session."
    />
  );
}
