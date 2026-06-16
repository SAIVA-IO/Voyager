"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Phone, Globe, Mic, Zap, Shield, BarChart3 } from "lucide-react";

const capabilities = [
  { icon: Phone, title: "Phone Integration", desc: "Connect to any phone system", color: "from-blue-500 to-cyan-500" },
  { icon: Globe, title: "Multilingual", desc: "Support 45+ languages", color: "from-emerald-500 to-teal-500" },
  { icon: Mic, title: "Natural Voice", desc: "Human-like conversational voice", color: "from-violet-500 to-purple-600" },
  { icon: Zap, title: "Real-time", desc: "Instant response and processing", color: "from-orange-500 to-red-500" },
  { icon: Shield, title: "Guardrails", desc: "Built-in safety and compliance", color: "from-pink-500 to-rose-500" },
  { icon: BarChart3, title: "Analytics", desc: "Track performance and satisfaction", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Natural voice conversations",
  "Support for 45+ languages",
  "Integration with Twilio, Vonage, and more",
  "Real-time call analytics",
  "Customizable agent personality",
  "Call recording and transcription",
];

const useCases = [
  "Customer support",
  "Appointment scheduling",
  "Order processing",
  "Technical support",
  "Sales qualification",
  "Survey collection",
];

export default function VoiceAgentsPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Agents"
      title="Voice Agents"
      description="Multilingual voice agents with knowledge base integration for intelligent phone and voice interactions across 45+ languages."
      icon={Phone}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start building voice agents"
      ctaDescription="Try SAIVA Agents free. No credit card required."
      parentLink="/agents"
      parentLabel="Back to SAIVA Agents"
    />
  );
}
