"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Film, Play, Image, Zap, Music, Wand2 } from "lucide-react";

const capabilities = [
  { icon: Film, title: "Text to Video", desc: "Transform text into engaging videos", color: "from-pink-500 to-rose-500" },
  { icon: Play, title: "AI Narration", desc: "Add AI voiceover to videos", color: "from-violet-500 to-purple-600" },
  { icon: Image, title: "Visual Generation", desc: "AI-generated visuals for your content", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Fast Creation", desc: "Create videos in minutes", color: "from-emerald-500 to-teal-500" },
  { icon: Music, title: "Background Music", desc: "Add AI-generated music tracks", color: "from-orange-500 to-red-500" },
  { icon: Wand2, title: "Custom Styles", desc: "Multiple visual styles and templates", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "AI-generated video visuals",
  "Multiple aspect ratios (16:9, 9:16, 1:1)",
  "Custom voiceover with any AI voice",
  "Background music generation",
  "Text overlay and animations",
  "Export in HD quality",
];

const useCases = [
  "Social media content",
  "Marketing videos",
  "Educational content",
  "Product demos",
  "News videos",
  "Storytelling",
];

export default function TextToVideoPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Text to Video"
      description="Transform text into engaging videos with AI-generated visuals and voiceover."
      icon={Film}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start creating videos"
      ctaDescription="Try our text-to-video API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
