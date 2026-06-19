"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { RefreshCw, Layout, Activity, Shield, Target, Settings, Star, Compass, BarChart } from "lucide-react";

export function WebsiteRevamp() {
  return (
    <ServicePageLayout
      title="Website Revamping & Optimization"
      subtitle="Modernize Your Site"
      heroIcon={RefreshCw}
      heroDescription="Breathe new life into your outdated website. We modernize designs, rebuild interfaces with modern tech stacks, and optimize load speeds for maximum conversion."
      overviewTitle="Redesign Outdated Websites for Modern Audiences"
      overviewDescription="An outdated website hurts your business. If your site takes more than 3 seconds to load, uses outdated layout patterns, or is hard to navigate on mobile, you are losing customers. At Devarya Solutions, we revamp old websites. We preserve your existing content, migrate your structure to fast modern frameworks (like Next.js), fix mobile layouts, and optimize speed scores (Core Web Vitals) to boost search engine rankings."
      overviewHighlights={[
        "Modern visual redesigns matching current UI/UX layout trends",
        "Migration from old slow setups to fast, modern frameworks",
        "Drastic improvement in Google PageSpeed and Lighthouse scores",
        "Fixes for mobile responsiveness and layout glitches on tablet screens",
        "SEO preservation plan to protect your existing search engine rankings"
      ]}
      whyChooseTitle="Why Revamp Your Website with Devarya Solutions?"
      whyChooseDescription="We focus on performance, security, and conversion rate increases to deliver maximum ROI."
      whyChooseItems={[
        {
          title: "Speed Optimization",
          description: "We optimize images, compress assets, and structure code to reduce page loading times below 1.5 seconds.",
          icon: Activity
        },
        {
          title: "SEO Protection",
          description: "We handle URL redirections and preserve meta schemas so you don't lose search engine placements.",
          icon: Target
        },
        {
          title: "Modern Security Standards",
          description: "We update out-of-date plugins, configure SSL certificates, and implement modern firewalls.",
          icon: Shield
        }
      ]}
      featuresTitle="Comprehensive Revamp Features"
      featuresDescription="Our revamps upgrade everything from user experience to administrative backend tools."
      features={[
        {
          title: "Sleek Modern Aesthetics",
          description: "Clean typography, dynamic color gradients, and glassmorphic panels that capture attention.",
          icon: Layout
        },
        {
          title: "Core Web Vitals Optimizations",
          description: "Optimized layouts to minimize Layout Shifts (CLS) and speed up Main Renders (LCP).",
          icon: Activity
        },
        {
          title: "Mobile Layout Refactoring",
          description: "Rebuild complex sidebars and tables to fit perfectly on modern smartphones.",
          icon: Layout
        },
        {
          title: "Frictionless Forms",
          description: "Redesign confusing contact forms to make filling in details quick and simple.",
          icon: Target
        },
        {
          title: "Headless CMS Integration",
          description: "Upgrade complex backends to modern CMS systems for simple text updates.",
          icon: Settings
        },
        {
          title: "Site Analytics Auditing",
          description: "Install Google Tag Manager and tracking pixels to analyze user interaction sources.",
          icon: BarChart
        }
      ]}
      processTitle="Our Revamp Roadmap"
      processDescription="A careful audit-driven workflow that upgrades your site without disrupting daily operations."
      processSteps={[
        {
          title: "Audit & Analysis",
          description: "We analyze your current site's loading speeds, mobile bugs, user drops, and keyword placements."
        },
        {
          title: "UX & Style Design",
          description: "Our designers build fresh layouts, matching modern brand palettes and typography."
        },
        {
          title: "Performance Coding",
          description: "Rebuilding the site with clean Next.js markup, utilizing optimized images and code splitting."
        },
        {
          title: "301 Redirect Mapping",
          description: "Mapping old URLs to new page structures to guarantee zero broken links and preserve SEO."
        },
        {
          title: "Launch & Validation",
          description: "Testing page speeds, ensuring form inputs route correctly, and deploying on global CDNs."
        }
      ]}
      technologiesTitle="Revamp Tools & Standards"
      technologies={[
        { name: "Next.js & React" },
        { name: "Tailwind CSS" },
        { name: "Lighthouse Performance Audits" },
        { name: "301 Redirect Mapping" },
        { name: "Google PageSpeed Insights" },
        { name: "Vercel & AWS Edge Networks" }
      ]}
      faqs={[
        {
          question: "Will our website go offline while you are revamping it?",
          answer: "No. We build and test your revamped website on a secure staging server. Your current website remains fully online and functional. We only perform the switch to the new site during low-traffic hours, resulting in zero downtime."
        },
        {
          question: "How do you protect our current Google search engine rankings?",
          answer: "We preserve your existing page URLs wherever possible. For pages that require folder updates, we configure 301 redirects, ensuring search engines crawl the new pages and transfer all ranking credits."
        },
        {
          question: "Why should we migrate our old WordPress site to Next.js?",
          answer: "Next.js pre-renders pages into static HTML at build time, resulting in loading speeds that are 5x to 10x faster than standard database-driven WordPress setups. It also eliminates plugin-related security vulnerabilities."
        }
      ]}
      ctaTitle="Give Your Website a Modern Edge"
      ctaDescription="Upgrade your page speed, UI design, and search engine discoverability today. Contact us for a free site audit and proposal."
    />
  );
}
