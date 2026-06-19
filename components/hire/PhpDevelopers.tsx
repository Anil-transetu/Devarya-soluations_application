"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { FileCode, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function PhpDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated PHP Developers"
      subtitle="PHP Platform Experts"
      heroIcon={FileCode}
      heroDescription="Deploy skilled PHP developers to design, code, and maintain robust backend servers, dynamic web pages, and complex database integrations."
      
      overviewTitle="Time-Tested Backend Web Solutions"
      overviewDescription="At Devarya Solutions, we offer dedicated PHP backend developers who are highly proficient in building database-driven applications, custom content management systems, and enterprise backends. Writing clean MVC architecture, our developers focus on fast page rendering times, secure API design, and robust coding principles using Laravel, Symfony, and core PHP."
      overviewHighlights={[
        "Expert PHP programmers specializing in MVC frameworks (Laravel, Symfony)",
        "Proficient in database design, optimization, and queries with MySQL/PostgreSQL",
        "Deep knowledge of CMS development (WordPress, Drupal, custom setups)",
        "Experienced in building RESTful APIs and SOAP web services",
        "Strict adherence to PHP standards (PSR) and security updates"
      ]}
      
      whyHireTitle="Why Hire PHP Developers from Devarya Solutions?"
      whyHireDescription="Leverage robust PHP frameworks to build stable, dynamic backend applications."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering database structure, MVC design patterns, and PHP security audits.",
          icon: Code
        },
        {
          title: "Modern PHP Frameworks",
          description: "We focus on Laravel and modern PHP development, ensuring clean routing, ORMs, and secure data access.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="PHP Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across backend framework architectures, databases, and CMS environments."
      skills={[
        {
          title: "PHP & Laravel",
          description: "Writing clean, modular backend logic using modern Laravel features, Eloquent ORM, and Blade template engines.",
          icon: Code
        },
        {
          title: "API Design & REST",
          description: "Creating secure, modular RESTful APIs for frontend, mobile, and third-party platform integrations.",
          icon: Globe
        },
        {
          title: "Database Integration",
          description: "Designing efficient database schemas and queries using MySQL, PostgreSQL, and Redis cache systems.",
          icon: Settings
        },
        {
          title: "CMS & E-Commerce",
          description: "Building custom WordPress themes, WooCommerce integration, and headless CMS configurations.",
          icon: Terminal
        },
        {
          title: "Performance & Caching",
          description: "Optimizing server response times using Redis, Memcached, and OPCache systems.",
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
          description: "A senior PHP developer working 160 hours per month exclusively for your company. Best for custom system creation.",
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
          description: "A PHP developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
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
          description: "Hire a PHP developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
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
      processDescription="Hire a qualified PHP developer in four simple steps."
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
      
      technologiesTitle="PHP Tech Stack & Tools"
      technologies={[
        { name: "PHP 8.x" },
        { name: "Laravel Framework" },
        { name: "Symfony Framework" },
        { name: "MySQL & PostgreSQL" },
        { name: "WordPress & WooCommerce" },
        { name: "PHPUnit Testing" }
      ]}
      
      faqs={[
        {
          question: "Can your developers work with legacy PHP codebases?",
          answer: "Yes, absolutely. Our PHP developers are skilled in migrating and refactoring legacy PHP 5.x/7.x applications to modern PHP 8.x setups, utilizing Composer and OOP standards."
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
      
      ctaTitle="Hire Vetted PHP Developers"
      ctaDescription="Build high-performance dynamic backends. Contact Devarya Solutions today to hire experienced PHP backend engineers."
    />
  );
}
