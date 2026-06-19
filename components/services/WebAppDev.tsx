"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Layout, Cpu, Layers, Settings, Shield, Terminal, BarChart, Users, Star } from "lucide-react";

export function WebAppDev() {
  return (
    <ServicePageLayout
      title="Custom Web Application Development"
      subtitle="SaaS & Interactive Portals"
      heroIcon={Layout}
      heroDescription="Develop interactive, high-performance web applications that automate workflows, power Software-as-a-Service (SaaS) platforms, and delight users."
      overviewTitle="Bespoke Web Software Engineered for High Performance"
      overviewDescription="Web applications are the operational core of modern digital platforms. Unlike static marketing websites, web apps handle complex user accounts, execute database operations, and manage workflows in real time. At Devarya Solutions, we build customized SaaS portals, internal company dashboards, and interactive web tools. Using modern frontend frameworks like Next.js and robust Node.js API servers, we ensure that your software is fast, responsive, and secure."
      overviewHighlights={[
        "Interactive dashboard portals featuring real-time data visualizations",
        "Robust RESTful and GraphQL API backends built to scale",
        "Clean, relational and non-relational database structures (PostgreSQL, MongoDB)",
        "Secure user authentication (JWT, OAuth) and role-based permissions",
        "Fully responsive web layouts optimized for desktop, tablet, and mobile browsers"
      ]}
      whyChooseTitle="Why Build Your Web App with Devarya Solutions?"
      whyChooseDescription="We combine scalable software engineering with user-centered design to build apps that perform."
      whyChooseItems={[
        {
          title: "Clean Modular Code",
          description: "We write maintainable code following modern SOLID programming patterns, making future feature expansion easy.",
          icon: Terminal
        },
        {
          title: "Stellar Page Uptime",
          description: "We set up automated CI/CD deployments and deploy code on reliable cloud environments.",
          icon: Cpu
        },
        {
          title: "Security Foundations",
          description: "We enforce input sanitation, SQL injection shields, and encryption protocols from the start.",
          icon: Shield
        }
      ]}
      featuresTitle="Robust Features of Our Web Applications"
      featuresDescription="Every web app we build is loaded with tools to simplify data editing, tracking, and management."
      features={[
        {
          title: "Interactive Dashboards",
          description: "Custom dashboards displaying data tables, search filters, and analytic reports.",
          icon: Layout
        },
        {
          title: "Role-Based Access Control",
          description: "Verify and restrict user actions using granular permission profiles (Admin, Editor, Viewer).",
          icon: Users
        },
        {
          title: "Real-Time Sync",
          description: "Provide live data updates, messaging, and push alerts using WebSocket integrations.",
          icon: Cpu
        },
        {
          title: "Third-Party Connectors",
          description: "Connect automatically with payment gateways, ERP tools, CRM databases, and external APIs.",
          icon: Settings
        },
        {
          title: "Structured Reporting",
          description: "Generate custom data reports and export summaries as PDF sheets or Excel spreadsheets.",
          icon: BarChart
        },
        {
          title: "Data Backup Vaults",
          description: "Automated database backups and encrypted storage vaults protect your core records.",
          icon: Shield
        }
      ]}
      processTitle="Our Web Software Lifecycle"
      processDescription="A collaborative, step-by-step roadmap that takes your web application from initial concept to launch."
      processSteps={[
        {
          title: "Database & System Architecture",
          description: "We map out schema relations, draft API endpoints, and design user permission levels."
        },
        {
          title: "UI/UX Layout Mapping",
          description: "Drafting high-fidelity mockups of dashboards, settings menus, and login forms."
        },
        {
          title: "Full-Stack Coding Sprints",
          description: "Writing frontend layouts in Next.js and connecting them to robust Node.js backend APIs."
        },
        {
          title: "Rigorous QA Testing",
          description: "Simulating heavy traffic loads, testing API data boundaries, and resolving edge-case bugs."
        },
        {
          title: "Server Configuration & Launch",
          description: "Deploying on AWS, setting up firewalls, configuring SSL, and launching your web application."
        }
      ]}
      technologiesTitle="Technologies for Custom Web Apps"
      technologies={[
        { name: "Next.js & React" },
        { name: "Node.js (Express)" },
        { name: "TypeScript" },
        { name: "PostgreSQL & MongoDB" },
        { name: "REST & GraphQL APIs" },
        { name: "AWS & Docker" }
      ]}
      faqs={[
        {
          question: "Can you help us build a SaaS (Software-as-a-Service) product?",
          answer: "Yes. We specialize in building SaaS applications, implementing features like user subscription plans, billing pipelines (via Stripe), secure customer account management, and scalable cloud database structures."
        },
        {
          question: "How do you protect database information?",
          answer: "We encrypt transit data using SSL/TLS protocols and encrypt static data. We sanitize all input vectors to block SQL injections and Cross-Site Scripting (XSS), and run vulnerability checks."
        },
        {
          question: "Can we expand our web app after launch?",
          answer: "Absolutely. We write modular, component-based code using TypeScript. This makes it easy to refactor code, scale database schemas, and add new features as your user base expands."
        }
      ]}
      ctaTitle="Build Premium Web Software with Devarya Solutions"
      ctaDescription="Automate your processes and launch your digital products with secure web apps. Reach out to schedule a scoping session."
    />
  );
}
