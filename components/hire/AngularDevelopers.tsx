"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Triangle, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function AngularDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Angular Developers"
      subtitle="Angular Platform Experts"
      heroIcon={Triangle}
      heroDescription="Access senior Angular developers to build robust, scalable, and highly secure single-page applications (SPAs) for enterprise workflows."
      
      overviewTitle="Scalable Frontend Frameworks for Enterprise"
      overviewDescription="At Devarya Solutions, we offer dedicated Angular developers who are experts in TypeScript, RxJS, state management, and modular software architectures. Angular is the premier choice for complex, secure enterprise platforms, and our developers ensure that your application is highly testable, performant, and tailored to support your business logic."
      overviewHighlights={[
        "Expert TypeScript and Angular programmers specializing in enterprise systems",
        "Consistent UI styling across diverse screens and devices",
        "Proficient in reactive programming with RxJS and state containers (NgRx)",
        "Experienced in modular architecture, lazy loading, and dependency injection",
        "Robust unit testing setup using Jasmine and Karma"
      ]}
      
      whyHireTitle="Why Hire Angular Developers from Devarya Solutions?"
      whyHireDescription="Leverage structured frontend architecture to launch your enterprise products faster."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering UI rendering, routing, RxJS streams, and performance auditing.",
          icon: Code
        },
        {
          title: "Fast Feature Releases",
          description: "Utilize Angular's CLI tools and robust environment configurations to compile updates and deploy features rapidly.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Angular Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across TypeScript, RxJS, and enterprise workflows."
      skills={[
        {
          title: "TypeScript Programming",
          description: "Writing clean, asynchronous, and typed TypeScript code for robust and stable application logic.",
          icon: Code
        },
        {
          title: "UI & Layout Setup",
          description: "Creating fluid, responsive interfaces and custom animations using Angular Material or Bootstrap.",
          icon: Zap
        },
        {
          title: "State Management",
          description: "Enforcing clean architecture using NgRx, Akita, or Subject-based service stores.",
          icon: Settings
        },
        {
          title: "API Integrations",
          description: "Connecting REST/GraphQL APIs and building secure HTTP interceptors for auth flow.",
          icon: Terminal
        },
        {
          title: "Performance & Optimizations",
          description: "Optimizing bundle sizes via lazy loading, tree shaking, and AoT compilation.",
          icon: Layers
        },
        {
          title: "CI/CD & Delivery",
          description: "Setting up automated deployment scripts (GitHub Actions, Jenkins) and hosting deployments.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your enterprise frontend requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior Angular developer working 160 hours per month exclusively for your company. Best for custom system creation.",
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
          description: "An Angular developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire an Angular developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified Angular developer in four simple steps."
      processSteps={[
        {
          title: "Submit System Scope",
          description: "Outline your frontend application features, integration goals, and contract timeline."
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
      
      technologiesTitle="Angular Tech Stack & Tools"
      technologies={[
        { name: "Angular 17/18" },
        { name: "TypeScript" },
        { name: "RxJS" },
        { name: "NgRx" },
        { name: "Angular Material" },
        { name: "Jasmine & Karma" }
      ]}
      
      faqs={[
        {
          question: "Can your Angular developers work with older versions of Angular?",
          answer: "Yes. Our Angular developers are trained in modern v17/v18 setups but also have extensive experience maintaining and upgrading older AngularJS (v1.x) or Angular (v2-v16) codebases."
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
      
      ctaTitle="Hire Vetted Angular Developers"
      ctaDescription="Build high-performance enterprise applications. Contact Devarya Solutions today to hire experienced Angular frontend engineers."
    />
  );
}
