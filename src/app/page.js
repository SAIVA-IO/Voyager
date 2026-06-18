"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TryNowSection } from "@/components/try-now";
import { GradientMesh } from "@/components/gradient-mesh";
import { StickyScrollSection } from "@/components/sticky-scroll-section";
import { useSmoothScroll, useHeroReveal, useScrollAnimations } from "@/lib/scroll-setup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play,
  Sparkles,
  Check,
  Star,
} from "lucide-react";
import { studioFeatures, agentFeatures } from "@/lib/navigation";

const trustedLogos = [
  { name: "Twilio" },
  { name: "Disney" },
  { name: "NVIDIA" },
  { name: "Meta" },
  { name: "Revolut" },
  { name: "Cisco" },
];

const testimonials = [
  {
    quote: "SAIVA has transformed how we create content. The voice quality is incredible.",
    author: "Sarah Chen",
    role: "Content Director",
    company: "TechMedia",
  },
  {
    quote: "Our customer support costs dropped 60% while satisfaction increased. The AI agents are that good.",
    author: "Marcus Williams",
    role: "VP of Operations",
    company: "GlobalRetail",
  },
  {
    quote: "The API is incredibly easy to integrate. We had it running in production within a day.",
    author: "Aisha Patel",
    role: "Lead Developer",
    company: "AppForge",
  },
];

