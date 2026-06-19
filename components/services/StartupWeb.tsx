"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Rocket, Target, Star, Globe, Shield, Activity, AppWindow, ShoppingBag, Terminal } from "lucide-react";

export function StartupWeb() {
  return (
    <ServicePageLayout
      title="Web Development for Start-ups"
      subtitle="Startup Website Solutions"
      heroIcon={Rocket}
      heroDescription="Launch your digital footprint with high-conversion websites. We create modern, fast, and responsive websites that communicate your brand value and capture early leads."
      overviewTitle="Make a Powerhouse First Impression Online"
      overviewDescription="When introducing a new product or service, your website acts as your global storefront. At Devarya Solutions, we build startup websites optimized for conversion, page speed, and visual appeal. Using modern web frameworks, we ensure your page loads in milliseconds, ranks well on search engines, and provides a polished experience that establishes immediate brand credibility."
      overviewHighlights={[
        "Modern visual designs customized to reflect your startup identity",
        "Mobile-first responsive layouts that work flawlessly on all devices",
        "Optimized for Core Web Vitals to maximize search engine discoverability",
        "Direct integration with CRM systems and analytics platforms",
        "Clear call-to-action flows to drive newsletters and sales signups"
      ]}
      whyChooseTitle="Why Build Your Startup Website With Us?"
      whyChooseDescription="We focus on conversion rates and lightning-fast deployment so you can launch and validate your product."
      whyChooseItems={[
        {
          title: "Speed & Performance",
          description: "Our websites load instantly, keeping bounce rates low and user engagement high.",
          icon: Activity
        },
        {
          title: "Flexible Tech Stack",
          description: "We use modern platforms like Next.js that allow you to add complex product features in the future.",
          icon: AppWindow
        },
        {
          title: "Growth Ready",
          description: "Built-in search engine optimization features and lead-capture systems drive early organic traffic.",
          icon: Target
        }
      ]}
      featuresTitle="Crucial Elements of a Startup Website"
      featuresDescription="We implement key features that convert visitors into active prospects or leads."
      features={[
        {
          title: "Modern Hero Sections",
          description: "Visually striking animations and clear headlines that state your value proposition instantly.",
          icon: Star
        },
        {
          title: "Interactive Lead Forms",
          description: "Beautiful, responsive contact forms and newsletter opt-ins linked to your sales dashboard.",
          icon: Target
        },
        {
          title: "Content Management (CMS)",
          description: "An easy-to-use admin panel, letting your marketing team publish blogs and update text without developers.",
          icon: AppWindow
        },
        {
          title: "Analytics Integration",
          description: "Track visitor traffic, page-view durations, and conversion sources with Google Analytics.",
          icon: Activity
        },
        {
          title: "SSL Security & Hosting",
          description: "Deploy on secure, global CDN networks with free SSL certificates for maximum loading speed.",
          icon: Shield
        },
        {
          title: "Social Media Linking",
          description: "Clean meta tags that ensure your website preview cards look perfect when shared on social channels.",
          icon: Globe
        }
      ]}
      processTitle="Our Web Launch Framework"
      processDescription="A rapid, structured workflow designed to launch your startup website in as little as 3 to 4 weeks."
      processSteps={[
        {
          title: "Brand & Content Strategy",
          description: "We outline your target audience, site navigation structure, and core page requirements."
        },
        {
          title: "Wireframing & Mockups",
          description: "Our designers draft the visual look, typography, and button styles for your feedback."
        },
        {
          title: "Frontend Engineering",
          description: "We code the responsive website using clean HTML, Tailwind CSS, and Next.js."
        },
        {
          title: "System Integrations",
          description: "Connecting form inputs to databases, newsletters, and setting up tracking codes."
        },
        {
          title: "Testing & CDN Deployment",
          description: "Running speed audits, fixing layout bugs on mobile devices, and launching on Vercel or AWS."
        }
      ]}
      technologiesTitle="Modern Web Technologies We Leverage"
      technologies={[
        { name: "Next.js" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
        { name: "Headless CMS" },
        { name: "Vercel Hosting" }
      ]}
      faqs={[
        {
          question: "Can we add blog posts and update text ourselves after the site launches?",
          answer: "Yes. We integrate lightweight, secure Content Management Systems (CMS) like Sanity or Strapi, which allow your team to create blogs, update pricing, and edit copy easily without writing code."
        },
        {
          question: "How long does it take to launch a startup website?",
          answer: "A standard landing page or 5-page marketing website typically takes 3 to 5 weeks from initial brainstorming to launch. Larger marketing portals can take up to 8 weeks."
        },
        {
          question: "Will the website be optimized for mobile phone users?",
          answer: "Absolutely. Over 60% of web traffic originates on mobile devices. Every site we build is engineered with a mobile-first philosophy, ensuring perfect layout presentation on all screen sizes."
        }
      ]}
      ctaTitle="Launch Your Brand Online with Devarya Solutions"
      ctaDescription="Establish market authority and capture leads with a beautiful, high-performing website. Reach out to kick off your project today."
    />
  );
}
