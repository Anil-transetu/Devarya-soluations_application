"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Apple, Eye, ShieldAlert, Cpu, Heart, Compass, Layout, CpuIcon, CloudLightning } from "lucide-react";

export function IosApps() {
  return (
    <ServicePageLayout
      title="iOS Application Development"
      subtitle="Native iOS Apps"
      heroIcon={Apple}
      heroDescription="Deliver premium, secure, and fluid user experiences for the Apple ecosystem. We develop fully native iOS apps optimized for iPhone, iPad, Apple Watch, and Apple TV."
      overviewTitle="Exquisite iOS Development for Discriminating Audiences"
      overviewDescription="iOS users expect exceptional design, responsiveness, and absolute security. At Devarya Solutions, we specialize in Swift and SwiftUI, engineering native iOS applications that strictly adhere to Apple's Human Interface Guidelines (HIG). Whether you are launching a consumer app, an enterprise system, or a high-performance utility, our team guarantees a polished, high-fidelity experience."
      overviewHighlights={[
        "Swift UI layouts built from the ground up matching Apple's design philosophy",
        "High-performance native code leveraging SwiftUI and Combine",
        "Maximum security enforcing Keychain storage and App Transport Security (ATS)",
        "Flawless integration with Apple Services (Apple Pay, Sign in with Apple, iCloud)",
        "Full support for Apple Watch, iPad layouts, and App Store Optimization (ASO)"
      ]}
      whyChooseTitle="Why Partner with Us for iOS Development?"
      whyChooseDescription="We combine elite engineering with detailed aesthetic focus to deliver top-tier applications that rank well on the App Store."
      whyChooseItems={[
        {
          title: "Apple Guidelines Alignment",
          description: "We code strictly inside Apple's guidelines, assuring quick App Store review approvals and updates.",
          icon: Eye
        },
        {
          title: "Uncompromising Security",
          description: "Enterprise-grade safety features protect user accounts, transaction data, and communications.",
          icon: ShieldAlert
        },
        {
          title: "Hardware Integration",
          description: "Tap into native hardware like FaceID/TouchID, camera, core location, and device haptics.",
          icon: Cpu
        }
      ]}
      featuresTitle="Key Features of Our iOS Applications"
      featuresDescription="Crafted with care, our iOS apps are feature-rich, high-performing, and built to scale."
      features={[
        {
          title: "Stunning Fluid UI",
          description: "Animations, transitions, and layout details that feel natural to Apple device owners.",
          icon: Layout
        },
        {
          title: "Secure Payments",
          description: "Incorporate native Apple Pay, subscription models, and third-party gateways securely.",
          icon: ShieldAlert
        },
        {
          title: "CoreData & Offline Storage",
          description: "Keep data synchronized offline and load cached resources instantly upon startup.",
          icon: CpuIcon
        },
        {
          title: "Biometric Protection",
          description: "Allow users to log in instantly and authorize transactions using secure FaceID and TouchID.",
          icon: Eye
        },
        {
          title: "Smart Widgets",
          description: "Provide key information directly on the user's home screen with modern iOS widgets.",
          icon: CloudLightning
        },
        {
          title: "Apple Watch Companion",
          description: "Extend your app's core utilities to the wrist with watchOS companion applications.",
          icon: Heart
        }
      ]}
      processTitle="Our iOS Engineering Lifecycle"
      processDescription="Our structured approach ensures that every pixel is perfect and your app functions with native reliability."
      processSteps={[
        {
          title: "Product Definition",
          description: "Aligning your business aims with iOS architecture design and app scope."
        },
        {
          title: "UI/UX & Wireframing",
          description: "Drafting high-fidelity mockups following human interface standards."
        },
        {
          title: "Native Development",
          description: "Implementing optimized code in Swift, utilizing modern design patterns like MVVM."
        },
        {
          title: "Beta Testing (TestFlight)",
          description: "Distributing early builds to stakeholders and test groups to gather vital performance feedback."
        },
        {
          title: "App Store Submission",
          description: "Handling the review submission process, from App Store Connect configuration to launch approval."
        }
      ]}
      technologiesTitle="Technologies We Use for iOS Development"
      technologies={[
        { name: "Swift" },
        { name: "SwiftUI" },
        { name: "UIKit" },
        { name: "Objective-C" },
        { name: "CoreData" },
        { name: "Xcode & App Store Connect" }
      ]}
      faqs={[
        {
          question: "Why should we build a native iOS app instead of cross-platform?",
          answer: "Native iOS apps offer superior graphics rendering, lower battery usage, and immediate access to the latest Apple hardware features. If your application relies heavily on device capabilities or requires elite UI/UX fidelity, native Swift is highly recommended."
        },
        {
          question: "How does the App Store review process work?",
          answer: "Apple reviews every submitted app manually to verify safety, performance, design quality, and adherence to policies. We assist in configuring App Store Connect, setting up test credentials, and addressing any feedback to guarantee a successful launch."
        },
        {
          question: "Can we support older versions of iOS?",
          answer: "Yes. By default, we target the current and immediately preceding major iOS versions (covering over 95% of active devices). We can support older versions if your target audience requires it."
        }
      ]}
      ctaTitle="Develop an Elite iOS App with Devarya Solutions"
      ctaDescription="Let's build a premium application that delights users and drives business results. Contact us to discuss your iOS product idea."
    />
  );
}
