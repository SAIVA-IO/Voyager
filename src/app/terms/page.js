"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the SAIVA platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms apply to all visitors, users, and others who access or use the Service.`,
  },
  {
    title: "2. Description of Service",
    content: `SAIVA provides an AI-powered voice platform that includes text-to-speech, speech-to-text, voice cloning, dubbing, and conversational AI agent services. The Service is provided "as is" and may be modified, updated, or discontinued at any time without notice.`,
  },
  {
    title: "3. User Accounts",
    content: `To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    title: "4. Acceptable Use",
    content: `You agree not to use the Service to: (a) violate any applicable law or regulation; (b) infringe the rights of any third party; (c) generate content that is harmful, misleading, or fraudulent; (d) attempt to gain unauthorized access to the Service; (e) use the Service for any illegal purpose.`,
  },
  {
    title: "5. Content and Intellectual Property",
    content: `You retain ownership of any content you submit to the Service. By submitting content, you grant SAIVA a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with the Service. You represent that you have all necessary rights to grant this license.`,
  },
  {
    title: "6. Privacy",
    content: `Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.`,
  },
  {
    title: "7. Payment and Billing",
    content: `Certain features of the Service require payment. You agree to pay all fees associated with your use of the Service. Fees are non-refundable except as expressly set forth in these Terms. We reserve the right to change our fees at any time with notice.`,
  },
  {
    title: "8. Termination",
    content: `We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever. Upon termination, your right to use the Service will cease immediately.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `In no event shall SAIVA be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.`,
  },
  {
    title: "10. Disclaimer",
    content: `The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising out of these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.`,
  },
  {
    title: "12. Changes to Terms",
    content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions about these Terms, please contact us at legal@saiva.io or visit our Contact page.`,
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Terms of Service
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
