"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Mic, Globe, Zap, Volume2, Languages, Sparkles } from "lucide-react";

const capabilities = [
  { icon: Mic, title: "Natural Voices", desc: "Ultra-realistic AI voices that sound human", color: "from-violet-500 to-purple-600" },
  { icon: Globe, title: "45+ Languages", desc: "Support for virtually any language", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Real-time Streaming", desc: "Stream audio as it's generated", color: "from-emerald-500 to-teal-500" },
  { icon: Volume2, title: "Multiple Formats", desc: "MP3, WAV, PCM output formats", color: "from-orange-500 to-red-500" },
  { icon: Languages, title: "Multi-speaker", desc: "Create conversations with multiple voices", color: "from-pink-500 to-rose-500" },
  { icon: Sparkles, title: "Emotional Control", desc: "Add emotion and emphasis to speech", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "29 pre-built AI voices with unique personalities",
  "Adjustable speech rate, pitch, and emphasis",
  "SSML support for fine-grained control",
  "Batch processing for large text volumes",
  "Webhook support for async generation",
  "99.9% uptime SLA",
];

const useCases = [
  "Audiobook narration",
  "Video voiceovers",
  "E-learning content",
  "Podcast production",
  "IVR systems",
  "Accessibility tools",
];

export default function TextToSpeechPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Text to Speech"
      description="Generate ultra-realistic AI voices in 45+ languages with natural intonation, emotion, and prosody."
      icon={Mic}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start generating speech"
      ctaDescription="Try our text-to-speech API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
