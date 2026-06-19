"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { QrCode, Zap, TrendingUp, DollarSign, Cpu, Layers, Users } from "lucide-react";

export function QrMenu() {
  return (
    <ProductPageLayout
      title="Contactless QR Menu Scanner & Ordering"
      subtitle="Contactless Digital Restaurant Menus"
      heroIcon={QrCode}
      heroDescription="A modern, contactless digital menu and ordering platform. Let diners scan table QR codes, browse rich image menus, order, and pay directly from their mobile browsers without downloading an app."
      overviewTitle="Streamline Restaurant Dining with Instant Digital Menu Tech"
      overviewDescription="At Devarya Solutions, we provide a high-converting QR menu system designed to optimize restaurant dining, speed up table turnovers, and eliminate printed menu costs. Diners simply scan table-bound QR codes using their smartphone camera to browse, select items, dispatch orders to the kitchen, and pay securely."
      overviewHighlights={[
        "Frictionless, browser-based digital menu requiring no mobile app installs",
        "Interactive Kitchen Display System (KDS) showing order priorities and prep times",
        "Dynamic table-specific QR code generator with custom restaurant branding",
        "Waitstaff notification board for cutlery requests and waiter call alerts",
        "Integrated contactless payment processing with split-billing capabilities"
      ]}
      benefitsTitle="Why Choose Our QR Menu System?"
      benefitsDescription="Increase average ticket values, reduce printed menu budgets, and optimize table schedules."
      benefits={[
        {
          title: "Faster Table Turnovers",
          description: "Allows diners to order and checkout instantly, reducing average dining cycles by up to 15 minutes.",
          icon: Zap
        },
        {
          title: "Boost Average Ticket Value",
          description: "Visual menus with automated pop-up upselling prompts encourage orders for drinks, sides, and desserts.",
          icon: TrendingUp
        },
        {
          title: "Zero Printing Costs",
          description: "Change prices, toggle out-of-stock items, and update menu designs immediately with no printing fees.",
          icon: DollarSign
        }
      ]}
      featuresTitle="Key Features of the Contactless Platform"
      featuresDescription="Engineered to provide diners with a frictionless browser portal and kitchen staff with clear order queues."
      features={[
        {
          title: "Dynamic QR Generator",
          description: "Creates unique, secure table-bound QR codes that map orders directly to physical table numbers.",
          icon: Cpu
        },
        {
          title: "Responsive Web Menu",
          description: "Loads instantly in any browser, featuring food photos, descriptions, and dietary tag indicators.",
          icon: Layers
        },
        {
          title: "Kitchen Order Display",
          description: "A centralized kitchen dashboard displaying real-time incoming orders, preparation timers, and notes.",
          icon: Layers
        },
        {
          title: "Waitstaff Call Button",
          description: "Enables customers to request service, water, or billing checks, alerting waiter screens instantly.",
          icon: Users
        },
        {
          title: "Browser Checkout Pay",
          description: "Supports fast checkout options including Apple Pay, Google Pay, cards, or splitting bill amounts.",
          icon: DollarSign
        },
        {
          title: "Multi-Language Translate",
          description: "Automatically translates the entire menu catalog, catering to international tourists and guests.",
          icon: Layers
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our contactless ordering engine operates across dining rooms, food courts, or guest suites."
      useCases={[
        {
          title: "Full-Service Restaurants & Diners",
          description: "Allows diners to scan, order multiple courses, request waiter help, and checkout without waitstaff delays."
        },
        {
          title: "Quick-Service Food Courts",
          description: "Diners scan the table QR code, pay, and receive an SMS notification when their order is ready for pickup."
        },
        {
          title: "Hotel Room Dining Service",
          description: "QR codes on bed stands let guests browse in-room menus and place orders delivered directly to their room numbers."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Full-Service Restaurants",
        "Cafes & Specialty Coffee Shops",
        "Pubs, Bars, & Lounges",
        "Hotel In-Room Dining",
        "Food Courts & Concession Stands"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React & Next.js (PWA)" },
        { name: "Node.js & WebSockets (Socket.io)" },
        { name: "PostgreSQL & Redis" },
        { name: "Stripe, Apple Pay, & Google Pay" },
        { name: "AWS Lightsail Cloud" },
        { name: "Docker Containerization" }
      ]}
      faqs={[
        {
          question: "Do guests have to download an app from the App Store?",
          answer: "No. The menu functions as a Progressive Web App (PWA) that loads directly in any standard mobile web browser immediately after scanning."
        },
        {
          question: "How does the kitchen know which table placed the order?",
          answer: "Each generated QR code contains a table-specific encrypted token. When the order is placed, the token identifies the exact table number."
        },
        {
          question: "Can we disable dishes that are sold out for the day?",
          answer: "Yes. Restaurant managers can log into their dashboard and toggle items 'Out of Stock' with 1 click, instantly updating menus."
        }
      ]}
      ctaTitle="Digitize Your Restaurant Dining"
      ctaDescription="Provide your diners with a modern contactless dining experience. Partner with Devarya Solutions to schedule a live product demonstration."
    />
  );
}
