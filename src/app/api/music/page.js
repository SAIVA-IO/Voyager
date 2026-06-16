"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Check, Music } from "lucide-react";

const endpoints = [
  { method: "POST", path: "/v1/music/generate", desc: "Generate music from text prompt" },
  { method: "GET", path: "/v1/music/:id", desc: "Check generation status" },
  { method: "GET", path: "/v1/music/:id/download", desc: "Download generated track" },
];

export default function MusicApiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <Link href="/api" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to SAIVA API
              </Link>
              <Badge variant="secondary" className="mb-6"><Music className="h-3 w-3 mr-1" /> Music API</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Music API</h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">Generate original music via API.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup"><Button className="bg-black text-white hover:bg-neutral-800 px-8">Get API key <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                <Link href="/api"><Button variant="outline" className="px-8">View all endpoints</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
                <div className="space-y-4">
                  {endpoints.map((ep) => (
                    <Card key={ep.path}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-emerald-500 text-white">{ep.method}</Badge>
                          <code className="font-mono text-sm">{ep.path}</code>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{ep.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Features</h3>
                <ul className="space-y-2">
                  {["Any genre", "Custom tempo and key", "Commercial rights", "High quality"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
