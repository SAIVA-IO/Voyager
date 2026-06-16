"use client";

import { FeaturePageLayout } from "@/components/feature-page-layout";
import { Server, FileText, Search, Zap, Shield, RefreshCw } from "lucide-react";

const capabilities = [
  { icon: Server, title: "Any Source", desc: "Connect to any data source", color: "from-pink-500 to-rose-500" },
  { icon: FileText, title: "Documents", desc: "Upload and process documents", color: "from-violet-500 to-purple-600" },
  { icon: Search, title: "RAG", desc: "Retrieval-augmented generation", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Instant", desc: "Real-time knowledge retrieval", color: "from-orange-500 to-red-500" },
  { icon: Shield, title: "Secure", desc: "Enterprise-grade security", color: "from-emerald-500 to-teal-500" },
  { icon: RefreshCw, title: "Auto-update", desc: "Knowledge base auto-sync", color: "from-amber-500 to-yellow-500" },
];

const features = [
  "Connect to any document source",
  "PDF, DOCX, and text support",
  "Real-time knowledge retrieval",
  "Automatic content indexing",
  "Version control and updates",
  "Access control and permissions",
];

const useCases = [
  "Customer support",
  "Internal documentation",
  "Product knowledge",
  "HR policies",
  "Legal documents",
  "Technical documentation",
];

export default function KnowledgeBasePage() {
  return (
    <FeaturePageLayout
      badge="SAIVA Agents"
      title="Knowledge Base"
      description="Connect agents to your documents, FAQs, and product information."
      icon={Server}
      capabilities={capabilities}
      features={features}
      useCases={useCases}
      ctaTitle="Start building your knowledge base"
      ctaDescription="Try SAIVA Agents free. No credit card required."
      parentLink="/agents"
      parentLabel="Back to SAIVA Agents"
    />
  );
}
