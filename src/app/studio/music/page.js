"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Music, Play, List, Wand2, Headphones, Zap } from "lucide-react";

const capabilities = [
  { icon: Music, title: "Any Genre", desc: "Generate music in any genre or style", color: "from-indigo-500 to-blue-500" },
  { icon: Play, title: "Full Tracks", desc: "Complete songs with intro, verse, chorus", color: "from-violet-500 to-purple-600" },
  { icon: List, title: "Playlists", desc: "Generate multiple tracks at once", color: "from-emerald-500 to-teal-500" },
  { icon: Wand2, title: "Text to Music", desc: "Describe the music you want", color: "from-orange-500 to-red-500" },
  { icon: Headphones, title: "High Quality", desc: "Studio-quality audio output", color: "from-pink-500 to-rose-500" },
  { icon: Zap, title: "Fast Generation", desc: "Create tracks in seconds", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Generate complete songs from text",
  "Customizable tempo, key, and mood",
  "Commercial usage rights",
  "Multiple export formats",
  "Loop and sample generation",
  "Instrumental and vocal tracks",
];

const useCases = [
  "Content creators",
  "Video game music",
  "Podcast intros",
  "Advertising jingles",
  "Film scoring",
  "Personal projects",
];

export default function MusicPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="AI Music"
      description="Generate original music in any genre, mood, or style for your projects."
      icon={Music}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start creating music"
      ctaDescription="Try our AI music generator free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
