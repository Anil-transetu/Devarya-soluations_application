"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { GraduationCap, Layers, DollarSign, TrendingUp, Cpu, Shield, Users, Award } from "lucide-react";

export function ELearning() {
  return (
    <ProductPageLayout
      title="Learning Management System & E-Learning Platform"
      subtitle="LMS & Educational App Systems"
      heroIcon={GraduationCap}
      heroDescription="A comprehensive digital learning platform. Deliver video courses, coordinate live classes, evaluate student progress with quizzes, and manage certifications in a unified virtual school."
      overviewTitle="Empower Educators and Students with Smart E-Learning Tech"
      overviewDescription="At Devarya Solutions, we provide a high-performance, engaging e-learning software system. Built for schools, universities, and corporate training centers, our product supports interactive course players, live virtual classroom integrations, and advanced learner analytics. Transition physical curriculums online with ease and build interactive communities of learners."
      overviewHighlights={[
        "Interactive student dashboard with course timelines and progress logs",
        "Instructor panel to draft courses, upload PDFs, and grade exams",
        "Virtual classroom options with Zoom, Google Meet, and Jitsi",
        "Interactive quiz builder with customizable grading rules",
        "Secure digital certificates featuring QR verification links"
      ]}
      benefitsTitle="Why Choose Our LMS Platform?"
      benefitsDescription="Bring structure to digital education, monetize knowledge, and track academic growth."
      benefits={[
        {
          title: "Structured Learning Paths",
          description: "Organize lectures into chapters, set prerequisites, and unlock lessons as learners complete quizzes.",
          icon: Layers
        },
        {
          title: "Monetize Knowledge",
          description: "Sell courses individually, launch subscription memberships, or draft corporate business training packs.",
          icon: DollarSign
        },
        {
          title: "Actionable Student Analytics",
          description: "Track course completion ratios, average quiz grades, and student activity trends.",
          icon: TrendingUp
        }
      ]}
      featuresTitle="Key Features of the E-Learning Suite"
      featuresDescription="Engineered to provide educators with extensive authoring tools and students with an engaging virtual campus."
      features={[
        {
          title: "Course Authoring Tool",
          description: "Drag-and-drop course creator to combine video lectures, audio files, documents, and reference links.",
          icon: Cpu
        },
        {
          title: "Interactive Quiz Engine",
          description: "Configure multiple-choice questions, timed tests, essay prompts, and maximum retake limits.",
          icon: Shield
        },
        {
          title: "Live Webinars & Classes",
          description: "Schedule live interactive lectures with screen sharing, whiteboard tools, and real-time student Q&A chat.",
          icon: Users
        },
        {
          title: "Student Forum Rooms",
          description: "Provide virtual discussion rooms where students can ask questions, collaborate on projects, and exchange ideas.",
          icon: Users
        },
        {
          title: "Automated Certifications",
          description: "Generate and award custom PDF completion certificates immediately when learners finish final modules.",
          icon: Award
        },
        {
          title: "Offline Study Support",
          description: "Enables students to download course videos in-app to study on the go without using mobile data.",
          icon: Layers
        }
      ]}
      useCasesTitle="Business Use Cases"
      useCasesDescription="Our educational engine serves diverse teaching scenarios, from private tutors to enterprise groups."
      useCases={[
        {
          title: "Academic Institutions & Schools",
          description: "Equips traditional schools and universities with virtual classrooms, grading registers, and student profiles."
        },
        {
          title: "Corporate Training & Compliance",
          description: "Helps companies onboard new staff, run safety compliance modules, and measure learning success."
        },
        {
          title: "Independent Tutors & Course Creators",
          description: "Perfect for online entrepreneurs and content creators looking to sell skills and grow a private student base."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Schools, Colleges, & Universities",
        "Professional Training & Coaching Centers",
        "Corporate HR Departments",
        "EdTech Startups",
        "Niche Skill Educators"
      ]}
      technologiesTitle="Technologies Powering the LMS"
      technologies={[
        { name: "Next.js & React" },
        { name: "Node.js (NestJS)" },
        { name: "PostgreSQL & MongoDB" },
        { name: "AWS S3 & CloudFront (Video CDN)" },
        { name: "Zoom Web Meeting SDK" },
        { name: "HLS Encryption (Anti-Piracy)" }
      ]}
      faqs={[
        {
          question: "How do you protect premium course videos from piracy?",
          answer: "We use Encrypted HTTP Live Streaming (HLS) with signed cookies and dynamic user watermarks to discourage unauthorized downloads and screen capture."
        },
        {
          question: "Does the LMS support third-party video hosts?",
          answer: "Yes. In addition to our secure AWS S3 hosting, you can embed video content from YouTube, Vimeo, Wistia, or Bunny.net."
        },
        {
          question: "Can we run exams with timers?",
          answer: "Absolutely. The quiz engine allows instructors to set strict countdown timers, randomize question orders, and auto-submit tests when time expires."
        }
      ]}
      ctaTitle="Build Your Digital Classroom Today"
      ctaDescription="Deliver engaging learning experiences to students worldwide. Partner with Devarya Solutions to launch your custom e-learning platform."
    />
  );
}
