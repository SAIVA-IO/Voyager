"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance = null;

export function useSmoothScroll() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (initialized.current) return;
    initialized.current = true;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    lenisInstance = lenis;

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
      initialized.current = false;
    };
  }, []);
}

export function useHeroReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const titleLines = document.querySelectorAll(".hero-title-word");
    titleLines.forEach((word, i) => {
      const letters = word.querySelectorAll("span");
      tl.fromTo(
        letters,
        { opacity: 0, filter: "blur(12px)", y: 8 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.6, stagger: 0.03 },
        i * 0.2
      );
    });

    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.1
    );

    tl.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.8
    );

    tl.fromTo(
      ".hero-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      1.0
    );

    tl.fromTo(
      ".hero-image",
      { opacity: 0, x: 40, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8 },
      0.6
    );

    return () => {
      tl.kill();
    };
  }, []);
}

export function useMountAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const elements = gsap.utils.toArray(".gs-fade-in");
    elements.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    });
  }, []);
}

export function useScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const fadeElements = gsap.utils.toArray(".gs-fade-up");
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const fadeLeftElements = gsap.utils.toArray(".gs-fade-left");
    fadeLeftElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const fadeRightElements = gsap.utils.toArray(".gs-fade-right");
    fadeRightElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const scaleElements = gsap.utils.toArray(".gs-scale-in");
    scaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    if (!isMobile) {
      const parallaxElements = gsap.utils.toArray(".gs-parallax");
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0.15;
        gsap.fromTo(
          el,
          { y: 60 * speed },
          {
            y: -60 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }

    const staggerGroups = gsap.utils.toArray(".gs-stagger");
    staggerGroups.forEach((group) => {
      const children = group.children;
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
