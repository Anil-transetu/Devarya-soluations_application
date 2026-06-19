"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { BriefcaseMedical, Users, Zap, Shield, Cpu, Calendar, Layers, DollarSign, TrendingUp } from "lucide-react";

export function Healthcare() {
  return (
    <ProductPageLayout
      title="Telehealth & Clinic Management Platform"
      subtitle="Doctor Booking & Telemedicine Suite"
      heroIcon={BriefcaseMedical}
      heroDescription="A secure, compliant healthcare application suite. Connect patients with doctors, coordinate virtual consultations, manage electronic health records, and automate prescription workflows."
      overviewTitle="Streamline Healthcare Delivery with Telemedicine Tech"
      overviewDescription="At Devarya Solutions, we offer an end-to-end digital health platform designed to link medical practitioners, clinic administrators, and patients. With integrated WebRTC video rooms, smart schedule coordinators, and encrypted health records (EHR), our product brings premium clinical care to the digital space while maintaining medical privacy standards."
      overviewHighlights={[
        "Patient app for appointments booking, digital payments, and consultation logs",
        "Doctor panel for clinical charts, e-prescriptions, and holiday planning",
        "Encrypted EHR storage for patient medical histories, labs, and scans",
        "Clinic receptionist dashboard to manage check-ins and billing invoices",
        "Automated push notifications and SMS alerts for upcoming check-ups"
      ]}
      benefitsTitle="Why Choose Our Telehealth Product?"
      benefitsDescription="Modernize your clinical workflow, reduce administrative overhead, and improve patient retention."
      benefits={[
        {
          title: "Improved Patient Access",
          description: "Enable patients in remote locations to consult with specialists online, eliminating travel times.",
          icon: Users
        },
        {
          title: "Minimized No-Shows",
          description: "Automated booking reminders and easy online rescheduling options reduce missed clinic slots.",
          icon: Zap
        },
        {
          title: "Compliant Data Protection",
          description: "All patient communication, medical histories, and scripts are encrypted to satisfy local medical privacy regulations.",
          icon: Shield
        }
      ]}
      featuresTitle="Key Features of the Healthcare Suite"
      featuresDescription="Engineered to provide medical professionals with precise clinical tools and patients with a secure journey."
      features={[
        {
          title: "WebRTC Video Consulting",
          description: "High-definition, low-latency video calls directly within the patient app and doctor web browser.",
          icon: Cpu
        },
        {
          title: "Smart Shift Calendar",
          description: "Receptionists can manage doctor hours, schedule follow-ups, and block slots for emergencies.",
          icon: Calendar
        },
        {
          title: "Electronic Prescriptions (e-Rx)",
          description: "Doctors can search medicine databases and generate signed digital prescriptions in PDF format.",
          icon: Layers
        },
        {
          title: "Diagnostic Records Vault",
          description: "Securely upload and share lab results, X-rays, and treatment charts with clinical staff.",
          icon: Shield
        },
        {
          title: "Billing & Invoicing Engine",
          description: "Take credit cards, UPI, or process co-pay amounts, automatically generating receipts.",
          icon: DollarSign
        },
        {
          title: "Chronic Care vitals Tracker",
          description: "Allows patients to log daily vitals like blood pressure and glucose levels, readable by doctors.",
          icon: TrendingUp
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our digital healthcare engine operates across different scales, from small local clinics to large hospital networks."
      useCases={[
        {
          title: "Private Clinics & General Practitioners",
          description: "Equips local practices with an online booking website, teleconsultation tools, and digital clinical charts."
        },
        {
          title: "Multi-Specialty Hospital Outpatient Departments",
          description: "Enables hospital systems to manage outpatient flow, allocate consulting rooms, and sync billing systems."
        },
        {
          title: "On-Demand Healthcare Startups",
          description: "A digital marketplace connecting patients with verified medical experts for online medical advice."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "General Practices & Private Clinics",
        "Multi-Specialty Hospital Groups",
        "Diagnostic & Laboratory Networks",
        "Mental Health & Counseling Centers",
        "Digital Health Tech Startups"
      ]}
      technologiesTitle="Technologies Powering the Platform"
      technologies={[
        { name: "React Native (Mobile Apps)" },
        { name: "React & Next.js (Web Portals)" },
        { name: "WebRTC for Secure Video" },
        { name: "Node.js (NestJS) & PostgreSQL" },
        { name: "HIPAA-Compliant AWS Hosting" },
        { name: "Twilio Video & SMS API" }
      ]}
      faqs={[
        {
          question: "Is patient medical data fully secure?",
          answer: "Yes. All personal health information is encrypted at rest using AES-256 and in transit using TLS 1.3, in line with medical privacy standards."
        },
        {
          question: "How do patients join their video consultation?",
          answer: "Patients simply click a 'Join Call' button inside their booking detail screen. No external apps like Zoom or Skype are required."
        },
        {
          question: "Can doctors prescribe medicines during the call?",
          answer: "Yes. Doctors can open the e-prescription drawer during the video call, write the prescription, and sign it, which instantly updates the patient's portal."
        }
      ]}
      ctaTitle="Digitize Your Medical Practice"
      ctaDescription="Provide modern, accessible clinical care to your patients. Contact Devarya Solutions today to get a secure telehealth platform quote."
    />
  );
}
