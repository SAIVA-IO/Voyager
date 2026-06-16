"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Waves, Mic, FileText, Users, Clock, CheckCircle } from "lucide-react";

const capabilities = [
  { icon: Waves, title: "High Accuracy", desc: "Industry-leading transcription accuracy", color: "from-blue-500 to-cyan-500" },
  { icon: Mic, title: "Speaker Detection", desc: "Identify and label different speakers", color: "from-violet-500 to-purple-600" },
  { icon: FileText, title: "Punctuation", desc: "Automatic punctuation and formatting", color: "from-emerald-500 to-teal-500" },
  { icon: Users, title: "Multi-speaker", desc: "Support for multiple concurrent speakers", color: "from-orange-500 to-red-500" },
  { icon: Clock, title: "Timestamps", desc: "Word-level and sentence-level timestamps", color: "from-pink-500 to-rose-500" },
  { icon: CheckCircle, title: "45+ Languages", desc: "Transcribe audio in any language", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "99%+ word accuracy rate",
  "Automatic language detection",
  "Speaker diarization (who said what)",
  "Word-level timestamps",
  "Support for audio/video files",
  "Real-time streaming transcription",
];

const useCases = [
  "Meeting transcription",
  "Podcast transcription",
  "Video subtitles",
  "Call center analytics",
  "Medical transcription",
  "Legal transcription",
];

export default function SpeechToTextPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Studio"
      title="Speech to Text"
      description="Accurate transcription with speaker detection, punctuation, and timestamps in 45+ languages."
      icon={Waves}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start transcribing audio"
      ctaDescription="Try our speech-to-text API free. No credit card required."
      parentLink="/studio"
      parentLabel="Back to SAIVA Studio"
    />
  );
}
