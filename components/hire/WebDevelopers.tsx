"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { AppWindow, Code, Shield, Zap, Globe, Layers, Settings, Users, Terminal, Database, HelpCircle, Clock } from "lucide-react";

export function WebDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Web Developers"
      subtitle="Web Development Experts"
      heroIcon={AppWindow}
      heroDescription="Scale your software engineering capacity with professional, dedicated web developers. Our engineers build responsive websites, robust web portals, and feature-rich SaaS applications tailored to your business needs."
      
      overviewTitle="On-Demand Web Engineering Talent"
      overviewDescription="At Devarya Solutions, we offer dedicated web developers who specialize in modern frameworks and scalable system designs. Whether you need to build a complex corporate portal, integrate business-critical APIs, or upgrade a legacy system, our developers ensure high code quality, security, and performance. You get full control over the project while we handle the HR and operational overhead."
      overviewHighlights={[
        "Highly skilled developers experienced in React, Next.js, and Angular",
        "Proficient in clean, reusable, and modern TypeScript/JavaScript",
        "Expert backend engineering using Node.js, Python, and SQL databases",
        "Strict adherence to performance optimization and security standards",
        "Seamless integration with third-party tools and API architectures"
      ]}
      
      whyHireTitle="Why Hire Web Developers from Devarya Solutions?"
      whyHireDescription="We connect you with qualified software engineers who integrate directly with your team and accelerate your release cycles."
      whyHireItems={[
        {
          title: "Rigorous Selection Process",
          description: "Our developers undergo tough technical tests, problem-solving evaluations, and soft skill reviews to ensure top-tier performance.",
          icon: Shield
        },
        {
          title: "Seamless Onboarding",
          description: "We handle the onboarding process, setting up repositories, communication channels, and getting developers up to speed within days.",
          icon: Zap
        },
        {
          title: "Full Transparency",
          description: "Monitor progress through daily standups, Jira boards, and git commits. You always know exactly what your developer is working on.",
          icon: Users
        }
      ]}
      
      skillsTitle="Key Technical Skills of Our Web Developers"
      skillsDescription="Our developers possess a deep understanding of modern web engineering methodologies and technologies."
      skills={[
        {
          title: "Frontend Development",
          description: "Building responsive, fast, and accessible user interfaces using React, Next.js, and Tailwind CSS.",
          icon: Code
        },
        {
          title: "Backend Development",
          description: "Constructing robust server side structures using Node.js, Express, Python Django, or PHP Laravel.",
          icon: Terminal
        },
        {
          title: "Database Management",
          description: "Designing efficient database schemas and queries using PostgreSQL, MySQL, and MongoDB.",
          icon: Database
        },
        {
          title: "API Design & Integration",
          description: "Creating secure RESTful and GraphQL APIs to facilitate seamless data communication.",
          icon: Globe
        },
        {
          title: "Cloud & DevOps",
          description: "Deploying and managing applications on AWS, Google Cloud Platform, and Vercel using CI/CD pipelines.",
          icon: Layers
        },
        {
          title: "Security & Testing",
          description: "Writing unit tests, conducting vulnerability checks, and enforcing HTTPS and secure token storage.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Flexible Hiring Models"
      hiringModelsDescription="Choose the engagement model that best aligns with your timeline, budget, and project requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A dedicated developer working 160 hours per month exclusively on your project. Best for long-term roadmaps.",
          duration: "Monthly Contract",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct Slack/Teams communication",
            "Daily status reporting",
            "No overhead costs"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "A developer dedicated to your project for 80 hours per month. Ideal for minor maintenance and medium-sized updates.",
          duration: "Flexible Term",
          icon: Clock,
          benefits: [
            "80 Hours/Month dedicated focus",
            "Direct communication during hours",
            "Weekly sprint reviews",
            "Scalable up or down easily"
          ]
        },
        {
          title: "Hourly Contract",
          description: "Pay-as-you-go developer support based on actual hours spent on specific tasks. Best for ad-hoc support.",
          duration: "Hourly Billing",
          icon: Clock,
          benefits: [
            "Pay only for hours worked",
            "Detailed timesheet tracking",
            "Perfect for minor bug fixes",
            "No long-term commitment"
          ]
        }
      ]}
      
      processTitle="Our Engagement Process"
      processDescription="Get your developer onboarded and writing code in four simple steps."
      processSteps={[
        {
          title: "Share Requirements",
          description: "Tell us about your tech stack, project goals, and required developer experience level."
        },
        {
          title: "Interview Candidates",
          description: "Review curated resumes and conduct direct video interviews to select the perfect developer."
        },
        {
          title: "SLA & Contract",
          description: "We sign standard non-disclosure agreements (NDAs) and service agreements to protect your intellectual property."
        },
        {
          title: "Onboarding & Kickoff",
          description: "Set up communication channels, grant repository access, and start building in your first sprint."
        }
      ]}
      
      technologiesTitle="Technologies & Tools Our Web Developers Use"
      technologies={[
        { name: "React & Next.js" },
        { name: "Node.js & Express" },
        { name: "TypeScript" },
        { name: "Python & Django" },
        { name: "PostgreSQL & MongoDB" },
        { name: "AWS & Docker" }
      ]}
      
      faqs={[
        {
          question: "Can I interview the web developers before onboarding?",
          answer: "Yes, absolutely. We shortlist candidates based on your requirements, and you can conduct technical rounds and interviews to select the best match."
        },
        {
          question: "How do you track developer hours and productivity?",
          answer: "We use standard project management tools like Jira, Trello, and time-tracking utilities. If hired full-time, you will receive daily updates and git commits directly into your repositories."
        },
        {
          question: "What if the developer is not performing as expected?",
          answer: "We offer a 1-week trial. If the developer doesn't meet expectations, we will provide a replacement immediately at no extra cost."
        }
      ]}
      
      ctaTitle="Hire Top-Tier Web Developers Today"
      ctaDescription="Scale your engineering capabilities quickly. Get in touch with us to view developer profiles and schedule interviews."
    />
  );
}
