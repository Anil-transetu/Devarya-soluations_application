"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Rocket, Lightbulb, Users, BarChart, Shield, Terminal, Settings } from "lucide-react";

export function StartupApps() {
  return (
    <ServicePageLayout
      title="Mobile App Development for Start-ups"
      subtitle="MVP & Prototype Development"
      heroIcon={Rocket}
      heroDescription="Transform your creative vision into a market-validated product. We build scalable, feature-rich Minimum Viable Products (MVPs) designed to acquire early users and secure investor funding."
      overviewTitle="Launch Fast, Validate Quickly, and Scale Smartly"
      overviewDescription="Startups operate in dynamic, fast-paced environments where speed-to-market is everything. At Devarya Solutions, we specialize in helping early-stage companies structure, design, and code their first product releases. We focus on core feature prioritization, agile software engineering, and clean architectures, enabling you to gather real-world user feedback and iterate without accumulating technical debt."
      overviewHighlights={[
        "Guided scoping workshops to define your core value proposition and MVP features",
        "Rapid UI/UX design blueprints and clickable prototypes within weeks",
        "Cost-effective development utilizing flexible hybrid frameworks",
        "Built-in product analytics to track user activation and retention",
        "Modular backend architecture ready to scale post-launch"
      ]}
      whyChooseTitle="Why Startups Partner with Devarya Solutions?"
      whyChooseDescription="We think like product founders, prioritizing budget efficiency, market validation, and swift iteration."
      whyChooseItems={[
        {
          title: "Speed-Oriented Sprints",
          description: "We minimize administrative overhead to focus on shipping working code quickly.",
          icon: Rocket
        },
        {
          title: "Investor-Ready Quality",
          description: "Our high-fidelity designs and clean codebase will impress prospective investors during pitches.",
          icon: Lightbulb
        },
        {
          title: "Founder-Friendly Pricing",
          description: "Milestone-based payment schedules tailored to early-stage budgets and startup needs.",
          icon: Users
        }
      ]}
      featuresTitle="Crucial MVP Features We Implement"
      featuresDescription="We focus on the vital elements that validate your product while keeping it secure and engaging."
      features={[
        {
          title: "Seamless Onboarding",
          description: "Frictionless email, phone, or social media logins to maximize user registration rates.",
          icon: Users
        },
        {
          title: "Core Feature Flow",
          description: "Deep engineering on your unique value features, ensuring they work flawlessly.",
          icon: Settings
        },
        {
          title: "Feedback Channels",
          description: "Built-in user messaging and reporting tools to collect immediate bug reports and feedback.",
          icon: Terminal
        },
        {
          title: "Analytics Integration",
          description: "Trace user journeys, feature utilization, and funnel drop-offs with Amplitude or Mixpanel.",
          icon: BarChart
        },
        {
          title: "Cloud Scalability",
          description: "Lightweight serverless backend infrastructure that scales automatically as your users grow.",
          icon: Shield
        },
        {
          title: "Security Foundations",
          description: "HTTPS encryption, token verification, and data sanitation standards from day one.",
          icon: Shield
        }
      ]}
      processTitle="Our Startup Acceleration Process"
      processDescription="A collaborative, high-velocity roadmap designed to launch your application in weeks rather than months."
      processSteps={[
        {
          title: "MVP Scoping & Mapping",
          description: "We define the absolute minimum features needed to validate your product and solve your users' core problem."
        },
        {
          title: "High-Fidelity Wireframes",
          description: "Drafting the main screens and interactive mockups to align on the user experience."
        },
        {
          title: "Agile Coding Cycle",
          description: "Developing code in quick bi-weekly sprints, with continuous staging deployments for you to test."
        },
        {
          title: "Launch Prep & Deployment",
          description: "Submitting to app stores and configuring staging databases for launch."
        },
        {
          title: "Feedback & Iteration",
          description: "Analyzing early usage metrics and preparing updates based on user feature requests."
        }
      ]}
      technologiesTitle="Startup-Optimized Technologies"
      technologies={[
        { name: "React Native" },
        { name: "Flutter" },
        { name: "Node.js (Express)" },
        { name: "Firebase & Supabase" },
        { name: "PostgreSQL & MongoDB" },
        { name: "AWS & Vercel" }
      ]}
      faqs={[
        {
          question: "How do you help us decide what features to include in the MVP?",
          answer: "We conduct a collaborative feature prioritization workshop. We evaluate each feature based on its business value to your target audience and its development complexity, helping you strip away non-essential elements for your first release."
        },
        {
          question: "What happens after we launch our MVP?",
          answer: "We offer flexible post-launch support and iteration retainers. As your product gains traction and you raise funding, we help you scale your architecture, refine existing flows, and implement new features."
        },
        {
          question: "Do you sign Non-Disclosure Agreements (NDAs)?",
          answer: "Yes. We respect your intellectual property. We sign mutual NDAs before you share any proprietary details or business plans."
        }
      ]}
      ctaTitle="Launch Your Venture on a Solid Foundation"
      ctaDescription="Don't let development delays stall your vision. Contact us to schedule a workshop and design your product's roadmap."
    />
  );
}
