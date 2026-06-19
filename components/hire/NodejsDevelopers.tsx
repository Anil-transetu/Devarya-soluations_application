"use client";

import React from "react";
import { HirePageLayout } from "./HirePageLayout";
import { Hexagon, Code, Shield, Zap, Globe, Layers, Settings, Users, Clock, Terminal } from "lucide-react";

export function NodejsDevelopers() {
  return (
    <HirePageLayout
      title="Hire Dedicated Node.js Developers"
      subtitle="Node.js Platform Experts"
      heroIcon={Hexagon}
      heroDescription="Hire expert Node.js backend developers to build lightweight, fast, and scalable server-side APIs, microservices, and real-time communication systems."
      
      overviewTitle="Event-Driven, Scalable Backend Architectures"
      overviewDescription="At Devarya Solutions, we offer dedicated Node.js backend developers who specialize in writing clean, asynchronous JavaScript/TypeScript code using Express, NestJS, and Fastify. Designed for high concurrency and scalability, our Node.js developers design highly secure database schemas, construct reliable microservices, and build robust API endpoints for your frontend platforms."
      overviewHighlights={[
        "Expert Node.js and TypeScript programmers specializing in scalable backends",
        "Proficient in Express.js, NestJS, Fastify, and Koa frameworks",
        "Deep knowledge of relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases",
        "Experienced in building event-driven microservices with RabbitMQ and Kafka",
        "Strict adherence to API security, OAuth/JWT authentication, and CORS policies"
      ]}
      
      whyHireTitle="Why Hire Node.js Developers from Devarya Solutions?"
      whyHireDescription="Leverage asynchronous, event-driven architecture to scale your backend workflows."
      whyHireItems={[
        {
          title: "Vetted Tech Talent",
          description: "Our developers pass rigorous tests covering database queries, event loop management, and server-side API auditing.",
          icon: Code
        },
        {
          title: "High Performance APIs",
          description: "Utilize Node.js's non-blocking I/O to handle thousands of concurrent queries without latency.",
          icon: Zap
        },
        {
          title: "Direct Code Access",
          description: "Monitor developer commits daily. You maintain 100% intellectual property ownership and direct communication access.",
          icon: Shield
        }
      ]}
      
      skillsTitle="Node.js Development Skills"
      skillsDescription="Our developers possess comprehensive expertise across backend architecture, databases, and microservices."
      skills={[
        {
          title: "TypeScript / ES6 Programming",
          description: "Writing clean, asynchronous, and typed code for robust and stable server-side applications.",
          icon: Code
        },
        {
          title: "API Design & REST/GraphQL",
          description: "Creating secure, modular RESTful APIs and GraphQL endpoints for frontend platforms.",
          icon: Globe
        },
        {
          title: "Database Integration",
          description: "Designing efficient database schemas and queries using PostgreSQL, MySQL, MongoDB, and Redis.",
          icon: Settings
        },
        {
          title: "Real-time Communication",
          description: "Implementing WebSockets, Socket.io, and server-sent events (SSE) for instant messaging or streaming.",
          icon: Terminal
        },
        {
          title: "Microservices & Message Brokers",
          description: "Structuring scalable microservice networks using RabbitMQ, Kafka, and gRPC protocols.",
          icon: Layers
        },
        {
          title: "Server Security & JWT",
          description: "Implementing secure OAuth2, JSON Web Tokens (JWT), encryption libraries, and rate limiters.",
          icon: Shield
        }
      ]}
      
      hiringModelsTitle="Staffing Models Aligned to Your Budget"
      hiringModelsDescription="Choose the best resource model based on your backend engineering requirements."
      hiringModels={[
        {
          title: "Full-Time Dedicated",
          description: "A senior Node.js developer working 160 hours per month exclusively for your company. Best for custom backend creation.",
          duration: "Monthly Engagement",
          icon: Clock,
          benefits: [
            "160 Hours/Month dedicated focus",
            "Direct interaction on Slack/Teams",
            "Daily updates and git commits",
            "Full IP ownership"
          ]
        },
        {
          title: "Part-Time Dedicated",
          description: "A Node.js developer dedicated for 80 hours per month. Ideal for ongoing maintenance, minor updates, and support.",
          duration: "Flexible Terms",
          icon: Clock,
          benefits: [
            "80 Hours/Month dedicated focus",
            "Slack/Teams communication",
            "Weekly sprint planning",
            "Easily scale up to full-time"
          ]
        },
        {
          title: "Hourly Contract",
          description: "Hire a Node.js developer on a flexible hourly model. Best for bug fixes, integrations, or short consulting contracts.",
          duration: "Hourly Billing",
          icon: Clock,
          benefits: [
            "Billing based on hours worked",
            "Detailed timesheet tracking",
            "Perfect for minor enhancements",
            "No long-term commitments"
          ]
        }
      ]}
      
      processTitle="Getting Started"
      processDescription="Hire a qualified Node.js developer in four simple steps."
      processSteps={[
        {
          title: "Submit Backend Scope",
          description: "Outline your application features, integration goals, and contract timeline."
        },
        {
          title: "Review Shortlisted Resumes",
          description: "Evaluate developer profiles handpicked to match your application requirements."
        },
        {
          title: "Conduct Interviews",
          description: "Engage with selected developers in technical and communication evaluation calls."
        },
        {
          title: "Developer Onboarding",
          description: "Grant project tool access, sign NDAs, set up communication, and begin development."
        }
      ]}
      
      technologiesTitle="Node.js Tech Stack & Tools"
      technologies={[
        { name: "Node.js & TypeScript" },
        { name: "Express & NestJS" },
        { name: "PostgreSQL & MongoDB" },
        { name: "Docker & Kubernetes" },
        { name: "Redis & Kafka" },
        { name: "Jest Testing Framework" }
      ]}
      
      faqs={[
        {
          question: "Can your Node.js developers write serverless functions?",
          answer: "Yes, absolutely. Our developers are highly skilled in deploying serverless architectures using AWS Lambda, Google Cloud Functions, and Vercel Serverless."
        },
        {
          question: "How do you protect our application's data and codebase?",
          answer: "We sign strict Non-Disclosure Agreements (NDAs) before sharing candidate details or project scopes, and all intellectual property belongs completely to you."
        },
        {
          question: "Do developers work in my local time zone?",
          answer: "Yes. We coordinate developer working schedules to match your local timezone, ensuring overlap hours for standups and planning sessions."
        }
      ]}
      
      ctaTitle="Hire Vetted Node.js Developers"
      ctaDescription="Build high-performance event-driven backends. Contact Devarya Solutions today to hire experienced Node.js backend engineers."
    />
  );
}
