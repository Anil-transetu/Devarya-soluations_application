"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Target, FileSearch, BarChart, Settings, Shield, Globe, Star, Users, Zap } from "lucide-react";

export function Sem() {
  return (
    <ServicePageLayout
      title="Search Engine Marketing (SEM)"
      subtitle="Pay-Per-Click (PPC) Advertising"
      heroIcon={FileSearch}
      heroDescription="Capture ready-to-buy clients instantly. We run conversion-focused Google Ads and PPC campaigns optimized for maximum ROI and low acquisition cost."
      overviewTitle="Acquire Quality Sales Leads Instantly on Search Engines"
      overviewDescription="Organic search strategies take time, but search engine marketing (SEM) delivers immediate visibility. By targeting keywords with high buyer intent, you place your brand in front of clients at the exact moment they are looking for solutions. At Devarya Solutions, we configure and manage Google Ads and Microsoft Advertising campaigns. We conduct negative keyword filtering, write compelling ad copies, and optimize landing pages to lower your Cost-Per-Click (CPC) and scale qualified lead acquisitions."
      overviewHighlights={[
        "Compelling ad copy written to maximize click-through rates (CTR)",
        "Daily negative keyword monitoring to eliminate budget waste",
        "Targeted Search, Display, Shopping, and Remarketing campaign setups",
        "A/B testing of ad variations and conversion landing page structures",
        "Detailed lead attribution tracking tracing sales directly to ad keywords"
      ]}
      whyChooseTitle="Why Choose Our Search Engine Marketing Services?"
      whyChooseDescription="We manage your advertising budget with a strict focus on conversion volume and campaign ROI."
      whyChooseItems={[
        {
          title: "Certified Ad Strategists",
          description: "Our team consists of Google Ads certified professionals who understand bid optimization and auction dynamics.",
          icon: Zap
        },
        {
          title: "Budget Optimization",
          description: "We focus on high-intent long-tail keywords, maximizing conversions while minimizing cost-per-click.",
          icon: Target
        },
        {
          title: "Complete Transparency",
          description: "No hidden management fees. You have full access to your ad accounts and clear campaign reports.",
          icon: BarChart
        }
      ]}
      featuresTitle="Comprehensive Paid Search Features"
      featuresDescription="Our PPC campaigns are designed from scratch to maximize conversion volume and lower cost-per-lead."
      features={[
        {
          title: "Keyword Intent Mapping",
          description: "Filter out general informational keywords to target terms with explicit buying intent.",
          icon: Target
        },
        {
          title: "Compelling Ad Copies",
          description: "Drafting high-conversion headlines and descriptions that improve Quality Scores and lower costs.",
          icon: FileSearch
        },
        {
          title: "Negative Keyword Filter",
          description: "Exclude searches that waste budget (like 'free', 'jobs', or irrelevant queries).",
          icon: Shield
        },
        {
          title: "Google Remarketing",
          description: "Serve targeted display and search ads to users who visited your website but did not sign up.",
          icon: Star
        },
        {
          title: "Landing Page A/B Testing",
          description: "Optimizing landing page headlines and forms to maximize the conversion rate of incoming ad traffic.",
          icon: Settings
        },
        {
          title: "Conversion Tracking Setup",
          description: "Install tags to measure calls, form signups, and purchases directly linked to ad sources.",
          icon: BarChart
        }
      ]}
      processTitle="Our SEM Optimization Roadmap"
      processDescription="A continuous, data-driven cycle designed to lower acquisition costs and scale your leads."
      processSteps={[
        {
          title: "Account Setup & Audit",
          description: "Reviewing legacy campaigns, tracking tag configurations, and defining goals."
        },
        {
          title: "Keyword & Bid Strategy",
          description: "Scoping high-intent keyword targets, determining search volumes, and setting initial bidding structures."
        },
        {
          title: "Ad Copy & Assets Creation",
          description: "Drafting headlines, ad copy variations, sitelinks, callout extensions, and landing pages."
        },
        {
          title: "Campaign Go-Live",
          description: "Launching ad groups, setting up geotargeting controls, and initiating search network bids."
        },
        {
          title: "Daily Audit & Scaling",
          description: "Analyzing search terms, adding negative keywords, and scaling budget on high-performing ad sets."
        }
      ]}
      technologiesTitle="SEM Platforms & Analytics"
      technologies={[
        { name: "Google Ads Network" },
        { name: "Microsoft Advertising" },
        { name: "Google Analytics 4" },
        { name: "Google Tag Manager" },
        { name: "Google Keyword Planner" },
        { name: "SEM Campaign Dashboard" }
      ]}
      faqs={[
        {
          question: "How quickly will we start receiving leads from Google Ads?",
          answer: "PPC campaigns go live within hours of setup. Once Google approves the ad copy and the campaign starts bidding, you will see targeted visitors landing on your website immediately, often generating leads on day one."
        },
        {
          question: "How do you control our advertising budget?",
          answer: "We set strict daily budget caps in Google Ads, ensuring your spend never exceeds your monthly target. We monitor keyword bids closely and focus on high-intent terms to make every rupee count."
        },
        {
          question: "What is Google Quality Score and why does it matter?",
          answer: "Quality Score is Google's rating of the relevance and quality of your keywords, ads, and landing pages. A high Quality Score (e.g. 8/10 or above) lowers your cost-per-click and secures higher ad positions at a lower cost."
        }
      ]}
      ctaTitle="Drive Immediate Leads and Sales"
      ctaDescription="Get your business in front of active buyers instantly. Contact our PPC certified team to structure your campaigns."
    />
  );
}
