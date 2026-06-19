"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Handshake, Layers, DollarSign, Users, Cpu, ThumbsUp, Zap } from "lucide-react";

export function MultiVendorMarketplace() {
  return (
    <ProductPageLayout
      title="Multi-Vendor Ecommerce Marketplace"
      subtitle="Multi-Seller Ecommerce Stores"
      heroIcon={Handshake}
      heroDescription="A powerful, scalable multi-vendor ecommerce engine. Empower sellers to set up shop, manage their own inventory, and fulfill orders, while you manage commissions and split payouts."
      overviewTitle="Launch an Enterprise-Grade Multi-Seller Marketplace"
      overviewDescription="At Devarya Solutions, we provide a sophisticated multi-vendor marketplace platform. Inspired by the likes of Amazon and Etsy, our product gives vendors their own storefronts and inventory panels, while giving you (the admin) total control over seller verifications, commission rates, and payouts. Build a self-sustaining retail empire without the burden of managing physical inventory."
      overviewHighlights={[
        "Interactive customer experience with multi-vendor carts and order trackers",
        "Independent vendor dashboard for catalog, pricing, and sales tracking",
        "Advanced admin control portal to approve vendors and configure commission tiers",
        "Automated split-payment settlement systems distributing funds instantly",
        "Comprehensive vendor payout management with built-in refund handling"
      ]}
      benefitsTitle="Why Choose Our Multi-Vendor Engine?"
      benefitsDescription="Onboard sellers quickly, grow your digital catalog, and collect passive commission revenues."
      benefits={[
        {
          title: "Scale Catalog Rapidly",
          description: "Expand your product range without buying or warehousing stock by onboarding independent sellers.",
          icon: Layers
        },
        {
          title: "Automated Payout Splits",
          description: "Distribute customer payments immediately at checkout, sending vendor shares to their banks and fees to yours.",
          icon: DollarSign
        },
        {
          title: "Vendor Autonomy",
          description: "Reduce management overheads by letting sellers upload their own stock, set prices, and ship packages.",
          icon: Users
        }
      ]}
      featuresTitle="Key Features of the Marketplace Engine"
      featuresDescription="Engineered to provide a stable, feature-rich workspace for merchants and a clean path for shoppers."
      features={[
        {
          title: "Merchant Storefronts",
          description: "Provides every seller with a customized shop link displaying their inventory, reviews, and policies.",
          icon: Cpu
        },
        {
          title: "Stripe Connect Integration",
          description: "Splits single-cart orders containing products from multiple sellers using Stripe Connect or PayPal Marketplace.",
          icon: DollarSign
        },
        {
          title: "Catalog Authorization Queue",
          description: "Ensures catalog quality by routing new vendor listings through an admin validation dashboard.",
          icon: Layers
        },
        {
          title: "Seller Reputation Index",
          description: "Allows customers to rate products and vendors, encouraging sellers to provide high-quality service.",
          icon: ThumbsUp
        },
        {
          title: "Granular Commission Editor",
          description: "Configure specific commissions per seller, flat transaction fees, or percentage splits per product category.",
          icon: Layers
        },
        {
          title: "Merchant Shipping Config",
          description: "Allows vendors to set flat shipping fees, weight-based tables, or pull live quotes from couriers.",
          icon: Zap
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our multi-seller engine adapts to B2C, B2B, or local shopping networks."
      useCases={[
        {
          title: "Niche Handcraft & Fashion Hubs",
          description: "Allows local craftspeople, apparel designers, and artists to showcase and sell their products globally."
        },
        {
          title: "B2B Wholesale Trade Directories",
          description: "Connects industrial manufacturers with trade buyers, supporting bulk pricing tiers and inquiry forms."
        },
        {
          title: "Hyperlocal Delivery Marketplaces",
          description: "Coordinates local grocery stores, pharmacies, and specialty shops under one regional delivery system."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Apparel & Fashion Platforms",
        "Handcrafted Goods Marketplaces",
        "Industrial B2B Trade Networks",
        "Regional Hyperlocal Grocery Hubs",
        "Consumer Electronics Platforms"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React & Next.js" },
        { name: "Node.js (NestJS) & Go" },
        { name: "PostgreSQL & Redis" },
        { name: "Stripe Connect & PayPal SDK" },
        { name: "Elasticsearch for Catalog Search" },
        { name: "AWS EC2 & Docker" }
      ]}
      faqs={[
        {
          question: "How are refunds handled on multi-vendor orders?",
          answer: "Our system coordinates refunds via Stripe Connect, deducting the refund amount directly from the seller's Stripe balance while returning the admin commission proportional to the refund."
        },
        {
          question: "Can vendors run their own discount coupon campaigns?",
          answer: "Yes. The vendor panel includes a promo code engine where sellers can define coupons applicable only to their specific items."
        },
        {
          question: "Does the platform support localized tax calculations?",
          answer: "Absolutely. We integrate with Avalara or TaxJar to calculate correct sales taxes based on seller origins and buyer delivery addresses."
        }
      ]}
      ctaTitle="Build Your Online Marketplace Empire"
      ctaDescription="Launch a scalable multi-seller platform with Devarya Solutions. Let's schedule a session to configure your marketplace commission structure and demo the product."
    />
  );
}
