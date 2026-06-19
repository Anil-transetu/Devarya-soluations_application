"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Shield, Server, Compass, Zap, Cpu, Settings, Activity, Lock, Users } from "lucide-react";

export function EnterpriseWeb() {
  return (
    <ServicePageLayout
      title="Web Development for Enterprise"
      subtitle="Enterprise Web Portals"
      heroIcon={Shield}
      heroDescription="High-performance, secure, and robust web applications designed for large-scale operations. We integrate legacy databases, enforce single sign-on, and guarantee 99.9% uptime."
      overviewTitle="Scalable Web Infrastructure for Large Organizations"
      overviewDescription="Enterprises require web solutions that conform to strict security rules, handle high-volume traffic, and connect with complex internal directories. At Devarya Solutions, we engineer enterprise-grade web applications with a focus on modularity, microservices, and security compliance. Our team integrates legacy systems, builds custom client dashboards, and implements high-availability hosting architectures to keep your operations running 24/7."
      overviewHighlights={[
        "Enforced Single Sign-On (SSO) and Multi-Factor Authentication (MFA)",
        "Service-Level Agreement (SLA) driven performance and 99.9% uptime setups",
        "Deep integrations with SAP, Oracle, and Salesforce databases",
        "Adherence to ISO 27001, GDPR, and HIPAA data standards",
        "Microservices-based backend architectures to prevent system-wide downtime"
      ]}
      whyChooseTitle="Why Choose Our Enterprise Web Team?"
      whyChooseDescription="We combine expert software design with strict compliance standards to safeguard and optimize your operations."
      whyChooseItems={[
        {
          title: "SLA-Driven Uptime",
          description: "We design cloud setups with auto-scaling capabilities and redundant failovers to maintain availability.",
          icon: Server
        },
        {
          title: "Rigorous Compliance",
          description: "We enforce database encryption, access logs, and input sanitation to satisfy compliance audits.",
          icon: Lock
        },
        {
          title: "Legacy Integration",
          description: "We write secure APIs and middleware to connect modern frontends to older internal databases.",
          icon: Cpu
        }
      ]}
      featuresTitle="Enterprise-Class Capabilities"
      featuresDescription="Our web systems offer robust reliability, granular administrative access, and real-time monitoring."
      features={[
        {
          title: "Role-Based Permissions",
          description: "Define granular access rights for managers, employees, and clients with single sign-on support.",
          icon: Users
        },
        {
          title: "Custom CRM & ERP Bridges",
          description: "Synchronize customer and transaction data in real time between your website and internal databases.",
          icon: Settings
        },
        {
          title: "High-Volume Optimization",
          description: "Asset CDNs, server-side rendering (SSR), and query caching to maintain fast load speeds under heavy traffic.",
          icon: Activity
        },
        {
          title: "System Log Auditing",
          description: "Maintain comprehensive tracking logs of all administrative actions, data edits, and logins.",
          icon: Lock
        },
        {
          title: "Auto-Backup Vaults",
          description: "Automated hourly database backups stored securely across separate geographical data centers.",
          icon: Server
        },
        {
          title: "Robust Security Headers",
          description: "Enforce strict Content Security Policies (CSP) to block script injections and data breach attempts.",
          icon: Shield
        }
      ]}
      processTitle="Our Enterprise Development Lifecycle"
      processDescription="A comprehensive, review-driven approach ensuring compliance, stability, and clean code handoff."
      processSteps={[
        {
          title: "Scoping & Security Review",
          description: "Evaluating data flow architectures, database models, and internal compliance constraints."
        },
        {
          title: "System Architecture Design",
          description: "Drafting API endpoints, schema relations, and server containerization setups."
        },
        {
          title: "Development Sprints",
          description: "Coding in two-week agile sprint blocks, using strict linting and automatic pipeline tests."
        },
        {
          title: "Penetration & Load Testing",
          description: "Testing system performance under heavy load and simulating security attacks to patch bugs."
        },
        {
          title: "Deployment & SLA Setup",
          description: "Deploying using secure CI/CD pipelines, configuring server firewalls, and setting up monitoring alerts."
        }
      ]}
      technologiesTitle="Enterprise Web Technologies"
      technologies={[
        { name: "Next.js (React)" },
        { name: "Node.js (NestJS)" },
        { name: "Java Spring Boot" },
        { name: "Docker & Kubernetes" },
        { name: "AWS & Microsoft Azure" },
        { name: "GraphQL & gRPC" }
      ]}
      faqs={[
        {
          question: "Can your systems integrate with Active Directory or SSO providers?",
          answer: "Yes. We integrate Single Sign-On (SSO) using SAML 2.0, OAuth 2.0, or OpenID Connect, linking directly with Microsoft Active Directory, Okta, Ping Identity, or custom authentication providers."
        },
        {
          question: "Do you sign Service-Level Agreements (SLAs)?",
          answer: "Yes. We provide enterprise-tier support packages that include explicit SLAs, defining response times (e.g. under 2 hours for critical issues), routine security audits, and continuous uptime guarantees."
        },
        {
          question: "How do you handle data privacy and security compliance?",
          answer: "We follow industry best practices, implementing SSL/TLS encryption for transit data, AES-256 encryption for database columns, strict CORS policies, and compliance-specific data handling to meet GDPR, HIPAA, or ISO 27001 requirements."
        }
      ]}
      ctaTitle="Optimize Your Enterprise Operations Today"
      ctaDescription="Build a highly secure, reliable, and compliant web system that connects your operations. Reach out to schedule a consultation with our system architects."
    />
  );
}
