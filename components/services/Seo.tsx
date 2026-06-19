"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Search, Compass, Target, BarChart, Settings, Shield, Globe, Star, Users } from "lucide-react";

export function Seo() {
  return (
    <ServicePageLayout
      title="Search Engine Optimization (SEO)"
      subtitle="Organic Search Growth"
      heroIcon={Search}
      heroDescription="Scale your organic search traffic, secure top Google search rankings, and capture high-intent inbound client leads with technical and content SEO."
      overviewTitle="Capture Inbound Demand on Google and Search Engines"
      overviewDescription="Over 90% of online journeys begin with a search engine query. If your website is not ranking on page one for your core business services, your competitors are capturing valuable clients. At Devarya Solutions, we engineer comprehensive SEO strategies. We address technical code bottlenecks, audit site architectures, write highly detailed keyword content, and build domain authority links to ensure your website ranks well and drives sustained, high-converting organic traffic."
      overviewHighlights={[
        "In-depth technical SEO audits resolving crawl errors and code glitches",
        "Targeted keyword research mapping search intent to commercial services",
        "On-page content optimization aligning metadata, headers, and images",
        "Lighthouse speed optimizations to secure Page Experience rank signals",
        "Strategic authority link building via ethical outreach and quality PR"
      ]}
      whyChooseTitle="Why Choose Our Search Engine Optimization Team?"
      whyChooseDescription="We focus on organic search visibility that translates into lead signups and business revenue."
      whyChooseItems={[
        {
          title: "Technical SEO Experts",
          description: "We optimize sitemaps, robots.txt, schema markup, and loading speed signals that search engine bots prioritize.",
          icon: Settings
        },
        {
          title: "Intent-Mapped Keywords",
          description: "We focus on commercial search terms that ready-to-buy decision-makers use, rather than empty search phrases.",
          icon: Target
        },
        {
          title: "Transparent Dashboards",
          description: "We provide monthly reports tracking search impressions, keyword rank movements, and organic conversions.",
          icon: BarChart
        }
      ]}
      featuresTitle="Strategic Search Engine Optimization Features"
      featuresDescription="Our SEO plans optimize every aspect of your site to establish trust and search authority."
      features={[
        {
          title: "Detailed Site Audits",
          description: "Identify and resolve broken links, crawl blocks, duplicate metadata tags, and indexation errors.",
          icon: Search
        },
        {
          title: "Keyword Scoping",
          description: "Identify search phrases that your prospects use, analyzing competitor keyword placements.",
          icon: Compass
        },
        {
          title: "Schema Markup Integration",
          description: "Add structured JSON-LD data to help search engines display rich snippets for your pages.",
          icon: Settings
        },
        {
          title: "Page Experience Updates",
          description: "Accelerate site loading speeds to satisfy Google's strict Core Web Vitals guidelines.",
          icon: Shield
        },
        {
          title: "SEO Copywriting",
          description: "Draft comprehensive blog posts and service articles that answer searcher queries thoroughly.",
          icon: Star
        },
        {
          title: "Authority Link Outreach",
          description: "Earn backlinks from high-authority industry publications and business directories.",
          icon: Globe
        }
      ]}
      processTitle="Our SEO Optimization Process"
      processDescription="A systematic, audit-driven methodology designed to scale search impressions and organic traffic."
      processSteps={[
        {
          title: "Technical Site Crawl",
          description: "We analyze your site structure, mobile responsive layouts, and page speed indexation."
        },
        {
          title: "Keyword Target Mapping",
          description: "Identifying search terms, auditing competitor rankings, and building an optimization roadmap."
        },
        {
          title: "On-Page Refactoring",
          description: "Updating page titles, H1 tags, image alt texts, and incorporating target keyword terms into copy."
        },
        {
          title: "Structured Content Creation",
          description: "Drafting educational blogs and service landing pages to address informational searches."
        },
        {
          title: "Outreach & Rank Monitoring",
          description: "Securing backlinks, monitoring rank changes, and adjusting keywords based on Search Console audits."
        }
      ]}
      technologiesTitle="SEO Tools & Platforms"
      technologies={[
        { name: "Google Search Console" },
        { name: "Google Analytics 4" },
        { name: "SEMrush & Ahrefs" },
        { name: "Schema.org Markup" },
        { name: "Lighthouse Audit Suite" },
        { name: "Screaming Frog Crawler" }
      ]}
      faqs={[
        {
          question: "How long does it take to see ranking improvements from SEO?",
          answer: "While minor technical updates can be indexed within 2 to 4 weeks, ranking for competitive business keywords on page one typically takes 3 to 6 months of consistent optimization and outreach."
        },
        {
          question: "What is Schema Markup and why does it matter?",
          answer: "Schema markup is structured code added to your pages, helping search engines understand your content. It enables 'rich snippets' in search results (like reviews, event details, or FAQ dropdowns), which can increase search click-through rates by 30%."
        },
        {
          question: "Do you use ethical, White-Hat SEO techniques?",
          answer: "Yes. We strictly adhere to Google's Search Essentials guidelines. We do not use keyword stuffing, hidden text, or low-quality link spam networks. Our focus is on high-quality code, great user experience, and authentic industry backlinks."
        }
      ]}
      ctaTitle="Sustained Organic Lead Generation"
      ctaDescription="Build long-term digital authority and secure qualified client traffic. Contact our SEO strategists to launch your site audit."
    />
  );
}
