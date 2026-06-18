"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";
import { apiFeatures } from "@/lib/navigation";
import { useSmoothScroll, useMountAnimations, useScrollAnimations } from "@/lib/scroll-setup";

const apiColors = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-yellow-500",
];

const apiPrices = [
  "From $0.01/1K chars",
  "From $0.006/min",
  "From $0.10/min",
  "From $0.05/min",
  "From $0.10/sec",
  "From $0.05/ea",
];

const features = [
  "Simple REST API",
  "SDKs for Python, Node.js, Go",
  "Real-time streaming",
  "99.9% uptime SLA",
  "Pay per second used",
  "No minimum commitment",
];

const codeExample = `// Generate speech with SAIVA API
const response = await fetch(
  "https://api.saiva.io/v1/tts",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "Hello, welcome to SAIVA!",
      voice_id: "sarah",
      model_id: "turbo_v2"
    })
  }
);

const audio = await response.blob();
// Play the audio or save it`;

export default function ApiPage() {
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
                SAIVA API
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[0.95]">
                Build anything with
                <br />
                our API
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Integrate AI voices into your applications with our simple, powerful API.
                Pay per second of audio generated. No upfront costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-6 text-base w-full sm:w-auto">
                    Get API key <span className="ml-2">→</span>
                  </Button>
                </Link>
                <Link href="#docs">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base w-full sm:w-auto">
                    View documentation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="gs-fade-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Simple integration
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Get started in minutes with our REST API. Use our SDKs for
                  Python, Node.js, or Go, or call the API directly.
                </p>
                <ul className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Link href="/api#docs">
                    <Button variant="outline" className="px-6">
                      API Reference
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-black text-white hover:bg-black/90 px-6">
                      Get API key
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="gs-fade-right w-full min-w-0">
                <div className="bg-[#0d0d0d] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm overflow-x-auto shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-gray-500">api-example.js</span>
                  </div>
                  <pre className="text-gray-300 leading-relaxed whitespace-pre">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="gs-fade-up text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                API endpoints
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access all SAIVA capabilities through our unified API.
                Simple pricing per second of audio.
              </p>
            </div>
            <div className="gs-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {apiFeatures.map((endpoint, i) => (
                <div key={endpoint.title} className="gs-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <Link href={endpoint.href}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${apiColors[i]} flex items-center justify-center mb-4 shadow-lg`}>
                          <endpoint.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-600 transition-colors">{endpoint.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{endpoint.description}</p>
                        <div className="text-sm font-semibold text-black">{apiPrices[i]}</div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="gs-fade-left">
                <Badge variant="secondary" className="mb-6">Enterprise</Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Built for scale
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Enterprise-grade infrastructure with dedicated support,
                  custom SLAs, and volume discounts.
                </p>
                <ul className="space-y-4">
                  {["Dedicated infrastructure", "Custom SLAs", "Volume discounts", "Priority support", "SSO & SAML"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gs-fade-right">
                <div className="bg-muted rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Monthly volume</span>
                      <span className="font-semibold text-lg">1M+ seconds</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Dedicated rate</span>
                      <span className="font-semibold text-lg">$0.008/sec</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Savings</span>
                      <span className="font-semibold text-lg text-emerald-600">Up to 20%</span>
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
                Start building with SAIVA API
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Get your API key in seconds and start integrating AI voices today.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base">
                  Get API key <span className="ml-2">→</span>
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
