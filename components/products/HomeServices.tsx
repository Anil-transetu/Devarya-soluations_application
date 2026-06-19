"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Wrench, TrendingUp, Zap, Shield, Layers, MapPin, Cpu, DollarSign, Users } from "lucide-react";

export function HomeServices() {
  return (
    <ProductPageLayout
      title="On-Demand Home Services Platform"
      subtitle="Booking for Home Utility Services"
      heroIcon={Wrench}
      heroDescription="A comprehensive booking and dispatch system for home utility services. Connect homeowners with verified plumbers, electricians, cleaners, and technicians using an automated, location-based matching system."
      overviewTitle="Transform Local Service Bookings with Automated Dispatch Tech"
      overviewDescription="At Devarya Solutions, we provide an end-to-end booking suite for home utility and repair services. Designed to coordinate customers, service providers, and administrative operators, our platform handles appointment scheduling, real-time location tracking, task assignments, and secure post-service payments. Automate your dispatching and expand your service network."
      overviewHighlights={[
        "Customer app to browse service categories, pick booking slots, and track technicians",
        "Technician application with booking details, GPS routing, and earnings log",
        "Central admin dashboard to manage service catalogs, approve providers, and set rates",
        "Advanced scheduling engine supporting instant requests or scheduled hourly slots",
        "PCI-compliant payment processing with automated invoicing upon job completion"
      ]}
      benefitsTitle="Why Choose Our On-Demand Service Platform?"
      benefitsDescription="Improve customer satisfaction, maximize technician utilization, and ensure service quality."
      benefits={[
        {
          title: "Simplified Booking Flows",
          description: "Allows homeowners to schedule repairs or cleanings in a few clicks, reducing call-center burdens.",
          icon: TrendingUp
        },
        {
          title: "Automated Job Dispatch",
          description: "Smart matching algorithms allocate bookings to the nearest available technician with the right skills.",
          icon: Zap
        },
        {
          title: "Safety & Compliance Vault",
          description: "Detailed provider profile reviews, certification uploads, and rating logs guarantee customer safety.",
          icon: Shield
        }
      ]}
      featuresTitle="Key Features of the Booking System"
      featuresDescription="Engineered to provide local contractors with smart scheduling and homeowners with trustworthy helpers."
      features={[
        {
          title: "Structured Service Catalog",
          description: "Configure categories (plumbing, cleaning, AC service) with flat pricing or variable hourly quotes.",
          icon: Layers
        },
        {
          title: "Real-Time GPS Tracking",
          description: "Shows customers the live location of their assigned technician on a map when they are en route.",
          icon: MapPin
        },
        {
          title: "Algorithmic Job Match",
          description: "Assigns jobs automatically based on proximity, technician ratings, and category specialization.",
          icon: Cpu
        },
        {
          title: "Post-Service Payment Auth",
          description: "Secures customer funds during booking and processes the final charge after the technician completes work.",
          icon: DollarSign
        },
        {
          title: "Technician Revenue Portal",
          description: "Provides freelancers and staff with summaries of earnings, tips, travel distances, and payouts.",
          icon: TrendingUp
        },
        {
          title: "Secure In-App Chat",
          description: "Enables customers and providers to call or text in-app, protecting contact privacy.",
          icon: Users
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our service platform adapts to single agencies, contractor networks, or public marketplaces."
      useCases={[
        {
          title: "Home Cleaning & Janitorial Agency",
          description: "Helps cleaning businesses organize weekly rosters, assign cleaning runs, and bill clients automatically."
        },
        {
          title: "Handyman Marketplace Aggregator",
          description: "Connects independent plumbers, painters, and HVAC technicians with local clients under a commission model."
        },
        {
          title: "Corporate Facility Management",
          description: "A B2B booking panel for commercial property managers to coordinate repair technicians across multiple sites."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Cleaning & Maid Agencies",
        "HVAC & Appliance Repair Centers",
        "Plumbing & Electrical Contractors",
        "Hyperlocal Service Startups",
        "Facility Management Providers"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "Flutter & React Native" },
        { name: "Socket.io for Location Sharing" },
        { name: "Node.js (NestJS) & PostgreSQL" },
        { name: "Google Maps SDK & Geocoding" },
        { name: "Stripe & Razorpay Integration" },
        { name: "AWS Cloud & SendGrid" }
      ]}
      faqs={[
        {
          question: "How does the system verify service technician accounts?",
          answer: "The administrator panel features a verification dashboard where staff inspect submitted government IDs, background checks, and trade certifications."
        },
        {
          question: "Can we configure different prices for emergency or weekend calls?",
          answer: "Yes. The catalog allows you to set custom peak pricing rules, adding surcharges for weekend calls, holidays, or emergency requests."
        },
        {
          question: "What happens if a technician needs additional parts for a repair?",
          answer: "Technicians can request a price update from their app during the job. Once the client approves the extra charge from their portal, the billing invoice is updated."
        }
      ]}
      ctaTitle="Digitize Your Service Operations Today"
      ctaDescription="Optimize your handyman or utility service fleet with automated dispatching. Partner with Devarya Solutions to schedule a live product demonstration."
    />
  );
}
