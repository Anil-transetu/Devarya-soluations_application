"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { ShoppingBasket, Layers, Zap, Users, Cpu, Calendar, DollarSign, MapPin, Shield } from "lucide-react";

export function GroceryDelivery() {
  return (
    <ProductPageLayout
      title="Grocery Delivery Platform"
      subtitle="Online Grocery Shopping Platforms"
      heroIcon={ShoppingBasket}
      heroDescription="A highly scalable, feature-rich grocery delivery software suite. Empower your supermarket, organic store, or dark-store network with automated inventory management, slot-based deliveries, and real-time tracking."
      overviewTitle="Streamline Your Grocery Retail with Modern Digital Tech"
      overviewDescription="At Devarya Solutions, we offer an end-to-end grocery delivery system designed to handle tens of thousands of SKUs, coordinate warehouse operations, and execute fast home deliveries. Our product is built for speed and reliability, enabling customers to easily search, substitute, and purchase items. Meet the high demands of quick commerce with automated stock syncs and optimized route algorithms."
      overviewHighlights={[
        "Interactive customer apps with fuzzy search and quick reorder lists",
        "Warehouse and dark-store inventory tracking dashboards",
        "Optimized picker apps for fast scanning and bag preparation",
        "Driver delivery application with smart batching and navigation",
        "Admin control console for dynamic pricing, deals, and coupon runs"
      ]}
      benefitsTitle="Why Choose Our Grocery Delivery Product?"
      benefitsDescription="Bring your physical stores online and run efficient delivery logistics with a reliable digital architecture."
      benefits={[
        {
          title: "Automated Stock Sync",
          description: "Keep track of stock levels across multiple locations in real time, minimizing out-of-stock cancellations.",
          icon: Layers
        },
        {
          title: "Optimized Batching",
          description: "Combine multiple orders going to the same neighborhood into single runs to save driver costs and time.",
          icon: Zap
        },
        {
          title: "Flexible Buying Cycles",
          description: "Support recurring subscriptions for daily essentials and advanced schedule-based deliveries.",
          icon: Users
        }
      ]}
      featuresTitle="Key Features of the Platform"
      featuresDescription="Built to tackle the unique challenges of fresh produce, weight-based pricing, and warehouse picking."
      features={[
        {
          title: "Barcode Scanning Integration",
          description: "Pickers scan items during assembly to guarantee order accuracy and update stock records instantly.",
          icon: Cpu
        },
        {
          title: "Scheduled Delivery Slots",
          description: "Let customers choose standard instant delivery or plan a custom slot later in the week.",
          icon: Calendar
        },
        {
          title: "Smart Product Substitution",
          description: "Handle out-of-stock items gracefully by suggesting similar alternatives or starting a live chat.",
          icon: Layers
        },
        {
          title: "Micro-Geofencing",
          description: "Set strict delivery radiuses for specific warehouses to guarantee fast delivery of fresh produce.",
          icon: MapPin
        },
        {
          title: "Daily Subscriptions",
          description: "Manage automatic recurring deliveries for milk, water, bread, and other daily consumer goods.",
          icon: DollarSign
        },
        {
          title: "Multi-Store Management",
          description: "Support multiple store branches under a single main admin panel, with unique inventory for each.",
          icon: Shield
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our system scales according to your model, whether you are running a single neighborhood shop or a national brand."
      useCases={[
        {
          title: "Supermarket & Hypermarket Digitization",
          description: "Enables large retail physical stores to receive online orders, package them on-site, and deliver to local zones."
        },
        {
          title: "Quick Commerce Dark-Store Network",
          description: "Optimized for ultra-fast, 10-to-15 minute deliveries utilizing dedicated micro-fulfillment centers."
        },
        {
          title: "Specialty & Niche Grocery Stores",
          description: "Perfect for organic produce, boutique bakeries, and gourmet meat providers taking pre-orders."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Supermarket Chains",
        "Organic & Specialty Food Retailers",
        "Quick Commerce (Q-Commerce) Startups",
        "Fresh Fruit & Vegetable Distributors",
        "FMCG Brands Selling D2C"
      ]}
      technologiesTitle="Technologies Powering the Suite"
      technologies={[
        { name: "React Native & Flutter" },
        { name: "Node.js (NestJS)" },
        { name: "Elasticsearch for Fast Product Search" },
        { name: "MongoDB & Redis" },
        { name: "Google Maps Platform" },
        { name: "AWS & Docker" }
      ]}
      faqs={[
        {
          question: "How does the system handle items sold by weight?",
          answer: "Our product supports weight-based items. The final price can be adjusted dynamically after the picker weighs the product, charging the customer only for the actual weight dispatched."
        },
        {
          question: "Can it integrate with our existing ERP or POS software?",
          answer: "Yes. We offer standard REST APIs to sync inventory, prices, and sales data with popular retail POS systems and enterprise ERPs."
        },
        {
          question: "Is there a mechanism to handle batch product updates?",
          answer: "Absolutely. The administrative dashboard includes a bulk import and export tool to update thousands of products, prices, and categories via CSV or Excel."
        }
      ]}
      ctaTitle="Digitize Your Grocery Retail Today"
      ctaDescription="Provide your customers with a frictionless grocery shopping experience. Contact Devarya Solutions today to get a customized price quote and app demo."
    />
  );
}
