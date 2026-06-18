"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@saiva.io",
    desc: "We'll respond within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "Live chat",
    value: "Available 24/7",
    desc: "Chat with our support team",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8247416366",
    desc: "Mon-Fri, 9am-6pm IST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Vijayawada, A.P, India",
    desc: "",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Have a question or want to learn more? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <info.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        <p className="text-sm font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    {submitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                        <p className="text-muted-foreground">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@company.com" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Your company" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General inquiry</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="support">Technical support</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="How can we help you?"
                            rows={5}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                          Send message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
