"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Bot,
  Database,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { agentFeatures } from "@/lib/navigation";
import { useSmoothScroll, useMountAnimations, useScrollAnimations } from "@/lib/scroll-setup";

const agentColors = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-blue-500",
];

const useCases = [
  "Customer Support",
  "Sales Qualification",
  "Appointment Scheduling",
  "Technical Support",
  "Order Tracking",
  "Product Recommendations",
];

export default function AgentsPage() {
  useSmoothScroll();
  useMountAnimations();
  useScrollAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="gs-fade-in max-w-4xl">
              <Badge variant="secondary" className="mb-6">
                <Sparkles className="h-3 w-3 mr-1" />
                SAIVA Agents
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[0.95]">
                Deploy conversational AI
                <br />
                that sounds human
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Configure, deploy, and monitor AI agents across voice, chat, and video channels.
                Connected to your knowledge base, APIs, and enterprise systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-6 text-base w-full sm:w-auto">
                    Start building <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base w-full sm:w-auto">
                    Contact sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="gs-fade-up text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Everything you need to build agents
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From testing to deployment, SAIVA Agents provides all the tools
                you need to build and manage conversational AI.
              </p>
            </div>
            <div className="gs-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentFeatures.map((feature, i) => (
                <div key={feature.title} className="gs-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <Link href={feature.href}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agentColors[i]} flex items-center justify-center mb-4 shadow-lg`}>
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="gs-fade-up text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Built for every use case
              </h2>
            </div>
            <div className="gs-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {useCases.map((useCase) => (
                <div key={useCase} className="gs-fade-up flex items-center gap-3 bg-muted/50 p-4 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Demo */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="gs-fade-left">
                <Badge variant="outline" className="border-gray-700 text-gray-300 mb-6">
                  Integrations
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Connect to everything
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Your agents can access custom knowledge bases, call external APIs,
                  query enterprise databases, and browse the internet.
                </p>
                <ul className="space-y-4">
                  {["Custom knowledge bases", "External APIs", "Enterprise databases", "Real-time internet"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gs-fade-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="h-5 w-5 text-violet-400" />
                        <span className="font-medium text-sm">Agent Query</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        &quot;What are the current pricing plans?&quot;
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-blue-400" />
                        <span className="font-medium text-sm">Knowledge Base</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Retrieving pricing information from documentation...
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-emerald-400" />
                        <span className="font-medium text-sm">Response</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        &quot;We offer Free, Starter, Creator, and Pro plans starting from $0...&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-black text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <div className="gs-scale-in">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Ready to deploy your first agent?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Start building conversational AI agents in minutes. No credit card required.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base">
                  Get started for free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
