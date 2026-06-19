"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Building2, TrendingUp, Layers, DollarSign, Calendar, Cpu, Zap, Shield, Users, MapPin } from "lucide-react";

export function HotelBooking() {
  return (
    <ProductPageLayout
      title="Hospitality & Hotel Booking System"
      subtitle="Hospitality Reservation Systems"
      heroIcon={Building2}
      heroDescription="A comprehensive booking and property management software. Connect travelers with rooms, manage room availability, and optimize hotel operations with our fully custom-branded reservation system."
      overviewTitle="Transform Hospitality Booking and Property Management"
      overviewDescription="At Devarya Solutions, we provide a high-converting hotel reservation suite. It combines an engaging booking engine for travelers with a powerful Property Management System (PMS) for hotel staff. Manage room inventory, dynamic seasonal rates, check-ins, and guest relations in one unified interface. Save on expensive OTA commissions by driving guest direct bookings."
      overviewHighlights={[
        "Frictionless guest-booking engine with high-res photo galleries and maps",
        "Visual Front-Desk Property Management System (PMS) for receptionists",
        "OTA Channel Manager integration to sync rooms across Booking.com, Expedia, etc.",
        "Mobile-optimized guest portal for room service and digital check-ins",
        "Comprehensive billing system with automated invoicing, taxes, and split bills"
      ]}
      benefitsTitle="Why Choose Our Hospitality Suite?"
      benefitsDescription="Improve your hotel's occupancy rates and operational efficiency with our unified hotel management tech."
      benefits={[
        {
          title: "Higher Direct Bookings",
          description: "Encourage guests to book directly on your website via a smooth, 3-step checkout that reduces bounce rates.",
          icon: TrendingUp
        },
        {
          title: "Simplified Desk Operations",
          description: "Front desk staff can coordinate check-ins, room swaps, and cleaning tasks from a unified calendar board.",
          icon: Layers
        },
        {
          title: "Dynamic Revenue Optimization",
          description: "Configure automated price rules based on season, occupancy, or day of the week to maximize room yields.",
          icon: DollarSign
        }
      ]}
      featuresTitle="Key Features of the Hospitality Suite"
      featuresDescription="Engineered to meet the requirements of modern lodging establishments, guest houses, and resort chains."
      features={[
        {
          title: "Visual Room Planner",
          description: "A drag-and-drop calendar chart showcasing room statuses, upcoming bookings, and check-outs.",
          icon: Calendar
        },
        {
          title: "Fuzzy Search & Filters",
          description: "Allow guests to filter rooms by date range, adult/child count, budget, bed types, and amenities.",
          icon: Cpu
        },
        {
          title: "OTA Channel Sync",
          description: "Sync availability and room rates with global online travel agencies instantly, eliminating double bookings.",
          icon: Zap
        },
        {
          title: "Secure Payments Engine",
          description: "Accept deposits, pre-authorize credit cards, and run guest checkout payments with PCI-DSS compliance.",
          icon: Shield
        },
        {
          title: "Interactive Guest Panel",
          description: "Allows guests to browse food menus, request housekeeping, or message the front desk from their smartphones.",
          icon: Users
        },
        {
          title: "Housekeeping Coordinator",
          description: "Updates room cleanliness status automatically when cleaning staff mark tasks complete on their dashboards.",
          icon: MapPin
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our software adapts to different hospitality business structures, from boutique cabins to large hotel networks."
      useCases={[
        {
          title: "Independent Hotels & Luxury Resorts",
          description: "Enables independent properties to run direct bookings, manage check-ins, and control housekeeping from one dashboard."
        },
        {
          title: "Hotel Chains & Multi-Property Groups",
          description: "Centralized panel allowing administrators to compare performance, share guest histories, and sync cross-hotel promotions."
        },
        {
          title: "Boutique Lodges & Homestay Rentals",
          description: "Simple, high-converting booking software for vacation homes, glamping sites, and guest houses."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Hotels & Luxury Resorts",
        "Boutique Guest Houses",
        "Bed & Breakfasts (B&Bs)",
        "Vacation Rental Agencies",
        "Hospitality Tech Startups"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "Next.js & React" },
        { name: "Node.js (NestJS)" },
        { name: "PostgreSQL with Prisma" },
        { name: "Stripe, Adyen, & Paypal" },
        { name: "AWS Serverless (Lambda)" },
        { name: "Twilio API (SMS Alerts)" }
      ]}
      faqs={[
        {
          question: "Can this system handle multiple hotels under one account?",
          answer: "Yes. The platform features native multi-tenancy, letting operators manage booking calendars, rates, and reports for multiple locations from a single admin account."
        },
        {
          question: "Does it support group bookings and event reservation?",
          answer: "Absolutely. The PMS includes tools to block-book room categories for weddings, corporate meetings, or travel groups, with unique payment terms."
        },
        {
          question: "What happens when a guest requests an early check-in?",
          answer: "The desk manager can see which checkout rooms have been cleaned and marked 'Ready' by housekeeping, facilitating smooth room assignment."
        }
      ]}
      ctaTitle="Elevate Your Hospitality Service"
      ctaDescription="Provide your guests with a premium booking experience. Talk to the hospitality experts at Devarya Solutions to schedule a free platform demo."
    />
  );
}
