"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Volume2, Zap, Wand2, List, Clock, Download } from "lucide-react";

const capabilities = [
  { icon: Volume2, title: "Any Sound", desc: "Create any sound effect from text", color: "from-cyan-500 to-teal-500" },
  { icon: Zap, title: "Instant", desc: "Generate sound effects in seconds", color: "from-violet-500 to-purple-600" },
  { icon: Wand2, title: "Text Prompt", desc: "Describe the sound you need", color: "from-blue-500 to-cyan-500" },
  { icon: List, title: "Library", desc: "Build your own sound library", color: "from-emerald-500 to-teal-500" },
  { icon: Clock, title: "Custom Length", desc: "Generate any duration", color: "from-orange-500 to-red-500" },
  { icon: Download, title: "Multiple Formats", desc: "Export as MP3, WAV, or more", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Generate any sound effect from text",
  "Customizable duration and intensity",
  "High-quality audio output",
  "Multiple export formats",
  "Batch generation",
  "Commercial usage rights",
];

const useCases = [
  "Video production",
  "Game development",
  "Podcast production",
  "Film post-production",
  "Animation",
  "Virtual reality",
];

export default function SoundEffectsPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Sound Effects"
      description="Create custom sound effects for videos, games, and immersive experiences."
      icon={Volume2}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start creating sound effects"
      ctaDescription="Try our sound effects API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
