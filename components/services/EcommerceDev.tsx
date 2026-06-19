"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { ShoppingBag, CreditCard, Box, Zap, Compass, Star, Settings, Shield, Layout } from "lucide-react";

export function EcommerceDev() {
  return (
    <ServicePageLayout
      title="E-commerce Application Development"
      subtitle="Custom Online Stores"
      heroIcon={ShoppingBag}
      heroDescription="Launch highly optimized, high-converting digital storefronts. We build custom e-commerce experiences, shopping carts, and secure payment integrations."
      overviewTitle="Turn Casual Visitors into Loyal Customers"
      overviewDescription="In the competitive world of e-commerce, user experience determines sales. A delay of one second in page load can reduce conversions by up to 20%. At Devarya Solutions, we engineer fast, secure, and intuitive e-commerce portals. Whether you require a headless Shopify integration, a custom WooCommerce store, or a bespoke multi-vendor marketplace, we ensure your payment pipelines are bulletproof, checkout is frictionless, and inventory is managed in real time."
      overviewHighlights={[
        "Highly responsive e-commerce layouts designed to maximize catalog click-throughs",
        "Bespoke multi-currency and multi-language shopping carts",
        "Robust integration with payment gateways (Stripe, PayPal, Razorpay, Authorize.net)",
        "Self-service seller dashboards and advanced shipping calculators",
        "Headless e-commerce architectures using Next.js to load catalogs instantly"
      ]}
      whyChooseTitle="Why Build Your Online Store With Us?"
      whyChooseDescription="We combine user psychology, advanced security, and high performance to build stores that sell."
      whyChooseItems={[
        {
          title: "Speed-Optimized Checkout",
          description: "We optimize database queries and visual assets to ensure checkout loads instantly, reducing abandoned carts.",
          icon: Zap
        },
        {
          title: "Complete Security",
          description: "PCI-compliant setups, secure token processing, and database firewalls protect buyer accounts.",
          icon: Shield
        },
        {
          title: "Scalable Catalog",
          description: "Our architectures handle thousands of product listings and support sudden spikes during holiday sales.",
          icon: Box
        }
      ]}
      featuresTitle="High-Conversion E-commerce Features"
      featuresDescription="Our platforms come loaded with tools that drive purchases, track orders, and simplify administration."
      features={[
        {
          title: "Smart Product Search",
          description: "Fuzzy search logic, smart auto-complete, and advanced category filters to help buyers find products in seconds.",
          icon: Compass
        },
        {
          title: "Frictionless Checkout",
          description: "Single-page checkout, guest checkout support, and auto-filled shipping details to minimize cart abandonment.",
          icon: CreditCard
        },
        {
          title: "Inventory Dashboard",
          description: "Track inventory, set automated restock alerts, and import product lists using CSV spreadsheets.",
          icon: Settings
        },
        {
          title: "Customer Portal & History",
          description: "Let clients check current order statuses, track shipping packages, and review past order receipts.",
          icon: Star
        },
        {
          title: "Dynamic Promo Engines",
          description: "Configure discount codes, automatic bulk discounts, coupon codes, and holiday sale pricing schedules.",
          icon: ShoppingBag
        },
        {
          title: "Multi-Carrier Shipping",
          description: "Connect automatically with FedEx, UPS, or local couriers to provide buyers with real-time shipping costs.",
          icon: Box
        }
      ]}
      processTitle="Our E-commerce Development Cycle"
      processDescription="A systematic, detailed pipeline ensuring your digital storefront is secure, fast, and ready to take orders."
      processSteps={[
        {
          title: "E-commerce Strategy Workshop",
          description: "We map catalog taxonomy, verify payment gateway availability, and establish shipping logic requirements."
        },
        {
          title: "UI/UX Storefront Design",
          description: "Drafting the homepage, product details layouts, cart popups, and checkout screen wireframes."
        },
        {
          title: "Core Platform Development",
          description: "Coding the frontend catalog and building database schemas for order tracking and inventory management."
        },
        {
          title: "Gateway & Tax Integration",
          description: "Linking payment processors, testing sandbox transactions, and connecting tax compliance calculators."
        },
        {
          title: "Load Testing & Launch",
          description: "Testing load speeds with mock users, checking database integrity, and launching your storefront."
        }
      ]}
      technologiesTitle="E-commerce Platforms & Frameworks"
      technologies={[
        { name: "Next.js & Headless Shopify" },
        { name: "WooCommerce" },
        { name: "Node.js & MongoDB" },
        { name: "Stripe & PayPal SDKs" },
        { name: "PostgreSQL & Redis" },
        { name: "Algolia Search API" }
      ]}
      faqs={[
        {
          question: "Can we migrate our existing store from WooCommerce to headless Shopify?",
          answer: "Yes. We migrate product catalogs, customer transaction histories, coupon structures, and order records, ensuring that URLs are redirected to prevent any loss of organic search rankings."
        },
        {
          question: "How do you secure payment transactions on the store?",
          answer: "We integrate payment processors using secure hosted checkouts or iframe tokenization (like Stripe Elements). This ensures credit card details are sent directly to the payment network and never hit your server, maintaining PCI compliance."
        },
        {
          question: "Is there a limit to how many products we can list in the store?",
          answer: "No. Our database architectures are built for infinite listings. Using cached catalog lookups and asset CDNs, search queries load instantly even with tens of thousands of items."
        }
      ]}
      ctaTitle="Launch a High-Conversion Online Store"
      ctaDescription="Establish a premium, fast storefront that drives orders and scales with your business. Contact us to launch your project today."
    />
  );
}
