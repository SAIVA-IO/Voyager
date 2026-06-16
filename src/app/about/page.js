"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Globe, Users, Zap, Shield, Heart, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-driven",
    desc: "We believe voice technology should be accessible to everyone, everywhere.",
  },
  {
    icon: Users,
    title: "User-first",
    desc: "Every decision we make starts with our users and their needs.",
  },
  {
    icon: Shield,
    title: "Trust & safety",
    desc: "We're committed to responsible AI and protecting user privacy.",
  },
  {
    icon: Heart,
    title: "Passion for quality",
    desc: "We obsess over making our technology the best it can be.",
  },
];

const stats = [
  { value: "45+", label: "Languages supported" },
  { value: "2K+", label: "Developers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "1M+", label: "API calls daily" },
];

const team = [
  { name: "Bharani Yeleswarapu", role: "CEO & Founder" },
  { name: "Kavya Yeleswarapu", role: "Head of Design" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">About SAIVA</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Bringing technology
              <br />
              to life
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              We&apos;re building the future of voice technology. Our mission is to make
              AI voices accessible, natural, and useful for everyone.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Our story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    SAIVA was founded with a simple idea: voice technology should be
                    accessible to everyone. We started building AI voices that sound
                    natural and can speak any language.
                  </p>
                  <p>
                    Today, we power some of the most innovative applications in the
                    world. From customer support agents to content creation tools,
                    our technology helps businesses and creators bring their ideas to life.
                  </p>
                  <p>
                    We&apos;re a team of researchers, engineers, and designers who are
                    passionate about building the future of voice technology.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
                <Globe className="h-32 w-32 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              Our values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              Leadership team
            </h2>
            <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Join us in building the future
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented people who share our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                  Contact us
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" className="border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-600 w-full sm:w-auto">
                  Get started
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
