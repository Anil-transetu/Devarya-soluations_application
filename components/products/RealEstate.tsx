"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Building, Users, MapPin, Layers, Cpu, Zap, DollarSign, Calendar, Shield } from "lucide-react";

export function RealEstate() {
  return (
    <ProductPageLayout
      title="Real Estate Listing & Management Platform"
      subtitle="Property Search & Listing Systems"
      heroIcon={Building}
      heroDescription="A premium real estate portal and property management software. Connect buyers, renters, and agents, manage property listings, and schedule site visits with ease."
      overviewTitle="Streamline Real Estate Transactions and Listing Operations"
      overviewDescription="At Devarya Solutions, we offer a high-converting real estate listing portal and agent CRM. Built with advanced geographical searches, map overlays, and virtual tour options, our system connects buyers and renters with their dream properties while providing realtors with a powerful workspace to track leads and inspect deals."
      overviewHighlights={[
        "Interactive customer portal with map-based listing search and comparisons",
        "Agent dashboard to organize leads, schedule client calls, and track closings",
        "Rich property catalog supporting photo galleries and virtual tours",
        "Site-visit calendar scheduler to coordinate inspections with clients",
        "Financial estimation tools for mortgage payments and rental yields"
      ]}
      benefitsTitle="Why Choose Our PropTech Solution?"
      benefitsDescription="Equip your agents with modern lead-capture mechanisms and give buyers a clean search interface."
      benefits={[
        {
          title: "High-Quality Lead Capture",
          description: "Connect buyers directly to the listing agent via quick forms and WhatsApp messaging shortcuts.",
          icon: Users
        },
        {
          title: "Visual Location Search",
          description: "Let clients search for properties by drawing shapes on a map or searching by travel radius.",
          icon: MapPin
        },
        {
          title: "Frictionless Listing Cycles",
          description: "Agents and owners can upload high-resolution images, input pricing, select amenities, and publish in minutes.",
          icon: Layers
        }
      ]}
      featuresTitle="Key Features of the Real Estate Portal"
      featuresDescription="Designed to handle large databases of listings and keep client interactions organized."
      features={[
        {
          title: "Geographical search query",
          description: "Search properties in real time based on distance from user coordinates or custom map shapes.",
          icon: Cpu
        },
        {
          title: "Leads Management CRM",
          description: "Tracks customer inquiries, assigns leads to specific agents, and logs follow-up call outcomes.",
          icon: Zap
        },
        {
          title: "Mortgage Calculator",
          description: "Calculates estimated monthly loan payments based on listing price, down payment, and interest rates.",
          icon: DollarSign
        },
        {
          title: "360 Virtual Tour Player",
          description: "Integrate panoramic images, walk-through videos, and floor plans directly on the detail page.",
          icon: Layers
        },
        {
          title: "Physical Visit Scheduler",
          description: "Allows buyers to pick a visit slot, which triggers calendar confirmations for listing agents.",
          icon: Calendar
        },
        {
          title: "Direct Owner Uploads",
          description: "Let homeowners submit their properties for review, creating a rich catalog with admin validation.",
          icon: Shield
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our listing product fits different models, serving single brokerages, multi-agent agencies, or developers."
      useCases={[
        {
          title: "Real Estate Brokerage Website",
          description: "A branded portal displaying the agency's exclusive listings, with dedicated profile pages for their agents."
        },
        {
          title: "Multi-Agent Listing Marketplace",
          description: "A public property marketplace where third-party agents pay monthly subscription fees to list properties."
        },
        {
          title: "Property Builder Sales Portal",
          description: "Enables construction developers to showcase pre-construction towers and track unit availability."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Real Estate Brokerages & Agencies",
        "Property Development Companies",
        "Property Management Firms",
        "PropTech Startups",
        "Vacation Rental Agencies"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React & Next.js" },
        { name: "Node.js (NestJS)" },
        { name: "PostgreSQL (PostGIS Geo-Queries)" },
        { name: "Mapbox & Google Maps SDK" },
        { name: "AWS S3 Asset Storage" },
        { name: "SendGrid (Lead Alerts)" }
      ]}
      faqs={[
        {
          question: "How does the map search handle high-density markers?",
          answer: "Our map integration uses spatial marker-clustering, grouping neighboring pins together dynamically to keep the map fast and readable."
        },
        {
          question: "Can we assign leads automatically?",
          answer: "Yes. The admin dashboard features round-robin assignment options, or can route leads based on property region and agent specialization."
        },
        {
          question: "How do you charge agents for listing properties?",
          answer: "We support multiple models: charging a monthly membership fee, selling listing credit packs, or charging to promote a listing to the top of the search results."
        }
      ]}
      ctaTitle="Elevate Your PropTech Platform"
      ctaDescription="Provide buyers with a modern property search experience. Contact Devarya Solutions today to get a customized quote and product walkthrough."
    />
  );
}
