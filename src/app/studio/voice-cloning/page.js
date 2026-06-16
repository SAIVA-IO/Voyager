"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Headphones, Mic, Shield, Zap, Clock, Users } from "lucide-react";

const capabilities = [
  { icon: Headphones, title: "Instant Cloning", desc: "Clone voices from seconds of audio", color: "from-emerald-500 to-teal-500" },
  { icon: Mic, title: "High Fidelity", desc: "Maintain original voice characteristics", color: "from-violet-500 to-purple-600" },
  { icon: Shield, title: "Consent Required", desc: "Voice owner must verify identity", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Real-time", desc: "Generate cloned voice in real-time", color: "from-orange-500 to-red-500" },
  { icon: Clock, title: "Low Latency", desc: "Near-instant voice generation", color: "from-pink-500 to-rose-500" },
  { icon: Users, title: "Multiple Voices", desc: "Clone and manage multiple voices", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Clone from just a few seconds of audio",
  "Professional-grade voice quality",
  "Voice verification for consent",
  "Instant and professional cloning modes",
  "API access for integration",
  "Manage voice library in dashboard",
];

const useCases = [
  "Content localization",
  "Personalized assistants",
  "Dubbing and localization",
  "Character voice creation",
  "Voice preservation",
  "Custom brand voices",
];

export default function VoiceCloningPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Voice Cloning"
      description="Create a perfect digital clone of any voice from just a few seconds of audio."
      icon={Headphones}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start cloning voices"
      ctaDescription="Try our voice cloning API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
