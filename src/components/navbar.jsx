"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { studioFeatures, agentFeatures, apiFeatures } from "@/lib/navigation";

function DropdownMenu({ label, href, features, isOpen, onMouseEnterDropdown, onMouseLeaveDropdown }) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnterDropdown}
      onMouseLeave={onMouseLeaveDropdown}
    >
      <Link
        href={href}
        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </Link>
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-1 w-[400px] bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50"
          onMouseEnter={onMouseEnterDropdown}
          onMouseLeave={onMouseLeaveDropdown}
        >
          <div className="grid grid-cols-1 gap-1">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm group-hover:text-black transition-colors">
                    {feature.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {feature.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const navLinks = [
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setMenuVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuAnimating(true);
      });
    });
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMenuAnimating(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      setMenuVisible(false);
    }, 300);
  };

  const toggleMenu = () => {
    if (mobileOpen) {
      setMobileOpen(false);
      closeMenu();
    } else {
      setMobileOpen(true);
      openMenu();
    }
  };

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleMouseEnterDropdown = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeaveDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="SAIVA"
            width={100}
            height={32}
            className="h-8 w-auto group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <DropdownMenu
            label="SAIVA Studio"
            href="/studio"
            features={studioFeatures}
            isOpen={activeDropdown === "studio"}
            onMouseEnterDropdown={() => handleMouseEnterDropdown("studio")}
            onMouseLeaveDropdown={handleMouseLeaveDropdown}
          />
          <DropdownMenu
            label="SAIVA Agents"
            href="/agents"
            features={agentFeatures}
            isOpen={activeDropdown === "agents"}
            onMouseEnterDropdown={() => handleMouseEnterDropdown("agents")}
            onMouseLeaveDropdown={handleMouseLeaveDropdown}
          />
          <DropdownMenu
            label="SAIVA API"
            href="/api"
            features={apiFeatures}
            isOpen={activeDropdown === "api"}
            onMouseEnterDropdown={() => handleMouseEnterDropdown("api")}
            onMouseLeaveDropdown={handleMouseLeaveDropdown}
          />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/signin">
            <Button variant="ghost" className="font-medium text-base">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-black text-white hover:bg-neutral-800 font-medium px-5 text-base">
              Sign up
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {menuVisible && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
              menuAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          />
          <div className={`fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden overflow-y-auto shadow-xl transition-transform duration-300 ease-in-out ${
            menuAnimating ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={toggleMenu}>
                  <Image
                    src="/logo.png"
                    alt="SAIVA"
                    width={100}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <Link href="/signin" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full font-medium">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={toggleMenu}>
                  <Button className="w-full bg-black text-white hover:bg-neutral-800 font-medium">
                    Sign up
                  </Button>
                </Link>
              </div>

              <nav className="space-y-6">
                <div>
                  <Link
                    href="/studio"
                    onClick={toggleMenu}
                    className="block text-sm font-semibold text-foreground mb-3 hover:underline"
                  >
                    SAIVA Studio
                  </Link>
                  <div className="space-y-1">
                    {studioFeatures.slice(0, 5).map((feature) => (
                      <Link
                        key={feature.href}
                        href={feature.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        <feature.icon className="h-4 w-4" />
                        {feature.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="/agents"
                    onClick={toggleMenu}
                    className="block text-sm font-semibold text-foreground mb-3 hover:underline"
                  >
                    SAIVA Agents
                  </Link>
                  <div className="space-y-1">
                    {agentFeatures.slice(0, 4).map((feature) => (
                      <Link
                        key={feature.href}
                        href={feature.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        <feature.icon className="h-4 w-4" />
                        {feature.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="/api"
                    onClick={toggleMenu}
                    className="block text-sm font-semibold text-foreground mb-3 hover:underline"
                  >
                    SAIVA API
                  </Link>
                  <div className="space-y-1">
                    {apiFeatures.slice(0, 4).map((feature) => (
                      <Link
                        key={feature.href}
                        href={feature.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        <feature.icon className="h-4 w-4" />
                        {feature.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Link
                    href="/pricing"
                    onClick={toggleMenu}
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    Pricing
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