const stats = [
  { value: "45+", label: "Languages" },
  { value: "1M+", label: "API calls daily" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2K+", label: "Developers" },
];

function SplitText({ text, className = "" }) {
  return (
    <span className={`hero-title-word ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ opacity: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  useSmoothScroll();
  useHeroReveal();
  useScrollAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
          <main className="flex-1">
            {/* Hero Section */}
            <section id="hero" className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-[90vh] flex items-center">
              <GradientMesh />
              <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-1 lg:order-none">
                    <div className="hero-badge" style={{ opacity: 0 }}>
                      <Badge variant="secondary" className="mb-6 text-sm">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Now with emotional AI voices
                      </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[0.95]">
                      <SplitText text="Voice" /><br />
                      <SplitText text="intelligence" />
                    </h1>
                    <div className="hero-subtitle hidden md:block" style={{ opacity: 0 }}>
                      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                        Powering the best enterprises, creators, and developers. From conversational
                        agents for customer experience, to content creation with the leading AI voice platform.
                      </p>
                    </div>
                  </div>

                  <div className="order-2 lg:order-none hero-image" style={{ opacity: 0 }}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 gs-parallax" data-speed="0.2">
                      <Image
                        src="/dashboard.png"
                        alt="SAIVA Dashboard"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>

                  <div className="order-3 lg:order-none hero-cta" style={{ opacity: 0 }}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/signup" className="w-full sm:w-auto">
                        <Button size="lg" className="bg-black text-white hover:bg-neutral-800 px-8 py-6 text-base w-full">
                          Sign up for free
                        </Button>
                      </Link>
                      <Link href="/contact" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="px-8 py-6 text-base w-full">
                          Contact sales
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Bar */}
            <section id="stats" className="border-y border-border bg-white gs-parallax" data-speed="0.05">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
                <div className="gs-stagger grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Try Now Section */}
            <div id="try-now" className="gs-fade-up">
              <TryNowSection />
            </div>

            {/* Product Showcase - SAIVA Studio */}
            <section id="studio" className="py-20 md:py-28">
              <StickyScrollSection
                title={<>Create, edit and localize<br />in one AI platform</>}
                subtitle="Generate ultra-realistic speech, turn ideas into videos, compose music in any genre, or design immersive sound effects. All powered by cutting-edge AI."
                badge="SAIVA Studio"
                features={studioFeatures}
                accentColor="violet"
              />
            </section>

            {/* Interactive Demo Section */}
            <section id="demo" className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black text-white">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="gs-fade-left">
                    <Badge variant="outline" className="border-gray-700 text-gray-300 mb-6">
                      Interactive Demo
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                      Listen to the future of voice
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      Experience our ultra-realistic AI voices. From narration to conversational,
                      each voice is crafted to sound naturally human.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/signup">
                        <Button className="bg-white text-black hover:bg-neutral-100">
                          <Play className="mr-2 h-4 w-4" /> Try it yourself
                        </Button>
                      </Link>
                      <Link href="/studio">
                        <Button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-colors">
                          Explore all voices
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="gs-fade-right">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 gs-parallax" data-speed="0.15">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                        <div>
                          <div className="font-medium">Listen to Sarah</div>
                          <div className="text-sm text-gray-400">Narration • English</div>
                        </div>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full mb-2">
                        <div className="h-full w-3/5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mb-6">
                        <span>1:24</span>
                        <span>2:15</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                        {["Narration", "Conversational", "News"].map((voice) => (
                          <div key={voice} className="bg-white/10 rounded-xl p-3 text-center text-sm hover:bg-white/20 transition-colors cursor-pointer truncate">
                            {voice}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SAIVA Agents Section */}
            <section id="agents" className="py-20 md:py-28 bg-white">
              <StickyScrollSection
                title={<>Deploy conversational AI<br />that sounds human</>}
                subtitle="Configure, deploy, and monitor AI agents across voice, chat, and video channels. Connected to your knowledge base, APIs, and enterprise systems."
                badge="SAIVA Agents"
                features={agentFeatures}
                accentColor="emerald"
              />
            </section>

            {/* Omnichannel support showcase */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="bg-muted rounded-3xl p-8 md:p-12 gs-fade-up">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Omnichannel support</h3>
                      <p className="text-muted-foreground mb-6">
                        Deploy agents across every channel your customers use. One agent, everywhere.
                      </p>
                      <ul className="space-y-3">
                        {["Voice Call", "Chat Widget", "Video Call", "WhatsApp", "Mobile App"].map((channel) => (
                          <li key={channel} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-emerald-500" />
                            <span>{channel}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm gs-parallax" data-speed="0.12">
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div className="bg-muted rounded-2xl rounded-tl-none p-3 text-sm">
                            Hi! How can I help you today?
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end">
                          <div className="bg-black text-white rounded-2xl rounded-tr-none p-3 text-sm">
                            I need help with my order
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                            <span className="text-xs font-medium">U</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div className="bg-muted rounded-2xl rounded-tl-none p-3 text-sm">
                            I&apos;d be happy to help! Let me look up your order...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center gs-fade-up">
                  <Link href="/agents">
                    <Button size="lg" className="bg-black text-white hover:bg-neutral-800 px-8">
                      Try SAIVA Agents <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* SAIVA API Section */}
            <section id="api" className="py-16 md:py-24 bg-muted/30">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="gs-fade-left">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-600" />
                      <span className="text-sm font-medium text-muted-foreground">SAIVA API</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                      Build anything with
                      <br />
                      our API
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Integrate AI voices into your applications with our simple, powerful API.
                      Pay per second of audio generated. No upfront costs.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {["Simple REST API", "SDKs for Python, Node.js, Go", "Real-time streaming", "Pay per second used"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <Link href="/api">
                        <Button variant="outline" className="px-6">
                          View documentation
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button className="bg-black text-white hover:bg-neutral-800 px-6">
                          Get API key
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full min-w-0 gs-fade-right">
                    <div className="bg-[#0d0d0d] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm overflow-x-auto gs-parallax" data-speed="0.15">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-gray-500">api.js</span>
                      </div>
                      <pre className="text-gray-300 leading-relaxed whitespace-pre">
                        <code>{`// Generate speech with SAIVA API
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
// Play the audio or save it`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 md:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-16 gs-fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Loved by developers
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    See what our customers have to say
                  </p>
                </div>
                <div className="gs-stagger grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial) => (
                    <Card key={testimonial.author} className="h-full">
                      <CardContent className="p-6">
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-black" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Trusted By - HIDDEN FOR NOW
            <section className="py-16 md:py-20 border-y border-border">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gs-fade-up">
                  <p className="text-lg text-muted-foreground">
                    Trusted by leading developers and enterprises
                  </p>
                  <Link href="/about" className="text-sm font-medium hover:underline mt-2 md:mt-0">
                    Read all stories →
                  </Link>
                </div>
                <div className="gs-stagger flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40">
                  {trustedLogos.map((logo) => (
                    <div key={logo.name} className="text-xl font-bold text-gray-900">
                      {logo.name}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            */}

            {/* CTA Section */}
            <section id="cta" className="py-20 md:py-28 bg-black text-white">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 gs-scale-in gs-parallax" data-speed="0.1">
                  Get started with
                  <br />
                  SAIVA today
                </h2>
                <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto gs-fade-up">
                  Join thousands of developers and creators using SAIVA to build
                  the future of voice technology. Start for free, no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center gs-fade-up">
                  <Link href="/signup">
                    <Button size="lg" className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base w-full sm:w-auto">
                      Start for free
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button size="lg" className="bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-6 text-base w-full sm:w-auto">
                      View pricing
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
