"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { BarChart3, TrendingUp, Users, Clock, Download, Bell } from "lucide-react";

const capabilities = [
  { icon: BarChart3, title: "Dashboard", desc: "Real-time analytics dashboard", color: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, title: "Trends", desc: "Track performance over time", color: "from-violet-500 to-purple-600" },
  { icon: Users, title: "User Insights", desc: "Understand user behavior", color: "from-emerald-500 to-teal-500" },
  { icon: Clock, title: "Real-time", desc: "Live data and metrics", color: "from-orange-500 to-red-500" },
  { icon: Download, title: "Exports", desc: "Export data and reports", color: "from-pink-500 to-rose-500" },
  { icon: Bell, title: "Alerts", desc: "Custom alerts and notifications", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Real-time analytics dashboard",
  "Conversation metrics and trends",
  "Customer satisfaction tracking",
  "Agent performance scoring",
  "Custom report generation",
  "API access for custom analytics",
];

const useCases = [
  "Performance monitoring",
  "Quality assurance",
  "Customer insights",
  "Operational optimization",
  "Compliance tracking",
  "ROI measurement",
];

export default function AnalyticsPage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Agents"
      title="Analytics"
      description="Track success rates, customer satisfaction, and optimize your flows over time."
      icon={BarChart3}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start tracking analytics"
      ctaDescription="Try SAIVA Agents free. No credit card required."
      parentLink="/agents"
      parentLabel="Back to SAIVA Agents"
    />
  );
}
