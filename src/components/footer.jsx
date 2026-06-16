import Link from "next/link";
import Image from "next/image";
import { studioFeatures, agentFeatures, apiFeatures } from "@/lib/navigation";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <Image
                src="/logo.png"
                alt="SAIVA"
                width={100}
                height={32}
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered voice platform for creators and developers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              SAIVA Studio
            </h3>
            <ul className="space-y-2.5">
              {studioFeatures.map((feature) => (
                <li key={feature.href}>
                  <Link
                    href={feature.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              SAIVA Agents
            </h3>
            <ul className="space-y-2.5">
              {agentFeatures.map((feature) => (
                <li key={feature.href}>
                  <Link
                    href={feature.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              SAIVA API
            </h3>
            <ul className="space-y-2.5">
              {apiFeatures.map((feature) => (
                <li key={feature.href}>
                  <Link
                    href={feature.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Big SAIVA SVG */}
      <div className="w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex justify-center">
            <Image
              src="/SAIVA-gray.svg"
              alt="SAIVA"
              width={800}
              height={120}
              className="w-full max-w-4xl h-auto opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SAIVA. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Engineered with <span className="text-red-500">&hearts;</span> in India
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
