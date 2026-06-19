"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Bot, Cpu, Shield, Smartphone, Zap, Layers, Code, Settings, Compass } from "lucide-react";

export function AndroidApps() {
  return (
    <ServicePageLayout
      title="Android Application Development"
      subtitle="Native Android Apps"
      heroIcon={Bot}
      heroDescription="Empower your business with highly customizable, secure, and robust Android applications. We design and build apps that integrate seamlessly with Google's ecosystem and perform flawlessly on all devices."
      overviewTitle="Custom Android Solutions Tailored to Your Vision"
      overviewDescription="With millions of active Android devices globally, reaching this audience requires an application that stands out. At Devarya Solutions, we leverage the latest tools and native APIs to construct scalable Android apps. From backend architecture to front-end UI design, our engineering team ensures that your app provides exceptional performance, high security, and a fluid user experience."
      overviewHighlights={[
        "Completely original, tailored Material Design UI layouts",
        "High-performance native code using Kotlin and Jetpack Compose",
        "Rigorous quality check and automated unit testing",
        "Seamless integration with Google APIs and third-party services",
        "Expert assistance with Play Store launch and compliance"
      ]}
      whyChooseTitle="Why Choose Our Android Development Services?"
      whyChooseDescription="We combine technical expertise with a business-driven approach to deliver Android apps that achieve measurable growth."
      whyChooseItems={[
        {
          title: "Technical Excellence",
          description: "Our developers are well-versed in modern Android SDKs, ensuring your app utilizes the latest operating system features.",
          icon: Code
        },
        {
          title: "Fortified Security",
          description: "We enforce strict data encryption and safe token storage to safeguard your customers' private data.",
          icon: Shield
        },
        {
          title: "Proven Agility",
          description: "Our agile sprints ensure transparent timelines, regular prototype updates, and flexibility to adapt to changing goals.",
          icon: Zap
        }
      ]}
      featuresTitle="Key Features of Our Android Applications"
      featuresDescription="Every app we build comes packed with features designed to keep users engaged and your business running smoothly."
      features={[
        {
          title: "Custom UI/UX Flow",
          description: "Stunning, intuitive interfaces designed specifically for Android screen sizes and navigation patterns.",
          icon: Smartphone
        },
        {
          title: "Offline Functionality",
          description: "Keep your application usable even without an active internet connection using secure local storage.",
          icon: Layers
        },
        {
          title: "Push Notifications",
          description: "Drive user retention and engagement with timely, target-audience notifications.",
          icon: Zap
        },
        {
          title: "Deep API Integration",
          description: "Connect your application to enterprise databases, cloud platforms, and external payment processors.",
          icon: Cpu
        },
        {
          title: "Performance Tuning",
          description: "Optimized battery consumption, minimal app size, and fast boot times for a smooth user journey.",
          icon: Settings
        },
        {
          title: "Location-Based Services",
          description: "Incorporate smart GPS navigation, geofencing, and real-time mapping services.",
          icon: Compass
        }
      ]}
      processTitle="Our Android Development Process"
      processDescription="From brainstorming to deployment, we follow a transparent and structured path to turn your ideas into functional software."
      processSteps={[
        {
          title: "Discovery & Analysis",
          description: "We gather your requirements, study market trends, and detail the technical specifications of your project."
        },
        {
          title: "UI/UX Prototyping",
          description: "Our designers draft wireframes and interactive prototypes, letting you experience the user flow before we write code."
        },
        {
          title: "Development Sprints",
          description: "We write clean, modular code in structured sprints, providing you with regular builds for transparency."
        },
        {
          title: "Comprehensive QA",
          description: "Our quality assurance team runs manual and automated checks to weed out bugs, security flaws, and performance lag."
        },
        {
          title: "Store Submission & Launch",
          description: "We handle the entire publishing pipeline on the Google Play Store, ensuring compliance with all policies."
        }
      ]}
      technologiesTitle="Technologies We Use for Android Development"
      technologies={[
        { name: "Kotlin" },
        { name: "Jetpack Compose" },
        { name: "Java" },
        { name: "Android SDK" },
        { name: "Retrofit & Room" },
        { name: "Firebase Suite" }
      ]}
      faqs={[
        {
          question: "How long does it take to develop a custom Android application?",
          answer: "The timeline depends on the application's complexity. A standard MVP typically takes 6 to 10 weeks, while a complex enterprise platform can take 3 to 6 months. We provide detailed milestones during our discovery phase."
        },
        {
          question: "Will you publish the application to the Google Play Store?",
          answer: "Yes. We manage the entire deployment process, including preparing store listings, assets, privacy policies, and submitting the application for review on your Google Play Developer Account."
        },
        {
          question: "Can you upgrade our existing Android app?",
          answer: "Absolutely. We can review your existing codebase, refactor legacy code, update components to use Jetpack Compose, and resolve performance bottlenecks."
        }
      ]}
      ctaTitle="Ready to Build Your Custom Android App?"
      ctaDescription="Get in touch with us today. Our experts will analyze your requirements and provide a detailed roadmap and estimate for your project."
    />
  );
}
