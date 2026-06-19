"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Truck, DollarSign, MapPin, Zap, Cpu, Shield, Layers, Calendar, Users } from "lucide-react";

export function Logistics() {
  return (
    <ProductPageLayout
      title="Logistics & Fleet Tracking System"
      subtitle="Supply Chain & Delivery Tracking"
      heroIcon={Truck}
      heroDescription="A comprehensive fleet management and delivery dispatch suite. Empower your logistics company, delivery service, or warehouse network with live vehicle tracking, route optimization, and digital proof of delivery."
      overviewTitle="Streamline Supply Chain and Delivery Fleet Logistics"
      overviewDescription="At Devarya Solutions, we offer an enterprise-grade logistics and fleet coordination platform. Designed to manage long-haul freight operations or local delivery runs, our software combines advanced route optimization algorithms with real-time telematics tracking and mobile driver applications to reduce transportation costs and ensure on-time fulfillment."
      overviewHighlights={[
        "Dispatcher console with interactive map planning and fleet coordination",
        "Driver app supporting job lists, turn-by-turn routing, and proof-of-delivery",
        "Interactive customer portal showing real-time delivery trucks and ETAs",
        "Telemetry integrations supporting standard GPS trackers and OBD-II interfaces",
        "Comprehensive analytics on fuel consumption, driver behavior, and route efficiency"
      ]}
      benefitsTitle="Why Choose Our Logistics Software?"
      benefitsDescription="Reduce fuel waste, optimize vehicle usage, and keep clients informed at every milestone."
      benefits={[
        {
          title: "Reduced Transit Costs",
          description: "Smart route optimization sequences drop-offs automatically, saving fuel and reducing mileage.",
          icon: DollarSign
        },
        {
          title: "Complete Fleet Visibility",
          description: "Monitor live coordinates, vehicle speeds, idle times, and route deviations from a single screen.",
          icon: MapPin
        },
        {
          title: "Frictionless Verification",
          description: "Capture electronic signatures, delivery photos, and barcode scans instantly upon handover.",
          icon: Zap
        }
      ]}
      featuresTitle="Key Features of the Logistics Suite"
      featuresDescription="Engineered to provide dispatchers with total fleet control and drivers with clear task flows."
      features={[
        {
          title: "Multi-Stop Routing Engine",
          description: "Computes the most efficient delivery sequence based on vehicle capacity, traffic, and client windows.",
          icon: Cpu
        },
        {
          title: "Electronic Proof-of-Delivery",
          description: "Allows drivers to upload photos, scan packages, and collect client signatures on delivery.",
          icon: Shield
        },
        {
          title: "Interactive Client Links",
          description: "Sends automated SMS or email alerts with a tracking link showing the delivery vehicle's location.",
          icon: MapPin
        },
        {
          title: "Vehicle Telematics Tracker",
          description: "Logs engine diagnostic codes, speed violations, idling durations, and harsh braking triggers.",
          icon: Layers
        },
        {
          title: "Fleet Service Scheduler",
          description: "Monitors vehicle inspection schedules, oil changes, registration renewals, and service records.",
          icon: Calendar
        },
        {
          title: "Shipper Booking Panel",
          description: "Enables B2B corporate clients to book shipments, calculate rates, and print consignment waybills.",
          icon: Users
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our software adapts to different delivery models, from local couriers to international freight."
      useCases={[
        {
          title: "Local Courier & Express Services",
          description: "Manages daily local parcel deliveries, driver assignments, route sheets, and customer sign-offs."
        },
        {
          title: "Freight & Heavy Haulage Logistics",
          description: "Monitors long-distance trucks, load assignments, container temperatures, and driver driving limits."
        },
        {
          title: "E-commerce Delivery Fleet",
          description: "Coordinates warehouse dispatching operations, sorting hubs, and last-mile delivery drivers."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Courier & Express Delivery Teams",
        "Freight & Long-Distance Trucking Providers",
        "Third-Party Logistics (3PL) Providers",
        "E-commerce & Retail Warehouses",
        "Manufacturing & Wholesale Distributors"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React (Web Admin Console)" },
        { name: "Flutter & Kotlin (Driver Apps)" },
        { name: "Node.js (NestJS) & Go" },
        { name: "OpenStreetMap & Google Maps API" },
        { name: "MQTT Telemetry Protocol" },
        { name: "AWS EC2 & RDS" }
      ]}
      faqs={[
        {
          question: "Does the driver app work in low-connectivity areas?",
          answer: "Yes. The driver app saves delivery details and client signatures locally. Once the device connects to a mobile network, the system uploads files and updates the database."
        },
        {
          question: "Can we integrate existing GPS hardware with the platform?",
          answer: "Absolutely. Our backend supports standard telemetry protocol streams (like Teltonika, CalAmp, and JT808) to link hardware trackers."
        },
        {
          question: "How are estimated delivery times calculated?",
          answer: "We compute ETAs using live traffic feeds, road weight limits, vehicle class speeds, and historical driver performance metrics."
        }
      ]}
      ctaTitle="Optimize Your Fleet Operations Today"
      ctaDescription="Reduce fuel waste, coordinate drivers, and verify deliveries in real time. Contact Devarya Solutions to schedule a live demo of our fleet management software."
    />
  );
}
