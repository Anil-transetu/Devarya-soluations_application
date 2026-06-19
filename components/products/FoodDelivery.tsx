"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { UtensilsCrossed, Users, Zap, TrendingUp, MapPin, Layers, Bell, DollarSign, ThumbsUp, Award } from "lucide-react";

export function FoodDelivery() {
  return (
    <ProductPageLayout
      title="Food Delivery Application Suite"
      subtitle="On-Demand Food Delivery Systems"
      heroIcon={UtensilsCrossed}
      heroDescription="A comprehensive digital ecosystem for restaurants, delivery personnel, and consumers. Empower your food business with real-time tracking, seamless order management, and secure contactless payments."
      overviewTitle="Transform Your Food Business with On-Demand Tech"
      overviewDescription="At Devarya Solutions, we provide a feature-rich, high-performance food delivery suite tailored for single restaurants, food chains, and multi-restaurant aggregators. Our product is engineered with a modern tech stack to ensure high uptime during peak lunch and dinner hours, precise location tracking, and rapid automated dispatch. Connect your kitchens directly to your customers' doorsteps with minimal friction."
      overviewHighlights={[
        "Interactive, customer-centric mobile applications for iOS & Android",
        "Robust restaurant dashboard for order tracking and menu management",
        "Feature-rich delivery driver app with smart route optimization",
        "Powerful central admin panel for commission, dispatch, and ads management",
        "Pre-integrated payment gateways, SMS alerts, and email notifications"
      ]}
      benefitsTitle="Why Choose Our Food Delivery Product?"
      benefitsDescription="Scale your restaurant brand or launch a digital startup with a solution designed for high efficiency."
      benefits={[
        {
          title: "Increased Customer Reach",
          description: "Expand your restaurant's digital presence and serve customers beyond physical dining boundaries.",
          icon: Users
        },
        {
          title: "Streamlined Dispatch Operations",
          description: "Automate order assignment to nearby delivery partners to minimize delivery times and keep food fresh.",
          icon: Zap
        },
        {
          title: "Actionable Analytics",
          description: "Track sales patterns, popular food items, driver performance, and customer satisfaction in real time.",
          icon: TrendingUp
        }
      ]}
      featuresTitle="Key Features of Our Suite"
      featuresDescription="Every app in the suite comes packed with capabilities designed to keep users engaged and operations smooth."
      features={[
        {
          title: "Real-Time Tracking",
          description: "Live GPS tracking of order preparation and driver location keeps customers informed at every step.",
          icon: MapPin
        },
        {
          title: "Dynamic Menu Manager",
          description: "Update prices, add seasonal dishes, change items availability, and configure options on the fly.",
          icon: Layers
        },
        {
          title: "Smart Notifications",
          description: "Keep users, drivers, and restaurant staff updated with push alerts, SMS, and in-app sound notifications.",
          icon: Bell
        },
        {
          title: "Multi-Payment Gateway",
          description: "Support UPI, credit/debit cards, digital wallets, and cash on delivery safely.",
          icon: DollarSign
        },
        {
          title: "Rating & Reviews",
          description: "Gather feedback on individual dishes and delivery partner service to maintain quality.",
          icon: ThumbsUp
        },
        {
          title: "Promotions & Discounts",
          description: "Easily launch coupon codes, loyalty points, and dynamic flat-rate discounts.",
          icon: Award
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our platform fits different food business structures, scaling from local diners to large national networks."
      useCases={[
        {
          title: "Single Restaurant Direct Delivery",
          description: "A dedicated application for a local eatery or franchise to take direct orders and avoid heavy third-party commission fees."
        },
        {
          title: "Multi-Restaurant Aggregator Platforms",
          description: "A marketplace portal connecting thousands of local restaurants with drivers, running on a commission-based business model."
        },
        {
          title: "Cloud Kitchen Operations",
          description: "Centralized kitchen operations optimized for rapid preparation, multi-brand menus, and automated driver dispatch."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Single Diners & Cafes",
        "Multi-Location Restaurant Chains",
        "QSRs (Quick Service Restaurants)",
        "Cloud Kitchen Networks",
        "Food Delivery Startups"
      ]}
      technologiesTitle="Technologies Powering the Suite"
      technologies={[
        { name: "React Native / Flutter" },
        { name: "Node.js (NestJS)" },
        { name: "React / Next.js Admin" },
        { name: "PostgreSQL & Redis" },
        { name: "Google Maps API" },
        { name: "AWS Cloud" }
      ]}
      faqs={[
        {
          question: "Can we customize the UI to match our restaurant branding?",
          answer: "Yes. The entire frontend can be fully themed with your brand colors, logo, typography, and unique illustrations."
        },
        {
          question: "Does the product support multi-language and multi-currency?",
          answer: "Absolutely. Our platform is built for global deployment and supports RTL languages, multiple currencies, and localized tax structures."
        },
        {
          question: "Is there a limit to the number of restaurants or orders?",
          answer: "No. The microservices-based backend architecture scales horizontally to handle unlimited restaurants, drivers, and daily orders."
        }
      ]}
      ctaTitle="Launch Your Food Delivery App Today"
      ctaDescription="Get a fully custom-branded food delivery platform ready for launch. Talk to our technical team to schedule a live product demonstration."
    />
  );
}
