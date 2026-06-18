"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StickyScrollSection({
  title,
  subtitle,
  badge,
  features,
  accentColor = "violet",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef([]);
  const ctxRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (ctxRef.current) ctxRef.current.revert();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (prefersReduced || isMobile) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.set(card, { opacity: 0, y: 60 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, wrapperRef);

    ctxRef.current = ctx;
    return () => ctx.revert();
  }, [features.length]);

  const colorMap = {
    violet: {
      bg: "from-violet-500 to-purple-600",
      text: "text-violet-600",
      dot: "bg-violet-500",
    },
    emerald: {
      bg: "from-emerald-500 to-teal-500",
      text: "text-emerald-600",
      dot: "bg-emerald-500",
    },
  };

  const colors = colorMap[accentColor] || colorMap.violet;

  return (
    <>
      {/* Desktop */}
      <div ref={wrapperRef} className="hidden lg:block relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex gap-16">
            {/* Left column — pinned, vertically centered */}
            <div ref={leftRef} className="w-1/2">
              <div className="h-screen flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div
                    className={`h-3 w-3 rounded-full bg-gradient-to-r ${colors.bg}`}
                  />
                  <span className="text-sm font-medium text-muted-foreground">
                    {badge}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  {title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
                  {subtitle}
                </p>

                {/* Progress dots */}
                <div className="flex items-center gap-2">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-400 ${
                        i === activeIndex
                          ? `w-10 ${colors.dot}`
                          : "w-1.5 bg-muted-foreground/20"
                      }`}
                    />
                  ))}
                </div>

                <Link href={features[0].href} className="mt-6 inline-block">
                  <button className="bg-black text-white hover:bg-neutral-800 font-medium px-6 py-3 rounded-lg transition-colors">
                    Get started{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column — tall scrolling cards */}
            <div className="w-1/2 py-[50vh]">
              <div className="flex flex-col">
                {features.map((feature, i) => (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    ref={(el) => (cardsRef.current[i] = el)}
                    className="group block min-h-[50vh] flex items-center"
                  >
                    <div className="w-full py-10 px-4 rounded-3xl transition-all duration-500 border border-transparent hover:border-border/30 hover:bg-muted/20 cursor-pointer">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-violet-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        Explore{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className={`h-3 w-3 rounded-full bg-gradient-to-r ${colors.bg}`}
            />
            <span className="text-sm font-medium text-muted-foreground">
              {badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group block"
            >
              <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
