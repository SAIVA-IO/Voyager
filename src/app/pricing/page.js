"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { useSmoothScroll, useMountAnimations, useScrollAnimations } from "@/lib/scroll-setup";

const plans = [
  {
    name: "Free",
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for trying out SAIVA",
    features: [
      "10,000 characters TTS/month",
      "1 hour STT/month",
      "3 voice clones",
      "100 agent minutes/month",
      "Chat channel only",
      "SAIVA watermark",
      "Community support",
    ],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: 10,
    yearlyPrice: 8.5,
    description: "For individual creators and small teams",
    features: [
      "100,000 characters TTS/month",
      "5 hours STT/month",
      "10 voice clones",
      "1,000 agent minutes/month",
      "Voice + Chat channels",
      "Commercial license",
      "No watermark",
      "Email support",
    ],
    cta: "Choose Starter",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    monthlyPrice: 20,
    yearlyPrice: 17,
    description: "For professional creators and growing teams",
    features: [
      "500,000 characters TTS/month",
      "25 hours STT/month",
      "Professional voice cloning",
      "5,000 agent minutes/month",
      "All channels (Voice, Chat, Video)",
      "Knowledge base integration",
      "Priority support",
      "Advanced analytics",
      "API access",
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthlyPrice: null,
    yearlyPrice: null,
    description: "For large organizations with custom needs",
    features: [
      "Unlimited characters TTS",
      "Unlimited STT",
      "Custom voice cloning",
      "Unlimited agent minutes",
      "Unlimited agents",
      "Custom integrations",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Account manager",
      "SSO & SAML",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all plans have a free tier so you can try before you buy. No credit card required to get started.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and enterprise customers can pay via invoice.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, we offer a 14-day money-back guarantee for all paid plans. Contact support for assistance.",
  },
  {
    question: "What happens when I exceed my plan limits?",
    answer: "You'll receive a notification when you reach 80% of your limits. If you exceed them, you can either upgrade your plan or pay for additional usage at standard rates.",
  },
];

function PricingCard({ plan, isYearly }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const Icon = plan.icon;

  return (
    <div className="gs-fade-up">
      <Card
        className={`h-full relative overflow-visible ${
          plan.popular
            ? "border-2 border-black shadow-xl scale-[1.02]"
            : "border border-gray-200"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-black text-white px-5 py-1.5 text-xs font-semibold rounded-full shadow-lg whitespace-nowrap block">
              Most popular
            </span>
          </div>
        )}
        <CardContent className="p-8 flex flex-col h-full">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                plan.popular ? "bg-black text-white" : "bg-gray-100 text-gray-600"
              }`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
              {plan.description}
            </p>
            <div className="flex items-baseline gap-1">
              {price !== null ? (
                <>
                  <span className="text-5xl font-bold">${price}</span>
                  <span className="text-muted-foreground">/month</span>
                </>
              ) : (
                <span className="text-5xl font-bold">Custom</span>
              )}
            </div>
            {isYearly && price !== null && price > 0 && (
              <p className="text-sm text-emerald-600 mt-2 font-medium">
                Save ${Math.round((plan.monthlyPrice - plan.yearlyPrice) * 12)}/year
              </p>
            )}
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-black" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
              <Button
                className={`w-full py-6 text-base font-medium ${
                  plan.popular
                    ? "bg-black text-white hover:bg-neutral-800"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  useSmoothScroll();
  useMountAnimations();
  useScrollAnimations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="gs-fade-in text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                Simple, transparent pricing
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Flexible pricing
                <br />
                for your needs
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Start for free, scale as you grow. No hidden fees, no surprises.
              </p>

              {/* Monthly/Yearly Toggle */}
              <div className="inline-flex items-center bg-gray-100 rounded-full p-1 relative">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                    !isYearly ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isYearly ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly
                </button>
                <div
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-black rounded-full transition-all duration-300 ease-in-out ${
                    isYearly ? "left-[calc(50%+2px)]" : "left-1"
                  }`}
                />
              </div>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-0">
                Save 15%
              </Badge>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="gs-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="gs-fade-up text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Frequently asked questions
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-0 divide-y divide-gray-200 pricing-faq">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-0"
                  >
                    <AccordionTrigger className="text-left font-medium py-5 px-2 hover:no-underline gap-1">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 pl-2 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
