"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { useSmoothScroll, useMountAnimations, useScrollAnimations } from "@/lib/scroll-setup";

export function FeaturePageLayout({
  badge,
  badgeColor,
  title,
  description,
  icon: Icon,
  features,
  capabilities,
  useCases,
  ctaTitle,
  ctaDescription,
  parentLink,
  parentLabel,
}) {
  useSmoothScroll();
  useMountAnimations();
  useScrollAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="gs-fade-in max-w-3xl">
              <Link
                href={parentLink}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {parentLabel}
              </Link>
              <Badge variant="secondary" className="mb-6">
                <Icon className="h-3 w-3 mr-1" />
                {badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[0.95]">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-black text-white hover:bg-neutral-800 px-8 py-6 text-base w-full sm:w-auto">
                    Try for free <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base w-full sm:w-auto">
                    View pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Grid Preview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="gs-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => (
                <div className="gs-fade-up">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color || "from-gray-500 to-gray-700"} flex items-center justify-center mb-4 shadow-lg`}>
                        <cap.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="gs-fade-left">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Key features
                </h2>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gs-fade-right">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        {useCases && useCases.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="gs-fade-up text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Built for every use case
                </h2>
              </div>
              <div className="gs-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {useCases.map((useCase) => (
                  <div className="gs-fade-up flex items-center gap-3 bg-muted/50 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="gs-scale-in">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {ctaTitle}
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                {ctaDescription}
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base">
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
