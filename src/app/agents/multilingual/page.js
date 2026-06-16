"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Globe, MessageSquare, Phone, Zap, Users, Languages } from "lucide-react";

const capabilities = [
  { icon: Globe, title: "45+ Languages", desc: "Support for virtually any language", color: "from-emerald-500 to-teal-500" },
  { icon: MessageSquare, title: "Chat", desc: "Multilingual chat support", color: "from-violet-500 to-purple-600" },
  { icon: Phone, title: "Voice", desc: "Multilingual voice support", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Auto-detect", desc: "Automatic language detection", color: "from-orange-500 to-red-500" },
  { icon: Users, title: "Native Quality", desc: "Native-sounding voices", color: "from-pink-500 to-rose-500" },
  { icon: Languages, title: "Code-switching", desc: "Mix languages naturally", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Support for 45+ languages",
  "Automatic language detection",
  "Native-quality voices for each language",
  "Code-switching support",
  "Real-time translation",
  "Cultural context awareness",
];

const useCases = [
  "Global customer support",
  "Multilingual content",
  "International businesses",
  "Immigrant services",
  "Global education",
  "Travel and tourism",
];

export default function MultilingualPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Agents"
      title="Multilingual Support"
      description="Serve customers worldwide with agents that speak 45+ languages fluently."
      icon={Globe}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start going global"
      ctaDescription="Try SAIVA Agents free. No credit card required."
      parentLink="/agents"
      parentLabel="Back to SAIVA Agents"
    />
  );
}
