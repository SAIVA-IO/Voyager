"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Video, Globe, Mic, Zap, Layers, CheckCircle } from "lucide-react";

const capabilities = [
  { icon: Video, title: "Auto Dubbing", desc: "Automatically dub videos into any language", color: "from-orange-500 to-red-500" },
  { icon: Globe, title: "30+ Languages", desc: "Dub content for global audiences", color: "from-blue-500 to-cyan-500" },
  { icon: Mic, title: "Voice Matching", desc: "Match original speaker's voice in new language", color: "from-violet-500 to-purple-600" },
  { icon: Zap, title: "Fast Processing", desc: "Process videos in minutes, not hours", color: "from-emerald-500 to-teal-500" },
  { icon: Layers, title: "Lip Sync", desc: "Automatic lip synchronization", color: "from-pink-500 to-rose-500" },
  { icon: CheckCircle, title: "Quality Control", desc: "Review and edit before publishing", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Automatic language detection",
  "Voice-preserving dubbing",
  "Lip sync technology",
  "Subtitle generation",
  "Batch processing",
  "Review and editing tools",
];

const useCases = [
  "Video localization",
  "Content distribution",
  "Global marketing",
  "Film dubbing",
  "Educational content",
  "Corporate training",
];

export default function DubbingPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Dubbing Studio"
      description="Full video editor with AI-generated subtitles in 45+ languages, review and editing tools, character voice replacement, and background music controls."
      icon={Video}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start dubbing videos"
      ctaDescription="Try our dubbing API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
