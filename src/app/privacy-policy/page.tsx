'use client';

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-sm leading-7 text-muted-foreground">
      <h1 className="text-3xl font-bold text-foreground mb-6">
        Privacy Policy for Sudais Azlan Portfolio
      </h1>

      <p className="mb-4 italic">Last updated: June 22, 2025</p>

      <p className="mb-4">
        This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service, and explains your privacy rights and how the law protects you.
      </p>

      <p className="mb-4">
        By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Interpretation and Definitions</h2>
      <p className="mb-4">
        Words with capitalized initials have meanings defined below and hold the same meanings whether singular or plural.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">Definitions</h3>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Company:</strong> Refers to Sudais Azlan Portfolio.</li>
        <li><strong>Cookies:</strong> Small files stored on your device used to track usage.</li>
        <li><strong>Personal Data:</strong> Information that identifies an individual.</li>
        <li><strong>Usage Data:</strong> Data collected automatically (e.g., IP address, browser info).</li>
        <li><strong>Website:</strong> Refers to Sudais Azlan Portfolio, accessible at <Link href="https://www.sudaisazlan.pro" className="underline text-primary" target="_blank">https://www.sudaisazlan.pro</Link></li>
        <li><strong>You:</strong> The user accessing the Service.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Types of Data Collected</h2>
      <h3 className="text-lg font-medium mb-2">Personal Data</h3>
      <p className="mb-4">
        We may collect your email, name, and usage data via contact forms or third-party tools such as Google Analytics and Google AdSense.
      </p>

      <h3 className="text-lg font-medium mb-2">Usage Data</h3>
      <p className="mb-4">
        Automatically collected data includes your device’s IP address, browser type, visited pages, timestamps, and diagnostic logs.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Tracking Technologies and Cookies</h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to monitor website activity and enhance your experience. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Use of Your Personal Data</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>To provide and maintain the Service</li>
        <li>To communicate updates or respond to inquiries</li>
        <li>To personalize your experience</li>
        <li>For internal analytics and improvements</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>You may request access to, correction of, or deletion of your personal data.</li>
        <li>You can disable cookies at any time in your browser settings.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Children's Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect data from users under age 13. If you believe your child has provided us with personal data, please contact us and we will promptly remove it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy occasionally. Any changes will be posted on this page along with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <ul className="pl-5 space-y-2 mb-4">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sudaisazlan09@gmail.com?subject=Privacy%20Inquiry"
            className="underline text-primary hover:text-primary/80 transition"
          >
            sudaisazlan09@gmail.com
          </a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <Link
            href="/contact"
            className="underline text-primary hover:text-primary/80 transition"
          >
            https://www.sudaisazlan.pro/contact
          </Link>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+923129136013"
            className="underline text-primary hover:text-primary/80 transition"
          >
            +92 312 9136013
          </a>
        </li>
      </ul>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block text-sm text-primary underline hover:text-primary/80 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
