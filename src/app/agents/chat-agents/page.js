"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { MessageSquare, Globe, Zap, Shield, BarChart3, Layers } from "lucide-react";

const capabilities = [
  { icon: MessageSquare, title: "Chat Interface", desc: "Embeddable chat widget", color: "from-violet-500 to-purple-600" },
  { icon: Globe, title: "Multilingual", desc: "Support 45+ languages", color: "from-emerald-500 to-teal-500" },
  { icon: Zap, title: "Instant Response", desc: "Real-time conversation", color: "from-orange-500 to-red-500" },
  { icon: Shield, title: "Guardrails", desc: "Behavioral rules and compliance", color: "from-pink-500 to-rose-500" },
  { icon: BarChart3, title: "Analytics", desc: "Track conversations and satisfaction", color: "from-blue-500 to-cyan-500" },
  { icon: Layers, title: "Workflows", desc: "Multi-step conversation flows", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Embeddable chat widget for websites",
  "Support for 45+ languages",
  "Custom knowledge base integration",
  "Multi-step conversation workflows",
  "Real-time analytics dashboard",
  "Handoff to human agents",
];

const useCases = [
  "Website customer support",
  "Lead qualification",
  "FAQ automation",
  "Booking assistance",
  "Product recommendations",
  "Technical support",
];

export default function ChatAgentsPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Agents"
      title="Chat Agents"
      description="Conversational AI agents for websites and apps with human-like responses."
      icon={MessageSquare}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start building chat agents"
      ctaDescription="Try SAIVA Agents free. No credit card required."
      parentLink="/agents"
      parentLabel="Back to SAIVA Agents"
    />
  );
}
