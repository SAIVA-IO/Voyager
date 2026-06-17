"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Check, Terminal } from "lucide-react";
import { Mic } from "lucide-react";
import { useMountAnimations } from "@/lib/scroll-setup";

const codeExample = `// Generate speech with TTS API
const response = await fetch("https://api.saiva.io/v1/tts", {
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
});

const audio = await response.blob();`;

const endpoints = [
  { method: "POST", path: "/v1/tts", desc: "Generate speech from text" },
  { method: "GET", path: "/v1/voices", desc: "List available voices" },
  { method: "POST", path: "/v1/tts/stream", desc: "Stream speech generation" },
];

export default function TTSApiPage() {
  useMountAnimations();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="gs-fade-in max-w-3xl">
              <Link href="/api" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to SAIVA API
              </Link>
              <Badge variant="secondary" className="mb-6">
                <Mic className="h-3 w-3 mr-1" /> TTS API
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Text to Speech API
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Generate natural-sounding speech from text in 45+ languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button className="bg-black text-white hover:bg-neutral-800 px-8">
                    Get API key <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/api">
                  <Button variant="outline" className="px-8">
                    View all endpoints
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Code Example</h2>
                <div className="bg-[#0d0d0d] rounded-2xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-gray-500">tts-example.js</span>
                  </div>
                  <pre className="text-gray-300 leading-relaxed whitespace-pre">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
                <div className="space-y-4">
                  {endpoints.map((ep) => (
                    <Card key={ep.path}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Badge className={`${
                            ep.method === "POST" ? "bg-emerald-500" : "bg-blue-500"
                          } text-white`}>
                            {ep.method}
                          </Badge>
                          <code className="font-mono text-sm">{ep.path}</code>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{ep.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {["29+ AI voices", "45+ languages", "SSML support", "Real-time streaming"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
