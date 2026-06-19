"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Terminal as TerminalIcon, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function PythonDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Python Developers"
      subtitle="Python & AI/Data Experts"
      heroIcon={TerminalIcon}
      heroDescription="Scale your engineering capacity with senior Python developers specializing in Django/Flask backends, AI integrations, data pipelines, and automation scripts."
      
      overviewTitle="Powerful, Intelligent Python Engineering"
      overviewDescription="At Devarya Solutions, we offer dedicated Python developers who construct secure APIs, integrate LLMs and machine learning models, build web scrapers, and manage database scaling. Python is the framework of choice for modern backend logic and intelligent automation, and our developers ensure high code quality, security, and performance."
      overviewHighlights={[
        "Expert Python programmers specializing in Django, Flask, and FastAPIs",
        "Proficient in database design, optimization, and queries with PostgreSQL/MySQL/MongoDB",
        "Deep knowledge of AI integration, LLMs, LangChain, and machine learning models",
        "Experienced in building event-driven web scrapers and automation scripts",
        "Strict adherence to PEP 8 style guidelines and secure programming standards"
      ]}
      
      whyHireTitle="Why Hire Python Developers from Devarya Solutions?"
      whyHireDescription="Leverage powerful Python backend frameworks to build stable, data-driven backend applications."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering database structure, API design, data processing, and security audits.",
          icon: Code
        },
        {
          title: "AI & ML Integrations",
          description: "We focus on intelligent automation and LLM integration, helping you build modern AI-driven solutions.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Python Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across backend framework architectures, databases, and data processing workflows."
      skills={[
        {
          title: "Django & FastAPI",
          description: "Writing clean, modular backend logic using Django ORM, FastAPI routers, and Flask configurations.",
          icon: Code
        },
        {
          title: "API Design & REST",
          description: "Creating secure, modular RESTful APIs and GraphQL endpoints for frontend and third-party platform integrations.",
          icon: Globe
        },
        {
          title: "Database Integration",
          description: "Designing efficient database schemas and queries using PostgreSQL, MySQL, and MongoDB.",
          icon: Settings
        },
        {
          title: "AI & Data Pipelines",
          description: "Building automated data processing workflows, ETL pipelines, and integrating OpenAI/Claude LLM APIs.",
          icon: Terminal
        },
        {
          title: "Performance & Scalability",
          description: "Optimizing server response times using Redis cache, Celery task queues, and Docker containerization.",
          icon: Layers
        },
        {
          title: "Server Security & Protection",
          description: "Enforcing OWASP guidelines, CSRF protection, SQL injection prevention, and secure OAuth2/JWT auth.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your backend engineering requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior Python developer working 160 hours per month exclusively for your company. Best for custom backend creation.",
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
          description: "A Python developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire a Python developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified Python developer in four simple steps."
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
      
      technologiesTitle="Python Tech Stack & Tools"
      technologies={[
        { name: "Python 3.x" },
        { name: "Django Framework" },
        { name: "FastAPI & Flask" },
        { name: "PostgreSQL & MongoDB" },
        { name: "Pandas & Celery" },
        { name: "Docker & AWS" }
      ]}
      
      faqs={[
        {
          question: "Can your Python developers build machine learning features?",
          answer: "Yes, our developers have experience in data preparation and implementing machine learning and AI APIs like OpenAI, LangChain, and Hugging Face."
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
      
      ctaTitle="Hire Vetted Python Developers"
      ctaDescription="Build high-performance backend systems and data pipelines. Contact Devarya Solutions today to hire experienced Python backend engineers."
    />
  );
}
