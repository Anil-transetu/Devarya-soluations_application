"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Rocket, Target, BarChart, Users, Star, Compass, Settings, Shield, Smile } from "lucide-react";

export function StartupMarketing() {
  return (
    <ServicePageLayout
      title="Digital Marketing for Start-ups"
      subtitle="Startup Growth Marketing"
      heroIcon={Rocket}
      heroDescription="Acquire your first 1,000 customers, establish brand traction, and optimize client acquisition costs with agile growth marketing strategies."
      overviewTitle="Launch Fast, Grow Organic Traffic, and Scale Demand"
      overviewDescription="Startups face unique marketing challenges: limited initial brand recognition, tight budgets, and the need to validate their product quickly. At Devarya Solutions, we design growth marketing campaigns specifically for early-stage companies. We focus on search engine optimization (SEO), conversion rate optimizations (CRO), content marketing, and structured paid advertising to build brand awareness, capture initial leads, and lower Customer Acquisition Cost (CAC)."
      overviewHighlights={[
        "Guided launch strategies to acquire your first beta testers and users",
        "Setup of comprehensive analytics funnels to track conversion drops",
        "Content marketing syndication that builds organic domain authority",
        "Targeted paid ad experiments across search engines and social feeds",
        "Conversion landing page designs built for high sign-up conversion rates"
      ]}
      whyChooseTitle="Why Partner with Us for Startup Growth?"
      whyChooseDescription="We prioritize metrics that matter—like active users and customer acquisition cost—over simple vanity metrics."
      whyChooseItems={[
        {
          title: "Data-Driven Experiments",
          description: "We run rapid, structured marketing tests to identify the most cost-effective acquisition channels.",
          icon: BarChart
        },
        {
          title: "Founder Mindset",
          description: "We optimize your ad spend carefully, prioritizing campaigns that offer immediate user feedback and lead conversion.",
          icon: Rocket
        },
        {
          title: "Full Funnel Tracking",
          description: "We implement tracking scripts across all landing pages to measure visitor behavior and ROI accurately.",
          icon: Target
        }
      ]}
      featuresTitle="Strategic Growth Marketing Features"
      featuresDescription="Our campaigns combine technical SEO, paid search marketing, and social media engagement to drive traffic."
      features={[
        {
          title: "High-Converting Landing Pages",
          description: "Bespoke sign-up pages featuring clear call-to-actions, fast load times, and responsive forms.",
          icon: Star
        },
        {
          title: "Technical SEO Audit",
          description: "Optimize HTML markup, metadata tags, and page speeds to scale organic Google traffic.",
          icon: Compass
        },
        {
          title: "Targeted Paid Campaigns",
          description: "Run search engine marketing (SEM) experiments to capture high-intent client search queries.",
          icon: Rocket
        },
        {
          title: "Social Engagement Plan",
          description: "Establish early community traction on key professional and social channels.",
          icon: Users
        },
        {
          title: "Retargeting Setup",
          description: "Keep your brand visible by retargeting visitors who dropped off your checkout or sign-up flow.",
          icon: Settings
        },
        {
          title: "Actionable Growth Reports",
          description: "Weekly reports tracking cost-per-lead, active users, traffic sources, and overall conversion gains.",
          icon: BarChart
        }
      ]}
      processTitle="Our Growth Marketing Lifecycle"
      processDescription="A collaborative roadmap designed to build early market authority and scale user registration."
      processSteps={[
        {
          title: "Funnel Scoping & Tracking",
          description: "We install Google Analytics, tracking pixels, and map visitor-to-lead conversion funnels."
        },
        {
          title: "Landing Page Optimization",
          description: "Designing landing page layouts featuring copy, speed updates, and responsive contact forms."
        },
        {
          title: "Organic SEO Foundation",
          description: "Identifying high-value, low-competition keywords and writing content to rank for them."
        },
        {
          title: "Paid Campaign Testing",
          description: "Launching small-budget search and social ad tests to pinpoint high-conversion target audiences."
        },
        {
          title: "Scale & Optimize",
          description: "Pumping budget into winning channels, optimizing landing pages, and scaling user sign-ups."
        }
      ]}
      technologiesTitle="Growth & Analytics Technologies"
      technologies={[
        { name: "Google Analytics 4" },
        { name: "Google Tag Manager" },
        { name: "Meta Ads Manager" },
        { name: "Google Search Console" },
        { name: "HubSpot CRM" },
        { name: "Hotjar UX Tracking" }
      ]}
      faqs={[
        {
          question: "How do you measure marketing success for a startup?",
          answer: "We focus on three primary metrics: Cost Per Acquisition (CPA), visitor-to-lead Conversion Rate, and total Monthly Active Users (MAU). We avoid vanity metrics like page impressions that do not translate into sales."
        },
        {
          question: "What is the recommended marketing budget for an early-stage startup?",
          answer: "We recommend starting with a small testing budget (e.g. ₹20,000 to ₹50,000) for paid ads. Once we identify the target keywords and audiences that produce leads, we scale the budget based on the return on investment."
        },
        {
          question: "How long does it take to see results from SEO?",
          answer: "Organic SEO is a long-term strategy. While technical optimizations and page speed improvements can show search indexing changes within 4 weeks, ranking for competitive business keywords typically takes 3 to 6 months."
        }
      ]}
      ctaTitle="Accelerate Your Startup's Growth Today"
      ctaDescription="Build early market traction, acquire active users, and lower your client acquisition cost. Contact us to design your growth strategy."
    />
  );
}
