"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Share2, Users, Shield, Zap, Cpu, Layers } from "lucide-react";

export function SocialMedia() {
  return (
    <ProductPageLayout
      title="Custom Social Media Networks & Communities"
      subtitle="Custom Social Networking Sites"
      heroIcon={Share2}
      heroDescription="A highly engaging, customizable community platform. Build private company networks, customer engagement forums, or niche social apps featuring real-time chats, media feeds, and groups."
      overviewTitle="Connect People with Tailored Social Infrastructure"
      overviewDescription="At Devarya Solutions, we provide a modern social community ecosystem designed to drive member engagement and retain users. Whether you are building an internal corporate communication portal, a brand loyalty network, or a public interest-based social application, our platform delivers real-time interactions, post creations, secure groups, and optimized media delivery."
      overviewHighlights={[
        "Interactive customer feed app supporting text, photo, and video posts",
        "Direct Messaging (DM) and group chats with real-time text and media sharing",
        "Cloud transcoding pipelines optimized for smooth image and video renders",
        "Moderation console to review reported content, filter profanity, and ban accounts",
        "Reliable notification dispatcher supporting instant push alerts and emails"
      ]}
      benefitsTitle="Why Choose Our Social Network Solution?"
      benefitsDescription="Own your interaction data, engage your target audience, and bypass standard social algorithms."
      benefits={[
        {
          title: "High Member Engagement",
          description: "Keep users coming back with structured feeds, hashtags, discussion topics, and voting polls.",
          icon: Users
        },
        {
          title: "Complete Data Control",
          description: "Maintain 100% ownership of your user database, analytics records, and content policies.",
          icon: Shield
        },
        {
          title: "Buffer-Free Media Stream",
          description: "Leverage automated media optimization and edge CDNs to load photos and video feeds instantly.",
          icon: Zap
        }
      ]}
      featuresTitle="Key Features of the Community Engine"
      featuresDescription="Engineered to provide members with expressive posting tools and moderators with robust control."
      features={[
        {
          title: "Personalized Feed Engine",
          description: "Sorts posts dynamically based on user preferences, popular interactions, or simple timelines.",
          icon: Cpu
        },
        {
          title: "Real-Time Chat Broker",
          description: "WebSocket-based chat engine that coordinates instant messaging, files sharing, and emojis.",
          icon: Users
        },
        {
          title: "AWS Media Transcoder",
          description: "Compresses uploaded video and image files into multiple resolutions to ensure smooth playing on mobile.",
          icon: Layers
        },
        {
          title: "Automated Content Filters",
          description: "Blocks profanity and sensitive words automatically, routing flagged items to admin review queues.",
          icon: Shield
        },
        {
          title: "User Profile Roster",
          description: "Features customizable user profiles, profile images, banners, bio text, and user relationships.",
          icon: Users
        },
        {
          title: "Push Notification Server",
          description: "Keeps members engaged by sending immediate notifications for likes, comments, and mentions.",
          icon: Zap
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our community engine scales to serve internal company operations, customer clubs, or niche startups."
      useCases={[
        {
          title: "Corporate Intranet & Social Portals",
          description: "Connects company staff, enabling them to share achievements, coordinate teams, and message in secure rooms."
        },
        {
          title: "Brand Loyalty & Customer Clubs",
          description: "Provides businesses with a branded forum space where customers share feedback and access early announcements."
        },
        {
          title: "Specialty Interest Communities",
          description: "Ideal for launching niche social startups for fitness enthusiasts, hobbyists, or trade networks."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Enterprise Internal Networks",
        "Brand Marketing Agencies",
        "Interest-Based Communities",
        "Professional Roster Associations",
        "Community Tech Startups"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React Native & React" },
        { name: "Node.js (NestJS) & Express" },
        { name: "WebSockets (Socket.io)" },
        { name: "PostgreSQL, MongoDB, & Redis" },
        { name: "AWS S3 & Elastic Transcoder" },
        { name: "Firebase Cloud Messaging" }
      ]}
      faqs={[
        {
          question: "How do you handle heavy video uploads?",
          answer: "All video posts are uploaded directly to secure Amazon S3 buckets via signed pre-authorized URLs, which triggers AWS Elastic Transcoder to output optimized stream versions (HLS)."
        },
        {
          question: "Is there a moderation queue for offensive posts?",
          answer: "Yes. Customers can report posts, which flags them in the admin dashboard. Admins can inspect the content and delete posts or ban the user."
        },
        {
          question: "Can we restrict the platform to company email domains?",
          answer: "Absolutely. The signup configuration allows you to restrict registration to specific email domains (e.g. employee@company.com)."
        }
      ]}
      ctaTitle="Build Your Private Community Today"
      ctaDescription="Give your audience a dedicated space to connect, share, and collaborate. Talk to our technical team to plan your custom community portal."
    />
  );
}
