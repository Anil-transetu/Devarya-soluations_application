"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Share2, Users, Star, Target, Settings, Shield, Globe, BarChart, Smile } from "lucide-react";

export function Smm() {
  return (
    <ServicePageLayout
      title="Social Media Marketing (SMM)"
      subtitle="Social Media Management & Paid Ads"
      heroIcon={Share2}
      heroDescription="Engage your target audience, scale your brand community, and drive qualified leads on LinkedIn, Facebook, Instagram, and Twitter."
      overviewTitle="Build Brand Loyalty and Scale Social Engagement"
      overviewDescription="Social networks are where modern buyers discover brands, evaluate products, and engage with content. If your social presence is quiet or lacks professional branding, you are missing out on key relationships. At Devarya Solutions, we build comprehensive social media strategies. We manage your organic posting calendars, design scroll-stopping visual creatives, build targeted social ad funnels, and nurture active brand advocates to boost your market reach."
      overviewHighlights={[
        "Custom, brand-consistent visual design templates for all posts",
        "Structured organic content calendars targeting key business themes",
        "Highly optimized paid social campaigns targeting decision-makers",
        "Community engagement management answering follower comments and messages",
        "Detailed performance attribution reports tracking follower growth and lead generation"
      ]}
      whyChooseTitle="Why Choose Our Social Media Marketing Services?"
      whyChooseDescription="We combine visual storytelling with precise ad targeting to build active brand communities."
      whyChooseItems={[
        {
          title: "Audience Profiling",
          description: "We research your buyer personas, ensuring we target the exact job titles, interests, and demographics that buy your services.",
          icon: Users
        },
        {
          title: "Visual Excellence",
          description: "Our design team creates bespoke graphics, short videos, and slides that represent your brand professionally.",
          icon: Star
        },
        {
          title: "Clear Lead Attribution",
          description: "We set up tracking pixels (like Meta Pixel and LinkedIn Insight Tag) to measure social conversions accurately.",
          icon: BarChart
        }
      ]}
      featuresTitle="Strategic Social Media Features"
      featuresDescription="Our SMM strategies drive brand awareness, organic engagement, and paid acquisitions."
      features={[
        {
          title: "Organic Posting Plans",
          description: "Maintain a consistent posting schedule of informative and educational articles across your key social feeds.",
          icon: Globe
        },
        {
          title: "B2B LinkedIn Campaigns",
          description: "Target key corporate decision-makers by job title, company size, and specific industry.",
          icon: Target
        },
        {
          title: "Scroll-Stopping Visuals",
          description: "Stunning custom graphics, charts, and slide decks that stand out in crowded feeds.",
          icon: Star
        },
        {
          title: "Paid Social Ad Funnels",
          description: "Build multi-stage ad campaigns that guide users from initial brand awareness to lead conversion.",
          icon: Share2
        },
        {
          title: "Social Listening & Sync",
          description: "Track brand mentions, follow industry trends, and engage with customer reviews.",
          icon: Smile
        },
        {
          title: "Monthly ROI Dashboards",
          description: "Client reports compilation tracking follower growth, post reach, CTR, and lead volumes.",
          icon: BarChart
        }
      ]}
      processTitle="Our SMM Implementation Process"
      processDescription="A methodical content design and paid advertising roadmap focused on community scaling."
      processSteps={[
        {
          title: "Brand Voice Alignment",
          description: "We define your posting style guidelines, visual asset palettes, and target platforms."
        },
        {
          title: "Content Calendar Mapping",
          description: "Drafting a monthly posting schedule outlining graphic topics, copy text, and campaign hashtags."
        },
        {
          title: "Visual Assets Design",
          description: "Our graphic designers build matching templates and custom infographics for your feedback."
        },
        {
          title: "Paid Ads Launch",
          description: "Configuring targeting parameters, deploying ad assets, and setting up daily budget controls."
        },
        {
          title: "Analyze & Optimize",
          description: "Reviewing weekly engagement rates, adjusting targeting bids, and revising ad creatives based on performance."
        }
      ]}
      technologiesTitle="Social Media Platforms & Tools"
      technologies={[
        { name: "LinkedIn & Meta Platforms" },
        { name: "Twitter / X Marketing" },
        { name: "Meta Pixel & LinkedIn Tags" },
        { name: "Canva & Adobe Suite" },
        { name: "Buffer / Hootsuite Scheduling" },
        { name: "Google Analytics 4" }
      ]}
      faqs={[
        {
          question: "Which social media platforms should our business focus on?",
          answer: "If you are a B2B company, we recommend focusing heavily on LinkedIn and Twitter to reach corporate decision-makers. For B2C brands, Meta platforms (Instagram and Facebook) are highly effective for visual marketing and direct sales."
        },
        {
          question: "What is the difference between organic SMM and paid social ads?",
          answer: "Organic SMM focuses on posting content to your existing followers to build brand authority and loyalty. Paid social ads involve paying social platforms to display your ad creatives to a highly targeted audience outside your follower base, driving immediate lead generation."
        },
        {
          question: "Do you create the graphics and write the post captions yourself?",
          answer: "Yes. Our team includes professional copywriters who write the captions and call-to-actions, and graphic designers who create bespoke visual assets, carousel slides, and short video reels."
        }
      ]}
      ctaTitle="Grow Your Brand's Social Footprint"
      ctaDescription="Build brand loyalty, scale your followers, and acquire leads with professional social media marketing. Contact us to launch your campaigns."
    />
  );
}
