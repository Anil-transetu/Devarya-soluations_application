"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Video, Users, Zap, DollarSign, Cpu, Layers } from "lucide-react";

export function ShortVideo() {
  return (
    <ProductPageLayout
      title="Short Video Sharing & Streaming Platform"
      subtitle="Video Sharing & Streaming Apps"
      heroIcon={Video}
      heroDescription="A premium, high-engagement short-form video sharing platform. Empower users to record, edit, and stream videos using advanced filter overlays, audio libraries, and personalized content recommendation feeds."
      overviewTitle="Engage Audiences with Premium Video-Sharing Infrastructure"
      overviewDescription="At Devarya Solutions, we provide a modern short video application suite designed to help creators publish, edit, and share media. Equipped with rapid video rendering engines, interactive UI vertical sliders, audio mix libraries, and robust creator statistics, our product is optimized to help startups launch viral entertainment brands."
      overviewHighlights={[
        "Interactive vertical swipe feed with real-time likes, comments, and shares",
        "In-app camera support with clip recording, timers, and speed controllers",
        "Sound library manager to layer popular tracks over recorded clips",
        "Adaptive bitrate video streaming (HLS) ensuring buffer-free playbacks",
        "Creator studio panel showing viewer demographics, followers, and wallet logs"
      ]}
      benefitsTitle="Why Choose Our Short Video Engine?"
      benefitsDescription="Deliver high-retention entertainment apps, reward creators, and stream videos with zero lag."
      benefits={[
        {
          title: "High User Retention",
          description: "A fluid, swipe-based feed powered by smart content recommendation tags keeps users engaged for longer periods.",
          icon: Users
        },
        {
          title: "Adaptive Streaming (HLS)",
          description: "Changes video resolution dynamically based on customer network speed, avoiding buffering on mobile data.",
          icon: Zap
        },
        {
          title: "Creator Monetization",
          description: "Supports in-app coin purchases, virtual gifting, creator wallets, and ad insertions to drive revenues.",
          icon: DollarSign
        }
      ]}
      featuresTitle="Key Features of the Video Platform"
      featuresDescription="Engineered to provide creators with robust mobile editing tools and viewers with smooth feeds."
      features={[
        {
          title: "In-App Recording Studio",
          description: "Enables creators to shoot video clips, pause-and-resume takes, and adjust speed levels.",
          icon: Cpu
        },
        {
          title: "Audio Overlays Library",
          description: "Provides an index of sound tracks that creators can search and sync with their video clips.",
          icon: Layers
        },
        {
          title: "Personalized Content Feed",
          description: "Serves videos matching the user's past search topics and content categories dynamically.",
          icon: Cpu
        },
        {
          title: "Virtual Gifting Wallet",
          description: "Fans purchase virtual coins to tip creators during video plays, which creators redeem for cash payouts.",
          icon: DollarSign
        },
        {
          title: "Mobile Clip Editor",
          description: "Allows creators to trim clips, add filters, place text cards, and select hashtags before publishing.",
          icon: Layers
        },
        {
          title: "Viral Notifications Alert",
          description: "Dispatches push alerts immediately when creator videos trend, gain likes, or are shared.",
          icon: Zap
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our short-video suite operates across entertainment, business training, and marketing."
      useCases={[
        {
          title: "Viral Consumer Entertainment Apps",
          description: "A public social media app matching creators, influencers, and advertisers in a regional market."
        },
        {
          title: "Enterprise Micro-Learning Portals",
          description: "A private company network where staff upload quick training logs, sales reviews, and walk-throughs."
        },
        {
          title: "Creator Marketing Platforms",
          description: "A dedicated video portal connecting ecommerce brands with creators for product video reviews."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Media & Entertainment Agencies",
        "Influencer Marketing Hubs",
        "EdTech Micro-Learning Startups",
        "Internal Corporate HR Teams",
        "E-commerce Retail Platforms"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React Native (iOS & Android Apps)" },
        { name: "Node.js & Go Backend Services" },
        { name: "FFmpeg Server-Side Video Processing" },
        { name: "AWS S3 & CloudFront CDN" },
        { name: "Redis for Feed Caches" },
        { name: "Firebase Push Notifications" }
      ]}
      faqs={[
        {
          question: "How does the platform handle video compression?",
          answer: "When a user uploads a clip, our server transcodes it using FFmpeg into optimized multi-resolution files (HLS) to make sure it plays cleanly on both 3G networks and high-speed Wi-Fi."
        },
        {
          question: "Can we control and filter offensive video uploads?",
          answer: "Yes. In addition to manual reporting queues, we integrate with Amazon Rekognition to automatically flag and block inappropriate video uploads."
        },
        {
          question: "How do creators withdraw their virtual tips?",
          answer: "Creators request withdrawals from their wallet panel, which sends payout queries to platform administrators to authorize bank transfers or PayPal deposits."
        }
      ]}
      ctaTitle="Launch Your Viral Video Platform"
      ctaDescription="Provide creators and viewers with a premium short-video sharing platform. Contact Devarya Solutions today to schedule a product walk-through."
    />
  );
}
