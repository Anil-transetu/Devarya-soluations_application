"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Target, Layers, Settings, Shield, Terminal, Globe, Users, AppWindow } from "lucide-react";

export function GrowingBusinessWeb() {
  return (
    <ServicePageLayout
      title="Web Development for Growing Businesses"
      subtitle="Scalable Business Websites"
      heroIcon={Target}
      heroDescription="Upgrade your digital presence to support business expansion. We build scalable corporate websites, client portals, and custom lead generation engines."
      overviewTitle="Accelerate Growth with a Robust Web Platform"
      overviewDescription="As a business expands, a simple template-based site is no longer sufficient. You require a robust platform that ranks highly for competitive search terms, integrates with your sales pipelines, and provides self-service features for clients. At Devarya Solutions, we engineer customized corporate websites that combine sleek UI/UX design with reliable backend logic, helping you capture demand and manage operations efficiently."
      overviewHighlights={[
        "Custom, high-end designs tailored to your corporate brand positioning",
        "Deep integrations with CRM platforms (Salesforce, HubSpot) and lead engines",
        "Built-in search engine optimization setup to scale organic client acquisition",
        "Secure client portal zones with user access controls",
        "Customized content architectures to manage extensive service offerings"
      ]}
      whyChooseTitle="Why Choose Our Growth-Focused Web Services?"
      whyChooseDescription="We translate your expansion strategies into working, secure web applications."
      whyChooseItems={[
        {
          title: "Engineered to Scale",
          description: "Our websites handle sudden traffic spikes and permit easy expansion of features as you grow.",
          icon: Layers
        },
        {
          title: "SEO Focus",
          description: "We build clean markup structures and metadata schemas to rank for business keywords.",
          icon: Target
        },
        {
          title: "Continuous Support",
          description: "We provide dedicated maintenance packages to monitor security, update plugins, and optimize load speeds.",
          icon: Settings
        }
      ]}
      featuresTitle="Strategic Features for Expanding Businesses"
      featuresDescription="Every corporate website we build is optimized for lead acquisition, security, and administrative control."
      features={[
        {
          title: "Custom Lead Pipelines",
          description: "Smart forms that route incoming client inquiries directly to your sales team's inbox or CRM.",
          icon: Target
        },
        {
          title: "Interactive Resource Centers",
          description: "Organized archives for whitepapers, case studies, blogs, and marketing material.",
          icon: Layers
        },
        {
          title: "Customer Portals",
          description: "Secure login zones for clients to view reports, request support, or manage billing details.",
          icon: Users
        },
        {
          title: "Deep API Integrations",
          description: "Sync your website with databases, booking tools, ERP networks, or custom applications.",
          icon: Settings
        },
        {
          title: "Granular CMS Access",
          description: "Multi-user content management systems that allow marketing teams to create updates safely.",
          icon: AppWindow
        },
        {
          title: "High-Grade Protection",
          description: "Firewalls, database encryption, malware checks, and automated backups keep operations safe.",
          icon: Shield
        }
      ]}
      processTitle="Our Structured Growth Framework"
      processDescription="A methodical design and coding lifecycle ensuring every corporate target is met on time."
      processSteps={[
        {
          title: "Strategic Discovery",
          description: "We evaluate your current site, document user pathways, and map database requirements."
        },
        {
          title: "Aesthetic Design & UX",
          description: "Our designers build high-fidelity layouts that project corporate authority and trust."
        },
        {
          title: "Robust Web Coding",
          description: "We code using Next.js or highly secure headless WordPress setups for simple backend editing."
        },
        {
          title: "Rigorous QA & Audit",
          description: "Running accessibility checks, security tests, and cross-browser formatting audits."
        },
        {
          title: "Launch & SEO Handshake",
          description: "Executing redirections from old URLs, submitting sitemaps, and launching the new portal."
        }
      ]}
      technologiesTitle="Technologies for Corporate Applications"
      technologies={[
        { name: "Next.js & React" },
        { name: "Node.js (Backend)" },
        { name: "WordPress (Headless)" },
        { name: "PostgreSQL & MySQL" },
        { name: "Tailwind CSS" },
        { name: "HubSpot & Salesforce APIs" }
      ]}
      faqs={[
        {
          question: "Can you migrate our old website without losing our existing Google rankings?",
          answer: "Yes. We execute a comprehensive SEO migration plan, including setting up 301 redirects, preserving meta descriptions, and submitting update requests to Google Search Console to keep your rankings intact."
        },
        {
          question: "Do you build client portal features or custom dashboards?",
          answer: "Yes. We specialize in building secure login systems that allow your clients or internal staff to interact with custom data tables, upload files, and check project milestones."
        },
        {
          question: "What does your website maintenance package include?",
          answer: "Our maintenance packages include weekly security scans, automated off-site backups, framework and plugin updates, database optimization, and a set block of developer hours for revisions."
        }
      ]}
      ctaTitle="Accelerate Your Business Expansion Today"
      ctaDescription="Build a high-performance corporate platform that expands your brand authority and simplifies operations. Get in touch to schedule a consult."
    />
  );
}
