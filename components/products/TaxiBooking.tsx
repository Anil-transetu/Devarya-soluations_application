"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Car, Zap, DollarSign, Shield, MapPin, Layers, Cpu, Calendar, TrendingUp, Users } from "lucide-react";

export function TaxiBooking() {
  return (
    <ProductPageLayout
      title="Ride-Hailing & Taxi Dispatch System"
      subtitle="Ride-Hailing & Dispatch Software"
      heroIcon={Car}
      heroDescription="A premium, end-to-end taxi dispatching and ride-sharing platform. Empower your taxi fleet, ride-hailing startup, or car rental business with live tracking, dynamic pricing, and passenger-driver matching algorithms."
      overviewTitle="Run a High-Performance Mobility Platform"
      overviewDescription="At Devarya Solutions, we offer a state-of-the-art ride-hailing application suite designed to coordinate drivers, passengers, and corporate fleets. With robust GPS tracking, instant fare estimations, and secure transactions, our platform ensures a smooth and safe commuting experience. Seamlessly scale from a few local taxis to thousands of vehicles across multiple cities."
      overviewHighlights={[
        "Passenger app with fast booking, multi-stop rides, and trip scheduling",
        "Driver app with automated trip dispatch, in-app navigation, and cash out logs",
        "Advanced dispatch engine utilizing nearest-neighbor and ride-pooling patterns",
        "Admin dashboard for live fleet tracking, passenger profiles, and fare controls",
        "Dedicated corporate portal for business travel scheduling and invoice exports"
      ]}
      benefitsTitle="Why Choose Our Ride-Hailing Product?"
      benefitsDescription="Bring efficiency to your transportation business with our premium dispatcher and matching algorithms."
      benefits={[
        {
          title: "Reduced Passenger Wait Times",
          description: "Smart dispatching assigns rides to the nearest available driver, maximizing efficiency and booking ratios.",
          icon: Zap
        },
        {
          title: "Dynamic Surge Pricing",
          description: "Maximize revenue by automatically increasing fares during high-demand hours, bad weather, or traffic congestion.",
          icon: DollarSign
        },
        {
          title: "Fortified Commuter Safety",
          description: "Safety is our priority. Built-in SOS emergency buttons, live route sharing, and driver review portals.",
          icon: Shield
        }
      ]}
      featuresTitle="Key Features of the Ecosystem"
      featuresDescription="Engineered to provide real-time updates and seamless ride handovers under any network condition."
      features={[
        {
          title: "Live GPS Navigation",
          description: "Accurate real-time passenger pickup and destination tracking powered by premium map layers.",
          icon: MapPin
        },
        {
          title: "Multi-Vehicle Classes",
          description: "Let riders pick between economy hatchbacks, premium SUVs, luxury sedans, or local motorbikes.",
          icon: Cpu
        },
        {
          title: "Ride Scheduling",
          description: "Enable passengers to schedule airport trips, corporate commutes, or daily runs in advance.",
          icon: Calendar
        },
        {
          title: "Dynamic Fare Calculator",
          description: "Computes transparent pricing before the ride based on estimated distance, time, and active surcharges.",
          icon: Layers
        },
        {
          title: "Driver Payout Portal",
          description: "Provide drivers with a breakdown of daily earnings, bonuses, cash collected, and digital payouts.",
          icon: TrendingUp
        },
        {
          title: "In-App Number Masking",
          description: "Protect user privacy by letting passengers and drivers call or text in-app without sharing mobile numbers.",
          icon: Users
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our mobility product is highly adaptable, helping startups, corporate groups, and taxi operators run smoothly."
      useCases={[
        {
          title: "On-Demand Ride-Hailing Apps",
          description: "Launch a fully branded service matching local passengers with independent contract drivers in your region."
        },
        {
          title: "Fleet Owner & Taxi Operators",
          description: "Digitize your existing physical taxi fleet, giving dispatchers an automated scheduling tool to assign bookings."
        },
        {
          title: "Corporate Ride Booking Portal",
          description: "Provide businesses with dedicated panels to coordinate executive travel and generate consolidated monthly bills."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Taxi Operators & Fleet Owners",
        "On-Demand Ride-Hailing Startups",
        "Airport Shuttles & Tourism Operators",
        "Corporate Employee Transport",
        "Car Rental Agencies"
      ]}
      technologiesTitle="Technologies Powering the Mobility Suite"
      technologies={[
        { name: "React Native & Flutter" },
        { name: "Socket.io for Live Tracking" },
        { name: "Node.js (NestJS) & Go" },
        { name: "Redis (Spatial Geo-indexing)" },
        { name: "Google Maps & Mapbox APIs" },
        { name: "AWS Cloud Infrastructure" }
      ]}
      faqs={[
        {
          question: "How fast is the passenger-driver matching algorithm?",
          answer: "Our matchmaking engine utilizes spatial grid indices (Redis H3/S2) to identify and pair riders with drivers in less than 3 seconds based on road distance."
        },
        {
          question: "Does the app function in areas with weak cellular networks?",
          answer: "Yes. The passenger and driver apps use offline caching and lightweight MQTT protocols to send location updates even in low-bandwidth zones."
        },
        {
          question: "What payment gateways are supported?",
          answer: "We support a wide array of payment gateways including Stripe, PayPal, Razorpay, Braintree, Apple Pay, Google Pay, and regional mobile wallets."
        }
      ]}
      ctaTitle="Accelerate Your Mobility Business"
      ctaDescription="Get a highly reliable ride-hailing platform tailored to your fleet. Contact Devarya Solutions to schedule a live product walk-through and get a custom quote."
    />
  );
}
