"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { AudioLines, Smile, Frown, Heart, Zap, Volume2 } from "lucide-react";

const capabilities = [
  { icon: AudioLines, title: "Emotion Control", desc: "Add any emotion to speech", color: "from-rose-500 to-pink-500" },
  { icon: Smile, title: "Happy", desc: "Joyful and enthusiastic delivery", color: "from-amber-500 to-yellow-500" },
  { icon: Frown, title: "Sad", desc: "Melancholic and emotional delivery", color: "from-blue-500 to-cyan-500" },
  { icon: Heart, title: "Empathetic", desc: "Compassionate and understanding tone", color: "from-violet-500 to-purple-600" },
  { icon: Zap, title: "Excited", desc: "Energetic and enthusiastic delivery", color: "from-orange-500 to-red-500" },
  { icon: Volume2, title: "Custom", desc: "Create your own emotional styles", color: "from-emerald-500 to-teal-500" },
];

const features = [
  "Pre-built emotional styles",
  "Custom emotion creation",
  "Fine-grained emotion control",
  "Mixed emotions support",
  "Real-time emotion adjustment",
  "API access for integration",
];

const useCases = [
  "Character voice acting",
  "Therapeutic applications",
  "Storytelling",
  "Gaming characters",
  "Virtual assistants",
  "Accessibility tools",
];

export default function EmotionalAudioPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Emotional Audio"
      description="Add realistic emotions to speech - happy, sad, excited, or empathetic."
      icon={AudioLines}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start adding emotions"
      ctaDescription="Try our emotional audio API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
