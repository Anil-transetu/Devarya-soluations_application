"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Flame, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function CodeigniterDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated CodeIgniter Developers"
      subtitle="CodeIgniter Framework Experts"
      heroIcon={Flame}
      heroDescription="Hire senior CodeIgniter developers to build rapid, high-performance PHP applications with small footprints and simple server requirements."
      
      overviewTitle="Lightweight MVC Development for Speed"
      overviewDescription="At Devarya Solutions, we offer dedicated CodeIgniter developers who write clean, structured code, avoiding bloated setups while building custom APIs, database connections, and secure dashboards. CodeIgniter is an excellent framework for lightweight, fast-loading dynamic applications, and our developers ensure high code quality, security, and performance."
      overviewHighlights={[
        "Expert PHP programmers specializing in the CodeIgniter framework",
        "Proficient in database design, optimization, and queries with MySQL/PostgreSQL",
        "Deep knowledge of lightweight MVC architecture and coding standards",
        "Experienced in building RESTful APIs and custom web integration portals",
        "Strict adherence to input filtering, SQL injection protection, and security updates"
      ]}
      
      whyHireTitle="Why Hire CodeIgniter Developers from Devarya Solutions?"
      whyHireDescription="Leverage lightweight MVC architecture to build fast-loading PHP backend solutions."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering database structure, MVC design patterns, and CodeIgniter security audits.",
          icon: Code
        },
        {
          title: "High Performance Sites",
          description: "Utilize CodeIgniter's minimal footprint and fast execution times to deliver responsive dynamic applications.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="CodeIgniter Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across backend framework architectures, databases, and third-party APIs."
      skills={[
        {
          title: "CodeIgniter & MVC PHP",
          description: "Writing clean, modular backend logic using CodeIgniter core features, dynamic queries, and helper configurations.",
          icon: Code
        },
        {
          title: "API Design & REST",
          description: "Creating secure, modular RESTful APIs for frontend, mobile, and third-party platform integrations.",
          icon: Globe
        },
        {
          title: "Database Integration",
          description: "Designing efficient database schemas and queries using MySQL, PostgreSQL, and SQLite.",
          icon: Settings
        },
        {
          title: "Theme & UI Customization",
          description: "Integrating custom HTML/CSS structures and templates with CodeIgniter controllers and views.",
          icon: Terminal
        },
        {
          title: "Performance Optimization",
          description: "Optimizing server response times using file caching, query tuning, and server-side configurations.",
          icon: Layers
        },
        {
          title: "Server Security & Protection",
          description: "Enforcing CSRF protection, SQL injection prevention, input sanitization, and secure authentication flows.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your backend engineering requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior CodeIgniter developer working 160 hours per month exclusively for your company. Best for custom system creation.",
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
          description: "A CodeIgniter developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire a CodeIgniter developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified CodeIgniter developer in four simple steps."
      processSteps={[
        {
          title: "Submit System Scope",
          description: "Outline your application features, integration goals, and contract timeline."
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
      
      technologiesTitle="CodeIgniter Tech Stack & Tools"
      technologies={[
        { name: "CodeIgniter 3.x / 4.x" },
        { name: "PHP 8.x" },
        { name: "MySQL & SQLite" },
        { name: "Composer Dependency Manager" },
        { name: "Bootstrap & jQuery" },
        { name: "Git & GitLab" }
      ]}
      
      faqs={[
        {
          question: "Can your developers upgrade my older CodeIgniter 3 application to CodeIgniter 4?",
          answer: "Yes, absolutely. Our developers specialize in code migration and refactoring legacy CodeIgniter 3 applications to the modern, namespaces-based CodeIgniter 4 structure."
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
      
      ctaTitle="Hire Vetted CodeIgniter Developers"
      ctaDescription="Build high-performance dynamic PHP backends. Contact Devarya Solutions today to hire experienced CodeIgniter developers."
    />
  );
}
