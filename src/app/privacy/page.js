"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, payment information, and any content you submit to our platform.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use your information to provide, maintain, and improve our services; to process transactions; to send you technical notices and support messages; and to communicate with you about products, services, and events.`,
  },
  {
    title: "3. Audio Data",
    content: `When you use our text-to-speech, voice cloning, or dubbing services, we process audio data to provide these features. We do not use your audio data to train our models unless you explicitly opt in. Audio data is stored securely and deleted according to our data retention policies.`,
  },
  {
    title: "4. Information Sharing",
    content: `We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our platform, and as required by law or to protect our rights.`,
  },
  {
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide you services. We will also retain your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.`,
  },
  {
    title: "7. Your Rights",
    content: `You have the right to access, correct, or delete your personal information. You may also have the right to port your data and to restrict processing. To exercise these rights, please contact us at privacy@saiva.io.`,
  },
  {
    title: "8. Cookies",
    content: `We use cookies and similar technologies to maintain your session and remember your preferences. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of the Service.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`,
  },
  {
    title: "10. International Transfers",
    content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at privacy@saiva.io or visit our Contact page.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-2">
              Last updated: January 1, 2025
            </p>
            <Separator className="my-8" />
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
