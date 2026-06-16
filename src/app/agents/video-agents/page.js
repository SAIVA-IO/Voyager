"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Video, Globe, Mic, Users, Shield, BarChart3 } from "lucide-react";

const capabilities = [
  { icon: Video, title: "Face-to-Face", desc: "Video-based AI interactions", color: "from-violet-500 to-purple-600" },
  { icon: Globe, title: "Multilingual", desc: "Support 45+ languages", color: "from-emerald-500 to-teal-500" },
  { icon: Mic, title: "Natural Voice", desc: "Human-like voice and expressions", color: "from-blue-500 to-cyan-500" },
  { icon: Users, title: "Meetings", desc: "Join video calls as an agent", color: "from-orange-500 to-red-500" },
  { icon: Shield, title: "Professional", desc: "Business-ready appearance", color: "from-pink-500 to-rose-500" },
  { icon: BarChart3, title: "Analytics", desc: "Track video interactions", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Face-to-face video interactions",
  "Support for 45+ languages",
  "Integration with Zoom, Teams, Meet",
  "Real-time transcription",
  "Meeting summaries and action items",
  "Custom appearance and personality",
];

const useCases = [
  "Virtual consultations",
  "Video meetings",
  "Customer onboarding",
  "Training sessions",
  "Healthcare consultations",
  "Legal consultations",
];

export default function VideoAgentsPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Agents"
      title="Video Agents"
      description="Face-to-face AI agents for meetings, consultations, and customer interactions."
      icon={Video}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start building video agents"
      ctaDescription="Try SAIVA Agents free. No credit card required."
      parentLink="/agents"
      parentLabel="Back to SAIVA Agents"
    />
  );
}
