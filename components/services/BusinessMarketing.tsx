"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Target, BarChart, Activity, Users, Settings, Shield, Globe, Star, Compass } from "lucide-react";

export function BusinessMarketing() {
  return (
    <ServicePageLayout
      title="Digital Marketing for Growing Businesses"
      subtitle="Business Growth Marketing"
      heroIcon={Target}
      heroDescription="Scale your customer acquisition pipelines, optimize campaign return-on-investment, and establish market dominance with data-driven marketing."
      overviewTitle="Scale Your Brand Authority and Lead Volumes"
      overviewDescription="Growing businesses require structured, multi-channel marketing campaigns that integrate with sales pipelines. You need to rank for high-value search terms, target buyers across social networks, and nurture leads automatically. At Devarya Solutions, we build comprehensive digital marketing campaigns. We combine search engine optimization (SEO), search engine marketing (SEM), marketing automation, and conversion rate optimization (CRO) to maximize your customer lifetime value."
      overviewHighlights={[
        "Multi-channel search and social campaign management to scale lead volumes",
        "Deep CRM integration and automated lead-routing configurations",
        "Technical and off-page SEO strategies targeting high-value commercial keywords",
        "Automated email marketing campaigns designed to nurture cold leads",
        "Comprehensive attribution reporting tracing cost-per-acquisition and ROI"
      ]}
      whyChooseTitle="Why Choose Our Growth Marketing Services?"
      whyChooseDescription="We build marketing pipelines that deliver qualified leads and scale alongside your sales goals."
      whyChooseItems={[
        {
          title: "Attribution Accuracy",
          description: "We implement advanced analytics tracking to trace exactly which campaigns and keywords generate sales.",
          icon: BarChart
        },
        {
          title: "Sustained SEO Rankings",
          description: "We produce in-depth content strategies and authority links to keep you ranking on Google page one.",
          icon: Target
        },
        {
          title: "Automation Focus",
          description: "We set up automated lead nurturing and remarketing loops to close deals on autopilot.",
          icon: Settings
        }
      ]}
      featuresTitle="Comprehensive Growth Marketing Features"
      featuresDescription="Our setups combine search visibility, social engagement, and automated nurturing to maximize pipeline value."
      features={[
        {
          title: "Commercial SEO Focus",
          description: "Rank for keywords that decision-makers search when they are ready to purchase.",
          icon: Compass
        },
        {
          title: "High-Intent SEM Campaigns",
          description: "Manage Google and Bing search ads, optimizing negative keywords to reduce wasted ad budget.",
          icon: Target
        },
        {
          title: "B2B Social Marketing",
          description: "Target decision-makers on LinkedIn and industry professionals on key platforms.",
          icon: Users
        },
        {
          title: "Remarketing Campaigns",
          description: "Deliver specific ad creatives to prospects who viewed your case studies or pricing pages.",
          icon: Star
        },
        {
          title: "CRM Lead Automation",
          description: "Route website leads directly to your sales representatives and set up auto-responders.",
          icon: Settings
        },
        {
          title: "Performance Dashboards",
          description: "Client dashboards compiling CPC, CTR, cost-per-lead, and overall campaign returns.",
          icon: BarChart
        }
      ]}
      processTitle="Our Growth Marketing Architecture"
      processDescription="A systematic, review-driven approach that aligns your marketing campaigns with sales targets."
      processSteps={[
        {
          title: "Audit & Pipeline Setup",
          description: "We review your current site traffic, keyword rankings, and install conversion tracking codes."
        },
        {
          title: "Content & Keyword Strategy",
          description: "Mapping search terms that your target clients use and drafting a content publishing timeline."
        },
        {
          title: "Campaign Configuration",
          description: "Building paid search keyword lists, designing social ad creatives, and setting up ad copy."
        },
        {
          title: "Agile Optimization Sprints",
          description: "Weekly adjustments to bids, negative keywords, ad copy variations, and landing page layouts."
        },
        {
          title: "Attribution & Scaling",
          description: "Analyzing conversion paths, calculating ROI per channel, and scaling budgets on high-performing campaigns."
        }
      ]}
      technologiesTitle="Growth & Marketing Technologies"
      technologies={[
        { name: "Google Ads & Bing Ads" },
        { name: "LinkedIn Campaign Manager" },
        { name: "Google Analytics 4" },
        { name: "HubSpot & Salesforce" },
        { name: "ActiveCampaign & Mailchimp" },
        { name: "Google Tag Manager" }
      ]}
      faqs={[
        {
          question: "How do you align digital marketing with our sales team?",
          answer: "We configure your website forms to sync automatically with CRM tools like HubSpot or Salesforce. We map custom fields (such as budget, timeline, and company size) so your sales team has full context before they contact a lead."
        },
        {
          question: "Do you manage both SEO and paid search (Google Ads) campaigns?",
          answer: "Yes. Combining organic SEO with paid search delivers the best results. Paid ads drive immediate leads while SEO builds long-term organic traffic, lowering your average client acquisition costs over time."
        },
        {
          question: "How do you optimize ad campaigns to prevent wasted budget?",
          answer: "We perform daily optimizations, refining negative keyword lists to filter out irrelevant searches, testing ad copy variations to improve Click-Through Rate (CTR), and optimizing landing pages to boost conversion rates."
        }
      ]}
      ctaTitle="Scale Your Acquisition Pipelines Today"
      ctaDescription="Build a data-driven digital marketing system that generates qualified leads and drives business growth. Get in touch to schedule a consult."
    />
  );
}
