"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { FileText, Edit3, Target, Compass, Star, Settings, Shield, Globe, BarChart } from "lucide-react";

export function ContentWriting() {
  return (
    <ServicePageLayout
      title="Content Writing & Copywriting"
      subtitle="SEO-Optimized Content Services"
      heroIcon={FileText}
      heroDescription="Educate your target audience, rank for valuable search terms, and drive customer action with professional, SEO-optimized copywriting."
      overviewTitle="Engage Readers and Optimize Conversion Rates with High-Quality Copy"
      overviewDescription="Words sell. Even the most beautiful website layout will fail to acquire customers if the copy is confusing or unpersuasive. Additionally, search engines rely heavily on text content to crawl and rank websites. At Devarya Solutions, we specialize in professional copywriting. We write educational blog posts, detailed technical case studies, compelling landing page copy, and informative email newsletters that communicate your brand values clearly and turn readers into buyers."
      overviewHighlights={[
        "Compelling, research-driven copywriting tailored to your target audience",
        "SEO-optimized articles incorporating relevant keywords naturally",
        "Clear site navigation copywriting that simplifies user onboarding",
        "Professional edit schedules ensuring error-free, high-quality deliverables",
        "Bespoke newsletters and drip campaigns designed to nurture sales leads"
      ]}
      whyChooseTitle="Why Choose Our Copywriting Team?"
      whyChooseDescription="We write persuasive content that satisfies both search engine algorithms and human readers."
      whyChooseItems={[
        {
          title: "SEO Focus",
          description: "We optimize all headlines, body text, and links to ensure your content ranks well on search engines.",
          icon: Compass
        },
        {
          title: "Audience Alignment",
          description: "We write in your brand's unique voice, ensuring the tone matches your target industry's preferences.",
          icon: Target
        },
        {
          title: "Polished Quality",
          description: "Every piece of content goes through a strict editing and proofreading process to guarantee correctness.",
          icon: Edit3
        }
      ]}
      featuresTitle="Comprehensive Copywriting Capabilities"
      featuresDescription="Our writing services cover every digital channel to build brand authority and drive conversions."
      features={[
        {
          title: "SEO Blog Writing",
          description: "Educational, in-depth articles that answer searcher queries and rank for target search terms.",
          icon: Globe
        },
        {
          title: "Landing Page Copy",
          description: "Persuasive storefront copy featuring clear value propositions and strong call-to-actions.",
          icon: Star
        },
        {
          title: "Technical Case Studies",
          description: "Detailed client case studies illustrating your project success, database metrics, and solutions.",
          icon: FileText
        },
        {
          title: "Email Newsletters",
          description: "Engaging email copy designed to maintain subscriber relationship and nurture sales pipelines.",
          icon: Edit3
        },
        {
          title: "Product Descriptions",
          description: "Sleek, informative product descriptions written to boost sales conversion rates on online stores.",
          icon: Settings
        },
        {
          title: "Social Caption Writing",
          description: "High-impact captions for LinkedIn, Twitter, and Facebook posts written to drive click-throughs.",
          icon: BarChart
        }
      ]}
      processTitle="Our Writing & Publishing Process"
      processDescription="A collaborative workflow ensuring all content aligns with your brand standards and project aims."
      processSteps={[
        {
          title: "Briefing & Strategy",
          description: "We research your target audience, analyze competitor content, and establish topic keywords."
        },
        {
          title: "Content Outline Drafting",
          description: "Creating structured outlines for blogs or page mockups to align on the content layout."
        },
        {
          title: "Copywriting Sprint",
          description: "Our copywriters draft the text, integrating SEO keywords naturally and structuring headings."
        },
        {
          title: "Edit & Proofreading",
          description: "Reviewing draft outputs for grammar, readability scores, and factual consistency."
        },
        {
          title: "Handoff & Publishing",
          description: "Delivering the finalized, polished copy ready to load into your CMS or publish on your site."
        }
      ]}
      technologiesTitle="Writing & SEO Tools We Use"
      technologies={[
        { name: "Grammarly Editor" },
        { name: "Hemingway App" },
        { name: "Google Keyword Planner" },
        { name: "SEMrush Keyword Tool" },
        { name: "Google Docs Collaboration" },
        { name: "SEO Optimization Checklists" }
      ]}
      faqs={[
        {
          question: "How do you ensure the written content matches our brand voice?",
          answer: "We conduct an initial voice alignment call. We document your preferred tone (e.g. professional, conversational, authoritative), select vocabulary constraints, and review existing materials to establish consistent brand guidelines."
        },
        {
          question: "Will all the articles and blog posts be SEO-optimized?",
          answer: "Yes. Every piece of web content we write includes primary and secondary keyword research, optimized title tags, structured H1/H2 heading flows, and natural keyword density to rank well on search engines."
        },
        {
          question: "Do we own the full copyrights to the content you write?",
          answer: "Absolutely. Once the content is finalized and delivered, you hold 100% intellectual property ownership and publication rights."
        }
      ]}
      ctaTitle="Connect with Your Target Audience Today"
      ctaDescription="Establish market authority, optimize conversion rates, and drive traffic with professional copy. Reach out to schedule a consultation."
    />
  );
}
