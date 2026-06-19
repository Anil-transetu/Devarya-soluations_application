"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Ticket, TrendingUp, Zap, Layers, Cpu, Shield, DollarSign, Calendar } from "lucide-react";

export function TicketBooking() {
  return (
    <ProductPageLayout
      title="Event & Movie Ticket Booking System"
      subtitle="Cinema and Event Booking Apps"
      heroIcon={Ticket}
      heroDescription="A high-performance ticket reservation and event coordination suite. Manage seating charts, sell tickets, scan QR entry passes, and process online transactions in one secure platform."
      overviewTitle="Streamline Event Check-Ins and Seat Reservations"
      overviewDescription="At Devarya Solutions, we provide a modern ticketing ecosystem designed to manage concert venues, cinema screens, sports stadiums, and local workshops. With a visual seating chart layout engine, secure payment gateways, and rapid QR code scanner tools, our system ensures a smooth booking and entrance check-in journey for attendees."
      overviewHighlights={[
        "Frictionless ticketing web app with rich event details and calendar integrations",
        "Visual seating chart engine supporting custom rows, sections, and tables",
        "Automated QR code ticket creator with immediate PDF email attachments",
        "Entrance scanner application for event organizers using mobile cameras",
        "Partner dashboard tracking tickets sold, attendee ratios, and merchant payouts"
      ]}
      benefitsTitle="Why Choose Our Ticketing Solution?"
      benefitsDescription="Reduce checkout friction, eliminate entrance lines, and manage event seat maps dynamically."
      benefits={[
        {
          title: "Maximized Ticket Sales",
          description: "A fast, 2-step checkout flow optimized for mobile reduces cart bounce and drives ticket sales.",
          icon: TrendingUp
        },
        {
          title: "Rapid Gate Check-In",
          description: "Organizers scan passenger QR passes in milliseconds, checking in thousands of attendees with zero delays.",
          icon: Zap
        },
        {
          title: "Interactive Seat Layouts",
          description: "Let customers select their preferred seats from a visual map of the venue before booking.",
          icon: Layers
        }
      ]}
      featuresTitle="Key Features of the Ticketing System"
      featuresDescription="Engineered to provide venue owners with robust pricing options and visitors with secure reservations."
      features={[
        {
          title: "Visual Venue Map Builder",
          description: "Enables admins to draw seating arrangements, define VIP boxes, and set varying price categories.",
          icon: Cpu
        },
        {
          title: "Encrypted QR Pass Engine",
          description: "Generates a unique QR pass per attendee, compatible with mobile wallets and printable PDFs.",
          icon: Shield
        },
        {
          title: "Real-Time Seat Locking",
          description: "Temporarily locks selected seats for 5 minutes during payment checkout, avoiding double bookings.",
          icon: Layers
        },
        {
          title: "Partner Sales Tracker",
          description: "Gives external organizers insights on tickets sold, daily revenues, and pending payout credits.",
          icon: TrendingUp
        },
        {
          title: "Flexible Tiered Pricing",
          description: "Easily set early-bird discounts, VIP tickets, group pricing rules, and coupon codes.",
          icon: DollarSign
        },
        {
          title: "Attendee Reminders",
          description: "Automatically dispatches calendar invites and SMS alerts to attendees as the event approaches.",
          icon: Calendar
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our ticketing engine adapts to independent promoters, cinema networks, or convention managers."
      useCases={[
        {
          title: "Cinema Screenings & Multiplexes",
          description: "Handles daily cinema schedules, screen selections, seat layouts, and optional snack booking add-ons."
        },
        {
          title: "Concerts & Music Festivals",
          description: "Engineered to handle high-traffic volume sales during early releases for stadium-sized music events."
        },
        {
          title: "Conferences & Educational Forums",
          description: "Coordinates speaker lineups, attendee registration rosters, and custom entry badge creation."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Cinema & Multiplex Operators",
        "Concert & Festival Promoters",
        "Sports Venue Managers",
        "Business Convention Organizers",
        "Workshop & Local Event Teams"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React & Next.js" },
        { name: "Node.js (NestJS)" },
        { name: "PostgreSQL with Row locking" },
        { name: "Redis for seat temporary locks" },
        { name: "PDFKit (Ticket PDFs)" },
        { name: "Stripe Connect Payments" }
      ]}
      faqs={[
        {
          question: "How do you prevent double-selling the same seat?",
          answer: "We use database transaction row locks combined with a Redis key lock that holds the seat selection for 5 minutes during the checkout phase."
        },
        {
          question: "How do organizers validate tickets at the gate?",
          answer: "We provide an organizer scanner app that runs on standard iOS and Android smartphones, using the camera to validate ticket QR codes against the central database in real time."
        },
        {
          question: "Does the system support group booking discounts?",
          answer: "Yes. You can define rules in the admin panel to trigger volume-based discounts (e.g. 10% off when buying 5 or more tickets)."
        }
      ]}
      ctaTitle="Sell Out Your Next Event"
      ctaDescription="Provide event-goers with a frictionless booking and check-in journey. Contact Devarya Solutions today to get a custom ticketing platform quote."
    />
  );
}
