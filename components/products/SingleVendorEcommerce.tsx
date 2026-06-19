"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Store, Shield, DollarSign, Zap, Layers, Cpu, Users, TrendingUp, Award } from "lucide-react";

export function SingleVendorEcommerce() {
  return (
    <ProductPageLayout
      title="Single-Vendor Ecommerce Storefront"
      subtitle="Dedicated Direct-to-Consumer Stores"
      heroIcon={Store}
      heroDescription="A high-converting, fully customized D2C ecommerce storefront. Showcase your brand, manage stock levels, and coordinate local or international deliveries in a beautifully optimized online store."
      overviewTitle="Empower Your Brand with a Dedicated E-Commerce Storefront"
      overviewDescription="At Devarya Solutions, we provide a premium single-vendor e-commerce platform built to drive sales, cultivate customer relationships, and streamline retail operations. Avoid paying heavy hosting commission cuts and maintain total ownership of your shopper records and analytics data with a lightning-fast custom web application."
      overviewHighlights={[
        "Stunning, responsive customer storefront built using modern Jamstack architecture",
        "Intuitive merchant control panel for inventory, pricing, and variations",
        "Integrated marketing tools including abandoned cart alerts and discount codes",
        "Optimized checkout pipeline supporting cards, UPI, and digital wallets",
        "Order fulfillment dashboard with automated packaging slips and shipping labels"
      ]}
      benefitsTitle="Why Choose Our Custom D2C Storefront?"
      benefitsDescription="Maintain total brand ownership, optimize loading speeds, and maximize your profit margins."
      benefits={[
        {
          title: "Complete Brand Ownership",
          description: "Control every pixel of your customer journey and build direct brand affinity without platform restrictions.",
          icon: Shield
        },
        {
          title: "Zero Commission Fees",
          description: "Keep 100% of your margins by routing transactions directly to your merchant account with no platform cuts.",
          icon: DollarSign
        },
        {
          title: "Unmatched Loading Speed",
          description: "Built with Next.js static site generation (SSG) for instant page transitions and high checkout ratios.",
          icon: Zap
        }
      ]}
      featuresTitle="Key Features of the Storefront"
      featuresDescription="Packed with features designed to improve shopping experiences, manage stock, and drive return visits."
      features={[
        {
          title: "Product Option Manager",
          description: "Easily configure product variables (size, color, material) with unique SKUs and custom prices.",
          icon: Layers
        },
        {
          title: "Smart Single-Page Checkout",
          description: "A secure, streamlined checkout flow featuring postcode lookups to reduce cart drop-offs.",
          icon: Cpu
        },
        {
          title: "Abandoned Cart Recovery",
          description: "Automatically triggers recovery emails with custom coupon codes to win back shoppers.",
          icon: Users
        },
        {
          title: "D2C Sales Analytics",
          description: "Provides insights on monthly revenues, conversion rates, popular inventory, and customer lifetime value.",
          icon: TrendingUp
        },
        {
          title: "Promo & Deals Engine",
          description: "Easily launch holiday discount campaigns, buy-one-get-one deals, or free shipping rules.",
          icon: Award
        },
        {
          title: "Carrier API Integration",
          description: "Integrates with FedEx, DHL, or national shipping APIs to compute live shipping rates and print labels.",
          icon: Zap
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our D2C e-commerce engine serves different product scales, from single-product launches to large catalogs."
      useCases={[
        {
          title: "Fashion & Lifestyle Boutiques",
          description: "A visually rich storefront that showcases seasonal lookbooks, coordinates, and size charts."
        },
        {
          title: "Specialty Consumer Electronics",
          description: "Optimized layouts for technical specifications, product reviews, warranty add-ons, and manuals."
        },
        {
          title: "Subscription Box Businesses",
          description: "Integrates recurring subscription checkout flows, allowing users to schedule weekly or monthly deliveries."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "D2C Consumer Brands",
        "Fashion & Apparel Boutiques",
        "Electronics & Gadget Retailers",
        "Subscription & Membership Services",
        "Specialty Foods & Beverages"
      ]}
      technologiesTitle="Technologies Powering the Storefront"
      technologies={[
        { name: "Next.js & React" },
        { name: "TailwindCSS v4 styling" },
        { name: "Node.js (NestJS)" },
        { name: "PostgreSQL & Redis" },
        { name: "Stripe, Razorpay, & Paypal" },
        { name: "Vercel Edge CDNs" }
      ]}
      faqs={[
        {
          question: "How fast do product pages load on mobile devices?",
          answer: "By utilizing Static Site Generation and edge caching, our storefront loads in less than 0.8 seconds on standard 4G mobile networks."
        },
        {
          question: "Can we sync our inventory with offline retail stores?",
          answer: "Yes. We can set up synchronizations with physical POS systems like Square or Lightspeed to keep digital and physical stock levels aligned."
        },
        {
          question: "Is the custom storefront SEO-friendly?",
          answer: "Absolutely. Our platform generates semantic HTML, implements automatic structured schema metadata, and builds automated sitemaps for Google."
        }
      ]}
      ctaTitle="Launch Your Branded Storefront Today"
      ctaDescription="Give your brand the premium digital home it deserves. Partner with Devarya Solutions to build a high-performance, commission-free e-commerce store."
    />
  );
}
