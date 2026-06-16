"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { BookOpen, Mic, Headphones, List, Sparkles, Users } from "lucide-react";

const capabilities = [
  { icon: BookOpen, title: "Full Books", desc: "Convert entire books to audiobooks", color: "from-amber-500 to-yellow-500" },
  { icon: Mic, title: "Multiple Voices", desc: "Different voices for characters", color: "from-violet-500 to-purple-600" },
  { icon: Headphones, title: "Professional Quality", desc: "Studio-quality audio output", color: "from-blue-500 to-cyan-500" },
  { icon: List, title: "Chapter Support", desc: "Automatic chapter detection", color: "from-emerald-500 to-teal-500" },
  { icon: Sparkles, title: "Emotional Reading", desc: "Expressive narration with emotion", color: "from-pink-500 to-rose-500" },
  { icon: Users, title: "Multi-cast", desc: "Assign different voices to characters", color: "from-orange-500 to-red-500" },
];

const features = [
  "Convert any text to audiobook format",
  "Multiple character voices",
  "Chapter and section detection",
  "Emotional and expressive narration",
  "High-quality audio export",
  "Support for EPUB and PDF input",
];

const useCases = [
  "Self-publishing authors",
  "Educational publishers",
  "Content accessibility",
  "Library digitization",
  "Podcast production",
  "Corporate training",
];

export default function AudiobooksPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Audiobooks"
      description="Turn any text into immersive audiobooks with multiple character voices and expressive narration."
      icon={BookOpen}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start creating audiobooks"
      ctaDescription="Try our audiobook generation free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
