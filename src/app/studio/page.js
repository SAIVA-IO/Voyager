"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Globe, Sparkles } from "lucide-react";
import { studioFeatures } from "@/lib/navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const studioColors = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-yellow-500",
  "from-indigo-500 to-blue-500",
  "from-cyan-500 to-teal-500",
  "from-rose-500 to-pink-500",
];

const languages = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese",
  "Hindi", "Japanese", "Korean", "Chinese", "Arabic", "Russian",
  "Dutch", "Swedish", "Polish", "Turkish", "Thai", "Vietnamese",
  "Indonesian", "Malay", "Ukrainian", "Czech", "Romanian", "Danish",
  "Finnish", "Norwegian", "Greek", "Hungarian", "Hebrew", "Bengali",
  "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Malayalam",
  "Punjabi", "Urdu", "Filipino", "Swahili", "Tagalog", "Catalan",
  "Basque", "Galician", "Icelandic",
];

export default function StudioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Badge variant="secondary" className="mb-6">
                <Sparkles className="h-3 w-3 mr-1" />
                SAIVA Studio
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[0.95]">
                Create, edit and localize
                <br />
                in one AI platform
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Create ultra-realistic speech, turn ideas into videos, compose music in any genre,
                or design immersive sound effects. All in 45+ languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-6 text-base w-full sm:w-auto">
                    Try for free <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base w-full sm:w-auto">
                    View pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Everything you need to create
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From text-to-speech to video generation, SAIVA Studio has all the tools
                you need to bring your ideas to life.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {studioFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link href={feature.href}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${studioColors[i]} flex items-center justify-center shadow-lg`}>
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Listen to our voices
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Experience the most natural AI voices available. From narration to
                  conversational, each voice is crafted to sound naturally human.
                </p>
                <Link href="/signup">
                  <Button className="bg-white text-black hover:bg-white/90 px-6">
                    <Play className="mr-2 h-4 w-4" /> Try it yourself
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
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
                  <div className="grid grid-cols-3 gap-3">
                    {["Narration", "Conversational", "News"].map((voice) => (
                      <div key={voice} className="bg-white/10 rounded-xl p-3 text-center text-sm hover:bg-white/20 transition-colors cursor-pointer">
                        {voice}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium text-muted-foreground">Global Reach</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                45+ languages supported
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create content in virtually any language with native-quality voices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {languages.slice(0, 30).map((lang, i) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-muted/80 transition-colors cursor-default"
                >
                  {lang}
                </motion.div>
              ))}
              <div className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                +{languages.length - 30} more
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-black text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Start creating with SAIVA Studio
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Try it free today. No credit card required.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base">
                  Get started for free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
