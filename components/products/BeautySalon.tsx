"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Scissors, Calendar, Zap, DollarSign, Layers, Users, TrendingUp } from "lucide-react";

export function BeautySalon() {
  return (
    <ProductPageLayout
      title="Salon Booking & Management Platform"
      subtitle="Salon Scheduling & Booking Systems"
      heroIcon={Scissors}
      heroDescription="A premium booking and management system for beauty salons, spas, and wellness centers. Optimize stylist schedules, accept online deposits, and manage guest profiles in a unified system."
      overviewTitle="Transform Spa and Beauty Salon Scheduling Operations"
      overviewDescription="At Devarya Solutions, we provide a high-converting salon booking platform and business manager. Designed to connect beauty clients with stylists, manage shift rosters, coordinate seat allocations, and accept contactless payments easily, our platform ensures your chairs are filled and operational overhead is minimized."
      overviewHighlights={[
        "Interactive customer booking flow to select services, choose stylists, and book slots",
        "Stylist application showcasing daily appointments, session durations, and earnings log",
        "Receptionist front-desk planner with interactive drag-and-drop calendars",
        "Automated appointment reminders dispatched via SMS and email channels",
        "Integrated checkout system handling card deposits, tipping, and service vouchers"
      ]}
      benefitsTitle="Why Choose Our Salon Booking Product?"
      benefitsDescription="Coordinate your styling crew, minimize missed bookings, and monitor performance easily."
      benefits={[
        {
          title: "Prevent Double Bookings",
          description: "Syncs stylist calendars in real time, preventing overlapping slots or bookings during off-hours.",
          icon: Calendar
        },
        {
          title: "Minimize No-Show Losses",
          description: "Send automated client alerts and charge deposit holds online during the booking phase.",
          icon: Zap
        },
        {
          title: "Automated Commission Logs",
          description: "Tracks individual stylist performance metrics and processes commission ratios per completed task.",
          icon: DollarSign
        }
      ]}
      featuresTitle="Key Features of the Salon System"
      featuresDescription="Engineered to provide clients with a premium booking experience and managers with clear rosters."
      features={[
        {
          title: "Multi-Service Catalog",
          description: "List service offerings (haircuts, facials, massage, nails) with custom durations and tier prices.",
          icon: Layers
        },
        {
          title: "Stylist Roster Selector",
          description: "Allows clients to book appointments with their favorite stylist based on ratings and bio pages.",
          icon: Users
        },
        {
          title: "Shift & Roster Coordinator",
          description: "Manage salon operational hours, stylist lunch break slots, and holiday calendars.",
          icon: Calendar
        },
        {
          title: "Deposit Pre-Authorization",
          description: "Secures credit cards online during booking, charging cancellation fees if the client fails to arrive.",
          icon: DollarSign
        },
        {
          title: "Stylist Earnings Dashboard",
          description: "Allows independent stylists to monitor daily schedules, tips collected, and commission shares.",
          icon: TrendingUp
        },
        {
          title: "Client Profile & Style Logs",
          description: "Securely logs client skin profiles, color formulas used, and past style photos for reference.",
          icon: Users
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our beauty booking suite scales to serve boutique shops or nationwide salon franchises."
      useCases={[
        {
          title: "Independent Boutiques & Spas",
          description: "Enables single local salons to take appointments direct from their website and track cash desks."
        },
        {
          title: "Multi-Location Salon Chains",
          description: "Centralizes operations, compares branch bookings, manages staff roster shifts, and launches corporate deals."
        },
        {
          title: "Massage & Therapist Centers",
          description: "Optimized for room assignments, booking packages, therapist shift logs, and membership schemes."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Hair & Beauty Salons",
        "Spas & Wellness Resorts",
        "Massage & Therapy Clinics",
        "Nail Studios & Barbershops",
        "Aesthetic & Dermatology Clinics"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "Next.js & React" },
        { name: "Node.js (NestJS)" },
        { name: "PostgreSQL & Prisma" },
        { name: "Stripe & Square Terminals" },
        { name: "Twilio SMS API" },
        { name: "AWS Cloud Services" }
      ]}
      faqs={[
        {
          question: "Can clients reschedule their appointments online?",
          answer: "Yes. Clients can reschedule appointments via their profile panel, subject to cancellation guidelines set by salon administrators."
        },
        {
          question: "How do stylist commissions work in the app?",
          answer: "The admin panel includes a commission manager where you define flat rates or custom percentage payouts per stylist based on completed appointments."
        },
        {
          question: "Does the system support gift card vouchers?",
          answer: "Absolutely. Clients can purchase digital gift cards, which generate code tokens that can be redeemed at checkout during appointment bookings."
        }
      ]}
      ctaTitle="Digitize Your Salon Business Today"
      ctaDescription="Ensure your chairs are always filled and stylists are perfectly coordinated. Partner with Devarya Solutions to launch your custom salon booking engine."
    />
  );
}
